import { useState } from 'react';
import { mineBlock, miningBlock } from '@/api/blocks';
import { IconAxe } from '@tabler/icons-react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert, Grid } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const AddBlockCard = () => {
  const [State, setState] = useState({
    successOpen: false,
    errorOpen: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, successOpen, errorOpen } = State;

  let newState = {
    vertical: 'top',
    horizontal: 'center',
  };

  const onSubmitAddBlock = (e) => {
    e.preventDefault();
    mineBlock().then((res) => {
      setState({ ...(res.message === false ? { errorOpen: true } : { successOpen: true }), ...newState });
    });
  };

  const onSubmitAutoBlock = (e) => {
    e.preventDefault();
    miningBlock().then((res) => {
      setState({ ...(res.message === false ? { errorOpen: true } : { successOpen: true }), ...newState });
    });
  };

  const handleClose = () => {
    setState({ ...State, successOpen: false });
  };
  const handleErrorClose = () => {
    setState({ ...State, errorOpen: false });
  };

  // 체굴 1번 (보여주기 용)
  const buttons = (
    <>
      <Button
        type="submit"
        color="secondary"
        variant="text"
        className="sendbutton"
        style={{ width: '100%', display: 'inline-block', fontSize: '13px', color: 'gray' }}
      >
        <IconAxe />
      </Button>
    </>
  );

  const Autobuttons = (
    <>
      <Button
        type="submit"
        color="secondary"
        variant="text"
        className="sendbutton"
        style={{ width: '100%', display: 'inline-block', fontSize: '13px', color: 'gray' }}
      >
        <ConstructionIcon />
      </Button>
    </>
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 5, md: 9 }}></Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <form onSubmit={onSubmitAddBlock}>{buttons}</form>
        </Grid>
        <Grid size={{ xs: 2, md: 1 }}>
          <form onSubmit={onSubmitAutoBlock}>{Autobuttons}</form>
        </Grid>
      </Grid>
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
          채굴 시작!
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
          채굴 실패!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddBlockCard;
