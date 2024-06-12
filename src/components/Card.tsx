import styles from '@/styles/Collaboration.module.css';

export default function Card(props: any) {
    return (
        <>
            <div onClick={() => { window.location.href = props.href; }} className={styles.card}>
                <img className={styles.img} src={props.img} alt={props.img} />
                <p className={styles.text}>{props.text}</p>
            </div>
        </>
    );
}
