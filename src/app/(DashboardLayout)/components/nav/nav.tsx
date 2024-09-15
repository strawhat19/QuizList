import { uniqueId } from 'lodash';
// import { useContext } from 'react';
import { Drawer } from '@mui/material';
// import { SharedDatabase } from '@/app/shared/shared';
import NavMenu from '../../layout/header/navmenu/navmenu';
import { brandName, devEnv } from '@/app/shared/library/common/constants';
import { IconBellRinging, IconLayoutDashboard, IconLogin, IconMailForward, IconQuestionMark, IconSettings, IconUser, IconUserPlus, IconWorld } from '@tabler/icons-react';

export class NavOptions {
  sidebarWidth: any;
  isSidebarOpen: any;
  onSidebarClose: any;
  scrollbarStyles: any;
  largeScreenSize: any;
  anchor?: any = `left`;
  isMobileSidebarOpen: any;
  constructor(data: Partial<NavOptions>) {
    Object.assign(this, data);
  }
}

export const routes = {
  home: {
    href: `/`,
    id: uniqueId(),
    title: brandName,
    icon: IconQuestionMark,
  },
  about: {
    href: `/about`,
    id: uniqueId(),
    title: `About`,
    icon: IconUser,
  },
  contact: {
    id: uniqueId(),
    href: `/contact`,
    title: `Contact`,
    icon: IconMailForward,
  },
  signin: {
    auth: false,
    id: uniqueId(),
    href: `/signin`,
    icon: IconLogin,
    title: `Sign In`,
  },
  signup: {
    auth: false,
    id: uniqueId(),
    href: `/signup`,
    title: `Sign Up`,
    icon: IconUserPlus,
  },
  profile: {
    auth: !devEnv,
    id: uniqueId(),
    icon: IconUser,
    href: `/profile`,
    title: `Profile`,
  },
  notifications: {
    auth: !devEnv,
    id: uniqueId(),
    icon: IconBellRinging,
    href: `/notifications`,
    title: `Notification(s)`,
  },
  questions: {
    id: uniqueId(),
    title: `Questions`,
    href: `/questions`,
    icon: IconQuestionMark,
  },
  settings: {
    id: uniqueId(),
    title: `Settings`,
    href: `/settings`,
    icon: IconSettings,
  },
}

export const Links = [
  {
    navlabel: true,
    subheader: `Home`,
  },
  routes.home,
  {
    navlabel: true,
    subheader: `About`,
  },
  routes.about,
  routes.contact,
  {
    navlabel: true,
    subheader: `Quiz List`,
  },
  routes.questions,
  // {
  //   navlabel: true,
  //   subheader: `Settings`,
  // },
  // routes.signin,
  // routes.signup,
  // routes.profile,
  // routes.settings,
  // routes.notifications,
];

export default function Nav({
  sidebarWidth,
  isSidebarOpen,
  onSidebarClose,
  anchor = `left`,
  scrollbarStyles,
  largeScreenSize,
  isMobileSidebarOpen,
}: NavOptions) {
  return (
    <Drawer 
      anchor={anchor}
      variant={largeScreenSize ? `permanent` : `temporary`}
      onClose={largeScreenSize ? undefined : onSidebarClose}
      open={largeScreenSize ? isSidebarOpen : isMobileSidebarOpen}
      className={`drawer ${largeScreenSize ? `` : `sidebarDrawer mobileMenuDrawer`}`}
      PaperProps={{
        className: largeScreenSize ? `sidebarPaper` : `mobileMenuPaper`,
        sx: {
          ...(largeScreenSize ? {
            width: sidebarWidth - 1,
            boxSizing: `border-box`,
          } : {
            boxShadow: (theme) => theme.shadows[8],
          }),
          ...scrollbarStyles,
        },
      }}
    >
      <NavMenu />
    </Drawer>
  )
}