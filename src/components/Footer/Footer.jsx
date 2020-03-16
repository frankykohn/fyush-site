import React from 'react';
import {
  Grid,
  IconButton
} from '@material-ui/core';

import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

 import { GoNote } from "react-icons/go";



export default function Footer({color})
{
    const iconSize = '40px';
    return (
      <Grid container justify="center" style={{backgroundColor: color}}>
        <Grid item>
            <IconButton href="https://github.com/frankykohn/"><FaGithub size={iconSize} color="white"/></IconButton>
        </Grid>
        <Grid item>
            <IconButton href="https://www.instagram.com/earring_loss/"><FaInstagram size={iconSize} color="white"/></IconButton>
        </Grid>
        <Grid item>
            <IconButton href="https://www.linkedin.com/in/frankykohn/"><FaLinkedin size={iconSize} color="white"/></IconButton>
        </Grid>
        <Grid item>
            <IconButton href="https://firebasestorage.googleapis.com/v0/b/fyush-site.appspot.com/o/home%2FResume%203.pdf?alt=media&token=63b18718-c760-486d-95dc-b3ecea4760ba"><GoNote size={iconSize} color="white"/></IconButton>
        </Grid>
      </Grid>
    )
}
