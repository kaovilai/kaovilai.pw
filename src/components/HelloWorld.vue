<template>
  <div class="hello">
    <header class="hero">
      <p class="hero-kicker">$ velero restore create --from-backup tiger-latest <span class="hero-ok">✓ done</span></p>
      <h1 class="hero-title"><typing-component text="Hello World!" :keep-width="true" :once="true" :typing-delay="150" /></h1>
      <div class="hero-body">
        <div class="hero-text">
          <h2>My name is<typing-component text=" Tiger!" :typing-delay="500" :once="true" /></h2>
          <p>though my legal name is <i>Passawit<typing-component text=" Kaovilai" :typing-delay="1000"/></i></p>
          <p>Can't find what you're looking for? try the <a target="_blank" rel="noopener noreferrer" href="https://legacy.kaovilai.pw">legacy site.</a></p>
          <p>This site is <b><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Responsive_web_design"><typing-component text="responsive" :typing-delay="1500" :once="true" /></a></b>. Try resizing window or rotate your device</p>
          <p><a href="https://calendar.app.google/udoH8WAzF7fdQv9h9" target="_blank" rel="noopener noreferrer">Schedule a meeting 📅</a></p>
          <p><a href="https://github.com/kaovilai/github-stats" target="_blank" rel="noopener noreferrer"><img class="hero-stats" src="https://raw.githubusercontent.com/kaovilai/github-stats/master/generated/overview.svg#gh-dark-mode-only" alt="Tiger's GitHub stats overview" loading="lazy" /></a></p>
        </div>
        <img class="hero-photo" src="/ogimg.jpg" alt="Tiger Kaovilai profile photo"/>
      </div>
    </header>
    <section id="about" class="site-section" aria-labelledby="about-heading" v-reveal>
      <h2 id="about-heading" class="introAreaHeader" data-snap="~/snapshots/about · ✓ restored">About Me</h2>
      <div class="introArea">
        <div class="skillbox about-text">
          <p>Senior Software Engineer at <a href="https://www.redhat.com" target="_blank" rel="noopener noreferrer">Red Hat</a> in Raleigh, North Carolina — maintainer of <a href="https://velero.io" target="_blank" rel="noopener noreferrer">Velero</a> and working on the <a href="https://github.com/openshift/oadp-operator" target="_blank" rel="noopener noreferrer">OpenShift API for Data Protection (OADP)</a>: backup and disaster recovery for Kubernetes.</p>
          <p>I live and breathe technology. I've lived more than a year in Thailand (where I'm from), New Zealand (where I finished high school), and the United States, where I earned my undergraduate degree at NC State University (2016–2021).</p>
          <p>Talk to me about the latest gadgets, new undersea cables, cloud platforms launching, and other exciting technological breakthroughs.</p>
          <p class="about-cta">Full work history on <a href="https://linkedin.com/in/kaovilai" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
        </div>
      </div>
    </section>
    <div class="displayArea">
      <section id="connect" class="site-section" aria-labelledby="connect-heading" v-reveal>
    <h2 id="connect-heading" class="introAreaHeader" data-snap="~/snapshots/connect · ✓ restored">Connect</h2>
      <div class="introArea">
        <div class="skillbox">
          <h3>Social</h3>
          <div class="devicon">
              <div class="tooltip">
                <a href="tel:+14157699020" aria-label="Call Tiger at +1-415-769-9020">
                <span aria-hidden="true" style="color:white; font-size: 1em;">📞</span>
                <p>+1-415-769-9020</p>
                </a>
              </div>
              <div class="tooltip">
                <a target="_blank" rel="noopener noreferrer" href="mailto:passawit.kaovilai@gmail.com" aria-label="Send email to Tiger">
                <i aria-hidden="true" class="devicon-google-plain colored"></i>
                <p>Email</p>
                </a>
              </div>
               <div class="tooltip">
             <a target="_blank" rel="noopener noreferrer" href="https://x.com/TigerKaovilai" aria-label="Tiger's X (Twitter) profile"><i aria-hidden="true" class="devicon-twitter-plain colored"></i>
             <p>X</p>
             </a>
               </div>
               <div class="tooltip">
             <a target="_blank" rel="noopener noreferrer" href="https://line.me/ti/p/D9AmuFwHT4" aria-label="Tiger's LINE contact">
                <svg viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <title>LINE</title>
                  <rect x="4" y="4" width="56" height="56" rx="10" fill="var(--LINE_Green)" />
                  <text x="32" y="39" fill="white" font-family="Arial, sans-serif" font-size="18" font-weight="700" text-anchor="middle">LINE</text>
                </svg>
                <p>LINE</p>
             </a>
               </div>
               <div class="tooltip">
             <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/kaovilai" aria-label="Tiger's LinkedIn profile"><i aria-hidden="true" class="devicon-linkedin-plain colored"></i>
                 <p>LinkedIn</p>
             </a>
               </div>
               <div class="tooltip">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kaovilai" aria-label="Tiger's GitHub profile"><i aria-hidden="true" style="color: white;" class="devicon-github-plain"></i>
                <p>GitHub</p>
            </a>
               </div>
               <div class="tooltip">
                 <a target="_blank" rel="noopener noreferrer" href="https://www.quora.com/profile/Tiger-Kaovilai" aria-label="Tiger's Quora profile">
                   <span aria-hidden="true" style="color:#B92B27; font-size: 1em; font-weight: bold;">Q</span>
                   <p>Quora</p>
                 </a>
               </div>
          </div>
        </div>
        <div class="skillbox">
          <h3>Resume</h3>
          <div class="devicon">
            <a target="_blank" rel="noopener noreferrer" aria-label="View Tiger's resume as PDF" href="https://resume.kaovilai.pw/pdf">
              <svg
                aria-hidden="true"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                width="75.320129mm"
                height="92.604164mm"
                viewBox="0 0 75.320129 92.604164"
                version="1.1"
                id="svg8"
                inkscape:version="0.92.3 (2405546, 2018-03-11)"
                sodipodi:docname="PDF file icon.svg">
                <title
                  id="title2682">PDF</title>
                <defs
                  id="defs2">
                  <clipPath
                    clipPathUnits="userSpaceOnUse"
                    id="clipPath839">
                    <rect
                      style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
                      id="rect841"
                      width="68.688263"
                      height="67.886459"
                      x="-74.033661"
                      y="141.44913" />
                  </clipPath>
                </defs>
                <sodipodi:namedview
                  id="base"
                  pagecolor="#ffffff"
                  bordercolor="#666666"
                  borderopacity="1.0"
                  inkscape:pageopacity="0.0"
                  inkscape:pageshadow="2"
                  inkscape:zoom="0.98994949"
                  inkscape:cx="122.12727"
                  inkscape:cy="167.02823"
                  inkscape:document-units="mm"
                  inkscape:current-layer="g899"
                  showgrid="false"
                  inkscape:object-nodes="false"
                  inkscape:window-width="1366"
                  inkscape:window-height="705"
                  inkscape:window-x="-8"
                  inkscape:window-y="-8"
                  inkscape:window-maximized="1"
                  inkscape:snap-page="false"
                  inkscape:snap-others="false"
                  fit-margin-top="0"
                  fit-margin-left="0"
                  fit-margin-right="0"
                  fit-margin-bottom="0" />
                <metadata
                  id="metadata5">
                  <rdf:RDF>
                    <cc:Work
                      rdf:about="">
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type
                        rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                      <dc:title>PDF file icon</dc:title>
                      <dc:date>08/10/2018</dc:date>
                      <dc:creator>
                        <cc:Agent>
                          <dc:title>Adobe Systems</dc:title>
                        </cc:Agent>
                      </dc:creator>
                      <dc:publisher>
                        <cc:Agent>
                          <dc:title>CMetalCore</dc:title>
                        </cc:Agent>
                      </dc:publisher>
                      <dc:description>Fuente del texto &quot;PDF&quot;:
              Franklin Gothic Medium Cond</dc:description>
                      <cc:license
                        rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/" />
                    </cc:Work>
                    <cc:License
                      rdf:about="http://creativecommons.org/licenses/by-sa/4.0/">
                      <cc:permits
                        rdf:resource="http://creativecommons.org/ns#Reproduction" />
                      <cc:permits
                        rdf:resource="http://creativecommons.org/ns#Distribution" />
                      <cc:requires
                        rdf:resource="http://creativecommons.org/ns#Notice" />
                      <cc:requires
                        rdf:resource="http://creativecommons.org/ns#Attribution" />
                      <cc:permits
                        rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
                      <cc:requires
                        rdf:resource="http://creativecommons.org/ns#ShareAlike" />
                    </cc:License>
                  </rdf:RDF>
                </metadata>
                <g
                  inkscape:label="Capa 1"
                  inkscape:groupmode="layer"
                  id="layer1"
                  transform="translate(36.076172,-93.731774)">
                  <g
                    id="g899"
                    transform="matrix(1.4843054,0,0,1.4843054,17.471885,-90.243502)">
                    <g
                      id="g876">
                      <path
                        inkscape:connector-curvature="0"
                        style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#ff2116;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                        d="m -29.632812,123.94727 c -3.551967,0 -6.44336,2.89347 -6.44336,6.44531 v 49.49804 c 0,3.55185 2.891393,6.44532 6.44336,6.44532 H 8.2167969 c 3.5519661,0 6.4433591,-2.89335 6.4433591,-6.44532 v -40.70117 c 0,0 0.101353,-1.19181 -0.416015,-2.35156 -0.484969,-1.08711 -1.275391,-1.84375 -1.275391,-1.84375 a 1.0584391,1.0584391 0 0 0 -0.0059,-0.008 L 3.5722246,125.7752 a 1.0584391,1.0584391 0 0 0 -0.015625,-0.0156 c 0,0 -0.8017392,-0.76344 -1.9902344,-1.27344 -1.39939552,-0.6005 -2.8417968,-0.53711 -2.8417968,-0.53711 l 0.021484,-0.002 z"
                        id="path890" />
                      <path
                        inkscape:connector-curvature="0"
                        style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#f5f5f5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                        d="m -29.632812,126.06445 h 28.3789058 a 1.0584391,1.0584391 0 0 0 0.021484,0 c 0,0 1.13480448,0.011 1.96484378,0.36719 0.79889772,0.34282 1.36536982,0.86176 1.36914062,0.86524 1.25e-5,1e-5 0.00391,0.004 0.00391,0.004 l 9.3671868,9.18945 c 0,0 0.564354,0.59582 0.837891,1.20899 0.220779,0.49491 0.234375,1.40039 0.234375,1.40039 a 1.0584391,1.0584391 0 0 0 -0.002,0.0449 v 40.74609 c 0,2.41592 -1.910258,4.32813 -4.3261717,4.32813 H -29.632812 c -2.415914,0 -4.326172,-1.91209 -4.326172,-4.32813 v -49.49804 c 0,-2.41603 1.910258,-4.32813 4.326172,-4.32813 z"
                        id="rect2684" />
                      <path
                        sodipodi:nodetypes="scccscccscccccssscacccsccccccccccccccccccccaccccccccc"
                        inkscape:connector-curvature="0"
                        d="m -23.40766,161.09299 c -1.45669,-1.45669 0.11934,-3.45839 4.39648,-5.58397 l 2.69124,-1.33743 1.04845,-2.29399 c 0.57665,-1.26169 1.43729,-3.32036 1.91254,-4.5748 l 0.8641,-2.28082 -0.59546,-1.68793 c -0.73217,-2.07547 -0.99326,-5.19438 -0.52872,-6.31588 0.62923,-1.51909 2.69029,-1.36323 3.50626,0.26515 0.63727,1.27176 0.57212,3.57488 -0.18329,6.47946 l -0.6193,2.38125 0.5455,0.92604 c 0.30003,0.50932 1.1764,1.71867 1.9475,2.68743 l 1.44924,1.80272 1.8033728,-0.23533 c 5.72900399,-0.74758 7.6912472,0.523 7.6912472,2.34476 0,2.29921 -4.4984914,2.48899 -8.2760865,-0.16423 -0.8499666,-0.59698 -1.4336605,-1.19001 -1.4336605,-1.19001 0,0 -2.3665326,0.48178 -3.531704,0.79583 -1.202707,0.32417 -1.80274,0.52719 -3.564509,1.12186 0,0 -0.61814,0.89767 -1.02094,1.55026 -1.49858,2.4279 -3.24833,4.43998 -4.49793,5.1723 -1.3991,0.81993 -2.86584,0.87582 -3.60433,0.13733 z m 2.28605,-0.81668 c 0.81883,-0.50607 2.47616,-2.46625 3.62341,-4.28553 l 0.46449,-0.73658 -2.11497,1.06339 c -3.26655,1.64239 -4.76093,3.19033 -3.98386,4.12664 0.43653,0.52598 0.95874,0.48237 2.01093,-0.16792 z m 21.21809,-5.95578 c 0.80089,-0.56097 0.68463,-1.69142 -0.22082,-2.1472 -0.70466,-0.35471 -1.2726074,-0.42759 -3.1031574,-0.40057 -1.1249,0.0767 -2.9337647,0.3034 -3.2403347,0.37237 0,0 0.993716,0.68678 1.434896,0.93922 0.58731,0.33544 2.0145161,0.95811 3.0565161,1.27706 1.02785,0.31461 1.6224,0.28144 2.0729,-0.0409 z m -8.53152,-3.54594 c -0.4847,-0.50952 -1.30889,-1.57296 -1.83152,-2.3632 -0.68353,-0.89643 -1.02629,-1.52887 -1.02629,-1.52887 0,0 -0.4996,1.60694 -0.90948,2.57394 l -1.27876,3.16076 -0.37075,0.71695 c 0,0 1.971043,-0.64627 2.97389,-0.90822 1.0621668,-0.27744 3.21787,-0.70134 3.21787,-0.70134 z m -2.74938,-11.02573 c 0.12363,-1.0375 0.1761,-2.07346 -0.15724,-2.59587 -0.9246,-1.01077 -2.04057,-0.16787 -1.85154,2.23517 0.0636,0.8084 0.26443,2.19033 0.53292,3.04209 l 0.48817,1.54863 0.34358,-1.16638 c 0.18897,-0.64151 0.47882,-2.02015 0.64411,-3.06364 z"
                        style="fill:#ff2116;fill-opacity:1;stroke-width:0.26458335"
                        id="path2697" />
                      <g
                        id="g858">
                        <path
                          inkscape:connector-curvature="0"
                          id="path845"
                          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                          d="m -20.930423,167.83862 h 2.364986 q 1.133514,0 1.840213,0.2169 0.706698,0.20991 1.189489,0.9446 0.482795,0.72769 0.482795,1.75625 0,0.94459 -0.391832,1.6233 -0.391833,0.67871 -1.056548,0.97958 -0.65772,0.30087 -2.02913,0.30087 h -0.818651 v 3.72941 h -1.581322 z m 1.581322,1.22447 v 3.33058 h 0.783664 q 1.049552,0 1.44838,-0.39184 0.405826,-0.39183 0.405826,-1.27345 0,-0.65772 -0.265887,-1.06355 -0.265884,-0.41282 -0.587747,-0.50378 -0.314866,-0.098 -1.000572,-0.098 z" />
                        <path
                          inkscape:connector-curvature="0"
                          id="path847"
                          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                          d="m -13.842461,167.83862 h 2.148082 q 1.560333,0 2.4909318,0.55276 0.9375993,0.55276 1.4133973,1.6443 0.482791,1.09153 0.482791,2.42096 0,1.3994 -0.4338151,2.49793 -0.4268149,1.09153 -1.3154348,1.76324 -0.8816233,0.67172 -2.5189212,0.67172 h -2.267031 z m 1.581326,1.26645 v 7.018 h 0.657715 q 1.378411,0 2.001144,-0.9516 0.6227329,-0.95858 0.6227329,-2.5539 0,-3.5125 -2.6238769,-3.5125 z" />
                        <path
                          inkscape:connector-curvature="0"
                          id="path849"
                          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                          d="m -5.7889096,167.83862 h 5.30372941 v 1.26645 H -4.2075842 v 2.85478 h 2.9807225 v 1.26646 h -2.9807225 v 4.16322 h -1.5813254 z" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div class="skillbox">
          <h3>Blog</h3>
          <div class="devicon">
            <a target="_blank" rel="noopener noreferrer" aria-label="Visit Tiger's blog" href="https://blog.tig.pw">
              <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 200.15844 200.15843" height="56.489159mm" width="56.489159mm">
  <g transform="translate(-27.09796,-27.287332)">
    <g style="fill:#000000;fill-opacity:1;">
      <path style="fill:#ff5722;fill-opacity:1" d="m 147.38098,137.23353 q 4.2287,0 7.04783,3.28899 2.81914,2.81913 2.81914,7.04783 0,4.2287 -2.81914,7.04783 -2.81913,2.81914 -7.04783,2.81914 l -40.87743,0 q -4.2287,0 -7.047836,-2.81914 -2.819133,-2.81913 -2.819133,-7.04783 0,-4.2287 2.819133,-7.04783 2.819136,-3.28899 7.047836,-3.28899 l 40.87743,0 z m -40.87743,-30.07076 q -4.2287,0 -7.047836,-2.81913 -2.819133,-2.81913 -2.819133,-7.047833 0,-4.2287 2.819133,-7.047833 2.819136,-2.819134 7.047836,-2.819134 l 26.31191,0 q 4.2287,0 7.04783,2.819134 2.81913,2.819133 2.81913,7.047833 0,4.228703 -2.81913,7.047833 -2.81913,2.81913 -7.04783,2.81913 l -26.31191,0 z m 60.61136,0 0,-19.73393 q 0,-12.216244 -8.92725,-21.143499 -8.92726,-8.927256 -21.1435,-8.927256 l -39.937724,0 q -12.216244,0 -21.143499,8.927256 -8.927256,8.927255 -8.927256,21.143499 l 0,70.00848 q 0,12.21624 8.927256,21.1435 8.927255,8.92725 21.143499,8.92725 l 60.141514,0 q 12.21624,0 21.1435,-8.92725 8.92725,-8.92726 8.92725,-21.1435 l 0,-30.07076 q 0,-4.2287 -2.81913,-7.04783 -2.81914,-2.81913 -7.04784,-2.81913 -4.2287,0 -7.51768,-2.81914 -2.81914,-3.28899 -2.81914,-7.51769 z m 40.40758,-79.87544 q 7.98754,0 13.62581,6.108122 6.10812,5.638267 6.10812,13.625811 l 0,160.690597 q 0,7.98754 -6.10812,14.09567 -5.63827,5.63826 -13.62581,5.63826 l -160.690597,0 q -7.987545,0 -14.095667,-5.63826 -5.638266,-6.10813 -5.638266,-14.09567 l 0,-160.690597 q 0,-7.987544 5.638266,-13.625811 6.108122,-6.108122 14.095667,-6.108122 l 160.690597,0 z"/>
    </g>
    <path transform="translate(27.09796,27.287324)" d="m 65.761357,159.75754 c -9.336003,-1.19708 -18.475728,-8.04083 -22.832613,-17.09688 -2.830636,-5.88364 -2.64474,-2.55363 -2.64474,-47.376152 0,-37.957108 0.03311,-40.075082 0.66331,-42.426407 2.809199,-10.481389 11.197563,-18.814146 21.964107,-21.818507 2.797691,-0.780685 3.089685,-0.789368 26.870057,-0.799086 23.804382,-0.0097 24.072512,-0.002 27.171122,0.787567 8.35403,2.128599 15.95662,8.328453 19.8324,16.173172 2.72958,5.524766 2.75042,5.673938 2.98903,21.38998 l 0.21203,13.965359 0.91973,1.944544 c 1.76588,3.733534 4.04565,5.182466 9.21485,5.856604 3.88163,0.506218 5.52881,1.167218 7.20209,2.890137 2.57227,2.648585 2.46232,1.618302 2.46232,23.073059 0,19.22498 -0.002,19.27465 -0.82873,21.90786 -1.71194,5.45182 -4.438,9.73635 -8.76724,13.77939 -4.72738,4.41484 -9.89404,6.8985 -16.1652,7.77074 -3.36915,0.4686 -64.590665,0.44942 -68.262523,-0.0214 z m 58.668353,-30.30823 c 2.10695,-0.96046 3.63435,-2.39908 4.697,-4.42398 0.81414,-1.55135 0.95004,-2.2397 0.95065,-4.81531 7.1e-4,-3.47266 -0.57199,-4.88462 -2.99426,-7.38061 -2.92323,-3.01217 -1.43692,-2.85589 -27.244322,-2.86467 l -22.823162,-0.008 -1.821436,0.90766 c -3.31576,1.65232 -5.385654,4.8251 -5.662342,8.67938 -0.308758,4.30102 1.621978,7.82063 5.293876,9.65042 l 1.836349,0.91509 23.176715,-0.008 c 21.666172,-0.007 23.268892,-0.0498 24.590932,-0.65244 l 0,1e-5 z M 109.93402,79.060862 c 3.80787,-1.803303 5.64223,-4.747335 5.64223,-9.055421 0,-4.285934 -1.87947,-7.305806 -5.64223,-9.065754 l -1.76777,-0.826834 -15.404974,-0.0035 c -17.744838,-0.004 -17.722108,-0.0071 -20.524733,2.870201 -1.95392,2.006014 -2.784385,4.156199 -2.784385,7.20914 0,3.969223 2.653756,7.903665 6.174032,9.153578 1.152415,0.409178 4.423972,0.511514 16.983715,0.53126 l 15.556345,0.02447 1.76777,-0.837165 0,-7e-6 z" style="fill:#ffffff;fill-opacity:1"/>
  </g>
