import { useState, useEffect, useCallback } from 'react';

import { Grid } from '@mui/material';

import MainCard from '@/components/ui/MainCard';
import MainAddress from '@/components/dashboard/MainAddress';
import MempoolList from '@/components/dashboard/Mempool';
import TransactionDefault from '@/components/dashboard/Transaction';
import { getMempool } from '@/api/dashboard';

const Dashboard = () => {
  const [mempools, setMempools] = useState([]);

  const fetchMempools = useCallback(() => {
    getMempool().then(setMempools);
  }, []);

  useEffect(() => {
    fetchMempools();
  }, [fetchMempools]);

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <MainCard title="내 지갑 주소">
          <MainAddress />
        </MainCard>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <MainCard>
          <TransactionDefault onSuccess={fetchMempools} />
        </MainCard>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <MempoolList mempools={mempools} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
