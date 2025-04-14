import React, { useEffect, useState, useContext } from "react";
import categoryContext from "./Category";

function Navbar() {
  const [categories, setCategories] = useState(["...Loading Menu"]);
  const { view, setView } = useContext(categoryContext);

  const handleView = (item) => {
    setView(item);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (e) {
        console.log("error in fetching category");
      }
    };

    fetchCategory();
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <div>
        <h1 className="text-xl font-bold">Krish Ghosh</h1>
      </div>
      <div>
        <ul className="flex gap-6">
          {categories.map((item, i) => (
            <li
              key={i}
              onClick={() => handleView(item)}
              className={`cursor-pointer hover:text-blue-400 transition-colors ${
                view === item ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
