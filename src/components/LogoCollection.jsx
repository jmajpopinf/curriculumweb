import { useTheme } from '@emotion/react';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const whiteLogos = [
    'static/images/react.svg',
    'static/images/angular.svg',
    'static/images/flutter.svg',
    'static/images/nodejs.svg',
    'static/images/php.svg',
    'static/images/mongodb.svg',
    'static/images/mysql.svg',
    'static/images/gitbash.svg',
];

const darkLogos = [
    'static/images/react.svg',
    'static/images/angular.svg',
    'static/images/flutter.svg',
    'static/images/nodejs.svg',
    'static/images/php.svg',
    'static/images/mongodb.svg',
    'static/images/mysql.svg',
    'static/images/gitbash.svg',
];

const logoStyle = {
    width: '80px',
    height: '80px',
    margin: '0 32px',
    opacity: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'inline-block',
};

const LogoCollection = () => {
    const theme = useTheme();
    const logos = theme.palette.mode === 'dark' ? whiteLogos : darkLogos;

    return (
        <Container id="skills" sx={{ py: { xs: 4, sm: 8 } }}>
            <Box
                id="logo-collection"
                sx={{
                    py: 4,
                }}
            >
                <Typography
                    component="h2"
                    variant='h4'
                    align='center'
                    color='text.primary'
                >
                    Habilidades
                    {/* Skills */}
                </Typography>
                <Typography
                    component="p"
                    variant='subtitle2'
                    align='center'
                    color='text.secondary'
                    sx={{
                        mb: 4,
                    }}
                >
                    Framewors, Base de datos, Librarias y herramientas de desarrollo
                    {/* Framewors, Data Base, Libraries and Dev Tools. */}
                </Typography>
                <Grid
                    container
                    justifyContent='center'
                    sx={{
                        opacity: 1
                    }}
                >
                    {logos.map((logo, index) => (
                        <Grid item key={index}>
                            <img
                                src={logo}
                                alt={`logo ${index + 1}`}
                                style={logoStyle}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default LogoCollection;
