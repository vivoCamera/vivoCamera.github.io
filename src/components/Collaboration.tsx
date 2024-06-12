import styles from '@/styles/Collaboration.module.css';
import Card from '@/components/Card'

export default function Collaboration(props: any) {
    return (
        <>
            <div className={styles.container}>
                <Card img='/beida.png' text='BEIJING UNIVERSITY' href ='https://www.pku.edu.cn/'/>
                <Card img='/zheda.png' text='ZHEJIANG UNIVERSITY' href='https://www.zju.edu.cn/'/>
                <Card img='/hust.png' text='HUST' href='https://www.hust.edu.cn/'/>
                <Card img='/nankai.png' text='NANKAI UNIVERSITY' href='https://www.nankai.edu.cn/'/>
            </div>
        </>
    );
}
