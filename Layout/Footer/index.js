
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import SocialGroup from './SocialGroup'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(4, 0, 2),
    backgroundColor: theme.custom.palette.footer
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

const Footer = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <footer className={classes.root}>
      <div className={clsx(classes.container, commonClasses.containerWidth)}>
        <SocialGroup />
      </div>
    </footer>
  );
};

export default memo(Footer);
