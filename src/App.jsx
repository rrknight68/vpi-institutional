import { useEffect } from "react";
import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

const C = {
  navy: "#0D2B4E",
  navyMid: "#1A3D66",
  navyDeep: "#081a30",
  gold: "#C89A3A",
  goldLight: "#E2B95A",
  cream: "#F9F7F3",
  parchment: "#F2EDE3",
  white: "#F0EDE5",
  bg: "#FAF8F5",
  ink: "#1a1a1a",
  body: "#3A3A3A",
  muted: "#8A8A94",
  line: "#E8E4DE",
  shoulder: "#E8DDC0",
  creamCard: "#FAF8F2",
};
const F = {
  display: "'Cormorant Garamond', Georgia, serif",
  label: "'Cinzel', serif",
  mono: "'DM Mono', 'Courier New', monospace",
  body: "'Lora', Georgia, serif",
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// =============================================================
// HEADER
// =============================================================
function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: C.navy, borderBottom: `1px solid rgba(200,154,58,0.25)` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0 }}>
          <span style={{ fontFamily: F.label, fontSize: 12, fontWeight: 600, color: C.cream, lineHeight: 1, letterSpacing: "0.18em", textTransform: "uppercase" }}>Vantage Point</span>
          <span style={{ fontFamily: F.label, fontSize: 9, fontWeight: 500, color: C.gold, marginTop: 4, letterSpacing: "0.32em", textTransform: "uppercase" }}>&mdash; Investments &mdash;</span>
        </Link>
        <nav style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <Link to="/compliance" style={{ fontFamily: F.label, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(249,247,243,0.85)", textDecoration: "none", fontWeight: 500 }}>Compliance</Link>
          <a href="mailto:angela@vpiflorida.com" style={{ background: C.gold, color: C.navy, padding: "9px 18px", borderRadius: 3, textDecoration: "none", fontFamily: F.label, fontSize: 10.5, letterSpacing: 1.8, textTransform: "uppercase", fontWeight: 600 }}>Investor Inquiries</a>
        </nav>
      </div>
    </header>
  );
}

