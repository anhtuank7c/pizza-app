import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { ProductModel } from "../product/product"

/**
 * Model description here for TypeScript hints.
 */
export const AccountModel = types
  .model("Account")
  .props({
    cart: types.optional(types.array(ProductModel), []),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Account extends Instance<typeof AccountModel> {}
export interface AccountSnapshotOut extends SnapshotOut<typeof AccountModel> {}
export interface AccountSnapshotIn extends SnapshotIn<typeof AccountModel> {}
export const createAccountDefaultModel = () => types.optional(AccountModel, {})
