import { Route, Routes } from 'react-router-dom';

import MainLayout from '../layout';
import Dashboard from '../views/dashboard';
import BlockDefault from '../views/Block';
import TransactionDefault from '../views/UnspentTransaction';
import PeerDefault from '../views/Peer';

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
