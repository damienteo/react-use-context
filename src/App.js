import React from "react";

import Spinner from "./components/spinner";
import LoadingProvider from "./components/loadingProvider";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <LoadingProvider>
        <div>App</div>
        <Login />
        <Spinner />
      </LoadingProvider>
    </div>
  );
}

export default App;
