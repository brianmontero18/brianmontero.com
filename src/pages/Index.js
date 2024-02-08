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
        <section className='position-relative overflow-hidden bs-section-dragged'>
          <video
            className='position-absolute'
            poster='flex-assets/images/headers/video-frame.jpeg'
            muted=''
          >
            <source
              src='https://static.shuffle.dev/files/video-placeholder.mp4'
              type='video/mp4'
            />
          </video>
          <div
            className='position-absolute top-0 start-0 w-100 h-100 bg-white'
            style={{ opacity: '0.9' }}
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
            <div
              className='position-relative pt-32 pb-52 mw-3xl mx-auto text-center'
              style={{ zIndex: 1 }}
            >
              <h1
                className='mb-6 font-heading fs-4'
                style={{ letterSpacing: '-1px' }}
                contentEditable='false'
              >
                Unlock Your Coding Potential
              </h1>
              <p
                className='mb-8 fs-9 fw-medium text-secondary'
                contentEditable='false'
              >
                Join a community dedicated to sustainable growth in tech.
                Elevate your skills, build real projects, and gain confidence to
                thrive in the world of programming.
              </p>
              <div className='row justify-content-center g-4'>
                <div className='col-12 col-md-auto'>
                  <a
                    className='btn btn-lg btn-success w-100 text-success-light shadow'
                    href='from-learner-to-professional.html'
                    contentEditable='false'
                  >
                    Explore Our Programs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-28 bg-white overflow-hidden'
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
                contentEditable='false'
              >
                Navigate your coding journey with confidence
              </h2>
              <p
                className='mb-0 fs-9 fw-medium text-secondary'
                contentEditable='false'
              >
                Unlock your potential and achieve success with expert guidance
                and practical advice
              </p>
            </div>
            <div className='row align-items-center g-16'>
              <div className='col-12 col-md-6'>
                <div className='mw-md-xl'>
                  <h2
                    className='font-heading mb-8 fs-5'
                    style={{ letterSpacing: '-1px' }}
                    contentEditable='false'
                  >
                    <strong contentEditable='false'>
                      Define your Coding Path
                    </strong>
                  </h2>
                  <p
                    className='mb-6 fs-9 fw-medium text-secondary'
                    contentEditable='false'
                  >
                    Set clear goals and objectives for your coding journey.
                    Decide what areas of coding interest you most, like
                    frontend, backend, or full-stack development. Having a
                    roadmap will keep you focused and motivated.
                  </p>
                  <div className='row'>
                    <div className='col-md-auto'>
                      <a
                        className='btn btn-lg btn-success fs-11 py-3 px-4 w-100 text-success-light shadow'
                        href='#'
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <div className='position-relative'>
                      <img
                        className='position-absolute top-0 start-0 mt-n8 ms-n8'
                        src='flex-assets/elements/circle-orange.svg'
                        alt=''
                      />
                      <img
                        className='position-absolute bottom-0 end-0 me-n8 mb-n9'
                        src='flex-assets/elements/dots-blue.svg'
                        alt=''
                      />
                      <img
                        className='img-fluid'
                        src='images/Brian-Montero-4.png'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-28 bg-white overflow-hidden'
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
            <div className='row align-items-center g-16'>
              <div className='col-12 col-md-6'>
                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <div className='position-relative'>
                      <img
                        className='position-absolute top-0 start-0 mt-n8 ms-n8'
                        src='flex-assets/elements/circle-orange.svg'
                        alt=''
                      />
                      <img
                        className='position-absolute bottom-0 end-0 me-n8 mb-n9'
                        src='flex-assets/elements/dots-blue.svg'
                        alt=''
                      />
                      <img
                        className='img-fluid'
                        src='images/Brian-Montero-3.png'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='mw-md-xl'>
                  <h2
                    className='font-heading mb-8 fs-5'
                    style={{ letterSpacing: '-1px' }}
                  >
                    Seek Personalized Mentorship
                  </h2>
                  <p className='mb-6 fs-9 fw-medium text-secondary'>
                    Find a mentor or coach with experience in your desired
                    field. They can offer valuable guidance, feedback, and
                    support tailored to your needs, helping you overcome
                    challenges and reach your goals faster.
                  </p>
                  <div className='row'>
                    <div className='col-md-auto'>
                      <a
                        className='btn btn-lg btn-success fs-11 py-3 px-4 w-100 text-success-light shadow'
                        href='#'
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-28 bg-white overflow-hidden'
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
            <div className='row align-items-center g-16'>
              <div className='col-12 col-md-6'>
                <div className='mw-md-xl'>
                  <h2
                    className='font-heading mb-8 fs-5'
                    style={{ letterSpacing: '-1px' }}
                  >
                    Hands-on Project Experience
                  </h2>
                  <p className='mb-6 fs-9 fw-medium text-secondary'>
                    Practice coding by working on real projects. Start small and
                    gradually tackle more complex challenges. Building a
                    portfolio of projects demonstrates your skills to potential
                    employers and boosts your confidence.
                  </p>
                  <div className='row'>
                    <div className='col-md-auto'>
                      <a
                        className='btn btn-lg btn-success fs-11 py-3 px-4 w-100 text-success-light shadow'
                        href='#'
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <div className='position-relative'>
                      <img
                        className='position-absolute top-0 start-0 mt-n8 ms-n8'
                        src='flex-assets/elements/circle-orange.svg'
                        alt=''
                      />
                      <img
                        className='position-absolute bottom-0 end-0 me-n8 mb-n9'
                        src='flex-assets/elements/dots-blue.svg'
                        alt=''
                      />
                      <img
                        className='img-fluid'
                        src='images/Brian-Montero-5.png'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='position-relative py-28 bg-white overflow-hidden'
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
            <div className='row align-items-center g-16'>
              <div className='col-12 col-md-6'>
                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <div className='position-relative'>
                      <img
                        className='position-absolute top-0 start-0 mt-n8 ms-n8'
                        src='flex-assets/elements/circle-orange.svg'
                        alt=''
                      />
                      <img
                        className='position-absolute bottom-0 end-0 me-n8 mb-n9'
                        src='flex-assets/elements/dots-blue.svg'
                        alt=''
                      />
                      <img
                        className='img-fluid'
                        src='images/Brian-Montero-6.png'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='mw-md-xl'>
                  <h2
                    className='font-heading mb-8 fs-5'
                    style={{ letterSpacing: '-1px' }}
                  >
                    Join a Supportive Community
                  </h2>
                  <p className='mb-6 fs-9 fw-medium text-secondary'>
                    Connect with other learners and professionals in coding
                    forums or meetups. Being part of a community provides
                    networking opportunities, resources, and motivation to keep
                    learning and growing in your coding journey.
                  </p>
                  <div className='row'>
                    <div className='col-md-auto'>
                      <a
                        className='btn btn-lg btn-success fs-11 py-3 px-4 w-100 text-success-light shadow'
                        href='#'
                      >
                        Get Started
                      </a>
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
            <div className='row g-16'>
              <div className='col-12 col-md-6'>
                <div className='position-relative d-flex justify-content-center'>
                  <div
                    className='overflow-hidden rounded-1'
                    style={{ maxWidth: 456, height: 456 }}
                  >
                    <img
                      className='img-fluid'
                      src='images/brian-white-png-1707318267547.webp'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6'>
                <div className='d-flex flex-column justify-content-between h-100'>
                  <div className='mb-6 d-block' />
                  <div className='mw-md-xl'>
                    <div className='position-relative mb-8 mw-md-5xl mx-auto'>
                      <p className='mb-6 fs-10 fw-medium text-secondary'>
                        Hey there!
                      </p>
                      <p className='mb-6 fs-10 fw-medium text-secondary'>
                        I'm Brian Montero, and I'm excited to connect with you.
                        With over 9 years of experience in the tech industry,
                        I've been on a mission to empower professionals in their
                        journey from learners to seasoned experts. Through my
                        consulting services, I guide individuals in honing their
                        skills and staying abreast of the latest technologies.
                      </p>
                      <p className='mb-6 fs-10 fw-medium text-secondary'>
                        If you're on the lookout for skilled talents or
                        exploring opportunities, I'd love to discuss how my
                        expertise aligns with your needs. Let's explore
                        possibilities and chart a course for success!
                      </p>
                    </div>
                    <h3
                      className='mb-2 fs-8 fw-semibold text-light-dark'
                      contentEditable='false'
                    >
                      Brian Montero
                    </h3>
                    <p
                      className='mb-8 fs-10 text-secondary fw-medium'
                      contentEditable='false'
                    >
                      CEO &amp; Founder at Green Code
                    </p>
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
          className='position-relative py-32 bg-light-light overflow-hidden'
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
              <div className='row align-items-xl-center g-16'>
                <div className='col-12 col-md-6'>
                  <div className='mw-md-md'>
                    <h2
                      className='mb-8 fs-5 font-heading'
                      style={{ letterSpacing: '-1px' }}
                    >
                      Level up with Green Code now!
                    </h2>
                    <ul className='mb-8 list-unstyled'>
                      <li className='mb-4 d-flex align-items-start'>
                        <img
                          className='mt-1 me-3'
                          src='flex-assets/elements/checkbox-green.svg'
                          alt=''
                        />
                        <p className='mb-0 fs-9 fw-medium text-secondary'>
                          Master the latest tech.
                        </p>
                      </li>
                      <li className='mb-4 d-flex align-items-start'>
                        <img
                          className='mt-1 me-3'
                          src='flex-assets/elements/checkbox-green.svg'
                          alt=''
                        />
                        <p className='mb-0 fs-9 fw-medium text-secondary'>
                          Fast-track your career.
                        </p>
                      </li>
                      <li className='d-flex align-items-start'>
                        <img
                          className='mt-1 me-3'
                          src='flex-assets/elements/checkbox-green.svg'
                          alt=''
                        />
                        <p className='mb-0 fs-9 fw-medium text-secondary'>
                          Join a supportive community.
                        </p>
                      </li>
                    </ul>
                    <div className='row g-4'>
                      <div className='col-12 col-md-auto'>
                        <div className='bg-white rounded'>
                          <a
                            className='btn btn-outline-light w-100 px-7 py-4 fs-10 fw-medium text-dark border rounded shadow'
                            href='#'
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className='col-12 col-md-auto'>
                        <a
                          className='btn btn-success w-100 px-7 py-4 fs-10 fw-medium text-success-light rounded shadow'
                          href='#'
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='row justify-content-center'>
                    <div className='col-auto'>
                      <div className='position-relative'>
                        <img
                          className='position-absolute top-0 end-0 mt-n14 me-n14'
                          style={{ zIndex: 20 }}
                          src='flex-assets/elements/circle-orange.svg'
                          alt=''
                        />
                        <img
                          className='position-absolute bottom-0 start-0 ms-n12 mb-n10'
                          src='flex-assets/elements/dots-blue.svg'
                          alt=''
                        />
                        <img
                          className='position-relative img-fluid'
                          src='images/WhatsApp-Image-2024-01-17-at-11-09-15.jpeg'
                          alt='z-index: 10;'
                        />
                      </div>
                    </div>
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
                      <a
                        className='nav-link p-0 fs-11 link-secondary'
                        href='from-learner-to-professional.html'
                      >
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
                      <a
                        className='nav-link p-0 fs-11 link-secondary'
                        href='about.html'
                      >
                        About
                      </a>
                    </li>
                    <li className='nav-item mb-4'>
                      <a className='nav-link p-0 fs-11 link-secondary' href='#'>
                        Blog
                      </a>
                    </li>
                    <li className='nav-item mb-4'>
                      <a
                        className='nav-link p-0 fs-11 link-secondary'
                        href='contact.html'
                      >
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

