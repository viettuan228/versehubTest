import { useState } from "react";
import HorizontalSlideShow from "./components/HorizontalSlideShow";
import { data } from "./data/data";
import "./styles/mainStyles.scss";

function App() {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(2);
  const [newArr, setNewArr] = useState(data);
  const renderInfo = () => {
    return newArr.map((item, index) => {
      return (
        <li key={index} onClick={() => handleActive(newArr, index)}>
          {item.title}
        </li>
      );
    });
  };

  const handleActive = (arr, index) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === active) {
        newArr.push(arr[index]);
      } else if (i === index) {
        newArr.push(arr[active]);
      } else {
        newArr.push(arr[i]);
      }
    }

    setNewArr(newArr);
  };
  return (
    <div className="App">
      <HorizontalSlideShow data={newArr} handleActive={handleActive}>
        <div className={`container box ${open ? "show" : ""}`}>
          <div className="box__title">
            <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
            <p>List</p>
          </div>
          <ul className={`box__ul `}>{renderInfo()}</ul>
        </div>
      </HorizontalSlideShow>
    </div>
  );
}

export default App;
