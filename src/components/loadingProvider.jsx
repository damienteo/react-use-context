import React, { useState } from "react";

import LoadingContext from "./loadingContext";

const LoadingProvider = ({ children }) => {
  return <LoadingContext.Provider>{children}</LoadingContext.Provider>;
};

export default LoadingProvider;
