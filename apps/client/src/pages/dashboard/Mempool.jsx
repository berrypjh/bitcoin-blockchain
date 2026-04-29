import PropTypes from 'prop-types';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const TxOuts = ({ mempool }) => {
  const txOutsArray = mempool.txOuts;
  return (
    <>
      {txOutsArray &&
        txOutsArray.map((txOut, index) => (
          <div key={index}>
            <Typography>address : {txOut.address.match(/.{50}/g).join('\n')}</Typography>
            <Typography>amount : {txOut.amount}</Typography>
            {txOutsArray.length - 1 > index && (
              <Divider variant="middle" sx={{ mt: 1.25, mb: 1.25 }} />
            )}
          </div>
        ))}
    </>
  );
};

TxOuts.propTypes = {
  mempool: PropTypes.shape({
    txOuts: PropTypes.array,
  }),
};

const TxIns = ({ mempool }) => {
  const txInsArray = mempool.txIns;
  return (
    <>
      {txInsArray &&
        txInsArray.map((txIn, index) => (
          <div key={index}>
            <Typography>txOutId : {txIn.txOutId.match(/.{10}/g).join('\n')}</Typography>
            <Typography>txOutIndex : {txIn.txOutIndex}</Typography>
          </div>
        ))}
    </>
  );
};

TxIns.propTypes = {
  mempool: PropTypes.shape({
    txIns: PropTypes.array,
  }),
};

const MempoolPage = () => {
  const [Mempools] = useState([]);

  // useEffect(() => {
  //   Axios.get('/api/transactionPool').then((response) => {
  //     setMempools(response.data);
  //   });
  // }, [props.Flag, props.Time]);

  return (
    <>
      {Mempools &&
        Mempools.map((mempool, index) => (
          <Accordion key={mempool.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>예정된 거래내역 {index + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>id : {mempool.id}</Typography>
              <Divider sx={{ mt: 1.25, mb: 1.25 }} />
              <Typography>
                <TxIns mempool={mempool} />
              </Typography>
              <AccordionDetails style={{ textAlign: 'center' }}>
                <ArrowCircleDownIcon />
              </AccordionDetails>
              <Typography>
                <TxOuts mempool={mempool} />
              </Typography>
              <Divider sx={{ mt: 1.25, mb: 1.25 }} />
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};

export default MempoolPage;
