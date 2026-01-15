# Cổng Thông tin AMATA (AMATA Portal)

Chào mừng bạn đến với **AMATA Portal** - Trang tổng hợp ứng dụng và thông tin nội bộ của Tập đoàn AMATA. Dự án này cung cấp một giao diện hiện đại, tập trung để truy cập nhanh các công cụ làm việc và tra cứu thông tin các công ty thành viên.

## 🚀 Tính năng nổi bật

### 1. Danh sách Ứng dụng (Application Showcase)
- **Giao diện lưới (Grid Layout)**: Hiển thị danh sách ứng dụng trực quan với thumbnail và icon đại diện.
- **Tìm kiếm & Lọc**: Tìm kiếm ứng dụng theo tên hoặc mô tả. Bộ lọc theo danh mục (Admin, HR, IT Services, Management, v.v.).
- **Hiệu ứng mượt mà**: Sử dụng `Framer Motion` cho các hiệu ứng chuyển cảnh và hover tương tác.
- **Tiêu đề song ngữ**: Hỗ trợ hiển thị tiêu đề "Ứng dụng nội bộ" / "Internal Applications" theo ngôn ngữ chọn.

### 2. Thông tin Công ty (Company Information)
- **Hồ sơ chi tiết**: Hiển thị thông tin của 4 công ty thành viên chính:
    - **ACBH**: AMATA CITY BIENHOA
    - **ACLT**: AMATA CITY LONGTHANH
    - **ACHL**: AMATA CITY HA LONG
    - **ATLT**: AMATA TOWNSHIP LONG THANH
    - **ACPT**: AMATA CITY PHU THO
- **Giao diện Tab**: Chuyển đổi nhanh giữa các công ty với giao diện Tab hiện đại, hỗ trợ vuốt ngang trên mobile.
- **Đa ngôn ngữ**: Tự động chuyển đổi Tên công ty, Địa chỉ và các nhãn (Mã số thuế) giữa Tiếng Việt và Tiếng Anh.
- **Sao chép nhanh**: Tích hợp nút **Copy** tiện lợi, cho phép sao chép toàn bộ thông tin công ty vào clipboard với định dạng chuẩn.

### 3. Trải nghiệm người dùng (UX/UI)
- **Đa ngôn ngữ (i18n)**: Chuyển đổi tức thì giữa Tiếng Việt (VI) và Tiếng Anh (EN). Trạng thái ngôn ngữ được lưu trữ tự động.
- **Chế độ Tối (Dark Mode)**: Hỗ trợ giao diện sáng/tối hoàn chỉnh, tối ưu độ tương phản cho mọi thành phần.
- **Responsive**: Tương thích hoàn hảo trên mọi thiết bị từ Desktop, Tablet đến Mobile.

## 🛠️ Công nghệ sử dụng

Dự án được xây dựng trên các công nghệ web hiện đại nhất:

- **Core**: [Next.js 15+](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) cho utility-first styling.
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/) (xây dựng trên Radix UI) cho các component chất lượng cao.
- **Icons**: [Lucide React](https://lucide.dev/).
- **Animations**: [Framer Motion](https://www.framer.com/motion/).
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) cho quản lý trạng thái ngôn ngữ toàn cục.
- **Runtime**: [Bun](https://bun.sh/) (hoặc Node.js).

## 📦 Cài đặt và Chạy dự án

1.  **Cài đặt dependencies**:
    ```bash
    bun install
    # hoặc
    npm install
    ```

2.  **Chạy môi trường phát triển (Development)**:
    ```bash
    bun dev
    # hoặc
    npm run dev
    ```
    Truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

3.  **Build cho Production**:
    ```bash
    bun run build
    bun run start
    ```

## 📂 Cấu trúc dự án

- `src/app`: Chứa các page và layout chính (Next.js App Router).
- `src/components`: Các UI component tái sử dụng (Button, Card, Tabs...).
- `src/features`: Các feature lớn của ứng dụng (Showcase, Company Info...).
- `src/store`: Quản lý state (useLanguageStore).
- `src/constants`: Chứa dữ liệu tĩnh (danh sách công ty, thông tin ứng dụng).
- `src/services`: Các hàm xử lý logic/API giả lập.

## © Bản quyền

© 2026 - Hiện tại **Tập đoàn AMATA**. Tất cả các quyền được bảo lưu.
