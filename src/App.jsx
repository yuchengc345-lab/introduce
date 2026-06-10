import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificates, pricingPlans, profile, services, stats, strengths, works } from "./profileData";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="section-header reveal-left">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function StatStrip() {
  return (
    <div className="stat-strip reveal-up" aria-label="服務特色">
      {stats.map((item) => (
        <div className="stat-item" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".hero-copy, .reveal-left, .reveal-right, .reveal-up, .ambient-grid", {
          clearProps: "all",
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".top-nav", { autoAlpha: 0, y: -18, duration: 0.7 })
        .from(".hero-copy .eyebrow", { autoAlpha: 0, y: 22, duration: 0.55 }, "-=0.25")
        .from("h1", { autoAlpha: 0, y: 46, scale: 0.96, duration: 0.9 }, "-=0.15")
        .from(".role-text", { autoAlpha: 0, x: -28, duration: 0.62 }, "-=0.35")
        .from(".hero-intro", { autoAlpha: 0, y: 26, duration: 0.65 }, "-=0.25")
        .from(".hero-actions a", { autoAlpha: 0, y: 18, duration: 0.48, stagger: 0.1 }, "-=0.2");

      gsap.to(".ambient-grid", {
        x: 34,
        y: -20,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".animated-section").forEach((section) => {
        const isSpecialReveal = (element) => element.closest(".work-row") || element.closest(".pricing-grid");
        const left = gsap.utils.toArray(section.querySelectorAll(".reveal-left")).filter((item) => !isSpecialReveal(item));
        const right = gsap.utils.toArray(section.querySelectorAll(".reveal-right")).filter((item) => !isSpecialReveal(item));
        const up = gsap.utils.toArray(section.querySelectorAll(".reveal-up")).filter((item) => !isSpecialReveal(item));

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 74%",
            end: "bottom 24%",
            toggleActions: "play none none reverse",
          },
        });

        if (left.length) {
          timeline.from(left, {
            autoAlpha: 0,
            x: -90,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
          });
        }

        if (right.length) {
          timeline.from(
            right,
            {
              autoAlpha: 0,
              x: 90,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
            },
            left.length ? "-=0.55" : 0,
          );
        }

        if (up.length) {
          timeline.from(
            up,
            {
              autoAlpha: 0,
              y: 42,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.08,
            },
            left.length || right.length ? "-=0.45" : 0,
          );
        }
      });

      gsap.utils.toArray(".work-row").forEach((row) => {
        const image = row.querySelector(".work-image");
        const media = row.querySelector(".work-image img, .work-image span");
        const copyItems = row.querySelectorAll(".work-copy > *");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
              end: "bottom 34%",
              toggleActions: "play none none reverse",
            },
          })
          .from(row, {
            autoAlpha: 0,
            y: 52,
            duration: 0.72,
            ease: "power3.out",
          })
          .from(
            image,
            {
              x: -44,
              scale: 0.94,
              duration: 0.86,
              ease: "power3.out",
            },
            "-=0.45",
          )
          .from(
            media,
            {
              scale: 1.12,
              autoAlpha: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.7",
          )
          .from(
            copyItems,
            {
              autoAlpha: 0,
              x: 36,
              duration: 0.48,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.45",
          );
      });

      const pricingCards = gsap.utils.toArray(".pricing-card");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 76%",
            end: "bottom 32%",
            toggleActions: "play none none reverse",
          },
        })
        .from(pricingCards, {
          autoAlpha: 0,
          y: 46,
          scale: 0.96,
          duration: 0.62,
          stagger: 0.09,
          ease: "power3.out",
        })
        .from(
          ".pricing-card strong",
          {
            autoAlpha: 0,
            y: 12,
            scale: 0.92,
            duration: 0.38,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.28",
        );
    },
    { scope: pageRef },
  );

  return (
    <main ref={pageRef} className="site-shell">
      <section className="hero-section">
        <div className="ambient-grid" aria-hidden="true" />
        <nav className="top-nav" aria-label="主要導覽">
          <span className="brand-mark">YC</span>
          <div>
            <a href="#services">服務</a>
            <a href="#pricing">方案</a>
            <a href="#works">成果</a>
            <a href="#certificates">證書</a>
            <a href="#contact">聯絡</a>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Professional Digital Services</span>
            <h1>{profile.name}</h1>
            <p className="role-text">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="primary-action" href={`mailto:${profile.contact.email}`}>
                預約諮詢
              </a>
              <a className="secondary-action" href="#services">
                查看服務
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="animated-section about-section" id="about">
        <div className="about-grid">
          <div className="profile-panel reveal-left">
            <img src={profile.portrait} alt={`${profile.name} 的生活照片`} />
          </div>
          <div className="about-copy reveal-right">
            <p>{profile.about}</p>
            <StatStrip />
          </div>
        </div>
      </section>

      <section className="animated-section strengths-section">
        <SectionHeader
          eyebrow="Strengths"
          title="核心特長"
          copy="用設計、技術與流程思維，讓網站不只是好看，也能支援真實業務。"
        />
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="feature-card reveal-up" key={item.title}>
              <span className="card-index">0{strengths.indexOf(item) + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="animated-section services-section" id="services">
        <SectionHeader
          eyebrow="Services"
          title="服務內容"
          copy="適合想建立專業形象、整理服務流程，或把數位工具導入日常工作的個人與團隊。"
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal-up" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="animated-section pricing-section" id="pricing">
        <SectionHeader
          eyebrow="Pricing"
          title="服務方案"
          copy="以起始價提供預算參考，讓合作前就能快速判斷適合的服務範圍。"
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article className="pricing-card reveal-up" key={plan.title}>
              <span className="eyebrow">{plan.fit}</span>
              <h3>{plan.title}</h3>
              <p>{plan.detail}</p>
              <strong>{plan.price}</strong>
            </article>
          ))}
        </div>
        <p className="pricing-note reveal-up">
          實際價格會依功能範圍、資料來源、是否需要部署、是否串接 API 調整。
        </p>
      </section>

      <section className="animated-section works-section" id="works">
        <SectionHeader
          eyebrow="Selected Work"
          title="代表成果"
          copy="先以可替換案例呈現，之後可以換成你的真實作品、照片、截圖與數據。"
        />
        <div className="work-list">
          {works.map((work, index) => (
            <article className={`work-row ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`} key={work.title}>
              <div className="work-image" aria-hidden="true">
                {work.image ? <img src={work.image} alt="" /> : <span>{work.type}</span>}
              </div>
              <div className="work-copy">
                <span className="eyebrow">{work.type}</span>
                <h3>{work.title}</h3>
                <p>{work.result}</p>
                {work.note ? <p className="work-note">{work.note}</p> : null}
                {work.url ? (
                  <a className="work-link" href={work.url} target="_blank" rel="noreferrer">
                    查看作品
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="animated-section certificate-section" id="certificates">
        <SectionHeader
          eyebrow="Certificate"
          title="證書"
          copy="以可驗證的學習紀錄補強專業可信度，讓客戶快速理解你的 AI 工具應用背景。"
        />
        <div className="certificate-layout">
          {certificates.map((certificate) => (
            <article className="certificate-card reveal-left" key={certificate.title}>
              <img src={certificate.image} alt={`${profile.name} 的證書`} />
            </article>
          ))}
          <div className="certificate-copy reveal-right">
            {certificates.map((certificate) => (
              <div className="certificate-detail" key={certificate.title}>
                <span className="eyebrow">{certificate.issuer}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.course}</p>
                <strong>{certificate.date}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animated-section contact-section" id="contact">
        <div className="contact-panel reveal-up">
          <span className="eyebrow">Contact</span>
          <h2>聯絡方式</h2>
          <p>如果你想建立專業網站、整理服務頁面，或把 AI 與自動化導入工作流程，可以先從一次諮詢開始。</p>
          <div className="contact-grid">
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <span>{profile.contact.line}</span>
            <span>{profile.contact.location}</span>
          </div>
          <a className="primary-action contact-action" href={`mailto:${profile.contact.email}`}>
            寄出合作需求
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
