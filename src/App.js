import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Box,
  Card,
  Divider,
  CardMedia,
  Container,
  CardContent,
} from '@mui/material';

import { data } from './data';

export default function App() {
  return (
    <Container>
      <Typography variant="h5" marginTop={4} marginBottom={4}>
        Catàleg Can Cels
        <Divider />
      </Typography>

      <Grid container spacing={2}>
        {data.map((e) => {
          return (
            <Grid xs={4} md={4} lg={3} item key={e['Referència']}>
              <Card sx={{ maxHeight: 380 }} elevation={2}>
                <CardMedia
                  sx={{ height: 128 }}
                  image={e['Imàtges']}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2" noWrap>
                    {e['Descripció']}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>Preu:</b> {e['Preu Venta Públic']}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>Rèf:</b> {e['Referència']}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
