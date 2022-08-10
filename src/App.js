import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import New from "./pages/New/New";
import Single from "./pages/Single/Single";
import Login from "./pages/Login/Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="/products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
