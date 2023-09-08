import React, { useEffect, useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import Character from '@/components/Character/Character';
import { MainLayout } from '@/components/layouts/MainLayout';
import StarWarsPeople from '@/components/People/people';
import { LoadingScreen } from '@/components/Loading/Loading';
import { StartData } from './data';

const Home = () => {
  const [formData, setFormData] = useState({
    characterIdValue: '',
    characterIdError: '',
    isCharacterIdValid: false,
  });
  const [starWarsCharacter, setStarWarsCharacter] = useState(StartData);
  const [starWarsPeople, setStarWarsPeople] = useState(null);



  const getStarWarsPeople = async () => {
    setStarWarsPeople(null);
    setStarWarsCharacter(null);
    try {
      const response = await fetch(
        `https://swapi.dev/api/people`
      );
      const payload = await response.json();

      if (payload && response.ok) {
        setStarWarsPeople(payload.results);
        
      }
    } catch (error: any) {
      console.error(error);
    }
  };
  const getStarWarsCharacterById = async (characterId: string) => {
    setStarWarsPeople(null);
    setStarWarsCharacter(null);
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/${characterId}`
      );
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

  /**
   * Validates the entered star wars character id.
   * @param {Object} e - Event object.
   */
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

  /**
   * Called when the data in the form changes. (i.e., when the character id changes).
   * @param {Object} e - Event object.
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Submits the form.
   * @param {Object} e - Event object.
   */
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
            <Character starWarsCharacter={starWarsCharacter} />
            ) : (
                ''

        )}
        {(starWarsCharacter == null && starWarsPeople == null) ? (
            <LoadingScreen />
            ) : (
                ''

        )}
      </Container>
      
    </MainLayout>
  );
};

export default Home;
