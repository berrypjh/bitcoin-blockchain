import { Grid } from '@mui/material';
import { useState } from 'react';
import MainCard from '@/components/MainCard';
import ConnectPeerPage from '@/components/peer/ConnectPeer';
import PeerPage from '@/components/peer/Peer';

const PeerDefault = () => {
  const [SuccessPeer, setSuccessPeer] = useState([]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard>
            <PeerPage SuccessPeer={SuccessPeer} setSuccessPeer={setSuccessPeer} />
          </MainCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard>
            <ConnectPeerPage SuccessPeer={SuccessPeer} />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default PeerDefault;
