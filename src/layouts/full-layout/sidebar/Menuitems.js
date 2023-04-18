const Menuitems = (menuMore = []) => [
  // {
  //   navlabel: true,
  //   subheader: 'DASHBOARDS',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Dashboard',
  // },
  // {
  //   name: 'Modern',
  //   icon: 'hard-drive',
  //   href: '/dashboards/dashboard3',
  // },
  {
    name: 'Dashboard',
    icon: 'pie-chart',
    href: '/dashboard',
  },
  {
    name: 'Quản lý bán hàng',
    icon: 'shopping-bag',
    href: '/sm', // sales manager - Quản lý bán hàng
    collapse: true,
    children: [
      {
        name: 'Bảng giá',
        icon: 'corner-down-right',
        href: '/sm/price',
      },
      {
        name: 'Đơn hàng bán',
        icon: 'corner-down-right',
        href: '/sm/order',
      },
    ],
  },
  {
    name: 'Quản lý nhân sự',
    icon: 'users',
    href: '/hr',
    collapse: true,
    children: [
      {
        name: 'Báo phép',
        icon: 'corner-down-right',
        href: '/hr/leave',
      },
      {
        name: 'Đăng ký tăng ca',
        icon: 'corner-down-right',
        href: '/hr/overtime',
      },
      {
        name: 'Lịch công tác',
        icon: 'corner-down-right',
        href: '/hr/working-schedule',
      },
    ],
  },
  {
    name: 'Phê duyệt',
    icon: 'book-open',
    href: '/approval',
    collapse: true,
    children: [
      {
        name: 'Đề nghị mua hàng',
        icon: 'corner-down-right',
        href: '/approval/purchase-request',
      },
      {
        name: 'Đơn đặt mua hàng',
        icon: 'corner-down-right',
        href: '/approval/purchase-order',
      },
      {
        name: 'Đề nghị thanh toán',
        icon: 'corner-down-right',
        href: '/approval/payment-order',
      },
      {
        name: 'Đơn hàng bán',
        icon: 'corner-down-right',
        href: '/approval/sale-order',
      },
    ],
  },
  {
    name: 'Quản lý kho',
    icon: 'book-open',
    href: '/approval',
    collapse: true,
    children: [
      {
        name: 'Nhập kho',
        icon: 'corner-down-right',
        href: '/qlk/import',
        collapse: true,
        children: [
          {
            name: 'Nhập kho trực tiếp',
            icon: 'corner-down-right',
            href: '/qlk/import/direct',
          },
          {
            name: 'Nhập kho mua hàng',
            icon: 'corner-down-right',
            href: '/qlk/import/purchase',
          },
          {
            name: 'Nhập kho thành phẩm',
            icon: 'corner-down-right',
            href: '/qlk/import/fg',
          },
          {
            name: 'Nhập kho từ PO',
            icon: 'corner-down-right',
            href: '/qlk/import/po',
          },
          {
            name: 'Nhập kho từ KQSX',
            icon: 'corner-down-right',
            href: '/qlk/import/kqsx',
          },
        ],
      },
      {
        name: 'Xuất kho',
        icon: 'corner-down-right',
        href: '/qlk/export',
        collapse: true,
        children: [
          {
            name: 'Xuất kho trực tiếp',
            icon: 'corner-down-right',
            href: '/qlk/export/direct',
          },
          {
            name: 'Xuất kho từ LGH',
            icon: 'corner-down-right',
            href: '/qlk/export/lgh',
          },
          {
            name: 'Xuất kho từ KQSX',
            icon: 'corner-down-right',
            href: '/qlk/export/kqsx',
          },

        ],
      },
      {
        name: 'Chuyển kho nội bộ',
        icon: 'corner-down-right',
        href: '/qlk/transfer',
      },

    ],
  },
  {
    name: 'Quản lý sản xuất',
    icon: 'layers',
    href: '/production',
    collapse: true,
    children: [
      {
        name: 'Tạo KQSX từ TGV',
        icon: 'corner-down-right',
        href: '/production/kqsx-tgv',
      },
      {
        name: 'Đề nghị XVT từ LSX',
        icon: 'corner-down-right',
        href: '/production/xvt-lsx',
      },
      {
        name: 'Đề nghị XVT từ TGV',
        icon: 'corner-down-right',
        href: '/production/xvt-tgv',
      },

    ],
  },
  {
    name: 'Báo cáo tồn kho',
    icon: 'credit-card',
    href: '/report',
    collapse: true,
    children: [
      {
        name: 'Nhập xuất tồn',
        icon: 'corner-down-right',
        href: '/report/im-ex',
      },
      {
        name: 'Thống kê tồn kho theo Slot Lotno SerialNo',
        icon: 'corner-down-right',
        href: '/report/lot',
      },
      {
        name: 'Đề nghị XVT từ TGV',
        icon: 'corner-down-right',
        href: '/production/xvt-tgv',
      },

    ],
  },
  {
    name: 'Hộp thư',
    icon: 'mail',
    href: '/mail',
    collapse: true,
    children: [
      {
        name: 'Hộp thư đến',
        icon: 'corner-down-right',
        href: '/mail/inbox',
      },
      {
        name: 'Hộp thư đi',
        icon: 'corner-down-right',
        href: '/mail/outbox',
      },

    ],
  },

  ...menuMore,
  {
    name: 'Settings',
    icon: 'settings',
    href: '/settings',
  },
  // {
  //   name: 'Analytical',
  //   icon: 'pie-chart',
  //   href: '/dashboards/dashboard1',
  // },
  // {
  //   name: 'eCommerce',
  //   icon: 'shopping-bag',
  //   href: '/dashboards/dashboard2',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'APPS',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Apps',
  // },
  // {
  //   name: 'Chat',
  //   icon: 'message-square',
  //   href: '/chats',
  // },
  // {
  //   name: 'Notes',
  //   icon: 'clipboard',
  //   href: '/notes',
  // },
  // {
  //   name: 'Mail',
  //   icon: 'inbox',
  //   href: '/email',
  // },

  // {
  //   name: 'Calendar',
  //   icon: 'calendar',
  //   href: '/calendar',
  // },

  // {
  //   name: 'Customers',
  //   icon: 'users',
  //   href: '/customers',
  //   collapse: true,
  //   children: [
  //     {
  //       name: 'Lists',
  //       icon: 'list',
  //       href: '/customers/lists',
  //     },
  //     {
  //       name: 'Edit',
  //       icon: 'edit',
  //       href: '/customers/edit',
  //     },
  //   ],
  // },
  // {
  //   navlabel: true,
  //   subheader: 'PAGES',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Pages',
  // },
  // {
  //   name: 'Shop',
  //   icon: 'shopping-cart',
  //   href: '/shop',
  //   collapse: true,
  //   children: [
  //     {
  //       name: 'Listing',
  //       icon: 'list',
  //       href: '/shop/lists',
  //     },
  //     {
  //       name: 'Detail',
  //       icon: 'file-text',
  //       href: '/shop/shop-detail',
  //     },
  //   ],
  // },
  // {
  //   name: 'Alert',
  //   icon: 'alert-circle',
  //   href: '/alert',
  // },
  // {
  //   name: 'User Profile',
  //   icon: 'user',
  //   href: '/user-profile',
  // },
  // {
  //   name: 'Quill Editor',
  //   icon: 'edit',
  //   href: '/quill-editor',
  // },
  // {
  //   name: 'Treeview',
  //   icon: 'git-pull-request',
  //   href: '/treeview',
  // },
  // {
  //   name: 'Pricing',
  //   icon: 'dollar-sign',
  //   href: '/pricing',
  // },
  // {
  //   name: 'Typography',
  //   icon: 'type',
  //   href: '/typography',
  // },
  // {
  //   name: 'Feather Icons',
  //   icon: 'feather',
  //   href: '/react-icons',
  // },
  // {
  //   name: 'Timeline',
  //   icon: 'clock',
  //   href: '/timeline',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'FORMS',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Form',
  // },
  // {
  //   name: 'Form Elements',
  //   icon: 'box',
  //   href: '/form-elements',
  //   collapse: true,
  //   children: [
  //     {
  //       name: 'Autocomplete',
  //       icon: 'compass',
  //       href: '/form-elements/autocomplete',
  //     },
  //     {
  //       name: 'Buttons',
  //       icon: 'codepen',
  //       href: '/form-elements/button',
  //     },
  //     {
  //       name: 'Checkbox',
  //       icon: 'check-square',
  //       href: '/form-elements/checkbox',
  //     },
  //     {
  //       name: 'Radio',
  //       icon: 'check-circle',
  //       href: '/form-elements/radio',
  //     },
  //     {
  //       name: 'Date Time',
  //       icon: 'calendar',
  //       href: '/form-elements/date-time',
  //     },
  //     {
  //       name: 'Slider',
  //       icon: 'git-commit',
  //       href: '/form-elements/slider',
  //     },
  //     {
  //       name: 'Switch',
  //       icon: 'toggle-left',
  //       href: '/form-elements/switch',
  //     },
  //   ],
  // },
  // {
  //   name: 'Form Layout',
  //   icon: 'file-text',
  //   href: '/form-layouts/form-layouts',
  // },
  // {
  //   name: 'Form Custom',
  //   icon: 'file-plus',
  //   href: '/form-layouts/form-custom',
  // },
  // {
  //   name: 'Form Wizard',
  //   icon: 'codepen',
  //   href: '/form-layouts/form-wizard',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'TABLES',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Table',
  // },
  // {
  //   name: 'Tables',
  //   icon: 'layout',
  //   href: '/tables',
  //   collapse: true,
  //   children: [
  //     {
  //       name: 'Basic Table',
  //       icon: 'disc',
  //       href: '/tables/basic-table',
  //     },
  //     {
  //       name: 'Pagination Table',
  //       icon: 'disc',
  //       href: '/tables/pagination-table',
  //     },
  //     {
  //       name: 'Enhanced Table',
  //       icon: 'disc',
  //       href: '/tables/enhanced-table',
  //     },
  //     {
  //       name: 'Collapsible Table',
  //       icon: 'disc',
  //       href: '/tables/collapsible-table',
  //     },
  //     {
  //       name: 'Fixed Header Table',
  //       icon: 'disc',
  //       href: '/tables/fixed-header-table',
  //     },
  //   ],
  // },
  // {
  //   navlabel: true,
  //   subheader: 'WIDGETS',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Widgets',
  // },
  // {
  //   name: 'Widget Feed',
  //   icon: 'archive',
  //   href: '/widgets/widget-feed',
  // },

  // {
  //   name: 'Widget Apps',
  //   icon: 'grid',
  //   href: '/widgets/widget-apps',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'CHARTS',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Chart',
  // },
  // {
  //   name: 'Line Chart',
  //   icon: 'activity',
  //   href: '/charts/line-chart',
  // },
  // {
  //   name: 'Gredient Chart',
  //   icon: 'bar-chart',
  //   href: '/charts/gredient-chart',
  // },
  // {
  //   name: 'Doughnut & Pie',
  //   icon: 'bar-chart-2',
  //   href: '/charts/doughnut-pie-chart',
  // },
  // {
  //   name: 'Area Chart',
  //   icon: 'aperture',
  //   href: '/charts/area-chart',
  // },
  // {
  //   name: 'Column Chart',
  //   icon: 'circle',
  //   href: '/charts/column-chart',
  // },
  // {
  //   name: 'Candlestick Chart',
  //   icon: 'loader',
  //   href: '/charts/candlestick-chart',
  // },
  // {
  //   name: 'Radialbar & Radar',
  //   icon: 'octagon',
  //   href: '/charts/radialbar-chart',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'AUTHENTICATION',
  //   icon: 'mdi mdi-dots-horizontal',
  //   href: 'Authentication',
  // },
  // {
  //   name: 'Log in',
  //   icon: 'log-in',
  //   href: '/auth/login',
  // },
  // {
  //   name: 'Register',
  //   icon: 'user-plus',
  //   href: '/auth/register',
  // },
  // {
  //   name: 'Reset Password',
  //   icon: 'refresh-ccw',
  //   href: '/auth/reset-password',
  // },
  {
    name: 'Error',
    icon: 'alert-triangle',
    href: '/404',
  },
];

export default Menuitems;
