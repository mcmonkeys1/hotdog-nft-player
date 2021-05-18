import Arweave from "arweave"
import col from 'ansi-colors'
import { readFile } from "fs/promises"
import { mint } from "./mint"


const main = async()=> {

	const arg = process.argv.slice(2)
	if(arg.length < 1){
		console.log(col.red('no file specified. exiting'))
		return;
	} 

	const jwk = require('../secrets/jwk.json')
	const arweave = Arweave.init({host: 'arweave.net', protocol:'https'})
	const addr = await arweave.wallets.getAddress(jwk)

	const data = await readFile(arg[0])
	const state = {
		"owner": addr,
		"name": arg[0],
		"ticker": 'sample ' + arg[0],
		"balances": {
			addr: 1,
		},
	}

	const txid = await mint(
		data,
		'I8xgq3361qpR8_DvqcGpkCYAUTMktyAgvkm6kGhJzEQ',
		state,
		jwk,
		[
			{name: 'App-Name', value: 'hotdog-nft-player'},
		]
	)

	console.log(txid)
}
main()