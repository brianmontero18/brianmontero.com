import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Contact() {
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
                <a className='navbar-brand' href='#'>
                  <img
                    className='img-fluid'
                    src='flex-assets/logos/flex-dark-green.svg'
                    alt=''
                  />
                </a>
                <div className='collapse navbar-collapse justify-content-center'>
                  <ul className='navbar-nav'>
                    <li className='nav-item p-6'>
                      <a className='nav-link link-secondary p-0' href='#'>
                        Product
                      </a>
                    </li>
                    <li className='nav-item p-6'>
                      <a className='nav-link link-secondary p-0' href='#'>
                        Features
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
                      <a className='fs-11 link-secondary fw-medium' href='#'>
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
                        className='text-light-light'
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
            <div className='pt-16 pb-20 position-relative'>
              <div className='row align-items-center g-16'>
                <div className='col-12 col-md-6'>
                  <div className='mw-md-lg'>
                    <h1
                      className='mb-6 font-heading fs-4'
                      style={{ letterSpacing: '-1px' }}
                    >
                      Let’s stay connected
                    </h1>
                    <p className='mb-8 fs-9 fw-medium text-secondary'>
                      It's never been easier to get in touch with Flex. Call us,
                      use our live chat widget or email and we'll get back to
                      you as soon as possible!
                    </p>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='mw-md-xl'>
                        <div className='row g-8'>
                          <div className='col-12 col-md-6'>
                            <svg
                              className='mb-6 text-success'
                              width={48}
                              height={48}
                              viewBox='0 0 48 48'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <circle
                                cx={24}
                                cy={24}
                                r={24}
                                fill='currentColor'
                              />
                              <path
                                d='M32.21 20.82L26 14.78C25.474 14.2799 24.7759 14.001 24.05 14.001C23.3241 14.001 22.626 14.2799 22.1 14.78L15.89 20.78C15.6141 21.0209 15.3922 21.3173 15.2388 21.6499C15.0854 21.9825 15.004 22.3438 15 22.71V31.29C15.0105 32.0176 15.309 32.7114 15.8301 33.2193C16.3512 33.7273 17.0524 34.008 17.78 34H30.22C30.9476 34.008 31.6488 33.7273 32.1699 33.2193C32.691 32.7114 32.9895 32.0176 33 31.29V22.71C32.9992 22.3585 32.929 22.0106 32.7935 21.6862C32.6579 21.3619 32.4596 21.0675 32.21 20.82ZM23.44 16.22C23.593 16.0802 23.7927 16.0026 24 16.0026C24.2073 16.0026 24.407 16.0802 24.56 16.22L30 21.5L24.53 26.78C24.377 26.9198 24.1773 26.9974 23.97 26.9974C23.7627 26.9974 23.563 26.9198 23.41 26.78L18 21.5L23.44 16.22ZM31 31.29C30.9871 31.4863 30.8987 31.6699 30.7532 31.8023C30.6078 31.9347 30.4166 32.0056 30.22 32H17.78C17.5834 32.0056 17.3922 31.9347 17.2468 31.8023C17.1013 31.6699 17.0129 31.4863 17 31.29V23.35L21.05 27.25L19.39 28.85C19.2037 29.0374 19.0992 29.2908 19.0992 29.555C19.0992 29.8192 19.2037 30.0726 19.39 30.26C19.4829 30.3575 19.5946 30.4352 19.7184 30.4885C19.8421 30.5418 19.9753 30.5695 20.11 30.57C20.3675 30.569 20.6146 30.4687 20.8 30.29L22.57 28.59C23.0096 28.8586 23.5148 29.0008 24.03 29.0008C24.5452 29.0008 25.0504 28.8586 25.49 28.59L27.26 30.29C27.4454 30.4687 27.6925 30.569 27.95 30.57C28.0847 30.5695 28.2179 30.5418 28.3416 30.4885C28.4654 30.4352 28.5771 30.3575 28.67 30.26C28.8563 30.0726 28.9608 29.8192 28.9608 29.555C28.9608 29.2908 28.8563 29.0374 28.67 28.85L27 27.25L31 23.35V31.29Z'
                                fill='#F0FDF4'
                              />
                            </svg>
                            <h2 className='mb-2 font-heading fs-7'>Email</h2>
                            <p className='mb-0 fs-9 text-secondary fw-medium'>
                              contact@flex.co
                            </p>
                          </div>
                          <div className='col-12 col-md-6'>
                            <svg
                              className='mb-6 text-success'
                              width={48}
                              height={48}
                              viewBox='0 0 48 48'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <circle
                                cx={24}
                                cy={24}
                                r={24}
                                fill='currentColor'
                              />
                              <path
                                d='M33 14H15C14.7348 14 14.4804 14.1054 14.2929 14.2929C14.1054 14.4804 14 14.7348 14 15V33C14 33.2652 14.1054 33.5196 14.2929 33.7071C14.4804 33.8946 14.7348 34 15 34H33C33.2652 34 33.5196 33.8946 33.7071 33.7071C33.8946 33.5196 34 33.2652 34 33V15C34 14.7348 33.8946 14.4804 33.7071 14.2929C33.5196 14.1054 33.2652 14 33 14V14ZM20 32H16V28H20V32ZM20 26H16V22H20V26ZM20 20H16V16H20V20ZM26 32H22V28H26V32ZM26 26H22V22H26V26ZM26 20H22V16H26V20ZM32 32H28V28H32V32ZM32 26H28V22H32V26ZM32 20H28V16H32V20Z'
                                fill='#F0FDF4'
                              />
                            </svg>
                            <h2 className='mb-8 font-heading fs-7'>Socials</h2>
                            <div className='row'>
                              <div className='col-auto'>
                                <a
                                  className='text-success link-success'
                                  href='#'
                                >
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      clipRule='evenodd'
                                      d='M13.6348 20.7272V12.766H16.3582L16.7668 9.66243H13.6348V7.68126C13.6348 6.78299 13.8881 6.17083 15.2029 6.17083L16.877 6.17015V3.39421C16.5875 3.35731 15.5937 3.27271 14.437 3.27271C12.0216 3.27271 10.368 4.71878 10.368 7.37389V9.66243H7.63635V12.766H10.368V20.7272H13.6348Z'
                                      fill='currentColor'
                                    />
                                    <mask
                                      id='mask0_1201_15606'
                                      style={{ maskType: 'alpha' }}
                                      maskUnits='userSpaceOnUse'
                                      x={7}
                                      y={3}
                                      width={10}
                                      height={18}
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M13.6348 20.7272V12.766H16.3582L16.7668 9.66243H13.6348V7.68126C13.6348 6.78299 13.8881 6.17083 15.2029 6.17083L16.877 6.17015V3.39421C16.5875 3.35731 15.5937 3.27271 14.437 3.27271C12.0216 3.27271 10.368 4.71878 10.368 7.37389V9.66243H7.63635V12.766H10.368V20.7272H13.6348Z'
                                        fill='white'
                                      />
                                    </mask>
                                    <g mask='url(#mask0_1201_15606)' />
                                  </svg>
                                </a>
                              </div>
                              <div className='col-auto'>
                                <a
                                  className='text-success link-success'
                                  href='#'
                                >
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      clipRule='evenodd'
                                      d='M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z'
                                      fill='currentColor'
                                    />
                                    <mask
                                      id='mask0_1201_15607'
                                      style={{ maskType: 'alpha' }}
                                      maskUnits='userSpaceOnUse'
                                      x={3}
                                      y={4}
                                      width={19}
                                      height={16}
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z'
                                        fill='white'
                                      />
                                    </mask>
                                    <g mask='url(#mask0_1201_15607)' />
                                  </svg>
                                </a>
                              </div>
                              <div className='col-auto'>
                                <a
                                  className='text-success link-success'
                                  href='#'
                                >
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      clipRule='evenodd'
                                      d='M7.60057 2.18176H16.3991C19.3872 2.18176 21.8182 4.61276 21.8181 7.60069V16.3992C21.8181 19.3871 19.3872 21.8181 16.3991 21.8181H7.60057C4.61264 21.8181 2.18176 19.3872 2.18176 16.3992V7.60069C2.18176 4.61276 4.61264 2.18176 7.60057 2.18176ZM16.3992 20.0759C18.4266 20.0759 20.076 18.4266 20.076 16.3992H20.0759V7.60069C20.0759 5.57343 18.4265 3.924 16.3991 3.924H7.60057C5.57331 3.924 3.924 5.57343 3.924 7.60069V16.3992C3.924 18.4266 5.57331 20.076 7.60057 20.0759H16.3992ZM6.85709 12.0001C6.85709 9.16418 9.16413 6.85709 11.9999 6.85709C14.8358 6.85709 17.1428 9.16418 17.1428 12.0001C17.1428 14.8358 14.8358 17.1428 11.9999 17.1428C9.16413 17.1428 6.85709 14.8358 6.85709 12.0001ZM8.62792 11.9999C8.62792 13.8592 10.1407 15.3718 11.9999 15.3718C13.8592 15.3718 15.372 13.8592 15.372 11.9999C15.372 10.1405 13.8593 8.62784 11.9999 8.62784C10.1406 8.62784 8.62792 10.1405 8.62792 11.9999Z'
                                      fill='currentColor'
                                    />
                                    <mask
                                      id='mask0_1201_15608'
                                      style={{ maskType: 'alpha' }}
                                      maskUnits='userSpaceOnUse'
                                      x={2}
                                      y={2}
                                      width={20}
                                      height={20}
                                    >
                                      <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M7.60057 2.18176H16.3991C19.3872 2.18176 21.8182 4.61276 21.8181 7.60069V16.3992C21.8181 19.3871 19.3872 21.8181 16.3991 21.8181H7.60057C4.61264 21.8181 2.18176 19.3872 2.18176 16.3992V7.60069C2.18176 4.61276 4.61264 2.18176 7.60057 2.18176ZM16.3992 20.0759C18.4266 20.0759 20.076 18.4266 20.076 16.3992H20.0759V7.60069C20.0759 5.57343 18.4265 3.924 16.3991 3.924H7.60057C5.57331 3.924 3.924 5.57343 3.924 7.60069V16.3992C3.924 18.4266 5.57331 20.076 7.60057 20.0759H16.3992ZM6.85709 12.0001C6.85709 9.16418 9.16413 6.85709 11.9999 6.85709C14.8358 6.85709 17.1428 9.16418 17.1428 12.0001C17.1428 14.8358 14.8358 17.1428 11.9999 17.1428C9.16413 17.1428 6.85709 14.8358 6.85709 12.0001ZM8.62792 11.9999C8.62792 13.8592 10.1407 15.3718 11.9999 15.3718C13.8592 15.3718 15.372 13.8592 15.372 11.9999C15.372 10.1405 13.8593 8.62784 11.9999 8.62784C10.1406 8.62784 8.62792 10.1405 8.62792 11.9999Z'
                                        fill='white'
                                      />
                                    </mask>
                                    <g mask='url(#mask0_1201_15608)' />
                                  </svg>
                                </a>
                              </div>
                              <div className='col-auto'>
                                <a
                                  className='text-success link-success'
                                  href='#'
                                >
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M19.2 3H4.8C3.81 3 3 3.81 3 4.8V19.2C3 20.19 3.81 21 4.8 21H19.2C20.19 21 21 20.19 21 19.2V4.8C21 3.81 20.19 3 19.2 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.67C6.15 8.67 5.43 7.95 5.43 7.05C5.43 6.15 6.15 5.43 7.05 5.43C7.95 5.43 8.67 6.15 8.67 7.05C8.67 7.95 7.95 8.67 7.05 8.67ZM18.3 18.3H15.6V13.53C15.6 12.81 14.97 12.18 14.25 12.18C13.53 12.18 12.9 12.81 12.9 13.53V18.3H10.2V10.2H12.9V11.28C13.35 10.56 14.34 10.02 15.15 10.02C16.86 10.02 18.3 11.46 18.3 13.17V18.3Z'
                                      fill='currentColor'
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='position-relative mw-xl mx-auto pt-14 pb-11 px-16 bg-white rounded-4 shadow-sm'>
                    <svg
                      className='position-absolute top-0 start-50 translate-middle-x text-success mt-n8'
                      width={64}
                      height={64}
                      viewBox='0 0 64 64'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M30.2826 24.4325C35.7569 26.3646 41.6607 26.2573 47.0814 24.1641C47.135 21.9636 46.5447 19.7632 45.5249 17.7774L44.9882 16.7039C44.8272 16.7576 44.6125 16.865 44.5052 16.9723C39.5675 19.3338 33.9858 19.6558 28.7798 17.7774C25.1302 16.4893 21.1586 16.8113 17.7237 18.5287L16.6503 19.0654C16.704 19.2265 16.8113 19.4411 16.9186 19.5485C17.5627 20.9439 18.0994 22.4467 18.4751 24.0031C22.232 22.9297 26.4183 23.037 30.2826 24.4325Z'
                        fill='white'
                      />
                      <path
                        d='M16.9188 40.5872L18.0996 39.9432C20.4921 38.7469 23.1314 38.1679 25.7502 38.2442C27.3611 38.2912 28.9643 38.5862 30.4974 39.1381C30.9968 39.3153 31.4979 39.478 32.0002 39.6263V45.3471C29.9222 44.9608 27.8186 44.9056 25.7502 45.1719C23.6045 45.4481 21.4968 46.0703 19.495 47.0277C19.3877 47.135 19.173 47.2423 19.012 47.296L18.4753 46.2226C17.5629 44.4515 17.0262 42.5193 16.9188 40.5872Z'
                        fill='white'
                      />
                      <path
                        d='M17.5623 35.6496C22.1243 33.7711 27.223 33.6101 31.8923 35.2739C36.186 36.7766 40.7479 37.045 45.0416 36.0789C44.9879 33.6638 45.3099 31.3023 46.1686 28.9408C40.5333 30.6045 34.4685 30.4435 28.8331 28.4577C25.6129 27.277 22.0706 27.277 18.8504 28.3504C18.9041 30.6582 18.4748 33.0197 17.6697 35.3275C17.6697 35.3275 17.616 35.4886 17.5623 35.6496Z'
                        fill='white'
                      />
                    </svg>
                    <div className='text-center'></div>
                    <form>
                      <div className='form-group mb-4'>
                        <div className='mb-6 form-group'>
                          <label
                            className='mb-1 fw-medium text-light-dark'
                            htmlFor='headerInput31-1'
                          >
                            Email
                          </label>
                          <input
                            className='form-control shadow'
                            id='headerInput31-1'
                            type='email'
                            aria-describedby='emailHelp'
                            placeholder='Enter your email address'
                            autoComplete='off'
                            data-nlok-ref-guid='e8786b70-5aa6-407f-e1db-d25613781781'
                          />
                        </div>
                        <div className='mb-6 form-group'>
                          <label
                            className='mb-1 fw-medium text-light-dark'
                            htmlFor='contactInput8-2'
                          >
                            Message
                          </label>
                          <textarea
                            className='form-control shadow'
                            id='contactInput8-2'
                            placeholder='Your message'
                            rows={10}
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <button
                        className='btn btn-lg btn-success fs-11 w-100 mb-4 py-3 shadow'
                        type='submit'
                      >
                        Send
                      </button>
                    </form>
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

