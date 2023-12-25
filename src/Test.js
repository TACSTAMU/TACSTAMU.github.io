import $ from 'jquery';
import React, { useEffect, useRef, useState } from 'react';
import anime, { set } from 'animejs'
import './gridly.min.css';
import './bootstrap.css'

import './normalize_min.css';
import './milligram_cmin.css';
import './my_main.css';

import  aayush2 from './img/aayush2.png'
import Acc from './img/Acc.png'
import aditya2 from './img/aditya2.png'
import akshay2 from './img/akshay2.png'
import bp from './img/bp.png'
import capital_one from './img/capital_one.png'
import cbre from './img/cbre.png'
import chevron_logo from './img/chevron_logo.png'
import chevron from './img/chevron.png'
import credera from './img/credera.png'
import GM from './img/GM.png'
import IBM from './img/IBM.png'
import kayley2 from './img/kayley2.png'
import labatt from './img/labatt.png'
import microsoft from './img/microsoft.png'
import monte2 from './img/monte2.png'
import paycom from './img/paycom.png'
import pwc from './img/pwc.png'
import stickers from './img/stickers.png'
import simplify_logo from './img/simplify-logo.png'
import {Helmet } from 'react-helmet';
const Test = () => {
  const [sw, setSw] = useState(-1);
  const oned = useRef(null);
  const twod = useRef(null);
  const threed = useRef(null);
  const fived = useRef(null);
  const [r, setR] = useState(0);
  const svgid = useRef(null);
  const pathEls = document.querySelectorAll('path');
  const [email, setEmail] = useState('');

  const subscribe = () => {
    if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      var url = `https://listserv.tamu.edu/cgi-bin/wa?SUBED2=TACS&A=1&L=TACS&p=Anonymous&b=Subscribe&s=${encodeURIComponent(email)}`;
      window.open(url, '_blank');
    } else {
      alert("Invalid email address detected.");
    }		
  }

  const svgRes = () => {
    if($(window).width() < 1200) {
      svgid.current.setAttribute('transform','rotate(90)');
      $('#svgid').css('-webkit-transform','rotate(90deg)');
      setR(1);
    } else if(r === 1) {
      svgid.current.setAttribute('transform','rotate(0)');
      $('#svgid').css('-webkit-transform','rotate(0deg)');
      svgid.current.setAttribute('viewBox','0 0 1100 800');
      setR(0);
    }

    if($(window).width() < 463) {
      svgid.current.setAttribute('viewBox','120 -500 1000 1100');
      return;
    }

    if($(window).width() < 607) {
      svgid.current.setAttribute('viewBox','100 -400 1000 1100');
      return;
    }
    
    if($(window).width() < 1200) {
      svgid.current.setAttribute('viewBox','500 -100 100 800');
    }
  }

  useEffect(() => {
    
    const script1 = document.createElement('script');

    script1.src = "https://code.jquery.com/jquery-3.2.1.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    $.get("https://ipinfo.io?token=b141e80f25813f", function (response) {
      if(response.country !== "US"){
        window['ga-disable-UA-177957920-1'] = true;
      }
    }, "jsonp");

    const script2 = document.createElement('script');
    script2.src = "https://www.googletagmanager.com/gtag/js?id=UA-177957920-1";
    script2.async = true;
    document.body.appendChild(script2);


    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-177957920-1');

    
    const script3 = document.createElement('script');
    script3.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
    script3.integrity = "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q";
    script3.crossOrigin = "anonymous";
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js";
    script4.integrity = "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl";
    script4.crossOrigin = "anonymous";
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement('script');
    script5.src = "https://kit.fontawesome.com/ea9b8b20ae.js";
    script5.crossOrigin = "anonymous";
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement('script');
    script6.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js";
    script6.async = true;
    document.body.appendChild(script6);

    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);



    const preconnectLink1 = document.createElement('link');
    preconnectLink1.href = "https://fonts.googleapis.com";
    preconnectLink1.rel = "preconnect";
    document.head.appendChild(preconnectLink1);

    const preconnectLink2 = document.createElement('link');
    preconnectLink2.href = "https://fonts.gstatic.com";
    preconnectLink2.rel = "preconnect";
    preconnectLink2.crossOrigin = "";
    document.head.appendChild(preconnectLink2);

    

    const wRes = () => {
      if(!(sw === -1 || (Math.abs($(window).width() - sw)/sw)*100 > 10)) {
        return;
      }
      setSw($(window).width());
      let h  = $(window).height();
      oned.current.style.minHeight = h - 45 + "px";
      twod.current.style.minHeight = h - 45 + "px";
      threed.current.style.minHeight = h - 45 + "px";
      fived.current.style.minHeight = h - 45 + "px";
      svgRes() // You need to define this function
    }

    for (let i = 0; i < pathEls.length; i++) {
      let pathEl = pathEls[i];
      let offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(5000, 7000),
        delay: anime.random(0, 1000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
      });
    }

    svgRes();

    $(window).on('load', wRes);
    window.onresize = wRes;

   

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.head.removeChild(fontLink);
      document.head.removeChild(preconnectLink1);
    document.head.removeChild(preconnectLink2);
      $(window).off('load', wRes);
      window.onresize = null;
      
    }
  }, [sw, r]);
      return (
        <div>
          {/* jQuery first*/}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Bootstrap CSS */}
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
          {/**/}
          <title>TACS</title>
          {/*FONTS*/}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
          


          <div id="onel" />
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{backgroundColor: '#132fa1'}}>
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#landing" style={{color: '#fff478', fontSize: 'large'}}>{'{'}TACS{'}'}</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about" style={{paddingTop: '10px', paddingBottom: '0px'}}>About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#events" style={{paddingTop: '10px', paddingBottom: '0px'}}>Events</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#officers" style={{paddingTop: '10px', paddingBottom: '0px'}}>Officers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#sponsors" style={{paddingTop: '10px', paddingBottom: '0px'}}>Sponsors</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#guests" style={{paddingTop: '10px', paddingBottom: '0px'}}>Guest Speakers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#membership" style={{paddingTop: '10px', paddingBottom: '0px'}}>Membership</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="build4good.html" style={{paddingTop: '10px', paddingBottom: '0px'}}>.</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
          <div className="intro" id="landing">
            <div id="landback" className="land-back">
              {/*animated back*/}
              <div className="anim">
                <svg id="svgid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 800">
                  <g id="g112" fillRule="evenodd" fill="none">
                    <path style={{opacity: '0.7', stroke: '#e84533', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1}} id="path16" d="m -0.22,-52.44 11.16,11.08 c 0.77,0.77 1.4,2.28 1.4,3.35 V -5 l -117.64,116.03 -85.4,84.8 a 5.45,5.45 0 0 0 -1.4,3.35 v 100.67 c 0,1.08 0.89,1.96 1.97,1.96 h 50.4 c 1.09,0 1.98,0.88 1.98,1.96 l 0.07,26.92 c 0,1.07 0.9,1.96 1.98,1.96 l 335.73,0.13 c 1.09,0 1.98,0.88 1.98,1.96 v 36.79 l -42.99,43.78 a 5.52,5.52 0 0 1 -3.37,1.4 H 123.2" stroke="#9DCA40" />
                    <path style={{opacity: '0.7', stroke: '#d76835', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1}} id="path20" d="m 258.53,245.87 -31.7,31.48 a 5.52,5.52 0 0 1 -3.37,1.39 h -62.37 c -1.09,0 -2.6,0.62 -3.38,1.39 l -2.68,3.66 -264.59,0.02 c -1.08,0 -2.6,-0.63 -3.37,-1.4 l -47.3,-46.97 a 5.52,5.52 0 0 0 -3.37,-1.39 h -57.47 l -1.12,-34.61 c 0,-1.08 -0.63,-2.59 -1.4,-3.35 l -66.54,-65.94" stroke="#E5683E" />
                    <path style={{opacity: '0.7', stroke: '#3668c1', strokeOpacity: 1, strokeLinejoin: 'round', strokeLinecap: 'round'}} id="path28" stroke="#9F9FA0" />
                    <path style={{stroke: '#d7547e', strokeOpacity: 1, opacity: '0.7', strokeLinejoin: 'round', strokeLinecap: 'round'}} id="path50" d="m 718.65,484.51 c 0.77,0.76 2.29,1.38 3.37,1.38 l 41.9,-0.04 c 1.08,0 2.6,-0.62 3.37,-1.39 l 62.08,-61.68 c 0.83584,-0.92383 1.32994,-2.10614 1.4,-3.35 l -0.1,-268.18 c 0,-1.08 -0.63,-2.59 -1.4,-3.35 l -99.8,-99.28 c -0.93351,-0.831592 -2.12167,-1.321663 -3.37,-1.39 H 360.62 c -1.08,0 -2.6,0.63 -3.37,1.4 L 198.28,206.3 c -0.93615,0.83368 -2.12819,1.3239 -3.38,1.39 H 65.3 c -1.08,0 -2.6,0.62 -3.37,1.39 l -36.71,36.45 c -0.835843,0.92383 -1.329943,2.10614 -1.4,3.35 v 185.1" stroke="#e5683e" />
                    <path style={{opacity: '0.7', stroke: '#3668c1', strokeOpacity: 1, strokeLinejoin: 'round', strokeLinecap: 'round'}} id="path54" />
                    <path style={{opacity: '0.7', stroke: '#36d8c1', strokeOpacity: 1, strokeLinejoin: 'round', strokeLinecap: 'round'}} id="path68" d="M923.43 372.6V119.09c0-1.07-.64-2.58-1.4-3.34L757.4-47.74a5.52 5.52 0 0 0-3.37-1.39H351.57c-1.09 0-2.6.63-3.38 1.4L310.5-10.3" stroke="#9F83B6" />
                    <path id="path152" d="M 57.714983,419.21815 V 148.44969 a 3.9220643,3.9220643 112.5 0 1 1.148746,-2.77332 L 181.74671,22.793389 a 12.314103,12.314103 157.5 0 1 8.70739,-3.606717 h 560.12353 a 3.6617703,3.6617703 22.5 0 1 2.58926,1.072508 L 871.2619,138.35419" style={{fill: 'none', stroke: '#dd3a2b', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path158" d="M 949.48714,42.942445 V 486.45214 l -82.24519,82.24519 h -64.90576" style={{fill: 'none', stroke: '#e526c1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path160" d="M 86.898088,264.44264 H 274.59227 v 128.8089 L 386.38904,505.0483 v 196.12697" style={{fill: 'none', stroke: '#2b682c', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path162" d="M 106.24127,291.54361 H 242.48378 V 471.52508 L 459.24697,688.28827 H 960.29639 V 425.03426" style={{fill: 'none', stroke: '#e82ac1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path164" d="M 131.2948,165.62717 290.34396,6.5780049 h 273.78288" style={{fill: 'none', stroke: '#36685f', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path166" d="m 844.53425,277.61199 v 144.78607 l -57.48997,57.48997 h -185.7356 v 64.26329" style={{opacity: '0.7', fill: 'none', stroke: '#36d247', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1}} />
                    <path id="path168" d="M 9.4687355,655.19369 92.165644,737.8906 H 595.53562 v 42.77825 h 425.95208" style={{fill: 'none', stroke: '#e36849', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path170" d="m 982.28573,180.07915 v 156.30701 l 76.21197,76.21201 V 702.8996 H 840.15908" style={{fill: 'none', stroke: '#d368c1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path172" d="m 970.00752,206.90826 v 148.64063 l 77.16758,77.16762 V 691.55768 H 691.19937" style={{fill: 'none', stroke: '#b8cc47', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path174" d="M 221.38285,325.89445 V 447.252 H 117.20619 v 48.72947 l 48.94808,48.94808 h 314.46641" style={{opacity: '0.7', fill: 'none', stroke: '#36f0eb', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1}} />
                    <path id="path176" d="M 183.27211,597.66543 90.420004,504.81332 V 434.17718 L 79.497952,415.25964" style={{fill: 'none', stroke: '#e76833', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path178" d="m 165.8041,618.67364 75.46112,75.46112 h 41.67138" style={{fill: 'none', stroke: '#36cdc1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path180" d="m 307.47323,706.38291 17.50372,17.50372 h 161.60927" style={{fill: 'none', stroke: '#366847', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path182" d="M 420.30438,561.52955 523.07766,664.30283 H 796.91955" style={{fill: 'none', stroke: '#3668c1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path184" d="M 572.40427,651.45116 H 861.37139" style={{fill: 'none', stroke: '#3668c1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path190" d="m 73.04351,450.21572 v 64.42838 l 53.56237,53.56237 -37.710441,37.71044 -49.67422,-49.67422" style={{fill: 'none', stroke: '#92686a', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path192" d="M 594.96581,627.86712 V 555.05894 H 747.87536 L 871.1631,431.7712 V 229.24318 l 15.37236,-26.62572 v -62.22653" style={{fill: 'none', stroke: '#7c30e9', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path194" d="M 983.50811,679.02387 V 399.01649 L 961.72462,377.233 V 96.233839" style={{fill: 'none', stroke: '#361f9d', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path196" d="m 513.65058,699.21069 h 261.37133 l 50.87403,29.37213 H 1067.3388 V 407.93827" style={{fill: 'none', stroke: '#b0d821', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path198" d="M 616.90476,756.20662 H 1077.2445 V 321.15073" style={{fill: 'none', stroke: '#c85ce4', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path200" d="M 215.9066,618.79138 V 509.47677 H 347.42646 L 263.94514,425.99546 V 17.977467" style={{fill: 'none', stroke: '#3668c1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path202" d="m 643.66647,601.30079 h 228.63764 l 93.39608,-93.39608 v -94.00599" style={{fill: 'none', stroke: '#caebc1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path204" d="m 867.66766,22.89786 h 183.72814 v 44.765116 l -39.9951,39.995094 v 132.39807 h 67.4515 9.8161 v 447.18748" style={{fill: 'none', stroke: '#c96838', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path206" d="M 143.42453,23.149314 52.413836,114.16 23.542052,143.03179 v 48.27769 h 17.842787 v 326.40095" style={{fill: 'none', stroke: '#36e1c1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path208" d="M 30.100342,577.26862 163.48037,710.64865 h 112.41205" style={{fill: 'none', stroke: '#e86827', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path210" d="m 46.34804,726.32965 41.003293,41.00329 H 541.84259 v -47.95646 h 214.46803" style={{fill: 'none', stroke: '#d537c1', strokeWidth: '1px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1293" d="M -222.94089,781.80719 -57.034496,686.02108 V 186.10139 L -247.04625,-3.9103618" style={{fill: 'none', stroke: '#e7d8e1', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1295" d="M 1296.5196,781.40133 1150.1503,696.89498 V 155.60538 L 1338.0055,-32.249772" style={{fill: 'none', stroke: '#ebe900', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1297" d="m 1296.5166,-126.6605 h -145.753 l -32.1125,32.112459 181.2572,181.257212 V 653.38446 l 162.36,93.7386" style={{fill: 'none', stroke: '#9700de', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1301" d="m 1226.2714,158.10601 v 507.21891 l 218.1766,125.96434 -47.6995,82.61807 h -207.212 v -36.46576" style={{fill: 'none', stroke: '#ef0000', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1303" d="M -75.778405,865.40873 H -339.33613 l -28.30783,-49.0306 337.877355,-195.07358 V -15.449255" style={{fill: 'none', stroke: '#5d004a', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1305" d="M -93.078929,793.48086 -161.74214,674.55268 V 255.63797 h -188.95561" style={{fill: 'none', stroke: '#d579b6', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1307" d="m -320.54128,289.51908 h 188.06547 v 306.1625 L 43.258273,900.06194 H 1015.6255" style={{fill: 'none', stroke: '#cb6245', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1309" d="M 148.41125,835.04735 V 952.14524 H -327.9811" style={{fill: 'none', stroke: '#f8a100', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1311" d="M -96.582844,-141.75209 1.5696894,-43.599559 H 286.98368 V -188.53772" style={{fill: 'none', stroke: '#d80028', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1313" d="M -308.87344,54.610012 -219.67623,143.80723 21.558167,-97.427168 -59.258615,-178.24395" style={{fill: 'none', stroke: '#f30000', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1315" d="m 378.31139,-118.59786 h 679.46681 l 318.2249,318.2249 v 780.71969" style={{fill: 'none', stroke: '#00e7d3', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1317" d="m 538.58509,832.09002 v 103.03894 h 530.22191 38.7541 l 319.6042,-553.57073" style={{fill: 'none', stroke: '#2900d6', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1319" d="m 300.32225,-138.47787 47.50167,47.501669 h 631.95351 v 77.155398 H 1121.2888 L 1342.7773,207.66769 V 381.29552 H 1178.3085 V 179.55287 L 1356.3048,1.5565166" style={{fill: 'none', stroke: '#e922de', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1321" d="M 97.634427,-74.486308 H 1086.04 V 172.91818" style={{fill: 'none', stroke: '#000000', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1323" d="M 33.904548,531.8917 H -238.83107 v 290.35843 h 122.71035 v 96.92238 h -241.51635" style={{fill: 'none', stroke: '#e3d787', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                    <path id="path1325" d="M -270.54136,-6.863692 V 377.16572 h 90.39052 L -263.813,522.07282 V 994.6185" style={{fill: 'none', stroke: '#779f86', strokeWidth: '1px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, opacity: '0.7'}} />
                  </g></svg>
              </div>
            </div>
            <div className="inner">
              <div className="mycontent content">
                <div className="con-content">
                  <h1 style={{marginBottom: '25px'}}>{'{'}TACS{'}'}</h1>
                  <h3 id="ix" style={{margin: '40px', marginTop: 0}}>The Official Student Chapter of ACM @ Texas A&amp;M University</h3>
                  <div id="sub" className="row">
                    <div className="container">
                      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        Join our email list
                      </div>
                      <form class="form-inline" style={{justifyContent: 'center', marginTop: '3%'}}>
                        <div className="form-group mb-2">
                          <label htmlFor="form_email" className="sr-only" >Email</label>
                          <input type="text" style={{marginRight: '10px', borderColor: '#132fa1'}} className="form-control-plaintext" value={email} onChange={e => setEmail(e.target.value)} id="form_email" placeholder="example@tamu.edu" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2" onClick={subscribe} style={{textTransform: 'none', fontSize: '1em'}}>Subscribe</button>
                      </form>
                    </div>
                    <div className="container">
                      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        Connect with TACS-TAMU
                      </div>
                      <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', textDecoration: 'none'}}>
                        <a title="Email" target="_blank" href="mailto:tacs-officers@lists.tamu.edu" style={{textDecoration: 'none'}}><i className="fa fa-envelope" style={{fontSize: '32px', marginRight: '16px', color: '#132fa1'}} /></a>
                        <a title="Discord" target="_blank" href="https://discord.gg/CBWn8mKFvx"><i className="fab fa-discord" style={{fontSize: '32px', marginRight: '16px', color: '#132fa1'}} /></a>
                        <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/company/tamucs/"><i className="fa fa-linkedin" style={{fontSize: '32px', marginRight: '16px', color: '#132fa1'}} /></a>
                        <a title="Instagram" target="_blank" href="https://www.instagram.com/tacstamu/"><i className="fa fa-instagram" style={{fontSize: '32px', color: '#132fa1'}} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="rst" className="row conta">
            <div id="mm" className="col">
              <div id="about" />
              <div ref={oned} id="one" className="row" style={{width: '95%', margin: '0px auto'}}>
                <div className="tabb col">
                  <div className="row">
                    <div className="container">
                      <h4 className="ab">Our Mission</h4>
                      <div>
                        <p>As the student chapter of ACM, Texas A&amp;M Computing Society serves a dual purpose. We
                          not only encourage the exploration of computing technology, but also provide
                          guidance in navigating the field of computer science. TACS hosts both industry
                          professionals and academic experts as guest speakers throughout the semester. Each
                          meeting provides unique opportunities for networking and practical learning.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabb col">
                  <div className="row">
                    <div className="container">
                      <h4 className="ab">Meetings</h4>
                      <div>
                        <h3>Tech Talks</h3>
                        <p>Industry leaders and academics provide insight about new technology and cutting-edge
                          research. You will often have a chance to network with recruiters from renowned tech
                          companies.</p>
                        <p />
                      </div>
                      <div>
                        <h3>Workshops</h3>
                        <p>Workshops provide a chance for you to learn to use new tools, hands on. Experts will
                          guide you through the whole process step by step. We recently covered Git, Docker,
                          and Vue.js.</p>
                      </div>
                      <div>
                        <h3>Socials</h3>
                        <p>Game nights with TACS provide a fun study break during finals, and our course
                          scheduling socials help you optimize your next semester!</p>
                      </div>
                      <div>
                        <h3>Panels</h3>
                        <p>Listen to professionals and students talk about their experiences navigating through
                          challenges like graduate school or the job market.</p>
                        <p><b>Note: You don't need to be a member to attend our meetings!</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col" style={{paddingLeft: 0}}>
                  <div className="row">
                    <div className="container">
                      <h4 className="ab">Activities</h4>
                      <div>
                        <h3>The Big Event</h3>
                        <p>Volunteer with TACS for the largest one-day, student-run service project in the
                          nation. Each spring, we have the opportunity to give back to the residents of Bryan
                          and College Station by completing service projects such as yard work, window
                          washing, and painting.</p>
                      </div>
                      <div>
                        <h3>Intramural Sports</h3>
                        <p>We focus on teambuilding and friendly competition with other student organizations
                          through sports like soccer and volleyball.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="events" style={{padding: 0}} />
              <div ref={twod} id="two" className="row" style={{}}>
                <div className="col">
                  <div className="content-section" id="events">
                    <div className="container">
                      <div className="row">
                        <div className="heading-section col-md-12 text-center">
                          <h2><b>Events</b></h2>
                          <h3>Join us at one of our upcoming meetings</h3>
                          <div className="responsive-cal">
                            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=dGFtdS5lZHVfYWQ1NGxjYzg4Z3U4bGNsYjZ0OGg2MWRyNDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23AD1457&showTitle=0&showNav=0&mode=AGENDA&showDate=0&showPrint=0&showTabs=1&showCalendars=0&showTz=1" style={{borderWidth: 0}} width={800} height={600} frameBorder={0} scrolling="no" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="officers" />
              <div ref={threed} id="three" className="row">
                <div className="col">
                  <div className="row">
                    <div style={{maxWidth: '150rem'}} className="container">
                      <h2 style={{textAlign: 'center', marginTop: '0%'}}><b>Officers</b></h2>
                      <div id="mmbc" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        {/* <div class="card" style="width: 200px; margin: 20px;">
                                      <img class="card-img-top" src="img/rishi2.png" alt="Card image cap">
                                      <div class="card-body">
                                          <h5 class="card-title"><b>Rishi Phatak</b></h5>
                                          <p class="card-text">President</p>
                                          <div
                                              style="display: flex;justify-content: center;width: 100%;padding: 16px;padding-top: 0;">
                                          <a title='Email' target='_blank' href='mailto:rishi.phatak@tamu.edu'><i
                                                  class="fa fa-envelope"
                                                  style="font-size:16px; margin-right: 16px;"></i></a>
                                          <a title='LinkedIn' target='_blank'
                                              href='https://www.linkedin.com/in/rishi-phatak/'><i class="fa fa-linkedin"
                                                  style="font-size:16px; margin-right: 16px;"></i></a>
                                          <a title='GitHub' target='_blank'
                                              href='https://www.github.com/rishiphatak'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                </svg></a>
                                                                                      </div>
                                      </div>
                                  </div> */}
                        <div id="vp" className="card" style={{width: '200px', margin: '20px'}}>
                          <img className="card-img-top" src={aayush2} alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title"><b>Aayush Garg</b></h5>
                            <p className="card-text">President &amp; Webmaster</p>
                            <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                              <a title="Email" target="_blank" href="mailto:aayushg1414@tamu.edu"><i className="fa fa-envelope" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                              <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/aayushg1414"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                              <a title="GitHub" target="_blank" href="https://www.github.com/aayush-g1414"><svg xmlns="http://www.w3.org/2000/svg" style={{color: '#132fa1'}} width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg></a>
                            </div>
                          </div>
                        </div>
                        <div className="card" style={{width: '200px', margin: '20px'}}>
                          <img className="card-img-top" src={monte2} alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title"><b>Montgomery Bohde</b></h5>
                            <p className="card-text">Technical Lead</p>
                            <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                              <a title="Email" target="_blank" href="mailto:mbodhe2015@tamu.edu"><i className="fa fa-envelope" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                              <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/montgomery-bodhe"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                            </div>
                          </div>
                        </div>
                        <div className="card" style={{width: '200px', margin: '20px'}}>
                          <img className="card-img-top" src={akshay2} alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title"><b>Akshay Belhe</b></h5>
                            <p className="card-text">Outreach &amp; Treasurer</p>
                            <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                              <a title="Email" target="_blank" href="mailto:abelhe8900@tamu.edu"><i className="fa fa-envelope" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                              <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/akshaybelhe"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                            </div>
                          </div>
                        </div>
                        <div id="wm" className="card" style={{width: '200px', margin: '20px'}}>
                          <img className="card-img-top" src={aditya2} alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title"><b>Aditya Nambi</b></h5>
                            <p className="card-text">Logistics</p>
                            <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                              <a title="Email" target="_blank" href="mailto:anambi@tamu.edu"><i className="fa fa-envelope" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                              <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/aditya-nambi-048781211"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                            </div>
                          </div>
                        </div>
                        <div className="card" style={{width: '200px', margin: '20px'}}>
                          <img className="card-img-top" src={kayley2} alt="Card image cap" />
                          <div className="card-body">
                            <h5 className="card-title"><b>Kayley Vu</b></h5>
                            <p className="card-text">Creative</p>
                            <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                              <a title="Email" target="_blank" href="mailto:kayley_vu@tamu.edu"><i className="fa fa-envelope" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                              <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/kayley-vu"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div style={{maxWidth: '150rem'}} className="container">
                          <h2 style={{textAlign: 'center', marginTop: '20px'}}><b>Members</b></h2>
                          <div id="mmsc" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Mukil Vivek</b></h5>
                                <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                                  <a title="GitHub" target="_blank" href="https://github.com/Mukilv123"><i className="fa fa-github" style={{fontSize: '16px', marginRight: '16px' , color: '#132fa1'}} /></a>
                                </div>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Sreenu Hari</b></h5>
                                <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                                  <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/sreenuhari/"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px' , color: '#132fa1'}} /></a>
                                </div>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Rhea Phatak</b></h5>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Sriram Gaddam</b></h5>
                                <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                                  <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/sriram-gaddam-1819841bb/"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                                  <a title="GitHub" target="_blank" href="https://github.com/SriramGaddam5"><i className="fa fa-github" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                                </div>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Githin Johny</b></h5>
                                <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                                  <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/githin-johny/"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                                </div>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Nicholas Dienstbier</b></h5>
                                <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '16px', paddingTop: 0}}>
                                  <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/nicholasdienstbier/"><i className="fa fa-linkedin" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                                  <a title="GitHub" target="_blank" href="https://github.com/nicholasdienstbier"><i className="fa fa-github" style={{fontSize: '16px', marginRight: '16px', color: '#132fa1'}} /></a>
                                </div>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Ryan Mohammadian</b></h5>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Chakridhar Chirredy</b></h5>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Ankit Khatri</b></h5>
                              </div>
                            </div>
                            <div className="card" style={{width: '200px', margin: '20px', textAlign: 'center'}}>
                              <div className="card-body">
                                <h5 className="card-title"><b>Rahif Mansoor</b></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sponsors" />
                  <div id="five" className="row">
                    <div className="container">
                      <h2 style={{textAlign: 'center'}}><b>Current Partners and Sponsors</b></h2>
                      <div className="spons">
                        {/*insert sponsor image tags here*/}
                        <a href="https://mule.to/p3lj"><img className="sp-im" src={stickers} /></a>
                        <a href="https://simplify.jobs/"><img className="sp-im" src={simplify_logo} /></a>
                      </div>
                    </div>
                  </div>
                  <div id="guests" />
                  <div ref={fived} id="five" className="row">
                    <div className="container">
                      <h2 style={{textAlign: 'center'}}><b>Past Speakers</b></h2>
                      <div className="spons">
                        {/*insert sponsor image tags here*/}
                        <img className="sp-im" src={microsoft} />
                        <img className="sp-im" src={capital_one} />
                        <img className="sp-im" src={pwc} />
                        <img className="sp-im" src={paycom} />
                        <img className="sp-im" src={labatt} />
                        <img className="sp-im" src={cbre} />
                        <img className="sp-im" src={bp} />
                        <img className="sp-im" src={chevron_logo} />
                        <img className="sp-im" src={Acc} />
                        <img className="sp-im" src={credera} />
                        <img className="sp-im" src={GM} />
                        <img className="sp-im" src={IBM} />
                      </div>
                    </div>
                  </div>
                  <div id="membership" />
                  <div id="seven" className="row">
                    <div className="container">
                      <h2 style={{textAlign: 'center'}}><b>Membership</b></h2>
                      <div className="tabb col">
                        <div className="row">
                          <div className="container">
                            <div>
                              <h3>Membership Information</h3>
                              <p>As an ACM Student Chapter, TACS allows anyone to attend our meetings, workshops, and  
                                hackathons free of charge, but membership gives added perks. TACS membership is not 
                                required to attend our meetings or to do anything in the club! </p>
                              <p />
                            </div>
                            <div>
                              <h3>What are the benefits of membership?</h3>
                              <p>
                              </p><ul>
                                <li>Your name and membership status will appear on our official (this) website</li>
                                <li>You'll become an official ACM chapter member</li>
                                <li>Your contribution helps the club get some good food and host hackathons!</li>
                              </ul>
                              <p />
                            </div>
                            <div>
                              <h3>How do I become a member?</h3>
                              <p>
                              </p><ul>
                                <li>Ask an officer!</li>
                              </ul>
                              <p />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="six" className="row" style={{padding: '5%'}} />
              <div id="fut" className="row">
                <span className="container">
                  <br />
                  <h5 style={{width: '100%', textAlign: 'center', color: '#fff478'}}>{'{'}TACS{'}'}</h5>
                  <p style={{width: '100%', textAlign: 'center'}}>© 2024 Texas A&amp;M Computing Society</p>
                  <p style={{width: '100%', textAlign: 'center'}}>Created by <a>Aayush Garg</a>. Themed by <a>Avery Erwin</a>.</p>
                </span></div>
            </div>
          </div></div>
      );
    }

  export default Test;
    
