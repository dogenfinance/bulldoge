
import { memo } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import FarmForm from './FarmForm'
import FarmController from './FarmController'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(3, 0),
    backgroundColor: theme.custom.palette.lightOrange,
  },
  container: {
    width: '100%',
    margin: 0,
  },
}));

const HarvestFarm = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <section className={classes.root}>
      <div className={commonClasses.containerWidth}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={9}>
            <FarmForm />
          </Grid>
          <Grid item xs={12} md={3}>
            <FarmController />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default memo(HarvestFarm);