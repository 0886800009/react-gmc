import React, { useState, useEffect } from 'react';
import {
    Grid, Stack, Box, Typography, FormGroup, FormControlLabel, Button, MenuItem
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Formik } from 'formik';
import * as Yup from 'yup';
import GMCService from '../../services/gmc.service';
import {
    SET_SERVER, SET_SERVERS
} from '../../actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions/user';
import { get as _get } from 'lodash';
import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import PageContainer from '../../components/container/PageContainer';

// import img1 from '../../assets/images/backgrounds/login-bg.svg';
import LogoIcon from '../../layouts/full-layout/logo/LogoIcon';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const server = useSelector((state) => state.welcome.server);
    const servers = useSelector((state) => state.welcome.servers);
    const [error, setError] = useState('');
    const fetchServer = async () => {
        try {
            const res = await GMCService.getDataByUrl('common/info/server');
            const { status, data } = res;
            if (status === 200 && data !== 'Could not find anything') {
                dispatch({ type: SET_SERVERS, payload: data });
            }
        } catch (err) {
            const message = _get(err, 'response.data.message') || '';
            setError(message);
        }
    };
    useEffect(() => {
        fetchServer();
    }, []);
    return (
        <PageContainer title="Login" description="this is Login page">
            <Grid container spacing={0} sx={{ height: '100vh', justifyContent: 'center', backgroundColor: 'primary.main' }}>
                <Grid item xs={12} sm={8} md={6} sx={{ backgroundColor: { md: '#fff' } }}>
                    <Box
                        sx={{
                            position: 'relative',
                            height: '100%'
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                position: {
                                    xs: 'relative',
                                    lg: 'absolute',
                                },
                                p: 4,
                                pb: 0,
                                height: { xs: '100%', md: '100vh' },
                                margin: '0 auto',
                            }}
                        >
                            <Box sx={{ display: { md: 'none' } }}>
                                <img src="/static/images/logos/gmc-dark.png" alt="gmc-dark" />
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <img src="/static/images/logos/gmc-light.png" alt="gmc-light" />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                p: 4,
                                position: 'absolute',
                                top: '0',
                                display: { xs: 'none', md: 'block' }
                            }}
                        >
                            <LogoIcon link="/auth/login" oneType="light" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={6} display="flex" sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}>
                    <Grid container spacing={0} display="flex" justifyContent="center">
                        <Grid item xs={12} lg={9} xl={6}>
                            <Formik
                                initialValues={{
                                    username: '',
                                    password: '',
                                    server: server.keys
                                }}
                                validationSchema={Yup.object().shape({
                                    username: Yup.string().max(50).required('Username is required'),
                                    password: Yup.string().max(50).required('Password is required')
                                })}
                                onSubmit={async (formData) => {
                                    try {
                                        const serverSelected = servers.find((item) => item.keys === formData.server);
                                        if (serverSelected) {
                                            dispatch({ type: SET_SERVER, payload: serverSelected });
                                        }
                                        const requestData = formData;
                                        const res = await GMCService.postDataByUrl('Users/login', requestData);
                                        const { status, data } = res;
                                        if (status === 200) {
                                            localStorage.setItem('user', JSON.stringify(data));
                                            localStorage.setItem('server', JSON.stringify(serverSelected));
                                            dispatch(setUser(data));
                                            navigate('/dashboard', { replace: true });
                                        }
                                    } catch (err) {
                                        const message = _get(err, 'response.data.message') || '';
                                        setError(message);
                                    }
                                }}
                            >
                                {({
                                    errors,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting,
                                    touched,
                                    values
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Box
                                            sx={{
                                                p: { xs: 3, md: 4 },
                                            }}
                                        >
                                            <Typography fontWeight="700" variant="h2" color="primary.contrastText">
                                                Welcome to Expert ERP
                                            </Typography>
                                            <Box
                                                sx={{
                                                    mt: 4,
                                                }}
                                            >
                                                <CustomFormLabel color="primary.contrastText" htmlFor="email">Tài khoản</CustomFormLabel>
                                                <CustomTextField
                                                    InputProps={{
                                                        className: 'u-text-white',
                                                    }}
                                                    error={Boolean(touched.username && errors.username)}
                                                    fullWidth
                                                    helperText={touched.username && errors.username}
                                                    // label="Tài khoản"
                                                    margin="normal"
                                                    name="username"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="text"
                                                    value={values.username}
                                                />
                                                <CustomFormLabel color="primary.contrastText" htmlFor="password">Mật khẩu</CustomFormLabel>
                                                <Box sx={{ mb: 2 }}>
                                                    <CustomTextField
                                                        InputProps={{
                                                            className: 'u-text-white',
                                                        }}
                                                        error={Boolean(touched.password && errors.password)}
                                                        fullWidth
                                                        helperText={touched.password && errors.password}
                                                        // label="Mật khẩu"
                                                        margin="normal"
                                                        name="password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="password"
                                                        value={values.password}
                                                        sx={{
                                                            mb: 1,
                                                        }}
                                                    />
                                                    <Typography
                                                        align="left"
                                                        color="error"
                                                        variant="i"
                                                    >
                                                        {error}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ mb: 2 }}>
                                                    <CustomFormLabel color="primary.contrastText" htmlFor="server">Server</CustomFormLabel>
                                                    <CustomTextField
                                                        select
                                                        InputProps={{
                                                            className: 'u-text-white',
                                                        }}
                                                        fullWidth
                                                        margin="normal"
                                                        name="server"
                                                        onChange={handleChange}
                                                        value={values.server}
                                                    >
                                                        {
                                                            servers.map((item) => <MenuItem key={item.keys} value={item.keys}>{item.serverName}</MenuItem>)
                                                        }
                                                    </CustomTextField>
                                                </Box>
                                                <Button
                                                    color="secondary"
                                                    variant="contained"
                                                    size="large"
                                                    fullWidth
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    sx={{
                                                        pt: '10px',
                                                        pb: '10px',
                                                    }}
                                                >
                                                    Đăng nhập
                                                </Button>
                                            </Box>
                                        </Box>
                                    </form>
                                )}
                            </Formik>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PageContainer>
    );
};
export default Login;
