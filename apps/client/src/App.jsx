import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { store } from './store';
import theme from './themes';
import AppRoutes from './routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
