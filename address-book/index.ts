import { polygon } from "./polygon";
import Chain from "../types/chain";
import { ChainId } from "../types/chainid";
import { ConstRecord } from "../types/const";

export * from "../types/chainid";

const _addressBook = {
  polygon,
} as const;

const _addressBookByChainId = {
  [ChainId.polygon]: polygon,
} as const;

export const addressBook: ConstRecord<typeof _addressBook, Chain> =
  _addressBook;

export const addressBookByChainId: ConstRecord<
  typeof _addressBookByChainId,
  Chain
> = _addressBookByChainId;
