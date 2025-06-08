import styles from "./service-row.module.scss";

type Props = {
    cost: number;
    name: string;
}
function ServiceRow({name, cost}: Props) {
    return (
        <div className={styles.row}>
            <h3>{name}</h3>
            <h2>{cost}₽</h2>
        </div>
    );
}

export default ServiceRow;