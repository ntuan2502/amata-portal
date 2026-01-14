import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
