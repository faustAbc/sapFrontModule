import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0a132b',
    },
    secondary: {
      main: '#444444',
    }
  },
  status: {
    danger: 'orange',
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
