import styles from "./styles.module.css";

type GenericHTMLProps = {
  children: React.ReactNode;
};

export function GenericHtml({children}: GenericHTMLProps) {
  return <div className={styles.genericHTML}>
    {children}
  </div> ;
}