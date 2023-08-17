import { Link } from 'gatsby';
import React from 'react';

const socialItems = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 320 512"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
];

const footerItems = [
  {
    heading: 'Location',
    items: ['America', 'Asia', 'Europe', 'Africa'],
  },
  {
    heading: 'Contact',
    items: ['About me', 'Teams', 'Profile', 'FAQ'],
  },
  {
    heading: 'Legals',
    items: ['Privacy', 'Disclaimer', 'Terms', 'Company'],
  },
];

function Footer() {
  return (
    <footer className="gap-10 p-[3rem] md:flex md:justify-between md:p-[9.38rem]">
      <div className="mb-10 md:mb-0">
        {/*Logo*/}
        <div className="flex items-center gap-[1.56rem]">
          <div className="flex aspect-square w-[4.1875rem] shrink-0 items-center justify-center rounded-full bg-[#16222D]">
            <span className="text-center text-[1.5625rem] font-[800] italic leading-[130%] text-white">
              K
            </span>
          </div>
          <div className="text-[1.58019rem] font-[700] leading-[130%] text-[#40434A]">
            Kinda
            <br />
            Finance
          </div>
        </div>
        {/*Description*/}
        <p className="mt-[1.62rem] text-[1.25rem] font-[400] leading-[180%] text-[#585C65]">
          2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
        </p>
        {/*Social*/}
        <div className="mt-[2.56rem] flex items-center gap-x-[1.77rem]">
          {socialItems.map((s) => (
            <a
              key={s.url}
              href={s.url}
              rel="noopener"
              target="_blank"
              className="social-icon-wrapper shrink-0"
            >
              {s.icon}
              <span className="sr-only">{s.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/*Footer Items*/}
      <div className="flex flex-wrap gap-x-[9.44rem] gap-y-[7rem]">
        {footerItems.map((f, fIdx) => (
          <div key={fIdx}>
            <h3 className="footer-heading">{f.heading}</h3>
            <ul className="mt-[1.88rem] space-y-6">
              {f.items.map((item, idx) => (
                <li key={idx} className="footer-item">
                  <Link to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
