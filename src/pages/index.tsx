"use client"
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCard from '@/components/Project'
import ContentCard from '@/components/Content';
import JobCard from '@/components/Job';
import Collaboration from '@/components/Collaboration';
import Team from '@/components/Team';
import Expert from '@/components/Expert';

export default function Home() {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image className={styles.logo} src="/vivo-logo.jpg" alt="logo" width={128} height={128} />
        <p className={styles.title}>vivo影像算法研究部</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.title2}>关于我们</p>
          <div className={styles.underline}></div>
          <p>
            vivo影像算法研究部是vivo公司影像领域旗下的一个部门，主要负责研发和优化vivo手机的影像算法及芯片化。 
            该部门的工作重点包括图像/视频处理、图像识别、图像/视频增强等方面的技术研究和开发。 
            vivo影像算法研究部 的团队成员大多具有计算机视觉、图像处理、人工智能等相关领域的专业背景，拥有丰富的研究和开发经验。 
            他们致力于不断提升vivo手机的摄影和拍摄功能，使用户能够拍摄出更加清晰、美观的照片和视频。 
            除了在手机摄影领域的研究外，vivo影像算法研究部也积极探索人脸识别、虚拟现实、增强现实等新兴技术领域的应用，努力为用户提供更加丰富和便捷的影像体验。
          </p>
          <Swiper
            className={styles.swiper}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide >
              <img className={styles.image} src="/us1.JPG" alt="us" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.image} src="/us2.JPG" alt="us" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.image} src="/us3.JPG" alt="us" />
            </SwiperSlide>
          </Swiper>
          <p className={styles.title2}>动态</p>
          <div className={styles.underline}></div>
          <ContentCard />
          <p className={styles.title2}>论文</p>
          <div className={styles.underline}></div>
          <ProjectCard
            href='https://asam2024.github.io/'
            title='[CVPR2024] Boosting Segment Anything Model with Adversarial Tuning'
            text='Bo Li, HaoKe Xiao, Lv Tang'
            image='/asam.png' />
          <ProjectCard
            href='https://github.com/zhuyr97/Reflection_RemoVal_CVPR2024'
            title='[CVPR2024] Revisiting Singlelmage Reflection Removal in the Wild'
            text='Yurui Zhu, Xueyang Fu, Peng-Tao Jiang, Hao Zhang, Qibin Sun, Jinwei Chen, Zheng-Jun Zha, Bo Li'
            image='/rrw.png' />
          <ProjectCard
            href='https://github.com/YuqiYang213/MLoRE'
            title='[CVPR2024] Multi-Task Dense Prediction via Mixture of Low-Rank Experts'
            text='Yuqi Yang, Peng-Tao Jiang, Qibin Hou, Hao Zhang, Jinwei Chen, Bo Li'
            image='/mlore.png' />
          <ProjectCard
            href='https://github.com/aim-uofa/DiverGen'
            title='[CVPR2024] DiverGen: Improving Instance Segmentation by Learning Wider Data Distribution with More Diverse Generative Data'
            text='Chengxiang Fan, Muzhi Zhu, Hao Chen, Yang Liu, Weijia Wu, Huaqi Zhang, Chunhua Shen'
            image='/divergen.png' />
          <ProjectCard
            href='https://arxiv.org/abs/2403.01666'
            title='[ICML2024] Improving Adversarial Energy-Based Model via Diffusion Process'
            text='Cong Geng, Tian Han, Peng-Tao Jiang, Hao Zhang, Jinwei Chen, Søren Hauberg, Bo Li'
            image='dp.png' />
          {/* <p className={styles.title2}>指导专家/sponsor</p>
          <div className={styles.underline}></div>
          <Expert/> */}
          <p className={styles.title2}>论文作者</p>
          <div className={styles.underline}></div>
          <Team />
          <p className={styles.title2}>招聘</p>
          <div className={styles.underline}></div>
          <JobCard />
          <p className={styles.title2}>合作</p>
          <div className={styles.underline}></div>
          <Collaboration />
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottom} onClick={() => { window.location.href = 'https://www.vivo.com/cn/'; }}>
            <img className={styles.bottomImg} src='/vivo-logo.jpg' alt='logo' />
            <p className={styles.bottomText}>vivo</p>
          </div>
        </div>
      </div>
    </>
  );
}
