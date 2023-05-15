import React,
{
  FC,
  useState,
  useCallback,
  ReactElement,
} from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {
  appRoutes,
} from '../../routes';
import {
  NavLink,
} from 'react-router-dom';

const Navbar: FC = (): ReactElement => {
  const [ anchorElNav, setAnchorElNav ] = useState(null);

  const handleOpenNavMenu = useCallback((event: any) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.main',
      }}
      data-cy={'simulator-navbar-box'}
    >
      <Container
        maxWidth="xl"
        data-cy={'simulator-navbar-container'}
      >
        <Toolbar
          disableGutters
          data-cy={'simulator-navbar-toolbar'}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
            data-cy={'simulator-navbar-typo-header'}
          >
            Toy Robot Simulation
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
            data-cy={'simulator-navbar-menu-box'}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              data-cy={'simulator-navbar-menu-icon'}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
              data-cy={'simulator-navbar-menu'}
            >
              {
                appRoutes.map((route) => (
                  route.enabled ?
                    <Link
                      key={route.key}
                      component={NavLink}
                      to={route.path}
                      color="black"
                      underline="none"
                      variant="button"
                      data-cy={`simulator-navbar-menu-link-${route.key}`}
                    >
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        data-cy={`simulator-navbar-menu-item-${route.key}`}
                      >
                        <Typography
                          textAlign="center"
                          data-cy={`simulator-navbar-menu-typo-${route.key}`}
                        >
                          {route.title}
                        </Typography>
                      </MenuItem>
                    </Link> : null
                ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
            data-cy={'simulator-navbar-menu-typo-header-small'}
          >
            Toy Robot Simulation
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
            data-cy={'simulator-navbar-menu-box-small'}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: '1rem',
              }}
              data-cy={'simulator-navbar-menu-box-routes'}
            >
              {
                appRoutes.map((route) => (
                  route.enabled ?
                    <Link
                      key={route.key}
                      component={NavLink}
                      to={route.path}
                      color="black"
                      underline="none"
                      variant="button"
                      sx={{
                        fontSize: 'large',
                        marginLeft: '2rem',
                      }}
                      data-cy={`simulator-navbar-menu-link-${route.key}`}
                    >
                      {route.title}
                    </Link> : null
                ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
