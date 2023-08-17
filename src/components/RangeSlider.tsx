import React from 'react';
import * as Slider from '@radix-ui/react-slider';

type Props = {
  label: string;
} & React.ComponentProps<typeof Slider.Root>;

function RangeSlider({ label, ...props }: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-[1.125rem] font-[900] leading-[180%] text-white">{label}</label>
      <Slider.Root
        className="relative flex h-5 w-full touch-none select-none items-center"
        {...props}
      >
        <Slider.Track className="relative h-[0.875rem] grow rounded-full bg-white">
          <Slider.Range className="absolute h-full rounded-full bg-[#FF8049B0]" />
        </Slider.Track>
        <Slider.Thumb className="flex aspect-square w-[1.3125rem] items-center justify-center rounded-full bg-[#FF8049]">
          <div className="aspect-square w-[0.6875rem] rounded-full bg-white"></div>
        </Slider.Thumb>
      </Slider.Root>
    </div>
  );
}

export default RangeSlider;
