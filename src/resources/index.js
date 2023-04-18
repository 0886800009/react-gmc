const resources = {
    locations: ['Tầng 1', 'Tầng 2', 'Tầng 3', 'Tầng 4'],
    roles: ['Leader', 'Dev'],
    public: {
        false: 'Private',
        true: 'Public'
    },
    leaveTypeOptions: [
        {
            id: 1,
            label: 'Nghỉ việc riêng'
        },
        {
            id: 2,
            label: 'Nghỉ ốm'
        },
        {
            id: 3,
            label: 'Phép năm'
        },
        {
            id: 4,
            label: 'Nghỉ kết hôn'
        },
        {
            id: 5,
            label: 'Nghỉ thai sản'
        },
        {
            id: 6,
            label: 'Nghỉ tang chế'
        },
        {
            id: 7,
            label: 'Nghỉ không hưởng lương'
        },
        {
            id: 8,
            label: 'Nghỉ không phép'
        },
        {
            id: 9,
            label: 'Nghỉ tai nạn'
        },
        {
            id: 10,
            label: 'Nghỉ con kết hôn'
        },
    ],
    typeCombox: [
        { id: 'Permision', label: 'Có đơn' },
        { id: 'UnPermision', label: 'Không đơn' },
    ],
    status: [
        { id: 'New', label: 'Mới', color: 'info' },
        { id: 'InProgress', label: 'Đang xử lý', color: 'warning' },
        { id: 'Approved', label: 'Đã duyệt', color: 'success' },
        { id: 'Approving', label: 'Đang duyệt', color: 'warning' },
        { id: 'Rejected', label: 'Từ chối', color: 'error' }
    ],
    approveStatus: [
        { id: 'InProgress', label: 'Đang xử lý', color: 'warning' },
        { id: 'Approved', label: 'Đã duyệt', color: 'success' },
        { id: 'Rejected', label: 'Từ chối', color: 'error' }
    ],
    postStatusList: [
        { id: 'New', label: 'Chưa ghi sổ' },
        { id: 'Post', label: 'Ghi sổ' }
    ],
    statusLgh: [
        { id: 'New', label: 'Mới' },
        { id: 'Incomplete', label: 'Chưa hoàn thành' },
        { id: 'Complete', label: 'Hoàn thành' }
    ],
    mailTypes: [
        { id: 'EmployeeOffWork', label: 'Báo phép' },
        { id: 'EmployeeOvertime', label: 'Tăng ca' },
        { id: 'TravelCalendar', label: 'Lịch công tác' },
        { id: 'PR', label: 'Purchase request' },
        { id: 'PO', label: 'Purchase order' },
        { id: 'PmtReq', label: 'Payment request' },
        { id: 'SO', label: 'Sale Order' },
        // { id: 'fromPo', label: 'Nhập kho từ PO' },
        // { id: 'fromPrdRst', label: 'Nhập kho từ KQSX' }
    ],
    units: [
        {
            id: 1,
            label: 'Cái'
        },
        {
            id: 2,
            label: 'Sheet'
        }
    ],
    qcStatus: [
        { id: 'Complete', label: 'Complete' },
        { id: 'New', label: 'New' },
    ]
};

export default resources;
