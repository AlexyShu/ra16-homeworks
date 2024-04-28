import { useState, useMemo, useCallback } from "react";

import { List } from "./components/List";
import { IListItem } from "./models";

import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  const items = useMemo(
    (): IListItem[] => [
      {
        id: 1,
        value: "Item 1",
      },
      {
        id: 2,
        value: "Item 2",
      },
      {
        id: 3,
        value: "Item 3",
      },
    ],
    []
  );

  const handleClick = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  console.log("App renders");

  return (
    <div className="App">
      <List items={items} handleClick={handleClick} />

      <button onClick={() => setValue((prev) => prev + 1)}>
        Change {value}
      </button>
    </div>
  );
}

export default App;
