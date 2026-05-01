import { useState, useEffect, useCallback } from 'react';

import { Grid, Typography } from '@mui/material';

import MainCard from '@/components/ui/MainCard';
import AddPeer from '@/components/peer/Peer';
import PeerList from '@/components/peer/ConnectPeer';
import { getPeers, getMyP2PPort } from '@/api/peer';
import useSSE from '@/hooks/useSSE';

const PeerPage = () => {
  const [peers, setPeers] = useState([]);
  const [myPort, setMyPort] = useState(null);

  const fetchPeers = useCallback(() => {
    getPeers().then(setPeers);
  }, []);

  useEffect(() => {
    fetchPeers();
    getMyP2PPort().then(setMyPort);
  }, [fetchPeers]);

  useSSE({ peer: fetchPeers });

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <MainCard>
          <Typography variant="body2" sx={{ color: '#868f96' }}>
            내 P2P 포트 (상대방이 이 번호로 연결)
          </Typography>
          <Typography variant="h5" sx={{ mt: 0.5, fontWeight: 600 }}>
            {myPort ?? '-'}
          </Typography>
        </MainCard>
      </Grid>

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
