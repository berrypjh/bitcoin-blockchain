import { Outlet } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Divider, Toolbar } from '@mui/material';

import Header from './Header';
import Sidebar from './sidebar';

const MainLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        sx={{ bgcolor: theme.palette.background.paper }}
      >
        <Toolbar disableGutters>
          <Header />
        </Toolbar>

        <Divider sx={{ my: 0.25 }} />

        <Toolbar disableGutters sx={{ minHeight: 'unset !important', py: '2px' }}>
          <Sidebar />
        </Toolbar>

        <Divider sx={{ my: 0.25 }} />
      </AppBar>

      <Box component="main" sx={{ flex: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
