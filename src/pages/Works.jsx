import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeadBlock } from "../components/blocks/HeadBlock.jsx";
import { workDatas } from "../components/blocks/WorksData.js";
import { workDTPDatas } from "../components/blocks/WorksDTPData.js";
import { workOtherDatas } from "../components/blocks/WorksOtherData.js";

const Works = () => {
  // データを抽出して配列
  const webworkDatas = workDatas.filter((workData) => workData.web);
  const dtpworkDatas = workDTPDatas.filter((workDTPData) => workDTPData.dtp);
  const i1lustrationworkDatas = workDTPDatas.filter(
    (workDTPData) => workDTPData.illustration
  );
  const otherworkDatas = workOtherDatas.filter(
    (workOtherData) => workOtherData.other
  );
  // 3列ずつ出力
  const webworkDatasEl = chunkArray(webworkDatas, 3);
  const dtpworkDatasEl = chunkArray(dtpworkDatas, 3);
  const illustrationworkDatasEl = chunkArray(i1lustrationworkDatas, 3);
  const otherworkDatasEl = chunkArray(otherworkDatas, 3);

  return (
    <>
      <HeadBlock
        title="HIKARI SUKEDA PORTFOLIO -Works-"
        description="HIKARI SUKEDA ポートフォリオサイトのWorksページです。閲覧いただきありがとうございます。これまでの制作物をまとめました。"
        path="works"
        csspath="works"
        ogdescription="HIKARI SUKEDA ポートフォリオサイトのWorksページです。これまでの制作物をまとめました。"
      />
      <div className="sub-header-wrap">
        <Link to={"/"} className="sub-header">
          <p>HIKARI SUKEDA</p>
          <p className="under">PORTFOLIO</p>
        </Link>
      </div>
      <section className="works-link-list" id="works">
        <h1 className="main-ttl js-subttl-hidden">
          <span className="color">W</span>
          <span className="split-text-box">
            <span className="split-text-animation">ORKS</span>
          </span>
        </h1>
        <div className="works-list-wrap js-cursor-area">
          <h3 className="js-active-target">Web Design/Coding</h3>
          <div id="js-cursor" />
          {webworkDatasEl.map((chunk, index) => (
            <ul key={index} className="works-list">
              {chunk.map((workData) => (
                <li key={workData.id} className="works-list__sec">
                  <Link
                    to={`/worksdate/${workData.slug}`}
                    className="works-list__sec__link"
                  >
                    <figure className="js-cursor-target">
                      <picture>
                        <source srcSet="" />
                        <img
                          decoding="async"
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
          ))}
        </div>
        <div className="works-list-wrap js-cursor-area">
          <h3 className="js-active-target">Graphic Design</h3>
          {dtpworkDatasEl.map((chunk, index) => (
            <ul key={index} className="works-list">
              {chunk.map((workDTPData) => (
                <li key={workDTPData.id} className="works-list__sec">
                  <Link
                    to={`/DTPData/${workDTPData.slug}`}
                    className="works-list__sec__link"
                  >
                    <figure className="js-cursor-target">
                      <picture>
                        <source srcSet="" />
                        <img
                          decoding="async"
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
          ))}
        </div>
        <div className="works-list-wrap js-cursor-area">
          <h3 className="js-active-target">Illustration/Other</h3>
          {illustrationworkDatasEl.map((chunk, index) => (
            <ul key={index} className="works-list">
              {chunk.map((workDTPData) => (
                <li key={workDTPData.id} className="works-list__sec">
                  <Link
                    to={`/DTPData/${workDTPData.slug}`}
                    className="works-list__sec__link"
                  >
                    <figure className="js-cursor-target">
                      <picture>
                        <source srcSet="" />
                        <img
                          decoding="async"
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
          ))}
          {otherworkDatasEl.map((chunk, index) => (
            <ul key={index} className="works-list">
              {chunk.map((workOtherData) => (
                <li key={workOtherData.id} className="works-list__sec">
                  <Link
                    to={`/OtherData/${workOtherData.slug}`}
                    className="works-list__sec__link"
                  >
                    <figure className="js-cursor-target">
                      <picture>
                        <source srcSet="" />
                        <img
                          decoding="async"
                          src={`../assets/img/works/${workOtherData.image}`}
                          alt={workOtherData.description}
                          width={workOtherData.width}
                          height={workOtherData.height}
                        />
                      </picture>
                      <figcaption>
                        <span>{workOtherData.type}</span>
                        <br />
                        {workOtherData.name}
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </>
  );
};

function chunkArray(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
}

export default Works;
