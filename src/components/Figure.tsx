import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useVersion } from "../theme/Root";

type Props = {
  src: string | { desktop: string; lite: string };
  caption: string;
  width: string | number;
};

export default function Figure({ src, caption, width = null }: Props) {
  let imgsrc = "";
  const { version } = useVersion();

  if (typeof src !== "string") {
    if (version === "desktop") imgsrc = src.desktop;
    else imgsrc = src.lite;
  } else {
    imgsrc = src;
  }

  return (
    <figure style={{ border: "", textAlign: "center" }}>
      <img
        src={useBaseUrl(imgsrc)}
        alt={caption}
        width={width}
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      />
    </figure>
  );
}
