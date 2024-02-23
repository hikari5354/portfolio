import React, { useEffect } from "react";
import { HeadBlock } from "../components/blocks/HeadBlock.jsx";
import { Link, useLocation } from "react-router-dom";
import { WorksList } from "../components/blocks/Components.jsx";

const Home = () => {
  //トップスクロールスライドのテキストが画面内に入ったらアニメーションさせる
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal-class]");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add(target.dataset.revealClass);
        } else {
          target.classList.remove(target.dataset.revealClass);
        }
      });
    });

    Array.from(elements).forEach(($elm) => {
      observer.observe($elm);
    });

    // クリーンアップ関数を返すことで、コンポーネントがアンマウントされたときに監視を停止する
    return () => {
      Array.from(elements).forEach(($elm) => {
        observer.unobserve($elm);
      });
    };
  }, []);

  // h1のテキストアニメーション
  const location = useLocation();
  useEffect(() => {
    const h1Elements = document.querySelectorAll("h1.top-split-text");
    const firstH1Element = h1Elements[0];

    if (firstH1Element) {
      const firstChildOfH1 = firstH1Element.querySelector(
        ".split-text-animation"
      );
      if (firstChildOfH1) {
        firstChildOfH1.classList.add("show");
      }
    }
  }, [location.pathname]);

  // 横スクロール
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(".sticky-area")];

    const handleScroll = () => {
      for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;

    const scrollSection = section.querySelector(".horizontal-scroll__inner");

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

    percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;

    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  return (
    <>
      <HeadBlock csspath="top" />
      <section className="top-area" id="first-view">
        <div className="top-ttl-wrap">
          <div className="top-ttl">
            <h1 className="top-split-text animated">
              <div className="split-text-box">
                <div className="split-text-animation">HIKARI SUKEDA</div>
              </div>
              <span className="under">PORTFOLIO</span>
            </h1>
            <ul>
              <li className="fadein slideleft">-Web Design</li>
              <li className="fadein slideleft">-Graphic Design</li>
              <li className="fadein slideleft">-illustration</li>
            </ul>
          </div>
          <div className="gradation" />
        </div>
        <ul className="top-scroll-wrap" id="winHight">
          <li className="scrolldown-wrap js-active-target">
            <div className="scrolldown">
              <span>Scroll</span>
            </div>
          </li>
          <li className="sec">
            <div className="sec__parts" data-reveal-class="js-preview">
              <div className="sec__parts__txt">
                <img
                  decoding="async"
                  src="../assets/img/main/WEBDESIGN-80×729.svg"
                  alt="WEBDESIGN"
                  width="80px"
                  height="729px"
                />
              </div>
              <div className="sec__parts__img">
                <img
                  decoding="async"
                  src="../assets/img/main/top01-parts01-220×521.webp"
                  alt="webデザイン制作物のイメージ"
                  width="220px"
                  height="521px"
                />
                <img
                  decoding="async"
                  src="../assets/img/main/top01-parts02-176×483.webp"
                  alt="webデザイン制作物のイメージ"
                  width="220px"
                  height="521px"
                />
              </div>
            </div>
            <img
              decoding="async"
              src="../assets/img/main/topbg-01-640×1080.webp"
              alt="WebDesignの背景"
              width="640px"
              height="1080px"
              className="sec__bg"
            />
          </li>
          <li className="sec">
            <div className="sec__parts" data-reveal-class="js-preview">
              <div className="sec__parts__txt">
                <img
                  decoding="async"
                  src="../assets/img/main/GRAPHICDESIGN-80×987.svg"
                  alt="GRAPHICDESIGN"
                  width="80px"
                  height="987px"
                />
              </div>
              <div className="sec__parts__img">
                <img
                  decoding="async"
                  src="../assets/img/main/top02-parts01-180×180.webp"
                  alt="グラフィックデザイン制作物のイメージ"
                  width="180px"
                  height="180px"
                />
                <img
                  decoding="async"
                  src="../assets/img/main/top02-parts02-140×249.webp"
                  alt="グラフィックデザイン制作物のイメージ"
                  width="140px"
                  height="249px"
                />
              </div>
            </div>
            <img
              decoding="async"
              src="../assets/img/main/topbg-02-640×1080.webp"
              alt="GraphicDesignの背景"
              width="640px"
              height="1080px"
              className="sec__bg"
            />
          </li>
          <li className="sec">
            <div className="sec__parts" data-reveal-class="js-preview">
              <div className="sec__parts__txt">
                <img
                  decoding="async"
                  src="../assets/img/main/ILLUSTRATION-80×828.svg"
                  alt="ILLUSTRATION"
                  width="80px"
                  height="828px"
                />
              </div>
              <div className="sec__parts__img">
                <img
                  decoding="async"
                  src="../assets/img/main/top03-parts01-160×199.webp"
                  alt="イラスト制作物のイメージ"
                  width="160px"
                  height="199px"
                />
                <img
                  decoding="async"
                  src="../assets/img/main/top03-parts02-260×257.webp"
                  alt="イラスト制作物のイメージ"
                  width="260px"
                  height="257px"
                />
              </div>
            </div>
            <img
              decoding="async"
              src="../assets/img/main/topbg-03-640×1080.webp"
              alt="illustrationの背景"
              width="640px"
              height="1080px"
              className="sec__bg"
            />
          </li>
        </ul>
      </section>
      <section className="top-about">
        <h2 className="main-ttl js-subttl-hidden">
          <span className="color">A</span>
          <span className="split-text-box">
            <span className="split-text-animation">BOUT</span>
          </span>
        </h2>
        <div className="about clearfix">
          <div className="about__img">
            <div className="about__img__clip js-active-target scroll-fadein slideup">
              <img
                loading="lazy"
                src="../assets/img/main/prf-530×641.webp"
                alt="プロフィールイメージ"
                width="530px"
                height="641px"
              />
            </div>
            <div className="about__img__circle">
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
          <div className="about__txt">
            <dl className="about__txt__feature js-active-target">
              <dt>助田 日香莉　Hikari Sukeda</dt>
              <dd>
                1992年6月、兵庫県出身。一般事務として勤務しながら、illustrator・Photoshopやデザインを独学で学び、2016年から約4年半テレビ局にてグラフィックデザイナーとして従事。
                <br />
                クリエイティブの幅を広げたいという気持ちをきっかけに2020年からデザイン事務所所属デザイナー、地元自動車企業のインハウスデザイナーとして、グラフィックデザインに加えてWebデザイン、コーディング、イラストなどの案件に携わる。
              </dd>
            </dl>
            <button className="gr-button">
              <Link to={"/about"} className="gr-button__inner">
                View Profile
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="top-skill">
        <div className="scroll-container">
          <div className="ttl-wrap">
            <h2 className="main-ttl js-subttl-hidden">
              <span className="color">S</span>
              <span className="split-text-box">
                <span className="split-text-animation">KILLS</span>
              </span>
            </h2>
          </div>
          <div className="sticky-area">
            <div className="sticky-area__circle">
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
                  fill="#FFF"
                  letterSpacing=".1em"
                >
                  <textPath xlinkHref="#circle">
                    Web Design -- Gratphic Design -- Illustration --
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="horizontal-scroll">
              <ol className="horizontal-scroll__inner">
                <li className="horizontal-scroll__inner__sec">
                  <dl>
                    <dt>ウェブデザイン</dt>
                    <dd>
                      クライアントのヒアリングを地盤に流行やターゲット層、後々の構築のことなど必要なものを取捨選択しながら、かつ遊び心のあるデザインを心がけています。
                      <br />
                      元々がグラフィックデザインからの出発なので、現状illustratorでカンプデザインを作るのが一番早いですがFigmaでも制作可能、XDも基本操作は可能です。
                    </dd>
                  </dl>
                  <figure>
                    <figcaption>Illustrator/Photoshop/Figma</figcaption>
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon08-120×117.webp"
                      alt="Illustratorアイコン"
                      width="120px"
                      height="117px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon06-120×117.webp"
                      alt="Photoshopアイコン"
                      width="120px"
                      height="117px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon09-120×180.webp"
                      alt="Figmaアイコン"
                      width="120px"
                      height="180px"
                      style={{ padding: "0 12px" }}
                    />
                  </figure>
                </li>
                <li className="horizontal-scroll__inner__sec">
                  <dl>
                    <dt>実装</dt>
                    <dd>
                      HTML、SCSS、jQuery、フォーム実装(contactform7、メールフォームプロCGI)、WordPress(テーマ自作)を使ったコーポレートサイトのデザイン～構築～オープンまでの実績があります。分かりやすく綺麗なコードを心がけ、SEO面もカバーできるよう取り組んでいます。フロントエンドの幅を広げるためReact、Next.js、Three.jsなど現在日々勉強中。まだまだ未熟ですが当ポートフォリオサイトはReactを取り入れました。
                    </dd>
                  </dl>
                  <figure>
                    <figcaption>Dreamweaver/VScode/WordPress/Github</figcaption>
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon05-120×117.webp"
                      alt="Dreamweaverアイコン"
                      width="120px"
                      height="117px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon07-120×119.webp"
                      alt="VScodeアイコン"
                      width="120px"
                      height="119px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon04-120×120.webp"
                      alt="WordPressアイコン"
                      width="120px"
                      height="120px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon10-120×120.webp"
                      alt="Githubアイコン"
                      width="120px"
                      height="120px"
                    />
                  </figure>
                </li>
                <li className="horizontal-scroll__inner__sec">
                  <dl>
                    <dt>
                      グラフィック
                      <br />
                      デザイン
                    </dt>
                    <dd>
                      名刺やフライヤー、ポスターなどの印刷物やロゴデザインなど、いずれも「何のために」「誰に何を伝えたいか」を念頭にクライアントと擦り合わせを大切にしながら取り組んでいます。
                      <br />
                      その他画像の加工や、TV局での経験からYouTubeで使われるようなテロップデザインや、パスでのベクターイラストの作成も可能です。
                    </dd>
                  </dl>
                  <figure>
                    <figcaption>Illustrator/Photoshop</figcaption>
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon08-120×117.webp"
                      alt="Illustratorアイコン"
                      width="120px"
                      height="117px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon06-120×117.webp"
                      alt="Photoshopアイコン"
                      width="120px"
                      height="117px"
                    />
                  </figure>
                </li>
                <li className="horizontal-scroll__inner__sec">
                  <dl>
                    <dt>そのほか</dt>
                    <dd>
                      元々の趣味であるイラストをありがたいことにお仕事で活かしていただくことがあり、ロゴの一部のイラストやYouTubeチャンネル用のイラスト、立ち絵などの制作実績があります。まだまだ実績としては少なく、また自分でVTuberモデルを作りたいという想いからLive2Dを勉強中です。その他インハウスデザイナー従事先で広告動画を作る機会がありPremiere
                      Pro、After Effectsで簡単な動画作成が可能です。
                    </dd>
                  </dl>
                  <figure>
                    <figcaption>
                      Premiere Pro/After Effects/
                      <br />
                      CLIP STUDIO PAINT
                    </figcaption>
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon02-120×120.webp"
                      alt="Premiere Proアイコン"
                      width="120px"
                      height="120px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon03-120×120.webp"
                      alt="After Effectsアイコン"
                      width="120px"
                      height="120px"
                    />
                    <img
                      loading="lazy"
                      src="../assets/img/main/skill-icon01-120×120.webp"
                      alt="CLIP STUDIO PAINTアイコン"
                      width="120px"
                      height="120px"
                    />
                  </figure>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};
export default Home;
