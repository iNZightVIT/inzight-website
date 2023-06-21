import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";

function TopBanner() {
  const sponsors = [
    {
      label: "University of Auckland",
      href: "https://stat.auckland.ac.nz",
      logo: "https://inzight.nz/img/uoa_logo.png",
    },
    {
      label: "Te Rourou Tātaritanga",
      href: "https://terourou.org",
      logo: "https://terourou.org/img/logo.png",
    },
    {
      label: "iNZight Analytics Ltd.",
      href: "https://inzight.co.nz",
      logo: "https://inzight.co.nz/inzight-light.png",
    },
  ];

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        Current development proudly sponsored by
      </div>
      <div className={styles.topBannerSponsors}>
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.label}
            href={sponsor.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.label}
              className={styles.topBannerSponsor}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBannerContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            A free <b>data exploration</b> and <b>analytics</b> platform.
          </h1>
        </div>
        <div className={styles.heroCTA}>
          <div className={styles.heroButtons}>
            <Link className="button button--secondary button--lg" to="/">
              Download Now for Windows
            </Link>
            <Link
              className="button button--primary button--lg"
              to="https://lite.docker.stat.auckland.ac.nz"
            >
              Launch iNZight Lite
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <TopBanner />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
