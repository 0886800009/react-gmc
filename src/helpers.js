import { isArray as _isArray, groupBy as _groupBy, get as _get, includes as _includes, remove as _remove, values as _values, merge as _merge, keyBy as _keyBy } from 'lodash';
import { useEffect, useRef } from 'react';
import { ADD_SNACK_BAR, SET_DATA_BY_KEY } from './actions/types';
import { store } from './redux/Store';
import moment from 'moment';

export const getSlot = (name, children) => {
    if (children) {
        if (_isArray(children)) {
            return children.find((item) => item && item.key === name);
        }
        if (children.key === name) {
            return children;
        }
    }
    return null;
};

export const objectToArray = (object) => {
    const arr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(object)) {
        arr.push({ ...value, key });
    }
    return arr;
};

export const getDifference = (oldObject, newObject) => {
    const resultObject = {};
    let count = 0;
    Object.keys(oldObject).filter((key) => oldObject[key] !== newObject[key]).forEach((key) => {
        resultObject[key] = newObject[key];
        count++;
    });
    return count ? resultObject : null;
};

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

export const boolToNum = (value) => (value ? 1 : 0);

export const addSnackbar = (type, message) => {
    store.dispatch({ type: ADD_SNACK_BAR, payload: { type, message } });
};

export const showError = (error) => {
    if (!error) {
        addSnackbar('error', 'Lỗi hệ thống. Vui lòng thử lại sau !!!');
    }
    const res = _get(error, 'response');
    if (res) {
        const { status, data } = res;
        if (status === 401) {
            addSnackbar('error', 'Lỗi chưa xác thực. Vui lòng đăng nhập lại !!!');
        } else if (status === 500) {
            addSnackbar('error', 'Lỗi hệ thống. Vui lòng thử lại sau !!!');
        } else if (data.message) {
            addSnackbar('error', data.message);
        } else {
            addSnackbar('error', 'Lỗi hệ thống. Vui lòng thử lại sau !!!');
        }
    } else {
        addSnackbar('error', error);
    }
};

export const formatDateTime = (value) => {
    if (!value) return null;
    const tzoffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
    const localTime = new Date(value) - tzoffset; // local time in milliseconds
    let localISOTime = value;
    if (localTime) {
        const newLocalTime = new Date(localTime);
        localISOTime = newLocalTime.toISOString().slice(0, -1);
    }
    return localISOTime;
};

export const transformMultiply = (value, rate) => Math.round(value * rate);
export const transformDivide = (value, rate) => value / rate;
export const transformDefault = (value) => value;

