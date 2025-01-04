import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import '../index.css'
import ProcessSteps from './ProcessSteps';
import Testimonials from '../Components/Testimonials';
import TechSlider from '../Components/TechSlider';
import Header from '../Components/Header';

const Home = () => {
  const handleReadMoreClick = () => {
    alert("More information coming soon!");
  };
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavVisible(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(event.target)) {
      setIsNavVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <> 
    
      <div className="container-fluid"> 
      {/* <header className="header">
      <nav className="navbar">
        <div className="toggler" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isNavVisible ? 'visible' : ''}`}>
          <li><a href="#welcome-section">HOME</a></li>
          <li><a href="#about-section">ABOUT</a></li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Service
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Courses
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <li><a href="#our-work-section">OUR WORK</a></li>
          <li><a href="#contact-section">CONTACT</a></li>
        </ul>
      </nav>
    </header> */}
  <Header/>
  <main className="main-content">
    <div className="welcome-section" id="welcome-section">
      <h1>Welcome to Akshaya Technolab</h1>
      <p>Learn today, Lead tomorrow with Akshaya Technolab</p>
      <p>
        In today’s fast-paced digital world, staying ahead requires continuous
        learning and adaptation to the latest technological advancements. Our
        Technolab offers you the unique opportunity to learn from industry’s best
        IT professionals who bring vast experience and expertise in modern
      technology.
      </p>
      <button className="read-more" onClick={handleReadMoreClick}>Read More</button>
    </div>

    <div className="design-element">
      {/* <div className="circle"> */}
        <img src="https://img.freepik.com/premium-photo/futuristic-computer-lab-with-bright-blue-lighting-generative-ai_952778-2352.jpg" alt="" />
      {/* </div> */}
   </div> 
    </main>
     </div>

     <div className="info-section">
     
          <div className="child">
            <img src="https://img.freepik.com/free-photo/futuristic-computer-lab-with-bright-blue-lighting-generated-by-ai_188544-28200.jpg" alt="" />
          </div>
          <div className="child">
          <h2>INNOVATIVE IT SOLUTION TAILORED TO YOUR BUSINESS NEED</h2>
          <p>
            Apollo Infotech offers comprehensive IT solutions and services that are
            customized to meet the unique needs of each client. With expertise in
            emerging technologies and a commitment to exceptional customer service,
            our solutions streamline business processes, increase efficiency, and
            save time and money.
          </p>

          </div>
        </div>

{/*  */}

<div className="services-container">
  <div className="section-title">
    <h1>OUR SERVICES</h1>
    <p>We Provide Professional Services</p>
  </div>
  <div className="cards-grid">
    <div className="card-wrapper">
      <div className="service-card">
        <div className="card-front">
          <div
            className="card-image"
            style={{ backgroundImage: 'url("https://miro.medium.com/v2/resize:fit:960/1*0WDqECSWiU6N41iBQc3KPQ.png")' }}
          />
          <div className="card-content">
            <h3>Web Development</h3>
            <p>Hover to learn more</p>
          </div>
        </div>
        <div className="card-back">
          <h3>Web Development</h3>
          <p>
            Custom website development using the latest technologies. We create
            responsive, user-friendly websites that help grow your business.
          </p>
        </div>
      </div>
    </div>
    <div className="card-wrapper">
      <div className="service-card">
        <div className="card-front">
          <div
            className="card-image"
            style={{ backgroundImage: 'url("https://media.licdn.com/dms/image/D5612AQHdV7JF7Avgcw/article-cover_image-shrink_720_1280/0/1711964512962?e=2147483647&v=beta&t=1eat3uVu7d4KmWY6OBWadizbvrQDVhHxGhvxgJWv0xI")' }}
          />
          <div className="card-content">
            <h3>Mobile Apps</h3>
            <p>Hover to learn more</p>
          </div>
        </div>
        <div className="card-back">
          <h3>Mobile Apps</h3>
          <p>
            Native and cross-platform mobile application development for iOS and
            Android platforms, delivering seamless user experiences.
          </p>
        </div>
      </div>
    </div>
    <div className="card-wrapper">
      <div className="service-card">
        <div className="card-front">
          <div
            className="card-image"
            style={{ backgroundImage: 'url("https://www.infiraise.com/wp-content/uploads/2022/09/UI-Developers-And-UX-Developers.jpg")' }}
          />
          <div className="card-content">
            <h3>UI/UX Design</h3>
            <p>Hover to learn more</p>
          </div>
        </div>
        <div className="card-back">
          <h3>UI/UX Design</h3>
          <p>
            Creative and intuitive user interface design with focus on user
            experience, ensuring your digital products stand out.
          </p>
        </div>
      </div>
    </div>
    <div className="card-wrapper">
      <div className="service-card">
        <div className="card-front">
          <div
            className="card-image"
            style={{ backgroundImage: 'url("https://esolz.net/wp-content/uploads/2021/04/PHP-Development-Technology.png")' }}
          />
          <div className="card-content">
            <h3>Php Development</h3>
            <p>Hover to learn more</p>
          </div>
        </div>
        <div className="card-back">
          <h3>Cloud Services</h3>
          <p>
            Complete cloud solutions including deployment, management, and
            scaling of applications on major cloud platforms.
          </p>
        </div>
      </div>
    </div>
    <div className="card-wrapper">
      <div className="service-card">
        <div className="card-front">
          <div
            className="card-image"
            style={{ backgroundImage: 'url("https://zerogravitymarketing.com/wp-content/uploads/2024/01/six-main-types-of-digital-marketing-955x500.jpg")' }}
          />
          <div className="card-content">
            <h3>Digital Marketing</h3>
            <p>Hover to learn more</p>
          </div>
        </div>
        <div className="card-back">
          <h3>Digital Marketing</h3>
          <p>
            Strategic digital marketing services including SEO, social media
            marketing, and content strategy to boost your online presence.
          </p>
        </div>
      </div>
    </div>
    <div className="card-wrapper">
      <div className="service-card">
        <div className="card-front">
          <div
            className="card-image"
            style={{ backgroundImage: 'url("https://www.sapphiresolutions.net/images/it_consulting_services/images/it_consulting_banner.svg")' }}
          />
          <div className="card-content">
            <h3>IT Consulting</h3>
            <p>Hover to learn more</p>
          </div>
        </div>
        <div className="card-back">
          <h3>IT Consulting</h3>
          <p>
            Expert IT consulting services to help your business leverage
            technology effectively and stay ahead of the competition.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/*  */}

<ProcessSteps/>
<Testimonials/>
<TechSlider/>

{/* <div className="plan-container">
  <div className="plan-header">
    <h1>Our Plan</h1>
    <h2>How to Make Responsive Design with Animations</h2>
  </div>
  <div className="plan-content">
    <div className="background-circle"></div> 
    <div className="plan-timeline">
      <div className="steps-container">
        <div className="step-item">Plan</div>
        <div className="step-item">Welcome</div>
        <div className="step-item">Welcome</div>
        <div className="step-item">Design</div>
      </div>
      <img 
        src="https://media-hosting.imagekit.io//6502e192f36947a2/Group%2013%20(2).png?Expires=1735560903&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MLq8JsbtroVxQZ3m5cqHXwFGxnIP9TaNlUcYfmFDTddGODS9V5KyGih46Y51QLXBAs0h4Z5u4H42UuAzPROmuTp-zbIh4Zhx7UrQGhUdbR7KQ~lnrTctFld2ZW4TRDuzIfl7yJjlAhuSI4r7T3-HYdRWTuWrmrU0ipsPSTvk-r7avGLv3SvczShmpwSOzuVLdtPtoGgqh-cj7W7hSLrhN2jvgCrZuJl7xWSAs-Jk9NE4eY0HSY5jDFJErn1oIqDnsSae4Z0tE~NRM4zE81MGr9lLESsix6UtvuyX5mggE8xKS53vPBDdaeeCLKZwUisUqVxvy5AqhJHKMgX3KAdlNw__"
        alt="Plan Diagram"
      />
    </div>
  </div>
</div> */}



    </>
  )
}

export default Home