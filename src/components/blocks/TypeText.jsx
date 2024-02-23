import React, { useEffect, useState } from "react";

export const TypeText = ({ text }) => {
  const [isTextDisplayed, setIsTextDisplayed] = useState(false); // 文字列が表示されたかどうかを管理
  useEffect(() => {
    const typeWriter = (element) => {
      const el = document.querySelector(element);
      const textContent = text.replace(/<br\s*\/?>/gi, "\n"); // <br/> を改行文字に置換
      let index = 0;

      const displayText = () => {
        const slicedText = textContent.slice(0, index);
        el.innerHTML =
          slicedText.replace(/\n/g, "<br/>") +
          '<span aria-hidden="true"></span>'; // 改行文字とキャレットを組み合わせて表示
        index++;
        if (index <= textContent.length) {
          setTimeout(displayText, 40);
        } else {
          setIsTextDisplayed(true); // 文字列が表示されたら状態を更新
        }
      };

      displayText();
    };

    typeWriter(".jsTypeWriter");
  }, [text]);

  useEffect(() => {
    if (isTextDisplayed) {
      setTimeout(() => {
        const el = document.querySelector(".jsWorksDetailActive");
        el.classList.add("active");
      }, 1200);
      setTimeout(() => {
        const txt = document.querySelector(".first-view__txt");
        txt.style.opacity = "0";
      }, 2000);
      setTimeout(() => {
        const img = document.querySelector(".jsTypeImage");
        img.classList.add("active");
      }, 2200);
    }
  }, [isTextDisplayed]);
  return (
    <p className="jsTypeWriter">
      <span aria-hidden="true"></span>
    </p> // キャレット用の span 要素を追加
  );
};
