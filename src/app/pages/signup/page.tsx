'use client';

import Link from 'next/link';
import Logo from '@/app/components/logo/logo';
import SignUpForm from '../../components/auth/SignUp';
import { Box, Typography, Stack } from '@mui/material';
import { routes } from '@/app/(DashboardLayout)/components/nav/nav';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

export default function SignUp() {
  return (
    <PageContainer title={routes.signup.title} description={`${routes.signup.title} Page`}>
      <DCard className={`signupContainer w100`}>
        <>
          <Box display={`flex`} alignItems={`center`} justifyContent={`center`}>
            <Logo className={`center`} />
          </Box>
          <SignUpForm
            subtext={
              <Typography mb={1} textAlign={`center`} variant={`subtitle1`} color={`textSecondary`}>
                Your Social Campaigns
              </Typography>
            }
            subtitle={
              <Stack mt={3} spacing={1} direction={`row`} justifyContent={`center`}>
                <Typography color={`textSecondary`} variant={`h6`} fontWeight={`400`}>
                  Already have an Account?
                </Typography>
                <Typography
                  component={Link}
                  fontWeight={`500`}
                  href={routes.signin.href}
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                  }}
                >
                  {routes.signin.title}
                </Typography>
              </Stack>
            }
          />
        </>
      </DCard>
    </PageContainer>
  )
};