import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

type Props = {
  data: Queries.ContentfulHeroData;
};

function HeroSection({ data }: Props) {
  return (
    <div className="relative z-0">
      <div className="px-[3rem] py-[5.216rem] md:px-[9.38rem] md:py-[16.31rem]">
        <h1 className="w-[34.125rem] max-w-full break-words text-hero-title text-white">
          {data.title}
        </h1>
        <p className="mt-6 w-[25.625rem] max-w-full text-hero-description text-white">
          {data.description}
        </p>

        <a href={data.buttonUrl ?? '#'} className="btn mt-[2.25rem] px-[3.25rem] py-[0.94rem]">
          {data.buttonText}
        </a>
      </div>
      {data.image?.gatsbyImageData ? (
        <div className="absolute bottom-0 right-0 -z-10 h-full w-full max-w-[70%]">
          <GatsbyImage
            image={data.image.gatsbyImageData}
            alt="Hero Image"
            className="h-full w-full"
          />
        </div>
      ) : (
        <>
          <div className="absolute bottom-0 right-0 -z-10  h-[calc(517px*0.6)] w-[calc(643px*0.6)] sm:h-[calc(517px*0.7)] sm:w-[calc(643px*0.7)] md:h-[517px] md:w-[643px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="643"
              height="517"
              viewBox="0 0 643 517"
              fill="none"
              className="h-full w-full"
            >
              <path
                d="M34.9999 517V155C34.9999 88.7258 88.7257 35 155 35H643"
                stroke="url(#paint0_linear_46_286)"
                strokeWidth="70"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_46_286"
                  x1="621.158"
                  y1="-3.84248"
                  x2="-15.7974"
                  y2="485.701"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3766" stopColor="#FFD583" />
                  <stop offset="1" stopColor="#FF7B01" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-[8rem] right-0 -z-10 h-[calc(654px*0.6)] w-[calc(817px*0.6)] sm:h-[calc(654px*0.7)] sm:w-[calc(817px*0.7)] md:h-[654px] md:w-[817px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="817"
              height="654"
              viewBox="0 0 817 654"
              fill="none"
              className="h-full w-full"
            >
              <path
                d="M34.9999 584H-0.00012207V654H34.9999V584ZM34.9999 654H354.918V584H34.9999V654ZM509.918 499V155H439.918V499H509.918ZM594.918 70H817V0H594.918V70ZM509.918 155C509.918 108.056 547.973 70 594.918 70V0C509.313 0 439.918 69.3959 439.918 155H509.918ZM354.918 654C440.522 654 509.918 584.604 509.918 499H439.918C439.918 545.944 401.862 584 354.918 584V654Z"
                fill="url(#paint0_linear_46_287)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_46_287"
                  x1="791.063"
                  y1="-12.0623"
                  x2="23.4426"
                  y2="566.162"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7B01" />
                  <stop offset="1" stopColor="#FFD583" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

export default HeroSection;
