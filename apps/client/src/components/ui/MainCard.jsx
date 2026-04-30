import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

const headerSX = {
  '& .MuiCardHeader-action': { mr: 0 },
};

const MainCard = ({
  ref,
  border = true,
  boxShadow,
  children,
  content = true,
  contentSX = {},
  darkTitle,
  secondary,
  shadow,
  sx = {},
  title,
  ...others
}) => {
  const theme = useTheme();

  return (
    <Card
      ref={ref}
      {...others}
      sx={{
        border: border ? '1px solid' : 'none',
        borderColor: theme.palette.primary[200] + 75,
        ':hover': {
          boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit',
        },
        ...sx,
      }}
    >
      {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}

      {darkTitle && title && (
        <CardHeader
          sx={headerSX}
          title={<Typography variant="h3">{title}</Typography>}
          action={secondary}
        />
      )}

      {title && <Divider />}

      {content ? <CardContent sx={contentSX}>{children}</CardContent> : children}
    </Card>
  );
};

export default MainCard;
