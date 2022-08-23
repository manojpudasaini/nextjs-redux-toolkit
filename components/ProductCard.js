import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../slices/orderSlice";

const Product = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const addOrderHandler = () => {
    dispatch(addToOrder({ id, name, price }));
  };
  return (
    <div className="mx-auto flex max-h-80 w-full max-w-xs flex-col items-center rounded bg-slate-50 p-2 shadow-sm transition-shadow delay-75 ease-in-out hover:shadow-lg">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="flex w-full flex-col space-y-4 pt-2  text-gray-900">
        <p className="text-center text-xl  font-semibold text-lime-600">
          {name}
        </p>
        <p className=" p-2 text-xl font-medium text-lime-600">Rs.{price}</p>
        <button
          onClick={addOrderHandler}
          className=" rounded-md border border-lime-700 bg-lime-700 px-2 py-1 text-lg text-white shadow-sm outline-none transition-all delay-100 ease-in hover:border-lime-700 hover:bg-lime-50 hover:text-lime-700 "
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Product;
