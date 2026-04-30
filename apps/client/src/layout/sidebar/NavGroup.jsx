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
      sx={{ display: 'flex', flexDirection: 'row', p: 0 }}
      subheader={
        item.title && (
          <Typography
            variant="caption"
            sx={{ ...theme.typography.menuCaption }}
            display="block"
            gutterBottom
          >
            {item.title}
            {item.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
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

export default NavGroup;