</svg>
            </a>
          </div>
        </div>
      </div>
      </section>
      <section id="toolbox" class="site-section" aria-labelledby="toolbox-heading" v-reveal>
    <h2 id="toolbox-heading" class="introAreaHeader" data-snap="~/snapshots/toolbox · ✓ restored">My Toolbox</h2>
      <div class="introArea">
        <div class="skillbox">
          <h3><typing-component text="Software Development"/></h3>
          <div class="devicon">
            <div class="tooltip">
            <a href="https://go.dev/" target="_blank" rel="noopener noreferrer" aria-label="Go programming language">
              <svg viewBox="0 0 128 128" style="margin-left: 12%;" aria-hidden="true"> <title>golang</title>
  <defs><path id="go-original-a" d="M18.8 1h90.5v126H18.8z"></path></defs><clipPath id="go-original-b"><use xlink:href="#go-original-a" overflow="visible"></use></clipPath><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M21.1 68.7c.2 3.5 3.7 1.9 5.3.8 1.5-1.1 2-.2 2.1-2.3.1-1.4.2-2.7.2-4.1-2.3-.2-4.8.3-6.7 1.7-.9.7-2.8 3-.9 3.9" clip-path="url(#go-original-b)"></path><path d="M23 71.2c-.7 0-2-.3-2.2-2.3-.6-.4-.8-.9-.8-1.2-.1-1.2 1.2-2.6 1.9-3.1 1.6-1.2 3.7-1.8 5.9-1.8h1.3v.3c.1 1.1 0 2.2-.1 3.2 0 .3 0 .6-.1.9-.1 1.5-.4 1.7-1.1 2-.3.1-.6.2-1.1.6-.5.3-2.2 1.4-3.7 1.4zm4.8-7.8c-2.1 0-4 .6-5.5 1.7-.7.5-1.7 1.7-1.6 2.5 0 .3.2.6.6.8l.2.1v.2c.1 1.6.9 1.8 1.5 1.8 1 0 2.4-.7 3.3-1.3.6-.4 1-.5 1.3-.6.5-.2.6-.2.7-1.4 0-.3 0-.6.1-.9.1-.9.1-1.9.1-2.8-.3-.1-.5-.1-.7-.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#C6B198" d="M21.1 68.7c.5-.2 1.1-.3 1.4-.8" clip-path="url(#go-original-b)"></path><path d="M21.1 69c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.2-.4.1 0 .2-.1.2-.1.4-.2.8-.3 1-.6.1-.1.3-.2.5-.1.1.1.2.3.1.5-.4.5-.9.7-1.3.8l-.2.1h-.2z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z" clip-path="url(#go-original-b)"></path><path d="M29.5 26.8l-.3-.1c-7-2-6.9-7-6.7-8.5.5-3.8 4.1-7.8 8.9-7.8 1.9 0 3.7.6 5.5 1.8l.3.2-7.7 14.4zm1.9-15.7c-4.5 0-7.8 3.7-8.3 7.2-.5 3.6 1.7 6.4 6 7.7l7.1-13.5c-1.5-.9-3.1-1.4-4.8-1.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#6AD7E5" d="M89.6 11.1c10.7-7.5 20.5 9.5 8 13.8l-8-13.8z" clip-path="url(#go-original-b)"></path><path d="M97.5 25.3L89.2 11l.3-.2c1.9-1.3 3.8-2 5.7-2 4.6 0 7.9 3.8 8.6 7.5.3 1.5.6 6.6-6 8.8l-.3.2zm-7.4-14l7.7 13.3c3.9-1.4 5.9-4.4 5.3-8-.6-3.4-3.7-6.9-7.9-6.9-1.7-.1-3.4.4-5.1 1.6z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M92 112.3c2.7 1.7 7.7 6.8 3.6 9.3-3.9 3.6-6.1-4-9.6-5 1.5-2 3.4-3.9 6-4.3" clip-path="url(#go-original-b)"></path><path d="M93.5 122.9c-1.6 0-3-1.6-4.2-3.1-1.1-1.2-2.2-2.5-3.4-2.9l-.5-.1.3-.4c1.2-1.7 3.2-3.9 6.2-4.4h.1l.1.1c1.7 1.1 5.4 4.2 5.3 7.1 0 1.1-.6 2-1.7 2.7-.7.7-1.4 1-2.2 1zm-7-6.5c1.2.5 2.2 1.8 3.2 2.9 1.2 1.5 2.4 2.8 3.7 2.8.6 0 1.2-.3 1.8-.9h.1c.9-.6 1.4-1.3 1.4-2.2 0-2.3-2.9-5.2-4.9-6.5-1.8.5-3.6 1.7-5.3 3.9zm9.1 5.5c-.1 0-.2-.1-.3-.2-.2-.4-.4-.9-.5-1.3-.3-.8-.6-1.6-1.2-2.2-.1-.1-.1-.3 0-.5.1-.1.3-.1.5 0 .7.7 1.1 1.6 1.4 2.5l.5 1.2c.1.2 0 .4-.1.5h-.3z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M43.2 118.1c-3.2.5-5 3.4-7.7 4.9-2.5 1.5-3.5-.5-3.7-.9-.4-.2-.4.2-1-.4-2.3-3.7 2.4-6.4 4.9-8.2 3.5-.8 5.7 2.2 7.5 4.6" clip-path="url(#go-original-b)"></path><path d="M33.8 123.8c-1.3 0-2-1.1-2.2-1.5h-.1c-.3 0-.5-.1-.9-.5v-.1c-2.2-3.5 1.6-6.2 4.1-8l.9-.6h.2c.4-.1.7-.1 1.1-.1 3 0 4.9 2.6 6.5 4.7l.5.7-.6.1c-1.9.3-3.3 1.5-4.7 2.7-.9.8-1.8 1.5-2.8 2.1-.8.3-1.4.5-2 .5zm-2.2-2.1c.1 0 .2 0 .4.1h.1l.1.1c.2.3.7 1.2 1.7 1.2.5 0 1-.2 1.5-.5 1-.5 1.9-1.3 2.7-2 1.3-1.1 2.7-2.3 4.5-2.8-1.5-2-3.3-4.2-5.8-4.2-.3 0-.6 0-.9.1l-.8.6c-2.6 1.8-5.8 4.1-3.9 7.1.1.2.2.3.4.3zm.2.7c-.2 0-.4-.2-.3-.4.1-1 .6-1.7 1.1-2.5.3-.4.5-.8.7-1.2.1-.2.3-.2.4-.2.2.1.2.3.2.4-.2.5-.5.9-.8 1.3-.5.7-.9 1.3-1 2.1 0 .4-.1.5-.3.5z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.9 21.7c-1.8-.9-3.1-2.2-2-4.3 1-1.9 2.9-1.7 4.7-.8l-2.7 5.1zm64.9-1.8c1.8-.9 3.1-2.2 2-4.3-1-1.9-2.9-1.7-4.7-.8l2.7 5.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M107.1 68.2c-.2 3.5-3.7 1.9-5.3.8-1.5-1.1-2-.2-2.1-2.3-.1-1.4-.2-2.7-.2-4.1 2.3-.2 4.8.3 6.7 1.7 1 .8 2.8 3 .9 3.9" clip-path="url(#go-original-b)"></path><path d="M105.3 70.7c-1.5 0-3.2-1.1-3.7-1.4-.5-.3-.8-.5-1.1-.6-.8-.3-1-.5-1.1-2 0-.3 0-.6-.1-.9-.1-1-.2-2.1-.1-3.2v-.3h1.3c2.2 0 4.3.6 5.9 1.8.7.5 2 1.9 1.9 3.1 0 .4-.2.9-.8 1.2-.2 2-1.5 2.3-2.2 2.3zM99.8 63c0 .9 0 1.9.1 2.8 0 .3 0 .6.1.9.1 1.2.2 1.2.7 1.4.3.1.7.3 1.3.6.9.6 2.3 1.3 3.3 1.3.6 0 1.4-.2 1.5-1.8V68l.2-.1c.4-.2.6-.4.6-.8.1-.8-.9-2-1.6-2.5-1.5-1.1-3.5-1.7-5.5-1.7-.2.1-.4.1-.7.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#C6B198" d="M107.1 68.2c-.5-.2-1.1-.3-1.4-.8" clip-path="url(#go-original-b)"></path><path d="M107.1 68.6h-.1l-.2-.1c-.5-.2-1-.3-1.3-.8-.1-.1-.1-.4.1-.5.1-.1.4-.1.5.1.2.3.6.4 1 .6.1 0 .2.1.2.1.2.1.3.3.2.4-.1.1-.3.2-.4.2z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#6AD7E5" d="M62.8 4c13.6 0 26.3 1.9 33 15 6 14.6 3.8 30.4 4.8 45.9.8 13.3 2.5 28.6-3.6 40.9-6.5 12.9-22.7 16.2-36 15.7-10.5-.4-23.1-3.8-29.1-13.4-6.9-11.2-3.7-27.9-3.2-40.4.6-14.8-4-29.7.9-44.1C34.5 8.5 48.1 5.1 62.8 4" clip-path="url(#go-original-b)"></path><path d="M63.3 121.9h-2.5c-4.1-.1-10.3-.8-16.4-3.3-5.9-2.4-10.2-5.8-13-10.3-5.6-9.1-4.6-21.6-3.7-32.7.2-2.8.4-5.4.5-7.9.2-5.2-.2-10.6-.7-15.7-.8-9.4-1.6-19.1 1.5-28.5 2.4-7 6.7-12 13.2-15.2 5.1-2.5 11.4-3.9 20.4-4.6C76 3.6 89.3 5.5 96 18.8c4.4 10.7 4.4 22.2 4.5 33.3 0 4.2 0 8.5.3 12.7.1 1.3.2 2.6.2 3.9.8 12.2 1.7 26-3.9 37.2-2.8 5.7-7.7 9.9-14.4 12.6-5.4 2.2-12.2 3.4-19.4 3.4zM62.8 4.3c-14.1 1.1-27.9 4.2-33 19.4-3.1 9.3-2.3 18.9-1.5 28.2.4 5.2.9 10.5.7 15.8-.1 2.5-.3 5.1-.5 7.9-.9 11-1.9 23.4 3.6 32.3 2.3 3.7 9.7 12.5 28.8 13.2h2.5c22.1 0 30.3-9.8 33.3-15.6 5.5-11 4.6-24.8 3.9-36.9-.1-1.3-.2-2.6-.2-3.9-.2-4.2-.3-8.5-.3-12.7-.1-11-.1-22.5-4.4-33.1C92.7 13 88.2 9 82 6.7c-6.4-2.1-13.6-2.4-19.2-2.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M65.2 22.2c2.4 14.2 25.6 10.4 22.3-3.9-3-12.8-23.1-9.2-22.3 3.9" clip-path="url(#go-original-b)"></path><path d="M76.2 31.5c-4.5 0-10.2-2.4-11.4-9.2-.2-3.2.8-6.1 2.9-8.3 2.3-2.5 5.8-3.9 9.4-3.9 4.2 0 9.2 2.2 10.6 8.3.8 3.4.2 6.4-1.7 8.8-2.1 2.6-5.8 4.3-9.8 4.3zm-10.7-9.3c.5 2.8 1.8 5 3.9 6.6 1.8 1.4 4.3 2.1 6.8 2.1 3.7 0 7.3-1.6 9.3-4.1 1.8-2.2 2.3-5.1 1.6-8.3-1.3-5.7-6-7.7-10-7.7-3.4 0-6.7 1.4-8.9 3.7-1.9 2-2.9 4.7-2.7 7.7z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M37.5 24.5c3.2 12.3 22.9 9.2 22.2-3.2-.9-14.8-25.3-12-22.2 3.2" clip-path="url(#go-original-b)"></path><path d="M48 32.7c-4.3 0-9.3-2.1-10.9-8.1-.7-3.5 0-6.7 2-9.1 2.2-2.7 5.8-4.3 9.7-4.3 5.2 0 10.7 3.1 11.1 10.1.2 2.9-.7 5.5-2.7 7.6-2.1 2.3-5.6 3.8-9.2 3.8zm.8-20.8c-3.7 0-7.1 1.5-9.2 4-1.9 2.3-2.5 5.2-1.8 8.5C39.2 30 44 32 48 32c3.4 0 6.7-1.3 8.8-3.6 1.8-1.9 2.7-4.4 2.5-7.1-.2-4.3-3.1-9.4-10.5-9.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M68 39.2c0 1.8.4 3.9.1 5.9-.5.9-1.4 1-2.2 1.3-1.1-.2-2-.9-2.5-1.9-.3-2.2.1-4.4.2-6.6l4.4 1.3z" clip-path="url(#go-original-b)"></path><path d="M65.9 46.8c-1.3-.2-2.3-1-2.8-2.1-.2-1.6-.1-3.1 0-4.6.1-.7.1-1.4.1-2.1v-.4l5.1 1.6v.2c0 .6.1 1.2.1 1.9.1 1.3.2 2.7 0 4v.1c-.4.8-1.1 1-1.8 1.3-.2-.1-.4 0-.7.1zm-2.2-2.4c.4.9 1.2 1.5 2.1 1.7.2-.1.4-.1.5-.2.6-.2 1.1-.4 1.4-.9.2-1.2.1-2.5 0-3.8 0-.6-.1-1.2-.1-1.7l-3.8-1.2c0 .6-.1 1.2-.1 1.7-.1 1.6-.2 3 0 4.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46.3 22.5c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M45.2 23.3c0 .5-.4.9-.8.9s-.8-.4-.8-.9.4-.9.8-.9c.5 0 .8.4.8.9" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M74.2 21.6c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M73.2 22.4c0 .5-.3.9-.8.9-.4 0-.8-.4-.8-.9s.3-.9.8-.9c.4 0 .8.4.8.9M58.4 39c-1.5 3.5.8 10.6 4.8 5.4-.3-2.2.1-4.4.2-6.6l-5 1.2z" clip-path="url(#go-original-b)"></path><path d="M60.5 46.6c-.7 0-1.4-.4-1.9-1.2-1.1-1.6-1.3-4.6-.5-6.5l.1-.2 5.5-1.4v.4l-.1 2.2c-.1 1.5-.2 2.9 0 4.4v.1l-.1.1c-1 1.4-2 2.1-3 2.1zm-1.8-7.3c-.6 1.7-.4 4.4.5 5.7.4.6.8.9 1.3.9.7 0 1.5-.6 2.3-1.6-.2-1.5-.1-3 .1-4.4l.1-1.7-4.3 1.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M58.9 32.2c-2.7.2-4.9 3.5-3.5 6 1.9 3.4 6-.3 8.6 0 3 .1 5.4 3.2 7.8.6 2.7-2.9-1.2-5.7-4.1-7l-8.8.4z" clip-path="url(#go-original-b)"></path><path fill="#231F20" d="M69.7 40.2c-.9 0-1.8-.4-2.7-.8-.9-.4-1.9-.8-3-.8h-.3c-.8 0-1.7.3-2.7.7-1.1.4-2.2.7-3.2.7-1.2 0-2.1-.5-2.7-1.6-.7-1.2-.6-2.6.1-3.9.8-1.5 2.2-2.4 3.7-2.6l8.9-.4h.1c2.2.9 4.7 2.6 5.2 4.6.2 1-.1 2-.9 2.9-.8.9-1.6 1.2-2.5 1.2zM64.1 38c1.1 0 2.2.5 3.2.9.9.4 1.7.7 2.5.7.7 0 1.3-.3 1.9-.9.7-.7.9-1.5.8-2.3-.4-1.7-2.8-3.3-4.7-4.1l-8.7.4c-1.3.1-2.5 1-3.2 2.2-.6 1.1-.6 2.3-.1 3.3.5.9 1.1 1.3 2.1 1.3.9 0 1.9-.4 2.9-.7 1.1-.4 2-.7 3-.7 0-.2.1-.2.3-.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.6 32.1c-.2-4.7 8.8-5.3 9.8-1.4 1.1 4-9.4 4.9-9.8 1.4" clip-path="url(#go-original-b)"></path>
              </svg>
              <p style="margin-top: -35%">Go</p>
  </a>
            </div>
            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" aria-label="Java"><i aria-hidden="true" title="java" class="devicon-java-plain-wordmark colored"></i></a>
            <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer" aria-label="Dart"><i aria-hidden="true" title="dart" class="devicon-dart-plain-wordmark colored"></i></a>
            <a href="https://www.wikipedia.org/wiki/The_C_Programming_Language" target="_blank" rel="noopener noreferrer" aria-label="C Programming Language">
              <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="Layer_1" x="0px" y="0px" width="731.177" height="776.86603" viewBox="0 50 731.177 578.86601" enable-background="new 0 0 1000 1405.488" xml:space="preserve" inkscape:version="0.48.4 r9939" sodipodi:docname="The_C_Programming_Language,_First_Edition_Cover.svg">
                <title>C Programming Language</title>
                <metadata id="metadata187"><rdf:RDF>
                  <cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/></cc:Work></rdf:RDF>
                </metadata><defs id="defs185"/>
                <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1280" inkscape:window-height="974" id="namedview183" showgrid="false" fit-margin-top="10" fit-margin-left="10" fit-margin-right="10" fit-margin-bottom="10" inkscape:zoom="0.5" inkscape:cx="379.46728" inkscape:cy="381.15368" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="Layer_1"/><path d="m 432.623,250.58599 c 0,0 -5.446,-50.776 -55.826,-52.186 -50.38,-1.41 -76.254,38.082 -76.254,94.499 0,56.417 28.595,101.553 77.614,101.553 49.02,0 54.466,-56.417 54.466,-56.417 l 93.953,5.641 c 0,0 5.532,50.954 -33.784,89.829 -39.317,38.872 -87.575,45.223 -121.276,44.959 -33.701,-0.269 -80.427,0.528 -125.613,-45.752 -45.186,-46.28 -52.854,-91.239 -52.854,-135.403 0,-44.166 8.569,-102.673 62.296,-147.04 36.514,-30.148 73.529,-41.256 110.55,-41.256 154.551,0 164.931,142.544 164.931,142.544 l -98.203,-0.971 z" id="path3" inkscape:connector-curvature="0" style="fill:#a8b9cc"/><g id="g5" transform="translate(-132.125,-197.58301)"><g id="g7"><path d="m 400.974,207.588 h 51.648 l 0.083,17.922 h -2.469 c -0.805,-6.41 -3.127,-10.749 -6.954,-13.013 -2.146,-1.248 -5.357,-1.93 -9.629,-2.042 v 46.806 c 0,3.272 0.55,5.442 1.655,6.512 1.101,1.07 3.399,1.607 6.89,1.607 v 2.256 H 411.62 v -2.256 c 3.351,0 5.578,-0.542 6.686,-1.628 1.101,-1.083 1.651,-3.248 1.651,-6.492 v -46.806 c -4.185,0.112 -7.4,0.794 -9.63,2.042 -4.105,2.318 -6.423,6.657 -6.953,13.013 h -2.473 l 0.073,-17.921 z" id="path9" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 463.48,265.381 c 2.291,-0.111 3.91,-0.446 4.858,-0.996 1.597,-0.93 2.387,-2.678 2.387,-5.252 v -43.042 c 0,-2.5 -0.714,-4.194 -2.13,-5.087 -0.87,-0.516 -2.573,-0.904 -5.115,-1.165 v -2.256 h 29.025 v 2.256 c -2.509,0.144 -4.26,0.491 -5.233,1.033 -1.62,0.917 -2.426,2.657 -2.426,5.214 v 18.438 h 20.44 v -18.438 c 0,-2.557 -0.77,-4.281 -2.306,-5.172 -0.948,-0.546 -2.721,-0.906 -5.321,-1.075 v -2.256 h 29.193 v 2.256 c -2.51,0.198 -4.229,0.574 -5.15,1.119 -1.54,0.897 -2.303,2.604 -2.303,5.132 v 43.042 c 0,2.599 0.852,4.363 2.554,5.293 0.975,0.549 2.613,0.868 4.899,0.955 v 2.256 h -29.193 v -2.256 c 2.457,-0.087 4.205,-0.434 5.238,-1.042 1.591,-0.925 2.389,-2.661 2.389,-5.202 v -20.479 h -20.44 v 20.479 c 0,2.632 0.861,4.409 2.593,5.334 1.006,0.521 2.697,0.826 5.066,0.909 v 2.256 H 463.48 v -2.254 z" id="path11" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 536.045,267.638 v -2.256 c 2.461,-0.087 4.205,-0.434 5.236,-1.042 1.594,-0.925 2.391,-2.661 2.391,-5.202 v -43.042 c 0,-2.587 -0.825,-4.322 -2.468,-5.215 -0.95,-0.541 -2.669,-0.889 -5.159,-1.033 v -2.251 h 49.431 v 17.917 h -2.095 c -1.092,-5.727 -2.939,-9.648 -5.549,-11.76 -2.612,-2.112 -7.364,-3.169 -14.262,-3.169 -2.624,0 -4.291,0.284 -5.006,0.847 -0.711,0.566 -1.074,1.686 -1.074,3.363 v 20.566 c 4.888,0.058 8.202,-0.859 9.936,-2.756 1.729,-1.888 3.058,-5.355 3.975,-10.393 h 2.179 v 30.029 h -2.18 c -0.609,-5.062 -1.862,-8.628 -3.744,-10.698 -1.889,-2.066 -5.274,-3.103 -10.157,-3.103 v 21.52 c 0,1.88 0.466,3.162 1.403,3.842 0.934,0.682 2.857,1.021 5.762,1.021 5.472,0 9.94,-1.1 13.399,-3.298 3.462,-2.194 6.538,-6.318 9.22,-12.363 h 2.384 l -3.478,18.483 h -50.145 v -0.007 z" id="path13" inkscape:connector-curvature="0" style="fill:#1b75b3"/></g></g><g id="g15" transform="translate(-132.125,-197.58301)"><g id="g17"><path d="m 142.125,771.558 c 2.816,-0.203 4.715,-0.814 5.672,-1.843 0.966,-1.025 1.449,-3.116 1.449,-6.273 v -39.306 c 0,-3.338 -0.491,-5.446 -1.469,-6.322 -0.977,-0.88 -2.864,-1.479 -5.652,-1.793 v -2.257 h 27.601 c 7.316,0 12.882,1.231 16.691,3.686 3.818,2.463 5.721,6.686 5.721,12.67 0,2.925 -0.746,5.665 -2.238,8.223 -1.496,2.558 -3.958,4.619 -7.396,6.182 -2.597,1.099 -5.19,1.768 -7.787,2 -2.601,0.235 -6.451,0.347 -11.561,0.347 v 16.57 c 0,3.272 0.53,5.413 1.592,6.425 1.061,1.013 3.043,1.579 5.948,1.691 v 2.256 h -28.567 v -2.256 h -0.004 z m 31.247,-29.591 c 2.708,-1.793 4.065,-5.657 4.065,-11.578 0,-4.05 -0.659,-7.323 -1.971,-9.811 -1.312,-2.487 -3.83,-3.727 -7.54,-3.727 -1.704,0 -2.928,0.207 -3.666,0.628 -0.742,0.422 -1.109,1.235 -1.109,2.447 v 23.867 c 5.11,-0.09 8.517,-0.698 10.221,-1.826 z" id="path19" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 196.414,771.558 c 2.904,-0.145 4.887,-0.711 5.949,-1.691 1.06,-0.983 1.591,-3.123 1.591,-6.425 v -39.306 c 0,-3.425 -0.626,-5.652 -1.883,-6.694 -0.838,-0.686 -2.725,-1.161 -5.653,-1.421 v -2.257 h 27.602 c 5.724,0 10.359,0.62 13.906,1.868 6.869,2.512 10.3,7.041 10.3,13.578 0,4.831 -1.795,8.636 -5.394,11.413 -2.748,2.083 -5.665,3.414 -8.736,3.988 l 18.235,25.297 c 0.471,0.694 0.974,1.145 1.504,1.367 0.53,0.215 1.188,0.356 1.97,0.414 v 2.124 h -17.899 l -20.014,-27.764 h -0.036 v 17.393 c 0,3.124 0.502,5.231 1.508,6.313 1.005,1.086 3.016,1.686 6.032,1.802 v 2.256 H 196.41 v -2.256 h 0.004 z m 33.485,-30.826 c 2.414,-1.542 3.623,-5.128 3.623,-10.74 0,-3.438 -0.462,-6.161 -1.38,-8.157 -1.592,-3.385 -4.496,-5.079 -8.713,-5.079 -2.294,0 -3.793,0.298 -4.507,0.893 -0.711,0.599 -1.065,1.57 -1.065,2.925 v 22.607 c 5.616,-0.086 9.629,-0.904 12.042,-2.449 z" id="path21" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 313.697,721.095 c 5.892,5.934 8.84,13.57 8.84,22.909 0,9.347 -2.944,16.983 -8.84,22.909 -5.753,5.785 -12.941,8.678 -21.574,8.678 -9.155,0 -16.631,-3.166 -22.407,-9.5 -5.39,-5.958 -8.086,-13.157 -8.086,-21.604 0,-9.314 2.821,-16.971 8.461,-22.955 5.697,-6.074 13.037,-9.111 22.032,-9.111 8.657,-0.003 15.85,2.889 21.574,8.674 z m -8.337,39.661 c 1.28,-4.281 1.926,-9.868 1.926,-16.752 0,-9.455 -1.36,-16.587 -4.089,-21.388 -2.729,-4.806 -6.422,-7.202 -11.093,-7.202 -6.487,0 -10.935,4 -13.341,12.02 -1.26,4.248 -1.886,9.777 -1.886,16.57 0,6.917 0.642,12.496 1.926,16.752 2.378,7.892 6.81,11.842 13.296,11.842 6.439,0.001 10.855,-3.95 13.261,-11.842 z" id="path23" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 338.877,721.963 c 5.701,-6.215 12.969,-9.326 21.821,-9.326 3.546,0 7.081,0.69 10.599,2.062 3.515,1.371 5.708,2.053 6.574,2.053 0.926,0 1.664,-0.326 2.218,-0.992 0.555,-0.666 1.021,-1.677 1.38,-3.036 h 2.386 v 20.78 h -2.179 c -2.066,-4.508 -4.172,-8.07 -6.323,-10.673 -4.016,-4.801 -8.572,-7.198 -13.654,-7.198 -5.529,0 -9.562,2.487 -12.104,7.463 -2.541,4.979 -3.81,11.975 -3.81,21 0,7.405 1.177,14.013 3.538,19.81 2.357,5.797 6.918,8.698 13.679,8.698 3.659,0 6.116,-0.794 7.373,-2.385 0.726,-0.893 1.089,-2.256 1.089,-4.074 v -9.376 c 0,-2.694 -0.793,-4.454 -2.385,-5.297 -1.033,-0.521 -3.128,-0.806 -6.279,-0.869 v -2.251 h 29.401 v 2.251 c -2.96,0.116 -4.923,0.74 -5.884,1.852 -0.962,1.112 -1.449,3.203 -1.449,6.264 v 11.327 c -1.899,1.214 -4.97,2.426 -9.214,3.641 -4.245,1.214 -8.992,1.83 -14.242,1.83 -9.518,0 -17.13,-3.111 -22.826,-9.33 -5.306,-5.814 -7.955,-13.108 -7.955,-21.868 -0.007,-8.86 2.745,-16.306 8.246,-22.356 z" id="path25" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 397.475,771.558 c 2.904,-0.145 4.887,-0.711 5.948,-1.691 1.064,-0.983 1.596,-3.123 1.596,-6.425 v -39.306 c 0,-3.425 -0.63,-5.652 -1.887,-6.694 -0.833,-0.686 -2.721,-1.161 -5.652,-1.421 v -2.257 h 27.602 c 5.725,0 10.36,0.62 13.906,1.868 6.87,2.512 10.304,7.041 10.304,13.578 0,4.831 -1.799,8.636 -5.397,11.413 -2.749,2.083 -5.661,3.414 -8.733,3.988 l 18.231,25.297 c 0.475,0.694 0.978,1.145 1.508,1.367 0.526,0.215 1.189,0.356 1.966,0.414 v 2.124 h -17.9 l -20.014,-27.764 h -0.036 v 17.393 c 0,3.124 0.503,5.231 1.507,6.313 1.006,1.086 3.017,1.686 6.036,1.802 v 2.256 h -28.989 v -2.256 h 0.004 z m 33.489,-30.826 c 2.414,-1.542 3.623,-5.128 3.623,-10.74 0,-3.438 -0.458,-6.161 -1.38,-8.157 -1.591,-3.385 -4.496,-5.079 -8.712,-5.079 -2.294,0 -3.79,0.298 -4.508,0.893 -0.71,0.599 -1.065,1.57 -1.065,2.925 v 22.607 c 5.612,-0.086 9.629,-0.904 12.042,-2.449 z" id="path27" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 461.482,771.558 c 2.066,-0.145 3.729,-1.116 4.982,-2.91 0.81,-1.127 1.971,-3.615 3.478,-7.467 l 19.061,-48.631 h 2.387 l 19.139,46.681 c 2.155,5.235 3.759,8.612 4.823,10.136 1.061,1.513 2.569,2.248 4.52,2.19 v 2.256 h -27.769 v -2.256 c 2.796,-0.112 4.631,-0.364 5.513,-0.736 0.878,-0.38 1.316,-1.327 1.316,-2.868 0,-0.693 -0.223,-1.748 -0.667,-3.165 -0.278,-0.839 -0.657,-1.855 -1.132,-3.037 l -2.183,-5.38 h -19.26 c -1.257,3.529 -2.066,5.831 -2.43,6.896 -0.757,2.29 -1.133,3.956 -1.133,4.997 0,1.272 0.827,2.198 2.473,2.773 0.974,0.318 2.442,0.492 4.397,0.521 v 2.256 h -17.505 v -2.256 h -0.01 z m 32.205,-18.703 -8.254,-20.558 h -0.718 l -7.747,20.558 h 16.719 z" id="path29" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 524.942,771.558 c 3.268,-0.029 5.39,-0.625 6.37,-1.802 0.975,-1.169 1.465,-2.925 1.465,-5.273 V 722.27 c 0,-2.414 -0.562,-4 -1.68,-4.76 -1.113,-0.765 -3.096,-1.257 -5.943,-1.492 v -2.256 h 21.61 l 16.886,41.136 h 0.71 l 16.782,-41.136 h 21.626 v 2.256 c -2.904,0.235 -4.883,0.79 -5.947,1.666 -1.062,0.876 -1.592,3.028 -1.592,6.45 v 39.306 c 0,3.272 0.53,5.413 1.592,6.425 1.064,1.013 3.043,1.578 5.947,1.69 v 2.256 h -28.482 v -2.256 c 2.54,-0.087 4.451,-0.529 5.74,-1.318 1.276,-0.798 1.923,-2.542 1.923,-5.231 v -43.43 h -0.626 l -21.024,52.239 h -2.301 l -21.234,-51.198 h -0.384 v 40.177 c 0,2.959 0.536,5.128 1.6,6.492 1.057,1.368 3.403,2.124 7.037,2.269 v 2.256 h -20.065 v -2.252 h -0.01 z" id="path31" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 607.8,771.558 c 3.267,-0.029 5.388,-0.625 6.365,-1.802 0.978,-1.169 1.469,-2.925 1.469,-5.273 V 722.27 c 0,-2.414 -0.562,-4 -1.676,-4.76 -1.12,-0.765 -3.104,-1.257 -5.952,-1.492 v -2.256 h 21.615 l 16.881,41.136 h 0.71 L 664,713.761 h 21.626 v 2.256 c -2.905,0.235 -4.888,0.79 -5.948,1.666 -1.062,0.876 -1.594,3.028 -1.594,6.45 v 39.306 c 0,3.272 0.532,5.413 1.594,6.425 1.061,1.013 3.043,1.578 5.948,1.69 v 2.256 h -28.483 v -2.256 c 2.536,-0.087 4.451,-0.529 5.734,-1.318 1.282,-0.798 1.928,-2.542 1.928,-5.231 v -43.43 h -0.625 l -21.023,52.239 h -2.303 l -21.238,-51.198 h -0.379 v 40.177 c 0,2.959 0.531,5.128 1.596,6.492 1.061,1.368 3.403,2.124 7.04,2.269 v 2.256 h -20.065 v -2.252 H 607.8 z" id="path33" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 690.859,771.558 c 2.433,-0.058 4.172,-0.364 5.237,-0.91 1.731,-0.925 2.597,-2.707 2.597,-5.338 v -43.04 c 0,-2.612 -0.825,-4.364 -2.474,-5.257 -1.005,-0.545 -2.792,-0.876 -5.357,-0.991 v -2.257 h 29.991 v 2.257 c -2.679,0.115 -4.52,0.434 -5.529,0.954 -1.675,0.889 -2.513,2.653 -2.513,5.298 v 43.04 c 0,2.488 0.671,4.145 2.011,4.992 1.336,0.834 3.347,1.256 6.031,1.256 v 2.256 h -29.991 v -2.26 h -0.003 z" id="path35" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 726.133,771.558 c 3.183,-0.087 5.237,-0.716 6.158,-1.885 0.925,-1.169 1.381,-2.901 1.381,-5.19 v -42.082 c -2.625,-3.041 -4.24,-4.827 -4.856,-5.359 -0.614,-0.533 -1.446,-0.876 -2.513,-1.021 v -2.257 h 18.183 l 29.488,37.124 h 0.42 v -26.103 c 0,-3.008 -0.527,-5.153 -1.579,-6.442 -1.062,-1.289 -3.168,-2.058 -6.34,-2.322 v -2.257 h 18.435 v 2.257 c -2.682,0.463 -4.479,1.078 -5.382,1.855 -0.91,0.773 -1.359,2.516 -1.359,5.215 v 52.367 h -2.391 l -37.741,-47.507 h -0.583 v 34.834 c 0,2.736 0.358,4.669 1.085,5.798 1.146,1.839 3.491,2.822 7.041,2.966 v 2.256 h -19.44 v -2.248 h -0.007 z" id="path37" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 799.98,721.963 c 5.695,-6.215 12.969,-9.326 21.821,-9.326 3.547,0 7.079,0.69 10.603,2.062 3.519,1.371 5.705,2.053 6.575,2.053 0.916,0 1.659,-0.326 2.218,-0.992 0.559,-0.666 1.017,-1.677 1.379,-3.036 h 2.391 v 20.78 h -2.174 c -2.07,-4.508 -4.177,-8.07 -6.328,-10.673 -4.016,-4.801 -8.577,-7.198 -13.658,-7.198 -5.53,0 -9.562,2.487 -12.104,7.463 -2.539,4.979 -3.812,11.975 -3.812,21 0,7.405 1.181,14.013 3.538,19.81 2.357,5.797 6.918,8.698 13.68,8.698 3.658,0 6.114,-0.794 7.372,-2.385 0.726,-0.893 1.092,-2.256 1.092,-4.074 v -9.376 c 0,-2.694 -0.792,-4.454 -2.394,-5.297 -1.032,-0.521 -3.127,-0.806 -6.274,-0.869 v -2.251 h 29.397 v 2.251 c -2.961,0.116 -4.915,0.74 -5.881,1.852 -0.962,1.112 -1.448,3.203 -1.448,6.264 v 11.327 c -1.898,1.214 -4.971,2.426 -9.214,3.641 -4.246,1.214 -8.992,1.83 -14.238,1.83 -9.522,0 -17.134,-3.111 -22.834,-9.33 -5.306,-5.814 -7.951,-13.108 -7.951,-21.868 -0.006,-8.86 2.743,-16.306 8.244,-22.356 z" id="path39" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 243.327,860.416 c 2.342,-0.086 4.018,-0.405 5.023,-0.954 1.704,-0.93 2.554,-2.69 2.554,-5.302 v -43.032 c 0,-2.587 -0.811,-4.323 -2.43,-5.215 -0.95,-0.545 -2.669,-0.888 -5.15,-1.033 v -2.256 h 29.991 v 2.256 c -3.491,0.116 -5.816,0.62 -6.977,1.512 -1.161,0.893 -1.735,3.086 -1.735,6.603 v 41.991 c 0,1.976 0.495,3.273 1.484,3.913 0.994,0.637 2.928,0.959 5.8,0.959 5.171,0 9.503,-1.182 13.009,-3.537 3.499,-2.355 6.527,-6.95 9.068,-13.777 h 2.513 l -3.479,20.132 h -49.674 v -2.261 h 0.003 z" id="path41" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 302.946,860.416 c 2.066,-0.145 3.729,-1.115 4.982,-2.909 0.81,-1.128 1.971,-3.616 3.475,-7.467 l 19.061,-48.632 h 2.385 l 19.144,46.682 c 2.15,5.235 3.755,8.611 4.815,10.136 1.061,1.512 2.569,2.248 4.524,2.189 v 2.257 h -27.77 v -2.257 c 2.792,-0.111 4.627,-0.363 5.508,-0.735 0.878,-0.38 1.321,-1.327 1.321,-2.868 0,-0.694 -0.227,-1.748 -0.67,-3.166 -0.279,-0.839 -0.658,-1.855 -1.133,-3.037 l -2.182,-5.38 h -19.259 c -1.257,3.529 -2.067,5.831 -2.43,6.896 -0.753,2.29 -1.128,3.955 -1.128,4.996 0,1.272 0.822,2.198 2.47,2.772 0.977,0.319 2.441,0.492 4.4,0.521 v 2.257 H 302.95 v -2.257 h -0.004 z m 32.201,-18.702 -8.25,-20.557 h -0.722 l -7.744,20.557 h 16.716 z" id="path43" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 367.128,860.416 c 3.184,-0.086 5.238,-0.715 6.156,-1.884 0.925,-1.169 1.381,-2.901 1.381,-5.19 V 811.26 c -2.626,-3.042 -4.245,-4.826 -4.855,-5.36 -0.614,-0.533 -1.452,-0.875 -2.513,-1.02 v -2.256 h 18.179 l 29.488,37.124 h 0.423 v -26.103 c 0,-3.008 -0.531,-5.153 -1.588,-6.442 -1.057,-1.286 -3.164,-2.058 -6.331,-2.322 v -2.256 h 18.431 v 2.256 c -2.677,0.463 -4.476,1.079 -5.377,1.855 -0.914,0.772 -1.361,2.517 -1.361,5.214 v 52.367 h -2.386 L 379.033,816.81 h -0.59 v 34.833 c 0,2.736 0.362,4.67 1.093,5.797 1.145,1.839 3.487,2.823 7.038,2.967 v 2.256 h -19.436 v -2.248 h -0.01 z" id="path45" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 441.496,810.822 c 5.697,-6.215 12.969,-9.327 21.821,-9.327 3.547,0 7.082,0.69 10.596,2.062 3.518,1.372 5.712,2.053 6.578,2.053 0.921,0 1.663,-0.326 2.217,-0.992 0.555,-0.665 1.022,-1.678 1.38,-3.038 h 2.387 v 20.781 h -2.179 c -2.066,-4.508 -4.172,-8.07 -6.323,-10.673 -4.017,-4.802 -8.573,-7.198 -13.655,-7.198 -5.529,0 -9.562,2.487 -12.104,7.463 -2.541,4.979 -3.813,11.974 -3.813,21 0,7.404 1.181,14.012 3.543,19.81 2.357,5.797 6.917,8.698 13.678,8.698 3.659,0 6.116,-0.793 7.373,-2.384 0.726,-0.893 1.089,-2.256 1.089,-4.075 v -9.376 c 0,-2.694 -0.794,-4.455 -2.385,-5.297 -1.034,-0.521 -3.128,-0.806 -6.279,-0.868 v -2.252 h 29.4 v 2.252 c -2.959,0.115 -4.922,0.739 -5.884,1.851 -0.961,1.112 -1.448,3.202 -1.448,6.264 v 11.326 c -1.899,1.215 -4.972,2.426 -9.215,3.641 -4.245,1.215 -8.992,1.831 -14.241,1.831 -9.523,0 -17.13,-3.111 -22.827,-9.33 -5.306,-5.814 -7.955,-13.107 -7.955,-21.868 -0.008,-8.859 2.745,-16.305 8.246,-22.354 z" id="path47" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 529.599,802.624 v 2.256 c -3.323,0.116 -5.541,0.648 -6.662,1.595 -1.113,0.955 -1.676,3.124 -1.676,6.521 v 29.777 c 0,4.52 0.519,8.012 1.553,10.475 1.874,4.574 5.46,6.863 10.767,6.863 6.59,0 11.041,-2.529 13.358,-7.595 1.281,-2.781 1.927,-6.673 1.927,-11.686 v -27.186 c 0,-3.182 -0.565,-5.376 -1.694,-6.575 -1.13,-1.198 -3.343,-1.93 -6.638,-2.194 v -2.256 h 18.846 v 2.256 c -2.738,0.549 -4.541,1.223 -5.422,2.021 -0.882,0.793 -1.316,2.628 -1.316,5.488 v 28.421 c 0,7.549 -1.768,13.379 -5.281,17.487 -3.52,4.107 -9.049,6.157 -16.588,6.157 -9.861,0 -16.601,-3.05 -20.233,-9.161 -1.927,-3.244 -2.889,-7.425 -2.889,-12.549 v -29.744 c 0,-3.338 -0.428,-5.438 -1.276,-6.306 -0.85,-0.855 -2.773,-1.463 -5.757,-1.81 v -2.256 h 28.981 z" id="path49" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 565.131,860.416 c 2.065,-0.145 3.729,-1.115 4.989,-2.909 0.808,-1.128 1.967,-3.616 3.479,-7.467 l 19.056,-48.632 h 2.391 l 19.14,46.682 c 2.15,5.235 3.757,8.611 4.824,10.136 1.057,1.512 2.563,2.248 4.518,2.189 v 2.257 h -27.771 v -2.257 c 2.796,-0.111 4.631,-0.363 5.512,-0.735 0.879,-0.38 1.317,-1.327 1.317,-2.868 0,-0.694 -0.228,-1.748 -0.666,-3.166 -0.284,-0.839 -0.658,-1.855 -1.133,-3.037 l -2.183,-5.38 h -19.26 c -1.261,3.529 -2.07,5.831 -2.434,6.896 -0.758,2.29 -1.13,3.955 -1.13,4.996 0,1.272 0.823,2.198 2.472,2.772 0.972,0.319 2.438,0.492 4.396,0.521 v 2.257 h -17.509 v -2.257 h -0.008 z m 32.204,-18.702 -8.25,-20.557 h -0.722 l -7.747,20.557 h 16.719 z" id="path51" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 639.326,810.822 c 5.701,-6.215 12.969,-9.327 21.821,-9.327 3.546,0 7.081,0.69 10.604,2.062 3.518,1.372 5.704,2.053 6.574,2.053 0.922,0 1.659,-0.326 2.217,-0.992 0.559,-0.665 1.018,-1.678 1.382,-3.038 h 2.389 v 20.781 h -2.174 c -2.066,-4.508 -4.177,-8.07 -6.328,-10.673 -4.016,-4.802 -8.576,-7.198 -13.658,-7.198 -5.529,0 -9.562,2.487 -12.104,7.463 -2.541,4.979 -3.813,11.974 -3.813,21 0,7.404 1.18,14.012 3.543,19.81 2.354,5.797 6.913,8.698 13.675,8.698 3.658,0 6.114,-0.793 7.371,-2.384 0.727,-0.893 1.094,-2.256 1.094,-4.075 v -9.376 c 0,-2.694 -0.794,-4.455 -2.39,-5.297 -1.033,-0.521 -3.131,-0.806 -6.279,-0.868 v -2.252 h 29.397 v 2.252 c -2.961,0.115 -4.916,0.739 -5.881,1.851 -0.961,1.112 -1.443,3.202 -1.443,6.264 v 11.326 c -1.904,1.215 -4.975,2.426 -9.221,3.641 -4.24,1.215 -8.987,1.831 -14.236,1.831 -9.522,0 -17.134,-3.111 -22.831,-9.33 -5.31,-5.814 -7.954,-13.107 -7.954,-21.868 -0.005,-8.859 2.743,-16.305 8.245,-22.354 z" id="path53" inkscape:connector-curvature="0" style="fill:#1b75b3"/><path d="m 698.446,862.673 v -2.257 c 2.457,-0.086 4.2,-0.434 5.233,-1.041 1.597,-0.925 2.39,-2.661 2.39,-5.203 v -43.041 c 0,-2.587 -0.825,-4.322 -2.468,-5.215 -0.95,-0.545 -2.669,-0.888 -5.155,-1.033 v -2.252 h 49.427 v 17.914 h -2.091 c -1.097,-5.728 -2.943,-9.645 -5.552,-11.756 -2.609,-2.112 -7.365,-3.169 -14.263,-3.169 -2.624,0 -4.291,0.285 -5.006,0.847 -0.711,0.566 -1.069,1.686 -1.069,3.363 v 20.566 c 4.883,0.057 8.197,-0.86 9.93,-2.757 1.73,-1.889 3.06,-5.359 3.977,-10.392 h 2.179 v 30.029 h -2.179 c -0.61,-5.059 -1.863,-8.624 -3.745,-10.694 -1.888,-2.066 -5.274,-3.099 -10.157,-3.099 v 21.524 c 0,1.872 0.466,3.153 1.403,3.835 0.934,0.682 2.856,1.021 5.762,1.021 5.472,0 9.941,-1.1 13.399,-3.297 3.463,-2.194 6.538,-6.318 9.219,-12.368 h 2.385 l -3.478,18.484 h -50.141 v -0.009 z" id="path55" inkscape:connector-curvature="0" style="fill:#1b75b3"/></g></g>
              </svg>
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" aria-label="Python"><i aria-hidden="true" title="python" class="devicon-python-plain-wordmark colored"></i></a>
            <div class="tooltip">
              <i aria-hidden="true" title="javascript" class="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>
            <div class="tooltip">
              <i aria-hidden="true" title="TypeScript" class="devicon-typescript-plain colored"></i>
                <p>TypeScript</p>
              </div>
            <i role="img" aria-label="HTML5" title="html5" class="devicon-html5-plain-wordmark colored"></i>
            <i role="img" aria-label="CSS3" title="css3" class="devicon-css3-plain-wordmark colored"></i>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Frameworks"/></h3>
          <div class="devicon">
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" aria-label="Vue.js"><i aria-hidden="true" title="vuejs" class="devicon-vuejs-plain-wordmark colored"></i></a>
            <div class="tooltip">
              <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
                <i aria-hidden="true" title="Flutter" class="devicon-flutter-plain colored"></i>
                <p>Flutter</p>
              </a>
            </div>
            <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" aria-label="Django">
              <i aria-hidden="true" title="Django" style="color:white;" class="devicon-django-plain"></i>
            </a>
            <div class="tooltip">
              <a href="https://angular.dev/" target="_blank" rel="noopener noreferrer" aria-label="Angular">
              <i aria-hidden="true" title="Angular" class="devicon-angularjs-plain colored"></i>
              <p>Angular</p>
              </a>
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="CI/CD"/></h3>
          <div class="devicon">
            <div class="tooltip">
              <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">
            <i aria-hidden="true" title="GitHub Actions" style="color:white;" class="devicon-github-original"></i>
                <p>GitHub Actions</p>
              </a>
              </div>
              <div class="tooltip">
                <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer">
                  <i aria-hidden="true" title="Jenkins" class="devicon-jenkins-plain colored"></i>
                  <p>Jenkins</p>
                </a>
              </div>
          </div>
        </div>
        <!-- <div class="skillbox">
          <h3><typing-component text="Clouds"/></h3>
          <div class="devicon">
            <i title="googlecloud" class="devicon-googlecloud-plain-wordmark colored"></i>
            <i title="amazonwebservices" class="devicon-amazonwebservices-plain-wordmark colored"></i>
            <i title="oracle" class="devicon-oracle-original colored"></i>
          <div>
        </div>
        </div>
        </div> -->
        <div class="skillbox">
          <h3><typing-component text="Editors"/></h3>
          <div class="devicon">
            <div class="tooltip">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" aria-hidden="true">
<title>Visual Studio Code</title>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256">
<path fill-rule="evenodd" clip-rule="evenodd" d="M181.534 254.252C185.566 255.823 190.164 255.722 194.234 253.764L246.94 228.403C252.478 225.738 256 220.132 256 213.983V42.0181C256 35.8689 252.478 30.2638 246.94 27.5988L194.234 2.23681C188.893 -0.333132 182.642 0.296344 177.955 3.70418C177.285 4.191 176.647 4.73454 176.049 5.33354L75.149 97.3862L31.1992 64.0247C27.1079 60.9191 21.3853 61.1735 17.5855 64.63L3.48936 77.4525C-1.15853 81.6805 -1.16386 88.9926 3.47785 93.2274L41.5926 128L3.47785 162.773C-1.16386 167.008 -1.15853 174.32 3.48936 178.548L17.5855 191.37C21.3853 194.827 27.1079 195.081 31.1992 191.976L75.149 158.614L176.049 250.667C177.645 252.264 179.519 253.467 181.534 254.252ZM192.039 69.8853L115.479 128L192.039 186.115V69.8853Z" fill="white"/>
</mask>
<g mask="url(#mask0)">
<path d="M246.94 27.6383L194.193 2.24138C188.088 -0.698302 180.791 0.541721 175.999 5.33332L3.32371 162.773C-1.32082 167.008 -1.31548 174.32 3.33523 178.548L17.4399 191.37C21.2421 194.827 26.9682 195.081 31.0619 191.976L239.003 34.2269C245.979 28.9347 255.999 33.9103 255.999 42.6667V42.0543C255.999 35.9078 252.478 30.3047 246.94 27.6383Z" fill="#0065A9"/>
<g filter="url(#filter0_d)">
<path d="M246.94 228.362L194.193 253.759C188.088 256.698 180.791 255.458 175.999 250.667L3.32371 93.2272C-1.32082 88.9925 -1.31548 81.6802 3.33523 77.4523L17.4399 64.6298C21.2421 61.1733 26.9682 60.9188 31.0619 64.0245L239.003 221.773C245.979 227.065 255.999 222.09 255.999 213.333V213.946C255.999 220.092 252.478 225.695 246.94 228.362Z" fill="#007ACC"/>
</g>
<g filter="url(#filter1_d)">
<path d="M194.196 253.763C188.089 256.7 180.792 255.459 176 250.667C181.904 256.571 192 252.389 192 244.039V11.9606C192 3.61057 181.904 -0.571175 176 5.33321C180.792 0.541166 188.089 -0.700607 194.196 2.23648L246.934 27.5985C252.476 30.2635 256 35.8686 256 42.0178V213.983C256 220.132 252.476 225.737 246.934 228.402L194.196 253.763Z" fill="#1F9CF0"/>
</g>
<g style="mix-blend-mode:overlay" opacity="0.25">
<path fill-rule="evenodd" clip-rule="evenodd" d="M181.378 254.252C185.41 255.822 190.008 255.722 194.077 253.764L246.783 228.402C252.322 225.737 255.844 220.132 255.844 213.983V42.0179C255.844 35.8687 252.322 30.2636 246.784 27.5986L194.077 2.23665C188.737 -0.333299 182.486 0.296177 177.798 3.70401C177.129 4.19083 176.491 4.73437 175.892 5.33337L74.9927 97.386L31.0429 64.0245C26.9517 60.9189 21.229 61.1734 17.4292 64.6298L3.33311 77.4523C-1.31478 81.6803 -1.32011 88.9925 3.3216 93.2273L41.4364 128L3.3216 162.773C-1.32011 167.008 -1.31478 174.32 3.33311 178.548L17.4292 191.37C21.229 194.827 26.9517 195.081 31.0429 191.976L74.9927 158.614L175.892 250.667C177.488 252.264 179.363 253.467 181.378 254.252ZM191.883 69.8851L115.323 128L191.883 186.115V69.8851Z" fill="url(#paint0_linear)"/>
</g>
</g>
<defs>
<filter id="filter0_d" x="-21.4896" y="40.5225" width="298.822" height="236.149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="10.6667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="154.667" y="-20.6735" width="122.667" height="297.347" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="10.6667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="127.844" y1="0.659988" x2="127.844" y2="255.34" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
                <p>Visual Studio Code</p>
              </div>
            <i role="img" aria-label="Vim" title="vim" class="devicon-vim-plain colored"></i>
            <div class="tooltip">
            <svg
   aria-hidden="true"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://web.resource.org/cc/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="48"
   height="48"
   id="svg2"
   sodipodi:version="0.32"
   inkscape:version="0.45.1"
   version="1.0"
   sodipodi:docbase="C:\Documents and Settings\Administrador\Meus documentos\Minhas imagens"
   sodipodi:docname="eclipse-SVG.svg"
   inkscape:output_extension="org.inkscape.output.svg.inkscape">
   <title>Eclipse JDT</title>
  <defs
     id="defs4">
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient2225"
       id="radialGradient3292"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.5139214,0.9532276,-0.9143078,0.4929386,19.917341,-11.499809)"
       cx="15.700563"
       cy="15.07069"
       fx="15.700563"
       fy="15.07069"
       r="13.884521" />
    <linearGradient
       id="linearGradient2225">
      <stop
         style="stop-color:#ffffff;stop-opacity:0.63529414;"
         offset="0"
         id="stop2227" />
      <stop
         id="stop2235"
         offset="0.5"
         style="stop-color:#ffffff;stop-opacity:0.20792079;" />
      <stop
         style="stop-color:#424289;stop-opacity:0.07450981;"
         offset="1"
         id="stop2229" />
    </linearGradient>
    <linearGradient
       id="linearGradient3377">
      <stop
         id="stop3379"
         offset="0"
         style="stop-color:#c98cbb;stop-opacity:1;" />
      <stop
         id="stop3381"
         offset="1"
         style="stop-color:#a9b7da;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="linearGradient3371">
      <stop
         id="stop3373"
         offset="0"
         style="stop-color:#c98cbb;stop-opacity:1;" />
      <stop
         id="stop3375"
         offset="1"
         style="stop-color:#a9b7da;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="linearGradient3365">
      <stop
         id="stop3367"
         offset="0"
         style="stop-color:#c98cbb;stop-opacity:1;" />
      <stop
         id="stop3369"
         offset="1"
         style="stop-color:#a9b7da;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="linearGradient3351">
      <stop
         style="stop-color:#c98cbb;stop-opacity:1;"
         offset="0"
         id="stop3353" />
      <stop
         style="stop-color:#a9b7da;stop-opacity:1"
         offset="1"
         id="stop3355" />
    </linearGradient>
    <linearGradient
       id="linearGradient3279">
      <stop
         id="stop3281"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:0.50196081;" />
      <stop
         id="stop3283"
         offset="1"
         style="stop-color:#ffffff;stop-opacity:0;" />
    </linearGradient>
    <linearGradient
       id="linearGradient3269">
      <stop
         style="stop-color:#ffffff;stop-opacity:0;"
         offset="0"
         id="stop3271" />
      <stop
         style="stop-color:#c98cbb;stop-opacity:0;"
         offset="1"
         id="stop3273" />
    </linearGradient>
    <linearGradient
       id="linearGradient3261">
      <stop
         id="stop3263"
         offset="0"
         style="stop-color:#04034e;stop-opacity:1;" />
      <stop
         id="stop3265"
         offset="1"
         style="stop-color:#c98cbb;stop-opacity:1" />
    </linearGradient>
    <linearGradient
       id="linearGradient3249">
      <stop
         style="stop-color:#04034e;stop-opacity:1;"
         offset="0"
         id="stop3251" />
      <stop
         style="stop-color:#7575b9;stop-opacity:1"
         offset="1"
         id="stop3253" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3249"
       id="linearGradient3484"
       gradientUnits="userSpaceOnUse"
       x1="68.214287"
       y1="63.92857"
       x2="37.32143"
       y2="30" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3365"
       id="linearGradient2198"
       gradientUnits="userSpaceOnUse"
       x1="50.381359"
       y1="47.093262"
       x2="95.397049"
       y2="46.775925"
       gradientTransform="translate(-47.509484,-22.196517)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3371"
       id="linearGradient2201"
       gradientUnits="userSpaceOnUse"
       x1="50.381359"
       y1="47.093262"
       x2="95.397049"
       y2="46.775925"
       gradientTransform="translate(-47.509484,-22.196517)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3377"
       id="linearGradient2204"
       gradientUnits="userSpaceOnUse"
       x1="50.381359"
       y1="47.093262"
       x2="95.397049"
       y2="46.775925"
       gradientTransform="translate(-47.509484,-22.196517)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3351"
       id="linearGradient2207"
       gradientUnits="userSpaceOnUse"
       x1="50.381359"
       y1="47.093262"
       x2="95.397049"
       y2="46.775925"
       gradientTransform="translate(-47.509484,-22.196517)" />
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient3261"
       id="linearGradient2223"
       gradientUnits="userSpaceOnUse"
       x1="104.63487"
       y1="46.964287"
       x2="30.033598"
       y2="46.964287"
       gradientTransform="translate(-4.7922134e-4,4.7922134e-4)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient2225"
       id="radialGradient3212"
       cx="15.700563"
       cy="15.07069"
       fx="15.700563"
       fy="15.07069"
       r="13.884521"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.442493,0.8207414,-0.7872309,0.4244266,20.759491,-3.0796524)" />
    <radialGradient
       inkscape:collect="always"
       xlink:href="#linearGradient2225"
       id="radialGradient3303"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.442493,0.8207414,-0.7872309,0.4244266,20.759491,-3.0796524)"
       cx="15.700563"
       cy="15.07069"
       fx="15.700563"
       fy="15.07069"
       r="13.884521" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="4"
     inkscape:cx="-9.4436179"
     inkscape:cy="17.516418"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     width="48px"
     height="48px"
     inkscape:window-width="1280"
     inkscape:window-height="968"
     inkscape:window-x="-4"
     inkscape:window-y="-4" />
  <metadata
     id="metadata7">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Camada 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       transform="matrix(0.9311018,0,0,0.9420131,-23.732315,-20.240973)"
       sodipodi:open="true"
       sodipodi:end="6.2772904"
       sodipodi:start="0"
       d="M 75.357143,46.964287 A 23.125,22.857143 0 1 1 75.356742,46.829547"
       sodipodi:ry="22.857143"
       sodipodi:rx="23.125"
       sodipodi:cy="46.964287"
       sodipodi:cx="52.232143"
       id="path3257"
       style="fill:url(#linearGradient3484);fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       sodipodi:type="arc" />
    <path
       style="fill:url(#linearGradient2223);fill-opacity:1;stroke:#000000;stroke-width:0.93654156;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       d="M 22.999521,2.4692292 C 11.114007,2.4692292 1.4682708,12.114965 1.4682708,24.000479 C 1.4682708,35.885993 11.114006,45.531727 22.999521,45.531729 C 23.264909,45.531729 23.517698,45.510015 23.780771,45.500479 C 12.409269,44.923437 3.3745208,35.514571 3.3745208,24.000479 C 3.3745208,12.486388 12.409269,3.0775202 23.780771,2.5004792 C 23.518674,2.4910232 23.263913,2.4692292 22.999521,2.4692292 z "
       id="path2274" />
    <rect
       style="fill:url(#linearGradient2207);fill-opacity:1;stroke:#000000;stroke-width:1.00357521;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       id="rect3343"
       width="43.775467"
       height="1.0065774"
       x="3.6202538"
       y="19.090153" />
    <rect
       style="fill:url(#linearGradient2204);fill-opacity:1;stroke:#000000;stroke-width:1.00812304;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       id="rect3345"
       width="44.373596"
       height="1.0020295"
       x="3.0040619"
       y="22.091316" />
    <rect
       style="fill:url(#linearGradient2201);fill-opacity:1;stroke:#000000;stroke-width:1.00610852;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       id="rect3347"
       width="44.107754"
       height="1.0040441"
       x="3.2925332"
       y="25.082462" />
    <rect
       style="fill:url(#linearGradient2198);fill-opacity:1;stroke:#000000;stroke-width:1.003914;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       id="rect3349"
       width="43.819771"
       height="1.0062386"
       x="3.5658333"
       y="28.080254" />
    <path
       style="opacity:1;fill:url(#radialGradient3292);fill-opacity:1;stroke:#000000;stroke-width:1.16142261;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0"
       d="M 24.844792,2.4871817 C 13.150443,2.4871817 3.6482122,11.834343 3.3447924,23.455932 C 6.0971334,25.925573 9.7023789,27.455932 13.688543,27.455932 C 22.269429,27.455932 29.251041,20.47432 29.251042,11.893432 L 29.251042,11.799682 C 29.230497,8.3145636 28.048841,5.1006757 26.094792,2.5184317 C 25.678274,2.4944087 25.267296,2.4871817 24.844792,2.4871817 z "
       id="path3301" />
  </g>
  <g
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="a" />
</svg>
                <p>Eclipse JDT</p>
              </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Infrastructure"/></h3>
          <div class="devicon">
            <div class="tooltip">
            <i aria-hidden="true" title="bash" class="devicon-bash-plain" style="color: yellow;"></i>
              <p>bash</p>
            </div>
            <div class="backgroundbox">
            
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="315px" viewBox="0 0 256 315" version="1.1" preserveAspectRatio="xMidYMid">
              <title>ansible</title>
              <g>
                <g transform="translate(0.000000, 281.859985)" fill="#1A1918">
                  <path d="M67.516834,32.0035248 C66.9753105,32.0035248 66.3906671,31.8666739 65.9847187,31.3176926 L48.6011921,8.45648614 L48.6011921,31.775177 L44.6368825,31.775177 L44.6368825,3.06093065 C44.6368825,1.91840275 45.5828006,1.00382829 46.6646822,1.00382829 C47.2943879,1.00382829 47.8355229,1.18642767 48.239529,1.73540898 L65.5791587,24.5512613 L65.5791587,1.323673 L69.5430798,1.323673 L69.5430798,29.9917765 C69.5430798,31.1808416 68.5971618,32.0035248 67.516834,32.0035248"/>
                  <path d="M100.306277,32.277976 C96.3435217,32.277976 92.1993517,31.4545041 88.3259436,29.9921314 L89.2722501,26.6994268 C92.8302228,27.8427434 96.7032425,28.665821 100.306277,28.665821 C105.305853,28.665821 107.917907,26.8824205 107.917907,24.3682281 C107.917907,22.0815948 105.890496,20.9386725 98.9097372,17.6463622 C91.9289785,14.3544463 89.1825141,12.2515955 89.1825141,8.13581322 C89.1825141,2.9701831 93.1452698,0.865754758 100.620936,0.865754758 C103.729063,0.865754758 108.502551,1.50662733 111.250957,2.32970491 L110.620086,5.71272332 C107.601695,4.98153702 103.819576,4.47869854 100.711449,4.47869854 C95.4430543,4.47869854 93.2808449,5.48398111 93.2808449,7.99935666 C93.2808449,10.4678006 94.8564686,11.5196204 102.242787,14.949176 C110.034666,18.561331 112.016238,20.39048 112.016238,24.1390915 C112.016238,29.5807898 106.881088,32.277976 100.306277,32.277976"/>
                  <path d="M130.798131,1.323673 L134.896461,1.323673 L134.896461,31.7747826 L130.798131,31.7747826 L130.798131,1.323673 Z"/>
                  <path d="M169.757834,17.9669168 L159.578047,17.9669168 L159.578047,28.3009377 L169.757834,28.3009377 C173.225294,28.3009377 175.342053,26.1058013 175.342053,23.0418388 C175.342053,20.1612645 173.135558,17.9669168 169.757834,17.9669168 M167.775097,4.79846437 L159.578047,4.79846437 L159.578047,14.5377556 L167.775097,14.5377556 C171.063473,14.5377556 173.450217,12.434116 173.450217,9.50818761 C173.450217,6.62761329 171.378132,4.79846437 167.775097,4.79846437 M169.802508,31.7750587 L157.552578,31.7750587 C156.38096,31.7750587 155.480104,30.8600898 155.480104,29.7175619 L155.480104,3.38144581 C155.480104,2.2834832 156.38096,1.32394907 157.552578,1.32394907 L167.685749,1.32394907 C173.900839,1.32394907 177.59361,4.38712277 177.59361,9.1883429 C177.59361,11.7940322 176.062271,14.2175165 173.719813,15.6349294 C177.189215,16.6867492 179.529731,19.5669291 179.529731,23.0418388 C179.529731,27.888413 175.522302,31.7750587 169.802508,31.7750587"/>
                  <path d="M199.212246,31.7750981 C198.088022,31.7750981 197.186778,30.8147752 197.186778,29.7176013 L197.186778,1.32398851 L201.284331,1.32398851 L201.284331,28.0718406 L217.588307,28.0718406 L217.588307,31.7750981 L199.212246,31.7750981 Z"/>
                  <path d="M245.526181,32.277976 C237.148883,32.277976 232.104634,29.1690539 232.104634,22.9050667 C232.104634,19.9329955 233.771547,17.0981697 237.014473,15.7722536 C234.40203,14.1260985 233.051329,11.7941111 233.051329,9.23377583 C233.051329,3.56451846 237.421198,0.865754758 245.617083,0.865754758 C248.364713,0.865754758 252.237344,1.18638824 255.480658,1.91836331 L255.029647,5.30138173 C251.607638,4.75240042 248.408609,4.43334448 245.301259,4.43334448 C239.986637,4.43334448 237.148883,5.89571709 237.148883,9.4167696 C237.148883,12.2062414 239.761714,14.4005891 243.230339,14.4005891 L250.255383,14.4005891 C251.246364,14.4005891 252.011644,15.1779182 252.011644,16.1378468 C252.011644,17.1435237 251.246364,17.9208529 250.255383,17.9208529 L242.69037,17.9208529 C238.725672,17.9208529 236.204907,19.8864583 236.204907,22.9050667 C236.204907,27.3399049 240.303238,28.665821 245.437222,28.665821 C248.229914,28.665821 252.011644,28.3010166 255.073933,27.5690415 L255.660907,30.9063115 C252.73264,31.7297835 248.903905,32.277976 245.526181,32.277976"/>
                  <path d="M14.1379982,7.03469555 L21.3157099,25.0189603 L10.4751393,16.3496305 L14.1379982,7.03469555 Z M26.8894398,29.1623494 L15.8495854,2.18772698 C15.5345384,1.41039785 14.9036674,0.99866187 14.1379982,0.99866187 C13.372329,0.99866187 12.6967842,1.41039785 12.3817372,2.18772698 L0.263885888,31.7751375 L4.40844431,31.7751375 L9.20601639,19.5768676 L23.5202622,31.3176531 C24.0959709,31.7897297 24.5112425,32.0034854 25.0523775,32.0034854 C26.1327053,32.0034854 27.0786234,31.1808022 27.0786234,29.9921314 C27.0786234,29.7992781 27.0106416,29.492448 26.8894398,29.1623494 L26.8894398,29.1623494 Z"/>
                </g>
                <g>
                  <path d="M255.878566,127.868028 C255.878566,198.323171 198.768494,255.43274 128.312347,255.43274 C57.8622265,255.43274 0.746127325,198.323171 0.746127325,127.868028 C0.746127325,57.4179077 57.8622265,0.301808544 128.312347,0.301808544 C198.768494,0.301808544 255.878566,57.4179077 255.878566,127.868028" fill="#1A1918"/>
                  <path d="M130.459863,78.228885 L163.47146,159.705138 L113.608007,120.427335 L130.459863,78.228885 Z M189.104342,178.474123 L138.32577,56.2720498 C136.876246,52.7476854 133.977698,50.8827909 130.459863,50.8827909 C126.935499,50.8827909 123.826002,52.7476854 122.376477,56.2720498 L66.6436045,190.312411 L85.708924,190.312411 L107.771234,135.047143 L173.610097,188.23707 C176.258016,190.378208 178.168617,191.346566 180.652297,191.346566 C185.626186,191.346566 189.973756,187.617782 189.973756,182.235555 C189.973756,181.359612 189.664363,179.969354 189.104342,178.474123 L189.104342,178.474123 Z" fill="#FFFFFF"/>
                </g>
              </g>
            </svg>
            <span class="sr-only">Ansible</span>
            </div>
            <div class="backgroundbox">
            <svg
              aria-hidden="true"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="719"
              height="768"
              viewBox="-1.7338671 -1.7338671 61.2633042 65.4082292"
              id="svg45453">
              <title>OpenShift</title>
              <defs
                id="defs45455" />
              <path
                d="m 54.22782,11.986615 c -0.5725,-1.1825 -1.235,-2.3237504 -2.00375,-3.4000004 l -8.2125,2.9887504 c 0.955,0.9775 1.7575,2.07625 2.41375,3.25125 l 7.8025,-2.84 z m -36.30287,9.08338 -8.215,2.98875 c 0.105,1.3175 0.3325,2.61875 0.65125,3.89375 l 7.80375,-2.84125 c -0.25375,-1.32 -0.34375,-2.68 -0.24,-4.04125"
                id="path44560"
                style="fill:#c22133;fill-opacity:1;fill-rule:nonzero;stroke:none" />
              <path
                d="m 36.1562,9.6601146 c 1.70875,0.7975004 3.18875,1.8850004 4.4375,3.1600004 l 8.2125,-2.9887504 c -2.275,-3.1925 -5.37375,-5.86 -9.17,-7.63125 -11.74125,-5.475 -25.74875,-0.3775 -31.2225,11.3625004 -1.7725,3.79875 -2.43125,7.83375 -2.12125,11.74125 l 8.21375,-2.98875 c 0.13625,-1.78 0.57,-3.56375 1.36625,-5.27375 C 19.42995,9.4138646 28.5287,6.1038646 36.1562,9.6601146"
                id="path44564"
                style="fill:#db212e;fill-opacity:1;fill-rule:nonzero;stroke:none" />
              <path
                d="m 44.91582,24.668245 c -0.13125,1.77875 -0.58,3.5625 -1.37875,5.27375 -3.55625,7.62875 -12.65625,10.93875 -20.2825,7.3825 -1.71125,-0.79875 -3.2025,-1.8775 -4.44625,-3.155 l -8.19625,2.9825 c 2.27,3.1925 5.365,5.86125 9.16375,7.63375 11.74125,5.47375 25.74625,0.37625 31.22125,-11.365 1.77375,-3.79625 2.4275,-7.83125 2.115,-11.735 l -8.19625,2.9825 z"
                id="path44572"
                style="fill:#db212e;fill-opacity:1;fill-rule:nonzero;stroke:none" />
              <path
                d="m 46.93545,14.641115 -7.80375,2.84 c 1.45,2.5975 2.135,5.5875 1.91,8.595 l 8.19625,-2.98125 c -0.235,-2.94125 -1.01875,-5.8125 -2.3025,-8.45375 m -36.06275,13.124 -7.80375,2.8425 c 0.71625,2.845 1.96,5.54875 3.67,7.955 l 8.195,-2.98375 c -2.10375,-2.16 -3.5025,-4.89375 -4.06125,-7.81375"
                id="path44576"
                style="fill:#eb2126;fill-opacity:1;fill-rule:nonzero;stroke:none" />
              <path
                d="m 53.03832,9.8229946 c -0.25875,-0.42 -0.5275,-0.83375 -0.81375,-1.23625 l -8.2125,2.9887504 c 0.36125,0.37 0.69375,0.7625 1.01125,1.165 l 8.015,-2.9175004 z M 17.89357,22.719365 c -0.02,-0.5475 -0.0113,-1.0975 0.0312,-1.64875 l -8.215,2.98875 c 0.0425,0.52625 0.10875,1.04875 0.1875,1.57 l 7.99625,-2.91 z"
                id="path44584"
                style="fill:#ad213b;fill-opacity:1;fill-rule:nonzero;stroke:none" />
              <path
                d="m 53.11157,21.685615 -8.19625,2.9825 c -0.0863,1.18 -0.31625,2.3625 -0.6925,3.525 l 8.92125,-3.2525 c 0.0638,-1.09 0.0537,-2.1775 -0.0325,-3.255 m -42.49875,15.4675 c 0.63125,0.88875 1.33,1.73625 2.08875,2.53625 l 8.9225,-3.25375 c -1.0425,-0.6525 -1.985,-1.41375 -2.81625,-2.26625 l -8.195,2.98375 z"
                id="path44588"
                style="fill:#ba2133;fill-opacity:1;fill-rule:nonzero;stroke:none" />
              <path
                d="m 52.68932,54.532115 0,0.74 2.14625,0 0,6.55375 0.8125,0 0,-6.55375 2.1475,0 0,-0.74 -5.10625,0 z m -4.9285,0.73938 0,2.4175 2,0 0,0.74 -2,0 0,3.39625 -0.8125,0 0,-7.2925 4.2825,0 0,0.73875 -3.47,0 z m -3.71775,-0.7385 0.8125,0 0,7.29375 -0.8125,0 0,-7.29375 z m -2.90425,7.29287 0,-3.43875 -3.62625,0 0,3.43875 -0.8125,0 0,-7.29375 0.8125,0 0,3.11625 3.62625,0 0,-3.11625 0.8125,0 0,7.29375 -0.8125,0 z m -8.66675,0.11463 c -0.99,0 -1.87625,-0.4275 -2.44875,-1.01 l 0.5425,-0.605 c 0.55125,0.53125 1.1875,0.87625 1.9375,0.87625 0.96875,0 1.57375,-0.48 1.57375,-1.25125 0,-0.6775 -0.40625,-1.0625 -1.74,-1.5425 -1.57375,-0.5625 -2.105,-1.0725 -2.105,-2.125 0,-1.1675 0.91625,-1.86625 2.28125,-1.86625 0.98,0 1.605,0.2925 2.22,0.7825 l -0.52125,0.635 c -0.53125,-0.4375 -1.02125,-0.6775 -1.75,-0.6775 -1.00125,0 -1.4175,0.5 -1.4175,1.07375 0,0.605 0.27125,0.9475 1.73,1.47 1.615,0.5825 2.115,1.125 2.115,2.20875 0,1.14625 -0.89625,2.03125 -2.4175,2.03125 m -5.7415,-0.11463 -2.6775,-3.98 c -0.1775,-0.27125 -0.4175,-0.63625 -0.51125,-0.82375 0,0.27125 0.0212,1.1875 0.0212,1.59375 l 0,3.21 -1.43875,0 0,-7.29375 1.39625,0 2.585,3.855 c 0.1775,0.27125 0.41625,0.63625 0.51,0.82375 0,-0.27125 -0.02,-1.1875 -0.02,-1.595 l 0,-3.08375 1.4375,0 0,7.29375 -1.3025,0 z m -11.50112,0 0,-7.29375 5.06375,0 0,1.4275 -3.605,0 0,1.26125 2.095,0 0,1.41625 -2.095,0 0,1.76125 3.76125,0 0,1.4275 -5.22,0 z m -4.14475,-2.58362 -1.605,0 0,2.58375 -1.45875,0 0,-7.29375 3.18875,0 c 1.375,0 2.51125,0.76125 2.51125,2.3125 0,1.68875 -1.125,2.3975 -2.63625,2.3975 m 0.0738,-3.2925 -1.67875,0 0,1.875 1.69875,0 c 0.6775,0 1.0425,-0.31375 1.0425,-0.94875 0,-0.635 -0.4175,-0.92625 -1.0625,-0.92625 M 3.21,61.940495 c -1.9075,0 -3.21,-1.39625 -3.21,-3.75125 0,-2.355 1.32375,-3.7725 3.23125,-3.7725 1.89625,0 3.19875,1.3975 3.19875,3.7525 0,2.355 -1.32375,3.77125 -3.22,3.77125 m -0.01,-6.075 c -1.02125,0 -1.69875,0.82375 -1.69875,2.30375 0,1.48 0.70875,2.3225 1.73,2.3225 1.02125,0 1.6975,-0.8225 1.6975,-2.3025 0,-1.48 -0.7075,-2.32375 -1.72875,-2.32375"
                id="path44622"
                style="fill:#241f21;fill-opacity:1;fill-rule:nonzero;stroke:none" />
            </svg>
            <span class="sr-only">OpenShift</span>
            </div>
            <div class="tooltip">
            <i aria-hidden="true" title="Kubernetes" class="devicon-kubernetes-plain colored"></i>
              <p>Kubernetes</p>
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Package Managers"/></h3>
          <div class="devicon">
            <i role="img" aria-label="NPM" title="NPM" class="devicon-npm-original-wordmark colored"></i>
