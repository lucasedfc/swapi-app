import { MainLayout } from '@/components/layouts/MainLayout'
import { useState } from 'react';
import { Button, Grid, Container, TextField } from '@mui/material';
import StarWarsPlanets from '@/components/Planets/planets';
import { LoadingScreen } from '@/components/Loading/Loading';
import PlanetDetail from '@/components/Planets/PlanetDetail';


export default function PlanetsPage() {

  const [formData, setFormData] = useState({
    planetTermValue: '',
    planetTermError: '',
    isplanetTermValid: false,
  });
  const [starWarsPlanet, setStarWarsPlanet] = useState<any>(null);
  const [starWarsPlanets, setStarWarsPlanets] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const getStarWarsPlanets = async ( ) => {    
    setStarWarsPlanet(null);
    setStarWarsPlanets(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/planets`
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
  const getStarWarsplanetByTerm = async (term: string) => {
    console.log(term);
    
    setStarWarsPlanets(null);
    setStarWarsPlanet(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/planets/${term}`
      );
      const payload = await response.json();
      setLoading(false);     

      if (payload && response.ok) {
        setStarWarsPlanet(payload);
      } else {
        setFormData({
          ...formData,
          planetTermError: 'Try another planet name or id.',
          isplanetTermValid: false,
        });
      }
    } catch (error: any) {
      setLoading(false);
      setFormData({
        ...formData,
        planetTermError: 'Something went wrong. Please try again.',
        isplanetTermValid: false,
      });
    }
  };

  const validateFormData = () => {
    return formData.isplanetTermValid;
  };

  const validate = (e: any) => {
    if (e.target.value === '' || e.target.value === null) {
      formData['planetTermError'] = 'planet term is required';
      formData['isplanetTermValid'] = false;
    } else {
      formData['planetTermError'] = '';
      formData['isplanetTermValid'] = true;
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
      getStarWarsplanetByTerm(formData.planetTermValue);
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
                id='planetTermValue'
                name='planetTermValue'
                label='Search by name or id'
                variant='outlined'
                autoComplete='off'
                value={formData.planetTermValue}
                error={!formData.isplanetTermValid}
                helperText={formData.planetTermError}
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
            <PlanetDetail planet={starWarsPlanet} />
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
