import { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from '@mui/material';
import { SharedDatabase } from '@/app/shared/shared';

export default function MobileMenu({}: any) {
    const { 
        darkMode, 
        menuOpen, setMenuOpen,
    } = useContext<any>(SharedDatabase);
    return (
        <Tooltip title={`Menu`} arrow>
            <IconButton 
                size={`small`} 
                onClick={() => setMenuOpen(!menuOpen)}
                className={`blackButton customIconButton`} 
                sx={{
                    opacity: 0,
                    display: {
                        lg: `none`,
                        xs: `flex`,
                    },
                }}
            >
                {(!menuOpen) ? (
                    <MenuIcon style={{ fontSize: 25, color: darkMode ? `var(--fontColor)` : `var(--main)` }} />
                ) : (
                    <CloseIcon style={{ fontSize: 25, color: darkMode ? `var(--fontColor)` : `var(--main)` }} />
                )}
            </IconButton>
        </Tooltip>
    )
}