
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import ContainedButton from 'components/UI/Buttons/ContainedButton'
import { RICE_ICON_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 95,
    objectFit: 'contain',
    marginBottom: theme.spacing(1),
  },
  button: {
    fontSize: 36,
    fontWeight: 'bold',
    borderRadius: 16,
    color: theme.palette.background.primary,
    backgroundColor: theme.palette.primary.contrastText
  },
  total: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.custom.palette.white,
    marginBottom: theme.spacing(2),
  },
}));

const FarmController = () => {
  const classes = useStyles();

  const buttonHandler = () => { }

  return (
    <div className={classes.card}>
      <img
        alt='rice'
        src={RICE_ICON_PATH}
        className={classes.icon}
      />
      <Typography align='center' className={classes.total}>
        1888 Rice
      </Typography>
      <ContainedButton
        fullWidth
        className={classes.button}
        onClick={buttonHandler}
      >
        Harvest
      </ContainedButton>
    </div>
  );
};

export default memo(FarmController);