import { useState, useEffect } from 'react';

import { Alert, Button, FormControl, Snackbar, TextField, Typography } from '@mui/material';

import { getBalance, addTransaction } from '@/api/dashboard';

const snackbarAnchor = { vertical: 'top', horizontal: 'center' };

const TransactionDefault = ({ onSuccess }) => {
  const [sendAddress, setSendAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  useEffect(() => {
    getBalance().then(setBalance);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ address: sendAddress, amount }).then((res) => {
      if (res.message === false) {
        setErrorOpen(true);
        return;
      }
      setSuccessOpen(true);
      setSendAddress('');
      setAmount('');
      onSuccess();
    });
  };

  return (
    <>
      <Typography
        variant="body1"
        component="div"
        sx={{ mt: 1.25, fontSize: '1rem', mb: 1, fontWeight: 500, color: '#868f96' }}
      >
        사용가능 : {balance} BTC
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl component="div" sx={{ mb: 1, width: '100%' }} variant="outlined">
          <TextField
            label="송금할 대상"
            autoFocus
            sx={{ width: '100%' }}
            value={sendAddress}
            onChange={(e) => setSendAddress(e.target.value)}
            placeholder="코인 주소를 입력하세요 (예: 044f732ce133baf8bb06e21b75f9114790b...)"
          />
        </FormControl>

        <FormControl component="div" sx={{ mb: 2, width: '100%' }} variant="outlined">
          <TextField
            label="금액"
            sx={{ width: '100%' }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
          />
        </FormControl>

        <Button type="submit" color="secondary" variant="outlined" sx={{ width: '100%' }}>
          보내기
        </Button>
      </form>

      <Snackbar
        anchorOrigin={snackbarAnchor}
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
      >
        <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
          성공
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={snackbarAnchor}
        open={errorOpen}
        autoHideDuration={3000}
        onClose={() => setErrorOpen(false)}
      >
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          실패
        </Alert>
      </Snackbar>
    </>
  );
};

export default TransactionDefault;