<svg role="img" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
   viewBox="0 0 103.6 70.4" enable-background="new 0 0 103.6 70.4">
   <title>Chocolatey</title>
<g>
  <rect y="17.2" fill="#884B2E" width="103.6" height="53.2"/>
  <g>
    <polygon opacity="0.2" fill="#FFFFFF" points="98,34.6 103.6,34.6 103.6,70.4 0,70.4 5.7,64.5 33,64.5 35.2,70.4 37.5,64.5 
      66.1,64.5 68.3,70.4 70.6,64.5 98,64.5     "/>
  </g>
  <polygon opacity="0.3" fill="#FFFFFF" points="66.1,64.5 66.1,36.5 68.3,36.5 68.3,70.4   "/>
  <polygon opacity="0.3" fill="#FFFFFF" points="33,64.5 33,36.5 35.2,36.5 35.2,70.4   "/>
  <g opacity="0.2">
    <polygon fill="#12100B" points="68.3,70.4 68.3,36.5 70.6,36.5 70.6,64.5     "/>
    <polygon fill="#12100B" points="35.2,70.4 35.2,36.5 37.5,36.5 37.5,64.5     "/>
    <polygon fill="#12100B" points="0,70.4 0,33.6 5.7,33.6 5.7,64.5     "/>
  </g>
