import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  placeholder: string;
  label?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  placeholder,
  label,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={styles.input}
        type="text"
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
