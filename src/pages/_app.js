import { ThemeProvider } from 'styled-components';
import { Layout } from '../components';
import GlobalStyle from '../styles/globalStyles';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
const theme = {
  colors: {
    primary: '#0070f3',
  },
  primaryDark: '#0D0C1D',
  primaryLight: '#fff',
  primaryHover: '#343078',
  mobile: '576px',
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