</g>
<g>
  <g>
    <g>
      <polygon fill="#80B5E3" points="5.6,52.4 0,48 0,0 103.6,0 103.6,48.4 98,52.4 88.5,50.6 79.1,56.8 75.3,52.4 60.9,55 53.2,50.1 
        47.8,53.8 35,49.1 27.5,51.2 15.6,54.7       "/>
    </g>
  </g>
</g>
<path fill="#FDC300" d="M42.3,19.6C42.3,19.6,42.4,19.6,42.3,19.6C42.4,19.6,42.3,19.6,42.3,19.6z"/>
<g>
  <g>
    <path fill="#242C5C" d="M81.6,30c1.6,0.3,4.9-4.1,6-5.3c1.2-1.3,2-0.7,1.3,0.7c-0.6,1.4-1.9,3.7-1.1,4.1c1.7,0.7,3.4-1.9,4-3
      c1.9-3.5,1.9,0.2,1.6,2c-0.8,4-0.7,14.2-16.6,13c-2.6-0.2-6.9-2.9-4.7-5.5c2.2-2.7,10.2-3.5,12.8-1.3c0.8,0.7,0.5,1.8-0.7,1.2
      c-0.9-0.5-2.4-1.1-5-0.7c-1.2,0.2-3.2,1.5-1.6,2.7c1.6,1.2,7.8,0.6,9.7-0.6c3.7-2.2,3.2-6.2,3.5-6.7c0,0,0,0,0,0c0,0,0,0,0,0
      c-0.7,0.8-1.7,1.9-4.1,1.6c-1.7-0.2-1.4-1.8-1.3-2.7c-1.5,1.5-2.7,2.1-4.2,2.1c-0.8,0-1.7-0.2-2.4-0.9c-4.4,2-7,0-5.5-4.2
      c1.1-3.1,2.6-5.9,3.3-7.1c1.8-3,4.1-1.5,3.1,0c-1.2,1.9-3.5,4.7-4.5,7.2c-1.5,3.8,1.8,3.7,3,3.2c0-0.1-0.1-0.2-0.1-0.3
      c-1.2-3.3,2.5-8.1,6.1-5.4c1,1.5-1.1,3.9-3.5,5.5c-0.1,0.1-0.2,0.1-0.3,0.2C80.8,29.8,81.2,29.9,81.6,30z M79.8,28.8
      c1.6-1.1,2.9-2.6,2.2-3.1C80.9,24.8,79.1,27.2,79.8,28.8z"/>
    <path fill="#242C5C" d="M16.7,35.5c2.6,1.7,6.6-6.4,4.5-7.5c-3.2-1.8-7.5,5.1-7.7,8.4c-0.2,2.7,1.9,5.1,5,3.9
      c3.8-1.5,5.7-3.9,7.2-6.6c1-1.6,4.8-9.7,3.4-10.8c-1.2-0.9-3.4,0.9-2.9,5.2c0.2,1.7,1,4.4,1.4,7.2c0.6-1.5,1.9-3.7,3.3-4.2
      c4.4-1.4-0.1,6.7,1.8,6c1.3-0.5,1.7-8.2,5.5-8.9c3.4-0.6,3.2,6.1,0.1,8.1c-2.9,1.9-4-1.4-3.3-4.2c0.3-1.2,2.2-2.2,1.5-1
      c-0.8,1.4-0.2,3.6,1.1,3.1c2.2-0.9,2.7-5.8,0.4-4.5c-2.5,1.3-2.2,6.1-4.2,8.2c-0.7,0.7-1.9,0.9-2.2,0.6c-1.1-0.9,1.1-6-0.5-5.5
      c-1.3,0.4-1.9,3.7-2.5,5.3c-0.1,0.3-0.2,1.9-0.2,1.9l-1.6,0.7c-0.1-3.4-0.7-6.9-1.6-11.6c-0.9-4.9,1.7-9.6,4.8-10
      c4.7-0.7,3,4,1.3,7C28.3,31.5,25,39.9,20.8,44c-5.8,5.5-12.6,0.5-11.2-6.6C10.5,33,15.1,24.6,21,26.2c4.9,1.4,2.5,6.9,0.2,9.5
      c-1.2,1.3-3.5,2.3-5,0.9C15.6,36.1,15.9,35,16.7,35.5z"/>
    <path fill="#242C5C" d="M46.2,28.9c0-1-0.5-1.2-1.3-0.9c-1.1,0.3-2,1.8-1.8,3.2c0.1,0.8,0.9,1.5,2.3,1.1c2.6-0.7,3.5-5.3,5.6-6.8
      c4.1-2.9,6,3.9,2.7,7c-2.1,2-5.1,0.9-5-2.5c0.1-2.4,1.7-5.1,4.3-5.3c2.6-0.3,2.7,2.2,5,2.4c2.4,0.2,3.9-4.9,3.6-7.1
      c-0.3-2.4-1.8-2.1-3.2,1.2c-0.9,2.1-1.3,8.7,1.3,9.1c2.2,0.3,4.3-7.5,8.6-7.2c2.8,0.2,3,5.9,0.7,7.5c-1.1,1.1-2.5,1.1-3.5,1
      c-2.7-0.2-2.9-4.2-0.9-6.5c1.1-1.2,2.2-0.8,1,0.3c-1.4,1.3-0.9,3.3,0.3,3.5c3.4,0.5,3.8-4.9,1.3-4.4c-0.9,0.2-2.1,1.1-3.6,3.5
      c-0.9,1.4-2.5,4.1-3.7,4.4c-1.2,0.3-2.2-0.1-2.9-2.3c-1-3.1-0.5-6.8,0.3-9.7c2.2-7.9,8.6-5.2,7.2,0c-0.6,2.4-2.7,6.5-5,7.7
      c-2.7,1.3-3.1-1.2-5.3-1.9c-3.2-1.1-5.9,4.4-2.2,4.3c2.6-0.4,3.4-5.3,0.4-4.1c-2.9,1.1-3.3,5.3-5.4,7.5c-2.9,3-6.1,0.6-5.3-3.7
      c0.2-1.3,1.8-3.3,3.4-3.6c1.7-0.3,2.7,0.8,2.3,2.5C47,29.6,46.2,29.7,46.2,28.9z"/>
    <path fill="#242C5C" d="M72,24.8c-1.4,1.4-1.6,3.8-0.3,4.8c0.5,0.5,1.9,0.4,2.9-0.2l0.4,0.9c-3.4,2.7-6.3,0-5.4-4
      c0.1-0.4,0.7-1.6,1.3-2.3C71.8,23,72.9,23.9,72,24.8z"/>
    <path fill="#242C5C" d="M73.3,21.3c-1.6-0.8-1.8,0.4-0.9,0.9c4.1,2.4,7.3,1.2,8.2,0.3c0.9-0.8,0.2-1.3-0.6-1.1
      C77.5,22.2,75.3,22.3,73.3,21.3z"/>
  </g>
