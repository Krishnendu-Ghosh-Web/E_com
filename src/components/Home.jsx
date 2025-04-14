import React, { useContext, useEffect, useState } from "react";
import categoryContext from "./Category";

function Home() {
  const { view } = useContext(categoryContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const categoryView = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${view}`
        );
        const categoryData = await res.json();
        setData(categoryData);
      } catch (e) {
        console.log("error hai baba");
      }
    };

    categoryView();
  }, [view]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 capitalize">
        Showing: {view}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white text-black p-4 rounded shadow">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm line-clamp-2">{item.description}</p>
            <p className="mt-2 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
