require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    georli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UIdcmkqPSZ7xtURmAyYeR2FPd3aHcfH9',
      accounts: ['8cc5a575eaeb2e39691a398fea72ecbe029b3bdb44694cd8ce4618da0808ae0a'],
    },
  },
};