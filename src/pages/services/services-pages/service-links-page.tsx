import { ReactNode } from 'react';
import styles from './service-links-page.module.scss';

type Props = {
  children: ReactNode;
  header: string;
}
function ServiceLinksPage({header, children}: Props) {
  return (
	<div className={styles.page}>
	  <h1>{header}</h1>
	  <ol>
          {children}
      </ol>
	</div>
  );
}

export default ServiceLinksPage;