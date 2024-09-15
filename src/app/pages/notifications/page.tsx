'use client';


import { Grid } from '@mui/material';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import { routes } from '@/app/(DashboardLayout)/components/nav/nav';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function NotificationsPage() {
  return (
    <PageContainer title={routes.notifications.title} description={`${routes.notifications.title} Page`}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <DCard minHeight={280} title={routes.notifications.title}>
            This is the {routes.notifications.title} Page
          </DCard>
        </Grid>
      </Grid>
      {/* <div className={`pageGrid notificationsPageGrid flex column gap20 w100`}>
        <div className={`pageRow notificationsPageRow flex gap20`}>
          <DCard minHeight={280} title={routes.notifications.title} className={`w100`}>
            This is the {routes.notifications.title} Page
          </DCard>
          <div className={`pageColumn notificationsPageColumn flex gap20 h100`}>
            <DCard title={routes.notifications.title} className={`w100 h100`}>
              This is the {routes.notifications.title} Page
            </DCard>
            <DCard title={routes.notifications.title} className={`w100 h100`}>
              This is the {routes.notifications.title} Page
            </DCard>
          </div>
        </div>
        <DCard title={routes.notifications.title} className={`w100`}>
          This is the {routes.notifications.title} Page
        </DCard>
        <DCard title={routes.notifications.title} className={`w100`}>
          This is the {routes.notifications.title} Page
        </DCard>
        <DCard title={routes.notifications.title} className={`w100`}>
          This is the {routes.notifications.title} Page
        </DCard>
      </div> */}
    </PageContainer>
  );
};