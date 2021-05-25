
import { memo } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  label: {
    fontSize: 18,
    fontWeight: 'bold'
  },
}))

const FormHeader = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography
          align='center'
          color='textSecondary'
          className={classes.label}
        >
          UNSTAKED
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography
          align='center'
          color='textSecondary'
          className={classes.label}
        >
          FARMING
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2}>
      </Grid>
    </Grid>
  );
};

export default memo(FormHeader);