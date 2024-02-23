import React from "react";
import { Link } from "react-router-dom";
import { workDatas } from "./WorksData.js";
import { workDTPDatas } from "./WorksDTPData.js";

/**
 * 制作物リンクリスト
 */
export function WorksList() {
  // データを抽出して配列
  const webworkDatas = workDatas.filter((workData) => workData.weblist);
  const dtpworkDatas = workDTPDatas.filter(
    (workDTPData) => workDTPData.dtplist
  );
  return (
    <>
      <div className="works-list-wrap js-cursor-area">
        <h3 className="js-active-target">Web Design/Coding</h3>
        <div id="js-cursor" />
        <ul className="works-list">
          {webworkDatas.map((workData) => (
            <li key={workData.id} className="works-list__sec">
              <Link
                to={`/worksdate/${workData.slug}`}
                className="works-list__sec__link"
              >
                <figure className="js-cursor-target">
                  <picture>
                    <source srcSet="" />
                    <img
                      loading="lazy"
                      src={`../assets/img/works/${workData.image}`}
                      alt={workData.description}
                      width={workData.width}
                      height={workData.height}
                    />
                  </picture>
                  <figcaption>
                    <span>{workData.type}</span>
                    <br />
                    {workData.name}
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="works-list-wrap js-cursor-area">
        <h3 className="js-active-target">Graphic Design</h3>
        <ul className="works-list">
          {dtpworkDatas.map((workDTPData) => (
            <li key={workDTPData.id} className="works-list__sec">
              <Link
                to={`/DTPData/${workDTPData.slug}`}
                className="works-list__sec__link"
              >
                <figure className="js-cursor-target">
                  <picture>
                    <source srcSet="" />
                    <img
                      loading="lazy"
                      src={`../assets/img/works/${workDTPData.image}`}
                      alt={workDTPData.description}
                      width={workDTPData.width}
                      height={workDTPData.height}
                    />
                  </picture>
                  <figcaption>
                    <span>{workDTPData.type}</span>
                    <br />
                    {workDTPData.name}
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/**
 * コンタクト
 */
export function Contact() {
  return (
    <>
      <section className="contact">
        <h2 className="main-ttl js-subttl-hidden">
          <span className="color">C</span>
          <span className="split-text-box">
            <span className="split-text-animation">ONTACT</span>
          </span>
        </h2>
        <div className="contact__mail">
          <div className="contact__mail__link js-active-target">
            <img
              decoding="async"
              src="../assets/img/main/mail-icon-80×62.svg"
              alt="メール アイコン"
              width="80px"
              height="62px"
            />
            <a href="mailto:to.sora.0831@gmail.com">to.sora.0831@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * フッター
 */
export function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer__top">
            <a href="#page-top" className="footer__top__link">
              <span>TOP</span>
            </a>
          </div>
          <p className="footer__copyright">
            All Rights Reserved 2024 ©︎ Hikari Sukeda
          </p>
        </div>
      </footer>
    </>
  );
}
