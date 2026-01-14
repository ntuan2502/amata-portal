import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'vi' | 'en';

interface LanguageState {
    language: Language;
    _hasHydrated: boolean;
    setLanguage: (lang: Language) => void;
    setHasHydrated: (state: boolean) => void;
    t: (key: string) => string;
}

const translations = {
    vi: {
        'search.placeholder': 'Tìm kiếm ứng dụng...',
        'footer.copyright': '© 2024 Tập đoàn AMATA. Đã đăng ký bản quyền.',
        'apps.all': 'Tất cả',
        'category.Admin': 'Hành chính',
        'category.HR': 'Nhân sự',
        'category.IT Services': 'Dịch vụ CNTT',
        'category.Management': 'Quản lý',
        'category.General': 'Chung',
        'app.visit': 'Truy cập',
        header_title: "Cổng thông tin AMATA"
    },
    en: {
        'search.placeholder': 'Search applications...',
        'footer.copyright': '© 2024 AMATA Group. All rights reserved.',
        'apps.all': 'All',
        'category.Admin': 'Admin',
        'category.HR': 'HR',
        'category.IT Services': 'IT Services',
        'category.Management': 'Management',
        'category.General': 'General',
        'app.visit': 'Open App',
        header_title: "AMATA Portal"
    }
};

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set, get) => ({
            language: 'vi',
            _hasHydrated: false,
            setLanguage: (lang) => set({ language: lang }),
            setHasHydrated: (state) => set({ _hasHydrated: state }),
            t: (key) => {
                const lang = get().language;
                return translations[lang][key as keyof typeof translations['vi']] || key;
            },
        }),
        {
            name: 'language-storage',
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        }
    )
);
