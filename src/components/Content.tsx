import styles from '@/styles/Content.module.css';

export default function ContentCard(props: any) {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.content}>2024/5/3: One paper has been accepted at ICML24.</p>
                <p className={styles.content}>2024/2/26: Four papers have been accepted at CVPR24.</p>
            </div>
        </>
    );
}
