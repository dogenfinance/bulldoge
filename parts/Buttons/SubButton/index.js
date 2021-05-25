
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 40,
    width: 47,
    height: 47,
    lineHeight: 40,
    minWidth: 'unset',
    color: theme.custom.palette.white,
    border: `2px solid ${theme.custom.palette.white}`,
    borderRadius: 10,
  },
}));

const SubButton = ({
  onSub
}) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      onClick={onSub}
    >
      -
    </Button>
  );
};

export default memo(SubButton);