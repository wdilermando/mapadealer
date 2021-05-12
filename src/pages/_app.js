import { ThemeProvider } from 'styled-components';
import { Layout } from '../components';

import GlobalStyle from '../styles/globalStyles';
import 'react-modal-video/css/modal-video.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

const theme = {
  colors: {
    primary: '#203663',
    secondary: '#BA0649',
    tertiary: '#636363',
  },
  primaryDark: '#222',
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
