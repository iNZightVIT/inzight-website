import { useVersion } from "@site/src/theme/Root";

function Desktop({ children }) {
  const { version } = useVersion();
  return version === "desktop" ? children : "";
}

function Lite({ children }) {
  const { version } = useVersion();
  return version === "lite" ? children : "";
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
