
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import FarmHeader from './FarmHeader'
import HarvestFarm from './HarvestFarm'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const NFTFarm = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <FarmHeader />
      <HarvestFarm />
    </div>
  )
}

export default memo(NFTFarm)