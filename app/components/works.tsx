"use client";

import Image from "next/image";

type WorkElem = {
  title: string;
  src: string;
  projectSrc?: string;
  invert?: boolean;
};

type Prop = {
  isFront?: boolean;
  works: WorkElem[];
};

export function Works({ isFront = false, works }: Prop) {
  const max = isFront ? 1 : works.length;
  return (
    <div className="flex flex-wrap space-y-4 md:space-y-0">
      {works.slice(0, max).map((work) => {
        return (
          <div
            onClick={() => {
              if (work.projectSrc) {
                window.open(work.projectSrc);
              }
            }}
          >
            <Image
              className={`pt-2 mr-8 ${
                work.projectSrc ? "hover:cursor-pointer" : ""
              } ${work.invert ? "invert" : ""} opacity-90 grayscale`}
              src={work.src}
              alt={work.title}
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        );
      })}
    </div>
  );
}
