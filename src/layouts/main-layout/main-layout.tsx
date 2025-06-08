import { ReactNode } from 'react';
import Header from '../../blocks/header/header.tsx';
import Footer from '../../blocks/footer/footer.tsx';
import styles from './main-layout.module.scss'

type Props = {
  children?: ReactNode;
}

function MainLayout({children}: Props) {
  return (
	<div className={styles.layout}>
	  <Header/>
	  {children}
	  <div className={styles.filler}/>
	  <Footer/>
	</div>
  );
}

export default MainLayout;