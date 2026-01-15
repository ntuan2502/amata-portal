import { AppGrid } from '@/features/showcase/components/AppGrid';
import { CompanySection } from '@/components/company/CompanySection';
import { getApps } from '@/services/appService';

export default async function DashboardPage() {
    const apps = await getApps();

    return (
        <div className="space-y-8 relative overflow-hidden min-h-[calc(100vh-4rem)]">


            <div className="relative">
                {/* Background blobs for effect - Contained within this relative div but let's make sure parent clips it */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
                <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

                <AppGrid apps={apps} />

                <CompanySection />
            </div>
        </div>
    );
}
