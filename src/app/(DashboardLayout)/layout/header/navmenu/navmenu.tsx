import Link from 'next/link';
import { useContext } from 'react';
import Logo from '@/app/components/logo/logo';
import { usePathname } from 'next/navigation';
import { SharedDatabase } from '@/app/shared/shared';
import { Box, List, useMediaQuery } from '@mui/material';
import { Links } from '@/app/(DashboardLayout)/components/nav/nav';
import NavItem from '@/app/(DashboardLayout)/components/nav/NavItem';
import NavGroup from '@/app/(DashboardLayout)/components/nav/NavGroup';

export type NavMenuOptions = {
    onItemClick?: any;
    showLogo?: boolean;
}

export default function NavMenu({ showLogo = true, onItemClick }: NavMenuOptions) {
    const largeScreenSize = useMediaQuery((theme: any) => theme.breakpoints.up(`lg`));
    let { user } = useContext<any>(SharedDatabase);
    const pathname = usePathname();
    const pathDirect = pathname;
    return (
        <nav className={`sidebarContainer spaceBetween h100 gap15 flex column`}>
          <div className={`sidebarTop w100 ${showLogo ? (largeScreenSize ? `` : `m15t`) : ``}`}>
            {showLogo ? (
                <Link href={`/`} className={`link`}>
                    <Logo className={`sidebarLogoContainer`} />
                </Link>
            ) : <></>}
            <Box className={`sidebarItems`} sx={{ px: 3 }}>
              <List className={`sidebarNav`} component={`div`} sx={{ pt: 0 }}>
                {Links.filter((item: any) => item?.auth ? item?.auth == true ? user : false : true).map((item: any) => {
                  if (item?.subheader) {
                    return <NavGroup item={item} key={item?.subheader} />;
                  } else {
                    return (
                      <NavItem
                        item={item}
                        key={item.id}
                        onClick={onItemClick}
                        pathDirect={pathDirect}
                      />
                    );
                  }
                })}
              </List>
            </Box>
          </div>
          <div className={`sidebarBottom w100 hideOnMobileS`} />
        </nav>
    )
}