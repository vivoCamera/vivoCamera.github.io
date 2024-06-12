import styles from '@/styles/Team.module.css';
import Card from '@/components/TeamCard'


export default function Team(props:any) {
    return (
        <>
            <div className={styles.container}>
                <Card img='/chenjinwei.png' name='JinWei Chen' href=''/>
                <Card img='/honggu.jpg' name='Hong Gu' href=''/>
                <Card img='/libo.png' name='Bo Li' href='https://scholar.google.com/citations?user=NVzQ87sAAAAJ&hl=zh-CN&oi=ao'/>
                <Card img='/zhanghao.png' name='Hao Zhang' href=''/>
                <Card img='/jiangpengtao.jpg' name='Peng-Tao Jiang' href='https://pengtaojiang.github.io/'/>
            </div>
        </>
    );
}
