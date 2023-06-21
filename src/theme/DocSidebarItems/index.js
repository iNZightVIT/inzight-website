import React from "react";
import DocSidebarItems from "@theme-original/DocSidebarItems";
import { useVersion } from "../Root";
import { ComputerDesktopIcon, WindowIcon } from "@heroicons/react/24/outline";

const versions = [
  { name: "desktop", title: "Desktop", icon: ComputerDesktopIcon },
  { name: "lite", title: "Lite", icon: WindowIcon },
];

export default function DocSidebarItemsWrapper(props) {
  const { version, setVersion } = useVersion();

  const updateVersion = (e) => {
    setVersion(e.target.value);
  };

  return (
    <>
      {props.level === 1 && (
        <Toggle options={versions} value={version} setValue={setVersion} />
        // <div className="versionToggleSwitch">
        //   <label>iNZight</label>
        //   <select value={version} onChange={updateVersion}>
        //     {versions.map((v) => (
        //       <option key={v.name} value={v.name}>
        //         {v.title}
        //       </option>
        //     ))}
        //   </select>
        // </div>
      )}
      <DocSidebarItems {...props} />
    </>
  );
}

const Toggle = ({ options, value, setValue }) => {
  return (
    <div className="toggle--container">
      {value === "desktop" ? "Desktop" : "Lite"}
      <div className="toggle--items">
        {options.map(({ name, title, icon: Icon }) => (
          <div
            key={name}
            className={`toggle--option ${name === value ? "active" : ""}`}
            onClick={() => setValue(name)}
          >
            <Icon className="toggle--icon" />
          </div>
        ))}
      </div>
    </div>
  );
};