</g>
<polygon opacity="0.2" fill="#FFFFFF" points="103.6,0 98,0 98,52.4 103.6,48.4 "/>
<polygon opacity="0.2" fill="#12100B" points="5.6,52.4 5.6,0 0,0 0,48 "/>
</svg>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Server"/></h3>
          <div class="devicon">
            <i role="img" aria-label="Red Hat Enterprise Linux" title="Red Hat Enterprise Linux" class="devicon-redhat-plain-wordmark colored"></i>
            <i role="img" aria-label="Ubuntu" title="Ubuntu" class="devicon-ubuntu-plain-wordmark colored"></i>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Industrial Systems"/></h3>
          <div class="devicon">
            <img loading="lazy" alt="Autodesk Fusion 360" title="Autodesk Fusion 360" src="/icons/autodesk-fusion-360.png">
            <div class="tooltip">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="i-cura" viewBox="0 0 24 24"><title>Ultimaker Cura</title> <path fill="currentColor" d="M17 3H7.59L3 7.59V18a3 3 0 003 3h10.41L20 17.41V6a3 3 0 00-3-3zm1 13.59L15.59 19H5V8.41L8.41 5H18z"/><path fill="currentColor" d="M12 17h3v-2h-3a3 3 0 010-6h3V7h-3a5 5 0 000 10z"/></svg>
              <p>Ultimaker Cura</p>
            </div>
            <div class="backgroundbox">
            <img loading="lazy" alt="Simio Simulation Software" title="Simio Simulation Software" src="/icons/simio-simulation-software.png">
            </div>
            <div class="tooltip">
            <img loading="lazy" alt="HAAS Systems" title="HAAS Systems" src="/icons/haas-systems.png">
              <p>HAAS Automation</p>
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Statistics/Math"/></h3>
          <div class="devicon">
            <div class="tooltip">
              <img loading="lazy" alt="SageMath" title="SageMath" style="border-radius:20px" src="/icons/sagemath.png">
              <p>SageMath</p>
            </div>
          <div class="backgroundbox">
            <svg aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 1784.1 625.9" style="enable-background:new 0 0 1784.1 625.9;" xml:space="preserve">
   <title>RStudio</title>

