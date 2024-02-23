import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HeadBlock } from "../components/blocks/HeadBlock.jsx";
import { workDatas, imageDate } from "../components/blocks/WorksData.js";
import { TypeText } from "../components/blocks/TypeText.jsx";
import { WorksList } from "../components/blocks/Components.jsx";

const WorksDetail = () => {
  // slugに対応する出力workDatasをフィルタリング
  const { slug } = useParams();
  const workData = workDatas.find((p) => p.slug === slug);
  // slugに対応するimagesListをフィルタリング
  const filteredImages = imageDate.find(
    (workData) => workData.slug === slug
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

  if (!workData) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <HeadBlock
        title="HIKARI SUKEDA PORTFOLIO -WorksDetail-"
        description="HIKARI SUKEDA ポートフォリオサイトの制作物詳細ページです。閲覧いただきありがとうございます。"
        path="{`/worksdate/${workData.slug}`}"
        csspath="works"
        ogdescription="HIKARI SUKEDA ポートフォリオサイトの制作物詳細ページです。"
      />
      <div className="sub-header-wrap">
        <Link to={"/"} className="sub-header">
          <p>HIKARI SUKEDA</p>
          <p className="under">PORTFOLIO</p>
        </Link>
      </div>
      <article key={workData.id} id="works-detail">
        <div className="first-view jsWorksDetailActive">
          <div className="first-view__txt">
            <TypeText text={workData.activetxt} className="jsTypeWriter" />
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
              src={`../assets/img/works/${workData.imageMain}`}
              alt="制作物のメインイメージです"
              width={workData.MainWidth}
              height={workData.MainHeight}
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
                src={`../assets/img/works/${workData.imageMain}`}
                alt="制作物のメインイメージです"
                width={workData.MainWidth}
                height={workData.MainHeight}
              />
            </picture>
            <div className="info__txt-box scroll-fadein slideup">
              <ul>
                <li className="bold">
                  {workData.name}
                  <br className="sp-only" /> / {workData.type}
                </li>
                <li>
                  <span>概要</span>
                  <br />
                  {workData.infoDesc}
                </li>
                <li>
                  <span>制作範囲</span>
                  <br />
                  <p dangerouslySetInnerHTML={{ __html: workData.infoRange }} />
                </li>
                <li>
                  <span>制作期間</span>
                  <br />
                  {workData.infoPeriod}
                </li>
                <li>
                  <span>使用ツール</span>
                  <br />
                  {workData.infoTool}
                </li>
                <li>
                  <span>使用言語など</span>
                  <br />
                  {workData.infolang}
                </li>
                <li>
                  <span>URL</span>
                  <br />
                  <a
                    href={workData.infoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {workData.infoURL}
                    <img
                      loading="lazy"
                      src="../assets/img/main/link-icon-80×80.svg"
                      alt="外部リンクアイコン"
                      width="80px"
                      height="80px"
                    />
                  </a>
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
        <div className="bg-image">
          <img
            loading="lazy"
            src={`../assets/img/works/${workData.imageMain02}`}
            alt="制作物のメインイメージです"
            width="1928px"
            height="1080px"
            className="bg-image__front"
          />
          <img
            loading="lazy"
            src={`../assets/img/works/${workData.imageMain02}`}
            alt="制作物のメインイメージです"
            width="1928px"
            height="1080px"
            className="bg-image__back"
          />
        </div>
        <a
          href="https://jp.freepik.com/"
          className="bg-copyright scroll-fadein"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Aleksandr_Samochernyi / Freepik
        </a>
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
                <dd>{workData.process01}</dd>
              </dl>
            </li>
            <li className="js-active-target">
              <dl>
                <dt className="scroll-fadein slideup active">ターゲット</dt>
                <dd>{workData.process02}</dd>
              </dl>
            </li>
            <li className="js-active-target">
              <dl>
                <dt className="scroll-fadein slideup active">課題</dt>
                <dd>{workData.process03}</dd>
              </dl>
            </li>
            <li className="js-active-target">
              <dl>
                <dt className="scroll-fadein slideup active">実行</dt>
                <dd dangerouslySetInnerHTML={{ __html: workData.process04 }} />
              </dl>
            </li>
          </ol>
        </section>
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
          {filteredImages && (
            <ul className="image-list clearfix">
              {filteredImages.map((image, index) => (
                <li key={index} className="image-list__sec">
                  <picture className="image-list__img">
                    <source srcSet="" />
                    <img
                      decoding="async"
                      src={`../assets/img/works/${image.url}`}
                      alt={image.description}
                      width="1928"
                      height="1080"
                      className="popUp"
                      data-src={`../assets/img/works/${image.url}`}
                    />
                  </picture>
                </li>
              ))}
            </ul>
          )}
        </section>
        <div className="ttl-wrap">
          <h2 className="work-detail-ttl">
            <span className="line">R</span>
            <span className="split-text-box">
              <span className="split-text-animation">EFERENCE</span>
            </span>
          </h2>
        </div>
        <div className="youtube-link">
          <a href={`//www.youtube.com/watch?v=${workData.youtubeURL}`}>
            <picture>
              <source
                media="(max-width:599px)"
                srcSet={`//i.ytimg.com/vi/${workData.youtubeURL}/hqdefault.jpg 1x, //i.ytimg.com/vi/${workData.youtubeURL}/maxresdefault.jpg 2x`}
                width={480}
                height={360}
              />
              <img
                loading="lazy"
                src={`//i.ytimg.com/vi/${workData.youtubeURL}/maxresdefault.jpg`}
                alt="制作物参考YouTubeのリンク"
                width={1280}
                height={720}
              />
            </picture>
          </a>
        </div>
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

export default WorksDetail;
