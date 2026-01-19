import { AppGrid } from '@/features/showcase/components/AppGrid';
import { CompanySection } from '@/components/company/CompanySection';
import { getApps } from '@/services/appService';
import { ClientLoader } from '@/components/layout/ClientLoader';

export default async function DashboardPage() {
    const apps = await getApps();

    return (
        <div className="space-y-8 min-h-[calc(100vh-4rem)]">
            <div className="relative">
                <ClientLoader>
                    <AppGrid apps={apps} />
                    <CompanySection />
                </ClientLoader>
            </div>
        </div>
    );
}
