import { createTheme } from '@mui/material/styles';
import colors from './colors';
import typography from './typography';
import components from './components';

const theme = createTheme({
  palette: {
    ...colors,
  },
  typography: {
    allVariants: {
      color: colors.primary.main,
    },
    ...typography,
  },
  components: {
    ...components,
  },
});

export default theme;
