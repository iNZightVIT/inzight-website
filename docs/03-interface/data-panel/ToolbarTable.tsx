import React from "react";

const items = [
  {
    label: "Spreadsheet View",
    icon: "spreadsheet-icon.gif",
    Description: (
      <>
        <p>Clicking this button will display the dataset in full (though paginated for performance reasons). This lets users see each individual value in their dataset, and is the default view.</p>
        <p>The columns of the spreadsheet view are draggable. By clicking and dragging the names onto the [variable selection boxes], users can quickly explore their data visually — the graphs will automatically appear on the right of the iNZight interface.</p>
        <p>The spreadsheet view also provides minimal capabilties for data editing. By double-clicking on a cell, it is possible for individual values to be edited. So, for example, if you notice an invalid value (perhaps a typo, or a missing 0) you can fix it up. Remember to export your data so you don’t have to fix it again next time!</p>
      </>
    ),
  },
  {
    label: "Variable View",
    icon: "variable-icon.png",
    Description: (
      <>
        <p>In variable view, users are presented with a list of the variables in the dataset, along with some basic meta information about them. This includes variable types (numeric, categorical, or date-time) and a brief summary of the type of values:</p>

        <ul>
          <li>numeric variables show the range of values</li>
          <li>categorical variables show the possible categories</li>
          <li>date-times show the span of the variable</li>
        </ul>

        <p>Once again, the rows in this view are also draggable, so they can easily be dropped onto one of the variable slots to create a new graph.</p>
      </>
    ),
  },
  {
    label: "Dataset Information",
    icon: "data-info-icon.png",
    Description: (
      <>
        <p>The spreadsheet view provides a rectangular view of every value in your dataset. However, some datasets might have lots of rows or columns (or both!) so iNZight uses pagination. This ensures that the software can quickly load the interface, without restricting what you can see (in previous verisons of iNZight, the spreadsheet view was disable for large datasets).</p>
        <p>Use the pagination controls (columns are controlled at the top; rows at the bottom) to navigate through your dataset. Remember, you can also use the search functionality to find specific columns/variables.</p>
      </>
    ),
  },
  {
    label: "Search Variables",
    icon: "search-icon.gif",
    Description: (
      <>
        <p>If your dataset contains lots of variables, it can be difficult to find the variable you’re looking forward. In this situation, use the search button to open the search box. This lets you filter down the variables display in both the spreadsheet and variable views.</p>
      </>
    )
  }
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
              {item.icon && (
                <img
                  src={require("./" + item.icon).default}
                  alt={item.label}
                  style={{
                    width: "64px",
                  }}
                />
              )}
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
