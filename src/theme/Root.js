import React, { useEffect } from "react";

const VersionContext = React.createContext();

// Default implementation, that you can customize
export default function Root({ children }) {
  let v = "desktop";
  if (typeof window !== 'undefined') {
    v = localStorage.getItem("version");
    if (!v && v !== "desktop" && v !== "lite") {
      localStorage.setItem("version", "desktop");
      v = "desktop";
    }
  }
  const [version, setVersion] = React.useState(v);

  useEffect(() => {
    if (typeof window !== 'undefined')
      localStorage.setItem("version", version);
  }, [version]);

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      {children}
    </VersionContext.Provider>
  );
}

export function useVersion() {
  return React.useContext(VersionContext);
}
