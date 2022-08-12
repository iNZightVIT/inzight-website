import React from "react";
import DocSidebarItems from "@theme-original/DocSidebarItems";
import { useVersion } from "../Root";

const versions = [
  { name: "desktop", title: "Desktop" },
  { name: "lite", title: "Lite" },
];

export default function DocSidebarItemsWrapper(props) {
  const { version, setVersion } = useVersion();

  const updateVersion = (e) => {
    setVersion(e.target.value);
  };

  return (
    <>
      {props.level === 1 && (
        <div className="versionToggleSwitch">
          <label>iNZight</label>
          <select value={version} onChange={updateVersion}>
            {versions.map((v) => (
              <option key={v.name} value={v.name}>
                {v.title}
              </option>
            ))}
          </select>
        </div>
      )}
      <DocSidebarItems {...props} />
    </>
  );
}
