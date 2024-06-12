import styles from '@/styles/Team.module.css';
import Card from '@/components/ExpertCard'


export default function Expert(props:any) {
    return (
        <>
            <div className={styles.container}>
                <Card img='/hawk.png' name='Guogang Wang' href=''/>
                <Card img='/huaqizhang.png' name='Huaqi Zhang' href=''/>
                <Card img='/qinliangtang.png' name='Qinliang Tang' href=''/>
            </div>
        </>
    );
}
