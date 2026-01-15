import { AppGrid } from '@/features/showcase/components/AppGrid';
import { CompanySection } from '@/components/company/CompanySection';
import { getApps } from '@/services/appService';

export default async function DashboardPage() {
    const apps = await getApps();

    return (
        <div className="space-y-8 min-h-[calc(100vh-4rem)]">
            <div className="relative">

                <AppGrid apps={apps} />

                <CompanySection />
            </div>
        </div>
    );
}
