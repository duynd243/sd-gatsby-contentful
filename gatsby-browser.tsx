import './src/styles/global.css';
import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" visibleToasts={1} />
        {element}
      </QueryClientProvider>
    </React.Fragment>
  );
};
