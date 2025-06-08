import { ReactNode } from 'react';
import styles from './block-layout.module.scss'

type Props = {
  children?: ReactNode;
  className?: string;
}
function BlockLayout({children, className}: Props) {
  return (
	<div className={`${styles.block} ${className ?? ''}`}>{children}</div>
  );
}

export default BlockLayout;