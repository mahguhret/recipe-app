import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
