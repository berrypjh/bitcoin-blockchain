import { Typography } from '@mui/material';

import NavGroup from './NavGroup';
import menuItem from './navigation';

const MenuList = () => {
  const navItems = menuItem.items.map((item) => {
    if (item.type === 'group') return <NavGroup key={item.id} item={item} />;
    return (
      <Typography key={item.id} variant="h6" color="error" align="center">
        Menu Items Error
      </Typography>
    );
  });

  return <>{navItems}</>;
};

export default MenuList;
