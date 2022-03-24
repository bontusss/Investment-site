<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <!-- START HEADER SECTION -->
    <header class="main-header header-1">
        <!-- START LOGO AREA -->
        <div class="logo-area">
            <div class="auto-container">
                <div class="logo">
                    <a href="index-2.html">
                        <h2>
                            Golden
                            <span class="hub">Hub</span> Trade
                        </h2>
                    </a>
                </div>
            </div>
        </div>
        <!-- END LOGO AREA -->

        <!-- START NAVIGATION AREA -->
        <div class="sticky-menu">
            <div class="mainmenu-area">
                <div class="auto-container">
                    <div class="row">
                        <div class="col-lg-9 d-none d-lg-block d-md-none">
                            <nav class="navbar navbar-expand-lg justify-content-left">
                                <ul class="navbar-nav">
                                    <li class>
                                        <a href="index-2.html" class="active nav-link">Home</a>
                                    </li>
                                    <li class>
                                        <a class="nav-link" href="#about">About</a>
                                    </li>

                                    <li class>
                                        <a href="#chhoseus" class="nav-link">Why?</a>
                                    </li>
                                    <li class>
                                        <a href="#service" class="nav-link">Services</a>
                                    </li>
                                    <li class>
                                        <a href="#price" class="nav-link">Plans</a>
                                    </li>
                                    <li class>
                                        <a href="#hworks" class="nav-link">How</a>
                                    </li>
                                    <li>
                                        <RouterLink class="nav-link" to="/register">Register</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="nav-link" to="/login">Login</RouterLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-3 d-none d-lg-block d-md-none text-right pr-0">
                            <form class="navbar-form">
                                <div class="form-group">
                                    <input
                                        class="form-control"
                                        name="search"
                                        value="Search here..."
                                        type="text"
                                    />
                                    <button type="submit" class="btn">
                                        <i class="fa fa-search-plus"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END NAVIGATION AREA -->
    </header>
    <!-- END HEADER SECTION -->
    <!-- START SLIDER SECTION -->
    <section class="slider-section">
        <div class="home-slides owl-carousel owl-theme">
            <div class="home-single-slide" data-background="src/assets/img/bg/slide1.jpg">
                <div class="home-slide-overlay"></div>
                <div class="home-single-slide-inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-10 col-12 mr-auto text-left">
                                <div class="home-single-slide-dec">
                                    <h2>
                                        Secure & easy way to
                                        <br />buy & sell bitcoin
                                    </h2>

                                    <div class="home-single-slide-button">
                                        <a href="#" class="btn-style btn-filled">Learn More</a>
                                        <a href="#" class="btn-style btn-border">Bitcoin Price</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end single slider -->
            <div class="home-single-slide" data-background="src/assets/img/bg/slide5.jpg">
                <div class="home-slide-overlay"></div>
                <div class="home-single-slide-inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-10 col-12 mr-auto text-left">
                                <div class="home-single-slide-dec">
                                    <h2>A real estate partner you can trust</h2>
                                    <div class="home-single-slide-button">
                                        <a href="#" class="btn-style btn-border">Get quote</a>
                                        <a href="#" class="btn-style btn-filled">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end single slider -->
            <div class="home-single-slide" data-background="src/assets/img/bg/slide6.jpg">
                <div class="home-slide-overlay"></div>
                <div class="home-single-slide-inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-10 col-12 mr-auto text-left">
                                <div class="home-single-slide-dec">
                                    <h2>Invest & double your desire bitcoin</h2>
                                    <div class="home-single-slide-button">
                                        <a href="#" class="btn-style btn-filled">Contact Us</a>
                                        <a href="#" class="btn-style btn-border">View More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end single slider -->
        </div>
    </section>
    <!-- END SLIDER SECTION  -->
    <!-- START ABOUT SECTION -->
    <section id="about" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h5>why buy & sell</h5>
                        <h3>
                            GHT
                            <span>Features</span>
                        </h3>
                    </div>
                </div>
            </div>
            <!-- end section title -->
            <div class="row text-center">
                <div
                    class="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="single-about">
                        <div class="single-about-img">
                            <div class="single-about-img-inner">
                                <a href="#">
                                    <img src="@/assets/img/bg/bg1.jpg" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="single-about-caption">
                            <div class="single-about-icon">
                                <i class="fab fa-btc"></i>
                            </div>
                            <div class="single-about-title">
                                <h5>Bitcoin Transition</h5>
                            </div>
                            <!-- <div class="single-about-dec">
                                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- end single about -->
                <div
                    class="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="single-about">
                        <div class="single-about-img">
                            <div class="single-about-img-inner">
                                <a href="#">
                                    <img src="@/assets/img/bg/bg4.jpg" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="single-about-caption">
                            <div class="single-about-icon">
                                <i class="fa fa-dollar-sign"></i>
                            </div>
                            <div class="single-about-title">
                                <h5>Coin Buy & Sell</h5>
                            </div>
                            <!-- <div class="single-about-dec">
                                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- end single about -->
                <div
                    class="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="single-about">
                        <div class="single-about-img">
                            <div class="single-about-img-inner">
                                <a href="#">
                                    <img src="@/assets/img/bg/bg5.jpg" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="single-about-caption">
                            <div class="single-about-icon">
                                <i class="fa fa-euro-sign"></i>
                            </div>
                            <div class="single-about-title">
                                <h5>Bitcoin & Ethereum</h5>
                            </div>
                            <!-- <div class="single-about-dec">
                                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- end single about -->
                <div
                    class="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="single-about">
                        <div class="single-about-img">
                            <div class="single-about-img-inner">
                                <a href="#">
                                    <img src="@/assets/img/bg/bg6.jpg" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="single-about-caption">
                            <div class="single-about-icon">
                                <i class="fab fa-gg"></i>
                            </div>
                            <div class="single-about-title">
                                <h5>Account Security</h5>
                            </div>
                            <!-- <div class="single-about-dec">
                                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- end single about -->
                <div
                    class="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="single-about">
                        <div class="single-about-img">
                            <div class="single-about-img-inner">
                                <a href="#">
                                    <img src="@/assets/img/bg/bg3.jpg" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="single-about-caption">
                            <div class="single-about-icon">
                                <i class="fa fa-ruble-sign"></i>
                            </div>
                            <div class="single-about-title">
                                <h5>Cryptocurrency Trading</h5>
                            </div>
                            <!-- <div class="single-about-dec">
                                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- end single about -->
                <div
                    class="single-about-item col-lg-4 col-md-4 col-sm-12 col-12 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="single-about">
                        <div class="single-about-img">
                            <div class="single-about-img-inner">
                                <a href="#">
                                    <img src="@/assets/img/bg/bg1.jpg" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="single-about-caption">
                            <div class="single-about-icon">
                                <i class="fa fa-shekel-sign"></i>
                            </div>
                            <div class="single-about-title">
                                <h5>Bitcoin Legality</h5>
                            </div>
                            <!-- <div class="single-about-dec">
                                <p>Lorem ipsum dolor sit consectetur adipiscing elit sed do.</p>
                            </div>-->
                        </div>
                    </div>
                </div>
                <!-- end single about -->
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END ABOUT SECTION -->
    <!-- START CHOOSE US SECTION -->
    <section id="chhoseus" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h5>Bitcoin Legality</h5>
                        <h3>
                            Why Choose
                            <span>GHT</span>
                        </h3>
                    </div>
                </div>
            </div>
            <!-- end section title -->
            <div class="row">
                <div class="col-lg-8 col-md-8 col-12 mb-lg-0 mb-md-0 mb-5">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 mb-5">
                            <div class="single-wcus">
                                <div class="single-wcus-icon">
                                    <i class="icofont icofont-bill"></i>
                                </div>
                                <div class="single-wcus-text">
                                    <h5>Easy Trading</h5>
                                    <p>adipiscing elit sedd eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                        <!-- end single chooseus -->
                        <div class="col-lg-6 col-md-6 col-12 mb-5">
                            <div class="single-wcus">
                                <div class="single-wcus-icon">
                                    <i class="icofont icofont-coins"></i>
                                </div>
                                <div class="single-wcus-text">
                                    <h5>Trading Strategy</h5>
                                    <p>Lorem ipsum dolor sit ametelid consectetur adipiscing elit sedd eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                        <!-- end single chooseus -->
                        <div class="col-lg-6 col-md-6 col-12 mb-lg-0 mb-md-0 mb-5">
                            <div class="single-wcus">
                                <div class="single-wcus-icon">
                                    <i class="icofont icofont-money"></i>
                                </div>
                                <div class="single-wcus-text">
                                    <h5>Money Exchange</h5>
                                    <p>Lorem ipsum dolor sit ametelid consectetur adipiscing elit sedd eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                        <!-- end single chooseus -->
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="single-wcus">
                                <div class="single-wcus-icon">
                                    <i class="icofont icofont-ui-travel"></i>
                                </div>
                                <div class="single-wcus-text">
                                    <h5>Security Ensure</h5>
                                    <p>Lorem ipsum dolor sit ametelid consectetur adipiscing elit sedd eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                        <!-- end single chooseus -->
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="single-wcus-promo">
                        <div class="single-wcus-promo-inner">
                            <h3>We are ready to fly with you.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
                            <a href="#" class="btn-style btn-border btn-border-2">Read More</a>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END CHOOSE US SECTION -->
    <!-- START SERVICE SECTION -->
    <section id="service" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h5>what we do</h5>
                        <h3>
                            GHT
                            <span>Services</span>
                        </h3>
                    </div>
                </div>
            </div>
            <!-- end section title -->
            <div class="services-slider owl-carousel owl-theme">
                <div class="single-service-item mt-5">
                    <div class="single-service">
                        <div class="single-service-img">
                            <img class="img-fluid" src="@/assets/img/service/1.jpg" />
                        </div>
                        <div class="single-service-title">
                            <div class="single-service-icon">
                                <i class="fab fa-gg"></i>
                            </div>
                            <div class="single-service-text">
                                <h5>Bitcoin Trading</h5>
                            </div>
                        </div>
                        <div class="single-service-dec">
                            <p>Lorem ipsum dolor sit amet consectetur ullamco adipiscing elit, sed do eiusmod tempor exercitat incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <!-- end single service -->
                <div class="single-service-item mt-5">
                    <div class="single-service">
                        <div class="single-service-img">
                            <img class="img-fluid" src="@/assets/img/service/3.jpg" />
                        </div>
                        <div class="single-service-title">
                            <div class="single-service-icon">
                                <i class="fa fa-shekel-sign"></i>
                            </div>
                            <div class="single-service-text">
                                <h5>Coin Buy & Sell</h5>
                            </div>
                        </div>
                        <div class="single-service-dec">
                            <p>Lorem ipsum dolor sit amet consectetur ullamco adipiscing elit, sed do eiusmod tempor exercitat incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <!-- end single service -->
                <div class="single-service-item mt-5">
                    <div class="single-service">
                        <div class="single-service-img">
                            <img class="img-fluid" src="@/assets/img/service/2.jpg" />
                        </div>
                        <div class="single-service-title">
                            <div class="single-service-icon">
                                <i class="fab fa-btc"></i>
                            </div>
                            <div class="single-service-text">
                                <h5>Bitcoin & Ethereum</h5>
                            </div>
                        </div>
                        <div class="single-service-dec">
                            <p>Lorem ipsum dolor sit amet consectetur ullamco adipiscing elit, sed do eiusmod tempor exercitat incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <!-- end single service -->
                <div class="single-service-item mt-5">
                    <div class="single-service">
                        <div class="single-service-img">
                            <img class="img-fluid" src="@/assets/img/service/4.jpg" />
                        </div>
                        <div class="single-service-title">
                            <div class="single-service-icon">
                                <i class="fa fa-dollar-sign"></i>
                            </div>
                            <div class="single-service-text">
                                <h5>Cryptocurrency Trading</h5>
                            </div>
                        </div>
                        <div class="single-service-dec">
                            <p>Lorem ipsum dolor sit amet consectetur ullamco adipiscing elit, sed do eiusmod tempor exercitat incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <!-- end single service -->
            </div>
            <div class="row mt-5">
                <div class="col-12 text-center">
                    <div class="serviceall-btn wow fadeInDown">
                        <a href="#">
                            Start Now
                            <i class="icofont icofont-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END SERVICE SECTION -->
    <!-- START PRICETABLE SECTION -->
    <section id="pricetable" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h5>GHT conversation</h5>
                        <h3>
                            Trade Bitcoin
                            <span>With Us</span>
                        </h3>
                    </div>
                </div>
            </div>
            <!-- end section title -->
            <div class="row">
                <div
                    class="col-lg-7 col-md-7 col-12 pr-lg-5 pr-md-5 pr-sm-0 pr-0 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="table-responsive">
                        <table class="bitland-table table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Cryptocurrency</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">24% Change</th>
                                    <th scope="col">Supppy</th>
                                    <th scope="col">24% Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <i class="icofont icofont-cur-baht"></i> Bitcoin
                                    </th>
                                    <td>85.78$</td>
                                    <td>34.29%</td>
                                    <td>427BTC</td>
                                    <td>34,89</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i class="icofont icofont-cur-dollar"></i> GHT
                                    </th>
                                    <td>97.45$</td>
                                    <td>45.20%</td>
                                    <td>492BTC</td>
                                    <td>67.82</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i class="fas fa-shekel-sign"></i> Degitalcash
                                    </th>
                                    <td>45.89$</td>
                                    <td>23.96%</td>
                                    <td>635BTC</td>
                                    <td>23.57</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i class="icofont icofont-cur-euro-true"></i> Ethereum
                                    </th>
                                    <td>78.35$</td>
                                    <td>84.78%</td>
                                    <td>395BTC</td>
                                    <td>67.10</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i class="icofont icofont-cur-dollar-plus"></i> Stellar
                                    </th>
                                    <td>45.89$</td>
                                    <td>98.29%</td>
                                    <td>829BTC</td>
                                    <td>89.34</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <i class="icofont icofont-cur-renminbi-true"></i> Ripple
                                    </th>
                                    <td>76.28$</td>
                                    <td>89.45%</td>
                                    <td>623BTC</td>
                                    <td>89.44</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-5 col-md-5 col-12">
                    <div id="chartContainer"></div>
                </div>
                <!-- end col -->
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END PRICETABLE SECTION -->
    <!-- START HOW WORK SECTION -->
    <section
        id="hworks"
        class="section-padding bg-gray section-back-image overlay"
        data-background="@/assets/img/bg/processbg.jpg"
    >
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h5 class="text-white">How work</h5>
                        <h3 class="text-white">
                            Work
                            <span>Process</span>
                        </h3>
                    </div>
                </div>
            </div>
            <!-- end section title -->
            <div class="row text-center">
                <div class="col-lg-4 col-md-4 col-12 mb-lg-0 mb-md-0 mb-5">
                    <div class="single-wprocess">
                        <div class="single-wprocess-icon">
                            <i class="fa fa-futbol"></i>
                        </div>
                        <div class="single-wprocess-text">
                            <h5>Trading Strategy</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-4 col-md-4 col-12 mb-lg-0 mb-md-0 mb-5">
                    <div class="single-wprocess">
                        <div class="single-wprocess-icon">
                            <i class="fa fa-users"></i>
                        </div>
                        <div class="single-wprocess-text">
                            <h5>Group Planing</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="single-wprocess">
                        <div class="single-wprocess-icon">
                            <i class="fa fa-handshake"></i>
                        </div>
                        <div class="single-wprocess-text">
                            <h5>Final Success</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END HOW WORK SECTION -->
    <!-- START PROMO 2 SECTION -->
    <section id="promot" class="section-padding">
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-6 col-md-6 col-12 pr-lg-5 pr-md-5 pr-sm-0 pr-0 mb-lg-0 mb-md-4 mb-sm-4 mb-4"
                >
                    <div class="row">
                        <div class="col-12 text-left">
                            <div class="section-title-2">
                                <h3>
                                    Promo
                                    <span>Video</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- end section title -->
                    <div class="youtube-promo-video-wrap">
                        <div class="youtube-promo-video-img">
                            <img class="img-fluid" src="@/assets/img/bg/bg8.jpg" />
                        </div>
                        <div class="youtube-promo-video">
                            <a
                                href="https://www.youtube.com/watch?v=OTewW0jWRQM"
                                data-title="GHT PROMO VIDEO"
                                data-vbtype="youtube"
                                class="venobox info vbox-item"
                                data-gall="gallu"
                            >
                                <i class="icofont icofont-ui-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="row">
                        <div class="col-12 text-left">
                            <div class="section-title-2">
                                <h3>
                                    Request
                                    <span>free quote</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <!-- end section title -->
                    <div class="home-p-form-wrapper">
                        <div class="home-p-form">
                            <form action="#">
                                <div class="row">
                                    <div class="form-group col-lg-6 mb-3">
                                        <input
                                            name="aname"
                                            class="form-control"
                                            id="afirst-name"
                                            placeholder="Your Name*"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="form-group col-lg-6 mb-3">
                                        <input
                                            name="aemail"
                                            class="form-control"
                                            id="aemail"
                                            placeholder="Email id*"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div class="form-group col-lg-6 mb-3">
                                        <input
                                            name="aphone"
                                            class="form-control"
                                            id="aphone"
                                            placeholder="Phone Number*"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="form-group col-lg-6 mb-3">
                                        <input
                                            name="asubject"
                                            class="form-control"
                                            id="asubject"
                                            placeholder="Subject"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div class="form-group col-lg-12 mb-3">
                                        <textarea
                                            rows="6"
                                            name="rmessage"
                                            class="form-control"
                                            id="adescription"
                                            placeholder="Your Message Here..."
                                            required
                                        ></textarea>
                                    </div>
                                    <div class="form-group col-lg-5 mb-lg-0 mb-md-0 mb-2 pr-0">
                                        <a
                                            href="#"
                                            title="Click here to submit your message!"
                                            class="btn-style btn-filled btn-filled-2"
                                        >
                                            Send
                                            <i class="fa fa-paper-plane"></i>
                                        </a>
                                    </div>
                                    <div class="form-group col-lg-7">
                                        <p>
                                            <strong>Note:</strong> We promise to not spam.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END PROMO 2 SECTION -->
    <!-- START PRICE SECTION -->
    <section id="price" class="section-padding bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h5>GHT packages</h5>
                        <h3>
                            Investment
                            <span>Plans</span>
                        </h3>
                        <p
                            class="text-secondary"
                        >Our investment plans are tailored to the level of your investment opportunities. By investing more for a longer period, you can count on higher earnings.</p>
                    </div>
                </div>
            </div>
            <!-- end section title -->
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12 mb-lg-0 mb-md-0 mb-5">
                    <div class="single-pricing">
                        <div class="single-pricing-head text-center">
                            <span class="price">
                                <sup>$</sup>
                                <span class="price-digit">25</span>/mo
                            </span>
                            <h5>Basic</h5>
                        </div>
                        <div class="single-pricing-body">
                            <div class="single-pricing-list">
                                <ul>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> After 24 hours
                                    </li>
                                    <li>
                                        <i class="icofont icofont-close-line"></i> Min: $100
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> Max: $999
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> Principal returned
                                    </li>
                                    <li>
                                        <i class="icofont icofont-close-line"></i> 1 Website
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-"></i> Free Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="single-pricing-button">
                            <a href="#" class="mt-3 d-block text-center rounded-0">Invest Now</a>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-4 col-md-4 col-12 mb-lg-0 mb-md-0 mb-5">
                    <div class="single-pricing">
                        <div class="single-pricing-head text-center">
                            <span class="price">
                                <sup>$</sup>
                                <span class="price-digit">45</span>/mo
                            </span>
                            <h5>Standard</h5>
                        </div>
                        <div class="single-pricing-body">
                            <div class="single-pricing-list">
                                <ul>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> 20 Projects
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> 200 GB Disk
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> 20 Emails
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> Unlimited Bandwidth
                                    </li>
                                    <li>
                                        <i class="icofont icofont-close-line"></i> Website
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> Free Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="single-pricing-button">
                            <a href="#" class="mt-3 d-block text-center rounded-0">Invest Now</a>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="single-pricing">
                        <div class="single-pricing-head text-center">
                            <span class="price">
                                <sup>$</sup>
                                <span class="price-digit">55</span>/mo
                            </span>
                            <h5>Premium</h5>
                        </div>
                        <div class="single-pricing-body">
                            <div class="single-pricing-list">
                                <ul>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> 30 Projects
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> 300 GB Disk
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> 30 Emails
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> Unlimited Bandwidth
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> 3 Website
                                    </li>
                                    <li>
                                        <i class="icofont icofont-check-alt"></i> Free Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="single-pricing-button">
                            <a href="#" class="mt-3 d-block text-center rounded-0">Invest Now</a>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END PRICE SECTION -->
    <!-- START TESTIMONIAL SECTION -->
    <section id="testimonial" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h5>our achievements</h5>
                        <h3>
                            Client
                            <span>Feedback</span>
                        </h3>
                    </div>
                </div>
            </div>
            <!-- end section title -->
            <div class="testimonial-wrapper bg-gray-2 section-padding">
                <div class="row">
                    <div class="col-lg-12 mx-lg-auto mx-md-auto mx-0 text-center">
                        <div class="testimonial-slider owl-carousel owl-theme">
                            <div class="single-testimonial">
                                <div class="single-testimonial-image">
                                    <img
                                        class="img-fluid rounded-circle"
                                        src="@/assets/img/team/person1.jpg"
                                    />
                                </div>
                                <div class="single-testimonial-content">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illodrut inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                                </div>
                                <div class="single-testimonial-meta">
                                    <p>- Jone Doe</p>
                                </div>
                            </div>
                            <!-- end single testimonial -->
                            <div class="single-testimonial">
                                <div class="single-testimonial-image">
                                    <img
                                        class="img-fluid rounded-circle"
                                        src="@/assets/img/team/person2.jpg"
                                    />
                                </div>
                                <div class="single-testimonial-content">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illodrut inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                                </div>
                                <div class="single-testimonial-meta">
                                    <p>- Hash Theme</p>
                                </div>
                            </div>
                            <!-- end single testimonial -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--- END CONTAINER -->
    </section>
    <!-- END TESTIMONIAL SECTION -->
    <!-- START CLIENT SECTION -->
    <div id="client" class="client-section-padding bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="client-slider owl-carousel owl-theme">
                        <div class="single-client">
                            <a href="#">
                                <img class="img-fluid" src="@/assets/img/clients/1.png" />
                            </a>
                        </div>
                        <div class="single-client">
                            <a href="#">
                                <img class="img-fluid" src="@/assets/img/clients/5.png" />
                            </a>
                        </div>
                        <div class="single-client">
                            <a href="#">
                                <img class="img-fluid" src="@/assets/img/clients/3.png" />
                            </a>
                        </div>
                        <div class="single-client">
                            <a href="#">
                                <img class="img-fluid" src="@/assets/img/clients/2.png" />
                            </a>
                        </div>
                        <div class="single-client">
                            <a href="#">
                                <img class="img-fluid" src="@/assets/img/clients/4.png" />
                            </a>
                        </div>
                        <div class="single-client">
                            <a href="#">
                                <img class="img-fluid" src="@/assets/img/clients/6.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--- END CONTAINER -->
    </div>
    <!-- END CLIENT SECTION -->
    <!-- START FOOTER -->
    <footer>
        <!--Footer top -->
        <div
            class="footer-top overlay section-back-image-2"
            data-background="@/assets/img/bg/slide1.jpg"
        >
            <div class="auto-container">
                <div class="row">
                    <div
                        class="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-5 mb-5 footer-widget"
                    >
                        <div class="footer-logo col-12 p-0">
                            <a href="index-2.html">
                                <div class="footer-logo-icon">
                                    <i class="fab fa-gg-circle"></i>
                                </div>
                                <div class="footer-logo-text">
                                    <h3>GHT</h3>
                                    <p>Bitcoin Trading Company</p>
                                </div>
                            </a>
                        </div>
                        <div class="about mb-2">
                            <p>We decided to attract not only big strategic partners represented by private organizations and legal entities from different business sectors, but also private individuals online in order to introduce significant changes into the roadmap of our company.</p>
                        </div>
                        <div class="footer-news">
                            <form action="#">
                                <div class="row">
                                    <div
                                        class="form-group col-lg-9 col-md-9 col-8 pr-lg-0 pr-md-0 pr-2"
                                    >
                                        <input
                                            name="semail"
                                            class="form-control"
                                            placeholder="Email Address"
                                            type="email"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        class="col-lg-3 col-md-2 col-2 p-0 fnews-btn"
                                    >
                                        <i class="fa fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End Widget -->
                    <div
                        class="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-5 mb-5 footer-widget"
                    >
                        <div class="footer-section-title col-12 no-padding">
                            <h3>Quick Links</h3>
                        </div>
                        <!-- END SECTION TITLE -->
                        <div class="col-12 footer-widget-inner">
                            <ul class="quick-link-list">
                                <li>
                                    <a href="#">
                                        <i class="fa fa-chevron-circle-right"></i> Testimonial
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-chevron-circle-right"></i> Investment plans
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-chevron-circle-right"></i> Strategies
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-chevron-circle-right"></i> Price charts
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-chevron-circle-right"></i> Bitcoin Trade
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-chevron-circle-right"></i> Market Price
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End Widget -->
                    <div
                        class="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-5 footer-widget"
                    >
                        <div class="footer-section-title col-12 no-padding">
                            <h3>latest Post</h3>
                        </div>
                        <!-- END SECTION TITLE -->
                        <div class="col-12 footer-widget-inner recentPost">
                            <div class="singleRecpost">
                                <img src="@/assets/img/blog/1.jpg" class="img-fluid" />
                                <h6 class="recTitle">
                                    <a href="#">Lorem ipsum dolor sit amet, consectetuer.</a>
                                </h6>
                                <p class="posted-on">3 DEC 2018</p>
                            </div>
                            <div class="singleRecpost">
                                <img src="@/assets/img/blog/2.jpg" class="img-fluid" />
                                <h6 class="recTitle">
                                    <a href="#">Lorem ipsum dolor sit amet, consectetuer.</a>
                                </h6>
                                <p class="posted-on">4 DEC 2018</p>
                            </div>
                            <div class="singleRecpost">
                                <img src="@/assets/img/blog/3.jpg" class="img-fluid" />
                                <h6 class="recTitle">
                                    <a href="#">Lorem ipsum dolor sit amet, consectetuer.</a>
                                </h6>
                                <p class="posted-on">5 DEC 2018</p>
                            </div>
                        </div>
                    </div>
                    <!-- End Widget -->
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 mb-0 footer-widget">
                        <div class="footer-section-title col-12 no-padding">
                            <h3>Stay With Us</h3>
                        </div>
                        <!-- END SECTION TITLE -->
                        <div class="col-12 footer-widget-inner">
                            <div class="single-fcontact mb-2">
                                <div class="single-fcontact-icon">
                                    <i class="icofont icofont-pin"></i>
                                </div>
                                <div class="single-fcontact-des">
                                    <h6>Compnay Name:</h6>
                                    <p>10004, Battery Park, New York, USA</p>
                                </div>
                            </div>
                            <div class="single-fcontact mb-2">
                                <div class="single-fcontact-icon">
                                    <i class="icofont icofont-mobile-phone"></i>
                                </div>
                                <div class="single-fcontact-des">
                                    <h6>Phone Number:</h6>
                                    <p>123-456-0975</p>
                                </div>
                            </div>
                            <div class="single-fcontact">
                                <div class="single-fcontact-icon">
                                    <i class="icofont icofont-eye-alt"></i>
                                </div>
                                <div class="single-fcontact-des">
                                    <h6>Door Open:</h6>
                                    <p>Mon - Sun : 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-4 footer-social-war">
                            <div class="footer-social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="icofont icofont-social-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icofont icofont-social-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icofont icofont-social-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icofont icofont-social-google-plus"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Widget -->
                </div>
            </div>
        </div>

        <!--Footer Bottom -->
        <div class="copyright">
            <div class="auto-container">
                <div class="row">
                    <div
                        class="col-lg-6 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-4 footer-menu text-center text-lg-left text-md-left"
                    >
                        <ul>
                            <li>
                                <a href="#">Company Profile</a>
                            </li>
                            <li>
                                <a href="#">Terms & Condition</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="col-lg-6 col-md-6 col-sm-12 col-12 copyright-text text-center text-lg-right text-md-right"
                    >
                        <p>
                            <a href="#" target="_blank">Golden Hub Inc.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- END FOOTER -->
</template>

<style scoped>
.hub {
    color: orange;
}
</style>