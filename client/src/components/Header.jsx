import React, {useState, useEffect} from 'react';
import "../styles/main.css";
import flag from "../styles/content/uscis-flag.png";
import logo from "../styles/content/uscis-logo.svg";
import greenLock from "../styles/content/lock-icon.png";
import house from "../styles/content/white-house-icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretUp, faCaretDown, faLock} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
        const [state, setState] = useState({
            height: 0,
            deskTop: true,
            deskTopSignIn: false,
            heresHowYouKnow: true,
            mobile: false,
            mobileOpen: false,
            dtphHiddenDesktop: true,
            caretDown: true,
            heresHow: false,
            arrowUp: false
        });
        const { height, deskTop, deskTopSignIn, heresHowYouKnow, mobile, mobileOpen, dtphHiddenDesktop, caretDown, heresHow, arrowUp } = state;
        const handleSignIn = () => {
            setState(prevState => ({
                ...prevState,
                dtphHiddenDesktop: !prevState.dtphHiddenDesktop,
                caretDown: !prevState.caretDown
            }));
        };
    
        const handleMobileDropDown = () => {
            setState(prevState => ({
                ...prevState,
                mobileOpen: !prevState.mobileOpen
            }));
        };
    
        const heresHowFunction = () => {
            setState(prevState => ({
                ...prevState,
                heresHow: !prevState.heresHow,
                arrowUp: !prevState.arrowUp
            }));
        };
    
        const updateDimensions = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            setState(prevState => ({
                ...prevState,
                width: newWidth,
                height: newHeight,
                deskTop: newWidth > 876,
                mobile: newWidth <= 876,
                deskTopSignIn: false,
                mobileOpen: false
            }));
        };
    
        useEffect(() => {
            window.addEventListener('resize', updateDimensions);
            updateDimensions();
    
            return () => {
                window.removeEventListener('resize', updateDimensions);
            };
        }, []);

    return (
        <header id="dtph-header" className={`${mobile ? "dtph-header-freeze-pane ": ""}`}>
        <div id="dtph-header-first-wrapper">
        <div id="dtph-header-first">
            <div className="dtph-content-container">
                <div className="dtph-region dtph-region-header_first">
                    <div id="dtph-block-alertmessage">
                        <div className="dtph-field dtph-field--name-body field__item"><div>
                            <div className="hidden" id="dtph-preview-message">This is the USCIS preview website. Visit <a className="dtph-link-decorate dtph-a" href="https://www.uscis.gov">uscis.gov</a> for the official USCIS site.</div>
                            <div className="dtph-special-msg"><a className="dtph-a" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="c9e523d5-9539-4a0a-b923-0490925df3bc"></a> <a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="c9e523d5-9539-4a0a-b923-0490925df3bc" href="https://www.uscis.gov/about-us/uscis-response-to-covid-19">USCIS Response to Coronavirus (COVID-19)</a></div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div id="dtph-header-second">
            <div className="dtph-content-container dtph-header__items">
                <div className="dtph-region dtph-region-header_second_left">
                    <div id="dtph-block-officialsitelanguage">
                        <div className="dtph-field dtph-field--name-body dtph-field__item"><div id="dtph-header-flag">
                            <div id="dtph-header-flag-img"><img alt="U.S. flag" className="dtph-header-flag-icon dtph-img" src={flag}/></div>
    
                            <div id="dtph-official-text">An official website of the United States government&nbsp;&nbsp;&nbsp;&nbsp;<a onClick={heresHowFunction} className={`dtph-link-decorate dtph-a ${arrowUp ? "dtph-active": ""}`} href="#" id="dtph-us-gov-desc">Here's how you know</a></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="dtph-region dtph-region-header_second_right">
                    <div className="dtph-language-switcher-language-url" id="dtph-block-languageswitcher">
                        <div id="dtph-alt-lang-link"><span lang="es"><a href="https://www.uscis.gov/es" className="dtph-a" id="dtph-lang-color" hreflang="es" data-drupal-link-system-path="&lt;front&gt;">Español</a></span></div>
                    </div>
                    <div id="dtph-block-utilitylinks">
                        <div className="dtph-field dtph-field--name-body dtph-field__item"><div id="dtph-header-util-links">
                            <div className="dtph-inline-sep dtph-header-util-links__sep"><span></span></div>
                            <a className="dtph-util-link dtph-last dtph-a" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="74a4e61d-1c61-4081-9529-7fe905db85d1" href="https://www.uscis.gov/tools/multilingual-resource-center"><div id="dtph-globe-wrapper">
                                <svg className="dtph-svg svg-inline--fa fa-globe fa-w-16" role="presentation" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="globe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z"></path></svg>
                            </div> Multilingual Resources</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="dtph-primary-header">
            <div className="dtph-content-container">
                <div className="dtph-region dtph-region-header" style={{paddingTop: "10px"}}>
                <div id={`${arrowUp === false ? "dtph-block-howyouknowdescription": "dtph-make-invisible"}`}>
                        <div className="dtph-field dtph-field--name-body dtph-field__item"><div className="dtph-howyouknow-header-block" id="dtph-howyouknow-official">
                        <div className="dtph-howyouknow-header-block__icon"><img alt="Official Government Website" className="dtph-howyouknow-header-block__icon__img dtph-img" src={house} /></div>
    
                            <div>
                                <p className="dtph-p"><strong className="dtph-strong">Official websites use .gov</strong><br />
                                    A <strong className="dtph-strong">.gov</strong> website belongs to an official government organization in the United States.</p>
                            </div>
                        </div>
    
                            <div className="dtph-howyouknow-header-block" id="dtph-howyouknow-secure">
                                <div className="dtph-howyouknow-header-block__icon"><img alt="Secure Website" className="dtph-howyouknow-header-block__icon__img dtph-img" src={greenLock} /></div>
                                <div>
                                    <p className="dtph-p"><strong className="dtph-strong">Secure .gov websites use HTTPS</strong><br />
                                        A <strong style={{display: "inline"}} className="dtph-strong">lock</strong> ( <FontAwesomeIcon icon={faLock} style={{color: "#000000" }}></FontAwesomeIcon> ) or <strong className="dtph-strong">https://</strong> means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.</p>
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                </div>
    
            </div>
        </div>
    
        <div id="dtph-header-third" className={`${mobile ? "dtph-shadow": "" }`}>
            <div className={`dtph-header-third__first ${mobileOpen ? "dtph-menu__open": "dtph-menu__closed"}`}id="dtph-no-shadow" style={{marginBottom: "10px"}}>
                    <div className="dtph-menu-toggle dtph-menu-toggle--header">
                        <button onClick={handleMobileDropDown} type="button" className="dtph-button dtph-menu-toggle__link-horizontal dtph-highlight-strong" aria-label="Open Menu" data-alt="Close Menu">
                            <svg className={`dtph-svg svg-inline--fa fa-bars fa-w-14 ${mobileOpen? "dtph-hide": ""}`} aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path></svg>
                            <svg className={`dtph-svg svg-inline--fa fa-times fa-w-10 dtph-hide-close  ${mobileOpen? "": "dtph-hide"}`} aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg><span className="dtph-menu-toggle__text" id="dtph-bold-text-menu">
                            { //Check if message failed
                        state.mobileOpen
                        ? "Closed"
                        : "Menu"
                         }
                            </span>
                        </button>
                    </div>
                    <div className="dtph-region dtph-region-header_third_first">
                        <div id="dtph-block-uscis-design-branding">
                            <div id="dtph-home-logo">
                                <a href="https://www.uscis.gov/" rel="home" className="dtph-a">
                                    <img className="dtph-img" src={logo} alt="U.S. Department of Homeland Security Seal, U.S. Citizenship and Immigration Services" />
                                </a>
                            </div>
    
                        </div>
                        <div id="dtph-block-searchplaceholder">
                            <div className="dtph-field dtph-field--name-body dtph-field__item">
                                <div id="dtph-site-search" className={`${mobileOpen? "dtph-hide": ""}`}>
                                <form accept-charset="UTF-8" action="https://search.uscis.gov/search" id="dtph-search-form" method="get" role="search"><input className="dtph-input" name="utf8" type="hidden" value="✓" /><input id="dtph-affiliate" name="affiliate" type="hidden" value="uscis_gov" /><div className={`dtph-input-group dtph-input ${deskTop?"dtph-make-s-searearch-invisible": ""}`}><input autocomplete="off" className="dtph-usagov-search-autocomplete dtph-ui-autocomplete-input dtph-fsrVisible dtph-input-group__field dtph-input" data-lang="en" maxlength="100" name="query" placeholder="Search our Site" title="Search our Site" type="text" />
                                <div className="dtph-input-group__btn--icon"><button aria-label="Submit search" className="dtph-btn-icon dtph-btn--search-submit" type="submit">
                                    <svg className="dtph-svg svg-inline--fa fa-search fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                                </button>
                                </div>
                                </div>
                                </form>
                                <div className="dtph-sign-in-link" id="dtph-sign-in" onClick={handleSignIn}>
                                    <div className="dtph-inline-sep dtph-sign-in-link__sep"><span></span></div>
    
                                    <div className="dtph-sign-in--drop-down__toggle"> 
                                        <div className="dtph-sign-in--button">
                                            <div className="dtph-highlight-strong dtph-font-ssp-semibold dtph-sign-in--button__text" tabindex="0" id="for-semibold">Sign In 
                                               {
                                                 state.caretDown
                                                 ?  <FontAwesomeIcon icon={faCaretDown} style={{float: "right", marginRight: "10px", fontSize: "1.5rem", zIndex: 99, marginTop: "-2px", marginLeft: "5px", position: "relative", color: "#036" }}></FontAwesomeIcon>
                                                 :
                                                    <FontAwesomeIcon icon={faCaretUp} style={{float: "right", marginRight: "10px", fontSize: "1.5rem", zIndex: 99, marginTop: "-2px", marginLeft: "5px", position: "relative", color: "#036" }}></FontAwesomeIcon>
                                            }
                                        </div>
                                        </div>
                                    </div>
                                    <div className={`dtph-sign-in--drop-down ${dtphHiddenDesktop ? "dtph-hidden-desktop": ""}`}>
                                        <div className="dtph-sign-in__menu-header">Access USCIS online services.</div>
                                        <div>
                                            <ul className="dtph-sign-in-links"><li className="dtph-sign-in__menu-item"><a className="dtph-a" data-entity-substitution="canonical" data-entity-type="node" href="https://my.uscis.gov/authenticate/saml/init" data-lang="en">Sign In</a></li>
                                            <li className="dtph-sign-in__menu-item"><a className="dtph-a" data-entity-substitution="canonical" data-entity-type="node" href="https://my.uscis.gov/authenticate/saml/sign_up" data-lang="en">Create Account</a></li>
                                            </ul></div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                 <div className={`dtph-content-container dtph-header-third__second  ${mobileOpen ? "dtph-menu__open": "dtph-menu__closed"}`}>
                <div className="dtph-region dtph-region-header_third_second">
                    <div id={` ${mobileOpen ? "dtph-block-signinlink": ""}`}>
                        <div className="dtph-field dtph-field--name-body dtph-field__item">
                            <div className={`${mobileOpen ? "dtph-sign-in-link__mobile": "dtph-hide"}`}><a className="dtph-a dtph-my-uscis-link dtph-font-ssp-semibold" data-entity-substitution="canonical" data-entity-type="node" href="https://my.uscis.gov/authenticate/saml/init" id="dtph-make-dark-blue" data-lang="en">Sign In </a></div>
                            <div className={`${mobileOpen ? "dtph-sign-in-link__mobile": "dtph-hide"}`}><a className="dtph-a dtph-my-uscis-link dtph-font-ssp-semibold"  id="dtph-make-dark-blue" data-entity-substitution="canonical" data-entity-type="node" href="https://my.uscis.gov/authenticate/saml/sign_up" data-lang="en">Create Account</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={`${mobileOpen ? "": "dtph-primary-nav"}`}>
                <div className="dtph-region dtph-region-navigation">
                    <nav aria-labelledby="dtph-block-horizontal-menu" id="dtph-block-horizontal">
    
                        <div  className="dtph-visually-hidden" id="dtph-block-horizontal-menu">Horizontal Menu</div>
                        <ul className="dtph-menu--horizontal dtph-menu" data-level="0">
                        <li className="dtph-menu__item">
                                <a href="https://www.uscis.gov/topics" title="Topics" className="dtph-nav__link">Topics</a>
                            </li>
                            <li className="dtph-menu__item">
                                <a href="https://www.uscis.gov/forms/forms" title="Forms" className="dtph-nav__link">Forms</a>
                            </li>
                            <li className="dtph-menu__item">
                                <a href="https://www.uscis.gov/newsroom" title="Newsroom" className="dtph-nav__link">Newsroom</a>
                            </li>
                            <li className="dtph-menu__item">
                                <a href="https://www.uscis.gov/citizenship" title="Citizenship" className="dtph-nav__link">Citizenship</a>
                            </li>
                            <li className="dtph-menu__item">
                                <a href="https://www.uscis.gov/green-card" title="Green Card" className="dtph-nav__link">Green Card</a>
                            </li>
                            <li className="dtph-menu__item">
                                <a href="https://www.uscis.gov/laws-and-policy" title="Laws" className="dtph-nav__link">Laws</a>
                            </li>
                            <li className="dtph-menu__item">
                                <a href="https://www.uscis.gov/tools" title="Tools" className="dtph-nav__link">Tools</a>
                            </li>
                        </ul>
                    </nav>
                    <div id="dtph-block-mobilemenulinks">
                        <div className="dtph-field dtph-field--name-body dtph-field__item"><ul className="dtph-mobile-menu-links"><li className="dtph-item"><a className="dtph-a" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="7bb50634-6a64-46c8-bf6c-98a08b657c56" href="https://www.uscis.gov/about-us/contact-us">Contact us</a></li>
                            <li className="dtph-item"><a  className="dtph-a" data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="74a4e61d-1c61-4081-9529-7fe905db85d1" href="https://www.uscis.gov/tools/multilingual-resource-center">Multilingual Resources</a></li>
                            <li className="dtph-item"><a  className="dtph-a" href="#" onclick="NITAgent.ShowAgent('GlobalLaunchPoint'); return false;">Ask Emma</a></li>
                        </ul></div>
                    </div>
                </div>
            </div>
            </div>
    </header>
  );
};

export default Header;
