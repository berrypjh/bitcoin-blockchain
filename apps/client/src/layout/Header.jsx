import { Box } from '@mui/material';

import AddBlockCard from '@/components/block/AddBlockCard';
import LogoSection from './LogoSection';

const Header = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      px: 2,
    }}
  >
    <LogoSection />
    <AddBlockCard />
  </Box>
);

export default Header;
