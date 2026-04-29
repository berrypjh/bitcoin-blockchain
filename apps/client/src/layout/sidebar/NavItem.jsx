import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const RouterLink = forwardRef(({ to, target, ...props }, ref) => (
  <Link ref={ref} {...props} to={to} target={target} />
));
RouterLink.displayName = 'RouterLink';
RouterLink.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
};

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
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
        display: 'inline-block',
        marginLeft: '-10px',
      }}
    >
      <ListItemIcon>
        {itemIcon}
        <ListItemText
          sx={{ pl: `${level * 4}px`, pr: `${level * 8}px` }}
          primary={
            <Typography variant="h5" color="inherit">
              {item.title}
            </Typography>
          }
        />
      </ListItemIcon>
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.elementType,
    target: PropTypes.bool,
    external: PropTypes.bool,
    url: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
  }),
  level: PropTypes.number,
};

export default NavItem;
