require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("dotenv").config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || "https://mainnet"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        localhost: {
            chaindId: 31337,
        },
        hardhat: {
            chaindId: 31337,
            forking: {
                url: MAINNET_RPC_URL,
            },
        },
        sepolia: {
            chaindId: 11155111,
            blockConfirmations: "6",
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            saveDeployments: true,
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    solidity: {
        compilers: [{ version: "0.8.7" }, { version: "0.4.19" }, { version: "0.6.12" }],
    },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 500000,
    },
}
