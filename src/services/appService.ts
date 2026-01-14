import { AppEntity } from '@/types';

// MOCK_APPS updated based on user request with inferred metadata
export const MOCK_APPS: AppEntity[] = [
    {
        id: '1',
        name: 'Car Booking',
        description: {
            vi: 'Đặt xe công tác, quản lý lịch trình di chuyển và tài xế.',
            en: 'Book business trips, manage travel schedules and drivers.'
        },
        iconUrl: 'Car',
        thumbnailUrl: 'https://images.unsplash.com/photo-1582834202430-ddcd18987a61?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
        url: 'https://mis.amata.com/car_booking/login.aspx',
        category: 'Admin'
    },
    {
        id: '2',
        name: 'EZ Order',
        description: {
            vi: 'Hệ thống đặt văn phòng phẩm và các nhu yếu phẩm hành chính.',
            en: 'Order stationery and administrative supplies.'
        },
        iconUrl: 'ShoppingBasket',
        thumbnailUrl: 'https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
        url: 'https://apps.powerapps.com/play/e/default-06d2bc4d-7325-430e-808f-ecfe9126a217/a/58d921fe-51e6-444f-bd3d-883346ead46a?tenantId=06d2bc4d-7325-430e-808f-ecfe9126a217&hint=8513fb94-d586-4c87-83df-bd4d5c551e0b&sourcetime=1749457509877&source=portal&hidenavbar=true',
        category: 'Admin',
        isNew: true
    },
    {
        id: '3',
        name: 'HRIS',
        description: {
            vi: 'Quản lý hồ sơ nhân sự, chấm công, đăng ký nghỉ phép và bảng lương.',
            en: 'Manage HR profiles, attendance, leave requests, and payroll.'
        },
        iconUrl: 'Users',
        thumbnailUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
        url: 'http://portalvn.amata.com:9669/New_Login/New_Index',
        category: 'HR'
    },
    {
        id: '4',
        name: 'IT Ticket',
        description: {
            vi: 'Gửi yêu cầu hỗ trợ kỹ thuật, báo cáo sự cố hệ thống.',
            en: 'Submit technical support requests and report system issues.'
        },
        iconUrl: 'Ticket',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
        url: 'https://mis.amata.com/ticket/login.aspx',
        category: 'IT Services'
    },
    {
        id: '5',
        name: 'Office 365',
        description: {
            vi: 'Bộ công cụ làm việc trực tuyến: Outlook, Teams, OneDrive, Excel.',
            en: 'Online productivity suite: Outlook, Teams, OneDrive, Excel.'
        },
        iconUrl: 'LayoutGrid',
        thumbnailUrl: 'https://images.unsplash.com/photo-1632239776255-0a7f24814df2?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
        url: 'https://portal.office.com/',
        category: 'IT Services'
    },
    {
        id: '6',
        name: 'Online Approval',
        description: {
            vi: 'Hệ thống phê duyệt văn bản và quy trình trực tuyến.',
            en: 'Online document approval and process management system.'
        },
        iconUrl: 'FileCheck',
        thumbnailUrl: 'https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?ixlib=rb-4.1.0&q=80&w=800&auto=format&fit=crop',
        url: 'https://mis.amata.com/online_approval/',
        category: 'Management',
    },
    {
        id: '7',
        name: 'VN Intranet',
        description: {
            vi: 'Mạng nội bộ AMATA Việt Nam - Tin tức và thông báo quan trọng.',
            en: 'AMATA Vietnam Intranet - News and important announcements.'
        },
        iconUrl: 'Globe',
        thumbnailUrl: 'https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?auto=format&fit=crop&q=80&w=800',
        url: 'https://vnintranet.amata.com/intranet/',
        category: 'Management',
        isNew: true
    }
];

// Giả lập lấy dữ liệu bất đồng bộ
export const getApps = async (): Promise<AppEntity[]> => {
    // Thực tế sẽ gọi API: const res = await fetch('/api/apps'); return res.json();
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_APPS), 500); // 0.5s delay
    });
};
