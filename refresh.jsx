// Refreshed Gallagher homepage, confident editorial direction.
const ARROW = (<svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>);

function UtilityBar() {
  return (
    <div className="utility">
      <div className="container">
        <div className="left">
          <span><span className="accent-dot"></span>North St. Paul, MN · Est. 1984</span>
        </div>
        <div className="right">
          <a href="tel:+16517748759">651.774.8759</a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <a className="nav-logo" href="index.html">
          <img src="assets/logos/gfs-logo-horizontal.jpg" alt="Gallagher Financial Services" loading="eager" fetchpriority="high" />
        </a>
        <div className="nav-links">
          <a href="services.html">What We Offer</a>
          <a href="team.html">The Team</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

function Swoop({compact}) {
  return (
    <div className={"swoop-divider " + (compact ? "compact" : "")}>
      <svg viewBox="0 0 1440 88" preserveAspectRatio="none">
        <path d="M0,46 C260,8 540,80 1000,30 C1200,12 1340,38 1440,22 L1440,88 L0,88 Z" fill="#B8B8B8" opacity=".5"/>
        <path d="M0,60 C260,22 540,92 1000,42 C1200,22 1340,48 1440,32 L1440,88 L0,88 Z" fill="#94D500"/>
      </svg>
    </div>
  );
}

// Hero is defined inline in index.html (Hero3D), no Hero component here.
// PORTALS is duplicated in index.html where it is used.

const SERVICES = [
  { num: '01', t: 'Financial Planning', d: 'A comprehensive process for your full financial life.' },
  { num: '02', t: 'Taxation', d: 'Tax planning that integrates with your full financial plan.' },
  { num: '03', t: 'Insurance', d: 'Find the best coverage for your situation, from independent agents.' },
  { num: '04', t: 'Retirement', d: 'Target the distribution of your assets in a tax‑advantaged way.' },
  { num: '05', t: 'Estate', d: 'Protect your assets, for life and beyond.' }
];

// Slug helper kept in lockstep with services.html so deep-links resolve.
const _serviceSlug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function Services() {
  return (
    <section className="services" id="offer">
      <div className="container">
        <div className="head">
          <div>
            <div className="label">What We Offer</div>
          </div>
        </div>
        <div className="svc-list">
          {SERVICES.map(s => (
            <a className="svc-row" key={s.t} href={'services.html#' + _serviceSlug(s.t)}>
              <span className="svc-row-num">{s.num}</span>
              <h3 className="svc-row-title">{s.t}</h3>
              <p className="svc-row-desc">{s.d}</p>
              <span className="svc-row-arrow" aria-hidden="true">{ARROW}</span>
            </a>
          ))}
          <a className="svc-row svc-row-cta" href="contact.html">
            <span className="svc-row-num">+</span>
            <h3 className="svc-row-title">Built for you</h3>
            <p className="svc-row-desc">Start with a no-obligation conversation. We'll tell you which of these you actually need.</p>
            <span className="svc-row-arrow" aria-hidden="true">{ARROW}</span>
          </a>
        </div>
      </div>
      <div style={{marginTop: 0}}><Swoop compact /></div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="contact">
      <img src="assets/logos/GFS Chess Piece jpg.JPG" alt="" className="visit-watermark" loading="lazy" />
      <div className="container">
        <div className="grid">
          <div>
            <h2>Let's talk. <em>No obligation.</em></h2>
            <div className="actions">
              <a className="btn btn-primary" href="contact.html">Contact Us {ARROW}</a>
            </div>
          </div>
          <div className="contact-block">
            <div className="contact-row">
              <div className="h">Office</div>
              <div className="v serif">2586 7th Ave. E, Suite 304<br/>North St. Paul, MN 55109</div>
            </div>
            <div className="contact-row">
              <div className="h">Phone</div>
              <div className="v"><a href="tel:+16517748759">651.774.8759</a></div>
            </div>
            <div className="contact-row">
              <div className="h">Hours</div>
              <div className="v serif">Mon–Fri · 8:30a–5:00p CT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <a href="index.html">Home</a><span className="sep">|</span>
          <a href="services.html">What We Offer</a><span className="sep">|</span>
          <a href="team.html">The Team</a><span className="sep">|</span>
          <a href="contact.html">Contact Us</a>
        </div>
        <div className="footer-badges">
          <a className="footer-badge" href="https://www.letsmakeaplan.org/find-a-cfp-professional/certified-professional-profile/73c2a8e0-ed84-4e00-a4b3-43ea77b9223e" target="_blank" rel="noreferrer" aria-label="Mark Gallagher CFP Board profile">
            <img src="assets/buttons/client_btn_cfp.png" alt="CFP Board Certified" loading="lazy" />
          </a>
          <a className="footer-badge" href="https://brokercheck.finra.org/individual/summary/1297996" target="_blank" rel="noreferrer" aria-label="Mark Gallagher BrokerCheck profile">
            <img src="assets/buttons/broker_gallagher.png" alt="FINRA BrokerCheck" loading="lazy" />
          </a>
        </div>
        <div className="disclosure">
          <div className="disclosure-links">
            <a href="https://assets.osaic.com/m/f971a637fff07a0/original/Form-CRS.pdf" target="_blank" rel="noreferrer">Osaic Form CRS</a>
            <span className="disc-sep">·</span>
            <a href="https://brokercheck.finra.org/" target="_blank" rel="noreferrer">FINRA BrokerCheck</a>
            <span className="disc-sep">·</span>
            <span className="disc-finra-sipc">
              <a href="https://www.finra.org" target="_blank" rel="noreferrer">FINRA</a>/<a href="https://www.sipc.org" target="_blank" rel="noreferrer">SIPC</a>
            </span>
          </div>
          <p><strong>Please Note:</strong> When you link to any of the websites displayed within this website, you are leaving this website and assume total responsibility and risk for your use of the website you are linking to. We make no representation as to the completeness or accuracy of any information provided at these websites.</p>
          <p>Securities and investment advisory services offered through Osaic Wealth, Inc., Member <a href="https://www.finra.org" target="_blank" rel="noreferrer">FINRA</a>/<a href="https://www.sipc.org" target="_blank" rel="noreferrer">SIPC</a>. Osaic Wealth is separately owned and other entities and/or marketing names, products or services referenced here are independent of Osaic Wealth. Osaic Wealth does not offer tax or legal advice.</p>
          <p>This communication is strictly intended for individuals residing in the states of AK, AZ, CA, CO, FL, GA, IA, MA, MI, MN, MO, NC, NM, NV, NY, OK, SC, TX, UT, VA, WA, and WI. No offers may be made or accepted from any resident outside the specific state(s) referenced.</p>
          <p>Check the background of your financial professional on <a href="https://brokercheck.finra.org/" target="_blank" rel="noreferrer">FINRA's BrokerCheck</a>.</p>
        </div>
        <div className="copy">© 2026 Gallagher Financial Services</div>
      </div>
    </footer>
  );
}

function MobileTabBar() {
  const tabs = [
    { label: 'Home', href: 'index.html', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { label: 'Services', href: 'services.html', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
    { label: 'Team', href: 'team.html', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { label: 'Contact', href: 'contact.html', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
  ];
  return (
    <nav className="mobile-tab-bar">
      {tabs.map(t => (
        <a key={t.label} href={t.href} className="tab-item">
          <span className="tab-icon">{t.icon}</span>
          <span className="tab-label">{t.label}</span>
        </a>
      ))}
    </nav>
  );
}

Object.assign(window, { UtilityBar, Nav, Swoop, Services, Visit, Footer, MobileTabBar });
