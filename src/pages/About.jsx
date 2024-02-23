import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeadBlock } from "../components/blocks/HeadBlock.jsx";
import { WorksList } from "../components/blocks/Components.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  //Profile画面幅、高さを取得して変数に代入
  const setHeightValue = () => {
    const prfInfoElement = document.querySelector(".js-plf-value");
    const prfInfoHeight = prfInfoElement.clientHeight + 100;
    const prfInfoWidth = prfInfoElement.clientWidth + 100;
    const maxDimension = Math.max(prfInfoHeight, prfInfoWidth);
    document.documentElement.style.setProperty(
      "--prf-height",
      `${maxDimension}px`
    );
  };

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setHeightValue();
      }, 200);
    };

    setHeightValue();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Career画面幅、高さを取得して変数に代入
  const setCareerHeightValue = () => {
    const careerElement = document.querySelector(".js-career-value");
    const careerWidth = careerElement.clientWidth;
    document.documentElement.style.setProperty(
      "--career-width",
      `${careerWidth}px`
    );
  };

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setCareerHeightValue();
      }, 200);
    };
    setCareerHeightValue();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 横スクロール
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const horizontalScroll = scrollContainer.querySelector(
      ".career-sticky-area"
    );
    const horizontalScrollSec =
      horizontalScroll.querySelectorAll(".horizontal-scroll");

    if (!horizontalScroll || !horizontalScrollSec) return;

    // アニメーションを設定
    horizontalScrollSec.forEach((element) => {
      gsap.to(element, {
        x: () => -element.offsetWidth,
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: () => `+=${horizontalScroll.offsetWidth}`,
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <HeadBlock
        title="HIKARI SUKEDA PORTFOLIO -About-"
        description="HIKARI SUKEDA ポートフォリオサイトのAboutページです。閲覧いただきありがとうございます。これまでの経歴やスキルをまとめました。"
        path="about"
        csspath="about"
        ogdescription="HIKARI SUKEDA ポートフォリオサイトのAboutページです。これまでの経歴やスキルをまとめました。"
      />
      <div className="sub-header-wrap">
        <Link to={"/"} className="sub-header">
          <p>HIKARI SUKEDA</p>
          <p className="under">PORTFOLIO</p>
        </Link>
      </div>
      <section className="profile">
        <div className="prf-box">
          <h1 className="main-ttl js-subttl-view">
            <span className="color">A</span>
            <span className="split-text-box">
              <span className="split-text-animation">BOUT</span>
            </span>
          </h1>
          <div className="prf-box__img">
            <div className="prf-box__img__clip active scroll-fadein slideup">
              <img
                decoding="async"
                src="../assets/img/main/prf-530×641.webp"
                alt="プロフィールイメージ"
                width="530px"
                height="641px"
              />
            </div>
            <div className="prf-box__img__shadow active scroll-fadein slideup" />
            <div className="prf-box__img__circle">
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
        <div className="prf-info">
          <div className="prf-info__wrap">
            <dl className="info js-active-target">
              <dt>助田 日香莉　Hikari Sukeda</dt>
              <dd className="js-plf-value">
                1992年6月、兵庫県出身。趣味はイラストを描くこと・アニメ・K-POP。
                <br />
                これまでグラフィックデザイン、Webデザイン、コーディング、フロントエンドなどを経験してきました。今後も上限を定めることなく幅を広げていきたいという想いでReactやThree.jsなど日々勉強中です。
                <br />
                トレンドだけでなくクライアントの想いや、それを必要とする方々に寄り添ったクリエイティブを目指していきたいです。
              </dd>
            </dl>
          </div>
        </div>
        <div className="txt-wrap">
          <p>Hikari Sukeda</p>
        </div>
      </section>
      <section className="career">
        <div className="side-scroll">
          <div ref={scrollContainerRef} className="scroll-container">
            <h2 className="main-ttl js-subttl-hidden">
              <span className="color">C</span>
              <span className="split-text-box">
                <span className="split-text-animation">AREER</span>
              </span>
            </h2>
            <div className="career-sticky-area">
              <ol className="horizontal-scroll">
                <li className="horizontal-scroll__sec js-career-value">
                  <time dateTime={2011} className="horizontal-scroll__year">
                    2011
                  </time>
                  <dl>
                    <dt>
                      不動産会社事務
                      <br />
                      <span>
                        <time dateTime="2011-04">2011年4月</time>～
                        <time dateTime="2016-02">2016年2月</time>
                      </span>
                    </dt>
                    <span className="point" />
                    <dd>
                      高校卒業後、不動産会社に就職。一般事務として入出金業務や接客、電話応対、Excelでのデータ管理などを担当していました。
                      <br />
                      事務業務以外に、提携会社のネット回線販促として管理物件へ訪問営業をかけることもありコミュニケーション能力も培われました。
                      <br />
                      在学中から持っていたデザインを通して発信する仕事をしたいという気持ちを諦められず、働きながら独学でillustrator、Photoshopを使用したデザイン制作を学びました。
                    </dd>
                  </dl>
                </li>
                <li className="horizontal-scroll__sec">
                  <time dateTime={2016} className="horizontal-scroll__year">
                    2016
                  </time>
                  <dl>
                    <dt>
                      グラフィックデザイナー
                      <br />
                      <span>
                        <time dateTime="2016-03">2016年3月</time>～
                        <time dateTime="2020-09">2020年9月</time>
                      </span>
                    </dt>
                    <span className="point" />
                    <dd>
                      テレビ局制作会社へ転職。グラフィックデザイナーとして番組で使われるフリップやイラスト、パネルなどの制作や画像加工を担当しました。
                      <br />
                      業務として映像で使われるものとDTPの両方があったので、入社時、実務未経験でしたが入稿に関する知識も得ることができ、また常に時間に追われる現場だったのでillustratorの作業スピードを上げることができました。一案件ごとにスタッフからの受注～納品まで全て担当していたのでクライアントへのヒアリング力も身に付きました。
                    </dd>
                  </dl>
                </li>
                <li className="horizontal-scroll__sec">
                  <time dateTime={2020} className="horizontal-scroll__year">
                    2020
                  </time>
                  <dl>
                    <dt>
                      デザイン事務所
                      <br />
                      <span>
                        <time dateTime="2020-10">2020年10月</time>～
                        <time dateTime="2022-10">2022年10月</time>
                      </span>
                    </dt>
                    <span className="point" />
                    <dd>
                      前職で携わってきたデザイン以外にも、クリエイティブの幅を広げたいという想いからデザイン事務所へ転職。名刺、チラシ、ロゴなどDTPデザインやイラスト案件、Webデザイン、HTML・CSS・jQueryを使用したコーディングを担当。
                      <br />
                      納品スピード重視のシンプルなサイト案件が多かったですが、未経験ながらコーディングなどWebサイトの案件も徐々に任せていただけるようになり、その要因の一つとして構築する上での調べる力や応用力などを評価いただけておりました。
                    </dd>
                  </dl>
                </li>
                <li className="horizontal-scroll__sec">
                  <time dateTime={2022} className="horizontal-scroll__year">
                    2022
                  </time>
                  <dl>
                    <dt>
                      インハウスデザイナー
                      <br />
                      <span>
                        <time dateTime="2022-11">2022年11月</time>～
                        <time dateTime="2023-12">2023年12月</time>
                      </span>
                    </dt>
                    <span className="point" />
                    <dd>
                      勉強に充てる時間を増やしたいという気持ちから地元の自動車会社にインハウスデザイナーとして転職。自社サイトの制作を主目的とした人員募集でサイト2種を制作。
                      <br />
                      前職ではWebデザイン、コーディングなど一部のみに携わっていましたが、社長から色々挑戦してほしいとのお言葉をいただき企画からリリースまで全て1人で担当。簡易的ではありますがWordPressの自作テーマやカスタム投稿なども構築しました。チラシ、販促はがきなどのDTPや現場のスプレッドシート組みやGoogleWorkspace導入なども担当。フロントエンドの知見を大きく広げることができました。
                    </dd>
                  </dl>
                </li>
                <li className="horizontal-scroll__sec">
                  <time dateTime={2024} className="horizontal-scroll__year">
                    2024
                  </time>
                  <dl>
                    <dt>
                      今後のビジョン
                      <br />
                      <span>
                        <time dateTime="2024-01">2024年1月</time>～
                      </span>
                    </dt>
                    <span className="point" />
                    <dd>
                      これまでの経験を総合して、DTP/Webデザイン/フロントエンドなど、どのスキルも捨てずに磨いていきたいという気持ちがあり、今後も仕事と平行して勉強を続けていきます。
                      <br />
                      ①使えるフレームワークや言語を増やして要望に対応できる幅を広げる
                      <br />
                      ②その他イラストや動画編集、業務外で触ったことのあるLive2D、blenderなども伸ばし、blenderをThree.js使用サイトに活用するなど、掛け合わせでクリエイティブを伸ばし続ける
                      <br />
                      ③機会があればバックエンドのシステム開発にも挑戦する
                      <br />
                      これらを主軸に高めていきたいです。
                    </dd>
                  </dl>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="skill-list">
        <h2 className="main-ttl js-subttl-hidden">
          <span className="color">S</span>
          <span className="split-text-box">
            <span className="split-text-animation">KILLS</span>
          </span>
        </h2>
        <figure>
          <img
            loading="lazy"
            src="../assets/img/about/skill-icon14-120×120.svg"
            alt="htmlアイコン"
            width="120px"
            height="120px"
          />
          <img
            loading="lazy"
            src="../assets/img/about/skill-icon13-120×120.svg"
            alt="cssアイコン"
            width="120px"
            height="120px"
          />
          <img
            loading="lazy"
            src="../assets/img/about/skill-icon12-120×90.svg"
            alt="sassアイコン"
            width="120px"
            height="90px"
          />
          <img
            loading="lazy"
            src="../assets/img/about/skill-icon15-120×120.svg"
            alt="jQueryアイコン"
            width="120px"
            height="120px"
          />
          <img
            loading="lazy"
            src="../assets/img/about/skill-icon11-120×120.svg"
            alt="jsアイコン"
            width="120px"
            height="120px"
          />
        </figure>
        <figure>
          <img
            loading="lazy"
            src="../assets/img/main/skill-icon04-120×120.webp"
            alt="WordPressアイコン"
            width="120px"
            height="120px"
          />
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
            src="../assets/img/main/skill-icon10-120×120.webp"
            alt="Githubアイコン"
            width="120px"
            height="120px"
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
        <figure>
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
            src="../assets/img/main/skill-icon01-120×120.webp"
            alt="CLIP STUDIO PAINTアイコン"
            width="120px"
            height="120px"
          />
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
        </figure>
      </div>
      <section className="strength-wrap">
        <h2 className="main-ttl js-subttl-hidden">
          <span className="color">S</span>
          <span className="split-text-box">
            <span className="split-text-animation">TRENGHTH</span>
          </span>
        </h2>
        <div className="strength">
          <img
            loading="lazy"
            src="../assets/img/about/strength-icon-700×645.svg"
            alt="Communication・Listening・Curiosity&Exploration"
            width="700px"
            height="645px"
            className="scroll-fadein slideup"
          />
          <ol className="strength__list">
            <li className="strength__list__el js-active-target">
              <h3 className="scroll-fadein slideup">コミュニケーション力</h3>
              <p>
                一般事務や学生時代に接客経験があり、元々人と話すことも好きなので円滑な人間関係を築くことができます。また、テレビ局でのグラフィックデザイナー時代シフト制でのチーム体制で案件の引継ぎもあったので齟齬がないよう自然と制作の上でのコミュニケーション能力が鍛えられました。
              </p>
            </li>
            <li className="strength__list__el js-active-target">
              <h3 className="scroll-fadein slideup">好奇心と探求力</h3>
              <p>
                好奇心旺盛で趣味でも仕事でも幅広く興味をもつことが多いです。仕事上で新しく知識を身につける必要が出てきたときも、「今後の自分の力になる」とポジティブに勉強に取り組むことができます。また、制作の上で案が浮かんだ際も「これはターゲット層にどうアプローチできるか」「クライアントの要望に寄り添えているか」など追究してより良いものを作り出せるよう尽力しています。
              </p>
            </li>
            <li className="strength__list__el js-active-target">
              <h3 className="scroll-fadein slideup">ヒアリング力</h3>
              <p>
                前職で自社サイト制作を担当した際、掲載するサービスや原稿などほぼ白紙の状態からのスタートでした。企業が伝えたいものを最善の形で作り上げられるように自分の足で各部署をまわって情報を集め、提案書やプロットなどを作成して話し合いを重ね進行しました。クライアントが作りたいものと顧客のニーズどちらにも添えるようにヒアリングによる擦り合わせを大切にしています。
              </p>
            </li>
          </ol>
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

export default About;
