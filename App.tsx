import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens'
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

