import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utlis/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearItems());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        onClick={handleClick}
        className="border border-solid rounded-md border-black bg-black text-sky-100 m-4 p-1"
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
