import {
  ApprovalForAll as ApprovalForAllEvent,
  AuthorityUpdated as AuthorityUpdatedEvent,
  Bonded as BondedEvent,
  ERC1155BondTokenCreated as ERC1155BondTokenCreatedEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent
} from "../generated/Teller/Teller"
import {
  ApprovalForAll,
  AuthorityUpdated,
  Bonded,
  ERC1155BondTokenCreated,
  OwnerUpdated,
  TransferBatch,
  TransferSingle
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuthorityUpdated(event: AuthorityUpdatedEvent): void {
  let entity = new AuthorityUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.newAuthority = event.params.newAuthority

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBonded(event: BondedEvent): void {
  let entity = new Bonded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.id
  entity.referrer = event.params.referrer
  entity.amount = event.params.amount
  entity.payout = event.params.payout
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC1155BondTokenCreated(
  event: ERC1155BondTokenCreatedEvent
): void {
  let entity = new ERC1155BondTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.underlying = event.params.underlying
  entity.expiry = event.params.expiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.amounts = event.params.amounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.id
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
