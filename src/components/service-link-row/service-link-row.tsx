import { Link } from 'react-router';
import styles from "./service-link-row.module.scss";

type Props = {
  name: string,
  to?: string,
}

function ServiceLinkRow({ name}: Props) {
  return (
	<div className={styles.row} >
	  <li>
          <div className={styles.inside_wrapper}>
              <h3>{name}</h3>
              <img src="/src/assets/arrow-green.svg"/>
          </div>
      </li>
	</div>
  );
}

export default ServiceLinkRow;