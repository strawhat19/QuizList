import { useContext } from 'react';
import { SharedDatabase } from '@/app/shared/shared';
import { Button, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import { Brightness7TwoTone, NightsStayTwoTone } from '@mui/icons-material';

export default function ChangeTheme({}: any) {
    const { darkMode, setDarkMode } = useContext<any>(SharedDatabase);
    const largeScreenSize = useMediaQuery((theme: any) => theme.breakpoints.up(`lg`));
    return (
        <Tooltip title={`${darkMode ? `Light` : `Dark`} Mode`} arrow>
            {largeScreenSize ? (
                <Button size={`large`} className={`customIconButton blackButton`} onClick={(e) => setDarkMode(!darkMode)} startIcon={darkMode ? <Brightness7TwoTone /> : <NightsStayTwoTone />}>
                {`${darkMode ? `Light` : `Dark`} Mode`}
                </Button>
            ) : (
                <IconButton size={`small`} className={`customIconButton blackButton`} onClick={(e) => setDarkMode(!darkMode)}>
                {darkMode ? <Brightness7TwoTone /> : <NightsStayTwoTone />}
                </IconButton>
            )}
        </Tooltip>
    )
}