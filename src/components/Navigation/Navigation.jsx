import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Link
          to={ROUTES.HOME}>
            <Button>home</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={ROUTES.MUSIC}>
            <Button>music</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={ROUTES.VISUALS}>
            <Button>visuals</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={ROUTES.PROJECTS}>
            <Button>projects</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to={ROUTES.CONTACT}>
            <Button>contact</Button>
        </Link>
      </Grid>
    </Grid>
);
export default Navigation;
