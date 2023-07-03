import React from "react";

import styles from "./GraphTypes.module.css";
import Link from "@docusaurus/Link";

const types = [
  {
    names: ["bar"],
    variables: [
      {
        v1: "categorical",
        v2: ["none", "categorical"],
      },
    ],
  },
  {
    names: ["dot", "hist"],
    variables: [
      {
        v1: "numeric",
        v2: ["none", "categorical"],
      },
      {
        v1: "categorical",
        v2: ["numeric"],
      },
    ],
  },
  {
    names: ["scatter", "grid", "hex"],
    variables: [
      {
        v1: "numeric",
        v2: ["numeric"],
      },
    ],
  },
];

const plotTypes = [
  {
    type: "bar",
    name: "Bar Chart",
    image: "bar/bar.png",
  },
  {
    type: "dot",
    name: "Dot",
    image: "dot/dot.png",
  },
  {
    type: "hist",
    name: "Histogram",
    image: "hist/hist.png",
  },
  {
    type: "scatter",
    name: "Scatter",
    image: "scatter/scatter.png",
  },
  {
    type: "grid",
    name: "Grid Density",
    image: "grid/grid.png",
  },
  {
    type: "hex",
    name: "Hexagonal Binning",
    image: "hex/hex.png",
  },
];

export default function GraphTypes() {
  const [v1, setV1] = React.useState<"none" | "numeric" | "categorical">(
    "none"
  );
  const [v2, setV2] = React.useState<"none" | "numeric" | "categorical">(
    "none"
  );

  const availableGraphs =
    v1 === "none"
      ? types
      : types.filter((t) =>
          t.variables.some((v) => v.v1 === v1 && v.v2.includes(v2))
        );

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.controlRow}>
          <label>Variable 1</label>
          <TypePicker
            value={v1}
            setValue={(x: "none" | "numeric" | "categorical") => setV1(x)}
          />
        </div>
        {v1 !== "none" && (
          <div className={styles.controlRow}>
            <label>Variable 2</label>
            <TypePicker
              value={v2}
              setValue={(x: "none" | "numeric" | "categorical") => setV2(x)}
            />
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <h5>Available Graphs</h5>

        <div className={styles.availableGraphs}>
          {availableGraphs.map((g) =>
            g.names.map((n) => <Graph key={g + "-" + n} type={n} />)
          )}
        </div>
      </div>
    </div>
  );
}

const typeOptions = [
  {
    name: "none",
    description: "No variable",
  },
  {
    name: "numeric",
    description: "Numeric",
  },
  {
    name: "categorical",
    description: "Categorical",
  },
];

function TypePicker({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) {
  return (
    <div className={styles.typePicker}>
      {typeOptions.map((t) => (
        <div
          key={t.name}
          className={styles.typeOption}
          onClick={() => setValue(t.name)}
          style={{
            backgroundColor: value === t.name ? "lightblue" : "white",
          }}
        >
          {t.description}
        </div>
      ))}
    </div>
  );
}

function Graph({ type }: { type: string }) {
  const plotType = plotTypes.find((p) => p.type === type);
  if (!plotType) return <div className={styles.graph}>{type}</div>;

  return (
    <Link to={"/docs/graphics/graph-types/" + type}>
      <div className={styles.graph}>
        <img src={require("./graph-types/" + plotType.image).default} />
        <div className={styles.graphName}>{plotType.name}</div>
      </div>
    </Link>
  );
}
