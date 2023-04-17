/* eslint-disable import/no-named-as-default */
// import React, { useEffect } from 'react';
// import { useRoutes, useNavigate } from 'react-router-dom';
// import { CssBaseline, ThemeProvider } from '@material-ui/core';
// import { useSelector, useDispatch } from 'react-redux';
// import GMCService from 'src/services/gmc.service';
// import { SET_WEB_MODULES } from 'src/actions/types';
// import RTL from './layouts/full-layout/customizer/RTL';
// import ThemeSettings from './layouts/full-layout/customizer/ThemeSettings';
// // eslint-disable-next-line import/no-named-as-default-member
// import Router from './routes/Router';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import * as firebase from './firebase';
// import './App.scss';

const App = () => {
  // const routing = useRoutes(Router);
  // const theme = ThemeSettings();
  // const dispatch = useDispatch();
  // const customizer = useSelector((state) => state.CustomizerReducer);
  // const user = useSelector((state) => state.user);
  // const navigate = useNavigate();
  // const fetchWebModule = async () => {
  //   try {
  //     const res = await GMCService.getDataByUrl('common/info/webModule');
  //     const { status, data } = res;
  //     if (status === 200 && data !== 'Could not find anything') {
  //       dispatch({ type: SET_WEB_MODULES, payload: data });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   if (!user) {
  //     navigate('auth/login');
  //   }
  //   fetchWebModule();
  // }, []);
  return (
    // <ThemeProvider theme={theme}>
    //   <RTL direction={customizer.activeDir}>
    //     <CssBaseline />
    //     {routing}
    //   </RTL>
    // </ThemeProvider>
    <p>Du an hoc react</p>
  );
};

export default App;
