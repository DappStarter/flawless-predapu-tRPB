require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind atom grace cart foster turn'; 
let testAccounts = [
"0xf75e65afd85cc3f33e5ea38e95a5b09c95bcf1bf992d240fb3e18aabb42c6c63",
"0xac49d658344b4019e29c4f3ac09516ca60182a45e3977d18f145a139811e14e4",
"0xe9ed36ebfdf250718233fafd130d815d3bc9be855495fe1d872be17f53143c00",
"0x3c722cf240b428e742ac9e1554e6d7f5fa46f914042dc9fb95fe5771d6a72720",
"0x88d1010ba4c087b806f6b7c25f3846e055013a808373072a20ef328b114f0eb7",
"0x8e374ef895f456a7c0687db79433c7831d47719ba51a8d9c34429d7d8550180a",
"0xe302edb90c60b70c8e04e9c2cc0c38364e826c2acace460df7d91dd94a4d5956",
"0x17fa304b83b9f570394fe0e9056ff56b2e35cb1e2c7b1d16718452663637d035",
"0xd062dde8c4f5c5e8e716a8d716cc92dd9a6cafd29e7d30e15ab17cb8096a3b0a",
"0x0a431b3e8217d871721ed72a10c0e07524d6dc624198d571003a9369adb2128f"
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


