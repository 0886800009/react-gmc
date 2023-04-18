import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/* ***Layouts**** */
const FullLayout = lazy(() => import('../layouts/full-layout/FullLayout'));
const BlankLayout = lazy(() => import('../layouts/blank-layout/BlankLayout'));
/* ***End Layouts**** */

const Error = lazy(() => import('../views/authentication/Error'));
const Login = lazy(() => import('../views/authentication/Login'));

// Pages

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Price = lazy(() => import('../pages/Price'));
//const Order = lazy(() => import('src/pages/Order'));
const Leave = lazy(() => import('../pages/Leave'));
// const WorkingSchedule = lazy(() => import('src/pages/WorkingSchedule'));
// const Overtime = lazy(() => import('src/pages/Overtime'));
// const PurchaseOrder = lazy(() => import('src/pages/PurchaseOrder'));
// const PurchaseRequest = lazy(() => import('src/pages/PurchaseRequest'));
// const PaymentOrder = lazy(() => import('src/pages/PaymentOrder'));
// const SaleOrder = lazy(() => import('src/pages/SaleOrder'));
// const WarehousePo = lazy(() => import('src/pages/WarehousePo'));
// const WarehouseImportDirect = lazy(() => import('src/pages/WarehouseImportDirect'));
// const WarehouseImportPurchase = lazy(() => import('src/pages/WarehouseImportPurchase'));
// const WarehouseImportFg = lazy(() => import('src/pages/WarehouseImportFg'));
// const WarehouseExportDirect = lazy(() => import('src/pages/WarehouseExportDirect'));
// const WarehouseKqsx = lazy(() => import('src/pages/WarehouseKqsx'));
// const WarehouseExLGH = lazy(() => import('src/pages/WarehouseExLgh'));
// const WarehouseExKqsx = lazy(() => import('src/pages/WarehouseExKqsx'));
// const WarehouseTransfer = lazy(() => import('src/pages/WarehouseTransfer'));
// const ProductionKqsxTgv = lazy(() => import('src/pages/ProductionKqsxTgv'));
// const ProductionXvtLsx = lazy(() => import('src/pages/ProductionXvtLsx'));
// const ProductionXvtTgv = lazy(() => import('src/pages/ProductionXvtTgv'));
// const ReportImportExport = lazy(() => import('src/pages/ReportImportExport'));
// const ReportLot = lazy(() => import('src/pages/ReportLot'));

// const Example = lazy(() => import('src/pages/Example'));
// const Inbox = lazy(() => import('src/pages/Inbox'));
// const Outbox = lazy(() => import('src/pages/Outbox'));
// const Settings = lazy(() => import('src/pages/Settings'));

/* ****Routes***** */

const Router = [
    {
        path: '/',
        element: <FullLayout />,
        children: [
            // pages
            { path: '/', element: <Navigate to="/dashboard" /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/sm/price', element: <Price /> },
            // { path: '/sm/order', element: <Order /> },
            { path: '/hr/leave', element: <Leave /> },
            // { path: '/hr/overtime', element: <Overtime /> },
            // { path: '/hr/working-schedule', element: <WorkingSchedule /> },
            // { path: '/approval/purchase-order', element: <PurchaseOrder /> },
            // { path: '/approval/purchase-request', element: <PurchaseRequest /> },
            // { path: '/approval/payment-order', element: <PaymentOrder /> },
            // { path: '/approval/sale-order', element: <SaleOrder /> },
            // { path: '/warehouse/po', element: <WarehousePo /> },
            // { path: '/warehouse/kqsx', element: <WarehouseKqsx /> },
            // { path: '/qlk/import/direct', element: <WarehouseImportDirect /> },
            // { path: '/qlk/import/purchase', element: <WarehouseImportPurchase /> },
            // { path: '/qlk/import/fg', element: <WarehouseImportFg /> },

            // { path: '/qlk/import/po', element: <WarehousePo /> },
            // { path: '/qlk/import/kqsx', element: <WarehouseKqsx /> },

            // // { path: '/qlk/example', element: <Example /> },
            // { path: '/qlk/export/direct', element: <WarehouseExportDirect /> },
            // { path: '/qlk/export/lgh', element: <WarehouseExLGH /> },
            // { path: '/qlk/export/kqsx', element: <WarehouseExKqsx /> },
            // { path: '/qlk/transfer', element: <WarehouseTransfer /> },

            // { path: '/production/kqsx-tgv', element: <ProductionKqsxTgv /> },
            // { path: '/production/xvt-lsx', element: <ProductionXvtLsx /> },
            // { path: '/production/xvt-tgv', element: <ProductionXvtTgv /> },

            // { path: '/report/im-ex', element: <ReportImportExport /> },
            // { path: '/report/lot', element: <ReportLot /> },
            // { path: '/mail/inbox', element: <Inbox /> },
            // { path: '/mail/outbox', element: <Outbox /> },
            // { path: '/settings', element: <Settings /> },
            // { path: '*', element: <Navigate to="/auth/404" /> },
        ],
    },
    {
        path: '/auth',
        element: <BlankLayout />,
        children: [
            { path: '404', element: <Error /> },
            { path: 'login', element: <Login /> },
            // { path: '/register', element: <Register /> },
            // { path: '/reset-password', element: <ResetPassword /> },
            { path: '*', element: <Navigate to="/auth/404" /> },
        ],
    },
];

export default Router;
