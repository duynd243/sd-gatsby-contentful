import './src/styles/global.css';
import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { Toaster } from 'sonner';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <React.Fragment>
      <Toaster position="top-center" visibleToasts={1} />
      {element}
    </React.Fragment>
  );
};
