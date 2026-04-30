import { Link } from 'react-router-dom';

import { Box, ButtonBase, Typography } from '@mui/material';

import AddBlockCard from '@/components/block/AddBlockCard';

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
    <ButtonBase disableRipple component={Link} to="/">
      <Box
        component="img"
        sx={{ height: '1em', width: '1em' }}
        alt="Berry Core"
        src="bitcoin.svg"
      />

      <Typography color="#330867" fontSize="0.5em" sx={{ pl: '4px' }}>
        Berry Core
      </Typography>
    </ButtonBase>

    <AddBlockCard />
  </Box>
);

export default Header;
