import React from "react";
import "../styles/footer.css";
import littleLogo from "../styles/content/USCIS_RGB_Hor_Blue_at20.svg";
import bigLogo from "../styles/content/footer-logo.svg";

const Footer = () => {
  return (
    <div id="footer-wrapper">
      <footer className="usa-footer usa-footer--medium" role="contentinfo">
      <div class="grid-container usa-footer__return-to-top">
        <a href="#" class="focusable">Return to top</a>
      </div>
  
             <div class="usa-footer__primary-section">
           <div class="grid-container">
             <div class="grid-row grid-gap ">
                              <div class="mobile-lg:grid-col-12">
                   <nav class="usa-footer__nav" aria-label="Footer navigation">
  
                        <ul class="grid-row grid-gap menu" data-level="0">
                            <li class="menu__item mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a href="https://www.uscis.gov/topics" class="nav__link usa-footer__primary-link" data-drupal-link-system-path="node/93148">Topics</a>
                </li>
                        <li class="menu__item mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a href="https://www.uscis.gov/forms/forms" class="nav__link usa-footer__primary-link" title="Forms" data-drupal-link-system-path="node/88393">Forms</a>
                </li>
                        <li class="menu__item mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a href="https://www.uscis.gov/newsroom" class="nav__link usa-footer__primary-link" title="News" data-drupal-link-system-path="node/4153">Newsroom</a>
                </li>
                        <li class="menu__item mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a href="https://www.uscis.gov/citizenship" class="nav__link usa-footer__primary-link" title="Citizenship" data-drupal-link-system-path="node/88387">Citizenship</a>
                </li>
                        <li class="menu__item mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a href="https://www.uscis.gov/green-card" class="nav__link usa-footer__primary-link" title="Green Card" data-drupal-link-system-path="node/42293">Green Card</a>
                </li>
                        <li class="menu__item mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a href="https://www.uscis.gov/laws-and-policy" class="nav__link usa-footer__primary-link" data-drupal-link-system-path="node/41528">Laws</a>
                </li>
                        <li class="menu__item mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
          <a href="https://www.uscis.gov/tools" class="nav__link usa-footer__primary-link" title="Tools" data-drupal-link-system-path="node/50433">Tools</a>
                </li>
          </ul>
    
  
  
  
  
  
                   </nav>
                 </div>
               
                       </div>
  
                      </div>
         </div>
      
                <div class="usa-footer__intermediate-section">
            <div class="grid-container">
  
                        <div class="grid-row grid-gap">
                <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                  <div class="mobile-lg:grid-col-auto">
                    <img class="usa-footer__logo-img" src={littleLogo} width="300" height="300" alt="U.S. Department of Homeland Security Seal, U.S. Citizenship and Immigration Services"/>
                </div>
                                </div>
                                                                <div class="usa-footer__contact-links mobile-lg:grid-col-6">
                    <div class="usa-footer__social-links grid-row grid-gap-1">
                                                                    <div class="grid-col-auto">
                            <a class="usa-social-link usa-social-link--facebook" href="https://www.facebook.com/uscis">
                              <span class="usa-social-link__icon usa-social-link__icon--facebook" role="img" aria-label="Facebook"></span>
                            </a>
                          </div>
                                                                                          <div class="grid-col-auto">
                            <a class="usa-social-link usa-social-link--twitter" href="https://www.twitter.com/uscis">
                              <span class="usa-social-link__icon usa-social-link__icon--twitter" role="img" aria-label="Twitter"></span>
                            </a>
                          </div>
                                                                                          <div class="grid-col-auto">
                            <a class="usa-social-link usa-social-link--youtube" href="https://www.youtube.com/uscis">
                              <span class="usa-social-link__icon usa-social-link__icon--youtube" role="img" aria-label="YouTube"></span>
                            </a>
                          </div>
                                                                                                                                                                              <div class="grid-col-auto">
                            <a class="usa-social-link usa-social-link--instagram" href="https://www.instagram.com/uscis">
                              <span class="usa-social-link__icon usa-social-link__icon--instagram" role="img" aria-label="Instagram"></span>
                            </a>
                          </div>
                                                                                          <div class="grid-col-auto">
                            <a class="usa-social-link usa-social-link--linkedin" href="https://www.linkedin.com/company/uscis">
                              <span class="usa-social-link__icon usa-social-link__icon--linkedin" role="img" aria-label="LinkedIn"></span>
                            </a>
                          </div>
                                                                                          <div class="grid-col-auto">
                            <a class="usa-social-link usa-social-link--email" href="https://public.govdelivery.com/accounts/USDHSCIS/subscriber/new" target="_blank">
                              <span class="usa-social-link__icon usa-social-link__icon--email" role="img" aria-label="Email"></span>
                            </a>
                          </div>
                                                              </div>
  
                    <h3 class="usa-footer__contact-heading">
                                            <a class="usa-link" href="https://www.uscis.gov/about-us/contact-us" style={{textDecoration: "underline", textTransform: "none"}}>Contact USCIS</a>
                                        </h3>
                    <address class="usa-footer__address">
                      <div class="usa-footer__contact-info grid-row grid-gap">
                                                                  </div>
                    </address>
                  </div>
                            </div>
            
            </div>
          </div>
        
      <div class="usa-footer__secondary-section">
        <div class="grid-container">
          <div class="grid-row grid-gap">
            <div class="grid-col-9">
              <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier">
                <div class="usa-identifier__container">
                  <div class="usa-identifier__logos">
                    <a href="https://www.dhs.gov" class="usa-identifier__logo">
                      <img class="usa-identifier__logo-img" src={bigLogo}  width="400px" height="400px" alt="Department of Homeland Security Seal"/>
                    </a></div>
                  <div class="usa-identifier__identity" aria-label="Agency description">
                    <p class="usa-identifier__identity-domain">USCIS.gov</p>
                    <p class="usa-identifier__identity-disclaimer">
                      An official website of the <a href="https://www.dhs.gov" style={{textDecoration: "underline"}}>U.S. Department of Homeland Security</a>
                    </p>
                  </div>
                </div>
              </section>
                              <div class="region region-footer_secondary">
      
  
  <nav aria-labelledby="block-uscis-design-footer-menu" id="block-uscis-design-footer" class="usa-identifier__section usa-identifier__section--required-links">
              
    <div  class="visually-hidden" id="block-uscis-design-footer-menu">Important links</div>
    
  
          <div class="usa-identifier__section usa-identifier__section--required-links">
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/about-us"  style={{textDecoration: "underline"}} class="usa-identifier__required-link" title="About USCIS" data-drupal-link-system-path="node/41972">About USCIS</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/website-policies/accessibility"  style={{textDecoration: "underline"}} class="usa-identifier__required-link" title="Accessibility" data-drupal-link-system-path="node/42012">Accessibility</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/about-us/budget-planning-and-performance"  style={{textDecoration: "underline"}} class="usa-identifier__required-link" title="Budget and Performance" data-drupal-link-system-path="node/42021">Budget and Performance</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/website-policies/dhs-component-websites"  style={{textDecoration: "underline"}} class="usa-identifier__required-link" title="DHS Components" data-drupal-link-system-path="node/88438">DHS Components</a>                                                  </li>
                                      
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/records/request-records-through-the-freedom-of-information-act-or-privacy-act"  style={{textDecoration: "underline"}} class="usa-identifier__required-link" title="Freedom of Information Act" data-drupal-link-system-path="node/41801">Freedom of Information Act</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/about-us/equal-employment-opportunity/equal-employment-opportunity-data-posted-pursuant-to-the-no-fear-act"  style={{textDecoration: "underline"}} class="usa-identifier__required-link" title="No FEAR Act Data" data-drupal-link-system-path="node/42220">No FEAR Act Data</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/website-policies/privacy-and-legal-disclaimers" class="usa-identifier__required-link"  style={{textDecoration: "underline"}} title="Privacy and Legal Disclaimers" data-drupal-link-system-path="node/47863">Privacy and Legal Disclaimers</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.uscis.gov/sitemap" class="usa-identifier__required-link"  style={{textDecoration: "underline"}} title="Site Map" data-drupal-link-system-path="sitemap">Site Map</a>                                                  </li>
                                      
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.oig.dhs.gov/" class="usa-identifier__required-link"   style={{textDecoration: "underline"}} title="Office of the Inspector General" data-drupal-link-system-path="node/88447">Office of the Inspector General</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.whitehouse.gov/" class="usa-identifier__required-link"  style={{textDecoration: "underline"}} title="The White House" data-drupal-link-system-path="node/88441">The White House</a>                                                  </li>
                                                  <li class="usa-identifier__required-links-item"><a href="https://www.usa.gov/" class="usa-identifier__required-link"   style={{textDecoration: "underline"}} title="USA.gov" data-drupal-link-system-path="node/88450">USA.gov</a>                                                  </li>
            </ul>
    </div>
  </div>
  
    </nav>
  
  
    </div>
  
                          <section class="usa-identifier__section usa-identifier__section--usagov" aria-label="U.S. government information and services">
                <div class="usa-identifier__container">
                  <div class="usa-identifier__usagov-description">Looking for U.S. government information and services?</div>
                  <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
                </div>
              </section>
            </div>
            <div class="grid-col-3 ntas-widget">
              <iframe id="ntas-frame" src="https://www.dhs.gov/ntas/" name="NationalTerrorismAdvisorySystem" title="National Terrorism Advisory System" width="170" height="180" scrolling="no" frameborder="0" seamless border="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
