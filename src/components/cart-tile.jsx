import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartTile({cartItem}) {

    const dispatch = useDispatch();

    function handleRemoveFromCart() {
        dispatch(removeFromCart(cartItem.id));
    }

    return (
      <>
        <div className="flex items-stretch justify-between p-5 my-2 rounded-xl border-solid border-2 border-black">
            <div className="flex p-3">
                <img src={cartItem?.image} alt={cartItem?.title} className="h-28 rounded-lg" />
                <div className="ml-10">
                    <h1 className="text-xl text-black font-bold">
                        {cartItem?.title}
                    </h1>
                    <p className="text-black font-extrabold mt-2">
                        {cartItem?.price}
                    </p>
                </div>
            </div>
            <div>
                <button 
                    onClick={handleRemoveFromCart}
                    className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                        <FaRegTrashAlt />
                </button>
            </div>
        </div>
      </>  
    );
}