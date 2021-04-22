import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    dispDate: {
      main: '#ff9800',
      font: '#fff'
    },
    button: {
      main: '#dc004e',
      font: '#fff'
    },
    title: {
      main: '#f57c00',
      font: '#fff'
    },
    detail: {
      main: '#f57c00',
      font: '#fff'
    }
  },
  typography: {
    fontFamily: ['Robotto'].join(','),
    fontSize: 17
  }
});

export default theme;
