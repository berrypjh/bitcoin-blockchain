import { Grid } from '@mui/material';

import MainCard from '@/components/ui/MainCard';
import UnspentTransaction from '@/components/transaction/UnspentTransaction';
import MyTransaction from '@/components/transaction/MyTransaction';

const TransactionPage = () => (
  <Grid container spacing={2}>
    <Grid size={{ xs: 12, md: 6 }}>
      <MainCard>
        <UnspentTransaction />
      </MainCard>
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <MainCard>
        <MyTransaction />
      </MainCard>
    </Grid>
  </Grid>
);

export default TransactionPage;
