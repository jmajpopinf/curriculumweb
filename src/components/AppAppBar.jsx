import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';


const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
  margin: '10px',
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  '/static/images/marslab2.png'
                }
                style={logoStyle}
                alt="logo"
              />
              <Typography variant="body2" color="text.primary" fontWeight="bold" fontSize="1.2rem">
                MarsLab
              </Typography>
              <Box sx={{ 
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center', // Centra los elementos horizontalmente
                  alignItems: 'center', // Centra los elementos verticalmente (opcional)
                  width: '100%' // Asegura que el contenedor ocupe todo el ancho disponible
                }}>
                <MenuItem
                  onClick={() => scrollToSection('about')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Acerda de mi
                    {/* About */}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('skills')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Habilidades
                    {/* Skills */}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('projects')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Proyectos
                    {/* Projects */}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('education')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Educación
                    {/* Education */}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('work')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Empleo
                    {/* Work */}
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('contact')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contacto
                    {/* Contact */}
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('about')}>
                    Acerca de mi
                    {/* About */}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('skills')}>
                    Habilidades
                    {/* Skills */}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('projects')}>
                    Proyectos
                    {/* Projects */}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('education')}>
                    Educación
                    {/* Education */}
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('work')}>
                    Empleo
                    {/* Work */}
                  </MenuItem>
                   <MenuItem onClick={() => scrollToSection('contact')}>
                    Contacto
                    {/* Contact */}
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;