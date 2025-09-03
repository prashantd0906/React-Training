import CoffeeIcon from '@mui/icons-material/Coffee';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, {useState} from 'react';

interface DrawerLink {
  text: string;
  link: string;
}

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => (): void => {
    setDrawerOpen(open);
  };

  const drawerLinks: DrawerLink[] = [
    {text: 'Home', link: '#home'},
    {text: 'Coffee', link: '#coffee'},
  ];

  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Container>
          <Toolbar>
            <CoffeeIcon />
            <Typography
              variant="h5"
              sx={{flexGrow: 1, fontFamily: '"Eagle Lake", serif'}}
            >
              Coffee Shop
            </Typography>

            {isMobile ? (
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Button color="inherit" href="#home">
                  Home
                </Button>
                <Button color="inherit" href="#coffee">
                  Coffee
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{width: 200}}
          onClick={toggleDrawer(false)}
        >
          <List>
            {drawerLinks.map((linkItem, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={linkItem.link}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={linkItem.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
