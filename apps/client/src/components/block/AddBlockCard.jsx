import { useState } from 'react';

import { IconAxe } from '@tabler/icons-react';
import { Alert, Button, Grid, Snackbar } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

import { mineBlock, miningBlock } from '@/api/blocks';

const snackbarAnchor = { vertical: 'top', horizontal: 'center' };

const AddBlockCard = () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleMine = () => {
    mineBlock().then((res) => {
      res.message === false ? setErrorOpen(true) : setSuccessOpen(true);
    });
  };

  const handleAutoMine = () => {
    miningBlock().then((res) => {
      res.message === false ? setErrorOpen(true) : setSuccessOpen(true);
    });
  };

  return (
    <>
      <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }}>
        <Grid size="auto">
          <Button
            onClick={handleMine}
            color="secondary"
            variant="text"
            sx={{ fontSize: '13px', color: 'gray' }}
          >
            <IconAxe />
          </Button>
        </Grid>
        <Grid size="auto">
          <Button
            onClick={handleAutoMine}
            color="secondary"
            variant="text"
            sx={{ fontSize: '13px', color: 'gray' }}
          >
            <ConstructionIcon />
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={snackbarAnchor}
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
      >
        <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
          채굴 시작!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={snackbarAnchor}
        open={errorOpen}
        autoHideDuration={3000}
        onClose={() => setErrorOpen(false)}
      >
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          채굴 실패!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddBlockCard;
