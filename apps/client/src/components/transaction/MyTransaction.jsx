import { useState, useEffect } from 'react';

import { getMyMempool } from '@/api/transaction';
import TxItemList from './TxItemList';

const MyTransaction = () => {
  const [mempoolItems, setMempoolItems] = useState([]);

  useEffect(() => {
    getMyMempool().then(setMempoolItems);
  }, []);

  return <TxItemList title="사용 예정 트랜잭션" items={mempoolItems} />;
};

export default MyTransaction;
