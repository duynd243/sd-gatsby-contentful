import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '../libs/axiosClient';

export interface Breed {
  weight: Weight;
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface Cat {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: Breed[];
}

const sortOptions = [
  {
    label: 'Random',
    value: 'random',
  },
  {
    label: 'Descend',
    value: 'descend',
  },
  {
    label: 'Ascend',
    value: 'ascend',
  },
];
const Cats = () => {
  const [sort, setSort] = useState(sortOptions[0].value);
  const { data: cats, isLoading } = useQuery({
    queryKey: ['cats'],
    queryFn: async () => {
      const res = await axiosClient.get<Cat[]>('/images/search', {
        params: {
          limit: 9,
        },
      });
      return res.data;
    },
  });

  return (
    <main className="mx-auto w-full max-w-3xl">
      {/*<div className="grid gap-3 py-4 md:grid-cols-2">*/}
      {/*  <Select value={sort} onChange={setSort} data={sortOptions} />*/}
      {/*  <Select data={sortOptions} />*/}
      {/*  <Select data={sortOptions} />*/}
      {/*  <Select data={sortOptions} />*/}
      {/*</div>*/}

      <div className="grid grid-cols-3 gap-3">
        {cats?.map((cat) => (
          <div className="aspect-square border" key={cat.id}>
            <img src={cat.url} alt={cat.id} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
};
export default Cats;
