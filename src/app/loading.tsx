'use client';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function Loading() {
    return (
        <PageContainer title={`Loading`} description={`Loading`}>
            <div className={`loading`}>Loading</div>
        </PageContainer>
    )
}