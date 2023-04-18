import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Drawer, useMediaQuery, List, Typography, ListItem, Collapse, ListItemIcon, ListItemText } from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import { groupBy as _groupBy, values as _values, merge as _merge, keyBy as _keyBy, includes as _includes } from 'lodash';
import { MENU_CONFIG } from '../../../constants';
import { findItem, mergerArray } from '../../../helpers';
import { SidebarWidth } from '../../../assets/global/Theme-variable';
import LogoIcon from '../logo/LogoIcon';
import Menuitems from './Menuitems';
import Scrollbar from '../../../components/custom-scroll/Scrollbar';
import MenuItem from './MenuItem';

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
    const [open, setOpen] = useState({});
    const { pathname } = useLocation();
    const pathDirect = pathname;
    const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const server = useSelector((state) => state.welcome.server);
    const webModules = useSelector((state) => state.welcome.webModules);

    const dummy = [
        {
            id: 24,
            name: 'Nhập kho trực tiếp',
            no: 'importDirect',
            parentId: 20
        },
        {
            id: 25,
            name: 'Nhập kho mua hàng',
            no: 'importPurchase',
            parentId: 20
        },
        {
            id: 26,
            name: 'Nhập kho thành phẩm',
            no: 'importFg',
            parentId: 20
        },
        {
            id: 27,
            name: 'Xuất kho trực tiếp',
            no: 'exportDirect',
            parentId: 21
        },
        {
            id: 28,
            name: 'Đề nghị XVT từ LSX',
            no: 'xvtLsx',
            parentId: 22
        },
        {
            id: 29,
            name: 'Đề nghị XVT từ TGV',
            no: 'xvtTgv',
            parentId: 22
        },

        {
            id: 30,
            name: 'Báo cáo tồn kho',
            no: 'report',
            parentId: 0
        },
        {
            id: 31,
            name: 'Nhập xuất tồn',
            no: 'reportImEx',
            parentId: 30
        },
        {
            id: 32,
            name: 'Thống kê tồn kho theo Slot Lotno SerialNo',
            no: 'reportLot',
            parentId: 30
        },

    ];

    const dummyEnv = [30, 31, 32, 33, 34, 35];

    const transform = (items, id = 0, link = 'parentId') => items.filter((item) => item[link] === id)
        .map((item) => ({ ...item, children: transform(items, item.id) }));

    const getMenuItems = () => {
        const menus = [...webModules, ...dummy];
        const filterMenuItems = mergerArray(MENU_CONFIG, menus);
        const result = transform(filterMenuItems).filter((item) => _includes([...server.moduleEnv, ...dummyEnv], item.id));
        return result;
    };

    const resetOpen = (list, path) => {
        list.forEach((item) => {
            if (!_includes(path, item.href)) {
                // eslint-disable-next-line no-param-reassign
                item.isOpen = false;
            }
            if (item.children) {
                resetOpen(item.children, path);
            }
        });
    };
    const [sideBarMenu, setSideBarMenu] = useState([]);
    const handleClick = (item) => {
        setOpen(item);
        const newSideBar = [...sideBarMenu];
        resetOpen(newSideBar, item.href);
        findItem(newSideBar, item);
        setSideBarMenu(newSideBar);
    };

    useEffect(() => {
        const menu = Menuitems(getMenuItems());
        setSideBarMenu(menu);
    }, [server, webModules]);

    const SidebarContent = (
        <Scrollbar>
            <Box sx={{ p: 2 }}>
                <Box sx={{ justifyContent: 'center', display: { xs: 'none', lg: 'flex' } }}>
                    <LogoIcon sx={{ width: '120px' }} />
                </Box>
                <Box>
                    <List>
                        {sideBarMenu.map((item, index) => <MenuItem key={item.href} index={index} item={item} open={open} handleClick={handleClick} onSidebarClose={onSidebarClose} />)}
                    </List>
                </Box>
                {/* <Buynow /> */}
            </Box>
        </Scrollbar>
    );
    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open={isSidebarOpen}
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: SidebarWidth,
                        border: '0 !important',
                        boxShadow: '0px 7px 30px 0px rgb(113 122 131 / 11%)',
                    },
                }}
            >
                {SidebarContent}
            </Drawer>
        );
    }
    return (
        <Drawer
            anchor="left"
            open={isMobileSidebarOpen}
            onClose={onSidebarClose}
            PaperProps={{
                sx: {
                    width: SidebarWidth,
                    border: '0 !important',
                },
            }}
            variant="temporary"
        >
            {SidebarContent}
        </Drawer>
    );
};

Sidebar.propTypes = {
    isMobileSidebarOpen: PropTypes.bool,
    onSidebarClose: PropTypes.func,
    isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
