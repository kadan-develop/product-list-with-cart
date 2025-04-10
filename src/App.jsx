import { useEffect, useState } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";

function App() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setDesserts(data));
  }, []);

  return (
    <>
      <main className="font-redhat max-w-4xl p-6 m-14">
        <h1 className="text-3xl font-bold text-left pl-4">Desserts</h1>
        <div className="grid grid-cols-3 ">
          {desserts.map((desert) => (
            <Card dessert={desert} />
          ))}
        </div>

        <Cart />
      </main>
    </>
  );
}

export default App;
