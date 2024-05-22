import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Card, Stack } from '@mui/material';
import { CastForEducationRounded, SchoolRounded } from '@mui/icons-material';

const items = [
    {
      icon: <SchoolRounded />,
      title: 'Educación Superior - Universidad Mariano Gálvez de Guatemala',
      description:
        'Ingeniería en Sistemas de Información y Ciencias de la Computación (Pensum cerrado).',
    },
    {
      icon: <SchoolRounded />,
      title: 'Educación Media - Centro de Estudios Avanzados de Chimaltenango CETACH',
      description:
        'Bachiller Industrial y Perito en Informática.',
    },
    {
      icon: <SchoolRounded />,
      title: 'Educación Básica - Colegio San Bernardino',
      description:
        'Formación académica básica.',
    },
    {
      icon: <CastForEducationRounded />,
      title: 'Certificación ReactJs - UDEMY',
      description:
        'React JS con Hooks desde cero y desarrollo de aplicaciones Web Frontend y Backend - MERN Stack',
    },
    {
      icon: <CastForEducationRounded />,
      title: 'Curso Flutter - UDEMY',
      description:
        ' Dart y Flutter, creación de aplicaciones móviles, Doman Driven Design, estructuración de proyectos expandibles, mantenibles y Clean Code',
    },
    {
      icon: <CastForEducationRounded />,
      title: 'Curso Unity - UDEMY',
      description:
        'Curso de desarrollo de videojuegos 2D y 3D con Unity3D con lenguaje de programaicón C#, aprobado por Unity',
    },
];

export default function Education() {

  return (
    <Container
      id="education"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Educación
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Información sobre mi formación profesional y educación.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Stack
                    direction="column"
                    color="inherit"
                    component={Card}
                    spacing={1}
                    useFlexGap
                    sx={{
                        p: 3,
                        height: '100%',
                        background: 'trasnparent',
                    }}
                >
                    <Box>
                        {item.icon}
                    </Box>
                    <div>
                        <Typography fontWeight="medium" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.400' }}>
                            {item.description}
                        </Typography>
                    </div>
                </Stack>
            </Grid>
        ))}
      </Grid>
    </Container>
  );
}