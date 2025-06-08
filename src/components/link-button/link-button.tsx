import styles from "./link-button.module.scss"
import { Link, LinkProps } from 'react-router';

interface Props extends LinkProps {
  styleType?: 'primary' | 'secondary' | 'transparent' | 'transparent-white';
  size?: 'small' | 'medium' | 'large';
  radius?: 'round' | 'normal';
}


function LinkButton(props: Props) {
  return (
	<Link {...props}  className={`${styles.link} ${styles[props.styleType ?? 'primary']} ${styles[props.size ?? 'medium']} ${styles[props.radius ?? 'normal']} ${props.className} `}></Link>
  );
}

export default LinkButton;