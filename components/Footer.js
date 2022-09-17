import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events</p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </footer>
  );
}
