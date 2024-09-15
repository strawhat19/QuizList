'use client';

import Link from 'next/link';
import Logo from '@/app/components/logo/logo';
import SignInForm from '../../components/auth/SignIn';
import { Box, Stack, Typography } from '@mui/material';
import { routes } from '@/app/(DashboardLayout)/components/nav/nav';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function Signin({}: any) {
  return (
    <PageContainer title={routes.signin.title} description={`${routes.signin.title} Page`}>
      <DCard className={`signinContainer w100`}>
        <>
          <Box display={`flex`} alignItems={`center`} justifyContent={`center`}>
            <Logo className={`center`} />
          </Box>
          <SignInForm
            subtext={
              <Typography mb={1} textAlign={`center`} variant={`subtitle1`} color={`textSecondary`}>
                Your Social Campaigns
              </Typography>
            }
            subtitle={
              <Stack mt={3} spacing={1} direction={`row`} justifyContent={`center`}>
                <Typography variant={`h6`} fontWeight={`500`} color={`textSecondary`}>
                  New to Modernize?
                </Typography>
                <Typography
                  component={Link}
                  fontWeight={`500`}
                  href={routes.signup.href}
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                  }}
                >
                  Create an account
                </Typography>
              </Stack>
            }
          />
        </>
      </DCard>
    </PageContainer>
  );
};