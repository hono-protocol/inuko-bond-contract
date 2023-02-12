import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AuthorityUpdated,
  Bonded,
  ERC20BondTokenCreated,
  OwnerUpdated
} from "../generated/ExpiryTeller/ExpiryTeller"

export function createAuthorityUpdatedEvent(
  user: Address,
  newAuthority: Address
): AuthorityUpdated {
  let authorityUpdatedEvent = changetype<AuthorityUpdated>(newMockEvent())

  authorityUpdatedEvent.parameters = new Array()

  authorityUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  authorityUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newAuthority",
      ethereum.Value.fromAddress(newAuthority)
    )
  )

  return authorityUpdatedEvent
}

export function createBondedEvent(
  id: BigInt,
  referrer: Address,
  amount: BigInt,
  payout: BigInt,
  timeStamp: BigInt
): Bonded {
  let bondedEvent = changetype<Bonded>(newMockEvent())

  bondedEvent.parameters = new Array()

  bondedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  bondedEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )
  bondedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  bondedEvent.parameters.push(
    new ethereum.EventParam("payout", ethereum.Value.fromUnsignedBigInt(payout))
  )
  bondedEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return bondedEvent
}

export function createERC20BondTokenCreatedEvent(
  bondToken: Address,
  underlying: Address,
  expiry: BigInt
): ERC20BondTokenCreated {
  let erc20BondTokenCreatedEvent = changetype<ERC20BondTokenCreated>(
    newMockEvent()
  )

  erc20BondTokenCreatedEvent.parameters = new Array()

  erc20BondTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("bondToken", ethereum.Value.fromAddress(bondToken))
  )
  erc20BondTokenCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "underlying",
      ethereum.Value.fromAddress(underlying)
    )
  )
  erc20BondTokenCreatedEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )

  return erc20BondTokenCreatedEvent
}

export function createOwnerUpdatedEvent(
  user: Address,
  newOwner: Address
): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerUpdatedEvent
}
