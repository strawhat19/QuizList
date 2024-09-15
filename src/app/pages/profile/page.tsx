'use client';

import { routes } from '@/app/(DashboardLayout)/components/nav/nav';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function ProfilePage() {
  return (
    <PageContainer title={routes.profile.title} description={`${routes.profile.title} Page`}>
      <div className={`pageGrid profilePageGrid flex column gap20 w100`}>
        <div className={`pageRow profilePageRow flex gap20`}>
          <DCard minHeight={280} title={routes.profile.title} className={`w100`}>
            This is the {routes.profile.title} Page
          </DCard>
          <div className={`pageColumn profilePageColumn flex gap20 h100`}>
            <DCard title={routes.profile.title} className={`w100 h100`}>
              This is the {routes.profile.title} Page
            </DCard>
            <DCard title={routes.profile.title} className={`w100 h100`}>
              This is the {routes.profile.title} Page
            </DCard>
          </div>
        </div>
        <DCard title={routes.profile.title} className={`w100`}>
          This is the {routes.profile.title} Page
        </DCard>
        <DCard title={routes.profile.title} className={`w100`}>
          This is the {routes.profile.title} Page
        </DCard>
        <DCard title={routes.profile.title} className={`w100`}>
          This is the {routes.profile.title} Page
        </DCard>
      </div>
    </PageContainer>
  );
};