import { MainLayout } from '@/components/layouts/MainLayout'
import { useState } from 'react';
import { Button, Grid, Container, TextField } from '@mui/material';
import StarWarsPlanets from '@/components/Planets/planets';
import PlanetCard from '@/components/Planets/PlanetCard';
import { InitPlanet } from '../../components/Planets/data';
import { LoadingScreen } from '@/components/Loading/Loading';


export default function PlanetsPage() {

  const [formData, setFormData] = useState({
    planetIdValue: '',
    planetIdError: '',
    isplanetIdValid: false,
  });
  const [starWarsPlanet, setStarWarsPlanet] = useState<any>(InitPlanet);
  const [starWarsPlanets, setStarWarsPlanets] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const getStarWarsPlanets = async ( ) => {    
    setStarWarsPlanet(null);
    setStarWarsPlanets(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi.dev/api/planets`
      );
      setLoading(false);
      const payload = await response.json();

      if (payload && response.ok) {
        setStarWarsPlanets(payload.results);
        
        
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
    }
  };
  const getStarWarsplanetById = async (planetId: string) => {
    setStarWarsPlanets(null);
    setStarWarsPlanet(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi.dev/api/planets/${planetId}`
      );
      const payload = await response.json();
      setLoading(false);

      setStarWarsPlanet(payload);
      if (payload && response.ok) {
      } else {
        setFormData({
          ...formData,
          planetIdError: 'Something went wrong. Please try again.',
          isplanetIdValid: false,
        });
      }
    } catch (error: any) {
      setLoading(false);
      setFormData({
        ...formData,
        planetIdError: 'Something went wrong. Please try again.',
        isplanetIdValid: false,
      });
    }
  };

  const validateFormData = () => {
    return formData.isplanetIdValid;
  };

  const validate = (e: any) => {
    const isNumberCorrect = RegExp(/^[1-9]\d*$/).test(e.target.value);
    if (e.target.value === '' || e.target.value === null) {
      formData['planetIdError'] = 'planet id is required';
      formData['isplanetIdValid'] = false;
    } else if (!isNumberCorrect) {
      formData['planetIdError'] = 'Please enter a valid number';
      formData['isplanetIdValid'] = false;
    } else {
      formData['planetIdError'] = '';
      formData['isplanetIdValid'] = true;
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
      setStarWarsPlanet(null);
      setStarWarsPlanets(null);
      getStarWarsplanetById(formData.planetIdValue);
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
                id='planetIdValue'
                name='planetIdValue'
                label='Planet Id'
                variant='outlined'
                autoComplete='off'
                value={formData.planetIdValue}
                error={!formData.isplanetIdValid}
                helperText={formData.planetIdError}
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
                onClick={getStarWarsPlanets}
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
        {(starWarsPlanet == null && starWarsPlanets !== null) ? (
            < StarWarsPlanets starWarsPlanets={starWarsPlanets} />
            ) : (
            ''
            )}
        {(starWarsPlanet !== null) ? (
            <PlanetCard starWarsPlanet={starWarsPlanet} />
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
