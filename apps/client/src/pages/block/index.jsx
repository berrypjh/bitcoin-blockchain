import { useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import BlocksCard from '@/components/block/BlocksCard';
import TransactionCard from '@/components/block/TransactionCard';
import { getBlocks } from '@/api/blocks';

const BlockPage = () => {
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getBlocks().then(setBlocks);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <BlocksCard blocks={blocks} onSelectBlock={setTransactions} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TransactionCard transactions={transactions} />
      </Grid>
    </Grid>
  );
};

export default BlockPage;
