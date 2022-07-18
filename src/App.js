import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Category />
          <Pages />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
