import {
  IconHome,
  IconWallet,
  IconCurrencyBitcoin,
  IconCirclePlus,
} from '@tabler/icons-react';

const menuItems = {
  items: [
    {
      id: 'main',
      type: 'group',
      children: [
        {
          id: 'default',
          title: '개요',
          type: 'item',
          url: '/',
          icon: IconHome,
          breadcrumbs: false,
        },
        {
          id: 'transaction',
          title: '거래내역',
          type: 'item',
          url: '/transaction',
          icon: IconWallet,
          breadcrumbs: false,
        },
        {
          id: 'block',
          title: '블록생성',
          type: 'item',
          url: '/block',
          icon: IconCurrencyBitcoin,
          breadcrumbs: false,
        },
        {
          id: 'peer',
          title: '연결',
          type: 'item',
          url: '/peer',
          icon: IconCirclePlus,
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default menuItems;
