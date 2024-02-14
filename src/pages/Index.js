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
      <section className='pb-5 bg-light'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light py-4 position-relative'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              <img
                className='img-fluid'
                src='bootstrap5-plain-assets/logos/plainb-logo.svg'
                alt=''
                width='96px'
              />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#header04'
              aria-controls='header04'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='header04'>
              <ul className='d-none d-lg-flex navbar-nav mx-auto mt-3 mt-lg-0 mb-3 mb-lg-0 position-absolute top-50 start-50 translate-middle'>
                <li className='nav-item me-4'>
                  <a className='nav-link' href='#'>
                    About
                  </a>
                </li>
                <li className='nav-item me-4'>
                  <a className='nav-link' href='#'>
                    Company
                  </a>
                </li>
                <li className='nav-item me-4'>
                  <a className='nav-link' href='#'>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Testimonials
                  </a>
                </li>
              </ul>
              <ul className='navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 d-lg-none'>
                <li className='nav-item me-4'>
                  <a className='nav-link' href='#'>
                    About
                  </a>
                </li>
                <li className='nav-item me-4'>
                  <a className='nav-link' href='#'>
                    Company
                  </a>
                </li>
                <li className='nav-item me-4'>
                  <a className='nav-link' href='#'>
                    Services
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Testimonials
                  </a>
                </li>
              </ul>
              <div className='ms-auto'>
                <a className='btn btn-outline-secondary me-2' href='#'>
                  Sign In
                </a>
                <a className='btn btn-primary' href='#'>
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-12 col-lg-8 mx-auto mb-5'>
              <div className='text-center'>
                <span className='text-muted'>Develop your skill</span>
                <h2 className='display-3 fw-bold mt-2 mb-4'>
                  Take care of your performance every day.
                </h2>
                <a className='btn btn-primary' href='#'>
                  Try for Free
                </a>
              </div>
            </div>
          </div>
          <div className='row pt-5'>
            <div className='col-12 col-lg-4 d-flex mb-5 mb-lg-0'>
              <div className='me-4'>
                <svg
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 48, height: 48 }}
                >
                  <path
                    d='M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z'
                    fill='#6EA8FE'
                  />
                  <circle cx={24} cy={24} r='23.5' stroke='#6EA8FE' />
                </svg>
              </div>
              <div>
                <h4 className='fw-bold'>Quick review</h4>
                <p>We make sure you get feedback the same day.</p>
              </div>
            </div>
            <div className='col-12 col-lg-4 d-flex mb-5 mb-lg-0'>
              <div className='me-4'>
                <svg
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 48, height: 48 }}
                >
                  <path
                    d='M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z'
                    fill='#6EA8FE'
                  />
                  <circle cx={24} cy={24} r='23.5' stroke='#6EA8FE' />
                </svg>
              </div>
              <div>
                <h4 className='fw-bold'>Easy changes</h4>
                <p>Options settings for customers convenience</p>
              </div>
            </div>
            <div className='col-12 col-lg-4 d-flex'>
              <div className='me-4'>
                <svg
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 48, height: 48 }}
                >
                  <path
                    d='M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z'
                    fill='#6EA8FE'
                  />
                  <circle cx={24} cy={24} r='23.5' stroke='#6EA8FE' />
                </svg>
              </div>
              <div>
                <h4 className='fw-bold'>Place storage</h4>
                <p>Store projects in easily accessible catalogs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

