import { createTheme} from '@mui/material/styles';
import colors from '../src/components/styles/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      secondary: colors.secondary,
      tertiary: colors.tertiary,
      quaternary: colors.quaternary,
      quinary: colors.quinary,
      senary: colors.senary,
      septenary: colors.septenary,
      octonary: colors.octonary,
      nonary: colors.nonary,
    },
    secondary: {
      main: colors.login,
      secondary: colors.loginDark,
      tertiary: colors.loginLight,
      quaternary: colors.loginLight2,
      quinary: colors.sidebar,
      senary: colors.sidebarDark,
      septenary: colors.sidebarLight,
      octonary: colors.sidebarLight2,
    },
    global: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      gray2: colors.gray2,
      gray3: colors.gray3,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      purple: colors.purple,
      pink: colors.pink,
      orange: colors.orange
    },
  },
});


export default theme;