import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

function TopBanner() {
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
          {/* <img
            src="/img/logo.svg"
            alt="iNZight Logo"
            style={{ width: "80%" }}
          /> */}
          <h1 className={styles.heroTitle}>
            A free <b>data&nbsp;exploration</b> and <b>analytics</b> platform
          </h1>
          <div className={styles.heroImage}>
            <img src="/img/hero.gif" alt="iNZight in action" />
          </div>
        </div>
        <div className={styles.heroCTA}>
          {/* <div className={styles.heroButtons}></div> */}
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
            <div className={styles.spacer}></div>
            <Link className="button button--success button--lg" to="/docs">
              Tutorial
              <ArrowRightCircleIcon className="button-icon" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function OurUsers() {
  const users = [
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
      logo: "/img/statsnz_logo.png",
    },
    {
      title: "Australian Bureau of Statistics",
      href: "https://abs.gov.au",
      logo: "/img/abs_logo.svg",
    },
  ];
  return (
    <section className={styles.users}>
      <div className="container">
        <h2>
          iNZight is used for teaching and research in the following
          organisations
        </h2>

        <div className={styles.userList}>
          {users.map((user) => (
            <Link key={user.title} to={user.href}>
              <img src={user.logo} alt={user.title} title={user.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <TopBanner />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <OurUsers />
      </main>
    </Layout>
  );
}
