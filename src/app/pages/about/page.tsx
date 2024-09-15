'use client';

import { routes } from '@/app/(DashboardLayout)/components/nav/nav';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function AboutPage() {
  return (
    <PageContainer title={routes.about.title} description={`${routes.about.title} Page`}>
      <div className={`pageGrid aboutPageGrid flex column gap20 w100`}>
        <div className={`pageRow aboutPageRow flex gap20`}>
          <DCard minHeight={280} title={routes.about.title} className={`w100`}>
            This is the {routes.about.title} Page
          </DCard>
          <div className={`pageColumn aboutPageColumn flex gap20 h100`}>
            <DCard title={routes.about.title} className={`w100 h100`}>
              This is the {routes.about.title} Page
            </DCard>
            <DCard title={routes.about.title} className={`w100 h100`}>
              This is the {routes.about.title} Page
            </DCard>
          </div>
        </div>
        <DCard title={routes.about.title} className={`w100`}>
          This is the {routes.about.title} Page
        </DCard>
        <DCard title={routes.about.title} className={`w100`}>
          This is the {routes.about.title} Page
        </DCard>
        <DCard title={routes.about.title} className={`w100`}>
          This is the {routes.about.title} Page
        </DCard>
      </div>
    </PageContainer>
  );
};