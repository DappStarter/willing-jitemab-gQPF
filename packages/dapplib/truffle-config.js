require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note predict company grace help flat genre'; 
let testAccounts = [
"0x7f3e05f74f10f6f3fdcf1f9fb6ca295d34648a860b3b9d7d3aa7ce6a595d5b73",
"0x7b03b150ed2753aa866ef943b8b71ce36217f96d9b9057d6c546947289db2953",
"0x84df87c3d7bd1679bb58f757ae1620114e98c4bcc87cb029b123d77e7f6b454a",
"0xd1944a9eb8a8f9029312eb36c29614e825efd5db3b45dc0f5b1dafef646e651c",
"0xf9e1badb14ee7a79e94c9eb5d663465572e11940b6536a07cd978ae314996eb2",
"0x342256d62b31d689e3e1b1bf4e12ca6c0c4829c6d7fd88150f86bfc76a9a5122",
"0xcecc60164573dd933c76aa073d8420953145b5074a6caf7d18abf158d7ddf5c1",
"0x2c50f87e6a9516bad983379b07bf34eeec71b1a43351ca83e89f88a1a7438c7f",
"0x710a17f46b57974f496e6ac7e32e2a2ef9d31f83695fcfd6a167a6aff5f730d1",
"0x3c12d96bee49d48f3e27ad1cda0bd2066c302b95b451575c77569a05589f5e27"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


