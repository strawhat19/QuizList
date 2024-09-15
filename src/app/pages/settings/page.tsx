'use client';

import { routes } from '@/app/(DashboardLayout)/components/nav/nav';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function SettingsPage() {
  return (
    <PageContainer title={routes.settings.title} description={`${routes.settings.title} Page`}>
      <div className={`pageGrid settingsPageGrid flex column gap20 w100`}>
        <div className={`pageRow settingsPageRow flex gap20`}>
          <DCard minHeight={280} title={routes.settings.title} className={`w100`}>
            This is the {routes.settings.title} Page
          </DCard>
          <div className={`pageColumn settingsPageColumn flex gap20 h100`}>
            <DCard title={routes.settings.title} className={`w100 h100`}>
              This is the {routes.settings.title} Page
            </DCard>
            <DCard title={routes.settings.title} className={`w100 h100`}>
              This is the {routes.settings.title} Page
            </DCard>
          </div>
        </div>
        <DCard title={routes.settings.title} className={`w100`}>
          This is the {routes.settings.title} Page
        </DCard>
        <DCard title={routes.settings.title} className={`w100`}>
          This is the {routes.settings.title} Page
        </DCard>
        <DCard title={routes.settings.title} className={`w100`}>
          This is the {routes.settings.title} Page
        </DCard>
      </div>
    </PageContainer>
  );
};