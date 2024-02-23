import React from "react";
import { Helmet } from "react-helmet-async";

export function HeadBlock({ title, description, path, ogdescription }) {
  return (
    <Helmet>
      <title>{title ?? "HIKARI SUKEDA PORTFOLIO"}</title>
      <meta
        name="description"
        content={
          description ??
          "HIKARI SUKEDA ポートフォリオサイトです。閲覧いただきありがとうございます。これまでの経歴や制作物、スキル、これからのビジョンについて掲載しています。"
        }
      />
      <link
        rel="canonical"
        href={`https://portfolio.hikari-design.site/${path ?? ""}`}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title ?? "HIKARI SUKEDA PORTFOLIO"} />
      <meta
        property="og:description"
        content={
          ogdescription ??
          "HIKARI SUKEDA ポートフォリオサイトです。これまでの経歴や制作物、スキル、これからのビジョンについて掲載しています。"
        }
      />
      <meta
        property="og:url"
        content={`https://portfolio.hikari-design.site/${path ?? ""}`}
      />
      <meta
        property="og:site_name"
        content={title ?? "HIKARI SUKEDA PORTFOLIO"}
      />
      <meta
        property="og:image"
        content="https://portfolio.hikari-design.site/assets/img/main/og-img-1200×630.webp"
      />
      <meta property="og:type" content="website" />
      <link rel="icon" href="../assets/img/main/favicon.ico" sizes="any" />
      <link
        rel="apple-touch-icon"
        href="../assets/img/main/apple-touch-icon.png"
      />
    </Helmet>
  );
}
