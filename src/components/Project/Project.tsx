import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import figmaIcon from "../../assets/figma--v1.png";

import canvaIcon from "../../assets/canva.png";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        
        <h3>Technical Projects</h3>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://takeitideas.in/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://takeitideas.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Take It Ideas | Organizational Website</h3>
              <p>
               Description: A clean, responsive company website built for Take It Ideas Innovative Solutions, focusing on youth empowerment, process optimization, and tech-driven learning services. Showcases programs, internship opportunities, and corporate culture.

              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Reactjs</li>
                 <li>(hosted via takeitideas.in)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://vercel.com/harsha-gadigones-projects/rework-ai">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://rework-ai-iota.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Rework AI (HR-Automation Platform)</h3>
              <p>Description: A dynamic AI-powered platform designed to optimize HR workflows and enhance efficiency. It automates talent management, onboarding, and task assignments using intelligent interfaces and streamlined data pipelines.</p>
                         
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Reactjs</li>
                <li>(deployed via Vercel)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://chatbot-pi-wine.vercel.app/">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://chatbot-pi-wine.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3> AI Wine Advisor (AI Chatbot) </h3>
              <p>An AI-powered chatbot designed for business websites to help users get instant answers 
    about services, offerings, or problems they are facing. It allows users to select queries 
    from suggested options, delivers solutions in real-time, and also provides contact 
    information like email and phone number.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
                <li>Botpress</li>
                <li>(deployed via Vercel)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://chatbot2-tau.vercel.app/">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://chatbot2-tau.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AI Chatbot (Version 2) </h3>
              <p>Description: Advanced conversational assistant with enhanced natural language understanding and UI refinements, enabling richer user engagement and smarter responses.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>(deployed via Vercel)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://framer-gilt.vercel.app/">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://framer-gilt.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Framer Gilt Design Demo </h3>
              <p>Description: A styling and prototyping demo showcasing frame-based UI interactions, purely built with front-end techniques using Framer. Ideal for visual storytelling and UI experimentation.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>(deployed via Vercel)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


       <h3>Design Projects</h3>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.figma.com/proto/pttqFJamlNR4oeCdKJMCvO/Food-Cafe-design-by-harsha-gadigone?node-id=86-5&p=f&t=piwUDVRnFevwgLnu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A6" target="_blank" rel="noreferrer">
                  <img src={figmaIcon} alt="Visit site" /> </a>
                <a href="https://www.figma.com/proto/pttqFJamlNR4oeCdKJMCvO/Food-Cafe-design-by-harsha-gadigone?node-id=86-5&p=f&t=piwUDVRnFevwgLnu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A6" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Food Cafe App UI</h3>
              <p>
               A clean and modern food ordering app interface designed with a focus on usability and visual hierarchy. Includes menu, item pages, and order flow.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Figma</li>
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.figma.com/proto/yM622vFEc7RyHCGzx8MOYM/interior-designer?node-id=5-2&p=f&t=9CUK6cg1egRjRuJu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2" target="_blank" rel="noreferrer">
                  <img src={figmaIcon} alt="Visit site" /> </a>
                <a href="https://www.figma.com/proto/yM622vFEc7RyHCGzx8MOYM/interior-designer?node-id=5-2&p=f&t=9CUK6cg1egRjRuJu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Interior Designer Landing Page</h3>
              <p>
               Aesthetic and stylish landing page concept for an interior design business. Balanced white space, bold imagery, and elegant fonts enhance trust and brand appeal.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Figma</li>
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.figma.com/design/yM622vFEc7RyHCGzx8MOYM/interior-designer?node-id=112-135&t=91hnaf0ni1UpjiCg-0">
                  <img src={figmaIcon} alt="Visit site" /> </a>
                <a href="https://www.figma.com/design/yM622vFEc7RyHCGzx8MOYM/interior-designer?node-id=112-135&t=91hnaf0ni1UpjiCg-0" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio UI Concept</h3>
              <p>
               Conceptual layout for a personal portfolio site with animated hero sections and smooth scroll navigation. Emphasizes personality and design flair.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Figma</li>
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.figma.com/proto/yM622vFEc7RyHCGzx8MOYM/interior-designer?node-id=5-2&p=f&t=9CUK6cg1egRjRuJu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2">
                  <img src={figmaIcon} alt="Visit site" /> </a>
                <a href="https://www.figma.com/proto/yM622vFEc7RyHCGzx8MOYM/interior-designer?node-id=5-2&p=f&t=9CUK6cg1egRjRuJu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Interior Project Page</h3>
              <p>
               Interactive detail page design for an interior brand. Includes client testimonial section, project gallery, and responsive layout guidelines.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Figma</li>
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.figma.com/proto/wWHbk2HAEkRcSCYwoxu3wh/Instagram-Scrolling?node-id=1-24&starting-point-node-id=1%3A24">
                  <img src={figmaIcon} alt="Visit site" /> </a>
                <a href="https://www.figma.com/proto/wWHbk2HAEkRcSCYwoxu3wh/Instagram-Scrolling?node-id=1-24&starting-point-node-id=1%3A24" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Instagram Scroll Animation</h3>
              <p>
               A scrollable mobile layout simulating Instagram feed interaction with animation flow and smooth transitions. Built for motion UI practice.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Figma</li>
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
          
        </ScrollAnimation>



       <h3>Canva projects</h3>

     <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.canva.com/design/DAGbrwsQMJo/gwkabiWpGp5zWlS1XlUtGA/edit?utm_content=DAGbrwsQMJo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={canvaIcon} alt="Visit site" /> </a>
                <a href="https://www.canva.com/design/DAGbrwsQMJo/gwkabiWpGp5zWlS1XlUtGA/edit?utm_content=DAGbrwsQMJo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Creative Posters & Social Media</h3>
              <p>
              A collection of visually engaging posters designed for both company branding and client promotion. Includes social media creatives for campaigns, events, and announcements.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.canva.com/design/DAGeBs1MG1Q/5nzMmHv69iJTCus8x6ex_g/edit?utm_content=DAGeBs1MG1Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={canvaIcon} alt="Visit site" /> </a>
                <a href="https://www.canva.com/design/DAGeBs1MG1Q/5nzMmHv69iJTCus8x6ex_g/edit?utm_content=DAGeBs1MG1Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Certificate Design (Official Use)</h3>
              <p>
             Professional certificates designed for Take It Ideas' official training and recognition programs. Aligned with brand identity and layout standards.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.canva.com/design/DAGkH4lwSD8/DvagUquZAKLIPXQOJLJ_Bw/edit?utm_content=DAGkH4lwSD8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={canvaIcon} alt="Visit site" /> </a>
                <a href="https://www.canva.com/design/DAGkH4lwSD8/DvagUquZAKLIPXQOJLJ_Bw/edit?utm_content=DAGkH4lwSD8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Company Brochure (Content + Design)</h3>
              <p>
            Designed and written by me, this brochure presents the company's mission, services, and approach in a compelling format. Tailored for outreach and client communication.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.canva.com/design/DAGkIrcjZFA/5qZiKhFrT16kuvuh4snzAg/edit?utm_content=DAGkIrcjZFA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={canvaIcon} alt="Visit site" /> </a>
                <a href="https://www.canva.com/design/DAGkIrcjZFA/5qZiKhFrT16kuvuh4snzAg/edit?utm_content=DAGkIrcjZFA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Company Prospectus (Content + Design)</h3>
              <p>
            Designed and written by me, An official prospectus outlining Take It Ideas' ecosystem, programs, and value propositions. Designed to support partnerships and educational outreach.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://www.canva.com/design/DAGmLiFVE0o/UEaJg51YzqRRxDI7Xp0Obw/edit?utm_content=DAGmLiFVE0o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={canvaIcon} alt="Visit site" /> </a>
                <a href="https://www.canva.com/design/DAGmLiFVE0o/UEaJg51YzqRRxDI7Xp0Obw/edit?utm_content=DAGmLiFVE0o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Official Company ID Cards</h3>
              <p>
            Designed functional and visually consistent ID cards used by employees of Take It Ideas Innovative Solutions. Follows official layout, color, and print standards.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                 <li>Canva</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        
        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

      </div>
    </Container>
  );
}