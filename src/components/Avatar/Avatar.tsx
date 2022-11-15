"use client";

import type { FC } from "react";
import { Image } from "@/components";

interface Props {
  username: string;
  url: string;
  ratio: number;
}

const Avatar: FC<Props> = (props) => {
  const { username, url, ratio } = props;

  return (
    <span className="relative">
      <Image
        src={url}
        width={ratio}
        height={ratio}
        className="rounded-full"
        alt={username}
      />
    </span>
  );
};

export default Avatar;
