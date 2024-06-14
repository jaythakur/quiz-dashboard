import '@/styles/globals.scss';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';

export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider {...props}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
