import { useContext } from 'react';
import styled from '@emotion/styled';
import { SharedDatabase } from '@/app/shared/shared';
import { Skeleton as MuiSkeleton } from '@mui/material';

export const Skeleton = ({ width, height }: any) => {
    let { darkMode } = useContext<any>(SharedDatabase);

    const CustomSkeleton = styled(MuiSkeleton)<any>(({ 
        background = `var(--darkMain)`, 
        sweepColor = `var(--tealLight)`,
    }) => (darkMode && {
        background,
        [`&::after`]: {
        background: `linear-gradient(90deg, transparent, ${sweepColor}, transparent)`,
        },
    }));

    return <CustomSkeleton width={width} height={height} animation={`wave`} variant={`rounded`} />
}