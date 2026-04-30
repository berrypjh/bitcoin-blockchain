import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Box, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { getAddress } from '@/api/dashboard';

const MainAddress = () => {
  const [myAddress, setMyAddress] = useState('');

  useEffect(() => {
    getAddress().then(setMyAddress);
  }, []);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography
        variant="body1"
        noWrap
        sx={{
          fontSize: '1rem',
          fontWeight: 500,
          color: '#868f96',
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {myAddress}
      </Typography>

      <CopyToClipboard text={myAddress}>
        <ContentCopyIcon sx={{ flexShrink: 0, cursor: 'pointer', color: '#868f96' }} />
      </CopyToClipboard>
    </Box>
  );
};

export default MainAddress;
