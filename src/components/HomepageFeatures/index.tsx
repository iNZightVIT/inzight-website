import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use. Yes, for you too.",
    Svg: require("@site/static/img/undraw_data_input_fxv2.svg").default,
    description: (
      <>
        iNZight is designed for everyone, from students to professionals, and is
        used in classrooms and workplaces around the world. The software
        automatically gives you the right graphs and summaries based on the
        variables you choose, so you can focus on exploring your data.
      </>
    ),
  },
  {
    title: "Explore. Visualise. Analyse.",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Explore your data using intuitive controls and without getting bogged
        down by complex terminology. Choose your variables, find interesting
        features, and extract statistically appropriate summaries with the click
        of a button.
      </>
    ),
  },
  {
    title: "Nothing to learn. Never forget.",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        iNZight is designed to be easy to use which makes picking it up a
        breeze. And unlike other more complex software, you won't need to
        re-learn everything when you come back to it. Say, after your finish
        that degree and start a new job.
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
