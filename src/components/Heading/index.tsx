import styles from "./styles.module.css";

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  return (
    <>
      <h1 className={styles.heading}>{props.children}</h1>
    </>
  );
}
