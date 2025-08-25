import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Header1 from '@/components/header/Header1'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <Header1  fluid={"container-fluid"}/>
            <Breadcrum content='Our Latest Work' pageTitle={'Project'} pagename={'Project'} />
            <div className="project-grid-page pt-120 mb-120">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <Link href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img1.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span>Location : Mumbai</span>
                                    <h4><Link href="/project/project-details">Villa Royale Gold</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <Link href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img2.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span>Location : Mumbai</span>
                                    <h4><Link href="/project/project-details">Villa Imperio Palava</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <Link href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img3.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span>Location : Mumbai</span>
                                    <h4><Link href="/project/project-details">Villa Royal Palava</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <Link href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img4.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="project-content">
                                    <span>Location : Alibag</span>
                                    <h4><Link href="/project/project-details">Sol De Alibag</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Home1FooterTop />
            <Footer1 />
        </>
    )
}

export default page