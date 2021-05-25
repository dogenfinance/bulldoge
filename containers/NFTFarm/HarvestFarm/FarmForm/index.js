
import { memo } from 'react'
import { Grid } from '@material-ui/core'

import FormHeader from './FormHeader'
import FormItem from './FormItem'

const FarmForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormHeader />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='DOGE' />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='BULLDOGE-DOGEN LP' />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='BULLDOGE-BNB LP' />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='BULLDOGE-SAFEMOON LP' />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='CAKE-CAKE' />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='TRIPOOL 1' />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='TRIPOOL 2' />
      </Grid>
      <Grid item xs={12}>
        <FormItem label='BULLDOGE' />
      </Grid>
    </Grid>
  );
};

export default memo(FarmForm);