<g id="Gray_Logo">
</g>
<g id="Black_Letters">
</g>
<g id="Blue_Gradient_Letters">
    <g>
        
            <ellipse style="fill: #75AADB;" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -127.9265 317.0317)" class="st0" cx="318.7" cy="312.9" rx="309.8" ry="309.8"/>
        <g>
            <path class="st1" d="M694.4,404.8c16.1,10.3,39.1,18.1,63.9,18.1c36.7,0,58.1-19.4,58.1-47.4c0-25.5-14.8-40.8-52.3-54.8
                c-45.3-16.5-73.3-40.4-73.3-79.1c0-43.3,35.8-75.4,89.8-75.4c28,0,49,6.6,61,13.6l-9.9,29.3c-8.7-5.4-27.2-13.2-52.3-13.2
                c-37.9,0-52.3,22.7-52.3,41.6c0,26,16.9,38.7,55.2,53.6c47,18.1,70.5,40.8,70.5,81.6c0,42.8-31.3,80.3-96.8,80.3
                c-26.8,0-56-8.2-70.9-18.1L694.4,404.8z"/>
            <path class="st1" d="M943.3,201.3v47.8h51.9v27.6h-51.9v107.5c0,24.7,7,38.7,27.2,38.7c9.9,0,15.7-0.8,21-2.5l1.6,27.6
                c-7,2.5-18.1,4.9-32.1,4.9c-16.9,0-30.5-5.8-39.1-15.2c-9.9-11.1-14-28.8-14-52.3V276.7h-30.9v-27.6h30.9V212L943.3,201.3z"/>
            <path class="st1" d="M1202.8,393.7c0,21,0.4,39.1,1.6,54.8h-32.1l-2.1-32.5h-0.8c-9.1,16.1-30.5,37.1-65.9,37.1
                c-31.3,0-68.8-17.7-68.8-87.3V249.1h36.3v110c0,37.9,11.9,63.9,44.5,63.9c24.3,0,41.2-16.9,47.8-33.4c2.1-4.9,3.3-11.5,3.3-18.5
                v-122h36.3V393.7z"/>
            <path class="st1" d="M1434.8,156v241c0,17.7,0.8,37.9,1.6,51.5h-32.1l-1.6-34.6h-1.2c-10.7,22.2-34.6,39.1-67.2,39.1
                c-48.2,0-85.7-40.8-85.7-101.4c-0.4-66.3,41.2-106.7,89.4-106.7c30.9,0,51.1,14.4,60.2,30.1h0.8V156H1434.8z M1398.9,330.2
                c0-4.5-0.4-10.7-1.6-15.2c-5.4-22.7-25.1-41.6-52.3-41.6c-37.5,0-59.7,33-59.7,76.6c0,40.4,20.2,73.8,58.9,73.8
                c24.3,0,46.6-16.5,53.1-43.3c1.2-4.9,1.6-9.9,1.6-15.7V330.2z"/>
            <path class="st1" d="M1535.7,193c0,12.4-8.7,22.2-23.1,22.2c-13.2,0-21.8-9.9-21.8-22.2c0-12.4,9.1-22.7,22.7-22.7
                C1526.6,170.4,1535.7,180.3,1535.7,193z M1495.3,448.5V249.1h36.3v199.4H1495.3z"/>
            <path class="st1" d="M1772.2,347.1c0,73.7-51.5,105.9-99.3,105.9c-53.6,0-95.6-39.6-95.6-102.6c0-66.3,44.1-105.5,98.9-105.5
                C1733.5,245,1772.2,286.6,1772.2,347.1z M1614.4,349.2c0,43.7,24.7,76.6,60.2,76.6c34.6,0,60.6-32.5,60.6-77.5
                c0-33.8-16.9-76.2-59.7-76.2C1632.9,272.1,1614.4,311.7,1614.4,349.2z"/>
        </g>
        <g>
            <path class="st2" d="M424.7,411.8h33.6v26.1h-51.3L322,310.5h-45.3v101.3h44.3v26.1H209.5v-26.1h38.3V187.3l-38.3-4.7v-24.7
                c14.5,3.3,27.1,5.6,42.9,5.6c23.8,0,48.1-5.6,71.9-5.6c46.2,0,89.1,21,89.1,72.3c0,39.7-23.8,64.9-60.7,75.6L424.7,411.8z
                 M276.7,285.3l24.3,0.5c59.3,0.9,82.1-21.9,82.1-52.3c0-35.5-25.7-49.5-58.3-49.5c-15.4,0-31.3,1.4-48.1,3.3V285.3z"/>
        </g>
        <g>
            <path class="st1" d="M1751.8,170.4c-12.9,0-23.4,10.5-23.4,23.4c0,12.9,10.5,23.4,23.4,23.4c12.9,0,23.4-10.5,23.4-23.4
                C1775.2,180.9,1764.7,170.4,1751.8,170.4z M1771.4,193.8c0,10.8-8.8,19.5-19.5,19.5c-10.8,0-19.5-8.8-19.5-19.5
                c0-10.8,8.8-19.5,19.5-19.5C1762.6,174.2,1771.4,183,1771.4,193.8z"/>
            <path class="st1" d="M1760.1,203.3l-5.8-8.5c3.3-1.2,5-3.6,5-7c0-5.1-4.3-6.9-8.4-6.9c-1.1,0-2.2,0.1-3.2,0.3
                c-1,0.1-2.1,0.2-3.1,0.2c-1.4,0-2.5-0.2-3.7-0.5l-0.6-0.1v3.3l3.4,0.4v18.8h-3.4v3.4h10.9v-3.4h-3.9v-7.9h3.2l7.3,11l0.2,0.2h5.3
                v-3.4H1760.1z M1755.6,188.1c0,1.2-0.5,2.2-1.4,2.9c-1.1,0.8-2.8,1.2-5,1.2l-1.9,0v-7.7c1.4-0.1,2.6-0.2,3.7-0.2
                C1753.1,184.3,1755.6,185,1755.6,188.1z"/>
        </g>
    </g>
