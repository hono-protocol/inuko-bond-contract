import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AuthorityUpdated } from "../generated/schema"
import { AuthorityUpdated as AuthorityUpdatedEvent } from "../generated/ExpiryTeller/ExpiryTeller"
import { handleAuthorityUpdated } from "../src/expiry-teller"
import { createAuthorityUpdatedEvent } from "./expiry-teller-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let newAuthority = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAuthorityUpdatedEvent = createAuthorityUpdatedEvent(
      user,
      newAuthority
    )
    handleAuthorityUpdated(newAuthorityUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AuthorityUpdated created and stored", () => {
    assert.entityCount("AuthorityUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AuthorityUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AuthorityUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newAuthority",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
