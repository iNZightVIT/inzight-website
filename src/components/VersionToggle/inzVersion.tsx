import React from "react";
import { useVersion } from "@site/src/theme/Root";

function Desktop({ children }: { children: React.ReactNode }) {
  const { version } = useVersion();
  return version === "desktop" ? <>{children}</> : null;
}

function Lite({ children }: { children: React.ReactNode }) {
  const { version } = useVersion();
  return version === "lite" ? <>{children}</> : null;
}

function Version({ desktop, lite }: { desktop: string; lite: string }) {
  const { version } = useVersion();
  return version === "lite" ? lite : desktop;
}

function setVersion({ type }: { type: "desktop" | "lite" }) {
  const { setVersion } = useVersion();
  setVersion(type);
}

export { Desktop, Lite, Version, setVersion };
