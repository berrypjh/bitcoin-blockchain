import { useState } from 'react';

import { Grid } from '@mui/material';
import BlocksCard from '@/components/block/BlocksCard';
import TransactionCard from '@/components/block/TransactionCard';

const BlockDefault = () => {
  const [Blocks] = useState([]);
  const [Transaction, setTransaction] = useState([]);

  const data = { Blocks, setTransaction };

  // useEffect(() => {
  //   Axios.get('/api/blocks').then((response) => {
  //     setBlocks(response.data);
  //   });
  // }, [Time]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <BlocksCard data={data} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TransactionCard Transaction={Transaction} />
        </Grid>
      </Grid>
    </>
  );
};

export default BlockDefault;
