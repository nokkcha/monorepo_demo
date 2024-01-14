"use client";
import styles from "./page.module.css";
import { sorting } from "utils";
import { createDeveloperLog } from "log";

export default function Page(): JSX.Element {
  // comments
  const arr = ["1", "4", "3"];
  const foo = "1";

  const result = createDeveloperLog(1, 3);
  console.log(result);

  return <main className={styles.main}>main block</main>;
}
