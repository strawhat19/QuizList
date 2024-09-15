import React from 'react';
import Link from 'next/link';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import { Box, Typography, FormGroup, FormControlLabel, Button, Stack, Checkbox } from '@mui/material';

interface loginType {
  title?: string;
  subtext?: JSX.Element | JSX.Element[];
  subtitle?: JSX.Element | JSX.Element[];
}

export default function SignInForm({ title, subtitle, subtext }: loginType) {
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}
  
      {subtext}
  
      <Stack>
        <Box>
          <Typography
            variant={`subtitle1`}
            fontWeight={600}
            component={`label`}
            htmlFor={`username`}
            mb={`5px`}
          >
            Username
          </Typography>
          <CustomTextField variant={`outlined`} fullWidth />
        </Box>
        <Box mt={`25px`}>
          <Typography
            variant={`subtitle1`}
            fontWeight={600}
            component={`label`}
            htmlFor={`password`}
            mb={`5px`}
          >
            Password
          </Typography>
          <CustomTextField type={`password`} variant={`outlined`} fullWidth />
        </Box>
  
        <Stack
          my={2} 
          direction={`row`} 
          alignItems={`center`} 
          className={`signInOptionsRow`} 
          justifyContent={`space-between`} 
        >
          <FormGroup id={`authForm`}>
            <FormControlLabel
              id={`rememberThisDevice`}
              name={`rememberThisDevice`}
              label={`Remeber this Device`}
              control={<Checkbox defaultChecked />}
            />
          </FormGroup>
          <Typography
            component={Link}
            href="/"
            fontWeight="500"
            sx={{
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Forgot Password?
          </Typography>
        </Stack>
      </Stack>
  
      <Box>
        <Button
          className={`button`}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="/"
          type="submit"
        >
          Sign In
        </Button>
      </Box>
  
      {subtitle}
    </>
  );
}