import React, { useContext } from "react";
import LoadingContext from "./loadingContext";

const Spinner = () => {
  const { loadingCount } = useContext(LoadingContext);
  return <div>{loadingCount > 0 && "Spinner"}</div>;
};

export default Spinner;
