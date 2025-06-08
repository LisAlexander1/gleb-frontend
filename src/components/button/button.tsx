import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from "./button.module.scss"

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,  HTMLButtonElement> {
  styleType?: 'primary' | 'secondary' | 'transparent' | 'transparent-white';
  size?: 'small' | 'medium' | 'large';
  radius?: 'round' | 'normal';
}


function Button(props: Props) {
  return (
	<button {...props}  className={`${styles[props.styleType ?? 'primary']} ${styles[props.size ?? 'medium']} ${styles[props.radius ?? 'normal']} ${props.className} `}></button>
  );
}

export default Button;