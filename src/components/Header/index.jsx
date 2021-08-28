/* eslint-disable @next/next/no-html-link-for-pages */
import classes from "src/components/Header/Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link href="/posts">
        <a className={classes.anchor}>Posts </a>
      </Link>
    </header>
  );
}
