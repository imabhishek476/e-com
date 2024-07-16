export const cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

export const AddToCart = (obj) => {
  const isPresent = cartArray.some((item) => item.id === obj.id);
  if (isPresent) {
    return { error: true, message: "Already present in cart" };
  } else {
    try {
      cartArray.push(obj);
      console.log(obj);
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      return { error: false, message: "Added" };
    } catch (error) {
      console.error("Failed to add to cart:", error);
      return { error: true, message: error };
    }
  }
};

export const RemoveFromCart = (id) => {
  const index = cartArray.findIndex((item) => item.id === id);
  if (index !== -1) {
    try {
      cartArray.splice(index, 1);
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
      return "Removed";
    } catch (error) {
      console.error("Failed to remove from cart:", error);
      return "Failed to Remove";
    }
  } else {
    return "Item not found in cart";
  }
};
