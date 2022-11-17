import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Box,
  MenuItem,
  Card,
  Button,
  Link,
  Divider,
  CardActions,
  TextField,
  CardMedia,
  Container,
  CardContent,
} from '@mui/material';

import { data } from './data';

const categories = [
  { name: 'Tot', value: 'tots' },
  { name: 'Baldufes', value: 'baldufes' },
  { name: 'Jocs de taula', value: 'jocs de taula' },
  { name: 'Primera infància', value: 'primera infància' },
  { name: 'Joc simbòlic', value: 'joc simbòlic' },
  { name: "Jocs d'habilitat", value: "jocs d'habilitat" },
  { name: 'Punteria', value: 'punteria' },
  { name: 'Música', value: 'música' },
  { name: 'Material escolar', value: 'material escolar' },
  { name: 'Clauers', value: 'clauers' },
  { name: 'Estris de cuina', value: 'cuina' },
  { name: 'Labors', value: 'labors' },
];

export default function App() {
  const [category, setCategory] = useState('tots');

  console.log(category);
  return (
    <Container>
      <Typography variant="h4" marginTop={4}>
        CATÀLEG CAN CEL
      </Typography>
      <Typography variant="caption" sx={{ color: 'teal' }}>
        LA FONT
        <Divider />
      </Typography>
      <Box marginTop={2}>
        <TextField
          select
          name="selectCategory"
          label="Seleccionar categoria"
          fullWidth
          variant="standard"
        >
          {categories.map(({ value, name }) => (
            <MenuItem
              onClick={() => setCategory(value)}
              key={value}
              value={value}
            >
              {name}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={2} marginTop={1}>
        {data
          .filter((item) =>
            category === 'tots'
              ? item['Categoria']
              : item['Categoria'].toLocaleLowerCase() === category
          )
          .map((e) => {
            return (
              <Grid
                xs={6}
                md={4}
                lg={3}
                item
                key={`${e['Referència'] - e['Descripció']}`}
              >
                <Card sx={{ maxHeight: 380 }} elevation={2}>
                  <CardMedia
                    sx={{ height: 128 }}
                    image={e['Imàtges']}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      sx={{ fontSize: 18 }}
                      noWrap
                    >
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
                  <CardActions>
                    <Button size="small">
                      <Link
                        href={e['link']}
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                        sx={{ textDecoration: 'none' }}
                      >
                        Veure més
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
