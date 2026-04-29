import PropTypes from 'prop-types';
import { useState } from 'react';
import Axios from 'axios';
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material';
import StyledBreadcrumb from '@/components/StyledBreadcrumb';

const MinerDialog = ({ block }) => {
  const MinerAddress = block.body[0].txOuts[0].address;
  const [open, setOpen] = useState(false);
  const [MinerInfo, setMinerInfo] = useState({});

  const handleClickOpen = () => {
    if (!MinerAddress) return;
    Axios.get(`/api/address/${MinerAddress}`).then((response) => {
      setMinerInfo(response.data);
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledBreadcrumb component="a" onClick={handleClickOpen} label="Unknown" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Miner</DialogTitle>
        <DialogContentText style={{ margin: '20px' }}>
          <DialogContentText id="alert-dialog-description">
            주소 : {MinerAddress && MinerAddress.match(/.{10}/g).join('\n')}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            잔액 : {MinerInfo.balance}
          </DialogContentText>
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

MinerDialog.propTypes = {
  block: PropTypes.shape({
    body: PropTypes.array,
  }),
};

export default MinerDialog;
