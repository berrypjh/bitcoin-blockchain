import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getAddress } from '@/api/dashboard';

const MainAddressPage = () => {
  const [MyAddress, setMyAddress] = useState('');

  useEffect(() => {
    getAddress().then(setMyAddress);
  }, []);

  return (
    <>
      <Typography
        variant="body1"
        component="span"
        sx={{ mt: 1.25, fontSize: '1rem', fontWeight: 500, color: '#868f96' }}
      >
        {MyAddress && MyAddress.match(/.{50}/g).join('\n')}
      </Typography>

      <CopyToClipboard text={MyAddress} style={{ marginLeft: '10px' }}>
        <ContentCopyIcon />
      </CopyToClipboard>
    </>
  );
};

export default MainAddressPage;
