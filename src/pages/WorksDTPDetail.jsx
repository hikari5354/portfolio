import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HeadBlock } from "../components/blocks/HeadBlock.jsx";
import {
  workDTPDatas,
  mainImageDate,
  popUpImageDate,
} from "../components/blocks/WorksDTPData.js";
import { TypeText } from "../components/blocks/TypeText.jsx";
import { WorksList } from "../components/blocks/Components.jsx";

const WorksDTPDetail = () => {
  // slugに対応する出力workDatasをフィルタリング
  const { slug } = useParams();
  const workDTPData = workDTPDatas.find((p) => p.slug === slug);
  // slugに対応するimagesListをフィルタリング
  const filteredImages = mainImageDate.find(
    (workDTPData) => workDTPData.slug === slug
  )?.imagesList;
  const filteredPopUpImages = popUpImageDate.find(
    (workDTPData) => workDTPData.slug === slug
  )?.imagesList;

  useEffect(() => {
    const modalWrapper = document.querySelector(".modal-wrapper");
    const images = document.querySelectorAll(".popUp");
    const modalImage = document.querySelector(".modal-image");

    images.forEach(function (image) {
      image.addEventListener("click", function () {
        modalWrapper.classList.add("show");
        modalImage.classList.add("show");

        var imageSrc = image.getAttribute("data-src");
        modalImage.src = imageSrc;
      });
    });

    modalWrapper.addEventListener("click", function () {
      if (this.classList.contains("show")) {
        this.classList.remove("show");
        modalImage.classList.remove("show");
      }
    });
    return () => {};
  }, []);

  if (!workDTPData) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <HeadBlock
        title="HIKARI SUKEDA PORTFOLIO -WorksDetail-"
        description="HIKARI SUKEDA ポートフォリオサイトの制作物詳細ページです。閲覧いただきありがとうございます。"
        path="{`/worksdate/${workDTPData.slug}`}"
        csspath="works"
        ogdescription="HIKARI SUKEDA ポートフォリオサイトの制作物詳細ページです。"
      />
      <div className="sub-header-wrap">
        <Link to={"/"} className="sub-header">
          <p>HIKARI SUKEDA</p>
          <p className="under">PORTFOLIO</p>
        </Link>
      </div>
      <article key={workDTPData.id} id="works-detail">
        <div className="first-view jsWorksDetailActive">
          <div className="first-view__txt">
            <TypeText text={workDTPData.activetxt} className="jsTypeWriter" />
          </div>
          <div className="first-view__wrap">
            <h1 className="main-ttl js-subttl-hidden">
              <span className="color">P</span>
              <span className="split-text-box">
                <span className="split-text-animation">ROJECT</span>
              </span>
            </h1>
            <img
              decoding="async"
              src={`../assets/img/works/${workDTPData.imageMain}`}
              alt="制作物のメインイメージです"
              width={workDTPData.MainWidth}
              height={workDTPData.MainHeight}
              className="jsTypeImage"
            />
          </div>
        </div>
        <section className="feature">
          <h2 className="work-detail-ttl">
            <span className="line">F</span>
            <span className="split-text-box">
              <span className="split-text-animation">EATURE</span>
            </span>
          </h2>
          <div className="info">
            <picture className="info__image">
              <source srcSet="" />
              <img
                loading="lazy"
                src={`../assets/img/works/${workDTPData.imageMain}`}
                alt="制作物のメインイメージです"
                width={workDTPData.MainWidth}
                height={workDTPData.MainHeight}
              />
            </picture>
            <div className="info__txt-box">
              <ul className="scroll-fadein">
                <li className="bold">
                  {workDTPData.name}
                  <br className="sp-only" /> / {workDTPData.type}
                </li>
                <li>
                  <span>概要</span>
                  <br />
                  <p
                    dangerouslySetInnerHTML={{ __html: workDTPData.infoDesc }}
                  />
                </li>
                <li>
                  <span>制作期間</span>
                  <br />
                  {workDTPData.infoPeriod}
                </li>
                <li>
                  <span>使用ツール</span>
                  <br />
                  {workDTPData.infoTool}
                </li>
              </ul>
              <div className="info__circle">
                <svg className="circleText" viewBox="0 0 100 100">
                  <path
                    id="circle"
                    className="circleText__path"
                    d="M 0 50 A 50 50 0 1 1 0 51 z"
                  />
                  <text
                    className="circleText__stroke"
                    textAnchor="start"
                    startOffset="50%"
                    fill="#c7d9ce"
                    letterSpacing=".1em"
                  >
                    <textPath xlinkHref="#circle">
                      Sukeda Hikari -- Sukeda Hikari --
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>
        {filteredImages && filteredImages.length > 0 && (
          <div className="lateral-image clearfix">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="lateral-image__box scroll-fadein slideup"
              >
                <picture>
                  <source srcSet="" />
                  <img
                    decoding="async"
                    src={`../assets/img/works/${image.url}`}
                    alt="制作物のメインイメージです"
                    width={image.width}
                    height={image.height}
                  />
                </picture>
                <a
                  href="https://jp.freepik.com//"
                  className="image-copyright scroll-fadein"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image.copyright}
                </a>
              </div>
            ))}
          </div>
        )}{" "}
        <section className="process">
          <h2 className="work-detail-ttl">
            <span className="line">P</span>
            <span className="split-text-box">
              <span className="split-text-animation">ROCESS</span>
            </span>
          </h2>
          <ol className="process__list">
            <li className="js-active-target">
              <dl>
                <dt className="scroll-fadein slideup active">目的</dt>
                <dd>{workDTPData.process01}</dd>
              </dl>
            </li>
            <li className="js-active-target">
              <dl>
                <dt className="scroll-fadein slideup active">ターゲット</dt>
                <dd>{workDTPData.process02}</dd>
              </dl>
            </li>
            <li className="js-active-target">
              <dl>
                <dt className="scroll-fadein slideup active">内容</dt>
                <dd
                  dangerouslySetInnerHTML={{ __html: workDTPData.process03 }}
                />
              </dl>
            </li>
          </ol>
        </section>
        {filteredPopUpImages && filteredPopUpImages.length > 0 && (
          <section className="image-group">
            <h2 className="work-detail-ttl">
              <span className="line">I</span>
              <span className="split-text-box">
                <span className="split-text-animation">MAGES</span>
              </span>
            </h2>
            <div className="modal-wrapper">
              <img src="" alt="" className="modal-image" />
            </div>
            <ul className="image-list clearfix">
              {filteredPopUpImages.map((image, index) => (
                <li key={index} className="image-list__sec">
                  <picture className="image-list__img">
                    <source srcSet="" />
                    <img
                      decoding="async"
                      src={`../assets/img/works/${image.url}`}
                      alt={image.description}
                      width={workDTPData.width}
                      height={workDTPData.height}
                      className="popUp"
                      data-src={`../assets/img/works/${image.url}`}
                    />
                  </picture>
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="works-link-list">
          <h2 className="main-ttl js-subttl-hidden">
            <span className="color">W</span>
            <span className="split-text-box">
              <span className="split-text-animation">ORKS</span>
            </span>
          </h2>
          <WorksList />
          <button className="gr-button">
            <Link to={"/works"} className="gr-button__inner">
              More
            </Link>
          </button>
        </section>
      </article>
    </>
  );
};

export default WorksDTPDetail;
