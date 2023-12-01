import { useEffect, useState } from "react";
import Search from "./components/search/Search";
import Card from "./components/card/Card";

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setData(users))
      .catch((err) => console.log(err));
    console.log(data, "data")
  }, []);

  const onSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
  }

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search);
  })

  return (
    <div className="App">
      <h1 className="text-3xl text-center font-bold underline">
        Örnek React Uygulaması
      </h1>
      <div >
        <Search onChangeSearch={onSearch} placeholder='Search...' />
        <Card filter={filteredData} />
      </div>
    </div>
  );
}

export default App;
