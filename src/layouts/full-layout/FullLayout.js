import React, { useState } from 'react';
import {
    experimentalStyled, useMediaQuery, Container, Box
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SnackBarGroup from './../../components/SnackBarGroup';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Footer from './footer/Footer';
import Customizer from './customizer/Customizer';
import { TopbarHeight } from '../../assets/global/Theme-variable';

const MainWrapper = experimentalStyled('div')(() => ({
    display: 'flex',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
}));
const PageWrapper = experimentalStyled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',

    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
        paddingTop: TopbarHeight,
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: '64px',
    },
}));

const FullLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const customizer = useSelector((state) => state.CustomizerReducer);
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    return (
        <MainWrapper className={customizer.activeMode === 'dark' ? 'darkbg' : ''}>
            <Header
                sx={{
                    paddingLeft: isSidebarOpen && lgUp ? '265px' : '',
                    backgroundColor: 'background.paper',
                    boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.11)',
                }}
                toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                toggleMobileSidebar={() => setMobileSidebarOpen(true)}
            />

            <Sidebar
                isSidebardir={customizer.activeDir === 'ltr' ? 'left' : 'right'}
                isSidebarOpen={isSidebarOpen}
                isMobileSidebarOpen={isMobileSidebarOpen}
                onSidebarClose={() => setMobileSidebarOpen(false)}
            />

            <PageWrapper>
                <Container
                    maxWidth={false}
                    sx={{
                        pl: {
                            xs: '0 !important',
                            sm: isSidebarOpen && lgUp ? '265px!important' : ''
                        },
                        pr: '0 !important'
                    }}
                >
                    <Box sx={{ minHeight: 'calc(100vh - 170px)', display: 'flex', flexDirection: 'column' }}>
                        <Outlet />
                    </Box>
                    <Customizer />
                    <Footer />
                </Container>
            </PageWrapper>
            <SnackBarGroup />
        </MainWrapper>
    );
};

export default FullLayout;
