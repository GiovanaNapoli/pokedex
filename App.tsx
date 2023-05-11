import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

