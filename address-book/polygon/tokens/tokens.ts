import { ConstRecord } from "../../../types/const";
import Token from "../../../types/token";

const MATIC = {
  name: "Wrapped Matic",
  address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  symbol: "WMATIC",
  decimals: 18,
  chainId: 137,
  website: "https://polygon.technology/",
  description:
    "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.",
  logoURI:
    "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png",
};
const MAI = {
  name: "Mai",
  address: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
  symbol: "MAI",
  decimals: 18,
  chainId: 137,
  website: "https://www.mai.finance/",
  description:
    "MAI is a stablecoin collateralized by your crypto holdings. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
  logoURI:
    "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png",
  documentation: "https://docs.mai.finance/",
};
const _tokens = {
  PLT: {
    name: "Plancia Timelock",
    symbol: "PTL",
    address: "0x6d065E2BE1b46130a02f32141Ad6D356c40c3B11",
    chainId: 137,
    decimals: 18,
    logoURI: "",
    website: "https://plancia.vercel.app/",
    description: "",
    documentation: "",
  },
  PLT20: {
    name: "Plancia Timelock ERC20",
    symbol: "PTL20",
    address: "0x20dF0Dfd899DE9efb27DEC094BbAe96bCF879711",
    chainId: 137,
    decimals: 18,
    logoURI: "",
    website: "https://plancia.vercel.app/",
    description: "",
    documentation: "",
  },
  PLT721: {
    name: "Plancia Timelock ERC721",
    symbol: "PTL20",
    address: "0x8F359697f33aDdDBdC3a9baD83Ad20B50e9f6d93",
    chainId: 137,
    decimals: 18,
    logoURI: "",
    website: "https://plancia.vercel.app/",
    description: "",
    documentation: "",
  },
  expMATIC: {
    name: "Universe IndexFund expoMATIC",
    symbol: "expMATIC",
    address: "0x3b7CA113e5f7CD2c53C0203D5996Ad6BdCb7bC57",
    chainId: 137,
    decimals: 18,
    logoURI: "",
    website: "https://universeapp.vercel.app/funds",
    description: "",
    documentation: "",
  },
  volVOL: {
    name: "Universe IndexFund volVOL",
    symbol: "volVOL",
    address: "0x81708b751018559CD33a3123c3f14C0D27139Bb8",
    chainId: 137,
    decimals: 18,
    logoURI: "",
    website: "https://universeapp.vercel.app/funds",
    description: "",
    documentation: "",
  },
  MRS: {
    name: "Universe BeefyMultiFarm MARS",
    symbol: "MRS",
    address: "0x81708b751018559CD33a3123c3f14C0D27139Bb8",
    chainId: 137,
    decimals: 18,
    logoURI: "",
    website: "https://universeapp.vercel.app/farms",
    description: "",
    documentation: "",
  },
  JPY: {
    name: "Universe BeefyMultiFarm JPY",
    symbol: "JPY",
    address: "0xAa51a5bF883b2A65C20671f2e27A7D73c1Ec97B6",
    chainId: 137,
    decimals: 18,
    logoURI: "",
    website: "https://universeapp.vercel.app/farms",
    description: "",
    documentation: "",
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
