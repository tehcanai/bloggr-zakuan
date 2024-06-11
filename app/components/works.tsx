"use client";

import Image from "next/image";

type WorkElem = {
  title: string;
  src: string;
  projectSrc?: string;
};

type Prop = {
  isFront?: boolean;
  works: WorkElem[];
};

export function Works({ isFront = false, works }: Prop) {
  const max = isFront ? 1 : works.length;
  return (
    <div className="flex flex-col">
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
              className={`pt-2 opacity-100 md:opacity-25 ${
                work.projectSrc ? "hover:cursor-pointer" : ""
              } hover:opacity-100`}
              src={work.src}
              alt={work.title}
              width={500}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
}
