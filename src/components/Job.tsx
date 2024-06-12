import styles from '@/styles/Content.module.css';

export default function JobCard(props: any) {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.content}>Our group focuses on several topics:</p>
                <p className={styles.secondContent}>&bull; &nbsp; low-level visions: image restoration/HDR/Tone.</p>
                <p className={styles.secondContent}>&bull; &nbsp; multi-modal large language models.</p>
                <p className={styles.secondContent}>&bull; &nbsp; multi-task learning/segmentaiton/depth.</p>
                <p className={styles.content}>If you are interest in our group, please send email to us (libra@vivo.com).</p>
            </div>
        </>
    );
}
