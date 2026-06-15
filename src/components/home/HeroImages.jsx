import styles from "@/styles/heroImages.module.css";

export default function HeroImages() {
  return (
    <div className={styles.wrapper}>
      
      {/* Main Image */}
      <div className={styles.imageBox}>
        <img
          src="/images/nntechlogo.jpeg"
          alt="Hero"
          className={styles.image}
        />
      </div>

      {/* Floating badges */}
      <div className={`${styles.badge} ${styles.badge1}`}>
        💻 Gaming Setup
      </div>

      <div className={`${styles.badge} ${styles.badge2}`}>
        ⚡ High Performance
      </div>

    </div>
  );
}