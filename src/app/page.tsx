'use client';
import { useRef, useEffect } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const parent = parentRef.current as HTMLDivElement;
      const offsetTop = parent.offsetTop;
      const scrollSelection = scrollRef.current as HTMLDivElement;
      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
      scrollSelection.style.transform = `translate(${-percentage}vw, 0)`;
    });

    return () => {};
  }, []);

  return (
    <main>
      <section id="about">
        <div className={styles.about__container}>
          <h1>About</h1>
        </div>
      </section>
      <section id="team">
        <div className={styles.team__container}>
          <h1>Team</h1>
        </div>
      </section>
      <div id="projects" className={styles.sticky_parent} ref={parentRef}>
        <div className={styles.sticky} ref={stickyRef}>
          <div className={styles.scroll_section} ref={scrollRef}>
            <div className="project__container">
              <h1>Project1</h1>
            </div>

            <div className="project__container">
              <h1>Project2</h1>
            </div>

            <div className="project__container">
              <h1>Project3</h1>
            </div>
          </div>
        </div>
      </div>
      <section id="contact">
        <div className={styles.contact__container}>
          <h1>Contact</h1>
        </div>
      </section>
    </main>
  );
}
