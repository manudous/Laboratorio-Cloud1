import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import { useStyles } from './character-description.style';


export const CharacterDescription = ({ characterPage }) => {
  const classes = useStyles();

  const { id, name, image} = characterPage;
  const [handleInput, setHandleInput] = React.useState('');

  return (
    <div>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={7}
      >
        <Grid item xs={12} md={6}>
          <img
            src={image}
            alt={name}
            className="animate__animated animate__bounceInLeft"
          />
        </Grid>
        <Grid item xs={12} md={6} className="animate__animated animate__fadeIn">
          <Typography variant="h4" paragraph>
            {name}
          </Typography>

          
        </Grid>
        
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackOutlinedIcon />}
          >
            <span className={classes.button}>Return</span>
          </Button>
        </Link>
      </Grid>
    </div>
  );
};
