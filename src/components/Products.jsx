import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductAction";

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  return (
    <div className="max-w-screen-xl p-10 bg-red-100 m-auto ">
      <h1 className="text-2xl font-bold text-red-900">Product List</h1>
      <ul>
        {products &&
          products.map((product, index) => {
            return (
              <li key={product.id}>
                <h1>
                  {product.title}{" "}
                  <span
                    onClick={() => deleteHandler(index)}
                    className="font-bold text-red-900 cursor-pointer"
                  >
                    X
                  </span>
                </h1>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Products;
