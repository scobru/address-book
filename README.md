# address-book

A collection of useful addresses on EVM chains for defi development

### Contributing


1. Read the [CONTRIBUTING](./CONTRIBUTING.md) doc first
1. run `yarn`. This will install the packages and prepare husky pre-commit hook
1. Add a file for the platform (i.e pancakeswap) under the respective chain in address-book/<your chain name>
1. Add the third party contracts in an object there and export default the object. 
1. Add the export to the chain's index.ts file.
1. Try to commit the change. If it fails, its because the address isn't passing the checksum check. Look at the console output and paste the correct address.
1. Once commit goes through, raise a PR 