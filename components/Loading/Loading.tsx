import LoadingButton from '@mui/lab/LoadingButton';
export const LoadingScreen = () => {
    return (
        <LoadingButton loading loadingIndicator="Loading…" variant="text">
          Fetch data
        </LoadingButton>
    );
};