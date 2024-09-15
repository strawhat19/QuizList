import { useContext } from 'react';
import Theme from '../theme/theme';
import { SharedDatabase } from '@/app/shared/shared';
import Header from '@/app/(DashboardLayout)/layout/header/Header';
import Footer from '@/app/(DashboardLayout)/layout/footer/Footer';
import Sidebar from '@/app/(DashboardLayout)/layout/sidebar/Sidebar';

export default function Document({ children }: { children: React.ReactNode; }) {
    let { darkMode, isSidebarOpen, isMobileSidebarOpen, setMobileSidebarOpen } = useContext<any>(SharedDatabase);

    return (
        <html lang={`en`} className={`quizListHTML ${darkMode ? `dark` : `light`}`}>
            <body className={`quizListBody ${darkMode ? `dark` : `light`}`}>
                <Theme>
                    <div className={`wrapper w100 simpleFlex mh100vh`}>
                        <Sidebar
                            isSidebarOpen={isSidebarOpen}
                            isMobileSidebarOpen={isMobileSidebarOpen}
                            onSidebarClose={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
                        />
                        <div className={`page content w100`}>
                            <Header />
                            <main id={`main`} className={`main column flex space gapSpace w100`}>
                                {children}
                            </main>
                            <Footer />
                        </div>
                    </div>
                </Theme>
            </body>
        </html>
    )
}