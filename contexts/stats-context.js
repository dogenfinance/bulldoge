import { createContext, useState, useMemo, useEffect, useContext } from 'react'
import { ethers } from 'ethers'

import {
  CONTRACTS,
  READ_WEB3_PROVIDER,
} from 'config'
import DOGEN_ABI from 'libs/abis/dogen.json'

const READ_PROVIDER = new ethers.providers.JsonRpcProvider(READ_WEB3_PROVIDER)

const StatsContext = createContext(null)

export function StatsProvider({ children }) {

  const [supply, setSupply] = useState(0)
  const [price, setPrice] = useState(0)

  const dogenContract = useMemo(() => new ethers.Contract(CONTRACTS.DOGEN, DOGEN_ABI, READ_PROVIDER), [])
  const mktCap = 0 // useMemo(() => supply.mul(price), [supply, price])

  useEffect(() => {
    const load = async () => {
      const [totalSupply, burntAmount] = await Promise.all([
        dogenContract.totalSupply(),
        dogenContract.balanceOf('0x000000000000000000000000000000000000dead')
      ]);

      setSupply(ethers.utils.formatUnits(totalSupply, 9))
      const burn = ethers.utils.formatUnits(burntAmount, 9)
      setPrice(0)
      console.log(burn)
    }

    load()
  }, [dogenContract])

  return (
    <StatsContext.Provider
      value={{
        supply,
        price,
        mktCap
      }}
    >
      {children}
    </StatsContext.Provider>
  )
}

export function useStats() {
  const context = useContext(StatsContext)
  if (!context) {
    throw new Error('Missing stats context')
  }

  const {
    supply,
    price,
    mktCap
  } = context

  return {
    supply,
    price,
    mktCap,
  }
}
