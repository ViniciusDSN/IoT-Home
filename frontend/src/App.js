import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const App = () => {

  const options = {
    timeout: 5000,
    positions: positions.TOP_CENTER,
  };

  return (
    <BrowserRouter>
      <Provider template={AlertTemplate} {...options}>
        <Routes />
      </Provider>
    </BrowserRouter>
  )
}

export default App;