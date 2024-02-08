import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function NotFound() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section
        className='position-relative py-32 bg-white overflow-hidden'
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
        <img
          className='position-absolute top-0 start-0 ms-n36 mt-n36'
          src='flex-assets/elements/circle-xxl-orange.svg'
          alt=''
        />
        <img
          className='position-absolute bottom-0 end-0 me-n36 mb-n36'
          src='flex-assets/elements/circle-xxl-orange.svg'
          alt=''
        />
        <img
          className='position-absolute top-0 end-0 me-6 mt-6'
          src='flex-assets/elements/dots-blue.svg'
          alt=''
        />
        <img
          className='position-absolute bottom-0 start-0 ms-6 mb-6'
          src='flex-assets/elements/dots-blue.svg'
          alt=''
        />
        <div className='position-relative container' style={{ zIndex: 1 }}>
          <img
            className='img-fluid mb-16 w-100'
            src='flex-assets/images/http-codes/error-code2.png'
            alt=''
          />
          <div className='text-center mw-md-5xl mx-auto'>
            <span className='badge mb-4 bg-success-dark text-success shadow'>
              Error 404
            </span>
            <h2
              className='font-heading mb-4 fs-5'
              style={{ letterSpacing: '-1px' }}
            >
              Page not found
            </h2>
            <p className='mb-12 fs-9 text-secondary'>
              Something went wrong, so this page is broken.
            </p>
            <div className='row justify-content-center g-4 g-md-6'>
              <div className='col-12 col-md-auto'>
                <a
                  className='btn btn-lg btn-success w-100 text-success-light shadow'
                  href='index.html'
                >
                  Go back to Homepage
                </a>
              </div>
              <div className='col-12 col-md-auto'>
                <div className='bg-white rounded'>
                  <a
                    className='btn btn-lg btn-outline-light w-100 text-light-dark shadow'
                    href='#'
                  >
                    Try Again
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

