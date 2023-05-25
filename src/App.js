import Header from "./Header";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
import { Routes, Route } from "react-router";

function App() {



  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={ <FirstComp />} />
          <Route path="/secondcomponent" element={ <SecondComp /> } />
      </Routes>
    </div>
  );
}

export default App;
