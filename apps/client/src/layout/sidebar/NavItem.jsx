import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const RouterLink = forwardRef(({ to, target, ...props }, ref) => (
  <Link ref={ref} {...props} to={to} target={target} />
));
RouterLink.displayName = 'RouterLink';

const NavItem = ({ item, level }) => {
  const Icon = item.icon;
  const itemIcon = item?.icon ? <Icon stroke={1.5} size="1.3rem" /> : <FiberManualRecordIcon />;
  const itemTarget = item.target ? '_blank' : '_self';

  const listItemProps = item?.external
    ? { component: 'a', href: item.url, target: itemTarget }
    : { component: RouterLink, to: item.url, target: itemTarget };

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        pl: `${level * 24}px`,
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
      }}
    >
      <ListItemIcon>{itemIcon}</ListItemIcon>

      <ListItemText
        primary={
          <Typography variant="h5" color="inherit">
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default NavItem;
