import { Route, Routes } from 'react-router-dom';

import MainLayout from '../layout';
import Dashboard from '../pages/dashboard';
import BlockDefault from '../pages/block';
import TransactionDefault from '../pages/transaction';
import PeerDefault from '../pages/peer';

const AppRoutes = () => (
  <Routes>
    <Route path="/*" element={<MainLayout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="block" element={<BlockDefault />} />
      <Route path="transaction" element={<TransactionDefault />} />
      <Route path="peer" element={<PeerDefault />} />
    </Route>
  </Routes>
);

export default AppRoutes;
