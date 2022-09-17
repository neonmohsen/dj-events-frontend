// import FaExclamationTriangle from "react-icons";
import Link from "next/link";
import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { BsExclamationTriangle } from "react-icons/bs";

export default function NotFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <BsExclamationTriangle />
          404
        </h1>
        <h4>Page not found</h4>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </Layout>
  );
}
