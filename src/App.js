import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Box,
  MenuItem,
  Card,
  Button,
  Stack,
  InputAdornment,
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
  { name: 'Estris de cuina', value: 'cuina' },
  { name: 'Labors', value: 'labors' },
];

export default function App() {
  const [category, setCategory] = useState('tots');
  const [text, setText] = useState('');

  console.log(category);
  return (
    <Container>
      <Box
        width={128}
        height={128}
        margin="auto"
        sx={{
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(https://www.waldorflafont.org/wp-content/uploads/2019/03/logolafont-blau-512px-e1573652013614.png)`,
        }}
      />
      <Typography variant="h5" marginTop={0} sx={{ textAlign: 'center' }}>
        CATÀLEG CAN CELS
        <Divider />
      </Typography>
      <Stack marginTop={2} spacing={1} direction="column">
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
      </Stack>

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
                <Card
                  sx={{
                    maxHeight: 400,
                    height: '100%',
                    backgroundColor: '#e8eaf6',
                  }}
                  elevation={2}
                >
                  <CardMedia
                    sx={{ height: 150 }}
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
                    <Box paddingTop={1}>
                      <Typography variant="caption">
                        {e['Descripció']}
                      </Typography>
                    </Box>
                  </CardContent>
                  {/*   <CardActions>
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
                  </CardActions> */}
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
