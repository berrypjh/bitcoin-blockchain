import { useState } from 'react';

import { Grid } from '@mui/material';
import BlocksCard from './BlocksCard';
import TransactionCard from './TransactionCard';
import Clock from 'react-live-clock';

const BlockDefault = () => {
  const [Blocks] = useState([]);
  const [Transaction, setTransaction] = useState([]);
  const [, setTime] = useState('');

  const data = { Blocks, setTransaction };

  // useEffect(() => {
  //   Axios.get('/api/blocks').then((response) => {
  //     setBlocks(response.data);
  //   });
  // }, [Time]);

  return (
    <>
      <Clock style={{ display: 'none' }} onChange={setTime} ticking={true} timezone={'US/Pacific'} />
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
