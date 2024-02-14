import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section
          className='relative overflow-hidden'
          style={{
            backgroundImage:
              'url(https://source.unsplash.com/_r19nfvS3wY/1280x640)',
            backgroundSize: 'cover',
          }}
        >
          <div className='absolute inset-0 bg-black opacity-80' />
          <div className='relative container px-4 mx-auto'>
            <div className='relative flex items-center justify-between py-5'>
              <div className='w-auto'>
                <a className='inline-block' href='#'>
                  <img
                    src='https://shuffle.dev/placeholder/logos/plain.svg?primary=c80e50'
                    alt=''
                    className='h-10'
                  />
                </a>
              </div>
              <div className='w-auto hidden lg:block'>
                <ul className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center'>
                  <li className='mr-12'>
                    <a
                      className='inline-block font-medium text-white hover:text-gray-50'
                      href='#'
                    >
                      Products
                    </a>
                  </li>
                  <li className='mr-12'>
                    <a
                      className='inline-block font-medium text-white hover:text-gray-50'
                      href='#'
                    >
                      Resources
                    </a>
                  </li>
                  <li className='mr-12'>
                    <a
                      className='inline-block font-medium text-white hover:text-gray-50'
                      href='#'
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className='inline-block font-medium text-white hover:text-gray-50'
                      href='#'
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-auto hidden lg:block'>
                <div className='flex flex-wrap items-center -m-2'>
                  <div className='auto p-2'>
                    <a
                      href='#'
                      className='inline-flex justify-center text-center px-4 py-2 font-medium bg-white hover:bg-gray-50 focus:bg-white focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 border border-gray-200 rounded-xl shadow-secondary transition duration-200'
                    >
                      <span className='inline-flex items-center'>Log in</span>
                      <span className='' />
                    </a>
                  </div>
                  <div className='auto p-2'>
                    <a
                      href='#'
                      className='inline-flex justify-center text-center px-4 py-2 font-medium text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 rounded-xl shadow-1 transition duration-200'
                    >
                      <span className='inline-flex items-center'>Sign up</span>
                      <span className='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-auto lg:hidden'>
                <a className='inline-block' href='#'>
                  <svg
                    width={51}
                    height={51}
                    viewBox='0 0 56 56'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='navbar-burger text-pink-500'
                  >
                    <rect width={56} height={56} rx={28} fill='currentColor' />
                    <path
                      d='M37 32H19M37 24H19'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
              <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
              <nav className='relative z-50 px-9 pt-8 bg-white h-full overflow-y-auto'>
                <div className='flex flex-wrap justify-between h-full'>
                  <div className='w-full'>
                    <div className='flex items-center justify-between -m-2'>
                      <div className='w-auto p-2'>
                        <a className='inline-block' href='#'>
                          <img
                            src='https://shuffle.dev/placeholder/logos/plain.svg?primary=c80e50'
                            alt=''
                            className='h-10'
                          />
                        </a>
                      </div>
                      <div className='w-auto p-2'>
                        <a className='navbar-burger text-slate-500' href='#'>
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
                    </div>
                  </div>
                  <div className='flex flex-col justify-center py-16 w-full'>
                    <ul>
                      <li className='mb-10'>
                        <a
                          href='#'
                          className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                        >
                          Products
                        </a>
                      </li>
                      <li className='mb-10'>
                        <a
                          href='#'
                          className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                        >
                          Solutions
                        </a>
                      </li>
                      <li className='mb-10'>
                        <a
                          href='#'
                          className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex flex-col justify-end w-full pb-8'>
                    <div className='flex flex-wrap -m-2'>
                      <div className='w-full p-2'>
                        <a
                          className='w-full justify-center inline-flex justify-center text-center px-4 py-2 font-medium bg-white hover:bg-gray-50 focus:bg-white focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 border border-gray-200 rounded-xl shadow-secondary transition duration-200'
                          href='#'
                        >
                          <span className='w-full justify-center inline-flex items-center'>
                            Log in
                          </span>
                          <span className='' />
                        </a>
                      </div>
                      <div className='w-full p-2'>
                        <a
                          className='w-full justify-center inline-flex justify-center text-center px-4 py-2 font-medium text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 rounded-xl shadow-1 transition duration-200'
                          href='#'
                        >
                          <span className='w-full justify-center inline-flex items-center'>
                            Sign up
                          </span>
                          <span className='' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='relative container px-4 mx-auto'>
            <div className='pt-20 xl:pt-36 pb-28 xl:pb-56'>
              <div className='md:max-w-2xl mx-auto text-center'>
                <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                  <span className=''>Health</span>
                  <div className='' />
                </div>
                <h2 className='mb-8 text-white text-5xl font-semibold'>
                  Welcome to a Healthier Life
                </h2>
                <p className='mb-8 text-white text-xl font-medium'>
                  Start your wellness journey with our personalized care in
                  fitness, nutrition, and mental health counseling.
                </p>
                <div className='flex flex-wrap items-center justify-center'>
                  <div className='w-auto p-3'>
                    <a
                      href='#'
                      className='inline-flex justify-center text-center px-4 py-3 font-medium text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 rounded-xl shadow-1 transition duration-200'
                    >
                      <span className='inline-flex items-center'>
                        Get started free
                      </span>
                      <span className='' />
                    </a>
                  </div>
                  <div className='w-auto p-3'>
                    <a
                      href='#'
                      className='inline-flex justify-center text-center px-4 py-3 font-medium bg-white hover:bg-gray-50 focus:bg-white focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 border border-gray-200 rounded-xl shadow-secondary transition duration-200'
                    >
                      <span className='inline-flex items-center'>
                        Book a demo
                      </span>
                      <span className='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap lg:items-center -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='max-w-lg mx-auto md:ml-0'>
                  <img
                    src='https://source.unsplash.com/PHIgYUGQPvU/1280x960'
                    alt=''
                    className='rounded-xl w-full h-full object-cover'
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-xl'>
                  <h4 className='font-heading mb-5 text-3xl font-semibold'>
                    Begin Your Journey
                  </h4>
                  <p className='mb-8 text-base text-gray-500 font-medium'>
                    A Healthier Life Awaits
                  </p>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-auto p-3'>
                      <a
                        href='#'
                        className='inline-flex justify-center text-center px-4 py-3 font-medium text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 rounded-xl shadow-1 transition duration-200'
                      >
                        <span className='inline-flex items-center'>
                          Get started free
                        </span>
                        <span className='' />
                      </a>
                    </div>
                    <div className='w-auto p-3'>
                      <a
                        href='#'
                        className='inline-flex justify-center text-center px-4 py-3 font-medium bg-white hover:bg-gray-50 focus:bg-white focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 border border-gray-200 rounded-xl shadow-secondary transition duration-200'
                      >
                        <span className='inline-flex items-center'>
                          Book a demo
                        </span>
                        <span className='' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='md:max-w-2xl text-center mx-auto mb-12'>
              <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                <span className=''>Blog</span>
                <span className='' />
              </div>
              <h3 className='font-heading mb-6 text-4xl font-semibold'>
                Latest articles
              </h3>
              <p className='text-base text-gray-500 font-medium'>
                Latest From Our Blog
              </p>
            </div>
            <div className='flex flex-wrap -m-3'>
              <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                <div>
                  <div className='mb-6'>
                    <img
                      src='https://source.unsplash.com/PHIgYUGQPvU/1280x720'
                      alt=''
                      className='rounded-xl w-full h-full object-cover'
                    />
                  </div>
                  <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                    <span className=''>Category</span>
                    <span className='' />
                  </div>
                  <p className='mb-8 text-lg text-gray-700 font-medium'>
                    <a href='#'>5 Key Benefits of Eating Whole Foods</a>
                  </p>
                  <span className='text-sm text-gray-500 font-medium'>
                    Jul 14, 2023
                  </span>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                <div>
                  <div className='mb-6'>
                    <img
                      src='https://source.unsplash.com/gI7zgb80QWY/1280x720'
                      alt=''
                      className='rounded-xl w-full h-full object-cover'
                    />
                  </div>
                  <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                    <span className=''>Category</span>
                    <span className='' />
                  </div>
                  <p className='mb-8 text-lg text-gray-700 font-medium'>
                    <a href='#'>
                      How Meditation Enhances Your Health &amp; Wellbeing
                    </a>
                  </p>
                  <span className='text-sm text-gray-500 font-medium'>
                    Jul 14, 2023
                  </span>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                <div>
                  <div className='mb-6'>
                    <img
                      src='https://source.unsplash.com/mQVWb7kUoOE/1280x720'
                      alt=''
                      className='rounded-xl w-full h-full object-cover'
                    />
                  </div>
                  <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                    <span className=''>Category</span>
                    <span className='' />
                  </div>
                  <p className='mb-8 text-lg text-gray-700 font-medium'>
                    <a href='#'>The Power of Consistent Morning Routines</a>
                  </p>
                  <span className='text-sm text-gray-500 font-medium'>
                    Jul 14, 2023
                  </span>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                <div>
                  <div className='mb-6'>
                    <img
                      src='https://source.unsplash.com/_r19nfvS3wY/1280x720'
                      alt=''
                      className='rounded-xl w-full h-full object-cover'
                    />
                  </div>
                  <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                    <span className=''>Category</span>
                    <span className='' />
                  </div>
                  <p className='mb-8 text-lg text-gray-700 font-medium'>
                    <a href='#'>Breaking Down the Myth of Good and Bad Foods</a>
                  </p>
                  <span className='text-sm text-gray-500 font-medium'>
                    Jul 14, 2023
                  </span>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                <div>
                  <div className='mb-6'>
                    <img
                      src='https://source.unsplash.com/x7Lyx8Yyvug/1280x720'
                      alt=''
                      className='rounded-xl w-full h-full object-cover'
                    />
                  </div>
                  <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                    <span className=''>Category</span>
                    <span className='' />
                  </div>
                  <p className='mb-8 text-lg text-gray-700 font-medium'>
                    <a href='#'>Why Sleep Should Be Your Top Priority</a>
                  </p>
                  <span className='text-sm text-gray-500 font-medium'>
                    Jul 14, 2023
                  </span>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
                <div>
                  <div className='mb-6'>
                    <img
                      src='https://source.unsplash.com/QZub8Ni3x_c/1280x720'
                      alt=''
                      className='rounded-xl w-full h-full object-cover'
                    />
                  </div>
                  <div className='inline-block mb-5 px-2.5 py-1 text-sm text-white font-medium bg-gray-900 rounded-2xl'>
                    <span className=''>Category</span>
                    <span className='' />
                  </div>
                  <p className='mb-8 text-lg text-gray-700 font-medium'>
                    <a href='#'>
                      Exercise &amp; Mental Health: The Invisible Connection
                    </a>
                  </p>
                  <span className='text-sm text-gray-500 font-medium'>
                    Jul 14, 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='overflow-hidden'>
          <div className='flex flex-wrap -m-8'>
            <div className='w-full md:w-1/2 p-8'>
              <img
                src='https://source.unsplash.com/PHIgYUGQPvU/1280x1280'
                alt=''
                className='rounded-xl w-full h-full object-cover'
              />
            </div>
            <div className='w-full md:w-1/2 p-8'>
              <div className='flex flex-col justify-center h-full pb-16 md:py-16'>
                <div className='container px-4 mx-auto'>
                  <div className='md:max-w-lg mx-auto'>
                    <h3 className='font-heading mb-6 text-4xl font-semibold'>
                      Begin Your Journey
                    </h3>
                    <div className='flex flex-wrap -m-2.5 mb-6'>
                      <div className='w-full p-2.5'>
                        <div className='flex items-center -m-1.5'>
                          <div className='w-auto p-1.5'>
                            <div className='flex items-center justify-center w-8 h-8 text-pink-600 bg-white border border-gray-200 rounded-full shadow-secondary'>
                              <div className=''>
                                <svg
                                  width={12}
                                  height={10}
                                  viewBox='0 0 12 10'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M11.5917 1.00834C11.5142 0.930232 11.4221 0.868237 11.3205 0.82593C11.219 0.783622 11.11 0.761841 11 0.761841C10.89 0.761841 10.7811 0.783622 10.6796 0.82593C10.578 0.868237 10.4858 0.930232 10.4084 1.00834L4.20004 7.22501L1.59171 4.60834C1.51127 4.53064 1.41632 4.46955 1.31227 4.42854C1.20823 4.38754 1.09713 4.36743 0.985308 4.36937C0.873491 4.3713 0.76315 4.39524 0.660584 4.43982C0.558019 4.4844 0.465238 4.54874 0.387539 4.62917C0.309841 4.70961 0.248746 4.80456 0.207742 4.9086C0.166739 5.01265 0.14663 5.12375 0.148565 5.23557C0.150499 5.34739 0.174439 5.45773 0.219017 5.56029C0.263595 5.66286 0.327938 5.75564 0.408373 5.83334L3.60837 9.03334C3.68584 9.11145 3.77801 9.17344 3.87956 9.21575C3.98111 9.25806 4.09003 9.27984 4.20004 9.27984C4.31005 9.27984 4.41897 9.25806 4.52052 9.21575C4.62207 9.17344 4.71424 9.11145 4.79171 9.03334L11.5917 2.23334C11.6763 2.1553 11.7438 2.06059 11.79 1.95518C11.8361 1.84976 11.86 1.73592 11.86 1.62084C11.86 1.50575 11.8361 1.39192 11.79 1.2865C11.7438 1.18108 11.6763 1.08637 11.5917 1.00834Z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </div>
                              <span className='' />
                            </div>
                          </div>
                          <div className='flex-1 p-1.5'>
                            <p className='text-base text-gray-500 font-medium'>
                              Get the latest health tips, right in your inbox.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='w-full p-2.5'>
                        <div className='flex items-center -m-1.5'>
                          <div className='w-auto p-1.5'>
                            <div className='flex items-center justify-center w-8 h-8 text-pink-600 bg-white border border-gray-200 rounded-full shadow-secondary'>
                              <div className=''>
                                <svg
                                  width={12}
                                  height={10}
                                  viewBox='0 0 12 10'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M11.5917 1.00834C11.5142 0.930232 11.4221 0.868237 11.3205 0.82593C11.219 0.783622 11.11 0.761841 11 0.761841C10.89 0.761841 10.7811 0.783622 10.6796 0.82593C10.578 0.868237 10.4858 0.930232 10.4084 1.00834L4.20004 7.22501L1.59171 4.60834C1.51127 4.53064 1.41632 4.46955 1.31227 4.42854C1.20823 4.38754 1.09713 4.36743 0.985308 4.36937C0.873491 4.3713 0.76315 4.39524 0.660584 4.43982C0.558019 4.4844 0.465238 4.54874 0.387539 4.62917C0.309841 4.70961 0.248746 4.80456 0.207742 4.9086C0.166739 5.01265 0.14663 5.12375 0.148565 5.23557C0.150499 5.34739 0.174439 5.45773 0.219017 5.56029C0.263595 5.66286 0.327938 5.75564 0.408373 5.83334L3.60837 9.03334C3.68584 9.11145 3.77801 9.17344 3.87956 9.21575C3.98111 9.25806 4.09003 9.27984 4.20004 9.27984C4.31005 9.27984 4.41897 9.25806 4.52052 9.21575C4.62207 9.17344 4.71424 9.11145 4.79171 9.03334L11.5917 2.23334C11.6763 2.1553 11.7438 2.06059 11.79 1.95518C11.8361 1.84976 11.86 1.73592 11.86 1.62084C11.86 1.50575 11.8361 1.39192 11.79 1.2865C11.7438 1.18108 11.6763 1.08637 11.5917 1.00834Z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </div>
                              <span className='' />
                            </div>
                          </div>
                          <div className='flex-1 p-1.5'>
                            <p className='text-base text-gray-500 font-medium'>
                              Connect with others on their path to wellness.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='w-full p-2.5'>
                        <div className='flex items-center -m-1.5'>
                          <div className='w-auto p-1.5'>
                            <div className='flex items-center justify-center w-8 h-8 text-pink-600 bg-white border border-gray-200 rounded-full shadow-secondary'>
                              <div className=''>
                                <svg
                                  width={12}
                                  height={10}
                                  viewBox='0 0 12 10'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M11.5917 1.00834C11.5142 0.930232 11.4221 0.868237 11.3205 0.82593C11.219 0.783622 11.11 0.761841 11 0.761841C10.89 0.761841 10.7811 0.783622 10.6796 0.82593C10.578 0.868237 10.4858 0.930232 10.4084 1.00834L4.20004 7.22501L1.59171 4.60834C1.51127 4.53064 1.41632 4.46955 1.31227 4.42854C1.20823 4.38754 1.09713 4.36743 0.985308 4.36937C0.873491 4.3713 0.76315 4.39524 0.660584 4.43982C0.558019 4.4844 0.465238 4.54874 0.387539 4.62917C0.309841 4.70961 0.248746 4.80456 0.207742 4.9086C0.166739 5.01265 0.14663 5.12375 0.148565 5.23557C0.150499 5.34739 0.174439 5.45773 0.219017 5.56029C0.263595 5.66286 0.327938 5.75564 0.408373 5.83334L3.60837 9.03334C3.68584 9.11145 3.77801 9.17344 3.87956 9.21575C3.98111 9.25806 4.09003 9.27984 4.20004 9.27984C4.31005 9.27984 4.41897 9.25806 4.52052 9.21575C4.62207 9.17344 4.71424 9.11145 4.79171 9.03334L11.5917 2.23334C11.6763 2.1553 11.7438 2.06059 11.79 1.95518C11.8361 1.84976 11.86 1.73592 11.86 1.62084C11.86 1.50575 11.8361 1.39192 11.79 1.2865C11.7438 1.18108 11.6763 1.08637 11.5917 1.00834Z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </div>
                              <span className='' />
                            </div>
                          </div>
                          <div className='flex-1 p-1.5'>
                            <p className='text-base text-gray-500 font-medium'>
                              Let our experts create your personalized health
                              plan.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-wrap -m-3'>
                      <div className='w-auto p-3'>
                        <a
                          href='#'
                          className='inline-flex justify-center text-center px-4 py-3 font-medium bg-white hover:bg-gray-50 focus:bg-white focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 border border-gray-200 rounded-xl shadow-secondary transition duration-200'
                        >
                          <span className='inline-flex items-center'>
                            Learn more
                          </span>
                          <span className='' />
                        </a>
                      </div>
                      <div className='w-auto p-3'>
                        <a
                          href='#'
                          className='inline-flex justify-center text-center px-4 py-3 font-medium text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 rounded-xl shadow-1 transition duration-200'
                        >
                          <span className='inline-flex items-center'>
                            Get started
                          </span>
                          <span className='' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-16 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='p-8 mb-14 bg-white border border-slate-200 rounded-xl'>
              <div className='flex flex-wrap items-center -m-4'>
                <div className='w-full md:w-1/2 p-4'>
                  <div className='md:max-w-lg'>
                    <h6 className='font-heading mb-3 text-xl font-semibold'>
                      Subscribe to our newsletter
                    </h6>
                    <p className='text-base text-gray-500 font-medium'>
                      Sign up for health insights
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-1/2 p-4'>
                  <div className='flex flex-wrap lg:justify-end -m-2'>
                    <div className='w-full lg:w-auto p-2'>
                      <div className='lg:w-72'>
                        <input
                          type='text'
                          placeholder='Enter you email address'
                          className='flex px-4 py-3 w-full text-base disabled:text-gray-900 font-medium bg-white hover:bg-gray-50 disabled:bg-pink-100 placeholder-gray-500 outline-none hover:placeholder-gray-600 active:ring-3 active:ring-pink-600 active:ring-opacity-40 border border-pink-200 disabled:border-none rounded-xl shadow-secondary disabled:shadow-none transition duration-200'
                        />
                      </div>
                    </div>
                    <div className='w-auto p-2'>
                      <a
                        href='#'
                        className='inline-flex justify-center text-center px-4 py-3 font-medium text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:ring-3 focus:ring-pink-600 focus:ring-opacity-40 rounded-xl shadow-1 transition duration-200'
                      >
                        <span className='inline-flex items-center'>
                          Subscribe
                        </span>
                        <span className='' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='pb-12 border-b border-slate-100'>
              <div className='flex flex-wrap -m-8'>
                <div className='w-full md:w-1/2 lg:w-4/12 p-8'>
                  <div className='max-w-xs'>
                    <div className='mb-6'>
                      <img
                        src='https://shuffle.dev/placeholder/logos/plain.svg?primary=c80e50'
                        alt=''
                        className='h-10'
                      />
                    </div>
                    <p className='text-base text-gray-500 font-medium'>
                      Dedicated to promoting a balanced, healthy lifestyle for
                      all.
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-1/2 lg:flex-1 p-8'>
                  <p className='mb-4 inline-block font-semibold text-sm text-gray-300'>
                    Navigation Links
                  </p>
                  <ul>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Home
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Features
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Pricing
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full md:w-1/2 lg:flex-1 p-8'>
                  <p className='mb-4 inline-block font-semibold text-sm text-gray-300'>
                    Product
                  </p>
                  <ul>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        How it works
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Benefits
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Case studies
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full md:w-1/2 lg:flex-1 p-8'>
                  <p className='mb-4 inline-block font-semibold text-sm text-gray-300'>
                    Resources
                  </p>
                  <ul>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Blog
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Whitepapers
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        E-books
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Webinars
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full md:w-1/2 lg:flex-1 p-8'>
                  <p className='mb-4 inline-block font-semibold text-sm text-gray-300'>
                    Social Media
                  </p>
                  <ul>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Facebook
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Twitter
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Github
                      </a>
                    </li>
                    <li className='mb-3'>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='inline-block font-medium text-base text-gray-500 hover:text-gray-600'
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='py-8 text-center'>
              <p className='text-base text-gray-500 font-medium'>
                © 2023 Plain 2.0. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

