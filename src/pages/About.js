import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='pb-20 bg-white overflow-hidden'>
          <div className='position-relative' style={{ zIndex: 1 }}>
            <nav className='navbar navbar-dark navbar-expand-lg py-5 py-lg-1'>
              <div className='container-fluid'>
                <a className='navbar-brand position-absolute' href='#'>
                  <img
                    className='img-fluid mt-10'
                    src='images/Brian-Montero-2-svg-1706979281823.webp'
                    alt=''
                  />
                </a>
                <div className='collapse navbar-collapse justify-content-center '>
                  <ul className='navbar-nav'>
                    <li className='nav-item p-6'>
                      <a
                        className='nav-link link-secondary p-0'
                        href='program-1.html'
                      >
                        Services
                      </a>
                    </li>
                    <li className='nav-item p-6'>
                      <a className='nav-link link-secondary p-0' href='#'>
                        About
                      </a>
                    </li>
                    <li className='nav-item p-6'>
                      <a className='nav-link link-secondary p-0' href='#'>
                        Pricing
                      </a>
                    </li>
                    <li className='nav-item p-6'>
                      <a className='nav-link link-secondary p-0' href='#'>
                        Resources
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='d-none d-lg-block'>
                  <div className='row align-items-center g-6'>
                    <div className='col-auto'>
                      <a
                        className='fs-11 link-secondary fw-medium'
                        href='#'
                        data-nlok-ref-guid='575928cc-14ae-4150-a9e6-60c40375f69d'
                      >
                        Log In
                      </a>
                    </div>
                    <div className='col-auto'>
                      <a
                        className='btn btn-sm btn-success text-success-light shadow'
                        href='#'
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
                <div className='d-lg-none'>
                  <a className='btn navbar-burger p-0' href='#'>
                    <svg
                      width={35}
                      height={35}
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        className='text-white'
                        width={32}
                        height={32}
                        rx={6}
                        fill='currentColor'
                      />
                      <path
                        className='text-secondary'
                        d='M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
            <div
              className='d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs'
              style={{ zIndex: 9999 }}
            >
              <div
                className='navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark'
                style={{ opacity: '75%' }}
              />
              <nav className='position-relative h-100 w-100 d-flex flex-column justify-content-between p-6 bg-white overflow-auto'>
                <div className='d-flex align-items-center'>
                  <a className='me-auto h4 mb-0 text-decoration-none' href='#'>
                    <img
                      className='img-fluid'
                      src='flex-assets/logos/flex-dark-green.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close text-secondary' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='py-16'>
                  <ul className='nav nav-pills flex-column'>
                    <li className='nav-item'>
                      <a
                        className='nav-link link-secondary-dark bg-light-light'
                        href='#'
                      >
                        Product
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link link-secondary' href='#'>
                        Features
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link link-secondary' href='#'>
                        Pricing
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link link-secondary' href='#'>
                        Resources
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='row align-items-center g-6'>
                  <div className='col-12'>
                    <a
                      className='link-secondary fs-11 d-block w-100 text-center fw-medium'
                      href='#'
                    >
                      Log In
                    </a>
                  </div>
                  <div className='col-12'>
                    <a
                      className='btn btn-sm btn-success w-100 text-success-light shadow'
                      href='#'
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='position-relative pt-20 pb-12'>
            <div
              className='position-absolute top-0 start-0 h-100 w-100'
              style={{
                background:
                  'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
              }}
            />
            <div className='position-relative container' style={{ zIndex: 1 }}>
              <div className='row align-items-center g-8'>
                <div className='col-12 col-md-6'>
                  <img
                    className='img-fluid'
                    src='flex-assets/images/blog-content/content-square.png'
                    alt=''
                  />
                </div>
                <div className='col-12 col-md-6'>
                  <div className='mw-md-2xl'>
                    <div className='mb-6'>
                      <span className='badge bg-success-dark text-success text-uppercase shadow'>
                        Technology
                      </span>
                    </div>
                    <span className='mb-6 d-inline-block text-success fw-medium'>
                      John Doe • 19 Jan 2022
                    </span>
                    <h2
                      className='font-heading mb-4 fs-5'
                      style={{ letterSpacing: '-1px' }}
                    >
                      How to collaborate better with your Development team?
                    </h2>
                    <p className='mb-12 fs-9 fw-medium text-secondary'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='row align-items-center g-4'>
                      <div className='col-auto'>
                        <img src='flex-assets/images/blog/avatar.png' alt='' />
                      </div>
                      <div className='col-auto'>
                        <h4 className='font-heading text-light-dark fs-10 mb-0'>
                          John Doe
                        </h4>
                        <p className='mb-0 fs-10 text-secondary'>
                          12 October 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row g-8'>
              <div className='col-12 col-md-3'>
                <ul className='mb-8 pb-6 nav nav-pills flex-column border-bottom border-light'>
                  <li className='nav-item active mb-2'>
                    <a
                      className='nav-link py-3 px-4 fw-semibold text-secondary-light link-secondary-light'
                      href='#'
                    >
                      Introduction
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a
                      className='nav-link py-3 px-4 fw-semibold text-secondary-light link-secondary-light'
                      href='#'
                    >
                      Header 1
                    </a>
                  </li>
                  <li className='nav-item mb-2'>
                    <a
                      className='nav-link py-3 px-4 fw-semibold text-secondary-light link-secondary-light'
                      href='#'
                    >
                      Header 1
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link py-3 px-4 fw-semibold text-secondary-light link-secondary-light'
                      href='#'
                    >
                      Summary
                    </a>
                  </li>
                </ul>
                <div className='row g-2'>
                  <div className='col-auto me-2'>
                    <a
                      className='btn btn-lg btn-outline-light fs-12 px-4 py-2 text-secondary shadow'
                      href='#'
                    >
                      <svg
                        className='me-1'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15 15.8333H5C4.33696 15.8333 3.70108 15.5699 3.23224 15.1011C2.76339 14.6323 2.5 13.9964 2.5 13.3333V6.66667C2.5 6.44565 2.41221 6.23369 2.25592 6.07741C2.09964 5.92113 1.88768 5.83333 1.66667 5.83333C1.44566 5.83333 1.23369 5.92113 1.07741 6.07741C0.921133 6.23369 0.833336 6.44565 0.833336 6.66667V13.3333C0.833336 14.4384 1.27232 15.4982 2.05372 16.2796C2.44063 16.6665 2.89996 16.9734 3.40549 17.1828C3.91101 17.3922 4.45283 17.5 5 17.5H15C15.221 17.5 15.433 17.4122 15.5893 17.2559C15.7455 17.0996 15.8333 16.8877 15.8333 16.6667C15.8333 16.4457 15.7455 16.2337 15.5893 16.0774C15.433 15.9211 15.221 15.8333 15 15.8333ZM19.1667 8.28333C19.158 8.20678 19.1412 8.13136 19.1167 8.05833V7.98333C19.0766 7.89765 19.0232 7.81889 18.9583 7.75V7.75L13.9583 2.75C13.8894 2.68518 13.8107 2.63173 13.725 2.59167H13.65L13.3833 2.5H6.66667C6.00363 2.5 5.36774 2.76339 4.8989 3.23223C4.43006 3.70107 4.16667 4.33696 4.16667 5V11.6667C4.16667 12.3297 4.43006 12.9656 4.8989 13.4344C5.36774 13.9033 6.00363 14.1667 6.66667 14.1667H16.6667C17.3297 14.1667 17.9656 13.9033 18.4344 13.4344C18.9033 12.9656 19.1667 12.3297 19.1667 11.6667V8.33333C19.1667 8.33333 19.1667 8.33333 19.1667 8.28333ZM14.1667 5.34167L16.325 7.5H15C14.779 7.5 14.567 7.4122 14.4107 7.25592C14.2545 7.09964 14.1667 6.88768 14.1667 6.66667V5.34167ZM17.5 11.6667C17.5 11.8877 17.4122 12.0996 17.2559 12.2559C17.0996 12.4122 16.8877 12.5 16.6667 12.5H6.66667C6.44565 12.5 6.23369 12.4122 6.07741 12.2559C5.92113 12.0996 5.83334 11.8877 5.83334 11.6667V5C5.83334 4.77899 5.92113 4.56702 6.07741 4.41074C6.23369 4.25446 6.44565 4.16667 6.66667 4.16667H12.5V6.66667C12.5 7.32971 12.7634 7.96559 13.2322 8.43443C13.7011 8.90327 14.337 9.16667 15 9.16667H17.5V11.6667Z'
                          fill='#BBC3CF'
                        />
                      </svg>
                      <span>Copy Link</span>
                    </a>
                  </div>
                  <div className='col-auto'>
                    <a
                      className='btn btn-lg btn-outline-light fs-12 p-2 shadow'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12.6 4.43332H14.1667V1.78332C13.4081 1.70444 12.646 1.6655 11.8833 1.66665C9.61667 1.66665 8.06667 3.04998 8.06667 5.58332V7.76665H5.50833V10.7333H8.06667V18.3333H11.1333V10.7333H13.6833L14.0667 7.76665H11.1333V5.87498C11.1333 4.99998 11.3667 4.43332 12.6 4.43332Z'
                          fill='#556987'
                        />
                      </svg>
                    </a>
                  </div>
                  <div className='col-auto'>
                    <a
                      className='btn btn-lg btn-outline-light fs-12 p-2 shadow'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M18.3333 4.83339C17.7069 5.10513 17.0445 5.28477 16.3667 5.36672C17.0818 4.93949 17.6177 4.26737 17.875 3.47505C17.203 3.87511 16.4673 4.15697 15.7 4.30839C15.1871 3.7522 14.5041 3.38197 13.7582 3.25576C13.0122 3.12956 12.2455 3.25452 11.5782 3.61104C10.9109 3.96757 10.3808 4.5355 10.071 5.22575C9.76129 5.916 9.68941 6.68954 9.86667 7.42505C8.50786 7.35632 7.1787 7.00251 5.96555 6.3866C4.75239 5.77069 3.68237 4.90646 2.825 3.85005C2.52428 4.37519 2.36627 4.9699 2.36667 5.57505C2.3656 6.13704 2.50352 6.69057 2.76813 7.18636C3.03275 7.68215 3.41585 8.10481 3.88333 8.41672C3.33998 8.40194 2.80824 8.25613 2.33333 7.99172V8.03339C2.33741 8.82079 2.61333 9.58263 3.11443 10.19C3.61553 10.7974 4.31105 11.2131 5.08333 11.3667C4.78605 11.4572 4.4774 11.5049 4.16667 11.5084C3.95158 11.5059 3.73702 11.4864 3.525 11.4501C3.74493 12.1274 4.17052 12.7193 4.74256 13.1435C5.31461 13.5677 6.00465 13.803 6.71667 13.8167C5.51434 14.7628 4.0299 15.2791 2.5 15.2834C2.22145 15.2843 1.94311 15.2676 1.66667 15.2334C3.22869 16.2419 5.04901 16.7773 6.90833 16.7751C8.19141 16.7884 9.46428 16.5459 10.6526 16.0618C11.8409 15.5777 12.9209 14.8616 13.8293 13.9555C14.7378 13.0493 15.4566 11.9712 15.9438 10.7841C16.431 9.59707 16.6767 8.32483 16.6667 7.04172C16.6667 6.90005 16.6667 6.75005 16.6667 6.60005C17.3206 6.11239 17.8846 5.51457 18.3333 4.83339V4.83339Z'
                          fill='#556987'
                        />
                      </svg>
                    </a>
                  </div>
                  <div className='col-auto'>
                    <a
                      className='btn btn-lg btn-outline-light fs-12 p-2 shadow'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M14.45 4.54996C14.2522 4.54996 14.0589 4.60861 13.8944 4.71849C13.73 4.82837 13.6018 4.98455 13.5261 5.16728C13.4504 5.35 13.4306 5.55107 13.4692 5.74505C13.5078 5.93903 13.603 6.11721 13.7429 6.25707C13.8827 6.39692 14.0609 6.49216 14.2549 6.53074C14.4489 6.56933 14.65 6.54953 14.8327 6.47384C15.0154 6.39815 15.1716 6.26998 15.2815 6.10553C15.3913 5.94108 15.45 5.74774 15.45 5.54996C15.45 5.28474 15.3446 5.03039 15.1571 4.84285C14.9696 4.65532 14.7152 4.54996 14.45 4.54996V4.54996ZM18.2833 6.56663C18.2671 5.87521 18.1376 5.19113 17.9 4.54163C17.6881 3.9859 17.3583 3.48269 16.9333 3.06663C16.5207 2.63948 16.0163 2.31177 15.4583 2.10829C14.8105 1.86343 14.1257 1.73097 13.4333 1.71663C12.55 1.66663 12.2667 1.66663 10 1.66663C7.73333 1.66663 7.45 1.66663 6.56666 1.71663C5.87429 1.73097 5.18945 1.86343 4.54166 2.10829C3.98473 2.31383 3.48078 2.64126 3.06666 3.06663C2.63952 3.47927 2.31181 3.98366 2.10833 4.54163C1.86346 5.18941 1.73101 5.87425 1.71666 6.56663C1.66666 7.44996 1.66666 7.73329 1.66666 9.99996C1.66666 12.2666 1.66666 12.55 1.71666 13.4333C1.73101 14.1257 1.86346 14.8105 2.10833 15.4583C2.31181 16.0163 2.63952 16.5206 3.06666 16.9333C3.48078 17.3587 3.98473 17.6861 4.54166 17.8916C5.18945 18.1365 5.87429 18.269 6.56666 18.2833C7.45 18.3333 7.73333 18.3333 10 18.3333C12.2667 18.3333 12.55 18.3333 13.4333 18.2833C14.1257 18.269 14.8105 18.1365 15.4583 17.8916C16.0163 17.6881 16.5207 17.3604 16.9333 16.9333C17.3602 16.5188 17.6903 16.0151 17.9 15.4583C18.1376 14.8088 18.2671 14.1247 18.2833 13.4333C18.2833 12.55 18.3333 12.2666 18.3333 9.99996C18.3333 7.73329 18.3333 7.44996 18.2833 6.56663V6.56663ZM16.7833 13.3333C16.7773 13.8623 16.6815 14.3864 16.5 14.8833C16.3669 15.246 16.1532 15.5736 15.875 15.8416C15.6047 16.117 15.2777 16.3303 14.9167 16.4666C14.4197 16.6481 13.8956 16.7439 13.3667 16.75C12.5333 16.7916 12.225 16.8 10.0333 16.8C7.84166 16.8 7.53333 16.8 6.7 16.75C6.15074 16.7602 5.60383 16.6757 5.08333 16.5C4.73815 16.3567 4.42613 16.1439 4.16666 15.875C3.89007 15.6072 3.67903 15.2793 3.55 14.9166C3.34654 14.4126 3.2337 13.8766 3.21666 13.3333C3.21666 12.5 3.16666 12.1916 3.16666 9.99996C3.16666 7.80829 3.16666 7.49996 3.21666 6.66663C3.2204 6.12584 3.31912 5.58991 3.50833 5.08329C3.65504 4.73155 3.88022 4.41801 4.16666 4.16663C4.41984 3.8801 4.73274 3.65254 5.08333 3.49996C5.59129 3.31666 6.12666 3.22086 6.66666 3.21663C7.5 3.21663 7.80833 3.16663 10 3.16663C12.1917 3.16663 12.5 3.16663 13.3333 3.21663C13.8623 3.22269 14.3864 3.3185 14.8833 3.49996C15.262 3.6405 15.6019 3.869 15.875 4.16663C16.1481 4.42261 16.3615 4.73557 16.5 5.08329C16.6852 5.59074 16.7811 6.12644 16.7833 6.66663C16.825 7.49996 16.8333 7.80829 16.8333 9.99996C16.8333 12.1916 16.825 12.5 16.7833 13.3333ZM10 5.72496C9.15484 5.72661 8.32913 5.97873 7.62721 6.44947C6.92529 6.92022 6.37865 7.58846 6.05636 8.36975C5.73407 9.15105 5.6506 10.0103 5.81649 10.8391C5.98238 11.6678 6.39019 12.4287 6.98839 13.0258C7.58659 13.6228 8.34834 14.0291 9.17738 14.1934C10.0064 14.3577 10.8656 14.2725 11.6462 13.9487C12.4269 13.6249 13.0941 13.077 13.5634 12.3742C14.0328 11.6713 14.2833 10.8451 14.2833 9.99996C14.2844 9.43755 14.1743 8.88047 13.9594 8.36076C13.7444 7.84105 13.4288 7.36897 13.0307 6.97167C12.6326 6.57437 12.16 6.25969 11.6398 6.04573C11.1197 5.83178 10.5624 5.72276 10 5.72496V5.72496ZM10 12.775C9.45115 12.775 8.91464 12.6122 8.45829 12.3073C8.00194 12.0024 7.64627 11.569 7.43623 11.0619C7.2262 10.5548 7.17124 9.99688 7.27832 9.45858C7.38539 8.92029 7.64969 8.42583 8.03778 8.03774C8.42587 7.64965 8.92033 7.38535 9.45862 7.27828C9.99692 7.17121 10.5549 7.22616 11.0619 7.43619C11.569 7.64623 12.0024 8.00191 12.3073 8.45825C12.6122 8.9146 12.775 9.45112 12.775 9.99996C12.775 10.3644 12.7032 10.7252 12.5638 11.0619C12.4243 11.3986 12.2199 11.7045 11.9622 11.9622C11.7045 12.2199 11.3986 12.4243 11.0619 12.5637C10.7253 12.7032 10.3644 12.775 10 12.775V12.775Z'
                          fill='#556987'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-9'>
                <div className='mw-md-2xl mx-auto'>
                  <p className='pb-10 mb-8 fs-9 text-secondary fw-medium border-bottom border-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ullamcorper mattis lorem non. Ultrices praesent amet
                    ipsum justo massa. Eu dolor aliquet risus gravida nunc at
                    feugiat consequat purus. Non massa enim vitae duis mattis.
                    Vel in ultricies vel fringilla.
                  </p>
                  <h3 className='mb-4 font-heading fs-7 text-light-dark fw-semibold'>
                    Header 1
                  </h3>
                  <p className='mb-6 fs-10 text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ullamcorper mattis lorem non. Ultrices praesent amet
                    ipsum justo massa. Eu dolor aliquet risus gravida nunc at
                    feugiat consequat purus. Non massa enim vitae duis mattis.
                    Vel in ultricies vel fringilla.
                  </p>
                  <div className='mb-6 row g-6'>
                    <div className='col-auto'>
                      <div
                        className='bg-success h-100 rounded-pill'
                        style={{ width: 2 }}
                      />
                    </div>
                    <div className='col'>
                      <div className='py-7'>
                        <p className='mb-4 fs-8 text-light-dark fw-medium'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec ullamcorper mattis lorem non. Ultrices
                          praesent amet ipsum justo massa. Eu dolor aliquet
                          risus gravida nunc at feugiat consequat purus.
                        </p>
                        <p className='mb-0 fs-10 text-secondary-light fw-medium'>
                          — John Doe, CEO &amp; Founder
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className='mb-6 fs-10 text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ullamcorper mattis lorem non. Ultrices praesent amet
                    ipsum justo massa. Eu dolor aliquet risus gravida nunc at
                    feugiat consequat purus. Non massa enim vitae duis mattis.
                    Vel in ultricies vel fringilla.
                  </p>
                  <img
                    className='mb-4 img-fluid w-100'
                    src='flex-assets/images/blog-content/content-middle.png'
                    alt=''
                  />
                  <p className='mb-8 fs-10 text-secondary-light fw-medium'>
                    <span>Non massa enim vitae duis mattis. Vel in</span>
                    <u>
                      <a className='link-secondary-light' href='#'>
                        ultricies
                      </a>
                    </u>
                    <span>vel fringilla.</span>
                  </p>
                  <h3 className='mb-4 font-heading fs-7 text-light-dark fw-semibold'>
                    Header 1
                  </h3>
                  <p className='mb-16 fs-10 text-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ullamcorper mattis lorem non. Ultrices praesent amet
                    ipsum justo massa. Eu dolor aliquet risus gravida nunc at
                    feugiat consequat purus. Non massa enim vitae duis mattis.
                    Vel in ultricies vel fringilla.
                  </p>
                  <p className='mb-6 fs-10 text-secondary'>
                    Sagittis et eu at elementum, quis in. Proin praesent
                    volutpat egestas sociis sit lorem nunc nunc sit. Eget diam
                    curabitur mi ac. Auctor rutrum lacus malesuada massa ornare
                    et. Vulputate consectetur ac ultrices at diam dui eget
                    fringilla tincidunt. Arcu sit dignissim massa erat cursus
                    vulputate gravida id. Sed quis auctor vulputate hac
                    elementum gravida cursus dis.
                  </p>
                  <ol className='list-unstyled px-4 mb-16'>
                    <li className='fs-10 text-secondary'>
                      1. Lectus id duis vitae porttitor enim gravida morbi.
                    </li>
                    <li className='fs-10 text-secondary'>
                      2. Eu turpis posuere semper feugiat volutpat elit,
                      ultrices suspendisse. Auctor vel in vitae placerat.
                    </li>
                    <li className='fs-10 text-secondary'>
                      3. Suspendisse maecenas ac donec scelerisque diam sed est
                      duis purus.
                    </li>
                  </ol>
                  <p className='mb-0 fs-10 text-secondary'>
                    <span>
                      Vestibulum placerat magna nulla, sit amet venenatis sapien
                      consequat ut. Cras pulvinar, lorem tristique pharetra
                      finibus, dui erat finibus orci, a vehicula arcu sapien id
                      metus. Quisque quis lorem a sem porttitor feugiat. Etiam
                      quis congue est. Donec fermentum ac libero a pretium.
                      Nulla nisl sem, euismod ut eros vitae, egestas scelerisque
                      enim.
                    </span>
                    <u>
                      <a className='link-success' href='#'>
                        Vivamus id pharetra massa.
                      </a>
                    </u>
                    <span>
                      Nulla aliquet erat elit, a gravida dui efficitur vel. Sed
                      pulvinar diam sed neque ullamcorper semper. Nulla
                      elementum arcu lacus, quis porta nisl posuere varius.
                      Quisque tempus libero sed urna posuere hendrerit.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative pt-20 bg-white overflow-hidden'
          style={{
            backgroundImage: 'url("flex-assets/elements/pattern-light.png")',
          }}
        >
          <div
            className='position-absolute top-0 start-0 h-100 w-100'
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
            }}
          />
          <div
            className='position-relative container pb-12'
            style={{ zIndex: 1 }}
          >
            <div className='row g-16'>
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='mw-md-xs'>
                  <div className='d-flex mb-4'>
                    <a href='#'>
                      <img
                        className='img-fluid'
                        src='images/Brian-Montero-2.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <p className='fs-10 fw-medium text-secondary'>
                    Code Your Path to Success with Green Code Mentorship.
                  </p>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-2'>
                <div className='mw-md-xs'>
                  <h3 className='font-heading mb-5 fs-10'>Services</h3>
                  <ul className='nav flex-column'>
                    <li className='nav-item mb-4'>
                      <a className='nav-link p-0 fs-11 link-secondary' href='#'>
                        From Learner To Professional
                      </a>
                    </li>
                    <li className='nav-item mb-4'></li>
                    <li className='nav-item mb-4'></li>
                    <li className='nav-item mb-4'></li>
                    <li className='nav-item'></li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-2'>
                <div className='mw-md-xs'>
                  <h3 className='font-heading mb-5 fs-10'>Remaining</h3>
                  <ul className='nav flex-column'>
                    <li className='nav-item mb-4'>
                      <a className='nav-link p-0 fs-11 link-secondary' href='#'>
                        About
                      </a>
                    </li>
                    <li className='nav-item mb-4'>
                      <a className='nav-link p-0 fs-11 link-secondary' href='#'>
                        Blog
                      </a>
                    </li>
                    <li className='nav-item mb-4'>
                      <a className='nav-link p-0 fs-11 link-secondary' href='#'>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='mw-md-sm'>
                  <h3 className='font-heading mb-5 fs-10'>Newsletter</h3>
                  <div className='row g-4 justify-content-center'>
                    <div className='col'>
                      <div className='form-group'>
                        <input
                          className='form-control text-secondary-dark p-3 shadow'
                          id='footerInput8-1'
                          type='email'
                          aria-describedby='emailHelp'
                          defaultValue='support@shuffle.dev'
                          placeholder='Enter email'
                          data-nlok-ref-guid='81f1c47b-107c-4274-ab42-063597a37e7a'
                          autoComplete='off'
                        />
                        <div
                          id='norton-idsafe-field-styling-divId'
                          style={{
                            height: 24,
                            maxWidth: 24,
                            verticalAlign: 'top',
                            position: 'absolute',
                            top: '117.59203147888184px',
                            left: '1157.9383682743196px',
                            cursor: 'pointer',
                            resize: 'both',
                            zIndex: 2147483646,
                          }}
                        >
                          <img
                            id='norton-idsafe-field-logo-imgId'
                            src='chrome-extension://admmjipmmciaobhojoghlmleefbicajg/images/npw-badge-icon-locked.svg'
                            style={{ height: 24, width: 24, display: 'block' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-lg-auto'>
                      <button
                        className='btn btn-lg btn-success fs-11 w-100 py-3 px-4 h-100 shadow'
                        type='submit'
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='position-relative border-bottom border-light'
            style={{ zIndex: 1 }}
          />
          <div className='position-relative container' style={{ zIndex: 1 }}>
            <p className='mb-0 pt-10 pb-16 fs-12 fw-medium text-center text-secondary-light'>
              © 2024 Green Code. All rights reserved.
            </p>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

