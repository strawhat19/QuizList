import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';
import { IconArrowUpLeft } from '@tabler/icons-react';
import { year } from '@/app/shared/library/common/constants';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const YearlyBreakup = () => {
  const theme = useTheme();
  const primarylight = `var(--darkMain)`;
  const successlight = `var(--tealLight)`;
  const primary = theme.palette.primary.main;

  const seriescolumnchart: any = [38, 40, 25];

  const optionscolumnchart: any = {
    chart: {
      type: `donut`,
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: `var(--defFontColor)`,
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, `var(--tealLight)`],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: `75%`,
          background: `transparent`,
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === `dark` ? `dark` : `light`,
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };

  return (
    <DCard title={`Yearly Breakup`}>
      <Grid container spacing={3}>
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            $36,358
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="var(--fontColor)" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              +9%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              last year
            </Typography>
          </Stack>
          <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: `none` } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                2022
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: `none` } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                ${year}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={5} sm={5}>
          <Chart
            height={130} 
            type={`donut`}
            width={`100%`}
            series={seriescolumnchart}
            options={optionscolumnchart}
          />
        </Grid>
      </Grid>
    </DCard>
  );
};

export default YearlyBreakup;