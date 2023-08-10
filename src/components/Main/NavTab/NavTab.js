import './NavTab.css';

function NavTab() {
  return (
    <section className="nav_tab">

        <ul className="nav_tab__list">
          <li>
            <a
            href="#project"
            className="nav_tab__link">
              О проекте
            </a>
          </li>
          <li>
            <a
            href="/#techs"
            className="nav_tab__link">
              Технологии
            </a>
          </li>
          <li>
            <a
            href="/#student"
            className="nav_tab__link">
              Студент
            </a>
          </li>
        </ul>
      </section>
  )
}

export default NavTab;
