import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

const Gif = () => (
  <Grid item xs={12} sm={4}>

  </Grid>
)

export default class GifsPage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Grid container>
            </Grid>
        )
    }
}
