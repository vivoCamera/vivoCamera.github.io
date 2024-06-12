import styles from '@/styles/Team.module.css';

export default function Team(props: any) {
    return (
        <>
            <div className={styles.expertCard}>
                <img src={props.img} alt={props.name} width={150} height={150}/>
                <p onClick={() => { window.location.href = props.href; }} className={styles.name}>{props.name}</p>
            </div>
        </>
    );
}