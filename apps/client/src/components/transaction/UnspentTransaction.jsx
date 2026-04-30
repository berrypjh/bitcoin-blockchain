import { useState, useEffect } from 'react';
import { getMyUnspentTransaction } from '@/api/transaction';
import TxItemList from './TxItemList';

const UnspentTransaction = () => {
  const [utxos, setUtxos] = useState([]);

  useEffect(() => {
    getMyUnspentTransaction().then(setUtxos);
  }, []);

  return <TxItemList title="사용 가능한 트랜잭션" items={utxos} />;
};

export default UnspentTransaction;
