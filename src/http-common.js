import axios from 'axios';
import { store } from './redux/Store';

const baseURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_BASE_URL : process.env.REACT_APP_DEV_BASE_URL;

const defaultOptions = {
    baseURL: 'http://103.140.248.249:8082',
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
};

// Create instance
const instance = axios.create(defaultOptions);

instance.interceptors.request.use((config) => {
    const { user, welcome } = store.getState();
    const token = user ? user.token : '';
    const { urlApi } = welcome.server;
    config.headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3MiIsInVzZXJOYW1lIjoiR01DIiwiZ3JvdXBJZCI6IjEiLCJuYmYiOjE2ODE4MTQyMTgsImV4cCI6MTY4MjQxOTAxOCwiaWF0IjoxNjgxODE0MjE4fQ.ZIOKaTs9R2TLEA62oXUU77sOfrHW9wmDetIvBaSpKpk';
    config.baseURL = 'http://103.140.248.249:8082';

    // // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = token ? `Bearer ${token}` : '';
    // if (config.url === 'common/info/server' || config.url === 'common/info/webModule') {
    //   // eslint-disable-next-line no-param-reassign
    //   config.baseURL = 'http://103.140.248.249:8080';
    // } else {
    //   // eslint-disable-next-line no-param-reassign
    //   config.baseURL = urlApi;
    //   // config.baseURL = 'http://localhost:3001';
    // }
    return config;
});

export default instance;
