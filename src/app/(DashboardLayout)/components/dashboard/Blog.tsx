
import Link from 'next/link';
import { Stack } from '@mui/system';
import { IconBasket } from '@tabler/icons-react';
import { year } from '@/app/shared/library/common/constants';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab, Avatar } from '@mui/material';

const ecoCard = [
  {
    rating: 4,
    price: 285,
    salesPrice: 375,
    title: `Boat Headphone`,
    photo: `/images/products/s4.jpg`,
    subheader: `September 14, ${year}`,
  },
  {
    rating: 5,
    price: 900,
    salesPrice: 650,
    title: `MacBook Air Pro`,
    photo: `/images/products/s5.jpg`,
    subheader: `September 14, ${year}`,
  },
  {
    rating: 3,
    price: 200,
    salesPrice: 150,
    title: `Red Valvet Dress`,
    photo: `/images/products/s7.jpg`,
    subheader: `September 14, ${year}`,
  },
  {
    rating: 2,
    price: 345,
    salesPrice: 285,
    title: `Cute Soft Teddybear`,
    photo: `/images/products/s11.jpg`,
    subheader: `September 14, ${year}`,
  },
];

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Typography component={Link} href="/">
              <Avatar
                alt={`Product Photo`} src={product.photo} variant="square"
                sx={{
                  height: 250,
                  width: '100%',
                }}
                
              />
            </Typography>
            <Tooltip title="Add To Cart">
              <Fab
                size="small"
                color="primary"
                sx={{ bottom: "75px", right: "15px", position: "absolute" }}
              >
                <IconBasket size="16" />
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">${product.price}</Typography>
                  <Typography
                    color="textSecondary"
                    ml={1}
                    sx={{ textDecoration: "line-through" }}
                  >
                    ${product.salesPrice}
                  </Typography>
                </Stack>
                <Rating
                  name="read-only"
                  size="small"
                  value={product.rating}
                  readOnly
                />
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;