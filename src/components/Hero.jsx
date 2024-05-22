import * as React from 'react';
import { alpha } from '@mui/material';
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
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
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
                        Web&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            Developer
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

                    <Typography
                        component="h6"
                        variant='h6'
                        align='center'
                        color='text.primary'
                    >
                        Experiencia: {yearsExperience} años, {monthsExperience} meses.
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Soy un desarrollador web apasionado y con una sólida experiencia en la creación de 
                        aplicaciones robustas y escalables. Mi principal área de especialización es el desarrollo 
                        frontend utilizando tecnologías modernas como ReactJs y Angular, así como el desarrollo 
                        multiplataforma con Flutter.
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        En el ámbito del backend, tengo experiencia en NodeJs y PHP, lo que me permite construir y 
                        mantener servidores eficientes y seguros. Estoy familiarizado con bases de datos tanto 
                        relacionales como no relacionales, específicamente MongoDB y MySQL, asegurando la integridad 
                        y accesibilidad de los datos.
                    </Typography>

                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Utilizo herramientas de control de versiones como Git y GitHub para colaborar efectivamente en proyectos y 
                        gestionar el código de manera eficiente. Mi enfoque se centra en escribir código limpio y bien documentado, 
                        siguiendo las mejores prácticas de la industria.
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