export const numberWithCommas = (x = '') => {
    let num = Number(x);
    if (x) {
        if (num % 1 !== 0) {
            num = num.toFixed(2);
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return num;
};

export const formatDate = (value, format = 'DD/MM/YYYY') => (value ? moment(value).format(format) : null);
export const isChecked = (value) => {
    if (typeof value === 'string') {
        return value === 'true';
    }
    return value;
};

export const formatComments = (data) => {
    const currentDate = moment(new Date()).format('DD/MM/YYYY');
    const list = data.map((item) => {
        let dateFormat = moment(item.createDate).format('DD/MM/YYYY');
        const from = moment(currentDate, 'DD/MM/YYY');
        const to = moment(dateFormat, 'DD/MM/YYY');
        const days = from.diff(to, 'days');
        if (days === 0) {
            dateFormat = 'Hôm nay';
        } else if (days === 1) {
            dateFormat = 'Hôm qua';
        }
        return { ...item, dateFormat };
    });

    const dataGroup = _groupBy(list, 'dateFormat');
    const result = [];
    for (const [key, value] of Object.entries(dataGroup)) {
        const object = { title: key, list: value };
        result.push(object);
    }
    return result;
};

export const formatRequest = (requestData, deleteParams) => {
    const request = {};
    for (const [key, value] of Object.entries(requestData)) {
        if (!_includes(deleteParams, key)) {
            request[key] = value;
        }
    }
    return request;
};

export const convertPathParams = (path, request) => {
    const deleteParams = [];
    const paths = path.split('/').map((item) => {
        if (/^\$/.test(item)) {
            const property = item.replace('$', '');
            deleteParams.push(property);
            return request[property];
        }
        return item;
    });
    const url = paths.join('/');
    return { path: url, request: formatRequest(request, deleteParams) };
};

export const addRemoveArray = (arr, arrAll, id = 'id', idAll = 'id') => {
    const arrTemp = [...arrAll];
    arr.forEach((arrItem) => {
        const itemIndex = arrTemp.findIndex((arrAllItem) => arrAllItem[idAll] === arrItem[id]);
        if (itemIndex >= 0) {
            arrTemp.splice(itemIndex, 1);
        } else {
            arrTemp.push(arrItem);
        }
    });
    return arrTemp;
};

export const formatGroupDetail = (dataArr) => {
    const groupData = _groupBy(dataArr, (obj) => obj.onGroup);
    const arr = [];
    for (const [key, value] of Object.entries(groupData)) {
        const [firstValue] = value;
        const multi = value.length > 1;
        const formatValue = multi ? value.map((item) => ({ ...item, grid: 0 })) : value;
        const obj = { key, children: formatValue, multi };
        arr.push({ ...obj, ...firstValue });
    }
    return arr;
};

export const findItem = (parent, item) => {
    const target = parent.find((data) => data.href === item.href);
    if (target) {
        target.isOpen = !target.isOpen;
    } else {
        const child = parent.find((data) => _includes(item.href, data.href));
        if (child.children) {
            findItem(child.children, item);
        }
    }
};

export const mergerArray = (fArr, sArr) => {
    const mergerData = _merge(_keyBy(fArr, 'no'), _keyBy(sArr, 'no'));
    return _values(mergerData);
};

export const initValueByType = (type, initValue, key) => {
    if (initValue) {
        if (type === 'dateRange') {
            if (initValue === 'thisYear') {
                const date = new Date();
                const dateRange = [new Date(date.getFullYear(), 0, 1), new Date(date.getFullYear(), 11, 31)];
                return dateRange;
            }
            return initValue;
        }
        if (type === 'date') {
            if (initValue === 'thisYear') {
                const date = new Date();
                if (key.includes('from')) {
                    return new Date(date.getFullYear(), 0, 1);
                }
                if (key.includes('to')) {
                    return new Date(date.getFullYear(), 11, 31);
                }
            }
            return new Date(initValue);
        }
        return initValue;
    }
    if (type === 'date') return null;
    if (type === 'number') return 0;
    if (type === 'dateRange') return [null, null];
    return '';
};

export const changeDataForm = (form, pageNo, numberRows) => {
    const obj = { pageNo, numberRows };
    for (const [key, value] of Object.entries(form)) {
        if (Array.isArray(value)) {
            const keys = key.split('-');
            keys.forEach((item, index) => {
                if (value[index]) {
                    obj[item] = value[index];
                }
            });
        } else {
            if (value) {
                obj[key] = value;
            }
        }
    }
    return obj;
};

export const startResize = (e, index, key, callback) => {
    const el = e.currentTarget;
    let startX = e.clientX;
    let width = 0;
    e.stopPropagation();
    const doingResize = (eventMove) => {
        eventMove.stopPropagation();
        const newX = startX - eventMove.clientX;
        startX = eventMove.clientX;
        const tableEl = el.closest('table');
        const trBodyEls = Array.from(tableEl.querySelectorAll('tbody tr'));
        const trHeaderEls = tableEl.querySelector('thead tr');
        const firstTdEl = Array.from(trBodyEls[0].children)[index];
        const boxCelRect = firstTdEl.getBoundingClientRect();
        width = boxCelRect.width - newX;
        const thEl = Array.from(trHeaderEls.children)[index];
        trBodyEls.forEach(item => {
            const tdEl = Array.from(item.children)[index];
            const boxCellEl = tdEl.querySelector('.js-cellBox');
            if (boxCellEl) {
                boxCellEl.style.width = `${width - 13}px`;
            }
        });
        if (thEl) {
            thEl.style.width = `${width}px`;
        }
    };
    const stopResize = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        if (width) {
            callback(width, key);
        }
    };
    document.onmousemove = doingResize;
    document.onmouseup = stopResize;
};

export const dragTouchStart = (e, index, key, callback) => {
    const el = e.currentTarget;
    let startX = e.changedTouches[0].clientX;
    let width = 0;
    e.stopPropagation();
    const doingResize = (eventMove) => {
        eventMove.stopPropagation();
        const newX = startX - eventMove.changedTouches[0].clientX;
        startX = eventMove.changedTouches[0].clientX;
        const tableEl = el.closest('table');
        const trBodyEls = Array.from(tableEl.querySelectorAll('tbody tr'));
        const trHeaderEls = tableEl.querySelector('thead tr');

        const firstTdEl = Array.from(trBodyEls[0].children)[index];
        const boxCelRect = firstTdEl.getBoundingClientRect();
        width = boxCelRect.width - newX;
        const thEl = Array.from(trHeaderEls.children)[index];
        trBodyEls.forEach(item => {
            const tdEl = Array.from(item.children)[index];
            const boxCellEl = tdEl.querySelector('.js-cellBox');
            if (boxCellEl) {
                boxCellEl.style.width = `${width - 13}px`;
            }
        });
        if (thEl) {
            thEl.style.width = `${width}px`;
        }
    };
    const stopResize = () => {
        document.ontouchmove = null;
        document.ontouchend = null;
        if (width) {
            callback(width, key);
        }
    };
    document.ontouchmove = doingResize;
    document.ontouchend = stopResize;
};

export const setColumnStorage = (data, formatTableMap, mappingData, dispatch) => {
    const type = formatTableMap[mappingData.mainType] || {};
    type.column = data.map(item => ({ key: item.key, order: item.order, isShow: item.isShow, style: item.style }));
    formatTableMap[mappingData.mainType] = type;
    localStorage.setItem('formatTableMap', JSON.stringify(formatTableMap));
    dispatch({ type: SET_DATA_BY_KEY, payload: { key: 'formatTableMap', data: { ...formatTableMap } } });
};

export const setColumnWidthStorage = (data, formatTableMap, mappingData, dispatch, width, key) => {
    if (width) {
        const type = formatTableMap[mappingData.mainType] || {};
        type.column = data.map(item => ({ key: item.key, order: item.order, isShow: item.isShow, style: item.style }));
        const target = type.column.find(item => item.key === key);
        if (target) {
            target.style = { width: width - 13 };
        }
        formatTableMap[mappingData.mainType] = type;
        localStorage.setItem('formatTableMap', JSON.stringify(formatTableMap));
        dispatch({ type: SET_DATA_BY_KEY, payload: { key: 'formatTableMap', data: { ...formatTableMap } } });
    }
};
