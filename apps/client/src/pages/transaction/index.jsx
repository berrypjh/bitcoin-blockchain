import { Grid } from '@mui/material';
import { useState } from 'react';

import MainCard from '@/components/MainCard';
import MyTransactionPage from '@/components/transaction/MyTransaction';
import UnspentTransactionPage from '@/components/transaction/UnspentTransaction';

const UnspentTransactionDefault = () => {
  const [Time] = useState('');

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard>
            <UnspentTransactionPage Time={Time} />
          </MainCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <MainCard>
            <MyTransactionPage Time={Time} />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default UnspentTransactionDefault;
