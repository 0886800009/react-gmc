import { Helmet } from 'react-helmet';
import { Paper, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import LogoIconGmc from '../layouts/full-layout/logo/LogoIconGmc';

const Dashboard = () => {
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // mounted
            mounted.current = true;
        } else {
            // updated
        }
    });
    return (
        <>
            <Helmet>
                <title>Expert ERP | GMC</title>
            </Helmet>
            <Paper
                sx={{
                    flex: 1,
                    p: 2
                }}
            >
                <Typography
                    align="center"
                    gutterBottom
                    variant="h2"
                    sx={{ fontSize: '2rem' }}
                >
                    Welcome to GMC Expert ERP
                </Typography>
                <LogoIconGmc sx={{ mt: '5rem', width: '100%', display: 'flex', justifyContent: 'center' }} />
            </Paper>
        </>
    );
};

export default Dashboard;
