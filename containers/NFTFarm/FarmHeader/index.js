
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  Typography
} from '@material-ui/core'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'
import {
  BULLDOGE_FACE_ICON_PATH,
  FARM_HEADER_BONE_BACKGROUND_PATH
} from 'utils/constants/image-paths'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(8, 0),
    backgroundImage: `url(${FARM_HEADER_BONE_BACKGROUND_PATH})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 497,
    width: '100%',
    padding: theme.spacing(3),
    borderRadius: 16,
    boxShadow: '3px 3px 42px 18px #FF9900'
  },
  icon: {
    width: '100%',
    maxWidth: 350,
    objectFit: 'contain',
    marginBottom: theme.spacing(3),
  },
  button: {
    fontSize: 36,
    fontWeight: 'bold',
    borderRadius: 16,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.dark,
    marginBottom: theme.spacing(6),
    boxShadow: '4px 10px 16px rgba(0, 0, 0, 0.25)',
  },
  total: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.custom.palette.topMenu
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(1.5),
    border: `2px solid ${theme.custom.palette.topMenu}`,
    borderRadius: 10,
    marginBottom: theme.spacing(3),
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.custom.palette.topMenu
  },
}));

const FarmHeader = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const buttonHandler = () => { }

  return (
    <section className={classes.root}>
      <div className={clsx(classes.container, commonClasses.containerWidth)} >
        <Card className={classes.card}>
          <img
            alt='bulldoge face'
            src={BULLDOGE_FACE_ICON_PATH}
            className={classes.icon}
          />
          <ContainedButton
            fullWidth
            className={classes.button}
            onClick={buttonHandler}
          >
            BullDoge
          </ContainedButton>
          <div className={classes.statusContainer}>
            <Typography className={classes.status}>
              BullDoge 3D NFT for VR
            </Typography>
            <Typography className={classes.status}>
              25/888 Left
            </Typography>
          </div>
          <Typography align='center' className={classes.total}>
            888 Rice
          </Typography>
        </Card>
      </div>
    </section>
  );
};

export default memo(FarmHeader);