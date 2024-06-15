import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import { Grid, MenuItem } from '@mui/material';

const logoStyle = {
  width: '140px',
  height: 'auto',
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
  }
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://marslab.com/">MarsLab&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [email, setEmail] = React.useState('');

  const SendEmail = () => {
    if (ValidEmail() && email !== '') {
      window.location.href = `mailto:jmajpopinf@gmail.com?subject=Contacto&body=Hola, mi nombre es ${email}&subject=Contacto`;
    }
  }

  const ValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        id="contact"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          id="1"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '50%' },
          }}
        >
          <Box id="1.1" sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Tienes algun proyecto en mente? No dudes en contactarme.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                type='email'
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Ingresa tu correo electrónico"
                placeholder="Tu correo electrónico"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ flexShrink: 0 }}
                disabled={!ValidEmail()}
                onClick={() => SendEmail()}
              >
                Enviar
              </Button>
            </Stack>
          </Box>
        </Box>
        
        <Grid
          container
          justifyContent='center'
          alignContent='center'
          sx={{
            opacity: 1,
            py: { xs: 4, sm: 0 },
          }}
        >
          <MenuItem onClick={() => scrollToSection('about')}>
            Acerca de mi
          </MenuItem>
          <MenuItem onClick={() => scrollToSection('skills')}>
            Habilidades
          </MenuItem>
          <MenuItem onClick={() => scrollToSection('projects')}>
            Proyectos
          </MenuItem>
          <MenuItem  onClick={() => scrollToSection('education')}>
            Educación
          </MenuItem>
          <MenuItem  onClick={() => scrollToSection('work')}>
            Empleo
          </MenuItem>
        </Grid>
        
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/jmajpopinf" target="_blank"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://x.com/MANU_AS_88" target="_blank"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/manuel-ajpop-910bb055/" target="_blank"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}