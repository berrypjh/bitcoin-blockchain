import { useState, useEffect } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { getMyUnspentTransaction } from '@/api/transaction';

const UnspentTransactionPage = () => {
  const [MyUTXO, setMyUTXO] = useState([]);

  useEffect(() => {
    getMyUnspentTransaction().then(setMyUTXO);
  }, []);

  return (
    <>
      <Typography
        variant="body1"
        component="div"
        sx={{ mt: 1.25, fontSize: '1rem', fontWeight: 500, color: '#868f96' }}
      >
        사용 가능한 트랜잭션
      </Typography>
      <Divider sx={{ mt: 0.3, mb: 1.25, marginTop: '10px' }} />
      {MyUTXO &&
        MyUTXO.map((utxo, index) => {
          return (
            <>
              <Box key={utxo.txOutId}>
                <Typography>txOutId : {utxo.txOutId.match(/.{10}/g).join('\n')}</Typography>
                <Typography>txOutIndex : {utxo.txOutIndex}</Typography>
                <Typography>amount : {utxo.amount}</Typography>
                {MyUTXO.length - 1 > index && (
                  <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />
                )}
              </Box>
            </>
          );
        })}
    </>
  );
};

export default UnspentTransactionPage;
