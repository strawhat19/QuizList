import { useContext } from 'react';
import { Home } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { SharedDatabase } from '@/app/shared/shared';
import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import { routes } from '@/app/(DashboardLayout)/components/nav/nav';

export default function Title({}: any) {
    const router = useRouter();
    const { pageTitle } = useContext<any>(SharedDatabase);
    return (
        <Stack spacing={2} direction={`row`} alignItems={`center`}>
            <Tooltip title={`Home`}>
                <IconButton 
                    size={`small`} 
                    onClick={() => router.push(routes.home.href)}
                    className={`customIconButton mainButton p0 blackButton`} 
                >
                    <Home className={`homeIcon`} />
                </IconButton>
            </Tooltip>
            <Box className={`topHeaderLogo mobileMenuLogo p0`}>
                {pageTitle}
            </Box>
        </Stack>
    )
}