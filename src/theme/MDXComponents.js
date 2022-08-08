import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import { Desktop, Lite } from "../components/VersionToggle/inzVersion";

export default {
  ...MDXComponents,
  desktop: Desktop,
  lite: Lite,
};
