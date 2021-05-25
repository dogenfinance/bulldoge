
import { memo } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import BullTextField from 'components/UI/BullTextField'
import PlusButton from 'parts/Buttons/PlusButton'
import SubButton from 'parts/Buttons/SubButton'

const useStyles = makeStyles((theme) => ({
  label: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
}))

const FormItem = ({
  label
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography
          color='textSecondary'
          className={classes.label}
        >
          {label}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <BullTextField />
      </Grid>
      <Grid item xs={6} sm={3}>
        <BullTextField />
      </Grid>
      <Grid item xs={12} sm={2}>
        <PlusButton onPlus={() => { }} />
        <SubButton onPlus={() => { }} />
      </Grid>
    </Grid>
  );
};

export default memo(FormItem);