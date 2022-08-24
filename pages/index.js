import { Button } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Container, Stack } from '@mui/system';
import colors from '../src/pages/styles/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    tertiary: {
      main: colors.tertiary,
    },
    quaternary: {
      main: colors.quaternary,
    },
  },
});




function HomePage() {
    return (

      <Stack
        margin={0}
        sx={{
          backgroundColor: 'tertiary.main',
          height: '100%',
          width: '100%',
        }}

        >
        helous
        <Button color="secondary">Outlined</Button>
      </Stack>

    )
  }

  function App() {
    return (
      // <React.StrictMode>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      // </React.StrictMode>
    );
  }

  export default App