import { useState } from 'react';

import { Alert, Button, FormControl, Snackbar, TextField } from '@mui/material';
import { addPeer, getPeers } from '@/api/peer';

const snackbarAnchor = { vertical: 'top', horizontal: 'center' };

const AddPeer = ({ peers, onSuccess }) => {
  const [port, setPort] = useState('');
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (peers.some((peer) => peer.endsWith(port))) {
      setWarningOpen(true);
      setPort('');
      return;
    }

    addPeer(port).then(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const updatedPeers = await getPeers();
      if (updatedPeers.some((peer) => peer.endsWith(`:${port}`))) {
        setSuccessOpen(true);
      } else {
        setErrorOpen(true);
      }
      onSuccess();
      setPort('');
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl component="div" sx={{ mb: 1, width: '100%' }} variant="outlined">
          <TextField
            label="연결 대상"
            autoFocus
            sx={{ width: '100%' }}
            value={port}
            onChange={(e) => setPort(e.target.value)}
            placeholder="P2P 포트 번호 (예: 6001)"
          />
        </FormControl>
        <Button type="submit" color="secondary" variant="outlined" sx={{ width: '100%' }}>
          연결하기
        </Button>
      </form>

      <Snackbar
        anchorOrigin={snackbarAnchor}
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
      >
        <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
          연결 성공!
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={snackbarAnchor}
        open={errorOpen}
        autoHideDuration={3000}
        onClose={() => setErrorOpen(false)}
      >
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          연결 실패!
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={snackbarAnchor}
        open={warningOpen}
        autoHideDuration={3000}
        onClose={() => setWarningOpen(false)}
      >
        <Alert onClose={() => setWarningOpen(false)} severity="warning" sx={{ width: '100%' }}>
          이미 연결된 피어입니다.
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddPeer;
