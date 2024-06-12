import styles from '@/styles/Project.module.css';


export default function PorjectCard(props:any) {
    return (
        <>
            <div onClick={() => { window.location.href = props.href; }} className={styles.projectContainer}>
                <div className={styles.projectTextContainer}>
                    <p className={styles.projectTextTitle}>{props.title}</p>
                    <p className={styles.projectText}>{props.text}</p>
                </div>
                <img className={styles.projectImage} src={props.image} alt="asam" />
            </div>
        </>
    );
}
