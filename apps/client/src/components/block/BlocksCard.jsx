import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledBreadcrumb from '@/components/StyledBreadcrumb';
import MinerDialog from './MinerDialog';

const Tx = ({ block, setTransaction }) => {
  const onClickHandler = () => setTransaction(block.body);
  return <StyledBreadcrumb component="a" onClick={onClickHandler} label={block.body.length} />;
};

Tx.propTypes = {
  block: PropTypes.shape({ body: PropTypes.array }),
  setTransaction: PropTypes.func,
};

const BlocksCard = ({ data }) => {
  const { Blocks, setTransaction } = data;

  return (
    <>
      {Blocks &&
        Blocks.map((block) => (
          <Accordion key={block.header.index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{block.header.index} 번쨰 블록</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Timestamp : {new Date(block.header.timestamp * 1000).toLocaleString()}
              </Typography>
              <Typography>Height : {block.header.index}</Typography>
              <Typography>
                Miner : &nbsp;
                {block.header.index !== 0 ? <MinerDialog block={block} /> : 'Unknown'}
              </Typography>
              <Typography>
                Number of Transactions : &nbsp;
                {block.header.index !== 0 ? (
                  <Tx block={block} setTransaction={setTransaction} />
                ) : (
                  0
                )}
              </Typography>
              <Typography>Difficulty : {block.header.difficulty}</Typography>
              <Typography>
                Merkle root : {block.header.merkleRoot.match(/.{10}/g).join('\n')}
              </Typography>
              <Typography>Version : {block.header.version}</Typography>
              <Typography>Nonce : {block.header.nonce}</Typography>
              <Typography>Block Reward : {block.body[0].txOuts[0].amount} BTC</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};

BlocksCard.propTypes = {
  data: PropTypes.shape({
    Blocks: PropTypes.array,
    setTransaction: PropTypes.func,
  }),
};

export default BlocksCard;
