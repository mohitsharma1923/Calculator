

import "./App.css";
import Calculator from "./components/Calculator";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

function App() {
  
  return (
    <>
      <Provider store={store}>
        <Calculator/>
      </Provider>
    </>
  );
}

export default App;
