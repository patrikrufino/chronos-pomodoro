import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon?: React.ReactNode;
  color?: "primary" | "success" | "error";
} & React.ComponentProps<"button">;

export function DefaultButton({ icon, color = "primary", ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
