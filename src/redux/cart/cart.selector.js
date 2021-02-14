import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.SelectCartItems
);

export const selectCartItemsCount = createSelector(
  [SelectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuanitity, cartItem) =>
        accumulatedQuanitity + cartItem.quantity,
      0
    )
);
