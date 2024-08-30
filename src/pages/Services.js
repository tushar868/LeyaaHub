
import '../App.css';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header></Header>
      <main>
      <section className="section service" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title"><br></br>Services We Provide</h2>
        <p className="section-text">
          Explore the range of services <br /> Leyaa Hub has to offer
        </p>
        <ul className="grid-list-1">
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="desktop"></ion-icon>
              </div>
              <h3 className="h3">
                <a className="card-title">Web Design & Development</a>
              </h3>
              <p className="card-text">
                Unleash the potential of your online presence with our bespoke web design and development services. From eye-catching visuals to seamless functionality, we craft websites that leave a lasting impression.
              </p>
              <p className="card-text">
              <br></br> •  Custom Web Design : Tailored designs that reflect your brand’s identity and vision.
              <br></br> •  Responsive Design : Ensuring your website looks great on all devices, from desktops to smartphones.
              <br></br> •  User Experience (UX) : Creating intuitive and engaging user interfaces to enhance visitor satisfaction.
              <br></br> •  Content Management Systems (CMS) : Easy-to-manage websites using platforms like WordPress, Joomla, and Drupal.
              <br></br> •  E-commerce Integration : Seamlessly incorporating online shopping capabilities into your website.
              <br></br> •  Website Maintenance & Support : Ongoing support to keep your website up-to-date and secure.

              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="code"></ion-icon>
              </div>
              <h3 className="h3">
                <a className="card-title">Mobile App Development</a>
              </h3>
              <p className="card-text">
                Stay connected with your audience on the go. Leyaa Hub crafts mobile apps that combine functionality with an exceptional user experience, catering to the diverse needs of modern consumers.
              </p>
              <p className="card-text">
              <br></br> •  iOS and Android Apps : Development of robust mobile applications for both platforms.
              <br></br> •  User-Centric Design : Apps designed with the end-user in mind for optimal usability.
              <br></br> •  Cross-Platform Compatibility : Utilizing frameworks like React Native to ensure functionality across multiple platforms.
              <br></br> •  App Testing and QA : Rigorous testing to ensure your app is bug-free and performs well under all conditions.
              <br></br> •  App Store Optimization (ASO) : Strategies to improve your app’s visibility and downloads in app stores.
              <br></br> •  Post-Launch Support : Continuous updates and support to keep your app running smoothly.

              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="cart"></ion-icon>
              </div>
              <h3 className="h3">
                <a  className="card-title">E-commerce Solutions</a>
              </h3>
              <p className="card-text">
                Take your business online with our comprehensive e-commerce solutions. We specialize in creating user-friendly, secure, and visually appealing online storefronts that enhance your customers' shopping experience.
              </p>
              <p className="card-text">
              <br></br> •  Custom E-commerce Websites : Tailored online stores to meet your specific business needs.
              <br></br> •  Secure Payment Gatewaysb: Integration of reliable and secure payment processing options.
              <br></br> •  Inventory Management Systems : Tools to efficiently manage your stock and orders.
              <br></br> •  Shopping Cart Integration : Smooth and user-friendly shopping cart experiences.
              <br></br> •  SEO for E-commerce : Enhancing your store’s visibility on search engines to attract more customers.
              <br></br> •  Customer Relationship Management (CRM) : Systems to help manage customer interactions and data.

              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="bulb"></ion-icon>
              </div>
              <h3 className="h3">
                <a  className="card-title">Graphic Design</a>
              </h3>
              <p className="card-text">
                Creativity knows no bounds at Leyaa Hub. Our graphic design services cover everything from stunning logos to captivating marketing collateral, ensuring your brand stands out in a visually competitive world.
              </p>
              <p className="card-text">
              <br></br> •  Logo Design : Crafting unique and memorable logos that represent your brand.
              <br></br> •  Marketing Collateral : Designing brochures, flyers, posters, and other promotional materials.
              <br></br> •  Brand Identity : Developing cohesive brand guidelines including color schemes, typography, and imagery.
              <br></br> •  Packaging Design : Eye-catching designs that make your products stand out on the shelves.
              <br></br> •  Digital Graphics : Social media graphics, banners, and website visuals to engage your online audience.
              <br></br> •  Print Design : High-quality designs for business cards, letterheads, and other print materials.

              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="phone-portrait"></ion-icon>
              </div>
              <h3 className="h3">
                <a  className="card-title">Digital Marketing</a>
              </h3>
              <p className="card-text">
                Amplify your digital footprint with Leyaa Hub's digital marketing expertise. Our strategies encompass SEO, social media, and content marketing to drive traffic and boost your online presence.
              </p>
              <p className="card-text">
                Creativity knows no bounds at Leyaa Hub. Our graphic design services cover everything from stunning logos to captivating marketing collateral, ensuring your brand stands out in a visually competitive world.
              </p>
              <p className="card-text">
              <br></br> •  Search Engine Optimization (SEO) : Strategies to improve your website’s ranking on search engines.
              <br></br> •  Social Media Marketing : Engaging and growing your audience across platforms like Facebook, Instagram, and Twitter.
              <br></br> •  Content Marketing : Creating valuable content to attract and retain customers.
              <br></br> •  Pay-Per-Click (PPC) Advertising : Targeted advertising campaigns to drive traffic and conversions.
              <br></br> •  Email Marketing : Designing and executing email campaigns that convert.
              <br></br> •  Analytics and Reporting : Tracking and analyzing performance to optimize marketing efforts.

              </p>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon" style={{ backgroundColor: '#5c7c89' }}>
                <ion-icon name="build"></ion-icon>
              </div>
              <h3 className="h3">
                <a className="card-title">Branding and Advertisement</a>
              </h3>
              <p className="card-text">
                Your brand is your identity, and we are here to help you build a strong one. Our branding services ensure consistency, uniqueness, and a memorable brand image across all platforms.
              </p>
              <p className="card-text">
              <br></br> •  Brand Strategy : Developing a long-term plan for the development of a successful brand.
              <br></br> •  Brand Identity Development : Creating a cohesive visual and verbal identity for your brand.
              <br></br> •  Advertising Campaigns : Crafting compelling advertisements for print, digital, and broadcast media.
              <br></br> •  Market Research : Conducting research to understand your target audience and market position.
              <br></br> •  Rebranding Services : Revitalizing existing brands to align with new goals or market conditions.
              <br></br> •  Brand Consistency : Ensuring all your communications are aligned with your brand’s identity and values.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
      </main>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default Services;