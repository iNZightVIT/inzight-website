import { useVersion } from "@site/src/theme/Root";

function Desktop({ children }) {
  const { version } = useVersion();
  if (version === "desktop") return children;
  return "";
}

function Lite({ children }) {
  const { version } = useVersion();
  if (version === "lite") return children;
  return "";
}

function setVersion({ type }: { type: "desktop" | "lite" }) {
  const { setVersion } = useVersion();
  setVersion(type);
}

export { Desktop, Lite, setVersion };
