import React from "react";

import Spinner from "./components/spinner";
import LoadingProvider from "./components/loadingProvider";

function App() {
  return (
    <div className="App">
      <LoadingProvider>
        <div>App</div>
        <Spinner />
      </LoadingProvider>
    </div>
  );
}

export default App;
