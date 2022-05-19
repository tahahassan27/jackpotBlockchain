

//const validator = require("./../middleware/validator");
const { ethers } = require("ethers");
const HttpError = require("./../util/http-error");

const INFURA_ID = "01d3440ef479445a98913ad74807158b";
const provider = new ethers.providers.JsonRpcProvider(
  `https://rinkeby.infura.io/v3/${INFURA_ID}`
);

const JACKPOT_ABI = [
	{
		"inputs": [],
		"name": "createJackpot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "enter",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pickWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token_",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlayers",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRandomNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "jackpotId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "participationPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "test",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const tokenABI=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const address = "0x81e615d5D057ebb9821492fa9a48C45a0C096cFf";
const tokenAddress = "0xc3523fDd2785114Df9CB656736F805ed45d0Ad7E";

const adminSchema = require('../models/adminSchema');
const loginAdmin= async (req,res)=>{
    let adminData;
    try{
        console.log("address :",req.params.accountAddress);
        adminData = await adminSchema.findOne({email:req.params.email});
        
        console.log('adminData :',adminData)
        
    }catch(err){
      
    }
    if(adminData){
        return res.status(200).send('You Have Successfully Logged In');
    }
    else{
        res.status(404).send('Login Was Unsuccessfull');
    }
}

const createJackpot
= async (req,res,next)=>{
    const { privateKey } = req.body;
        let contract;
        let wallet;
    try {
        contract = new ethers.Contract(address, JACKPOT_ABI, provider);
        wallet = new ethers.Wallet(privateKey, provider);
    } catch(err){
        const error = new HttpError(
            "Failed to connect to wallet, please try again later." + err,
            500
          );
          return next(error);
        
    }
    let tx;
        try {
          const contractWithWallet = contract.connect(wallet);
      
          tx = await contractWithWallet.createJackpot();
      
          await tx.wait();
        } catch (err) {
          const error = new HttpError(
            "Failed to get winner, please try again later." + err,
            500
          );
          return next(error);
        }
      
        res.status(200).send(tx);
      };

      const adminApproveForWinner
= async (req,res, next)=>{
    const { privateKey, address,amount } = req.body;
        let contract;
        let wallet;
    try {
        contract = new ethers.Contract(tokenAddress, tokenABI, provider);
        wallet = new ethers.Wallet(privateKey, provider);
    } catch(err){
        const error = new HttpError(
            "Failed to connect to wallet, please try again later." + err,
            500
          );
          return next(error);
        
    }
    let tx;
        try {
          const contractWithWallet = contract.connect(wallet);
      
          tx = await contractWithWallet.approve(address,amount);
      
          await tx.wait();
        } catch (err) {
          const error = new HttpError(
            "Failed to get winner, please try again later." + err,
            500
          );
          return next(error);
        }
      
        res.status(200).send(tx);
      };


const pickWinner = async (req,res, next)=>{
        
      
        const { privateKey } = req.body;
        let contract;
        let wallet;
      
        try {
          contract = new ethers.Contract(address, JACKPOT_ABI, provider);
          wallet = new ethers.Wallet(privateKey, provider);
        } catch (err) {
          const error = new HttpError(
            "Failed to connect to wallet, please try again later." + err,
            500
          );
          return next(error);
        }
      
        let tx;
        try {
          const contractWithWallet = contract.connect(wallet);
      
          tx = await contractWithWallet.pickWinner();
      
          await tx.wait();
        } catch (err) {
          const error = new HttpError(
            "Failed to get winner, please try again later." + err,
            500
          );
          return next(error);
        }
      
        res.status(200).send(tx);
      };


      const getParticipants = async (req,res, next)=>{
        
      
        const { privateKey } = req.body;
        let contract;
        let wallet;
      
        try {
          contract = new ethers.Contract(address, JACKPOT_ABI, provider);
          wallet = new ethers.Wallet(privateKey, provider);
        } catch (err) {
          const error = new HttpError(
            "Failed to connect to wallet, please try again later." + err,
            500
          );
          return next(error);
        }
      
        let tx;
        try {
          const contractWithWallet = contract.connect(wallet);
      
          tx = await contractWithWallet.getPlayers();
      
        //   await tx.wait();
        } catch (err) {
          const error = new HttpError(
            "Failed to get winner, please try again later." + err,
            500
          );
          return next(error);
        }
      
        res.status(200).send(tx);
      };



const endJackpot
= async (req,res)=>{}


module.exports={
    loginAdmin, createJackpot, pickWinner, endJackpot, adminApproveForWinner, getParticipants
}