import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Designed for Everyone",
    Svg: require("@site/static/img/undraw_data_input_fxv2.svg").default,
    description: (
      <>
        Whether you're just starting out in statistics or returning after a
        break, iNZight makes it easy. Pick your variables and the software
        handles the rest &mdash; choosing the right graph, the right summary,
        and the right test automatically. No steep learning curve, and nothing
        to re-learn.
      </>
    ),
  },
  {
    title: "Drag, Drop, Explore",
    Svg: require("@site/static/img/undraw_data_extraction_re_0rd3.svg").default,
    description: (
      <>
        Interactive controls let you slice data, spot patterns, and generate
        publication-ready visualisations &mdash; all without writing a single
        line of code.
      </>
    ),
  },
  {
    title: "Powered by R",
    Svg: require("@site/static/img/undraw_source_code_re_wd9m.svg").default,
    description: (
      <>
        Built on R, one of the world's leading languages for data analysis and
        visualisation. Every analysis produces a reproducible R script you can
        view, edit, and share &mdash; start in the GUI and transition to code
        whenever you need full control.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.row)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
