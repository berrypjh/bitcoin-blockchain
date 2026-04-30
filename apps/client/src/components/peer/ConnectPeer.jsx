import { Divider, Typography } from '@mui/material';

const PeerList = ({ peers }) => (
  <>
    <Typography
      variant="body1"
      component="div"
      sx={{ fontSize: '1rem', fontWeight: 500, color: '#868f96' }}
    >
      연결된 피어
    </Typography>

    <Divider sx={{ mt: 1.25, mb: 1.25 }} />

    {peers.map((peer) => (
      <Typography
        key={peer}
        variant="body1"
        component="div"
        sx={{ mt: 1, fontSize: '1rem', fontWeight: 500, color: '#868f96' }}
      >
        {peer}
      </Typography>
    ))}
  </>
);

export default PeerList;
