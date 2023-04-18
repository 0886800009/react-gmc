export const PAGE_TYPE = {
    OVERTIME: 'EmployeeOvertime',
    OFF_WORK: 'EmployeeOffWork',
    WORKING_SCHEDULE: 'TravelCalendar',
    PURCHASE_REQUEST: 'PR',
    PAYMENT_REQUEST: 'PmtReq',
    PURCHASE_ORDER: 'PO',
    SALE_ORDER: 'SO',
    WAREHOUSE_PO: 'fromPo',
    WAREHOUSE_IMPORT_DIRECT: 'fromDirect',
    WAREHOUSE_KQSX: 'fromPrdRst',
    WAREHOUSE_IMPORT_PURCHASE: 'fromPurchaseRequire',
    WAREHOUSE_IMPORT_FG: 'fromPrdFG',
    WAREHOUSE_EX_LGH: 'fromRo',
    WAREHOUSE_EX_KQSX: 'exfromPrdRst',
    WAREHOUSE_EXPORT_DIRECT: 'fromDirectEx',
    WAREHOUSE_TRANSFER: 'transfer',
    PRODUCTION_KQSX_TGV: 'jobticket',
    PRODUCTION_XVT_LSX: 'fromWo',
    PRODUCTION_XVT_TGV: 'fromjobticket',
    REPORT_LOT: 'reportLot',
    REPORT_IMPORT_EXPORT: 'reportImportExport',
};

export const MENU_CONFIG = [
    // HR
    {
        icon: 'users',
        href: '/hr',
        no: 'hr',
    },
    {
        no: 'offWork',
        icon: 'corner-down-right',
        href: '/hr/leave',
    },
    {
        no: 'overtimeRate',
        icon: 'corner-down-right',
        href: '/hr/overtime',
    },
    {
        no: 'travelCalendar',
        icon: 'corner-down-right',
        href: '/hr/working-schedule',
    },

    // Approval
    {
        icon: 'book-open',
        href: '/approval',
        no: 'approval'
    },
    {
        no: 'pr',
        icon: 'corner-down-right',
        href: '/approval/purchase-request',
    },
    {
        no: 'po',
        icon: 'corner-down-right',
        href: '/approval/purchase-order',
    },
    {
        no: 'voucherPay',
        icon: 'corner-down-right',
        href: '/approval/payment-order',
    },
    {
        no: 'so',
        icon: 'corner-down-right',
        href: '/approval/sale-order',
    },

    // Warehouse
    {
        icon: 'home',
        href: '/qlk',
        no: 'warehouseMan'
    },
    // Warehouse import
    {
        no: 'warehouseIn',
        icon: 'corner-down-right',
        href: '/qlk/import',
    },
    {
        no: 'importDirect',
        icon: 'corner-down-right',
        href: '/qlk/import/direct',
    },
    {
        no: 'importPurchase',
        icon: 'corner-down-right',
        href: '/qlk/import/purchase',
    },
    {
        no: 'importFg',
        icon: 'corner-down-right',
        href: '/qlk/import/fg',
    },
    {
        no: 'fromPo',
        icon: 'corner-down-right',
        href: '/qlk/import/po',
    },
    {
        no: 'fromPrdRst',
        icon: 'corner-down-right',
        href: '/qlk/import/kqsx',
    },
    // Warehouse export
    {
        no: 'warehouseOut',
        icon: 'corner-down-right',
        href: '/qlk/export',
    },
    {
        no: 'exportDirect',
        icon: 'corner-down-right',
        href: '/qlk/export/direct',
    },
    {
        no: 'fromRO',
        icon: 'corner-down-right',
        href: '/qlk/export/lgh',
    },
    {
        no: 'fromKQSX',
        icon: 'corner-down-right',
        href: '/qlk/export/kqsx',
    },
    {
        no: 'transfer',
        icon: 'corner-down-right',
        href: '/qlk/transfer',
    },

    // Production
    {
        icon: 'layers',
        href: '/production',
        no: 'production'
    },
    {
        no: 'producResult',
        icon: 'corner-down-right',
        href: '/production/kqsx-tgv',
    },
    {
        no: 'xvtLsx',
        icon: 'corner-down-right',
        href: '/production/xvt-lsx',
    },
    {
        no: 'xvtTgv',
        icon: 'corner-down-right',
        href: '/production/xvt-tgv',
    },
    // Report
    {
        icon: 'credit-card',
        href: '/report',
        no: 'report'
    },
    {
        no: 'reportImEx',
        icon: 'corner-down-right',
        href: '/report/im-ex',
    },
    {
        no: 'reportLot',
        icon: 'corner-down-right',
        href: '/report/lot',
    },
    // Mail
    {
        icon: 'mail',
        href: '/mail',
        no: 'mailBox'
    },
    {
        no: 'inbox',
        icon: 'corner-down-right',
        href: '/mail/inbox',
    },
    {
        no: 'outbox',
        icon: 'corner-down-right',
        href: '/mail/outbox',
    }
];
