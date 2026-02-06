import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBannerContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              A free <b>data&nbsp;exploration</b> and <b>analytics</b> platform
            </h1>
            <p className={styles.heroTutorialLink}>
              New to iNZight?{" "}
              <Link to="/docs">
                Get started with the tutorial{" "}
                <ArrowRightCircleIcon className="button-icon" />
              </Link>
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src="/img/hero.webp" alt="iNZight in action" />
          </div>
        </div>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/install">
            Download for Windows
          </Link>
          <Link
            className="button button--info button--lg"
            to="https://lite.inzight.nz"
          >
            Start iNZight Lite
          </Link>
        </div>
      </div>
    </header>
  );
}

function SponsorStrip() {
  const sponsors = [
    {
      label: "iNZight Analytics Ltd.",
      href: "https://inzight.co.nz",
      logo: "https://inzight.co.nz/inzight-light.png",
    },
    {
      label: "University of Auckland",
      href: "https://stat.auckland.ac.nz",
      logo: "/img/uoa_logo.png",
    },
  ];

  return (
    <div className={styles.sponsorStrip}>
      <div className={styles.sponsorRow}>
        <span className={styles.sponsorText}>Proudly supported by</span>
        <div className={styles.sponsorLogos}>
          {sponsors.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={s.logo}
                alt={s.label}
                className={styles.sponsorLogo}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const orgLogos = [
  {
    title: "iNZight Analytics Ltd.",
    href: "https://inzight.co.nz",
    logo: "https://inzight.co.nz/inzight-light.png",
  },
  {
    title: "University of Auckland",
    href: "https://auckland.ac.nz",
    logo: "/img/uoa_logo.png",
  },
  {
    title: "Victoria University of Wellington",
    href: "https://wgtn.ac.nz",
    logo: "/img/vuw_logo.png",
  },
  {
    title: "Open Polytechnic",
    href: "http://www.openpolytechnic.ac.nz",
    logo: "/img/openpoly.png",
  },
  {
    title: "Census at School",
    href: "https://new.censusatschool.org.nz",
    logo: "/img/cas_logo.png",
  },
  {
    title: "Growing Up in New Zealand",
    href: "https://growingup.co.nz",
    logo: "/img/guinz_logo.png",
  },
  {
    title: "Stats NZ",
    href: "https://stats.govt.nz",
    logo: "/img/statsnz_logo.svg",
  },
  {
    title: "Australian Bureau of Statistics",
    href: "https://abs.gov.au",
    logo: "/img/abs_logo.svg",
  },
];

function OurUsers() {
  // Duplicate the list for seamless infinite scroll
  const doubled = [...orgLogos, ...orgLogos];

  return (
    <section className={styles.users}>
      <p className={styles.usersHeading}>
        Used by educators and researchers in Aotearoa and abroad
      </p>
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {doubled.map((org, i) => (
            <a
              key={`${org.title}-${i}`}
              href={org.href}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.marqueeItem}
              title={org.title}
            >
              <img src={org.logo} alt={org.title} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.ctaCenteredWrap}>
        <h2 className={styles.ctaCenteredTitle}>
          Ready to explore your data?
        </h2>
        <p className={styles.ctaCenteredDesc}>
          Download iNZight for Windows or jump straight into iNZight Lite in
          your browser — no installation needed.
        </p>
        <div className={styles.ctaCenteredButtons}>
          <Link className="button button--primary button--lg" to="/install">
            Download for Windows
          </Link>
          <Link
            className="button button--info button--lg"
            to="https://lite.inzight.nz"
          >
            Start iNZight Lite
          </Link>
        </div>
        <p className={styles.ctaCenteredSecondary}>
          New to iNZight?{" "}
          <Link to="/docs">
            Start with the tutorial{" "}
            <ArrowRightCircleIcon className="button-icon" />
          </Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <SponsorStrip />
        <HomepageFeatures />
        <OurUsers />
        <FinalCTA />
      </main>
    </Layout>
  );
}
