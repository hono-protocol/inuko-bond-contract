import {
  AuthorityUpdated as AuthorityUpdatedEvent,
  Bonded as BondedEvent,
  ERC20BondTokenCreated as ERC20BondTokenCreatedEvent,
  OwnerUpdated as OwnerUpdatedEvent
} from "../generated/ExpiryTeller/ExpiryTeller"
import {
  AuthorityUpdated,
  Bonded,
  ERC20BondTokenCreated,
  OwnerUpdated
} from "../generated/schema"

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
  entity.timeStamp = event.params.timeStamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20BondTokenCreated(
  event: ERC20BondTokenCreatedEvent
): void {
  let entity = new ERC20BondTokenCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bondToken = event.params.bondToken
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