</g>
<g id="White_Letters">
</g>
<g id="R_Ball">
</g>
</svg>
          <span class="sr-only">RStudio</span>
          </div>
            <div class="backgroundbox">
            <img loading="lazy" title="Maple" src="/icons/maple.png" alt="Maple">
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Image/Vector"/></h3>
          <div class="devicon">
            <div class="tooltip">
            <i aria-hidden="true" class="devicon-gimp-plain colored"></i>
              <p>Gimp</p>
            </div>
            <div class="tooltip">
            <i aria-hidden="true" class="devicon-photoshop-plain colored"></i>
              <p>Photoshop</p>
            </div>
            <div class="tooltip">
            <i aria-hidden="true" class="devicon-inkscape-plain-wordmark"></i>
              <p>Inkscape</p>
            </div>
            <div class="tooltip">
            <i aria-hidden="true" class="devicon-illustrator-plain colored"></i>
              <p>Illustrator</p>
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Video/Streaming"/></h3>
          <div class="devicon">
            <div class="tooltip">
            <img loading="lazy" alt="Davinci Resolve" title="Davinci Resolve" src="/icons/davinci-resolve.png">
              <p>Davinci Resolve</p>
            </div>
            <div class="tooltip">
            <svg aria-hidden="true" id="Layer_1" style=".cls-1{fill:url(#radial-gradient);}.cls-2{fill:none;}.cls-3{fill:url(#radial-gradient-2);}.cls-4{fill:url(#radial-gradient-3);}.cls-5{clip-path:url(#clip-path);}.cls-6{fill:url(#radial-gradient-5);}.cls-7{clip-path:url(#clip-path-2);}.cls-8{fill:url(#radial-gradient-6);}.cls-9{fill:url(#radial-gradient-7);}" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 993 993"><title>OBS Studio</title><defs><radialGradient id="radial-gradient" cx="512.06144" cy="512.12118" r="444.12235" gradientUnits="userSpaceOnUse"><stop offset="0.99" stop-opacity="0.5"/><stop offset="1" stop-opacity="0"/></radialGradient><radialGradient id="radial-gradient-2" cx="514.5" cy="516.5" r="496.5" gradientUnits="userSpaceOnUse"><stop offset="0.91341"/><stop offset="1" stop-opacity="0"/></radialGradient><radialGradient id="radial-gradient-3" cx="512.05911" cy="512.1212" r="486.27268" gradientUnits="userSpaceOnUse"><stop offset="0.99" stop-color="#fff"/><stop offset="0.99505" stop-color="#fdfdfd"/><stop offset="0.99687" stop-color="#f6f6f6"/><stop offset="0.99817" stop-color="#ebebeb"/><stop offset="0.99921" stop-color="#dadada"/><stop offset="1" stop-color="#c7c7c7"/></radialGradient><clipPath id="clip-path" transform="translate(-18 -20)"><path id="SVGID" class="cls-1" d="M67.93793,512.1212c0,245.28622,198.83963,444.12116,444.12116,444.12116S956.185,757.40742,956.185,512.1212C956.185,266.83966,757.34063,68,512.05909,68S67.93793,266.83966,67.93793,512.1212"/></clipPath><radialGradient id="radial-gradient-5" cx="494.0614" cy="492.1212" r="444.12237" xlink:href="#radial-gradient"/><clipPath id="clip-path-2" transform="translate(-18 -20)"><path class="cls-2" d="M71.60309,512.1212c0,243.262,197.19869,440.456,440.456,440.456s440.46067-197.194,440.46067-440.456c0-243.25733-197.20334-440.45606-440.46067-440.45606S71.60309,268.86387,71.60309,512.1212"/></clipPath><radialGradient id="radial-gradient-6" cx="5.29522" cy="1029.31443" r="4.65333" gradientTransform="matrix(94.65428, 0, 0, -94.65428, -7.15418, 97921.13875)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stop-color="#322f32"/></radialGradient><radialGradient id="radial-gradient-7" cx="578.89023" cy="473.31944" r="353.94182" gradientTransform="translate(0 -45.94173) scale(1 1.09706)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c2c0c2"/><stop offset="1" stop-color="#ebebeb"/></radialGradient></defs><title>OBS-Alt-2</title><path class="cls-3" d="M514.5,20C788.71048,20,1011,242.28952,1011,516.5S788.71048,1013,514.5,1013,18,790.71056,18,516.5,240.28946,20,514.5,20" transform="translate(-18 -20)" shape-rendering="geometricPrecision"/><path class="cls-4" d="M512.05911,25.84852c268.56207,0,486.27268,217.71061,486.27268,486.27268S780.62118,998.39388,512.05911,998.39388,25.78643,780.68334,25.78643,512.1212,243.497,25.84852,512.05911,25.84852" transform="translate(-18 -20)" shape-rendering="geometricPrecision"/><path id="SVGID-2" data-name="SVGID" class="cls-1" d="M67.93793,512.1212c0,245.28622,198.83963,444.12116,444.12116,444.12116S956.185,757.40742,956.185,512.1212C956.185,266.83966,757.34063,68,512.05909,68S67.93793,266.83966,67.93793,512.1212" transform="translate(-18 -20)" shape-rendering="geometricPrecision"/><g class="cls-5"><rect class="cls-6" x="49.93786" y="48" width="888.24709" height="888.2424" shape-rendering="geometricPrecision"/></g><g class="cls-7"><rect class="cls-8" x="53.60302" y="51.66514" width="880.91676" height="880.91211" shape-rendering="geometricPrecision"/></g><path class="cls-9" d="M684.907,370.50177a199.24212,199.24212,0,0,1-277.2406,70.45605A202.74787,202.74787,0,0,1,362.753,403.18446a198.9214,198.9214,0,0,1-49.89819-141.13313c.28387-5.78965.76859-11.56257,1.52683-17.30975.74726-5.66395,1.7459-11.30258,2.97756-16.87354q1.89659-8.57846,4.54716-16.96232,2.572-8.15982,5.86352-16.07336c2.27456-5.48511,4.8105-10.85411,7.54648-16.122,2.88124-5.54761,6.07307-10.94466,9.4812-16.1843q4.7149-7.24866,10.04419-14.06235c3.85433-4.95083,7.95005-9.72719,12.27081-14.27641q6.54174-6.88764,13.66916-13.16194c4.83847-4.26274,9.91241-8.2498,15.13962-12.02191q4.04222-2.917,8.23639-5.61188a244.394,244.394,0,0,0-109.08168,323.486q.82056,1.704,1.66751,3.39519.38468.7681.77476,1.53348a4.60036,4.60036,0,0,0,.46987.91713c.32364.35883.40473.29867.89987.28969,2.578-.04676,5.15806-.03471,7.73585.021q7.14438.15426,14.26584.8147A199.577,199.577,0,0,1,499.05209,600.21532a201.32943,201.32943,0,0,1,.64133,60.16627A198.7484,198.7484,0,0,1,453.532,762.237a202.19273,202.19273,0,0,1-49.77669,41.78411A199.86222,199.86222,0,0,1,279.6049,830.51543a203.06671,203.06671,0,0,1-23.20252-4.02994c-4.95445-1.16337-9.85994-2.531-14.71085-4.07118a242.60378,242.60378,0,0,0,68.54706,18.97282,247.03638,247.03638,0,0,0,66.4102-.79809,243.52975,243.52975,0,0,0,108.66832-44.88732,246.04226,246.04226,0,0,0,59.73343-63.07421q1.04115-1.58711,2.05761-3.19021c.263-.41478.85074-1.06891.77441-1.50894a8.49447,8.49447,0,0,0-1.05057-1.9447q-2.00279-3.75737-3.8436-7.59815-3.698-7.71623-6.7219-15.73206a198.01918,198.01918,0,0,1-9.34078-33.367,200.87418,200.87418,0,0,1,.041-73.98045A197.88137,197.88137,0,0,1,548.324,536.05063,199.08091,199.08091,0,0,1,721.41371,432.9917q7.33682-.05093,14.66347.42449,7.066.47,14.088,1.41786,6.952.95079,13.82736,2.39389,6.73038,1.4208,13.355,3.29017,6.48924,1.84088,12.8432,4.11821,6.44067,2.31259,12.7085,5.06391,6.3891,2.79015,12.56139,6.04592,6.16559,3.24277,12.09984,6.9069c3.71356,2.2975,7.36439,4.705,10.91293,7.25121q5.48994,3.93921,10.72616,8.20808c3.603,2.93077,7.0801,6.01877,10.46193,9.202q5.40071,5.08362,10.4077,10.563,4.9978,5.44733,9.57009,11.27034c3.4,4.31833,6.6383,8.77214,9.66035,13.36317,3.10448,4.71627,6.03931,9.55546,8.74828,14.51488a200.21456,200.21456,0,0,1,10.06824,21.36634,206.9737,206.9737,0,0,1,7.97272,24.37127,243.74067,243.74067,0,0,0-51.67776-120.94126,245.663,245.663,0,0,0-75.01182-62.48165,242.85789,242.85789,0,0,0-95.94806-28.3044Q689.18423,370.69463,684.907,370.50177Z" transform="translate(-18 -20)" shape-rendering="geometricPrecision"/></svg>
              <p>OBS Studio</p>
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Way back when"/></h3>
          <div class="devicon">
            <div class="tooltip">
          <img loading="lazy" alt="Adobe Flash Professional CS6" title="Adobe Flash Professional CS6" src="/icons/adobe-flash-professional-cs6.png">
              <p>Adobe Flash CS6</p>
            </div>
            <div class="tooltip">
