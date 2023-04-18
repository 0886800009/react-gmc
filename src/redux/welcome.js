import {
    GET_MEMBER, GET_EXAMPLE, GET_STATUS, ADD_SNACK_BAR, UPDATE_SNACK_BAR, SET_SERVER, SET_SERVERS, SET_WEB_MODULES, SET_DATA_BY_KEY
} from '../actions/types';

const getStorage = (name) => {
    const serverString = localStorage.getItem(name);
    const server = JSON.parse(serverString);
    return server;
};

const initialState = {
    title: 'Welcome to GMC ERP Web',
    members: [],
    examples: [],
    status: [],
    locations: ['Tầng 1', 'Tầng 2', 'Tầng 3', 'Tầng 4'],
    roles: ['Leader', 'Dev'],
    snacks: [],
    setSnack: () => { },
    server: getStorage('server') || {
        serverName: 'Web Mobibe System',
        // urlApi: 'http://103.140.248.249:8080',
        urlApi: 'http://103.140.248.249:8082', // api mới đang phát triển cho mobile app
        keys: 'webmobie'
    },
    servers: [],
    webModules: [],
    formatTableMap: getStorage('formatTableMap') || {}
};

function welcomeReducer(welcome = initialState, action) {
    const { type, payload } = action;
    let snacks = [];
    switch (type) {
        case GET_MEMBER:
            return { ...welcome, members: payload };
        case GET_EXAMPLE:
            return { ...welcome, examples: payload };
        case GET_STATUS:
            return { ...welcome, status: payload };
        case ADD_SNACK_BAR:
            snacks = [...welcome.snacks];
            snacks.push({ ...payload, key: snacks.length + 1, open: true });
            return { ...welcome, snacks };
        case UPDATE_SNACK_BAR:
            const { key, value } = payload;
            snacks = [...welcome.snacks];
            const index = snacks.findIndex((item) => item.key === key);
            snacks[index] = { ...snacks[index], ...value };
            return { ...welcome, snacks };
        case SET_SERVER:
            return { ...welcome, server: payload };
        case SET_SERVERS:
            return { ...welcome, servers: payload };
        case SET_WEB_MODULES:
            return { ...welcome, webModules: payload };
        case SET_DATA_BY_KEY:
            const newWelcome = { ...welcome };
            newWelcome[payload.key] = payload.data;
            return newWelcome;
        default:
            return welcome;
    }
}

export default welcomeReducer;
