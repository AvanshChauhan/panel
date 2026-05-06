import React from 'react';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.topNav}>
        <div className={styles.navLeft}>
          <div className={styles.logoBlock}></div>
          <span>RUDRANEX admin</span>
        </div>

        <div className={styles.navCenter}>
          <div className={`${styles.navItem} ${styles.active}`}>
            DASHBOARD
          </div>
          <Link href="/dashboard/logs" className={styles.navItem}>
            TABLE LOGS
          </Link>
        </div>

        <div className={styles.navRight}>
          <button className={styles.iconBtn} aria-label="Refresh">R</button>
          <button className={styles.iconBtn} aria-label="Theme">T</button>
          <button className={`${styles.iconBtn} ${styles.primary}`} aria-label="Continue">GO</button>
        </div>
      </div>

      <div className={styles.dashboardContainer}>
      
      {/* Left Sidebar */}
      <div className={`${styles.card} ${styles.sidebar}`}>
        <div className={styles.sidebarHeader}>
          <span>SYSTEM USERS</span>
          <div className={styles.statusDot}></div>
        </div>
        
        <div className={styles.searchInput}>
          <input type="text" placeholder="SEARCH ID / NAME..." />
        </div>
        
        <div className={styles.userList}>
          
          <div className={`${styles.userItem} ${styles.activeUser}`}>
            <div className={styles.userAvatar}>T1</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>test1</span>
              <span className={styles.userRole}>FREE TRIAL</span>
            </div>
          </div>
          
          <div className={styles.userItem}>
            <div className={styles.userAvatar}>SO</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>some</span>
              <span className={styles.userRole}>FREE TRIAL</span>
            </div>
          </div>
          
          <div className={styles.userItem}>
            <div className={styles.userAvatar}>XY</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>XYZ</span>
              <span className={styles.userRole}>FREE TRIAL</span>
            </div>
          </div>
          
          <div className={styles.userItem}>
            <div className={styles.userAvatar}>DJ</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>dj</span>
              <span className={styles.userRole}>AGENCIES / HEAVY DUTY</span>
            </div>
          </div>
          
          <div className={styles.userItem}>
            <div className={styles.userAvatar}>NW</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>new</span>
              <span className={styles.userRole}>FREE TRIAL</span>
            </div>
          </div>
          
          <div className={styles.userItem}>
            <div className={styles.userAvatar}>NY</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>naya</span>
              <span className={styles.userRole}>FREE TRIAL</span>
            </div>
          </div>
          
          <div className={styles.userItem}>
            <div className={styles.userAvatar}>DV</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>dev</span>
              <span className={styles.userRole}>FREE TRIAL</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        
        {/* Profile Card */}
        <div className={`${styles.card} ${styles.profileCard}`}>
          <div className={styles.profileLeft}>
            <div className={styles.largeAvatar}>T1</div>
            <div className={styles.profileDetails}>
              <div className={styles.profileNameRow}>
                <span className={styles.profileName}>test1</span>
                <span className={styles.activeBadge}>ACTIVE</span>
              </div>
              <div className={styles.profileEmail}>
                JUSTKAYBUILD@GMAIL.COM
              </div>
              <div className={styles.profileUuid}>
                UUID: 7ghjhkjjhjh
              </div>
            </div>
          </div>
          <div className={styles.profileActions}>
            <Link href="/dashboard/logs" style={{textDecoration: 'none'}}>
              <button className={styles.btnPrimary}>
                VIEW TABLE LOGS
              </button>
            </Link>
            <button className={styles.btnSecondary}>
              RESET ACCOUNT
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className={styles.metricsGrid}>
          
          <div className={`${styles.card} ${styles.metricCard}`}>
            <div className={styles.metricHeader}>SYSTEM LATENCY</div>
            <div className={styles.metricValue}>
              24 <span className={styles.metricSubValue}>ms</span>
            </div>
            <div className={`${styles.metricLine} ${styles.lineBlue}`}></div>
          </div>
          
          <div className={`${styles.card} ${styles.metricCard}`}>
            <div className={styles.metricHeader}>TOTAL PERSONAS</div>
            <div className={styles.metricValue}>
              0 <span className={styles.metricSubValue}>/ 10</span>
            </div>
            <div className={`${styles.metricLine} ${styles.lineYellow}`}></div>
          </div>
          
          <div className={`${styles.card} ${styles.metricCard}`}>
            <div className={styles.metricHeader}>IMAGE GENERATION</div>
            <div className={styles.metricValue}>
              0 <span className={styles.metricSubValue}>/ 100</span>
            </div>
            <div className={`${styles.metricLine} ${styles.linePurple}`}></div>
          </div>
          
        </div>

        {/* Bottom Grid */}
        <div className={styles.bottomGrid}>
          
          <div className={`${styles.card} ${styles.resourceCard}`}>
            <div className={styles.cardTitleRow}>
              <div>
                <div className={styles.cardTitle}>RESOURCE UTILIZATION</div>
                <div className={styles.cardSubtitle}>LIVE SPECTRAL ANALYSIS OF USER ASSETS</div>
              </div>
              <div className={styles.statusLabel}>
                <div className={styles.statusDot}></div>
                HEALTHY
              </div>
            </div>
            
            <div className={styles.gaugesRow}>
              <div className={styles.gaugeWrapper}>
                <div className={styles.circularGauge}>
                  <div className={styles.gaugeValue}>0%</div>
                  <div className={styles.gaugeLabel}>USAGE</div>
                </div>
              </div>
              <div className={styles.gaugeWrapper}>
                <div className={styles.circularGauge}>
                  <div className={styles.gaugeValue}>0%</div>
                  <div className={styles.gaugeLabel}>USAGE</div>
                </div>
              </div>
              <div className={styles.gaugeWrapper}>
                <div className={styles.circularGauge}>
                  <div className={styles.gaugeValue}>0%</div>
                  <div className={styles.gaugeLabel}>USAGE</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitleRow} style={{marginBottom: '16px'}}>
               <div className={styles.cardTitle} style={{fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                 USER EFFICIENCY
               </div>
            </div>
            <div className={styles.efficiencyText}>
              CURRENT USER IS OPERATING AT 99.9% HEADROOM. LATENCY IS OPTIMAL FOR REGION.
            </div>
          </div>
          
        </div>

      </div>
    </div>
    </div>
  );
}