<svg aria-hidden="true" style="backface-visibility: hidden;" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 8000 8000" height="316.227766" viewBox="0 0 8000 8000" width="316.227766"><circle cx="4000" cy="3999.99" fill="#f32735" r="3989.83"></circle><path d="m6809.98 1167.54-5619.69 5665.16c.12.12.24.24.35.35 1564.56 1551.67 4090.76 1541.21 5642.42-23.35 1551.58-1564.46 1541.22-4090.47-23.08-5642.16z" fill="#9e0f20"></path><g fill="#fff"><path d="m3418.55 4663.88c103.52-69.29 205.64-140.68 308.48-210.99 413.63-282.77 827.32-565.46 1241-848.16l460.86-316.27c-23.94-22-44.91-42.39-67.08-61.34-130.83-111.81-271.18-209.64-423.41-290.46-237.63-126.15-489.03-207.54-758.01-225.32-138.62-9.16-277.77-1.8-415.39 21.8-206.92 35.48-403.26 101.69-588.54 200.8-273.71 146.4-500.17 346.37-679.61 599.35-206.79 291.55-321.53 617.01-350.94 972.33-11.79 142.45-5.16 285.15 16.97 426.49 28.33 181.01 79.53 355.51 156.7 521.99 85.72 184.92 198.21 351.95 337.41 500.75 33.83 36.16 70.47 69.68 106.78 105.35 53.62-74.55 126.48-115.2 207.12-143.87 144.52-51.37 295.63-60.53 446.77-63.91 84.12-1.88 168.65 3.96 252.65 10.57 95.3 7.5 190.27 19.34 285.29 30.13 45.04 5.11 89.86 12.17 139.08 18.94-139.37-292.64-276.57-580.73-413.73-868.74-71.11 14.03-138.38 27.3-207.23 40.88-2.58-6.98-4.83-11.32-5.79-15.93-24.15-115.66-46.77-231.67-73.16-346.81-6.63-28.9.79-42.19 23.78-57.58zm-191.62-1435.07c-299.18 248.67-538.63 540.87-662.48 916.38-34.52 104.65-54.25 212.07-63.92 321.99-26.51 301.27 42 583.3 173.29 851.49 48.3 98.67 108.33 191.6 163.01 287.15 3.67 6.41 7.27 12.85 13.22 23.38-40.76 20.76-79.46 41.43-119.09 60.11-13.53 6.37-27.25 8.93-38.28-10.38-114.74-201.01-209.08-410.51-266.32-635.47-39.8-156.44-62.32-315.61-56.21-477.02 10.22-269.88 85.88-520.78 228.57-751.09 124.62-201.15 283.53-370.9 467.64-518.27 156.97-125.65 325.72-232.2 508.2-316.8 8.36-3.87 16.93-7.28 25.4-10.9-132.1 76.58-256.43 162.52-373.03 259.43z"></path><path d="m3810.15 5126.95c71.34-13.78 141.09-27.73 211.14-40.03 7.06-1.24 17.53 5.85 23.62 11.9 101.26 100.62 199.06 204.95 303.9 301.65 87.91 81.1 183.82 153.54 276.37 229.59 131.92 108.4 247.22 232.56 346.44 371.17 173.4 242.26 298.75 507.36 368.36 797.5 6.12 25.51-1.66 56.9-10.53 82.99-30.12 88.64-94.02 152.58-164.66 209.75-98.96 80.09-209.83 139.92-327.3 188.41-24.42 10.08-33.29 5.25-44.22-18.67-120.95-264.59-243.44-528.48-365.36-792.63-165.29-358.1-330.43-716.27-495.67-1074.39-38.48-83.39-77.09-166.71-115.57-250.1-2.34-5.05-3.99-10.43-6.52-17.14z"></path><path d="m4081.5 6038.59c-3.87-8.33-15.91-17.13-25-18.15-178.55-20.06-356.97-42.05-535.97-57.13-125.26-10.55-251.13-2.99-375.74 14.67-88.22 12.5-174.58 33.46-253.69 76.84-46.46 25.48-81.08 59.67-102.13 111.26-61.12 149.83-126.47 297.94-190.23 446.69-33.1 77.22-66.34 154.39-101.61 236.46 8.3-2.48 11.55-3.36 14.74-4.43 173.5-58.22 353.3-74.91 534.53-75.08 108.08-.1 216.37 7.59 324.19 16.39 105.68 8.63 211.32 20.18 316.19 35.74 136.47 20.24 272.17 45.71 411.2 69.44 65.36-117.75 132.4-238.18 198.72-359.01 3.42-6.23 3.35-17.11.33-23.75-71.26-156.91-142.94-313.64-215.53-469.94zm-1021.43 123.77c-14.13 4.33-29 15.05-37.68 27.04-95.97 132.57-190.8 265.96-285.78 399.24-2.59 3.63-3.33 8.58-4.94 12.91-2.48-2.14-4.96-4.27-7.44-6.41 16.48-35.11 32.72-70.33 49.49-105.3 55.41-115.58 110.69-231.22 167.09-346.32 5.14-10.48 16.63-21.66 27.46-24.94 114.44-34.65 231.3-55.74 350.67-66.01 88.46-7.61 175.53-5.06 262.39 12 9.13 1.79 18.01 4.87 27 7.36-191-13.78-370.12 35.86-548.26 90.43z"></path><path d="m5827.13 4252.21c-21.53-132.44-43.29-264.84-64.56-397.32-18.91-117.75-37.03-235.62-56-353.36-14.46-89.77-29.56-179.47-44.9-271.99l-2169.89 1489.13c-7.41 6.72-14.64 19.4-12.83 26.5 17.76 69.76 37.96 138.89 57.32 207.81 4.9.25 7.86.99 10.58.45 171.86-34.12 343.61-68.78 515.55-102.45 329.03-64.43 658.22-128.03 987.23-192.49 263.64-51.66 527.05-104.49 790.82-155.49 23.18-4.48 25.37-14.07 22.18-33.05-12.19-72.51-23.7-145.15-35.5-217.74z"></path><path d="m4581.5 2438.32c-51.59 74.74-103.23 149.45-154.09 223.08 284.02 48.7 508.95 165.56 630.93 236.08 18.8 8.58 30.36 7.04 45.52-5.97 95.28-81.78 191.04-163.01 287.18-243.8 190.04-159.7 380.58-318.82 570.63-478.51 199.81-167.88 399.34-336.08 598.92-504.23-326.39-232.07-695.2-407.31-1092.21-511.3-91.91 133.75-184.44 267.08-276.66 400.62-203.46 294.64-406.81 589.36-610.22 884.03z"></path><path d="m3524.19 2467.48c-21.49 79.87-44.67 165.97-66.98 250.27 46.56-10.37 323.17-115.2 718.88-88.82 19.08 1.16 28.97-5.68 37.86-22.32 85.3-159.66 166.56-311.85 252.4-471.22 124.04-230.28 247.99-460.62 371.99-690.93 66.42-123.36 132.88-246.71 201.16-373.46-137.35-17.23-277.22-26.16-419.13-26.16-252.51 0-498.61 28.17-735.43 81.45-6.84 28.63-14.95 56.97-22.6 85.41-112.71 418.6-225.51 837.17-338.15 1255.78z"></path><path d="m2545.86 1836.53c6.63 78.14 13.34 156.27 19.88 234.42 6.3 75.3 12.22 150.63 18.7 225.91 6.56 76.18 13.88 152.29 20.34 228.48 6.62 78.2 12.58 156.47 18.86 234.7 6.05 75.39 11.98 150.79 18.28 226.16 5.69 68.08 11.43 139.61 17.71 211.68 77.38-75.63 317.01-289.31 612.48-411.98 13.75-5.71 27.38-8.82 30.84-30.91 18.46-117.67 36.52-215.22 57.03-332.58 28.68-164.11 57.33-328.23 85.9-492.37 35.77-205.54 71.52-411.09 107.06-616.67 5.59-32.33 10.49-64.82 15.86-99.36-375.71 124.54-722.52 313.9-1027.32 554.95-.14.6-.31 1.21-.32 1.8-.51 21.89 2.83 43.85 4.7 65.77z"></path><path d="m2151.69 3602.03c28.95 58.26 62.61 126.45 92.44 186.35 62.88-139.38 194.26-347.57 318.13-488.72 6.41-7.31 10.14-21.49 8.12-30.98-20.81-97.89-43.14-189.66-65.05-287.32-57.91-258.1-115.86-516.2-173.82-774.29-15.21-67.73-30.56-135.42-47.53-210.59-22.74 24.23-40.47 42.85-57.9 61.74-72.83 78.96-151.57 153.39-216.96 238.1-88.09 114.1-168.83 233.86-251.92 351.85-14.06 22.66-27.86 45.51-41.4 68.52.01 6.6 2.26 13.25 6.04 20.84 143.57 288.03 286.64 576.29 429.85 864.5z"></path><path d="m1463.39 3773.25c166.75 147.24 333.58 294.4 500.43 441.53 38 33.51 78.9 69.38 120.26 105.61 15.83-124.87 58.2-279.76 105.96-401.87 9.16-23.43-.04-37.32-12.31-53.78-168.78-226.42-339.26-452.55-507.93-679.06-37.99-51.02-76.32-101.8-115.94-154.62-4.47 8.41-7.33 13.18-9.63 18.2-5.97 13.06-11.84 26.15-17.63 39.27-78.19 180.23-141.29 368.58-187.77 563.37 1.54 6.68 5.02 13.54 9.12 17.41 37.65 35.53 76.62 69.66 115.44 103.94z"></path><path d="m1937.2 4872.06c44.65 15.45 94.49 32.94 140.29 48.94-26.82-165.76-14.78-400.9-11.87-451.56 1.19-20.64-5.68-32.28-23.85-43.49-189.08-116.57-381.36-235.03-569.95-352.4-62.5-38.89-125.13-77.62-190.93-118.42-23.27 161.02-35.39 325.64-35.39 493.07 0 62.38 1.72 124.35 5.03 185.91 2.88 1.62 6.25 3.08 10.22 4.44 225.69 77.26 451.03 155.48 676.45 233.51z"></path><path d="m2252.92 5507.54c-11.18-19.62-22.95-22.74-43.15-17.88-190.58 45.82-386.45 92.18-577.15 137.54-54.15 12.88-108.33 25.91-163.62 39.18 62.3 163.36 136.73 320.69 222.21 470.86 234.84-125.41 470.34-250.82 705.49-376.44-91.02-140.7-99.71-175.9-143.78-253.26z"></path><path d="m1747.15 5373.51c104.59-.89 209.2-.18 313.8-.18h133.63c-2.68-10.32-65.65-190.27-85.44-283.48-1.26-8.85-15.9-20.52-26.07-22.69-231.85-49.45-461.9-96.87-693.98-145.24-37.34-7.78-74.93-14.84-113.97-22.4 21.62 163.84 54.78 324.05 98.74 479.73.8 0 1.58.01 2.41-.01 123.61-2.74 247.24-4.68 370.88-5.73z"></path></g></svg>
              <p>Delphi 7</p>
            </div>
          </div>
        </div>

      </div>
<!-- Section Break -->
      </section>
      <section id="bucket-list" class="site-section" aria-labelledby="bucketlist-heading" v-reveal>
        <h2 id="bucketlist-heading" class="introAreaHeader" data-snap="~/snapshots/bucket-list · ⏳ in progress">Bucket List</h2>
        <div class="introArea">
          <div class="skillbox bucket-list">
            <h3>Life Goals</h3>
            <ul class="goals-list">
              <li class="completed"><span class="sr-only">Completed: </span>Get an Internship in Technologies</li>
              <li class="completed"><span class="sr-only">Completed: </span>Work on Open Source projects</li>
              <li><span class="sr-only">Planned: </span>Fly on a Helicopter</li>
              <li><span class="sr-only">Planned: </span>Go inside a working submarine</li>
              <li><span class="sr-only">Planned: </span>Visit <a href="https://home.cern/" target="_blank" rel="noopener noreferrer">CERN</a></li>
              <li><span class="sr-only">Planned: </span>Tour a Datacenter</li>
              <li><span class="sr-only">Planned: </span>Visit North or South poles</li>
            </ul>
          </div>
          <div class="skillbox bucket-list">
            <h3>Wishlist</h3>
            <ul class="goals-list">
              <li>Hololens</li>
              <li>AR Glasses</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="devices" class="site-section" aria-labelledby="devices-heading" v-reveal>
      <h2 id="devices-heading" class="introAreaHeader" data-snap="~/snapshots/devices · ✓ restored">Personal Devices</h2>
      <div class="introArea">
        <div class="skillbox">
          <h3><typing-component text="Desktop"/></h3>
          <div class="devicon">
            <div class="tooltip">
            <i aria-hidden="true" title="Windows" class="devicon-windows8-original colored"></i>
              <p>Windows 10</p>
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Mobile"/></h3>
          <div class="devicon">
            <div class="tooltip">
            <i aria-hidden="true" title="Android" class="devicon-android-plain colored"></i>
              <p>Android 11</p>
            </div>
          </div>
        </div>
        <div class="skillbox">
          <h3><typing-component text="Software"/></h3>
          <div class="devicon">
            <div class="tooltip">
            <img loading="lazy" title="Microsoft Edge" alt="Microsoft Edge" src="/icons/microsoft-edge.svg"/>
              <p>Microsoft Edge</p>
            </div>
            <div class="tooltip">
            <svg aria-hidden="true" style="margin-left: 30%;" viewBox="0 0 100 100" width="30" height="30">
              <title>Obsidian.md</title>
            <defs>
                <linearGradient id="a" x1="82.85" y1="30.41" x2="51.26" y2="105.9" gradientTransform="matrix(1, 0, 0, -1, -22.41, 110.97)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#6c56cc"></stop>
                    <stop offset="1" stop-color="#9785e5"></stop>
                </linearGradient>
            </defs>
            <polygon points="44.61 0 12.91 17.52 0 45.45 19.57 90.47 47.35 100 52.44 89.8 63 26.39 44.61 0" fill="#34208c"></polygon>
            <polygon points="63 26.39 43.44 14.41 16.43 35.7 47.35 100 52.44 89.8 63 26.39" fill="url(#a)"></polygon>
            <polygon points="63 26.39 63 26.39 44.61 0 43.44 14.41 63 26.39" fill="#af9ff4"></polygon>
            <polygon points="43.44 14.41 44.61 0 12.91 17.52 16.43 35.7 43.44 14.41" fill="#4a37a0"></polygon>
            <polygon points="16.43 35.7 19.57 90.47 47.35 100 16.43 35.7" fill="#4a37a0"></polygon>
            </svg>
              <p>Obsidian.md</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="projects" class="site-section" aria-labelledby="projects-heading" v-reveal>
        <h2 id="projects-heading" class="introAreaHeader" data-snap="~/snapshots/projects · ✓ restored">Things I Made</h2>
        <div class="introArea">
          <div class="skillbox">
            <h3>Projects</h3>
            <div class="devicon">
              <div class="tooltip">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kaovilai/AdJS" aria-label="AdJS - Advertisement Injector">
                  <i aria-hidden="true" style="color:white;" class="devicon-javascript-plain"></i>
                  <p>AdJS</p>
                </a>
              </div>
              <div class="tooltip">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kaovilai" aria-label="View all projects on GitHub">
                  <i aria-hidden="true" style="color:white;" class="devicon-github-original"></i>
                  <p>More on GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pay" class="site-section" aria-labelledby="pay-heading" v-reveal>
        <h2 id="pay-heading" class="introAreaHeader" data-snap="~/snapshots/invoices · ✓ restored">Pay Me</h2>
        <div class="introArea">
          <div class="skillbox">
            <h3>Payment Methods</h3>
            <div class="devicon pay-links">
              <div class="tooltip">
                <a target="_blank" rel="noopener noreferrer" href="https://venmo.com/code?user_id=2065666886598656219" aria-label="Pay via Venmo">
                  <span aria-hidden="true" class="pay-icon pay-icon--venmo">V</span>
                  <p>Venmo</p>
                </a>
              </div>
              <div class="tooltip">
                <a target="_blank" rel="noopener noreferrer" href="https://cash.me/$tigpk" aria-label="Pay via Cash App">
                  <span aria-hidden="true" class="pay-icon pay-icon--cashapp">$</span>
                  <p>Cash App</p>
                </a>
              </div>
              <div class="tooltip">
                <a target="_blank" rel="noopener noreferrer" href="https://paypal.me/pkaov" aria-label="Pay via PayPal">
                  <span aria-hidden="true" class="pay-icon pay-icon--paypal">P</span>
                  <p>PayPal</p>
                </a>
              </div>
              <div class="tooltip">
                <a href="mailto:passawit.kaovilai@gmail.com?subject=Zelle%20Payment" aria-label="Pay via Zelle">
                  <span aria-hidden="true" class="pay-icon pay-icon--zelle">Z</span>
                  <p>Zelle</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypingComponent from "./TypingComponent.vue"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.hello {
  display: block;
}

/* ---- Hero ---- */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(88svh - var(--nav-height));
  padding: clamp(24px, 5vw, 64px) clamp(12px, 4vw, 48px) 0;
}
.hero-kicker {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--ink-dim);
  margin: 0 0 10px;
  overflow-wrap: anywhere;
}
.hero-ok {
  color: #3fb950;
}
.hero-title {
  font-family: var(--font-mono);
  font-size: var(--step-5);
  line-height: 1.05;
  font-weight: 700;
  margin: 0.1em auto 0.4em;
  display: inline-block;
  padding: 0.12em 0.4em;
  color: #fff;
  background: linear-gradient(120deg, var(--NCSU_Reynolds_Red), var(--NCSU_Pyroman_Flame));
  box-shadow: 10px 10px 0 var(--accent-shadow);
}
.hero-body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 4vw, 48px);
  max-width: 1100px;
}
.hero-text {
  min-width: min(50vw, 480px);
  max-width: 620px;
}
.hero-text h2 {
  font-size: var(--step-3);
  margin: 0 0 0.4em;
}
.hero-stats {
  max-width: min(100%, 460px);
  height: auto;
}
.hero-photo {
  max-width: min(60vw, 380px);
  max-height: 45vh;
  height: auto;
  object-fit: contain;
  border: 1px solid var(--line);
  box-shadow: 12px 12px 0 var(--accent-shadow);
}

/* ---- Sections ---- */
.site-section {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(28px, 6vw, 72px) clamp(8px, 3vw, 32px) 0;
}
.displayArea {
  display: block;
}
.introArea {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: clamp(14px, 2.5vw, 28px);
  margin-top: clamp(16px, 3vw, 32px);
}
.introAreaHeader {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--step-3);
  font-weight: 700;
  letter-spacing: 0.02em;
}
.introAreaHeader::before {
  content: attr(data-snap);
  display: block;
  font-size: var(--step--1);
  font-weight: 400;
  color: var(--ink-dim);
  margin-bottom: 4px;
}
.introAreaHeader::after {
  content: '';
  display: block;
  width: 72px;
  height: 3px;
  margin: 14px auto 0;
  background: linear-gradient(90deg, var(--NCSU_Wolfpack_Red), var(--NCSU_Pyroman_Flame));
}
.skillbox {
  margin: 0;
  padding: clamp(14px, 2.5vw, 26px);
  border: 1px solid var(--line);
  background: var(--panel);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
@media (hover: hover) {
  .skillbox:hover {
    border-color: var(--accent-shadow);
    box-shadow: 6px 6px 0 var(--accent-shadow);
  }
}
.skillbox h3 {
  font-family: var(--font-mono);
  font-size: var(--step-2);
  font-weight: 700;
  margin: 0 0 10px;
}
.skillbox h3::before {
  content: "## ";
  color: var(--accent-text);
}

/* Per-card scroll scrub — Chrome/Edge/Safari; others get the static state */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .skillbox {
      animation: card-in linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 60%;
    }
  }
}
@keyframes card-in {
  from {
    opacity: 0.15;
    transform: translateY(32px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.devicon .backgroundbox {
  --insetwidth: 5px;
  background: white;
  border-radius: var(--insetwidth);
  margin: 0 var(--sidemargin);
  filter: var(--filter-dropshadow)
}
.devicon .backgroundbox > * {
  font-size: calc(1em - var(--insetwidth));
  margin: 3px 0px;
  filter: var(--filter-dropshadow)
}
.devicon {
  --fontsize: 4em;
  --blockwidth: calc(1em + var(--sidemargin) * 2);
  display: flex;
  justify-content: center;
  font-size: var(--fontsize);
  filter: var(--filter-dropshadow);
  flex-wrap: wrap;
  max-width: calc(var(--blockwidth) * 4 );
  color: white;
}
.devicon > *, .devicon svg, .devicon img {
  height: 1em;
  width: 1em;
  margin: 0px var(--sidemargin) calc(2*var(--sidemargin));
  justify-content: center;
  display: inline-grid;
  object-fit: scale-down;
}
.tooltip {
  --tooltipFontSize: 15px;
}
.tooltip p {
  font-size: var(--tooltipFontSize);
  font-family: var(--font-mono);
  color: var(--ink);
  margin-top: 5px;
  margin-bottom: 0px;
}
.tooltip * {
  font-size: calc(1em - var(--tooltipFontSize));
  display: block;
}
.tooltip > a {
  width: 1em;
  font-size: 1em;
}
.tooltip svg, .tooltip img {
  margin-bottom: 0px;
}
.about-text {
  max-width: 640px;
  text-align: left;
  line-height: 1.65;
}
.about-text p {
  margin-bottom: 10px;
}
.about-cta {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--ink-dim);
  border-top: 1px solid var(--line);
  padding-top: 10px;
  margin-top: 14px;
}

/* styles for image svgs */

/* R Studio */
.st0{fill:#75AADB;}
.st1{fill:#4D4D4D;}
.st2{fill:#FFFFFF;}
.st3{fill:url(#SVGID_1_);}
.st4{fill:url(#SVGID_2_);}
.st5{fill:url(#SVGID_3_);}
.st6{fill:url(#SVGID_4_);}
.st7{fill:url(#SVGID_5_);}
.st8{fill:url(#SVGID_6_);}
.st9{fill:url(#SVGID_7_);}
.st10{fill:url(#SVGID_8_);}
.st11{fill:url(#SVGID_9_);}
.st12{fill:url(#SVGID_10_);}
.st13{opacity:0.18;fill:url(#SVGID_11_);}
.st14{opacity:0.3;}
.bucket-list {
  max-width: 400px;
  text-align: left;
}
.goals-list {
  list-style: none;
  padding: 0;
}
.goals-list li {
  display: block;
  margin: 0;
  padding: 5px 0;
  color: var(--ink);
}
.goals-list li::before {
  content: '🟩 ';
}
.goals-list li.completed {
  text-decoration: line-through;
  opacity: 0.7;
}
.goals-list li.completed::before {
  content: '✅ ';
}
/* OBS */
.cls-1{fill:url(#radial-gradient);}.cls-2{fill:none;}.cls-3{fill:url(#radial-gradient-2);}.cls-4{fill:url(#radial-gradient-3);}.cls-5{clip-path:url(#clip-path);}.cls-6{fill:url(#radial-gradient-5);}.cls-7{clip-path:url(#clip-path-2);}.cls-8{fill:url(#radial-gradient-6);}.cls-9{fill:url(#radial-gradient-7);}
.pay-icon {
  font-size: 1em;
  font-weight: bold;
  color: #3D95CE;
  display: block;
}
.pay-icon--venmo { color: #3D95CE; }
.pay-icon--cashapp { color: #00D632; }
.pay-icon--paypal { color: #003087; }
.pay-icon--zelle { color: #6D1ED4; }
.pay-links {
  font-size: 4em;
}
</style>
