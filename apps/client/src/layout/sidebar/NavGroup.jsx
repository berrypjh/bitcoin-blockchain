import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { List, Typography } from '@mui/material';

import NavItem from './NavItem';

const NavGroup = ({ item }) => {
  const theme = useTheme();

  const items = item.children?.map((menu) => {
    if (menu.type === 'item') return <NavItem key={menu.id} item={menu} level={1} />;
    return (
      <Typography key={menu.id} variant="h6" color="error" align="center">
        Menu Items Error
      </Typography>
    );
  });

  return (
    <List
      subheader={
        item.title && (
          <Typography
            variant="caption"
            sx={{ ...theme.typography.menuCaption }}
            display="inline-block"
            gutterBottom
          >
            {item.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="inline-block"
                gutterBottom
              >
                {item.caption}
              </Typography>
            )}
          </Typography>
        )
      }
    >
      {items}
    </List>
  );
};

NavGroup.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    caption: PropTypes.string,
    children: PropTypes.array,
  }),
};

export default NavGroup;
