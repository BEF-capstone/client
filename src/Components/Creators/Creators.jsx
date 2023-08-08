import React from 'react';
import { Card, Avatar, Typography, Grid, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Blessing from '../../../public/Blessing.jpg'
import Efren from '../../../public/Efren.jpg'
import Faaizah from '../../../public/Faaizah.jpg'


const creatorsData = [
  {
    name: 'Blessing Adomakoh',
    school: 'Pomona College',
    year: 'Junior (Class of 2025)',
    major: 'Computer Science',
    favoriteFood: 'Waakye (Ghanaian Cuisine)',
    imageUrl: Blessing,
    linkedIn: 'https://www.linkedin.com/in/blessingadomakoh'
  },
  {
    name: 'Efren Enriquez Mendoza',
    school: 'UT Austin',
    year: 'Junior (Class of 2025)',
    major: 'Computer Science',
    favoriteFood: 'Green Chile Enchiladas (Mexican Cuisine)',
    imageUrl: Efren,
    linkedIn: 'https://www.linkedin.com/in/emefren/',
  },
  {
    name: 'Faaizah Afoda',
    school: 'CUNY Hunter College',
    year: 'Junior (Class of 2025)',
    major: 'Computer Science',
    favoriteFood: 'Peanut Stew (Togolese Cuisine)',
    imageUrl: Faaizah,
    linkedIn: 'https://www.linkedin.com/in/faaizah-afoda-2a01391aa/',
  },
];

const Creators = () => {
  return (
    <Box sx={{backgroundColor: '#241023'}}>
      {/* <Typography variant="h3" gutterBottom sx={{mt: 2, mb: 2, backgroundColor: '#241023', color: 'white', fontFamily: 'cursive' }}>
        Fellow Foodies
      </Typography> */}
      <Grid container spacing={4} sx={{backgroundColor: '#241023' }}>
        {creatorsData.map((creator, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{margin: 2, backgroundColor: '#241023', boxShadow: 0}}>
              <Avatar
                alt={creator.name}
                src={creator.imageUrl}
                sx={{ width: 200, height: 200, margin: 'auto', mt: 2, mb: 2}}
              />
              <Typography variant="h5" align="center" sx={{color: 'white', fontFamily: 'cursive', fontSize: 30}}>
                {creator.name}
              </Typography>
              <Typography variant="body1" align="center" sx={{color: 'white'}}>
                School: {creator.school}
              </Typography>
              <Typography variant="body1" align="center" sx={{color: 'white'}}>
                Year: {creator.year}
              </Typography>
              <Typography variant="body1" align="center" sx={{color: 'white'}}>
                Major: {creator.major}
              </Typography>
              <Typography variant="body1" align="center" mb={2} sx={{color: 'white'}}>
                Favorite Food: {creator.favoriteFood}
              </Typography>
              <Link href={creator.linkedIn} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'white', margin: 'auto', display: 'block', mt: 2 }} />
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Creators;
