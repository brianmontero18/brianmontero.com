import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function FromLearnerToProfessional() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className='position-relative bg-white overflow-hidden'
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
          <div className='position-relative'>
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
                        href='from-learner-to-professional.html'
                      >
                        Services
                      </a>
                    </li>
                    <li className='nav-item p-6'>
                      <a
                        className='nav-link link-secondary p-0'
                        href='about.html'
                      >
                        About
                      </a>
                    </li>
                    <li className='nav-item p-6'>
                      <a className='nav-link link-secondary p-0' href='#'>
                        Blog
                      </a>
                    </li>
                    <li className='nav-item p-6'>
                      <a
                        className='nav-link link-secondary p-0'
                        href='contact.html'
                      >
                        Contact
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
                        data-nlok-ref-guid='3cd65625-ae93-4125-81c1-72f1421001b7'
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
          <div className='container'>
            <div className='pt-28 pb-28 position-relative'>
              <div className='row g-16'>
                <div className='col-12 col-md-6'>
                  <div className='mw-md-lg'>
                    <span className='mb-4 badge bg-success text-white text-uppercase shadow'>
                      Header
                    </span>
                    <h1
                      className='mb-6 font-heading fs-4'
                      style={{ letterSpacing: '-1px' }}
                    >
                      From Learner to Professional
                    </h1>
                    <p className='mb-8 fs-9 fw-medium text-secondary'>
                      Transforming Ambitions into Tech Careers: Empowerment
                      through Expert Guidance.
                    </p>
                    <div className='row g-4'>
                      <div className='col-12 col-md-auto'>
                        <a
                          className='btn btn-lg btn-success w-100 text-success-light shadow'
                          href='#'
                        >
                          Get Started
                        </a>
                      </div>
                      <div className='col-12 col-md-auto'>
                        <div className='bg-white rounded'>
                          <a
                            className='btn btn-lg btn-outline-light w-100 text-light-dark shadow'
                            href='#'
                          >
                            Sign Up
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='row justify-content-center'>
                    <div className='position-relative col-auto'>
                      <img
                        className='position-absolute top-0 start-0 mt-n12 ms-n12'
                        style={{ zIndex: 1 }}
                        src='flex-assets/elements/circle-orange.svg'
                        alt=''
                      />
                      <img
                        className='position-absolute bottom-0 end-0 me-n5 mb-n5'
                        style={{ zIndex: 1 }}
                        src='flex-assets/elements/dots-blue.svg'
                        alt=''
                      />
                      <img
                        className='position-relative img-fluid'
                        src='images/Brian-Montero-9.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-24 bg-white overflow-hidden'
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
          <div className='position-relative container' style={{ zIndex: 1 }}>
            <div className='mb-12 mw-4xl mx-auto text-center'>
              <span className='badge mb-4 bg-success-dark text-success text-uppercase shadow'>
                Features
              </span>
              <h2
                className='font-heading mb-4 fs-6'
                style={{ letterSpacing: '-1px' }}
              >
                Gain more insight into how people use your
              </h2>
              <p className='mb-0 fs-9 fw-medium text-secondary'>
                With our integrated CRM, project management, collaboration and
                invoicing capabilities, you can manage every aspect of your
                business in one secure platform.
              </p>
            </div>
            <div className='row align-items-center g-8'>
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='row g-20'>
                  <div className='col-12'>
                    <div className='mw-sm mx-auto text-center'>
                      <div
                        className='mb-6 d-flex justify-content-center align-items-center mx-auto text-white bg-success rounded'
                        style={{ width: 64, height: 64 }}
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_631_12694)'>
                            <path
                              d='M17 21.63H5C4.20435 21.63 3.44129 21.3139 2.87868 20.7513C2.31607 20.1887 2 19.4257 2 18.63V10.63C2 10.3648 1.89464 10.1104 1.70711 9.9229C1.51957 9.73536 1.26522 9.63 1 9.63C0.734784 9.63 0.48043 9.73536 0.292893 9.9229C0.105357 10.1104 0 10.3648 0 10.63L0 18.63C0 19.9561 0.526784 21.2279 1.46447 22.1655C2.40215 23.1032 3.67392 23.63 5 23.63H17C17.2652 23.63 17.5196 23.5246 17.7071 23.3371C17.8946 23.1496 18 22.8952 18 22.63C18 22.3648 17.8946 22.1104 17.7071 21.9229C17.5196 21.7354 17.2652 21.63 17 21.63ZM21 3.63H7C6.20435 3.63 5.44129 3.94608 4.87868 4.50868C4.31607 5.07129 4 5.83436 4 6.63V16.63C4 17.4257 4.31607 18.1887 4.87868 18.7513C5.44129 19.3139 6.20435 19.63 7 19.63H21C21.7956 19.63 22.5587 19.3139 23.1213 18.7513C23.6839 18.1887 24 17.4257 24 16.63V6.63C24 5.83436 23.6839 5.07129 23.1213 4.50868C22.5587 3.94608 21.7956 3.63 21 3.63V3.63ZM20.59 5.63L14.71 11.51C14.617 11.6037 14.5064 11.6781 14.3846 11.7289C14.2627 11.7797 14.132 11.8058 14 11.8058C13.868 11.8058 13.7373 11.7797 13.6154 11.7289C13.4936 11.6781 13.383 11.6037 13.29 11.51L7.41 5.63H20.59ZM22 16.63C22 16.8952 21.8946 17.1496 21.7071 17.3371C21.5196 17.5246 21.2652 17.63 21 17.63H7C6.73478 17.63 6.48043 17.5246 6.29289 17.3371C6.10536 17.1496 6 16.8952 6 16.63V7L11.88 12.88C12.4425 13.4418 13.205 13.7574 14 13.7574C14.795 13.7574 15.5575 13.4418 16.12 12.88L22 7V16.63Z'
                              fill='currentColor'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_631_12694'>
                              <rect
                                width={24}
                                height={24}
                                fill='currentColor'
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h3 className='font-heading fs-8 mb-4'>
                        Measure your performance
                      </h3>
                      <p className='mb-0 fw-medium text-secondary'>
                        Stay connected with your team and make quick decisions
                        wherever you are.
                      </p>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='mw-sm mx-auto text-center'>
                      <div
                        className='mb-6 d-flex justify-content-center align-items-center mx-auto text-white bg-success rounded'
                        style={{ width: 64, height: 64 }}
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5 18H9.24C9.37161 18.0008 9.50207 17.9755 9.62391 17.9258C9.74574 17.876 9.85656 17.8027 9.95 17.71L16.87 10.78L19.71 8C19.8037 7.90704 19.8781 7.79644 19.9289 7.67458C19.9797 7.55272 20.0058 7.42201 20.0058 7.29C20.0058 7.15799 19.9797 7.02728 19.9289 6.90542C19.8781 6.78356 19.8037 6.67296 19.71 6.58L15.47 2.29C15.377 2.19627 15.2664 2.12188 15.1446 2.07111C15.0227 2.02034 14.892 1.9942 14.76 1.9942C14.628 1.9942 14.4973 2.02034 14.3754 2.07111C14.2536 2.12188 14.143 2.19627 14.05 2.29L11.23 5.12L4.29 12.05C4.19732 12.1434 4.12399 12.2543 4.07423 12.3761C4.02446 12.4979 3.99924 12.6284 4 12.76V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18ZM14.76 4.41L17.59 7.24L16.17 8.66L13.34 5.83L14.76 4.41ZM6 13.17L11.93 7.24L14.76 10.07L8.83 16H6V13.17ZM21 20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='font-heading fs-8 mb-4'>
                        Build your website
                      </h3>
                      <p className='mb-0 fw-medium text-secondary'>
                        A tool that lets you build a dream website even if you
                        know nothing about web design or programming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <img
                      className='img-fluid'
                      src='flex-assets/images/features/work.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4'>
                <div className='row g-20'>
                  <div className='col-12 col-md-6 col-lg-12'>
                    <div className='mw-sm mx-auto text-center'>
                      <div
                        className='mb-6 d-flex justify-content-center align-items-center mx-auto text-white bg-success rounded'
                        style={{ width: 64, height: 64 }}
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21.71 7.29C21.617 7.19627 21.5064 7.12188 21.3846 7.07111C21.2627 7.02034 21.132 6.9942 21 6.9942C20.868 6.9942 20.7373 7.02034 20.6154 7.07111C20.4936 7.12188 20.383 7.19627 20.29 7.29L14 13.59L9.71 9.29C9.61704 9.19627 9.50644 9.12188 9.38458 9.07111C9.26272 9.02034 9.13201 8.9942 9 8.9942C8.86799 8.9942 8.73728 9.02034 8.61542 9.07111C8.49356 9.12188 8.38296 9.19627 8.29 9.29L2.29 15.29C2.19627 15.383 2.12188 15.4936 2.07111 15.6154C2.02034 15.7373 1.9942 15.868 1.9942 16C1.9942 16.132 2.02034 16.2627 2.07111 16.3846C2.12188 16.5064 2.19627 16.617 2.29 16.71C2.38296 16.8037 2.49356 16.8781 2.61542 16.9289C2.73728 16.9797 2.86799 17.0058 3 17.0058C3.13201 17.0058 3.26272 16.9797 3.38458 16.9289C3.50644 16.8781 3.61704 16.8037 3.71 16.71L9 11.41L13.29 15.71C13.383 15.8037 13.4936 15.8781 13.6154 15.9289C13.7373 15.9797 13.868 16.0058 14 16.0058C14.132 16.0058 14.2627 15.9797 14.3846 15.9289C14.5064 15.8781 14.617 15.8037 14.71 15.71L21.71 8.71C21.8037 8.61704 21.8781 8.50644 21.9289 8.38458C21.9797 8.26272 22.0058 8.13201 22.0058 8C22.0058 7.86799 21.9797 7.73728 21.9289 7.61542C21.8781 7.49356 21.8037 7.38296 21.71 7.29V7.29Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='font-heading fs-8 mb-4'>
                        Custom analytics
                      </h3>
                      <p className='mb-0 fw-medium text-secondary'>
                        Get a complete sales dashboard in the cloud. See
                        activity, revenue and social metrics all in one place.
                      </p>
                    </div>
                  </div>
                  <div className='col-12 col-md-6 col-lg-12'>
                    <div className='mw-sm mx-auto text-center'>
                      <div
                        className='mb-6 d-flex justify-content-center align-items-center mx-auto text-white bg-success rounded'
                        style={{ width: 64, height: 64 }}
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='font-heading fs-8 mb-4'>
                        Connect multiple apps
                      </h3>
                      <p className='mb-0 fw-medium text-secondary'>
                        The first business platform to bring together all of
                        your products from one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-20 bg-white overflow-hidden'
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
          <div className='position-relative container' style={{ zIndex: 1 }}>
            <div className='row align-items-xl-center g-16'>
              <div className='col-12 col-md-6'>
                <div className='row justify-content-center justify-content-md-start'>
                  <div className='col-auto'>
                    <div className='position-relative'>
                      <img
                        className='w-100'
                        src='flex-assets/images/how-it-works/ideas.png'
                        alt=''
                      />
                      <img
                        className='position-absolute top-0 end-0 mt-n8 me-n8'
                        src='flex-assets/elements/circle-orange.svg'
                        alt=''
                      />
                      <img
                        className='position-absolute bottom-0 start-0 mb-n8 ms-n10'
                        src='flex-assets/elements/dots-blue.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='mw-md-xl'>
                  <span className='badge mb-4 bg-success-dark text-success text-uppercase shadow'>
                    How it works
                  </span>
                  <h2
                    className='font-heading mb-12 fs-5'
                    style={{ letterSpacing: '-1px' }}
                  >
                    Gain more insight into how people use your
                  </h2>
                  <div className='row g-8'>
                    <div className='col-12 col-md-6'>
                      <div
                        className='mb-4 d-flex justify-content-center align-items-center fs-9 text-white fw-semibold bg-success rounded-pill'
                        style={{ width: 48, height: 48 }}
                      >
                        1
                      </div>
                      <h3 className='mb-2 font-heading fs-9'>
                        Custom analytics
                      </h3>
                      <p className='mb-0 text-secondary fw-medium'>
                        Get a complete sales dashboard in the cloud. See
                        activity, revenue and social metrics all in one place.
                      </p>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div
                        className='mb-4 d-flex justify-content-center align-items-center fs-9 text-white fw-semibold bg-success rounded-pill'
                        style={{ width: 48, height: 48 }}
                      >
                        2
                      </div>
                      <h3 className='mb-2 font-heading fs-9'>
                        Team Management
                      </h3>
                      <p className='mb-0 text-secondary fw-medium'>
                        Our calendar lets you know what is happening with
                        customer and projects so you are able to control
                        process.
                      </p>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div
                        className='mb-4 d-flex justify-content-center align-items-center fs-9 text-white fw-semibold bg-success rounded-pill'
                        style={{ width: 48, height: 48 }}
                      >
                        3
                      </div>
                      <h3 className='mb-2 font-heading fs-9'>Easy setup</h3>
                      <p className='mb-0 text-secondary fw-medium'>
                        End to End Business Platform, Sales Management,
                        Marketing Automation, Help Desk and many more
                      </p>
                    </div>
                    <div className='col-12 col-md-6'>
                      <div
                        className='mb-4 d-flex justify-content-center align-items-center fs-9 text-white fw-semibold bg-success rounded-pill'
                        style={{ width: 48, height: 48 }}
                      >
                        4
                      </div>
                      <h3 className='mb-2 font-heading fs-9'>
                        Build your website
                      </h3>
                      <p className='mb-0 text-secondary fw-medium'>
                        A tool that lets you build a dream website even if you
                        know nothing about web design or programming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-20 bg-white overflow-hidden'
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
          <div className='position-relative container' style={{ zIndex: 1 }}>
            <div className='mb-16 text-center'>
              <span className='badge mb-4 bg-success-dark text-success text-uppercase shadow'>
                Pricing
              </span>
              <h2
                className='font-heading mb-4 fs-5'
                style={{ letterSpacing: '-1px' }}
              >
                Flexible pricing plan for your startup
              </h2>
              <p className='mb-6 fs-9 fw-medium text-secondary'>
                Pricing that scales with your business immediately.
              </p>
              <div className='d-inline-flex shadow'>
                <a
                  className='d-inline-flex px-4 py-3 fs-12 fw-medium text-success bg-white border rounded-start'
                  href='#'
                >
                  Billed Monthly
                </a>
                <a
                  className='d-inline-flex px-4 py-3 fs-12 fw-medium text-secondary bg-light-light border rounded-end'
                  href='#'
                >
                  Billed Annually
                </a>
              </div>
            </div>
            <div className='row g-8'>
              <div className='col-12 col-md-6'>
                <div className='bg-light-light rounded shadow'>
                  <div className='border-bottom border-light'>
                    <div className='px-8 py-4'>
                      <div className='row justify-content-between align-items-center g-4'>
                        <div className='col-auto'>
                          <h3 className='mb-0 fs-7 fw-semibold'>Basic plan</h3>
                          <p className='mb-0 fw-medium text-secondary-light'>
                            For bigger teams
                          </p>
                        </div>
                        <div className='col-auto'>
                          <div className='d-flex'>
                            <div className='fs-7 fw-bold mt-1 pe-1'>$</div>
                            <div className='fs-4 fw-semibold'>
                              <span>99</span>
                              <span className='fs-11 text-secondary'>/mo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-bottom border-light'>
                    <div className='p-8'>
                      <ul className='mb-0 list-unstyled'>
                        <li className='mb-4 d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            Access to all features
                          </p>
                        </li>
                        <li className='mb-4 d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            Assisted onboarding support
                          </p>
                        </li>
                        <li className='mb-4 d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            CPM Overage: Unlimited
                          </p>
                        </li>
                        <li className='d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            Program reviews 1x a month
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='p-8'>
                    <a
                      className='btn btn-lg btn-success fs-10 py-4 w-100 text-success-light shadow'
                      href='#'
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='bg-light-light rounded shadow'>
                  <div className='border-bottom border-light'>
                    <div className='px-8 py-4'>
                      <div className='row justify-content-between align-items-center g-4'>
                        <div className='col-auto'>
                          <h3 className='mb-0 fs-7 fw-semibold'>Lifetime</h3>
                          <p className='mb-0 fw-medium text-secondary-light'>
                            Unlimited possibilities
                          </p>
                        </div>
                        <div className='col-auto'>
                          <div className='d-flex'>
                            <div className='fs-7 fw-bold mt-1 pe-1'>$</div>
                            <div className='fs-4 fw-semibold'>
                              <span>189</span>
                              <span className='fs-11 text-secondary'>/mo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-bottom border-light'>
                    <div className='p-8'>
                      <ul className='mb-0 list-unstyled'>
                        <li className='mb-4 d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            Access to all features
                          </p>
                        </li>
                        <li className='mb-4 d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            Assisted onboarding support
                          </p>
                        </li>
                        <li className='mb-4 d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            CPM Overage: Unlimited
                          </p>
                        </li>
                        <li className='d-flex align-items-start'>
                          <img
                            className='me-2'
                            src='flex-assets/elements/checkbox-green.svg'
                            alt=''
                          />
                          <p className='mb-0 fs-11 fw-medium text-secondary'>
                            Program reviews 1x a month
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='p-8'>
                    <a
                      className='btn btn-lg btn-success fs-10 py-4 w-100 text-success-light shadow'
                      href='#'
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-20 bg-white overflow-hidden'
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
          <div className='position-relative container' style={{ zIndex: 1 }}>
            <div className='text-center'>
              <span className='badge mb-4 bg-success-dark text-success text-uppercase shadow'>
                Quotes
              </span>
              <div className='position-relative mb-16 mw-md-5xl mx-auto'>
                <p
                  className='position-relative mb-0 font-heading fs-9 text-secondary'
                  style={{ zIndex: 1, letterSpacing: '-1px' }}
                  contentEditable='true'
                >
                  Since I started the program, Brian has been incredibly
                  attentive, offering valuable advice not only in technology but
                  also in navigating the professional aspects of software
                  development. The real-world projects, ongoing guidance, and
                  practical interview preparation have made this experience 100%
                  recommended. Brian not only enhances technical skills but also
                  facilitates a mindset shift towards efficient problem-solving.
                  A positive and transformative journey, especially for Bootcamp
                  students like me.
                </p>
                <img
                  className='position-absolute top-0 start-0 mt-n6 ms-n7'
                  src='flex-assets/elements/quote-top-green.svg'
                  alt=''
                />
                <img
                  className='position-absolute bottom-0 end-0 mb-n6 me-n7'
                  src='flex-assets/elements/quote-down-green.svg'
                  alt=''
                />
              </div>
              <img
                className='mb-6'
                src='flex-assets/images/testimonials/avatar.png'
                alt=''
              />
              <h3 className='mb-2 fs-8 fw-semibold text-light-dark'>
                Tulio Salvatierra
              </h3>
              <p className='mb-8 fs-10 text-secondary fw-medium'>
                Full Stack Developer Junior
              </p>
              <div className='d-inline-flex'>
                <a
                  className='bg-light rounded-pill'
                  href='#'
                  style={{ width: 12, height: 12 }}
                />
                <a
                  className='mx-3 bg-success rounded-pill'
                  href='#'
                  style={{ width: 12, height: 12 }}
                />
                <a
                  className='bg-light rounded-pill'
                  href='#'
                  style={{ width: 12, height: 12 }}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative pt-20 pb-32 bg-white overflow-hidden'
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
          <div className='container'>
            <div className='position-relative' style={{ zIndex: 10 }}>
              <div className='mb-16 mw-4xl mx-auto text-center'>
                <span className='mb-4 badge bg-success-dark text-uppercase shadow'>
                  Get Started
                </span>
                <h2
                  className='mb-4 fs-6 font-heading'
                  style={{ letterSpacing: '-1px' }}
                >
                  The fastest way from idea to live site. Period.
                </h2>
                <p className='mb-6 fs-9 fw-medium text-secondary'>
                  Flex is a Small SaaS Business. Flex isn’t a traditional
                  company. We believe a diverse team, approaches to work and
                  transparency are key to our success.
                </p>
                <div className='row justify-content-center'>
                  <div className='col col-md-auto'>
                    <a
                      className='btn btn-success w-100 px-7 py-4 fs-10 fw-medium text-success-light rounded shadow'
                      href='#'
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-auto'>
                  <div className='position-relative'>
                    <img
                      className='position-absolute top-0 start-0 mt-n14 ms-n14'
                      style={{ zIndex: 20 }}
                      src='flex-assets/elements/circle-orange.svg'
                      alt=''
                    />
                    <img
                      className='position-absolute bottom-0 end-0 me-n12 mb-n10'
                      src='flex-assets/elements/dots-blue.svg'
                      alt=''
                    />
                    <img
                      className='position-relative img-fluid'
                      style={{ zIndex: 10 }}
                      src='flex-assets/images/cta/work2.png'
                      alt=''
                    />
                  </div>
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

