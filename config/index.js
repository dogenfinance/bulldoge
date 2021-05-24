const IS_MAINNET = process.env.NETWORK === 'mainnet'

const CHAIN_ID = 56;
const CONTRACTS = {
  DOGEN: '0xe71c62fc7197493b6e3634b861165bac548fca5e'
}

const READ_WEB3_PROVIDER = 'https://bsc-dataseed1.binance.org:443'

export {
  IS_MAINNET,
  CHAIN_ID,
  CONTRACTS,
  READ_WEB3_PROVIDER
}