import data from "./animals.json";
import React, { useState } from "react";
import ToggleCell from "./components/ToggleCell";
import Tbody from "./components/Tbody";

function clean(arr) {
  return arr.map((animal) => {
    const [name, , descrip, type] = animal.fullname.split(" ");
    return {
      name,
      descrip,
      type,
      age: animal.age,
      starred:false
    };
  });
}

function App() {
  const [animals, setAnimals] = useState(clean(data));
  //console.log(animals);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");
  const [sortDir, setSortDir] = useState("asc");

  const filteredAnimals =
    filter === ""
      ? animals
      : animals.filter((animal) => animal.type === filter);

  
  const copy = JSON.parse(JSON.stringify(filteredAnimals))
  function compare(a, b) {
    console.log(a,b)
    if (a[sort] > b[sort]) {
      return -1;
    }
    if (a[sort] < b[sort]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  if (sortDir === "asc") {
    copy.sort(compare);
  } else {
    copy.sort((a,b)=>compare(b,a));
  }

  return (
    <div className="App">
      <button onClick={() => setFilter("")}>All</button>
      <button onClick={() => setFilter("cat")}>Cats</button>
      <button onClick={() => setFilter("dog")}>Dogs</button>
      <table>
        <thead>
          <tr>
            <ToggleCell
              setSort={setSort}
              setSortDir={setSortDir}
              sortKey="star"
              title="Star"
            />
            <ToggleCell
              setSort={setSort}
              setSortDir={setSortDir}
              sortKey="name"
              title="Name"
            />
            <ToggleCell
              setSort={setSort}
              setSortDir={setSortDir}
              sortKey="type"
              title="Type"
            />
            <ToggleCell
              setSort={setSort}
              setSortDir={setSortDir}
              sortKey="descrip"
              title="Description"
            />
            <ToggleCell
              setSort={setSort}
              setSortDir={setSortDir}
              sortKey="age"
              title="Age"
            />
          </tr>
        </thead>
        <Tbody filteredAnimals={copy} setAnimals={setAnimals}></Tbody>
      </table>
    </div>
  );
}

export default App;
