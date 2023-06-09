import {
    useEffect, useState
} from 'react';
import watch from 'redux-watch';
import { store } from './../redux/Store';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Alert, AlertTitle } from '@mui/material';
import { UPDATE_SNACK_BAR } from './../actions/types';
import { isEqual as _isEqual } from 'lodash';

const w = watch(store.getState, 'welcome.snacks', _isEqual);
store.subscribe(w(() => { }));

const SnackBarGroup = () => {
    const dispatch = useDispatch();
    const snacks = useSelector((state) => state.welcome.snacks);
    const closeSnack = (key, event) => {
        dispatch({ type: UPDATE_SNACK_BAR, payload: { key, value: { open: false } } });
    };
    const openSnacks = snacks.filter((d) => d.open);
    const snackContent = openSnacks.map((item, index) => (
        <Snackbar
            key={item.key}
            sx={{ mb: `${(openSnacks.length - index) * 55}px` }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={item.open}
            autoHideDuration={3000}
            onClose={(event) => closeSnack(item.key, event)}
        >
            <Alert variant="filled" onClose={() => closeSnack(item.key)} severity={item.type} sx={{ width: '100%', fontSize: '1rem', '& .MuiSvgIcon-root': { fontSize: '1.5rem' } }}>
                {item.message}
            </Alert>
        </Snackbar>
    ));
    return snackContent;
};
export default SnackBarGroup;
