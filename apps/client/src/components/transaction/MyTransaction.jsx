import { useState, useEffect } from 'react';

import { getMyMempool } from '@/api/transaction';
import TxItemList from './TxItemList';

const MyTransaction = ({ version }) => {
  const [mempoolItems, setMempoolItems] = useState([]);

  useEffect(() => {
    getMyMempool().then(setMempoolItems);
  }, [version]);

  return <TxItemList title="사용 예정 트랜잭션" items={mempoolItems} />;
};

export default MyTransaction;
