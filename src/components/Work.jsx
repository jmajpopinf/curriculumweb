import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Avatar, CardContent, CardHeader, Link } from '@mui/material';

const userTestimonials = [
    {
        avatar: <Avatar alt="Remy Sharp" src="static/work-images/gyt.png" />,
        name: 'Banco G&T Continental',
        occupation: 'Ingeniero de desarrollo',
        webUrl: 'https://www.gtc.com.gt/',
        testimonial:
            "Ingeniero de Desarrollo enfocado en la resolución de incidencias, mejoras y nuevas funcionalidades del sistema Plataforma de Agencias, trabajando en front end, back end y base de datos. utilizando tecnologías como ASP .NET clásico, C++, SQL Server. Además, apoyé como Ingeniero de Calidad en pruebas funcionales y documentación técnica, asegurando el cumplimiento de estándares.",
    },
    {
        avatar: <Avatar alt="Remy Sharp" src="static/work-images/logo.png" />,
        name: 'Signus Corp',
        occupation: 'Desarrollador web',
        webUrl: 'https://www.signuscorp.com',
        testimonial:
            "Desarrollador de Aplicaciones Web, utilizando Angular y ReactJS para el frontend, y Node.js con Express para el backend. Gestión de bases de datos SQL y MongoDB. Git y GitHub para el control de versiones. Diseño y desarrollo de interfaces de usuario dinámicas, implementación de servidores y bases de datos, optimización de aplicaciones web, pruebas y depuración para asegurar la calidad del software.",
    },
    {
        avatar: <Avatar alt="Travis Howard" src="static/work-images/netsurfing.png" />,
        name: 'NetSurfing',
        occupation: 'Propietario/Freelancer',
        webUrl: 'https://www.marlslab.com',
        testimonial:
            "NetSurfing, freelancer en el desarrollo de aplicaciones móviles Android, destacando el proyecto Talkid. Poseo conocimientos básicos en desarrollo de videojuegos con Unity 3D y manejo de bases de datos SQL y MongoDB. Creación de proyectos en diversos lenguajes de programación, incluyendo Java, JavaScript, C#, y Python.",
    },
    {
        avatar: <Avatar alt="Cindy Baker" src="static/work-images/netsurfing.png" />,
        name: 'NetSurfing',
        occupation: 'Propietario/Tecnico en computación',
        webUrl: 'https://www.marlslab.com',
        testimonial:
            'Empresa propia, NetSurfing, experiencia en soporte técnico para equipos de cómputo y manejo de programas de diseño como Photoshop, Illustrator y Sony Vegas. Además, habilidades en el uso de paquetes de ofimática, lo que me permite realizar tareas administrativas y de gestión de manera eficiente.',
    },
];

export default function Work() {

    return (
        <Box
            id="work"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        >
            <Container
                sx={{
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
                    <Typography component="h2" variant="h4">
                        Empleo
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Experiencia laboral en el área de desarrollo de software y soporte tecnico.
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {userTestimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    p: 1,
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400' }}>
                                        {testimonial.testimonial}
                                    </Typography>
                                </CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        pr: 2,
                                        color: 'grey.400'
                                    }}
                                >
                                    <CardHeader
                                        avatar={testimonial.avatar}
                                        title={
                                            <Link href={testimonial.webUrl} target="_blank">{testimonial.name}</Link>
                                        }
                                        subheader={
                                            <Typography variant="body2" color="grey.400">
                                                {testimonial.occupation}
                                            </Typography>
                                        }
                                    />
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}