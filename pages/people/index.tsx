import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import { MainLayout } from '@/components/layouts/MainLayout';
import StarWarsPeople from '@/components/People/people';
import { LoadingScreen } from '@/components/Loading/Loading';
import SWCharacter from '@/components/People/Character';

const PeoplePage = () => {
  const [formData, setFormData] = useState({
    characterIdValue: '',
    characterIdError: '',
    isCharacterIdValid: false,
  });
  const [starWarsCharacter, setStarWarsCharacter] = useState<any>(null);
  const [starWarsPeople, setStarWarsPeople] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const getStarWarsPeople = async () => {
    
    setStarWarsPeople(null);
    setStarWarsCharacter(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/people`
      );
      setLoading(false);
      const payload = await response.json();

      if (payload && response.ok) {
        setStarWarsPeople(payload.results);
        
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
    }
  };
  const getStarWarsCharacterById = async (characterId: string) => {
    setStarWarsPeople(null);
    setStarWarsCharacter(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/people/${characterId}`
      );
      setLoading(false);
      const payload = await response.json();

      if (payload && response.ok) {
        setStarWarsCharacter(payload);
      } else {
        setFormData({
          ...formData,
          characterIdError: 'Something went wrong. Please try again.',
          isCharacterIdValid: false,
        });
      }
    } catch (error: any) {
      setLoading(false);
      setFormData({
        ...formData,
        characterIdError: 'Something went wrong. Please try again.',
        isCharacterIdValid: false,
      });
    }
  };

  const validateFormData = () => {
    return formData.isCharacterIdValid;
  };


  const validate = (e: any) => {
    const isNumberCorrect = RegExp(/^[1-9]\d*$/).test(e.target.value);
    if (e.target.value === '' || e.target.value === null) {
      formData['characterIdError'] = 'Character id is required';
      formData['isCharacterIdValid'] = false;
    } else if (!isNumberCorrect) {
      formData['characterIdError'] = 'Please enter a valid number';
      formData['isCharacterIdValid'] = false;
    } else {
      formData['characterIdError'] = '';
      formData['isCharacterIdValid'] = true;
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateFormData()) {
      setStarWarsCharacter(null);
      getStarWarsCharacterById(formData.characterIdValue);
    }
  };

  return (
    <MainLayout>
      <Container>
        <form
          onSubmit={submit}
          noValidate
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                type='text'
                id='characterIdValue'
                name='characterIdValue'
                label='Character Id'
                variant='outlined'
                autoComplete='off'
                value={formData.characterIdValue}
                error={!formData.isCharacterIdValid}
                helperText={formData.characterIdError}
                onChange={onChange}
                margin='normal'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={3} sm={2} md={2} lg={2}>
              <Button
                type='submit'
                variant='contained'
                size='large'
                disabled={!validateFormData()}
                sx={{ marginTop: '15px', height: '56px' }}
                fullWidth
              >
                Search
              </Button>
            </Grid>
            <Grid item xs={3} sm={2} md={2} lg={2}>
              <Button
                onClick={getStarWarsPeople}
                size='large'
                variant="outlined"
                sx={{ marginTop: '15px', height: '56px' }}
                fullWidth
              >
                List All
              </Button>
            </Grid>
          </Grid>
        </form>
        {(starWarsCharacter == null && starWarsPeople !== null) ? (
            < StarWarsPeople starWarsPeople={starWarsPeople} />
            ) : (
            ''
            )}
        {(starWarsCharacter !== null) ? (
            <SWCharacter starWarsCharacter={starWarsCharacter} />
            ) : (
                ''

        )}
        {(isLoading) ? (
            <LoadingScreen />
            ) : (
                ''

        )}
      </Container>
      
    </MainLayout>
  );
};

export default PeoplePage;
