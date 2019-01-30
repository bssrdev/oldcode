var contract_address = "0x8a3336128f7d75715072532c1bc171a332adbfb9"
var contract_abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_fishname",
                "type": "string"
            },
            {
                "name": "_fishcomapany",
                "type": "string"
            },
            {
                "name": "track_id",
                "type": "uint256"
            },
            {
                "name": "_iot_device",
                "type": "uint256"
            }
        ],
        "name": "addFishDetail",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "FishDB",
        "outputs": [
            {
                "name": "FishName",
                "type": "string"
            },
            {
                "name": "FishCompanyName",
                "type": "string"
            },
            {
                "name": "TrackingID",
                "type": "uint256"
            },
            {
                "name": "IOTDeviceID",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "nooftracks",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totaltracks",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "trackstatus",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]


web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
myContract = new web3.eth.Contract(contract_abi, contract_address)