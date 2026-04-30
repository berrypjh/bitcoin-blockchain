import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { FormControl, TextField, Typography } from '@mui/material';
import { getBalance, addTransaction } from '@/api/dashboard';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const TransactionDefault = ({ setFlag }) => {
  const [SendAddress, setSendAddress] = useState('');
  const [Amount, setAmount] = useState('');
  const [State, setState] = useState({
    successOpen: false,
    errorOpen: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [Balance, setBalance] = useState(0);

  const { vertical, horizontal, successOpen, errorOpen } = State;

  useEffect(() => {
    getBalance().then(setBalance);
  }, []);

  const newState = {
    vertical: 'top',
    horizontal: 'center',
  };

  const onSubmitAddBlock = (e) => {
    e.preventDefault();
    setFlag(false);
    addTransaction({ address: SendAddress, amount: Amount }).then((res) => {
      if (res.message === false) {
        setState({ errorOpen: true, ...newState });
        return;
      }
      setState({ successOpen: true, ...newState });
      setSendAddress('');
      setAmount('');
      setFlag(true);
    });
  };

  const onSendAddressChange = (e) => setSendAddress(e.target.value);
  const onAmountChange = (e) => setAmount(e.target.value);
  const handleClose = () => setState({ ...State, successOpen: false });
  const handleErrorClose = () => setState({ ...State, errorOpen: false });

  return (
    <>
      <Typography
        variant="body1"
        component="div"
        sx={{ mt: 1.25, fontSize: '1rem', marginBottom: '8px', fontWeight: 500, color: '#868f96' }}
      >
        사용가능 : {Balance} BTC
      </Typography>
      <form onSubmit={onSubmitAddBlock}>
        <FormControl component="div" sx={{ m: 1, width: '100%' }} variant="outlined">
          <TextField
            label="송금할 대상 :"
            autoFocus
            id="outlined-start-adornment"
            sx={{ height: '60px', width: '100%', marginLeft: '-1.5%' }}
            value={SendAddress}
            onChange={onSendAddressChange}
            placeholder={'코인 주소를 입력하세요 (예: 044f732ce133baf8bb06e21b75f9114790b...)'}
          />
        </FormControl>
        <FormControl component="div" sx={{ m: 1, width: '100%' }} variant="outlined">
          <TextField
            label="금액 :"
            id="amount"
            sx={{ height: '80px', width: '100%', marginLeft: '-1.5%' }}
            value={Amount}
            onChange={onAmountChange}
            placeholder={'0'}
          />
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="outlined"
          className="sendbutton"
          style={{ width: '100%' }}
        >
          보내기
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={successOpen}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ backgroundColor: '#20E2D7', width: '100%' }}
        >
          성공
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={errorOpen}
        key={vertical + horizontal + false}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ backgroundColor: '#ff0844', width: '100%' }}
        >
          실패
        </Alert>
      </Snackbar>
    </>
  );
};

TransactionDefault.propTypes = {
  setFlag: PropTypes.func,
};

export default TransactionDefault;
