export type AppCategory = 'HR' | 'Admin' | 'IT Services' | 'Management' | 'General';

export interface AppEntity {
  id: string;
  name: string;
  description: { vi: string; en: string };
  iconUrl: string; // URL tới ảnh hoặc tên icon Lucide (sẽ xử lý ở component hiển thị)
  thumbnailUrl?: string; // URL tới hình ảnh cover/thumbnail của app
  url: string;     // Link truy cập ứng dụng
  category: AppCategory;
  isNew?: boolean; // Label cho ứng dụng mới
  tags?: string[];
}
