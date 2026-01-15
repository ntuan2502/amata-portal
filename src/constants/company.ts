export interface CompanyInfo {
    fullName: string;
    logo: string;
    taxCode: string;
    taxAddress: {
        vi: string;
        en: string;
    };
    intlName: string;
    shortName: string;
}

export const ACBH: CompanyInfo = {
    fullName: "CÔNG TY CỔ PHẦN ĐÔ THỊ AMATA BIÊN HÒA",
    logo: "/images/logo/acbh.png",
    taxCode: "3600265395",
    taxAddress: {
        vi: "KCN Long Bình (Amata), Phường Long Bình, Tỉnh Đồng Nai, Việt Nam",
        en: "Long Binh Industrial Park (Amata), Long Binh Ward, Dong Nai Province, Vietnam"
    },
    intlName: "AMATA CITY BIENHOA JOINT STOCK COMPANY",
    shortName: "ACBH",
};

export const ACLT: CompanyInfo = {
    fullName: "CÔNG TY CỔ PHẦN ĐÔ THỊ AMATA LONG THÀNH",
    logo: "/images/logo/aclt.png",
    taxCode: "3603295006",
    taxAddress: {
        vi: "Khu Công Nghiệp Công Nghệ Cao Long Thành, Xã Long Thành, Tỉnh Đồng Nai, Việt Nam",
        en: "Long Thanh High-Tech Industrial Park, Long Thanh Commune, Dong Nai Province, Vietnam"
    },
    intlName: "AMATA CITY LONGTHANH JOINT STOCK COMPANY",
    shortName: "ACLT",
};

export const ACHL: CompanyInfo = {
    fullName: "CÔNG TY CỔ PHẦN ĐÔ THỊ AMATA HẠ LONG",
    logo: "/images/logo/achl.png",
    taxCode: "5701929293",
    taxAddress: {
        vi: "Khu Công nghiệp Sông Khoai, Phường Hiệp Hòa, Tỉnh Quảng Ninh, Việt Nam",
        en: "Song Khoai Industrial Park, Hiep Hoa Ward, Quang Ninh Province, Vietnam"
    },
    intlName: "AMATA CITY HA LONG JOINT STOCK COMPANY",
    shortName: "ACHL",
};

export const ATLT: CompanyInfo = {
    fullName: "CÔNG TY TNHH THÀNH PHỐ AMATA LONG THÀNH",
    logo: "/images/logo/atlt.png",
    taxCode: "3603404368",
    taxAddress: {
        vi: "Trung tâm dịch vụ Amata, Khu thương mại Amata, Phường Long Bình, Tỉnh Đồng Nai, Việt Nam",
        en: "Amata Service Center, Amata Commercial Complex, Long Binh Ward, Dong Nai Province, Vietnam"
    },
    intlName: "AMATA TOWNSHIP LONG THANH COMPANY LIMITED",
    shortName: "ATLT",
};

export const ACPT: CompanyInfo = {
    fullName: "CÔNG TY CỔ PHẦN ĐÔ THỊ AMATA PHÚ THỌ",
    logo: "/images/logo/acpt.png",
    taxCode: "2601144546",
    taxAddress: {
        vi: "Khu Công nghiệp Đoan Hùng, Xã Đoan Hùng, Tỉnh Phú Thọ, Việt Nam",
        en: "Doan Hung Industrial Park, Doan Hung Commune, Phu Tho Province, Vietnam"
    },
    intlName: "AMATA CITY PHU THO JOINT STOCK COMPANY",
    shortName: "ACPT",
};

export const COMPANIES = { ACBH, ACLT, ACHL, ATLT, ACPT };
