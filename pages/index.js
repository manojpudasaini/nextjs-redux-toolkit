import { useSelector } from "react-redux";
import { selectTotal } from "../slices/orderSlice";
export default function Home() {
  const total = useSelector(selectTotal);
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <p className="text-lg">Total: {total}</p>
    </div>
  );
}
