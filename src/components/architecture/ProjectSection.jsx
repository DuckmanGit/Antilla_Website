
import Link from 'next/link'
import React, { useEffect } from 'react'

const ProjectSection = () => {

  return (
    <div className="home3-project-section mb-120 ">
    <div className="container">
      <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-xxl-7 col-xl-8 col-lg-9">
          <div className="section-title three text-center">
            <span>Vision Of Projects</span>
            <h2>Behind the Scenes</h2>
            <p>Once the project is greenlit, best architects from around the globe’s team crafts iconic yet community-focused designs, marrying luxury with livability. These blueprints are then brought to life by best construction companies with latest tech’s construction excellence — a brand synonymous with safety, speed, and quality across India.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="project-card2 mb-40">
        <div className="row g-4">
          <div className="col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="project-content-wrap">
              <div className="project-content">
                <span>View: Mumbai</span>
                <h2><Link href="/">Beyond the Surface Perspective</Link></h2>
                <ul>
                  <li><Link href="/">Architecture</Link></li>
                  <li><Link href="/">Renovation</Link></li>
                  <li><Link href="/">Construction </Link></li>
                </ul>
              </div>
              <div className="button-area">
                <Link href="/" className="primary-btn">
                  View Details
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-animation-container">
            <div className="project-img image-reveal wcf--image-effect-zoom-in overflow-hidden" data-animation-type="scale">
              <img src="assets/img/home3/project1.jpg" alt="Reveal Animation Image" />
            </div>
          </div>
          {/* <div class="col-md-6 overflow-hidden">
                  <div class="project-img image-container">
                      <img src="assets/img/home3/project-img1.jpg" alt="Animated Image">
                  </div>
              </div> */}
        </div>
      </div>
      <div className="project-card2 two mb-40">
        <div className="row g-4">
          <div className="col-md-6 order-md-1 order-2 image-animation-container">
            <div className="project-img image-reveal wcf--image-effect-zoom-in overflow-hidden" data-animation-type="scale">
              <img src="assets/img/home3/project2.jpg" alt="Reveal Animation Image" />
            </div>
          </div>
          <div className="col-md-6 order-md-2 order-1 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="project-content-wrap">
              <div className="project-content">
                <span>View: Office</span>
                <h2><Link href="/">Architectural Innovation.</Link></h2>
                <ul>
                  <li><Link href="/">Interior Design</Link></li>
                  <li><Link href="/">Renovation</Link></li>
                  <li><Link href="/">Construction </Link></li>
                </ul>
              </div>
              <div className="button-area">
                <Link href="/project/project-details" className="primary-btn">
                  View Details
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card2">
        <div className="row g-4">
          <div className="col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="project-content-wrap">
              <div className="project-content">
                <span>View: Site</span>
                <h2><Link href="/">Adaptive Reuse Material.</Link></h2>
                <ul>
                  <li><Link href="/">Renovation</Link></li>
                  <li><Link href="/">Architecture</Link></li>
                  <li><Link href="/">Industrial</Link></li>
                </ul>
              </div>
              <div className="button-area">
                <Link href="/" className="primary-btn">
                  View Details
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 image-animation-container">
            <div className="project-img image-reveal wcf--image-effect-zoom-in overflow-hidden" data-animation-type="scale">
              <img src="assets/img/home3/project3.jpg" alt="Reveal Animation Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-80 bounce_up">
        <div className="col-lg-12 d-flex justify-content-center">
          <Link href="/" className="primary-btn2">
            <span>
              View More Project
              <svg viewBox="0 0 13 20">
                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
    <img src="assets/img/home3/home3-project-section-vector.svg" alt="" className="vector" />
  </div>
  )
}

export default ProjectSection