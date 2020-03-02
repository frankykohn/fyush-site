import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Link to={ROUTES.HOME}>
            <Button>home</Button>
        </Link>
        <Link to={ROUTES.MUSIC} className="">
            <Button>music</Button>
        </Link>
        <Link to={ROUTES.VISUALS}>
            <Button>visuals</Button>
        </Link>
      </Grid>
    </Grid>
  </div>
);
export default Navigation;
