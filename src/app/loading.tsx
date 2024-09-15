'use client';

import { Grid, Box } from '@mui/material';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';

export default function Loading() {
    return (
        <PageContainer title={`Dashboard`} description={`Dashboard Page`}>
            <Box>
                <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <SalesOverview />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <YearlyBreakup />
                    </Grid>
                    <Grid item xs={12}>
                        <MonthlyEarnings />
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <RecentTransactions />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <ProductPerformance />
                </Grid>
                <Grid item xs={12}>
                    <Blog />
                </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}