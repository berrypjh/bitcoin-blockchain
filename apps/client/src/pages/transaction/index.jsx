import { useState } from 'react';

import { Grid } from '@mui/material';

import MainCard from '@/components/ui/MainCard';
import UnspentTransaction from '@/components/transaction/UnspentTransaction';
import MyTransaction from '@/components/transaction/MyTransaction';
import useSSE from '@/hooks/useSSE';

const TransactionPage = () => {
  const [blockVersion, setBlockVersion] = useState(0);
  const [mempoolVersion, setMempoolVersion] = useState(0);

  useSSE({
    block: () => setBlockVersion((v) => v + 1),
    mempool: () => setMempoolVersion((v) => v + 1),
  });

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <MainCard>
          <UnspentTransaction version={blockVersion} />
        </MainCard>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <MainCard>
          <MyTransaction version={mempoolVersion} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default TransactionPage;
