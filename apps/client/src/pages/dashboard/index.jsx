import { Grid } from '@mui/material';
import { useState } from 'react';

import MainCard from '../../components/MainCard';
import MainAddressPage from './mainAddress';
import MempoolPage from './Mempool';
import TransactionDefault from './Transaction';

const Dashboard = () => {
  const [Flag, setFlag] = useState(false);
  const [Time] = useState('');

  return (
    <>
      <Grid container spacing={2}>
        <Grid>
          <MainCard title="내 지갑 주소">
            <MainAddressPage />
          </MainCard>
        </Grid>
        <Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MainCard>
                <TransactionDefault setFlag={setFlag} Time={Time} />
              </MainCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MempoolPage Flag={Flag} Time={Time} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
