import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import StyledBreadcrumb from '@/components/StyledBreadcrumb';
import MinerDialog from './MinerDialog';

const truncatedSx = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };

const BlocksCard = ({ blocks, onSelectBlock }) => (
  <>
    {blocks.map((block) => {
      const { header, body } = block;
      const isGenesis = header.index === 0;

      return (
        <Accordion key={header.index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`block-${header.index}-content`}
            id={`block-${header.index}-header`}
          >
            <Typography>{header.index}번째 블록</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Timestamp : {new Date(header.timestamp * 1000).toLocaleString()}
            </Typography>

            <Typography>Height : {header.index}</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography component="span">Miner :</Typography>
              {isGenesis ? (
                <Typography component="span">Unknown</Typography>
              ) : (
                <MinerDialog block={block} />
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography component="span">Number of Transactions :</Typography>
              {isGenesis ? (
                <Typography component="span">0</Typography>
              ) : (
                <StyledBreadcrumb
                  component="a"
                  onClick={() => onSelectBlock(body)}
                  label={body.length}
                />
              )}
            </Box>

            <Typography>Difficulty : {header.difficulty}</Typography>

            <Typography noWrap sx={truncatedSx}>
              Merkle root : {header.merkleRoot}
            </Typography>

            <Typography>Version : {header.version}</Typography>

            <Typography>Nonce : {header.nonce}</Typography>

            <Divider sx={{ my: 1 }} />

            <Typography>Block Reward : {body[0].txOuts[0].amount} BTC</Typography>
          </AccordionDetails>
        </Accordion>
      );
    })}
  </>
);

export default BlocksCard;
