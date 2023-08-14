import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='aboutProject' id='project'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__underline'></div>

      <ul className='aboutProject__components'>
        <li className='aboutProject__component'>
          <h3 className='aboutProject__name'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='aboutProject__component'>
          <h3 className='aboutProject__name'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className='timeTracker'>
        <li className='timeTracker__component'>
          <div className='timeTracker__backend'>1 неделя</div>
          <p className='timeTracker__text'>Back-end</p>
        </li>
        <li className='timeTracker__component'>
          <div className='timeTracker__frontend'>4 недели</div>
          <p className='timeTracker__text'>Front-end</p>
        </li>
      </ul>
    </section>)
}

export default AboutProject;
