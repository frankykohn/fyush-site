import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './Navigation.css';

import * as ROUTES from '../../constants/routes';

function LinkButton({label, to})
{
  let match = useRouteMatch({
    path: to,
    exact: true
  });

  return (
      <Link to={to}>
          <Button className={match ? 'activeButton' : 'inactiveButton'}>{label}</Button>
      </Link>
  );
}
const Navigation = (props) => (
    <Grid container spacing={1} style={{textAlign: 'center'}}>
      <Grid item xs={12} >
        <LinkButton label={'me'} to={ROUTES.HOME}/>
      </Grid>
      <Grid item xs={12}>
        <LinkButton label={'music'} to={ROUTES.MUSIC}/>
      </Grid>
      <Grid item xs={12}>
        <LinkButton label={'visuals'} to={ROUTES.VISUALS}/>
      </Grid>
      <Grid item xs={12}>
        <LinkButton label={'max'} to={ROUTES.MAX}/>
      </Grid>
      <Grid item xs={12}>
        <LinkButton label={'contact'} to={ROUTES.CONTACT}/>
      </Grid>
    </Grid>

);
export default Navigation;
