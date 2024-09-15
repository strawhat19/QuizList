'use client';

import { routes } from '@/app/(DashboardLayout)/components/nav/nav';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function ContactPage() {
  return (
    <PageContainer title={routes.contact.title} description={`${routes.contact.title} Page`}>
      <div className={`pageGrid contactPageGrid flex column gap20 w100`}>
        <div className={`pageRow contactPageRow flex gap20`}>
          <DCard minHeight={280} title={routes.contact.title} className={`w100`}>
            This is the {routes.contact.title} Page
          </DCard>
          <div className={`pageColumn contactPageColumn flex gap20 h100`}>
            <DCard title={routes.contact.title} className={`w100 h100`}>
              This is the {routes.contact.title} Page
            </DCard>
            <DCard title={routes.contact.title} className={`w100 h100`}>
              This is the {routes.contact.title} Page
            </DCard>
          </div>
        </div>
        <DCard title={routes.contact.title} className={`w100`}>
          This is the {routes.contact.title} Page
        </DCard>
        <DCard title={routes.contact.title} className={`w100`}>
          This is the {routes.contact.title} Page
        </DCard>
        <DCard title={routes.contact.title} className={`w100`}>
          This is the {routes.contact.title} Page
        </DCard>
      </div>
    </PageContainer>
  );
};