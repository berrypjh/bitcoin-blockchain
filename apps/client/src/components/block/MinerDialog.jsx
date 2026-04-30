import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from '@mui/material';
import { getMinerAddress } from '@/api/blocks';
import StyledBreadcrumb from '@/components/StyledBreadcrumb';

const MinerDialog = ({ block }) => {
  const minerAddress = block.body[0].txOuts[0].address;
  const [open, setOpen] = useState(false);
  const [minerInfo, setMinerInfo] = useState({});

  const handleOpen = () => {
    if (!minerAddress) return;
    getMinerAddress(minerAddress).then(setMinerInfo);
    setOpen(true);
  };

  return (
    <>
      <StyledBreadcrumb component="a" onClick={handleOpen} label="Miner" />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="miner-dialog-title"
        aria-describedby="miner-dialog-description"
        slotProps={{ paper: { sx: { minWidth: 360 } } }}
      >
        <DialogTitle id="miner-dialog-title">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="subtitle1" component="span">
              Miner
            </Typography>
          </Box>
        </DialogTitle>

        <Divider />

        <DialogContent id="miner-dialog-description" sx={{ px: 3, py: 1.5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box>
              <Typography
                sx={{ fontSize: '0.85rem', fontWeight: 600 }}
                color="text.secondary"
                gutterBottom
              >
                주소
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace',
                  wordBreak: 'break-all',
                  bgcolor: 'action.hover',
                  borderRadius: 1,
                  px: 1.5,
                  py: 1,
                }}
              >
                {minerAddress}
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: '0.85rem', fontWeight: 600 }}
                color="text.secondary"
                gutterBottom
              >
                잔액
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace',
                  bgcolor: 'action.hover',
                  borderRadius: 1,
                  px: 1.5,
                  py: 1,
                }}
              >
                {minerInfo.balance ?? '-'} BTC
              </Typography>
            </Box>
          </Box>
        </DialogContent>

        <Divider />

        <DialogActions sx={{ px: 3, py: 1.5 }}>
          <Button onClick={() => setOpen(false)} variant="outlined" size="small">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MinerDialog;
