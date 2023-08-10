import React from 'react'
import './Portfolio.css'

import arrow from '../../../images/arrow.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__components'>

                <li className='portfolio__component'>
                    <a className='portfolio__link' href='https://github.com/Sib408/how-to-learn' target='_blank' rel='noreferrer'>
                        <img src={arrow} className='portfolio__arrow' alt='стрелка' />Статичный сайт</a></li>

                <li className='portfolio__component'>
                    <a className='portfolio__link' href='https://github.com/Sib408/russian-travel' target='_blank' rel='noreferrer'>
                        <img src={arrow} className='portfolio__arrow' alt='стрелка' />Адаптивный сайт</a></li>

                <li className='portfolio__component'>
                    <a className='portfolio__link' href='https://github.com/Sib408/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>
                        <img src={arrow} className='portfolio__arrow' alt='стрелка' />Одностраничное приложение</a></li>
            </ul>
        </section>
    )
}

export default Portfolio;
