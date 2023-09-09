import { MainLayout } from '@/components/layouts/MainLayout'
import { useState } from 'react';
import { Button, Grid, Container, TextField } from '@mui/material';
import { LoadingScreen } from '@/components/Loading/Loading';
import StarWarsFilms from '@/components/Films/films';
import FilmDetail from '@/components/Films/FilmDetail';


export default function FilmsPage() {

  const [formData, setFormData] = useState({
    filmTermValue: '',
    filmError: '',
    isFilmTermValid: false,
  });
  const [starWarsFilm, setStarWarsFilm] = useState<any>(null);
  const [starWarsFilms, setStarWarsFilms] = useState(null);
  const [isLoading, setLoading] = useState(false);
  

  const getStarWarsFilms = async ( ) => {    
    setStarWarsFilm(null);
    setStarWarsFilms(null);
    setLoading(true);
    // disable list all button
    
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/films`
      );
      setLoading(false);
      const payload = await response.json();

      if (payload && response.ok) {
        setStarWarsFilms(payload.results);
        
        
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
    }
  };
  const getStarWarsFilmByTerm = async (term: string) => {
    setStarWarsFilms(null);
    setStarWarsFilm(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://swapi-nest.cyclic.cloud/api/films/${term}`
      );
      const payload = await response.json();
      setLoading(false);

      if (payload && response.ok) {
        setStarWarsFilm(payload);
      } else {
        setFormData({
          ...formData,
          filmError: 'Try another name or episode id.',
          isFilmTermValid: false,
        });
      }
    } catch (error: any) {
      setLoading(false);
      setFormData({
        ...formData,
        filmError: 'Something went wrong. Please try again.',
        isFilmTermValid: false,
      });
    }
  };

  const validateFormData = () => {
    return formData.isFilmTermValid;
  };

  const validate = (e: any) => {
    if (e.target.value === '' || e.target.value === null) {
      formData['filmError'] = 'film term is required';
      formData['isFilmTermValid'] = false;
    } else {
      formData['filmError'] = '';
      formData['isFilmTermValid'] = true;
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
      setStarWarsFilm(null);
      setStarWarsFilms(null);
      getStarWarsFilmByTerm(formData.filmTermValue);
    }
  };

  return (
    <MainLayout title={'Films'}>
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
                id='filmTermValue'
                name='filmTermValue'
                label='Search by name or episode' 
                variant='outlined'
                autoComplete='off'
                value={formData.filmTermValue}
                error={!formData.isFilmTermValid}
                helperText={formData.filmError}
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
                onClick={getStarWarsFilms}
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
        {(starWarsFilm == null && starWarsFilms !== null) ? (
            < StarWarsFilms starWarsFilms={starWarsFilms} />
            ) : (
            ''
            )}
        {(starWarsFilm !== null) ? (
            <FilmDetail film={starWarsFilm} />
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
