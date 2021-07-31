import React from 'react'
import { Grid } from '@material-ui/core'

import { Link } from 'layout/header/link'
import { actions } from 'layout/header/constants'
import { routesPath } from 'startup/routes'

export const Contact = () => <Grid item md={3} lg={3} xl={3}>
  <Link to={routesPath.Contact}>{actions.contact}</Link>
</Grid>
