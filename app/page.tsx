import WelcomeBanner from '@/components/modules/02-Welcome-Banner/WelcomeBanner';
import Article from '@/components/modules/03-Article/Article';
import Experience from '@/components/modules/04-Experience/Experience';
import CurriculumVitae from '@/components/modules/05-Curriculum-Vitae/CurriculumVitae';
import Portfolio from '@/components/modules/06-Portfolio/Portfolio';

import styles from './styles.module.css';

export default function Home() {
  return (
    <main className='page-structure'>
      <WelcomeBanner heading='' paragraph=''/>
      <section className={styles.article_section} id='articles-section'>
        <Article />
      </section>
      <section className={styles.experience_section} id='experience-section'>
        <Experience />
      </section>
      <section className={styles.curriculum_vitae_section} id='curriculum-vitae-section'>
        <CurriculumVitae heading='Curriculum Vitae' paragraph='Unlock my professional journey. Download my CV below for an inside look.' filename='/Curriculum Vitae - Redacted.pdf'/>
      </section>
      <section className={styles.portfolio_section} id='portfolio-section'>
        <Portfolio />
      </section>
    </main>
  )
}
