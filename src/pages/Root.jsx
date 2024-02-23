import React, { useEffect } from "react";
import { Outlet, Link, ScrollRestoration, useLocation } from "react-router-dom";
import { Footer, Contact } from "../components/blocks/Components.jsx";

// リサイズイベント名
const ua = navigator.userAgent;
let eventName;

if (
  (ua.indexOf("iPhone") > 0 && ua.indexOf("iPad") === -1) ||
  ua.indexOf("iPod") > 0 ||
  ua.indexOf("Android") > 0
) {
  eventName = "orientationchange";
} else {
  eventName = "resize";
}

export default function Root() {
  //スクロールでイベント発火
  const handleScroll = () => {
    document
      .querySelectorAll(".js-active-target, .scroll-fadein")
      .forEach(function (element) {
        const position = element.getBoundingClientRect().top - 50;
        const windowHeight = window.innerHeight;

        if (position < windowHeight) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * トップページ
   */
  //画面幅、高さを取得して変数に代入
  const setWinValue = () => {
    let window_h = window.innerHeight;
    let window_w = window.innerWidth;
    document.documentElement.style.setProperty("--win-height", `${window_h}px`);
    document.documentElement.style.setProperty("--win-width", `${window_w}px`);
  };

  let resizeTimer;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setWinValue();
    }, 200);
  };

  useEffect(() => {
    setWinValue();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * ヘッダー
   */

  useEffect(() => {
    // ページが読み込まれたときの処理
    const handleOpenBtnClick = () => {
      document.querySelector(".nav-btn__contents").classList.toggle("active");
      document.querySelector(".header").classList.toggle("fade");
      document.body.classList.toggle("noscroll");
    };

    const openBtn = document.querySelector(".open-btn");
    if (openBtn) {
      openBtn.addEventListener("click", handleOpenBtnClick);
    }

    //ページ遷移したらheaderを隠す
    const links = document.querySelectorAll(".sp-nav__link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        const header = document.querySelector(".header");
        header.classList.remove("fade");
        document.querySelector(".nav-btn__contents").classList.remove("active");
      });
    });

    // footer位置でヘッダーを非表示にする処理
    function ftNavHidden() {
      const point = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const dispHeight = window.innerHeight;
      const footer = 100; // 仮の値、実際の値に置き換えてください

      if (point > docHeight - dispHeight - footer) {
        document.querySelectorAll(".nav-btn").forEach((el) => {
          el.classList.add("is-hidden");
        });
      } else {
        document.querySelectorAll(".nav-btn").forEach((el) => {
          el.classList.remove("is-hidden");
        });
      }
    }

    window.addEventListener("scroll", ftNavHidden);
    window.addEventListener("eventName", ftNavHidden);

    // スクロールに合わせてヘッダーを表示非表示する処理
    const header = document.querySelector(".nav-btn");
    let prevY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentY = window.scrollY;
      if (currentY < prevY) {
        header.classList.remove("hidden");
      } else {
        if (currentY > 0) {
          header.classList.add("hidden");
        }
      }
      prevY = currentY;
    });

    return () => {
      // コンポーネントがアンマウントされるときのクリーンアップ処理
      if (openBtn) {
        openBtn.removeEventListener("click", handleOpenBtnClick);
      }
    };
  }, []);

  /**
   * commonアニメーション
   */
  //疑似要素に対してスクロールでイベント発火(h2.main-tt::before)
  useEffect(() => {
    const titleScroll = () => {
      const elements = document.querySelectorAll(".js-subttl-hidden");
      elements.forEach(function (element) {
        const position = element.parentElement.offsetTop - 200;
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scroll > position - windowHeight) {
          if (!element.classList.contains("js-subttl-view")) {
            element.classList.remove("js-subttl-hidden");
            element.classList.add("js-subttl-view");
          }
        }
      });
    };

    window.addEventListener("scroll", titleScroll);

    return () => {
      window.removeEventListener("scroll", titleScroll);
    };
  }, []);

  useEffect(() => {
    // スクロール後一文字ずつ下からテキスト表示
    const handleTextAnimation = () => {
      const textElements = document.querySelectorAll(".split-text-animation");
      const scrollBoxElements = document.querySelectorAll(".split-text-box");

      for (let i = 0; i < scrollBoxElements.length; i++) {
        const getElement =
          scrollBoxElements[i].getBoundingClientRect().top +
          scrollBoxElements[i].clientHeight;
        let triggerMargin = 200;

        if (window.innerHeight > getElement + triggerMargin) {
          if (!scrollBoxElements[i].classList.contains("animated")) {
            // まだアニメーションされていない要素に対してのみ実行
            scrollBoxElements[i].classList.add("animated");
            textElements[i].classList.add("show");

            const animeText = textElements[i].textContent;
            const animeTextArray = [];

            textElements[i].textContent = "";

            for (let j = 0; j < animeText.split("").length; j++) {
              const t = animeText.split("")[j];

              if (t === " ") {
                animeTextArray.push(" ");
              } else {
                animeTextArray.push(
                  '<span class="text-animation-span"><span style="animation-delay: ' +
                    j * 0.1 +
                    's">' +
                    t +
                    "</span></span>"
                );
              }
            }

            for (let k = 0; k < animeTextArray.length; k++) {
              textElements[i].innerHTML += animeTextArray[k];
            }
          }
        }
      }
    };

    // ページロード後に初回実行
    handleTextAnimation();

    window.addEventListener("scroll", handleTextAnimation);

    return () => {
      window.removeEventListener("scroll", handleTextAnimation);
    };
  }, []);

  let location = useLocation();
  // マウスストーカー実装
  useEffect(() => {
    const cursor = document.getElementById("js-cursor");
    const areas = document.querySelectorAll(".js-cursor-area");
    const links = document.querySelectorAll(".js-cursor-target");
    areas.forEach((area) => {
      area.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursor.style.opacity = "1";
      });
      area.addEventListener("mouseout", () => {
        cursor.style.opacity = "0";
        setTimeout(() => {
          cursor.style.opacity = "0";
        }, 150);
      });
    });

    links.forEach((link) => {
      link.addEventListener(
        "mouseenter",
        () => {
          cursor.classList.add("active");
        },
        false
      );
      link.addEventListener(
        "mouseleave",
        () => {
          cursor.classList.remove("active");
        },
        false
      );
    });

    return () => {
      areas.forEach((area) => {
        area.removeEventListener("mousemove", () => {});
        area.removeEventListener("mouseout", () => {});
      });
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, [location]);

  return (
    <>
      <ScrollRestoration />

      <header>
        <div className="header">
          <nav className="header__contents">
            <ul className="sp-nav">
              <Link
                to={"/"}
                className="sp-nav__link"
                state={{ remount: "true" }}
              >
                TOP
              </Link>
              <Link to={"/about"} className="sp-nav__link">
                About
              </Link>
              <Link to={"/works"} className="sp-nav__link">
                Works
              </Link>
            </ul>
          </nav>
        </div>
        <div className="nav-btn">
          <div className="nav-btn__contents">
            <button
              className="open-btn"
              aria-haspopup="true"
              aria-label="メニューを開く"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <main id="page-top">
        <Outlet />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
