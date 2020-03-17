import React from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  useScrollTrigger
} from '@material-ui/core';
import { NavLink, Link} from 'react-router-dom';

import './Navigation.css';

import * as PAGES from '../../constants/pages';

function LinkButton({label, to})
{
  return (
      <NavLink exact className="nav-link" activeClassName='active-button' style={{padding: '10px'}} to={to}>
          <Button className={'nav-button'}>{label}</Button>
      </NavLink>
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
        <LinkButton label={'visuals'} to={PAGES.VISUALS.ROUTE}/>
        <LinkButton label={'max'} to={PAGES.MAX.ROUTE}/>
      </Toolbar>
    </AppBar>
  )
}
export default Navigation;
