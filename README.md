# @scobru/address-book

A collection of useful addresses on EVM chains.

I have built an address-book as a shared package where all builders from Buidlguidl are free to add their newly created token, the smart contract to interact with their dapp, or simply a list of addresses of existing hacker houses

Feel free to add your own addresses to the address-book.

## Usage

```bash
yarn add @scobru/address-book
```

## Contributing (Please read above, leaving this here for historical reasons)

1. Read the [CONTRIBUTING](./CONTRIBUTING.md) doc first
1. run `yarn`. This will install the packages and prepare husky pre-commit hook
1. Add addresses:
   1. If new platform:
      1. Add a file for the platform (i.e pancakeswap) under the respective chain in address-book/(your chain name)
      1. Add the third party contracts in an object there and export the object.
      1. Add the export to the chain's index.ts file.
   1. For tokens:
      1. Add to respective token.ts file, with token symbol as key. Make sure the decimals are correct for the token. Usually you can find this info via the chain's block explorer.
1. Try to commit the change. If it fails, its because the address isn't passing the checksum check. Look at the console output and paste the correct address.
1. Once the commit goes through, raise a pull request.
1. If the checksum passes, a maintainer will review it and merge it
1. Once merged, the package version will be bumped and the package will be published. Run `yarn upgrade` in the consuming repo to consume the new package version.

