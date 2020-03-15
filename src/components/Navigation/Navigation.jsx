import React from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  useScrollTrigger
} from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

import './Navigation.css';

import * as PAGES from '../../constants/pages';

function LinkButton({label, to})
{
  const match = useRouteMatch({
    path: to,
    exact: true
  });

  return (
      <Link style={{padding: '10px'}} to={to}>
          <Button className={`${match ? 'active-button' : 'inactive-button'} nav-button`}>{label}</Button>
      </Link>
  );
}


function Navigation({title}){
  const isScrolled = useScrollTrigger();
  return(
    <AppBar className="app-bar" style={{boxShadow: 'none', backgroundColor: isScrolled ? 'black' : 'transparent', transition: '0.5s'}}>
      <Toolbar>
        <h2 className="title" ><Link to={PAGES.HOME.ROUTE} style={{textDecoration: 'none', color: 'white'}}>Franky Kohn</Link></h2>
        <LinkButton label={'me'} to={PAGES.HOME.ROUTE}/>
        <LinkButton label={'music'} to={PAGES.MUSIC.ROUTE}/>
        <LinkButton label={'contact'} to={PAGES.CONTACT.ROUTE}/>
        <LinkButton label={'visuals'} to={PAGES.VISUALS.ROUTE}/>
        <LinkButton label={'max'} to={PAGES.MAX.ROUTE}/>
      </Toolbar>
    </AppBar>
  )
}
export default Navigation;
