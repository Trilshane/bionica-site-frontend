import { Link } from "react-scroll";

import ConsultationForm from "./ConsultationForm";
import FireIconOneLine from "./FireIconOneLine";

import styles from "../scss/AboutUs.module.scss";

import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";

import aboutIcon1 from "../images/about-icon-1.svg";
import aboutIcon2 from "../images/about-icon-2.svg";
import aboutIcon3 from "../images/about-icon-3.svg";
import aboutIcon4 from "../images/about-icon-4.svg";
import aboutIcon5 from "../images/about-icon-5.svg";
import aboutIcon6 from "../images/about-icon-6.svg";

const aboutElements = [
  {
    icon: aboutIcon1,
    head: "Огромный выбор",
    content: "20 типов. Сотни размеров.",
  },
  {
    icon: aboutIcon2,
    head: "100% безопасность.",
    content: "Толстый металл. Контроль качества.",
  },
  {
    icon: aboutIcon3,
    head: "Большое производство.",
    content: "Станки ЧПУ. 4 цеха на 1000 м2.",
  },
  {
    icon: aboutIcon4,
    head: "Возможность оплаты при получении в 236 городах Росcии",
    content: "",
  },
  {
    icon: aboutIcon5,
    head: "Вещь, которая не надоест",
    content: "Под Ваши размеры, Ваши цвета и Ваши задачи.",
  },
  {
    icon: aboutIcon6,
    head: "Продаем биокамины с 2013",
    content: "Работаем с физическими и юр.лицами",
  },
];

const AboutUs = () => {
  return (
    <div id="aboutUs" className={styles.container}>
      <div className={styles.marginContainer}>
        <div className={styles.headMenu}>
          <Link
            to="headPage"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.headMenuElement}
          >
            <img
              className={styles.icon}
              loading="lazy"
              src={homeIcon}
              alt="homeIcon"
            />
          </Link>
          <Link
            to="product"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            Наша продукция
          </Link>
          <img src={menuLine} loading="lazy" alt="menulaine" />
          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            О нас
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.firstTitle}>
            О <span className={styles.bold}>нас</span>
          </h3>
          <h3 className={styles.secondTitle}>
            <span className={styles.bold}>421 человек за 2023 год</span> выбрали
            биокамины Bionika
          </h3>
          <FireIconOneLine />
          <div className={styles.aboutUsContent}>
            {aboutElements.map((aboutElement) => (
              <div key={aboutElement.head} className={styles.aboutUsElement}>
                <img
                  loading="lazy"
                  className={styles.icon}
                  src={aboutElement.icon}
                  alt="icon"
                />
                <div className={styles.aboutUsElementContent}>
                  <h3 className={styles.head}>{aboutElement.head}</h3>
                  <p className={styles.content}>{aboutElement.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.consulation}>
            <p>Получите бесплатную консультацию от наших специалистов.</p>
            <p>
              Технолог, менеджер, руководитель, мастер, логист, монтажник,
              дизайнер
            </p>
          </div>
        </div>
        <ConsultationForm content={"Получить бесплатную консультацию"} />
      </div>
    </div>
  );
};
export default AboutUs;
