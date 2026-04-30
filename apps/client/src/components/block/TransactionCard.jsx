import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const truncatedSx = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };

const TxInSection = ({ txIns }) => (
  <>
    {txIns.map((txIn, index) => {
      if (!txIn.txOutId)
        return <Typography key={index}>COINBASE (Newly Generate Coins)</Typography>;

      return (
        <Box key={txIn.txOutId + index}>
          <Typography noWrap sx={truncatedSx}>
            txOutId : {txIn.txOutId}
          </Typography>

          <Typography>txOutIndex : {txIn.txOutIndex}</Typography>
          {index < txIns.length - 1 && <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />}
        </Box>
      );
    })}
  </>
);

const TxOutSection = ({ txOuts }) => (
  <>
    {txOuts.map((txOut, index) => (
      <Box key={txOut.address + index}>
        <Typography noWrap sx={truncatedSx}>
          address : {txOut.address}
        </Typography>
        <Typography>amount : {txOut.amount}</Typography>
        {index < txOuts.length - 1 && <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />}
      </Box>
    ))}
  </>
);

const TransactionCard = ({ transactions }) => (
  <>
    {transactions.map((tx) => (
      <Accordion key={tx.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`tx-${tx.id}-content`}
          id={`tx-${tx.id}-header`}
          sx={{ '& .MuiAccordionSummary-content': { minWidth: 0, overflow: 'hidden' } }}
        >
          <Typography noWrap sx={truncatedSx}>
            ID : {tx.id}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <TxInSection txIns={tx.txIns ?? []} />
        </AccordionDetails>

        <AccordionDetails sx={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowCircleDownIcon />
        </AccordionDetails>

        <AccordionDetails>
          <TxOutSection txOuts={tx.txOuts ?? []} />
        </AccordionDetails>
      </Accordion>
    ))}
  </>
);

export default TransactionCard;
