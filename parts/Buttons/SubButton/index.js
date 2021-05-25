
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
  root: {
    width: 47,
    height: 47,
    minWidth: 'unset',
    color: theme.custom.palette.white,
    border: `2px solid ${theme.custom.palette.white}`,
    borderRadius: 10
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
      <RemoveIcon />
    </Button>
  );
};

export default memo(SubButton);