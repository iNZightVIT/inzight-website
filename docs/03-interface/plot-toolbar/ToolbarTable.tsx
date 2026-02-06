import Link from "@docusaurus/Link";
import React from "react";

const items = [
  {
    label: "New Plot Window",
    icon: "newplot.png",
    Description: (
      <>
        <p>
          Opens up a new graphics window that uses the default R device instead
          of the 'container' used by iNZight. This has two particular uses:
        </p>
        <ul>
          <li>
            To permit copying and pasting of graphics (including in metafile
            form) by right-clicking on the graphics window,
          </li>
          <li>
            To permit easier resizing of the plotting window, including full
            screen.
          </li>
        </ul>
      </>
    ),
  },
  {
    label: "New Plot Tab",
    icon: "newtab.png",
    Description: (
      <>
        This will create a new plot tab, allowing the currently displayed plot
        to be retained. Subsequent plots will use the new tab. You can switch
        between tabs by double-clicking on the tab you wish to plot into.
      </>
    ),
  },
  {
    label: "Redraw",
    icon: "redraw.png",
    Description: (
      <>
        Use if the plot window seems to have stopped working or is not
        displaying your plot properly. It re-draws the data and usually corrects
        the error.
      </>
    ),
  },
  {
    label: "Rename Plot Tab",
    icon: "rename.png",
    Description: <>Used to rename the tab of the current plotting window.</>,
  },
  {
    label: "Save Plot",
    icon: "saveplot.png",
    Description: (
      <>
        Enables you to save the contents of the displayed plot as a file (in
        <code>.jpeg</code>, <code>.png</code>, <code>.bmp</code>,{" "}
        <code>.tiff</code>, or <code>.pdf</code> formats).
      </>
    ),
  },
  {
    label: "Close Tab",
    icon: "closetab.png",
    Description: (
      <>
        This will close the current <strong>plot tab</strong>, not the iNZight
        window.
      </>
    ),
  },
  {
    label: "Add to Plot",
    icon: "add-to-plot.png",
    Description: (
      <>
        <p>
          Add and modify features of the plot, including colour, size, plot
          type, axes and labels, and more.
        </p>
{/* TODO: Add link when page is created
        <p>
          See{" "}
          <Link to="/docs/interface/plot-toolbar/add-to-plot">Add to Plot</Link>.
        </p>
        */}
      </>
    ),
  },
  {
    label: "Remove Additions",
    icon: "remove-additions.png",
    Description: <>For removal of some or all additions made to a plot.</>,
  },
  {
    label: "Add Inference Information",
    icon: "inference-information.png",
    Description: (
      <>
        <p>Add inferential mark-up to plots.</p>
{/* TODO: Add link when page is created
        <p>
          See{" "}
          <Link to="/docs/interface/plot-toolbar/inference-information">
            Inference Information
          </Link>
          .
        </p>
        */}
      </>
    ),
  },
];

export default function ToolbarTable() {
  return (
    <table>
      <thead>
        <tr>
          <th align="left">Icon</th>
          <th align="left">Name</th>
          <th align="left">Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr
            key={i}
            style={{
              verticalAlign: "top",
            }}
          >
            <td>
              <img
                src={require("./" + item.icon).default}
                alt={item.label}
                style={{
                  width: "64px",
                }}
              />
            </td>
            <td
              style={{
                width: 1,
                whiteSpace: "nowrap",
                fontWeight: "bold",
              }}
            >
              {item.label}
            </td>
            <td>{item.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
