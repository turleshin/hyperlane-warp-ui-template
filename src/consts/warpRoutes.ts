import { WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { TokenStandard } from '@hyperlane-xyz/sdk';
// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'arbitrumsepolia',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      logoURI: '/deployments/warp_routes/USDC/logo.svg',
      symbol: 'USDC',
      name: 'USD Coin',
      addressOrDenom: "0x31861e286A4C5d29d68f4D514B7421109cb48FA1",
      collateralAddressOrDenom: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
      connections: [{ token: 'ethereum|basesepolia|0x73aB51830d853739b8aC044235FC470f681762bD' }]
    },
    {
      chainName: 'basesepolia',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 6,
      logoURI: '/deployments/warp_routes/USDC/logo.svg',
      symbol: 'USDC',
      name: 'USD Coin',
      addressOrDenom: "0x73aB51830d853739b8aC044235FC470f681762bD",
      connections: [{ token: 'ethereum|arbitrumsepolia|0x31861e286A4C5d29d68f4D514B7421109cb48FA1' }]
    },
    {
      chainName: 'basesepolia',
      standard: TokenStandard.EvmHypNative,
      decimals: 18,
      symbol: 'ETH',
      name: 'Ether',
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      addressOrDenom: "0x74690B92a66b7125F86783900B1d227e66813f12",
      connections: [{ token: 'ethereum|holesky|0x31861e286A4C5d29d68f4D514B7421109cb48FA1' }]
    },
    {
      chainName: 'holesky',
      standard: TokenStandard.EvmHypNative,
      decimals: 18,
      symbol: 'ETH',
      name: 'Ether',
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      addressOrDenom: "0x31861e286A4C5d29d68f4D514B7421109cb48FA1",
      connections: [{ token: 'ethereum|basesepolia|0x74690B92a66b7125F86783900B1d227e66813f12' }]
    },
    {	
      chainName: 'arbitrumsepolia',
      standard: TokenStandard.EvmHypNative,
      decimals: 18,
      symbol: 'ETH',
      name: 'Ether',
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      addressOrDenom: "0x51561C50677aC1724901784Fe7d2B58c500eA94A",
      connections: [ { token: 'ethereum|basesepolia|0xd71Fa9ae7c7345285Ce378E384154f686ae3C89B' } ]
    },
    {
     chainName: 'basesepolia',
     standard: TokenStandard.EvmHypNative,
     decimals: 18,
     symbol: 'ETH',
     name: 'Ether',
     logoURI: '/deployments/warp_routes/ETH/logo.svg',
     addressOrDenom: "0xd71Fa9ae7c7345285Ce378E384154f686ae3C89B",
     connections: [ { token: 'ethereum|arbitrumsepolia|0x51561C50677aC1724901784Fe7d2B58c500eA94A' } ]	
    }

  ],
  options: {},
};

