import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import { MainLayout } from '@/components/layouts/MainLayout';
import StarWarsPeople from '@/components/People/people';
import { LoadingScreen } from '@/components/Loading/Loading';
import SWCharacter from '@/components/People/Character';

const PeoplePage = () => {
  const [formData, setFormData] = useState({
    characterTermValue: '',
    characterTermError: '',
    isCharacterTermValid: false,
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
  const getStarWarsCharacterByTerm = async (term: string) => {
    setStarWarsPeople(null);
    setStarWarsCharacter(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/people/${term}`
      );
      setLoading(false);
      const payload = await response.json();

      if (payload && response.ok) {
        setStarWarsCharacter(payload);
      } else {
        setFormData({
          ...formData,
          characterTermError: 'Try another name or id',
          isCharacterTermValid: false,
        });
      }
    } catch (error: any) {
      setLoading(false);
      setFormData({
        ...formData,
        characterTermError: 'Something went wrong. Please try again.',
        isCharacterTermValid: false,
      });
    }
  };

  const validateFormData = () => {
    return formData.isCharacterTermValid;
  };


  const validate = (e: any) => {
    if (e.target.value === '' || e.target.value === null) {
      formData['characterTermError'] = 'Character term is required';
      formData['isCharacterTermValid'] = false;
    } else {
      formData['characterTermError'] = '';
      formData['isCharacterTermValid'] = true;
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
      getStarWarsCharacterByTerm(formData.characterTermValue);
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
                id='characterTermValue'
                name='characterTermValue'
                label='Search by name or id'
                variant='outlined'
                autoComplete='off'
                value={formData.characterTermValue}
                error={!formData.isCharacterTermValid}
                helperText={formData.characterTermError}
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
