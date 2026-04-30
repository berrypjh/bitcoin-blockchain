
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';

const truncatedSx = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };

const TxOuts = ({ txOuts }) => (
  <>
    {txOuts.map((txOut, index) => (
      <Box key={index}>
        <Typography noWrap sx={truncatedSx}>address : {txOut.address}</Typography>
        <Typography>amount : {txOut.amount}</Typography>
        {index < txOuts.length - 1 && <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />}
      </Box>
    ))}
  </>
);


const TxIns = ({ txIns }) => (
  <>
    {txIns.map((txIn, index) => (
      <Box key={index}>
        <Typography noWrap sx={truncatedSx}>txOutId : {txIn.txOutId}</Typography>
        <Typography>txOutIndex : {txIn.txOutIndex}</Typography>
      </Box>
    ))}
  </>
);


const MempoolList = ({ mempools }) => (
  <>
    {mempools.map((mempool, index) => (
      <Accordion key={mempool.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`mempool-${mempool.id}-content`}
          id={`mempool-${mempool.id}-header`}
        >
          <Typography>예정된 거래내역 {index + 1}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography noWrap sx={truncatedSx}>id : {mempool.id}</Typography>
          <Divider sx={{ mt: 1.25, mb: 1.25 }} />
          <TxIns txIns={mempool.txIns ?? []} />

          <Box sx={{ textAlign: 'center', py: 1 }}>
            <ArrowCircleDownIcon />
          </Box>

          <TxOuts txOuts={mempool.txOuts ?? []} />
          <Divider sx={{ mt: 1.25, mb: 1.25 }} />
        </AccordionDetails>
      </Accordion>
    ))}
  </>
);


export default MempoolList;
