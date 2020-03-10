import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './Navigation.css';

import * as PAGES from '../../constants/pages';

function LinkButton({label, to})
{
  const match = useRouteMatch({
    path: to,
    exact: true
  });

  return (
      <Link to={to}>
          <Button className={`${match ? 'active-button' : 'inactive-button'} nav-button`}>{label}</Button>
      </Link>
  );
}
const Navigation = (props) => (
    <Grid className="navContainer" container spacing={1}>
      <Grid item xs={4} sm={12} >
        <LinkButton label={'me'} to={PAGES.HOME.ROUTE}/>
      </Grid>
      <Grid item xs={4} sm={12}>
        <LinkButton label={'music'} to={PAGES.MUSIC.ROUTE}/>
      </Grid>
      {// <Grid item xs={12}>
      //   <LinkButton label={'visuals'} to={PAGES.VISUALS.ROUTE}/>
      // </Grid>
      // <Grid item xs={12}>
      //   <LinkButton label={'max'} to={PAGES.MAX.ROUTE}/>
      // </Grid>
     }
      <Grid item xs={4} sm={12}>
        <LinkButton label={'contact'} to={PAGES.CONTACT.ROUTE}/>
      </Grid>
    </Grid>

);
export default Navigation;