// =============================================================
// FOOTER
// =============================================================
function Footer() {
  return (
    <footer style={{ background: C.navyDeep, color: "rgba(249,247,243,0.7)", padding: "44px 24px 28px", borderTop: `1px solid rgba(200,154,58,0.22)` }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 3, color: C.gold, textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>Securities Disclosure</div>
          <p style={{ fontSize: 12, lineHeight: 1.75, fontFamily: F.body, color: "rgba(249,247,243,0.7)", marginBottom: 14 }}>
            Vantage Point Investments LLC (&ldquo;VPI&rdquo;) sponsors private real estate investment offerings exempt from registration under Rule 506(c) of Regulation D promulgated under the Securities Act of 1933, as amended. All offerings are limited to verified accredited investors as defined in Rule 501(a) of Regulation D. Verification of accredited investor status is required before any offering materials, subscription documents, or private placement memorandum are shared. Past performance does not guarantee future results. All investments involve risk, including potential loss of principal.
          </p>
          <p style={{ fontSize: 12, lineHeight: 1.75, fontFamily: F.body, color: "rgba(249,247,243,0.7)" }}>
            This website does not constitute an offer to sell or a solicitation of an offer to buy securities. Such offers are made only through definitive offering documents, including a Private Placement Memorandum, made available to verified accredited investors who have completed VPI&rsquo;s verification process.
          </p>
        </div>
        <div style={{ borderTop: `1px solid rgba(200,154,58,0.2)`, paddingTop: 20, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontFamily: F.label, fontSize: 9, letterSpacing: 2.5, color: "rgba(249,247,243,0.55)", textTransform: "uppercase" }}>
            &copy; {new Date().getFullYear()} Vantage Point Investments LLC &middot; Cape Coral, Florida &middot; All rights reserved
          </div>
          <div style={{ display: "flex", gap: 18, fontFamily: F.body, fontSize: 12 }}>
            <Link to="/compliance" style={{ color: C.gold, textDecoration: "none" }}>Compliance</Link>
            <a href="mailto:angela@vpiflorida.com" style={{ color: C.gold, textDecoration: "none" }}>angela@vpiflorida.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Layout() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: F.body, display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}><Outlet /></main>
      <Footer />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; line-height: 1.6; }
        a { color: inherit; }
      `}</style>
    </div>
  );
}

// =============================================================
// REUSABLE PRIMITIVES
// =============================================================
function Eyebrow({ children }) {
  return <div style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 3, color: C.gold, textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>{children}</div>;
}

function H1({ children }) {
  return <h1 style={{ fontFamily: F.display, fontSize: "clamp(2rem, 4.5vw, 3rem)", color: C.navy, fontWeight: 400, lineHeight: 1.1, marginBottom: 18, letterSpacing: -0.005 }}>{children}</h1>;
}

function H2({ children }) {
  return <h2 style={{ fontFamily: F.display, fontSize: "clamp(1.5rem, 2.6vw, 1.95rem)", color: C.navy, fontWeight: 500, lineHeight: 1.2, marginBottom: 14, letterSpacing: -0.005 }}>{children}</h2>;
}

function H3({ children }) {
  return <h3 style={{ fontFamily: F.display, fontSize: "1.25rem", color: C.navy, fontWeight: 600, lineHeight: 1.3, marginTop: "1.6rem", marginBottom: "0.6rem" }}>{children}</h3>;
}

function H4({ children }) {
  return <h4 style={{ fontFamily: F.label, fontSize: "0.78rem", color: C.gold, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "1.2rem", marginBottom: "0.4rem" }}>{children}</h4>;
}

function Lede({ children }) {
  return <p style={{ fontFamily: F.display, fontStyle: "italic", fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)", color: C.muted, lineHeight: 1.6, maxWidth: 720, marginBottom: 18 }}>{children}</p>;
}

function P({ children, italic, last }) {
  return <p style={{ fontSize: 15, lineHeight: 1.85, color: C.body, marginBottom: last ? 0 : 14, fontStyle: italic ? "italic" : "normal" }}>{children}</p>;
}

function Bullets({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "flex", gap: 12, fontSize: 14.5, color: C.body, lineHeight: 1.7, padding: "5px 0" }}>
          <span style={{ color: C.gold, fontWeight: 700, flexShrink: 0 }}>&middot;</span><span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }) {
  return (
    <div style={{ background: C.creamCard, border: `1px solid ${C.shoulder}`, borderLeft: `3px solid ${C.gold}`, borderRadius: 8, padding: "14px 18px", margin: "1rem 0 1.25rem" }}>
      <p style={{ fontSize: 14.5, lineHeight: 1.75, color: C.navy, fontFamily: F.display, fontStyle: "italic", margin: 0 }}>{children}</p>
    </div>
  );
}

// =============================================================
// HOMEPAGE (placeholder)
// =============================================================
function Home() {
  return (
    <>
      <section style={{ background: `linear-gradient(180deg, ${C.parchment} 0%, ${C.bg} 100%)`, padding: "72px 24px 56px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow>Vantage Point Investments &middot; Cape Coral, FL</Eyebrow>
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", color: C.navy, fontWeight: 400, lineHeight: 1.1, marginBottom: 18, letterSpacing: -0.005 }}>
            Southwest Florida real estate, <em style={{ fontStyle: "italic", color: C.gold, fontWeight: 500 }}>institutionally underwritten.</em>
          </h1>
          <p style={{ fontFamily: F.display, fontStyle: "italic", fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)", color: C.muted, lineHeight: 1.55, maxWidth: 720, margin: "0 auto 28px" }}>
            Vantage Point Investments LLC sponsors private real estate offerings under Rule 506(c) of Regulation D, available to verified accredited investors.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 24px", maxWidth: 760, margin: "0 auto" }}>
        <Eyebrow>The Firm</Eyebrow>
        <H2>Twelve years building real estate in Southwest Florida.</H2>
        <p style={{ fontSize: 16, lineHeight: 1.85, color: C.body, marginBottom: 16 }}>
          VPI is a Florida-based real estate development and investment sponsor focused on Southwest Florida&rsquo;s waterfront, resort, and flex industrial markets. We develop, hold, and operate institutional-quality assets across Cape Coral, Bonita Springs, Englewood, and the broader Lee and Charlotte County corridor.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.85, color: C.body, marginBottom: 24 }}>
          Our offerings are private placements under Rule 506(c) of Regulation D, available only to accredited investors who complete VPI&rsquo;s verification process. Project materials &mdash; including the Private Placement Memorandum, financial model, and subscription documents &mdash; are released to investors after verification is complete.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/compliance" style={{ background: C.gold, color: C.navy, padding: "12px 22px", borderRadius: 4, textDecoration: "none", fontFamily: F.label, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>How verification works</Link>
          <a href="mailto:angela@vpiflorida.com?subject=VPI Investor Inquiry" style={{ background: "transparent", color: C.navy, border: `1px solid ${C.navy}`, padding: "12px 22px", borderRadius: 4, textDecoration: "none", fontFamily: F.label, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>Request investor materials</a>
        </div>
      </section>

      <section style={{ padding: "44px 24px 72px", background: C.parchment, borderTop: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Eyebrow>Coming Soon</Eyebrow>
          <H2>The full institutional site is in build.</H2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: C.body, marginBottom: 12 }}>
            Project pages with target IRR, equity multiples, and subscription details are being finalized. Currently active in our portfolio:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 18px" }}>
            <li style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, padding: "12px 0", borderBottom: `1px solid ${C.line}`, fontSize: 14.5 }}>
              <span style={{ color: C.navy, fontWeight: 500 }}>Lake Shadroe Resort &amp; Marina</span>
              <span style={{ color: C.muted, fontFamily: F.mono, fontSize: 12.5 }}>Cape Coral &middot; Active</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, padding: "12px 0", borderBottom: `1px solid ${C.line}`, fontSize: 14.5 }}>
              <span style={{ color: C.navy, fontWeight: 500 }}>Casa Tulum</span>
              <span style={{ color: C.muted, fontFamily: F.mono, fontSize: 12.5 }}>Cape Coral &middot; Q1 2027</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, padding: "12px 0", fontSize: 14.5 }}>
              <span style={{ color: C.navy, fontWeight: 500 }}>Turquoise Bay Resort &amp; Marina</span>
              <span style={{ color: C.muted, fontFamily: F.mono, fontSize: 12.5 }}>Englewood &middot; Permitting</span>
            </li>
          </ul>
          <p style={{ fontSize: 13.5, color: C.muted, fontStyle: "italic", lineHeight: 1.65 }}>
            For project-specific details and accredited investor materials, contact Angela Salera at <a href="mailto:angela@vpiflorida.com" style={{ color: C.gold, textDecoration: "none" }}>angela@vpiflorida.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}

// =============================================================
// COMPLIANCE PAGE
// =============================================================
function Compliance() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: `linear-gradient(180deg, ${C.parchment} 0%, ${C.bg} 100%)`, padding: "60px 24px 44px", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Eyebrow>Regulatory Framework</Eyebrow>
          <H1>How VPI Investor Compliance Works</H1>
          <Lede>Vantage Point Investments operates its real estate offerings under Rule 506(c) of Regulation D. This page explains what that means, how we verify accredited investor status, and what documentation is required before you receive deal materials.</Lede>
        </div>
      </section>

      {/* SECTION 1 */}
      <section style={{ padding: "56px 24px 24px", maxWidth: 800, margin: "0 auto" }}>
        <Eyebrow>Section 01</Eyebrow>
        <H2>Rule 506(c) of Regulation D</H2>
        <P>VPI sponsors private real estate investment offerings under Rule 506(c) of Regulation D, an exemption from securities registration that permits general solicitation while requiring stricter accredited investor verification.</P>
        <H3>What this means in practice</H3>
        <Bullets items={[
          "VPI may publicly market our offerings, including on this website, through digital advertising, at conferences, and through introductions from existing investors and partners.",
          "VPI may publicly disclose project-level financial details — target IRR, equity multiples, hold periods, total raise sizes, and assets under management.",
          "VPI is required to verify, prior to acceptance of any subscription, that every investor meets the accredited investor standards under Rule 501(a) of Regulation D.",
          "Self-certification by investors — common under Rule 506(b) — does not satisfy the 506(c) requirement.",
        ]} />
      </section>

      {/* SECTION 2 */}
      <section style={{ padding: "32px 24px 24px", maxWidth: 800, margin: "0 auto", borderTop: `1px solid ${C.line}` }}>
        <div style={{ paddingTop: 32 }}>
          <Eyebrow>Section 02</Eyebrow>
          <H2>Who Qualifies as an Accredited Investor</H2>
          <P>Under Rule 501(a) of Regulation D, an individual investor qualifies as accredited if they meet at least one of the following standards:</P>
          <H4>Income</H4>
          <P>Annual income exceeding $200,000 individually (or $300,000 jointly with a spouse) for each of the two most recent years, with a reasonable expectation of reaching the same threshold in the current year.</P>
          <H4>Net Worth</H4>
          <P>Individual or joint net worth exceeding $1,000,000, excluding the value of the primary residence.</P>
          <H4>Professional Credential</H4>
          <P>Holders in good standing of a Series 7, Series 65, or Series 82 license issued by FINRA.</P>
          <H4>Knowledgeable Employee</H4>
          <P>Certain executive officers, directors, or general partners of the issuer.</P>
          <P last>Entities qualify as accredited under separate criteria, including total assets exceeding $5,000,000 and certain trust, family office, and registered investment company structures.</P>
        </div>
      </section>

      {/* SECTION 3 */}
      <section style={{ padding: "32px 24px 24px", maxWidth: 800, margin: "0 auto", borderTop: `1px solid ${C.line}` }}>
        <div style={{ paddingTop: 32 }}>
          <Eyebrow>Section 03</Eyebrow>
          <H2>How We Verify Accredited Status</H2>
          <P>VPI&rsquo;s verification process is led by Angela Salera, our Investor Relations Director, with legal review by VPI&rsquo;s outside securities counsel. The specific documentation required varies based on your investment vehicle.</P>
          <Callout>Whether you&rsquo;re investing as an individual, through an LLC or other entity, through a trust, or through a self-directed IRA, Angela walks you through the documentation specific to your vehicle.</Callout>
          <P>The standard verification document for individual investors is the Accredited Investor Questionnaire. Entity, trust, and IRA investors complete a tailored version of the questionnaire along with supporting documentation specific to their structure.</P>

          <H3>For Individual Investors</H3>
          <P>The Accredited Investor Questionnaire collects:</P>
          <Bullets items={[
            "Income information for the prior two tax years",
            "Net worth representation, with primary residence excluded",
            "Source-of-funds disclosure",
            "Investment experience and sophistication",
            "Affirmations regarding investor qualifications under Rule 501(a) of Regulation D",
            "Investor signature attesting under penalty of misrepresentation to the truth of all representations",
          ]} />
          <P>For most individual investors, the executed questionnaire is the only verification document required.</P>

          <H3>For LLC and Entity Investors</H3>
          <P>In addition to the questionnaire, entity investors typically provide:</P>
          <Bullets items={[
            "Entity operating agreement, certificate of formation, or equivalent organizational document",
            "Documentation of beneficial ownership",
            "If the entity meets accreditation as a $5M+ asset entity: entity financial statements",
            "If the entity relies on accredited member status: individual AIQ from each accredited owner",
          ]} />

          <H3>For Self-Directed IRA Investors</H3>
          <P>IRA-funded subscriptions require:</P>
          <Bullets items={[
            "Custodian information for the self-directed IRA (Equity Trust, IRA Innovations, Madison Trust, or similar)",
            "Account verification confirming the IRA itself meets accreditation criteria, OR individual AIQ confirming the account holder is independently accredited",
            "Subscription documents executed in the name of the IRA custodian for the benefit of the account holder",
          ]} />

          <H3>For Trust Investors</H3>
          <P>Trust subscriptions require:</P>
          <Bullets items={[
            "Trust agreement or relevant excerpts",
            "Documentation of trustee authority",
            "Trust accreditation under Rule 501(a)(7) (revocable trust where grantor is accredited) or Rule 501(a)(8) (trust with $5M+ assets directed by sophisticated person)",
            "Trustee signature on subscription documents",
          ]} />

          <H3>When Additional Documentation Is Requested</H3>
          <P>In certain circumstances, VPI&rsquo;s counsel may request a written letter from the investor&rsquo;s licensed Certified Public Accountant (CPA) confirming verification of accredited investor status. This may apply to higher-commitment subscriptions, complex investor structures, or cases where independent confirmation strengthens the verification record.</P>
          <P>When a CPA letter is requested, it must be issued by a CPA in good standing with appropriate state licensure, dated within the prior three months, specific to the investor and structure under review, and affirming that the CPA has reviewed appropriate documentation and concluded the investor meets the accredited investor standards under Rule 501(a) of Regulation D.</P>

          <H3>Electronic Signatures</H3>
          <P>All verification documentation is executed electronically through secure signature platforms. Investors do not need to print, sign, scan, or mail any documents. The full verification process is conducted digitally.</P>

          <H3>Counsel Review</H3>
          <P last>Once verification documentation is complete, VPI&rsquo;s outside counsel reviews for compliance with 506(c) verification standards. Documentation is retained on file in accordance with SEC recordkeeping requirements under Regulation D and applicable state securities laws.</P>
        </div>
      </section>

      {/* SECTION 4 */}
      <section style={{ padding: "32px 24px 24px", maxWidth: 800, margin: "0 auto", borderTop: `1px solid ${C.line}` }}>
        <div style={{ paddingTop: 32 }}>
          <Eyebrow>Section 04</Eyebrow>
          <H2>From Initial Interest to Subscription</H2>
          <div style={{ marginTop: 18, marginBottom: 12 }}>
            {[
              { n: "01", t: "Initial Interest", b: "You review project information on this website. Public information includes target returns, project structure, market thesis, and sponsor background." },
              { n: "02", t: "Verification Request", b: "You request investor materials through the project page or by contacting Angela directly. Tell Angela whether you're investing as an individual, through an entity, through a trust, or through a self-directed IRA. The verification documentation varies based on your vehicle." },
              { n: "03", t: "Documentation Sent", b: "Angela sends you the Accredited Investor Questionnaire and any supplemental documentation specific to your investment vehicle. Everything is delivered through secure electronic signature." },
              { n: "04", t: "Documentation Completion", b: "You complete and electronically sign the questionnaire and any vehicle-specific documents. Angela is available throughout this step to answer questions, walk through the documents, and explain anything that's unclear." },
              { n: "05", t: "Counsel Review", b: "VPI's outside counsel reviews the verification documentation. This typically takes 3–7 business days. During this period, no offering documents are shared." },
              { n: "06", t: "Verification Confirmed", b: "Once counsel confirms verification, Angela provides access to a secure investor data room containing the Private Placement Memorandum, subscription agreement, project financial model, and supporting due diligence materials." },
              { n: "07", t: "Investor Discussion", b: "Angela schedules a call with a principal at VPI to walk you through the offering, answer questions, and discuss structure. There is no obligation to subscribe." },
              { n: "08", t: "Subscription", b: "If you elect to subscribe, you complete the subscription documents electronically and wire funds per closing instructions. For IRA subscriptions, Angela coordinates with your IRA custodian to ensure proper execution and funding. VPI's outside counsel maintains all verification and subscription documentation on file in accordance with SEC recordkeeping requirements." },
            ].map((s) => (
              <div key={s.n} style={{ background: "#fff", border: `1px solid ${C.line}`, borderRadius: 6, padding: "14px 18px 16px", marginBottom: 10, display: "grid", gridTemplateColumns: "44px 1fr", gap: 14 }}>
                <div style={{ fontFamily: F.mono, fontSize: 16, color: C.gold, fontWeight: 600, paddingTop: 2 }}>{s.n}</div>
                <div>
                  <div style={{ fontFamily: F.display, fontSize: 17, fontWeight: 600, color: C.navy, marginBottom: 6, lineHeight: 1.3 }}>Step {parseInt(s.n)} &mdash; {s.t}</div>
                  <p style={{ fontSize: 14, color: C.body, lineHeight: 1.7 }}>{s.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section style={{ padding: "32px 24px 24px", maxWidth: 800, margin: "0 auto", borderTop: `1px solid ${C.line}` }}>
        <div style={{ paddingTop: 32 }}>
          <Eyebrow>Section 05</Eyebrow>
          <H2>How Your Verification Data Is Stored</H2>
          <P>VPI takes investor data security seriously.</P>
          <Bullets items={[
            "Verification documentation is stored in encrypted, access-controlled systems.",
            "Access is limited to VPI principals and authorized compliance personnel.",
            "Documentation is retained for the duration required by SEC recordkeeping rules (currently five years from the date of last subscription).",
            "VPI does not sell, share, or repurpose investor verification data for marketing or any purpose unrelated to compliance with securities exemptions.",
            "Investors may request deletion of their verification data following the expiration of the regulatory retention period.",
          ]} />
          <p style={{ fontSize: 13.5, color: C.muted, fontStyle: "italic", lineHeight: 1.7 }}>VPI&rsquo;s full privacy practices are detailed in our Privacy Policy.</p>
        </div>
      </section>

      {/* SECTION 6 */}
      <section style={{ padding: "32px 24px 24px", maxWidth: 800, margin: "0 auto", borderTop: `1px solid ${C.line}` }}>
        <div style={{ paddingTop: 32 }}>
          <Eyebrow>Section 06</Eyebrow>
          <H2>Important Risk Considerations</H2>
          <P>All real estate investments involve risk, including potential loss of principal. VPI&rsquo;s offerings carry the following general risk categories that prospective investors should consider:</P>
          <H4>Real Estate Risk</H4>
          <P>Property values fluctuate based on local market conditions, regional economic trends, interest rates, demographic shifts, environmental factors, and zoning changes. There is no guarantee a property will appreciate or that rental cash flow will reach projections.</P>
          <H4>Construction Risk</H4>
          <P>Properties under construction face risks including cost overruns, delivery delays, contractor performance, weather, supply chain disruption, and permitting changes.</P>
          <H4>Liquidity Risk</H4>
          <P>Private real estate investments are illiquid. Investors typically cannot withdraw capital before the planned hold period concludes. Secondary market sales are limited.</P>
          <H4>Concentration Risk</H4>
          <P>Each offering is typically concentrated in a single property or small portfolio of properties. Investors should not commit capital to a single offering that they cannot afford to have illiquid for the full hold period.</P>
          <H4>Regulatory Risk</H4>
          <P>Changes in tax law, zoning, building code, condominium regulation, environmental regulation, or insurance market structure may affect property economics and projected returns.</P>
          <H4>Forward-Looking Statements</H4>
          <P>Target IRR, equity multiples, hold periods, and other forward-looking projections in our marketing materials reflect our underwriting assumptions at the time of offering. Actual results may differ materially. Past performance of VPI&rsquo;s prior offerings does not guarantee future results.</P>
          <p style={{ fontSize: 14, color: C.muted, fontStyle: "italic", lineHeight: 1.75, marginTop: 16 }}>Prospective investors should consult their own legal, tax, and financial advisors before making any investment decision.</p>
        </div>
      </section>

      {/* SECTION 7 */}
      <section style={{ padding: "32px 24px 64px", maxWidth: 800, margin: "0 auto", borderTop: `1px solid ${C.line}` }}>
        <div style={{ paddingTop: 32 }}>
          <Eyebrow>Section 07</Eyebrow>
          <H2>Questions About Compliance or the Verification Process</H2>
          <P>For questions specific to verification, the subscription process, or your investment vehicle:</P>
          <div style={{ background: "#fff", border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.gold}`, borderRadius: 8, padding: "20px 24px 22px", marginTop: 16, marginBottom: 22 }}>
            <div style={{ fontFamily: F.label, fontSize: 9.5, letterSpacing: 2.5, color: C.gold, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>Investor Relations Director</div>
            <div style={{ fontFamily: F.display, fontSize: 22, color: C.navy, fontWeight: 600, marginBottom: 6 }}>Angela Salera</div>
            <div style={{ display: "grid", gap: 6, fontSize: 14, color: C.body, fontFamily: F.body }}>
              <div><strong style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: C.gold, fontWeight: 600, marginRight: 8 }}>Email</strong><a href="mailto:angela@vpiflorida.com" style={{ color: C.navy, fontFamily: F.mono, fontSize: 13, textDecoration: "none", fontWeight: 500 }}>angela@vpiflorida.com</a></div>
              <div><strong style={{ fontFamily: F.label, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: C.gold, fontWeight: 600, marginRight: 8 }}>Mail</strong>Vantage Point Investments LLC, Cape Coral, Florida</div>
            </div>
          </div>
          <P last>For questions about a specific offering, request investor materials through the project page on vpiflorida.com. For legal or compliance questions specifically, our outside securities counsel can be reached through Angela.</P>
        </div>
      </section>
    </>
  );
}

// =============================================================
// 404
// =============================================================
function NotFound() {
  return (
    <section style={{ padding: "120px 24px", textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
      <Eyebrow>Page not found</Eyebrow>
      <H1>This page doesn&rsquo;t exist</H1>
      <Lede>The page you were looking for has moved or never existed.</Lede>
      <Link to="/" style={{ background: C.gold, color: C.navy, padding: "12px 22px", borderRadius: 4, textDecoration: "none", fontFamily: F.label, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, display: "inline-block", marginTop: 18 }}>Back to home</Link>
    </section>
  );
}

// =============================================================
// APP
// =============================================================
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
