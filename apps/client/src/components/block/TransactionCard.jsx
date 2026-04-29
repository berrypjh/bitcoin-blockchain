import PropTypes from 'prop-types';
import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TxInSection = ({ tx }) => {
  const TxInArray = tx.txIns;
  return (
    <>
      {TxInArray &&
        TxInArray.map((txIn, index) => {
          if (!txIn.txOutId) return <>COINBASE (Newly Gemerate Coins)</>;
          return (
            <>
              <Typography>txOutId : {txIn.txOutId.match(/.{10}/g).join('\n')}</Typography>
              <Typography>txOutIndex : {txIn.txOutIndex}</Typography>
              {TxInArray.length - 1 > index && (
                <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />
              )}
            </>
          );
        })}
    </>
  );
};

TxInSection.propTypes = {
  tx: PropTypes.shape({
    txIns: PropTypes.array,
  }),
};

const TxOutSection = ({ tx }) => {
  const TxOutArray = tx.txOuts;
  return (
    <>
      {TxOutArray &&
        TxOutArray.map((txOut, index) => (
          <>
            <Typography>address : {txOut.address.match(/.{10}/g).join('\n')}</Typography>
            <Typography>amount : {txOut.amount}</Typography>
            {TxOutArray.length - 1 > index && (
              <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />
            )}
          </>
        ))}
    </>
  );
};

TxOutSection.propTypes = {
  tx: PropTypes.shape({
    txOuts: PropTypes.array,
  }),
};

const TransactionCard = ({ Transaction }) => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => setExpanded((prev) => !prev);

  return (
    <>
      {Transaction &&
        Transaction.map((tx) => (
          <Accordion expanded={expanded} onChange={handleChange} key={tx.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ID - {tx.id.match(/.{10}/g).join('\n')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TxInSection tx={tx} />
            </AccordionDetails>
            <AccordionDetails style={{ textAlign: 'center' }}>
              <ArrowCircleDownIcon />
            </AccordionDetails>
            <AccordionDetails>
              <TxOutSection tx={tx} />
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};

TransactionCard.propTypes = {
  Transaction: PropTypes.array,
};

export default TransactionCard;
