import '../styles/globals.css'
//wagmi.
import { WagmiConfig, createConfig, Chain, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public';

//rainbow kit UI framework.
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

const Bitfinity = {
  id: 355113,
  name: 'Bitfinity',
  network: ' Bitfinity',
  iconUrl: '/BITFINITY.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Bitfinity',
    symbol: 'BFT',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.bitfinity.network/'],
    },
    public: {
      http: ['https://testnet.bitfinity.network/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Bitfinity', url: 'https://explorer.bitfinity.network'
    },
  },
  testnet: true,
};

const Mantle = {
  id: 5001,
  name: 'Mantle Testnet',
  network: ' Mantle',
  iconUrl: '/BITFINITY.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Mantle',
    symbol: 'MNT',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.mantle.xyz/'],
    },
    public: {
      http: ['https://rpc.testnet.mantle.xyz/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'mantle', url: 'https://explorer.testnet.mantle.xyz'
    },
  },
  testnet: true,
};

const ZetaChain = {
  id: 7001,
  name: 'ZetaChain Testnet',
  network: ' ZetaChain Testnet',
  iconUrl: '/zetachain.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'ZetaChain',
    symbol: 'ZETA',
  },
  rpcUrls: {
    default: {
      http: ['https://api.athens2.zetachain.com/evm'],
    },
    public: {
      http: ['https://api.athens2.zetachain.com/evm'],
    },
  },
  blockExplorers: {
    default: {
      name: 'ZetaChain', url: 'https://explorer.zetachain.com/evm'
    },
  },
  testnet: true,
};

const { chains, publicClient } = configureChains(
  [Bitfinity, ZetaChain, Mantle],
  [publicProvider()]
)


const { connectors } = getDefaultWallets({
  appName: 'Mintyplex Demo',
  chains,
  projectId: "abe39d77a54c7aa7b554c8dbfaa5827c"
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )

}

export default MyApp
