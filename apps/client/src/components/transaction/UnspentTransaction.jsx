import { useState, useEffect } from 'react';

import { getMyUnspentTransaction } from '@/api/transaction';
import TxItemList from './TxItemList';

const UnspentTransaction = ({ version }) => {
  const [utxos, setUtxos] = useState([]);

  useEffect(() => {
    getMyUnspentTransaction().then(setUtxos);
  }, [version]);

  return <TxItemList title="사용 가능한 트랜잭션" items={utxos} />;
};

export default UnspentTransaction;
