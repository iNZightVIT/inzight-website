import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useVersion } from "../theme/Root";

type Props = {
  src: string | { desktop: string; lite: string };
  caption: string;
  width:
    | string
    | number
    | { desktop: string | number; lite: string | number }
    | null;
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

  let imgwidth;
  if (width === null) {
    imgwidth = "100%";
  } else if (typeof width !== "string" && typeof width !== "number") {
    if (version === "desktop") imgwidth = width.desktop.toString();
    else imgwidth = width.lite.toString();
  } else {
    imgwidth = width.toString();
  }

  return (
    <figure style={{ border: "", textAlign: "center" }}>
      <img
        src={useBaseUrl(imgsrc)}
        alt={caption}
        width={imgwidth}
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      />
    </figure>
  );
}
