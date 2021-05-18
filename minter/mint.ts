import Arweave from 'arweave'
import { JWKInterface } from 'arweave/node/lib/wallet'
import FileType from 'file-type'

const arweave = new Arweave({
  host: 'arweave.net',
  protocol: 'https',
})

export async function mint(
  data: Buffer,
  source: string,
  state: object,
  jwk: JWKInterface, //| 'use_wallet'
  tags?: { name: string; value: string }[],
): Promise<string> {
  const fileType = await FileType.fromBuffer(data)
  const type = fileType?.mime || 'text/plain'

  const tx = await arweave.createTransaction({ data }, jwk)

  const allTags = [
    { name: 'Content-Type', value: type },
    { name: 'App-Name', value: 'SmartWeaveContract' },
    { name: 'App-Version', value: '0.3.0' },
    { name: 'Contract-Src', value: source },
    { name: 'Init-State', value: JSON.stringify(state) },
    ...(tags || []),
  ]
  for (const tag of allTags) {
    tx.addTag(tag.name, tag.value)
  }

  await arweave.transactions.sign(tx, jwk)
  const res = await arweave.transactions.post(tx)
  console.log('post response', res)

  const { status } = await arweave.transactions.getStatus(tx.id)
  console.log(`Transaction ${tx.id} status code is ${status}`)

  return tx.id
}