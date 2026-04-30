import { useState, useEffect, useCallback } from 'react';

import { Grid } from '@mui/material';

import MainCard from '@/components/ui/MainCard';
import AddPeer from '@/components/peer/Peer';
import PeerList from '@/components/peer/ConnectPeer';
import { getPeers } from '@/api/peer';

const PeerPage = () => {
  const [peers, setPeers] = useState([]);

  const fetchPeers = useCallback(() => {
    getPeers().then(setPeers);
  }, []);

  useEffect(() => {
    fetchPeers();
  }, [fetchPeers]);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <MainCard>
          <AddPeer peers={peers} onSuccess={fetchPeers} />
        </MainCard>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <MainCard>
          <PeerList peers={peers} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default PeerPage;
