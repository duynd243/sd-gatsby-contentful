import React from 'react';
import IntroBlock from './IntroBlock';

type Props = {
  data: readonly Queries.ContentfulIntro[];
};

function HighlightSection({ data }: Props) {
  return (
    <section
      id="services"
      className="px-[3rem] pb-[5.437rem] pt-[3.198rem] md:px-[9.38rem] md:pb-[17rem] md:pt-[10rem]"
    >
      <h1 className="break-words text-center text-h1 text-[#27292E]">
        High Quality Output, Awesome Service
      </h1>
      {/*Intro Blocks*/}
      <div className="mt-[3.75rem] flex flex-wrap justify-center gap-[2.19rem]">
        {data.map((intro) => (
          <IntroBlock key={intro.id} intro={intro} />
        ))}
      </div>
    </section>
  );
}

export default HighlightSection;
