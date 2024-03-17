import Header from 'components/header';
import './App.css';
import i18next from 'i18next';
import translation from 'assets/translations/en/translation.json';
import { initReactI18next } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import theme from 'theme/theme';
import Home from 'pages/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en'],
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Header />
          <main>
            <Home />
          </main>
          <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
