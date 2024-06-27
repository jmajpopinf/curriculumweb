import * as React from 'react';
import { Link, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
    const [yearsExperience, setYearsExperience] = React.useState(0);
    const [monthsExperience, setMonthsExperience] = React.useState(0);
    
    React.useEffect(() => {
        const fechaInicio = '2022-01-04';
        const fechaActual = new Date();
        const Inicio = new Date(fechaInicio);

        let anios = fechaActual.getFullYear() - Inicio.getFullYear();
        let meses = fechaActual.getMonth() - Inicio.getMonth();
        
        setYearsExperience(anios);
        setMonthsExperience(meses);
    },[]);

    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                id="about"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 4, sm: 6 },
                }}
            >
                <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Desarrollador&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            Web&App
                        </Typography>
                    </Typography>

                    <Box
                        id="image"
                        sx={(theme) => ({
                            mt: { xs: 2, sm: 3 },
                            mb: { xs: 2, sm: 3 },
                            alignSelf: 'center',
                            height: { xs: 200, sm: 300 },
                            width: { xs: 200, sm: 300 },
                            backgroundImage:
                                theme.palette.mode === 'light'
                                    ? 'url("/static/images/foto.jpg")'
                                    : 'url("/static/images/foto.jpg")',
                            backgroundSize: 'cover',
                            borderRadius: '10px',
                            outline: '1px solid',
                            outlineColor:
                                theme.palette.mode === 'light'
                                    ? alpha('#BFCCD9', 0.5)
                                    : alpha('#9CCCFC', 0.1),
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                    : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                        })}
                    />

                    <Stack spacing={0} useFlexGap>
                        <Typography
                            variant="h6"
                            textAlign="center"
                            sx={{
                                // fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            José Manuel Ajpop Sipac
                        </Typography>

                        <Typography
                            variant="h6"
                            textAlign="center"
                            sx={{
                                // fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            Guatemala
                        </Typography>

                        <Typography
                            variant="h6"
                            textAlign="center"
                            sx={{
                                // fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            Experiencia: {yearsExperience} años, {monthsExperience} meses.
                        </Typography>
                    </Stack>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Sólida experiencia en la creación de 
                        aplicaciones robustas y escalables. Especialización en desarrollo 
                        frontend utilizando tecnologías modernas como ReactJs, Angular y desarrollo 
                        multiplataforma con Flutter.
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Desarrollo backend, con experiencia en NodeJs y PHP, bases de datos tanto 
                        relacionales como no relacionales, específicamente MongoDB y MySQL, asegurando la integridad 
                        y accesibilidad de los datos.
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Experiencia con herramientas de control de versiones como Git y GitHub para trabajo colaborativo. 
                        Mi enfoque se centra en escribir código limpio y bien documentado, 
                        siguiendo las mejores prácticas de la industria.
                    </Typography>

                    <Typography 
                        textAlign="center"
                        color="text.secondary" 
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        <Link href="https://drive.google.com/file/d/1trCFWN48RVMFmkz_4E-jHUE2UnvfSh1d/view?usp=sharing" target="_blank">Descargar Curriculm Vitae</Link>
                    </Typography>
                </Stack>
                {/* <Box
                    id="image"
                    sx={(theme) => ({
                        mt: { xs: 4, sm: 5 },
                        alignSelf: 'center',
                        height: { xs: 200, sm: 700 },
                        width: '100%',
                        backgroundImage:
                            theme.palette.mode === 'light'
                                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                                : 'url("/static/images/templates/templates-images/hero-dark.png")',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}
                /> */}
            </Container>
        </Box>
    );
}