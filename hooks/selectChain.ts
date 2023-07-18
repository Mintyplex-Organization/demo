
import contract from '../contracts-connector/evm/addresses.json'

const chainsXid = {
    7001: "zeta",
    355113: "bitfinity",
    5001: "mantle",
}

export const getMarketAddress = (chain) => {
    return contract[`${getChain(chain?.id)}MarketAddress`]
}

export const getChain = (id: number) => {
    return chainsXid[`${id}`]
}