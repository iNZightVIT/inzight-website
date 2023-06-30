import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import { Desktop, Lite, Version } from "../components/VersionToggle/inzVersion";
import Figure from "../components/Figure";
import ContactForm from "../components/ContactForm/ContactForm";

export default {
  ...MDXComponents,
  desktop: Desktop,
  lite: Lite,
  Version: Version,
  Figure: Figure,
  ContactForm: ContactForm,
};
