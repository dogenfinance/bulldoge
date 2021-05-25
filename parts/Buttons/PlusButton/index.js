
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
  root: {
    width: 47,
    height: 47,
    minWidth: 'unset',
    marginRight: 2,
    color: theme.custom.palette.white,
    border: `2px solid ${theme.custom.palette.white}`,
    borderRadius: 10
  },
}));

const PlusButton = ({
  onPlus
}) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      onClick={onPlus}
    >
      <AddIcon />
    </Button>
  );
};

export default memo(PlusButton);