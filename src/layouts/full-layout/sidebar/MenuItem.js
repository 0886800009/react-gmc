import { useState, Fragment } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Typography, ListItem, Collapse, ListItemIcon, ListItemText } from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import { groupBy as _groupBy, values as _values, merge as _merge, keyBy as _keyBy, includes as _includes } from 'lodash';

const MenuItem = ({ item, open, index, handleClick, onSidebarClose }) => {
    const { pathname } = useLocation();
    const pathDirect = pathname;
    const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
    const getOpen = (data) => _includes(open.href, data.href) && item.isOpen;
    if (item.subheader) {
        return (
            <li key={item.subheader}>
                <Typography
                    variant="subtitle2"
                    fontWeight="500"
                    sx={{ my: 2, mt: 4, opacity: '0.4' }}
                >
                    {item.subheader}
                </Typography>
            </li>
        );
        // {/********If Sub Menu**********/}
        /* eslint no-else-return: "off" */
    } else if (item.children && item.children.length) {
        return (
            <Fragment key={item.name}>
                <ListItem
                    button
                    component="li"
                    onClick={() => handleClick(item)}
                    selected={pathWithoutLastPart === item.href || getOpen(item)}
                    sx={{
                        mb: 1,
                        ...((_includes(pathWithoutLastPart, item.href) || getOpen(item)) && {
                            backgroundColor: (theme) => (`${theme.palette.mode === 'dark' ? theme.palette.grey['700'] : theme.palette.grey['200']}!important`)
                        })
                    }}
                >
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                        <FeatherIcon icon={item.icon} width="20" height="20" />
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                    {getOpen(item) ? (
                        <FeatherIcon icon="chevron-down" size="16" />
                    ) : (
                        <FeatherIcon icon="chevron-right" size="16" />
                    )}
                </ListItem>
                <Collapse in={getOpen(item)} timeout="auto" unmountOnExit>
                    <List sx={{ paddingLeft: '10px' }} component="div" disablePadding>
                        {item.children.map((child, childIndex) => (
                            <MenuItem key={child.href} item={child} open={open} index={childIndex} handleClick={handleClick} onSidebarClose={onSidebarClose} />
                        ))}
                    </List>
                </Collapse>
            </Fragment>
        );
        // {/********If Sub No Menu**********/}
    } else {
        return (
            <List component="div" disablePadding key={item.name}>
                <ListItem
                    onClick={() => handleClick(item)}
                    button
                    component={NavLink}
                    to={item.href}
                    selected={pathDirect === item.href}
                    sx={{
                        mb: 1,
                        ...(pathDirect === item.href && {
                            color: 'white',
                            backgroundColor: (theme) => `${theme.palette.primary.main}!important`,
                        }),
                    }}
                >
                    <ListItemIcon
                        sx={{
                            ...(pathDirect === item.href && { color: 'white' }),
                            minWidth: '30px',
                        }}
                    >
                        <FeatherIcon icon={item.icon} width="20" height="20" />
                    </ListItemIcon>
                    <ListItemText sx={{ '& span': { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' } }} onClick={onSidebarClose}>{item.name}</ListItemText>
                </ListItem>
            </List>
        );
    }
};

MenuItem.propTypes = {
    item: PropTypes.object,
    open: PropTypes.object,
    handleClick: PropTypes.func,
    onSidebarClose: PropTypes.func,
    index: PropTypes.number
};

export default MenuItem;
