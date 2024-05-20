import { useLoaderData, Link } from "react-router-dom";

function ProductsList() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <ul className="grid grid-cols-3 gap-10">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <li className=" shadow mb-3 max-w-sm flex justify-center items-center text-center">
              <div>
                <img
                  className="hover:scale-105 max-h-96 max-w-80 rounded-lg flex justify-items-center justify-center"
                  src={product.images[0]}
                  alt=""
                />
                <div className="card-body">{product.title}</div>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default ProductsList;