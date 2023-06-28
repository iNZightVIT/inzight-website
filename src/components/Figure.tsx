import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useVersion } from "../theme/Root";

import styles from "./Figure.module.css";

type Props = {
  src: string | { desktop: string; lite: string };
  caption: string;
  width:
    | string
    | number
    | { desktop: string | number; lite: string | number }
    | null;
  inline?: boolean;
};

export default function Figure({
  src,
  caption,
  width = null,
  inline = false,
}: Props) {
  let imgsrc = "";
  const { version } = useVersion();
  const [zoom, setZoom] = useState(false);

  if (typeof src !== "string") {
    if (version === "desktop") imgsrc = src.desktop;
    else imgsrc = src.lite;
  } else {
    imgsrc = src;
  }
  const baseUrl = useBaseUrl(imgsrc);

  if (inline) {
    return (
      <span className={styles.inlineImage}>
        <img src={baseUrl} alt={caption} />
      </span>
    );
  }

  let imgwidth: string;
  if (width === null) {
    imgwidth = "100%";
  } else if (typeof width !== "string" && typeof width !== "number") {
    if (version === "desktop") imgwidth = width.desktop.toString();
    else imgwidth = width.lite.toString();
  } else {
    imgwidth = width.toString();
  }

  return (
    <>
      {zoom && (
        <div className={styles.overlay} onClick={() => setZoom(false)}>
          <div className={styles.overlayImage}>
            <img src={baseUrl} alt={caption} />
            <caption className={styles.caption}>{caption}</caption>
          </div>
        </div>
      )}
      <figure className={styles.figure}>
        <img
          src={baseUrl}
          alt={caption}
          width={imgwidth}
          style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          onClick={() => setZoom(true)}
        />
      </figure>
    </>
  );
}
