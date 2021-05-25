
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  OutlinedInput
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  textField: {
    width: '100%',
    border: `2px solid ${theme.custom.palette.white}`,
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
    fontFamily: 'roboto, sans-serif',
    lineHeight: 'normal',
    padding: theme.spacing(1.5),
    color: theme.custom.palette.white,
    '&:focus': {
      backgroundColor: 'unset'
    },
    '&::placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.primary
    },
    '&:-ms-input-placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.primary
    },
    '&::-ms-input-placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.primary
    }
  },
  multiline: {
    padding: 0
  },
  notchedOutline: {
    border: 'none'
  },
  errorInput: {
    border: `1px solid ${theme.palette.danger.main}`
  },
  label: {
    marginBottom: theme.spacing(1)
  }
}));

const BullTextField = React.forwardRef(({
  label,
  type = 'text',
  error,
  className,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {!!label &&
        <Typography color='textSecondary' className={classes.label}>
          {label}
        </Typography>
      }

      <OutlinedInput
        inputRef={ref}
        variant='outlined'
        type={type}
        error={!!error}
        className={clsx(
          'form-control form-control-lg',
          classes.textField
        )}
        classes={{
          input: classes.input,
          multiline: classes.multiline,
          error: classes.errorInput,
          notchedOutline: classes.notchedOutline
        }}
        {...rest}
      />
      {!!error &&
        <Typography
          variant='subtitle2'
          color='error'
        >
          {error}
        </Typography>
      }
    </div>
  );
});

export default memo(BullTextField);