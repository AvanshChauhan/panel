import type { CSSProperties } from "react";
import styles from "./dashboard.module.css";

const navItems = [
  { label: "Dashboard", icon: "D", active: true },
  { label: "Employees", icon: "E" },
  { label: "Organizations", icon: "O" },
  { label: "Analytics", icon: "A" },
  { label: "Activity", icon: "L" },
  { label: "Settings", icon: "S" },
];

const metrics = [
  { label: "Employee Activity", value: "86%", change: "+12.8%", progress: 86 },
  { label: "Workforce Score", value: "94", change: "+4.2 pts", progress: 94 },
  { label: "Productivity Index", value: "1.42x", change: "+18.6%", progress: 78 },
  { label: "Retention Rate", value: "97%", change: "+2.1%", progress: 97 },
  { label: "Active Ratio", value: "2.9k", change: "91% live", progress: 91 },
  { label: "Org Growth", value: "$42.8M", change: "+23.4%", progress: 72 },
];

const distribution = [
  { team: "Product", count: 428, width: "82%" },
  { team: "Engineering", count: 612, width: "94%" },
  { team: "Revenue", count: 376, width: "68%" },
  { team: "People", count: 184, width: "42%" },
];

const activities = [
  "Global onboarding workflow reached 99.4% completion",
  "AI detected elevated attrition risk in EMEA operations",
  "Workspace access policy synced across 18 organizations",
  "Executive hiring plan approved for Q3 expansion",
];

const days = ["M", "T", "W", "T", "F", "S", "S"];
const calendarDays = [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function PremiumDashboard() {
  return (
    <main className={styles.shell}>
      <div className={styles.ambientOne} />
      <div className={styles.ambientTwo} />

      <aside className={styles.sidebar} aria-label="Primary navigation">
        <div className={styles.brand}>
          <div className={styles.logoMark}>N</div>
          <div>
            <div className={styles.brandName}>NOVA OPS</div>
            <div className={styles.brandMeta}>Enterprise AI</div>
          </div>
        </div>

        <nav className={styles.navList}>
          {navItems.map((item) => (
            <a
              className={`${styles.navItem} ${item.active ? styles.activeNav : ""}`}
              href={item.active ? "/dashboard" : "#"}
              key={item.label}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.sidebarPanel}>
          <div className={styles.sectionLabel}>AI Assistant</div>
          <div className={styles.assistantOrb}>
            <span />
          </div>
          <strong>Autopilot online</strong>
          <p>Monitoring workforce health, access drift, and org velocity.</p>
        </div>
      </aside>

      <section className={styles.workspace}>
        <header className={styles.header}>
          <div>
            <div className={styles.dateLine}>Wednesday, May 6, 2026</div>
            <h1>Good evening, Admin</h1>
          </div>

          <div className={styles.headerTools}>
            <label className={styles.search}>
              <span>Search</span>
              <input placeholder="Search employees, orgs, reports" />
            </label>
            <button className={styles.iconButton} aria-label="Notifications">
              <span className={styles.bellIcon} />
            </button>
            <div className={styles.profile}>
              <div className={styles.avatar}>V</div>
              <div>
                <strong>Admin</strong>
                <span>Owner</span>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.hero}>
          <div>
            <div className={styles.livePill}>
              <span />
              Live workforce intelligence
            </div>
            <h2>Executive organization command center</h2>
            <p>
              Real-time people analytics, productivity signals, retention
              forecasting, and enterprise workspace governance in one control
              surface.
            </p>
          </div>
          <div className={styles.heroStats}>
            <div>
              <span>Total workforce</span>
              <strong>3,284</strong>
            </div>
            <div>
              <span>Organizations</span>
              <strong>128</strong>
            </div>
            <div>
              <span>AI confidence</span>
              <strong>98.2%</strong>
            </div>
          </div>
        </section>

        <section className={styles.metricGrid} aria-label="Enterprise metrics">
          {metrics.map((metric) => (
            <article className={styles.metricCard} key={metric.label}>
              <div>
                <div className={styles.sectionLabel}>{metric.label}</div>
                <strong>{metric.value}</strong>
                <span>{metric.change}</span>
              </div>
              <div
                className={styles.progressRing}
                style={{ "--progress": `${metric.progress}%` } as CSSProperties}
              >
                <span>{metric.progress}</span>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.dashboardGrid}>
          <article className={`${styles.card} ${styles.lineChartCard}`}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.sectionLabel}>Monthly analytics</div>
                <h3>Workforce velocity</h3>
              </div>
              <span className={styles.delta}>+18.6%</span>
            </div>
            <div className={styles.lineChart}>
              <svg viewBox="0 0 620 240" role="img" aria-label="Smooth workforce velocity line graph">
                <defs>
                  <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#737373" />
                    <stop offset="52%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#9ee7ff" />
                  </linearGradient>
                  <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,.18)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 190 C90 162 116 170 164 126 C214 80 258 108 304 82 C362 49 402 82 458 54 C516 26 548 60 600 32"
                  fill="none"
                  stroke="url(#lineGlow)"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <path
                  d="M20 190 C90 162 116 170 164 126 C214 80 258 108 304 82 C362 49 402 82 458 54 C516 26 548 60 600 32 L600 230 L20 230 Z"
                  fill="url(#chartFill)"
                />
              </svg>
            </div>
          </article>

          <article className={`${styles.card} ${styles.aiCard}`}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.sectionLabel}>AI insights</div>
                <h3>Priority signals</h3>
              </div>
              <div className={styles.statusChip}>Live</div>
            </div>
            <p>
              Hiring velocity is outpacing onboarding capacity by 14%. Expand
              People Ops coverage in North America before May 20.
            </p>
            <button className={styles.primaryAction}>Generate action plan</button>
          </article>

          <article className={`${styles.card} ${styles.distributionCard}`}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.sectionLabel}>Team distribution</div>
                <h3>Headcount by function</h3>
              </div>
            </div>
            <div className={styles.distributionList}>
              {distribution.map((item) => (
                <div className={styles.distributionRow} key={item.team}>
                  <div>
                    <span>{item.team}</span>
                    <strong>{item.count}</strong>
                  </div>
                  <div className={styles.barTrack}>
                    <span style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={`${styles.card} ${styles.calendarCard}`}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.sectionLabel}>Calendar</div>
                <h3>May briefing</h3>
              </div>
            </div>
            <div className={styles.calendarWeek}>
              {days.map((day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              ))}
            </div>
            <div className={styles.calendarGrid}>
              {calendarDays.map((day) => (
                <span className={day === 6 ? styles.currentDay : ""} key={`${day}`}>
                  {day}
                </span>
              ))}
            </div>
          </article>

          <article className={`${styles.card} ${styles.activityCard}`}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.sectionLabel}>Real-time activity</div>
                <h3>Operations stream</h3>
              </div>
            </div>
            <div className={styles.activityList}>
              {activities.map((activity) => (
                <div className={styles.activityItem} key={activity}>
                  <span />
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </article>

          <article className={`${styles.card} ${styles.quickActions}`}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.sectionLabel}>Quick actions</div>
                <h3>Control panel</h3>
              </div>
            </div>
            <div className={styles.actionGrid}>
              <button>Invite employee</button>
              <button>Sync directory</button>
              <button>Run audit</button>
              <button>Export report</button>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
