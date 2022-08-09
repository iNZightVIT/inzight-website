import React from "react";

const VersionContext = React.createContext();

// Default implementation, that you can customize
export default function Root({ children }) {
  const [version, setVersion] = React.useState("desktop");

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  return React.useContext(VersionContext);
}
