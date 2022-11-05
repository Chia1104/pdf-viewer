"use client";

import { type FC } from "react";
import NextHead from "next/head";

interface Props {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string[];
  type?: "website" | "article" | "book" | "profile";
  imageUrl?: string;
}

const Head: FC<Props> = (props) => {
  const {
    title,
    description,
    canonicalUrl,
    keywords,
    type = "website",
    imageUrl,
  } = props;
  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="robots" content="index,follow" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} key="description" />
      <meta name="keywords" content={keywords?.join(", ")} />
      <meta name="author" content={title} />
      <meta property="og:type" content={type} key="type" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#2B2E4A" />
      <meta property="og:image" content={imageUrl || ""} key="image" />
    </NextHead>
  );
};

export default Head;
