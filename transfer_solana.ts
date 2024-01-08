import {Connection,Transaction,SystemProgram,sendAndConfirmTransaction,PublicKey, LAMPORTS_PER_SOL,} from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

const senderWalletKeypair = getKeypairFromEnvironment("SECRET_KEY");


const connection = new Connection("https://api.devnet.solana.com","confirmed")

const publicKey = new PublicKey(senderWalletKeypair.publicKey)


console.log("Loaded our Keypair successfully and connected to the network")

const transaction =  new Transaction() 
//The above line creates an empty transaction.

const instruction = SystemProgram.transfer({
    fromPubkey: publicKey,
    lamports: 100000,
    toPubkey: new PublicKey("miebvdKMXgWyy4XWUFYEpjBCDLd49TEra64DdDPLoxg") //Defining Recipient PublicKey here 
    })

transaction.add(instruction)
//Adding the instruction created to the transaction

const transaction_id = await sendAndConfirmTransaction(connection,transaction,[senderWalletKeypair])
console.log("Here's the Transaction ID: " + transaction_id)