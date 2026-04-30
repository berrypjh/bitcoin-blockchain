import { Box, Divider, Typography } from '@mui/material';

const truncatedSx = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };

const TxItemList = ({ title, items }) => (
  <>
    <Typography
      variant="body1"
      component="div"
      sx={{ fontSize: '1rem', fontWeight: 500, color: '#868f96' }}
    >
      {title}
    </Typography>

    <Divider sx={{ mt: 1.25, mb: 1.25 }} />

    {items.map((item, index) => (
      <Box key={item.txOutId + item.txOutIndex}>
        <Typography noWrap sx={truncatedSx}>
          txOutId : {item.txOutId}
        </Typography>

        <Typography>txOutIndex : {item.txOutIndex}</Typography>

        <Typography>amount : {item.amount}</Typography>

        {index < items.length - 1 && <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />}
      </Box>
    ))}
  </>
);

export default TxItemList;
