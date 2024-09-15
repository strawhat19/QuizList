import Settings from './Profile';
import PropTypes from 'prop-types';
import NavMenu from './navmenu/navmenu';
import React, { useContext } from 'react';
import Title from '@/app/components/title/title';
import DCard from '../../components/shared/DCard';
import { SharedDatabase } from '@/app/shared/shared';
import { devEnv } from '@/app/shared/library/common/constants';
import MobileMenu from '@/app/components/mobilemenu/mobilemenu';
import { Box, AppBar, Toolbar, styled, Stack } from '@mui/material';
import ChangeTheme from '@/app/components/theme/buttons/changetheme/changetheme';

export default function Header({}: any) {
  let { menuOpen, setMenuOpen } = useContext<any>(SharedDatabase);

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: `100%`,
    color: theme.palette.text.secondary,
  }));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: `none`,
    justifyContent: `center`,
    backdropFilter: `blur(4px)`,
    background: theme.palette.background.paper,
    [theme.breakpoints.up(`lg`)]: {
      minHeight: `70px`,
    },
  }));

  const toggleExpanded = () => {
    let toggleEl = document.querySelector(`.headerCardMenu`);
    if (toggleEl) toggleEl.classList.toggle(`expanded`);
  }

  return (
    <AppBarStyled id={`header`} className={`header`} position={`sticky`} color={`default`}>
      <ToolbarStyled className={`headerToolbar`}>
        {/* Page Icon & Title */}
        <Title />
        {/* End Header Left */}
        <Box className={`emptySpace stretchSpace`} flexGrow={1} />
        {/* Header Right */}
        <Stack className={`headerRight`} spacing={2} direction={`row`} alignItems={`center`}>
          {devEnv ? <ChangeTheme /> : <></>}
          <Settings />
          <MobileMenu onClick={() => setMenuOpen(!menuOpen)} />
        </Stack>
        {/* End Header Right */}
      </ToolbarStyled>
      <DCard 
        titleMB={0} 
        title={`Menu`} 
        showTitle={false}
        expanded={menuOpen} 
        expandCollapse={true} 
        className={`p0 headerCardMenu`}
      >
        <NavMenu showLogo={false} onItemClick={toggleExpanded} />
      </DCard>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};