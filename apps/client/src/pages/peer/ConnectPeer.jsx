import PropTypes from 'prop-types';
import { Divider, Typography } from '@mui/material';

const ConnectPeerPage = ({ SuccessPeer }) => {
  return (
    <>
      <Typography
        variant="body1"
        component="div"
        sx={{ mt: 1.25, fontSize: '1rem', fontWeight: 500, color: '#868f96' }}
      >
        연결된 피어
      </Typography>
      <Divider sx={{ mt: 0.25, mb: 0.25, marginTop: '10px' }} />

      {SuccessPeer &&
        SuccessPeer.map((peer) => (
          <Typography
            key={peer}
            variant="body1"
            component="div"
            sx={{ mt: 1.25, fontSize: '1rem', fontWeight: 500, color: '#868f96' }}
          >
            {peer}
          </Typography>
        ))}
    </>
  );
};

ConnectPeerPage.propTypes = {
  SuccessPeer: PropTypes.arrayOf(PropTypes.string),
};

export default ConnectPeerPage;
