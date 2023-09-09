import { MainLayout } from '@/components/layouts/MainLayout'
import { useState } from 'react';
import { Button, Grid, Container, TextField } from '@mui/material';
import StarWarsStarships from '@/components/Starships/starships';
import { LoadingScreen } from '@/components/Loading/Loading';
import StarshipDetail from '@/components/Starships/StarshipDetail';


export default function StarshipPage() {

  const [formData, setFormData] = useState({
    starShipIdValue: '',
    starShipError: '',
    isStarshipIdValid: false,
  });
  const [starWarsStarship, setStarWarsStarship] = useState<any>(null);
  const [starWarsStarships, setStarWarsStarships] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const getStarWarsStarships = async ( ) => {    
    setStarWarsStarship(null);
    setStarWarsStarships(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/starships`
      );
      setLoading(false);
      const payload = await response.json();

      if (payload && response.ok) {
        setStarWarsStarships(payload.results);
        
        
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
    }
  };
  const getStarWarsStarshipById = async (starshipId: string) => {
    setStarWarsStarships(null);
    setStarWarsStarship(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/starships/${starshipId}`
      );
      const payload = await response.json();
      setLoading(false);

      setStarWarsStarship(payload);
      if (payload && response.ok) {
        setStarWarsStarship(payload);
      } else {
        setFormData({
          ...formData,
          starShipError: 'Something went wrong. Please try again.',
          isStarshipIdValid: false,
        });
      }
    } catch (error: any) {
      setLoading(false);
      setFormData({
        ...formData,
        starShipError: 'Something went wrong. Please try again.',
        isStarshipIdValid: false,
      });
    }
  };

  const validateFormData = () => {
    return formData.isStarshipIdValid;
  };

  const validate = (e: any) => {
    const isNumberCorrect = RegExp(/^[1-9]\d*$/).test(e.target.value);
    if (e.target.value === '' || e.target.value === null) {
      formData['starShipError'] = 'star ship id is required';
      formData['isStarshipIdValid'] = false;
    } else if (!isNumberCorrect) {
      formData['starShipError'] = 'Please enter a valid number';
      formData['isStarshipIdValid'] = false;
    } else {
      formData['starShipError'] = '';
      formData['isStarshipIdValid'] = true;
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
      setStarWarsStarship(null);
      setStarWarsStarships(null);
      getStarWarsStarshipById(formData.starShipIdValue);
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
                id='starShipIdValue'
                name='starShipIdValue'
                label='Starship Id'
                variant='outlined'
                autoComplete='off'
                value={formData.starShipIdValue}
                error={!formData.isStarshipIdValid}
                helperText={formData.starShipError}
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
                onClick={getStarWarsStarships}
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
        {(starWarsStarship == null && starWarsStarships !== null) ? (
            < StarWarsStarships starWarsStarships={starWarsStarships} />
            ) : (
            ''
            )}
        {(starWarsStarship !== null) ? (
            <StarshipDetail starship={starWarsStarship} />
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
