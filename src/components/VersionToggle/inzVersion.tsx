import { useVersion } from "@site/src/theme/Root";

async function Desktop({ children }) {
  const { version } = useVersion();
  const content = version === "desktop" ? children : "";

  return content;
}

function Lite({ children }) {
  const { version } = useVersion();
  if (version === "lite") return children;
  return "";
}

function Version({ desktop, lite }: { desktop: string; lite: string }) {
  const { version } = useVersion();
  if (version === "lite") return lite;
  return desktop;
}

function setVersion({ type }: { type: "desktop" | "lite" }) {
  const { setVersion } = useVersion();
  setVersion(type);
}

export { Desktop, Lite, Version, setVersion };
