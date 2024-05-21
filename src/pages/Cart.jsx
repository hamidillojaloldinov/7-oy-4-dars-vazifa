import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { changeAmount, removeProduct } from "../counterSlice";
import { Link } from "react-router-dom";

function Cart() {
  const { products } = useSelector((state) => state.counter);
  console.log(products);
  const dispatch = useDispatch();

  if (products.length == 0) {
    return (
      <div className="p-auto m-auto flex justify-center text-center">
        <div>
          <h1 className="p-5 text-7xl text-center text-slate-200">
            No products
          </h1>
          <button className="btn m-auto text-center flex justify-center text-2xl">
            <Link to="/">My Shop</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name / type</th>
                <th>description</th>
                <th>prise</th>
                <th>amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product.category.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product.title}</div>
                          <div className="text-sm opacity-50">
                            {product.category.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="max-w-52">
                      <span className="">
                        {product.description.substring(0, 150)}...
                      </span>
                    </td>
                    <td>
                      {new Intl.NumberFormat("us-US", {
                        currency: "USD",
                        style: "currency",
                      }).format(product.amount * product.price)}
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            dispatch(
                              changeAmount({ id: product.id, type: "increase" })
                            )
                          }
                        >
                          +
                        </button>
                        {product.amount}
                        <button
                          disabled={product.amount == 1 ? true : false}
                          onClick={() =>
                            dispatch(
                              changeAmount({ id: product.id, type: "decrease" })
                            )
                          }
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <th>
                      <button
                        onClick={() => dispatch(removeProduct(product.id))}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrashAlt className="h-5 w-4" />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </>
    );
  }
}

export default Cart;
