import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

function TitleBar({ title }){
    return(
        <h1>{title}</h1>
    );
}

export default withRouter(TitleBar);
