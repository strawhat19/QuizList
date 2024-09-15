
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';

const MonthlyEarnings = () => {
  const theme = useTheme();
  const secondarylight = `#f5fcff`;
  const secondary = theme.palette.secondary.main;

  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: 'var(--defFontColor)',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart: any = [
    {
      name: '',
      color: secondary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  return (
    <DCard
      title={`Monthly Earnings`}
      action={
        <Fab color="secondary" size="medium" sx={{color: '#ffffff'}}>
          <IconCurrencyDollar width={24} />
        </Fab>
      }
      footer={
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height={60} width={"100%"} />
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          $6,820
        </Typography>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: `var(--tealLight)`, width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="var(--fontColor)" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            -9%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last year
          </Typography>
        </Stack>
      </>
    </DCard>
  );
};

export default MonthlyEarnings;
