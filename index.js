(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(
        document.createTextNode(
          `*:where(.qalam-tests-container,.qalam-tests-container *),:before:where(.qalam-tests-container,.qalam-tests-container *),:after:where(.qalam-tests-container,.qalam-tests-container *){box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before:where(.qalam-tests-container,.qalam-tests-container *),:after:where(.qalam-tests-container,.qalam-tests-container *){--tw-content: ""}.qalam-tests-container{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}.qalam-tests-container{margin:0;line-height:inherit}hr:where(.qalam-tests-container,.qalam-tests-container *){height:0;color:inherit;border-top-width:1px}abbr:where([title]):where(.qalam-tests-container,.qalam-tests-container *){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1:where(.qalam-tests-container,.qalam-tests-container *),h2:where(.qalam-tests-container,.qalam-tests-container *),h3:where(.qalam-tests-container,.qalam-tests-container *),h4:where(.qalam-tests-container,.qalam-tests-container *),h5:where(.qalam-tests-container,.qalam-tests-container *),h6:where(.qalam-tests-container,.qalam-tests-container *){font-size:inherit;font-weight:inherit}a:where(.qalam-tests-container,.qalam-tests-container *){color:inherit;text-decoration:inherit}b:where(.qalam-tests-container,.qalam-tests-container *),strong:where(.qalam-tests-container,.qalam-tests-container *){font-weight:bolder}code:where(.qalam-tests-container,.qalam-tests-container *),kbd:where(.qalam-tests-container,.qalam-tests-container *),samp:where(.qalam-tests-container,.qalam-tests-container *),pre:where(.qalam-tests-container,.qalam-tests-container *){font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small:where(.qalam-tests-container,.qalam-tests-container *){font-size:80%}sub:where(.qalam-tests-container,.qalam-tests-container *),sup:where(.qalam-tests-container,.qalam-tests-container *){font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub:where(.qalam-tests-container,.qalam-tests-container *){bottom:-.25em}sup:where(.qalam-tests-container,.qalam-tests-container *){top:-.5em}table:where(.qalam-tests-container,.qalam-tests-container *){text-indent:0;border-color:inherit;border-collapse:collapse}button:where(.qalam-tests-container,.qalam-tests-container *),input:where(.qalam-tests-container,.qalam-tests-container *),optgroup:where(.qalam-tests-container,.qalam-tests-container *),select:where(.qalam-tests-container,.qalam-tests-container *),textarea:where(.qalam-tests-container,.qalam-tests-container *){font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button:where(.qalam-tests-container,.qalam-tests-container *),select:where(.qalam-tests-container,.qalam-tests-container *){text-transform:none}button:where(.qalam-tests-container,.qalam-tests-container *),input:where([type=button]):where(.qalam-tests-container,.qalam-tests-container *),input:where([type=reset]):where(.qalam-tests-container,.qalam-tests-container *),input:where([type=submit]):where(.qalam-tests-container,.qalam-tests-container *){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring:where(.qalam-tests-container,.qalam-tests-container *){outline:auto}:-moz-ui-invalid:where(.qalam-tests-container,.qalam-tests-container *){box-shadow:none}progress:where(.qalam-tests-container,.qalam-tests-container *){vertical-align:baseline}::-webkit-inner-spin-button:where(.qalam-tests-container,.qalam-tests-container *),::-webkit-outer-spin-button:where(.qalam-tests-container,.qalam-tests-container *){height:auto}[type=search]:where(.qalam-tests-container,.qalam-tests-container *){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration:where(.qalam-tests-container,.qalam-tests-container *){-webkit-appearance:none}::-webkit-file-upload-button:where(.qalam-tests-container,.qalam-tests-container *){-webkit-appearance:button;font:inherit}summary:where(.qalam-tests-container,.qalam-tests-container *){display:list-item}blockquote:where(.qalam-tests-container,.qalam-tests-container *),dl:where(.qalam-tests-container,.qalam-tests-container *),dd:where(.qalam-tests-container,.qalam-tests-container *),h1:where(.qalam-tests-container,.qalam-tests-container *),h2:where(.qalam-tests-container,.qalam-tests-container *),h3:where(.qalam-tests-container,.qalam-tests-container *),h4:where(.qalam-tests-container,.qalam-tests-container *),h5:where(.qalam-tests-container,.qalam-tests-container *),h6:where(.qalam-tests-container,.qalam-tests-container *),hr:where(.qalam-tests-container,.qalam-tests-container *),figure:where(.qalam-tests-container,.qalam-tests-container *),p:where(.qalam-tests-container,.qalam-tests-container *),pre:where(.qalam-tests-container,.qalam-tests-container *){margin:0}fieldset:where(.qalam-tests-container,.qalam-tests-container *){margin:0;padding:0}legend:where(.qalam-tests-container,.qalam-tests-container *){padding:0}ol:where(.qalam-tests-container,.qalam-tests-container *),ul:where(.qalam-tests-container,.qalam-tests-container *),menu:where(.qalam-tests-container,.qalam-tests-container *){list-style:none;margin:0;padding:0}dialog:where(.qalam-tests-container,.qalam-tests-container *){padding:0}textarea:where(.qalam-tests-container,.qalam-tests-container *){resize:vertical}input::-moz-placeholder:where(.qalam-tests-container,.qalam-tests-container *),textarea::-moz-placeholder:where(.qalam-tests-container,.qalam-tests-container *){opacity:1;color:#9ca3af}input::placeholder:where(.qalam-tests-container,.qalam-tests-container *),textarea::placeholder:where(.qalam-tests-container,.qalam-tests-container *){opacity:1;color:#9ca3af}button:where(.qalam-tests-container,.qalam-tests-container *),[role=button]:where(.qalam-tests-container,.qalam-tests-container *){cursor:pointer}:disabled:where(.qalam-tests-container,.qalam-tests-container *){cursor:default}img:where(.qalam-tests-container,.qalam-tests-container *),svg:where(.qalam-tests-container,.qalam-tests-container *),video:where(.qalam-tests-container,.qalam-tests-container *),canvas:where(.qalam-tests-container,.qalam-tests-container *),audio:where(.qalam-tests-container,.qalam-tests-container *),iframe:where(.qalam-tests-container,.qalam-tests-container *),embed:where(.qalam-tests-container,.qalam-tests-container *),object:where(.qalam-tests-container,.qalam-tests-container *){display:block;vertical-align:middle}img:where(.qalam-tests-container,.qalam-tests-container *),video:where(.qalam-tests-container,.qalam-tests-container *){max-width:100%;height:auto}[hidden]:where(.qalam-tests-container,.qalam-tests-container *){display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.\\!visible{visibility:visible!important}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.bottom-8{bottom:2rem}.left-0{left:0}.left-\\[-160px\\]{left:-160px}.top-0{top:0}.z-50{z-index:50}.col-span-2{grid-column:span 2 / span 2}.row-span-1{grid-row:span 1 / span 1}.row-span-2{grid-row:span 2 / span 2}.m-auto{margin:auto}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.mb-4{margin-bottom:1rem}.ml-4{margin-left:1rem}.mt-\\[-0\\.1em\\]{margin-top:-.1em}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.aspect-\\[3\\/2\\]{aspect-ratio:3/2}.aspect-square{aspect-ratio:1 / 1}.h-0{height:0px}.h-10{height:2.5rem}.h-8{height:2rem}.h-\\[100vh\\]{height:100vh}.h-\\[2em\\]{height:2em}.h-\\[320px\\]{height:320px}.h-\\[60px\\]{height:60px}.h-full{height:100%}.max-h-\\[550px\\]{max-height:550px}.max-h-\\[95vh\\]{max-height:95vh}.max-h-full{max-height:100%}.\\!min-h-\\[340px\\]{min-height:340px!important}.min-h-\\[480px\\]{min-height:480px}.w-0{width:0px}.w-10{width:2.5rem}.w-8{width:2rem}.w-80{width:20rem}.w-\\[100vw\\]{width:100vw}.w-\\[320px\\]{width:320px}.w-\\[3em\\]{width:3em}.w-\\[773px\\]{width:773px}.w-auto{width:auto}.w-full{width:100%}.max-w-\\[1600px\\]{max-width:1600px}.max-w-\\[650px\\]{max-width:650px}.max-w-full{max-width:100%}.flex-shrink-0,.shrink-0{flex-shrink:0}.flex-grow-0{flex-grow:0}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-7{gap:1.75rem}.gap-8{gap:2rem}.gap-\\[14px\\]{gap:14px}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-\\[20px\\]{border-radius:20px}.rounded-full{border-radius:9999px}.rounded-xl{border-radius:.75rem}.rounded-r-\\[20px\\]{border-top-right-radius:20px;border-bottom-right-radius:20px}.border{border-width:1px}.border-2{border-width:2px}.border-green{--tw-border-opacity: 1;border-color:rgb(66 140 82 / var(--tw-border-opacity))}.border-grey-border{--tw-border-opacity: 1;border-color:rgb(159 159 159 / var(--tw-border-opacity))}.border-red{--tw-border-opacity: 1;border-color:rgb(210 38 48 / var(--tw-border-opacity))}.bg-beige-pink{--tw-bg-opacity: 1;background-color:rgb(250 243 240 / var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-green{--tw-bg-opacity: 1;background-color:rgb(66 140 82 / var(--tw-bg-opacity))}.bg-grey-question-bg{--tw-bg-opacity: 1;background-color:rgb(215 209 211 / var(--tw-bg-opacity))}.bg-red{--tw-bg-opacity: 1;background-color:rgb(210 38 48 / var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity: .5}.object-cover{-o-object-fit:cover;object-fit:cover}.\\!p-0{padding:0!important}.p-0{padding:0}.p-4{padding:1rem}.px-14{padding-left:3.5rem;padding-right:3.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-12{padding-top:3rem;padding-bottom:3rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-center{text-align:center}.font-canela{font-family:CanelaText,sans-serif}.text-\\[1em\\]{font-size:1em}.text-\\[20px\\]{font-size:20px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-\\[300\\]{font-weight:300}.font-thin{font-weight:100}.uppercase{text-transform:uppercase}.italic{font-style:italic}.ordinal{--tw-ordinal: ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.lining-nums{--tw-numeric-figure: lining-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-\\[1\\.2em\\]{line-height:1.2em}.text-\\[\\#fff\\]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-grey-lavender{--tw-text-opacity: 1;color:rgb(105 98 109 / var(--tw-text-opacity))}.text-red{--tw-text-opacity: 1;color:rgb(210 38 48 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.\\!opacity-100{opacity:1!important}.opacity-0{opacity:0}.shadow-none{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}@font-face{font-family:CanelaText;src:url(/static/fonts/CanelaText-Thin.woff2) format("woff2"),url(/static/fonts/CanelaText-Thin.woff) format("woff"),url(/static/fonts/CanelaText-Thin.ttf) format("truetype"),url(/static/fonts/CanelaText-Thin.eot),url(/static/fonts/CanelaText-Thin.eot?#iefix) format("embedded-opentype");font-weight:100;font-display:swap;font-style:normal}@font-face{font-family:CanelaText;src:url(/static/fonts/CanelaText-Light.woff2) format("woff2"),url(/static/fonts/CanelaText-Light.woff) format("woff"),url(/static/fonts/CanelaText-Light.ttf) format("truetype"),url(/static/fonts/CanelaText-Light.eot),url(/static/fonts/CanelaText-Light.eot?#iefix) format("embedded-opentype");font-weight:400;font-display:swap;font-style:normal}@font-face{font-family:CanelaText;src:url(/static/fonts/CanelaText-LightItalic.woff2) format("woff2"),url(/static/fonts/CanelaText-LightItalic.woff) format("woff"),url(/static/fonts/CanelaText-LightItalic.ttf) format("truetype"),url(/static/fonts/CanelaText-LightItalic.eot),url(/static/fonts/CanelaText-LightItalic.eot?#iefix) format("embedded-opentype");font-weight:300;font-display:swap;font-style:italic}@font-face{font-family:CanelaText;src:url(/static/fonts/CanelaText-Regular.woff2) format("woff2"),url(/static/fonts/CanelaText-Regular.woff) format("woff"),url(/static/fonts/CanelaText-Regular.ttf) format("truetype"),url(/static/fonts/CanelaText-Regular.eot),url(/static/fonts/CanelaText-Regular.eot?#iefix) format("embedded-opentype");font-weight:500;font-display:swap;font-style:normal}@font-face{font-family:CanelaText;src:url(/static/fonts/CanelaText-RegularItalic.woff2) format("woff2"),url(/static/fonts/CanelaText-RegularItalic.woff) format("woff"),url(/static/fonts/CanelaText-RegularItalic.ttf) format("truetype"),url(/static/fonts/CanelaText-RegularItalic.eot),url(/static/fonts/CanelaText-RegularItalic.eot?#iefix) format("embedded-opentype");font-weight:500;font-display:swap;font-style:italic}@font-face{font-family:CoFoSans;src:url(/static/fonts/CoFoSans-Regular.woff2) format("woff2"),url(/static/fonts/CoFoSans-Regular.woff) format("woff"),url(/static/fonts/CoFoSans-Regular.ttf) format("truetype"),url(/static/fonts/CoFoSans-Regular.eot),url(/static/fonts/CoFoSans-Regular.eot?#iefix) format("embedded-opentype");font-weight:400;font-display:swap;font-style:normal}@font-face{font-family:CoFoSans;src:url(/static/fonts/CoFoSans-Medium.woff2) format("woff2"),url(/static/fonts/CoFoSans-Medium.woff) format("woff"),url(/static/fonts/CoFoSans-Medium.ttf) format("truetype"),url(/static/fonts/CoFoSans-Medium.eot),url(/static/fonts/CoFoSans-Medium.eot?#iefix) format("embedded-opentype");font-weight:500;font-display:swap;font-style:normal}@font-face{font-family:HeatherType_Qazaq;src:url(/static/fonts/HeatherType_Qazaq.woff2) format("woff2"),url(/static/fonts/HeatherType_Qazaq.woff) format("woff"),url(/static/fonts/HeatherType_Qazaq.ttf) format("truetype"),url(/static/fonts/HeatherType_Qazaq.eot),url(/static/fonts/HeatherType_Qazaq.eot?#iefix) format("embedded-opentype");font-weight:400;font-display:swap;font-style:normal}.page-wrap{max-width:1600px;margin:auto;padding:0 1rem}@media (max-width: 767px){.page-wrap{padding:0 .5rem}}.heading{text-transform:uppercase;font-family:Heather,CanelaText,system-ui,sans-serif;font-size:52px;line-height:1.1}.qalam-tests-container .with-decoration{padding:.5rem 2rem;background-size:contain;background-position:center;background-repeat:no-repeat;display:inline-flex;align-items:center;justify-content:center;justify-self:center;font-size:14px;width:12rem;height:2.5rem;background-image:url("data:image/svg+xml,%3Csvg width='170' height='30' viewBox='0 0 170 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.1052 19.9826C17.7798 20.3729 18.3542 20.8758 18.8691 21.4454C19.301 21.9231 19.627 22.4838 19.9056 23.0643C21.4709 26.3248 24.7683 28.3977 28.3851 28.3948L141.764 28.3036C145.249 28.3008 148.065 25.9958 149.99 23.0918C150.564 22.2315 151.264 21.4215 152.024 20.7171C152.558 20.2191 153.257 19.8417 153.952 19.5902C155.145 19.1575 156.439 19.5851 157.119 20.4907C157.839 21.4517 157.884 23.0515 157.194 24.0477C156.817 24.5961 156.303 24.9734 155.613 24.9181C154.994 24.8628 154.38 24.742 153.766 24.6213L153.766 24.6212C153.214 24.5093 152.682 24.8608 152.791 25.4134C153.078 26.8693 154.044 28.2392 155.261 28.8675C157.139 29.8385 159.636 29.4813 160.426 27.2676C160.47 27.1578 160.658 27.2456 160.749 27.3217C160.839 27.3978 160.936 27.4795 161.025 27.5694C162.042 28.5706 163.225 28.8423 164.61 28.475C166.885 27.8764 168.894 25.5721 169.081 23.2478C169.093 23.1306 169.06 23.0094 169.025 22.8955C168.989 22.7795 168.887 22.6049 168.778 22.6591C168.446 22.8151 168.104 22.961 167.777 23.132C165.501 24.3093 163.452 23.9219 161.816 21.9548C161.257 21.2806 160.819 20.5109 160.301 19.7965C159.757 19.0519 159.243 18.2771 158.629 17.5979C157.169 15.993 155.337 15.5452 153.247 16.0282C151.334 16.4709 149.819 17.5476 148.48 18.9261C148.018 19.4028 147.232 19.2237 146.947 18.6241C146.659 18.0161 146.301 17.4858 145.766 17.0797C145.665 17.0032 145.564 16.9275 145.462 16.8524C144.353 16.0344 144.478 14.4046 145.529 13.5125C146.16 12.9768 146.689 12.3456 147.044 11.5444C147.259 11.0583 147.937 10.8788 148.299 11.2688C149.366 12.4159 150.579 13.3768 152.034 13.9856C154.858 15.1729 157.456 14.4786 159.294 12.0436C159.752 11.4399 160.144 10.7959 160.567 10.172C160.92 9.65385 161.252 9.11552 161.64 8.62247C163.361 6.44906 165.421 6.02142 167.867 7.30434C168.004 7.37717 168.143 7.44909 168.287 7.52359C168.609 7.6899 169.1 7.52069 169.081 7.15842C168.924 4.60767 166.558 2.09719 164.031 1.77521C162.974 1.63937 162.037 1.90097 161.232 2.61035C160.862 2.93172 160.277 2.73854 160.018 2.32238C159.564 1.59097 158.858 1.21183 157.985 1.06581C156.726 0.854505 155.568 1.15136 154.566 1.96639C153.504 2.8267 152.975 3.99389 152.658 5.28184C152.557 5.67593 153.036 5.9623 153.425 5.84249C153.556 5.80213 153.683 5.76821 153.811 5.74469C154.466 5.62898 155.13 5.48308 155.785 5.49818C156.162 5.50321 156.6 5.72962 156.892 5.99124C157.708 6.72074 157.909 8.32059 157.406 9.39221C156.907 10.4538 155.704 11.0676 154.486 10.9116C153.444 10.7808 152.598 10.2525 151.843 9.56328C150.871 8.67781 150.086 7.6414 149.502 6.46916C148.174 3.80539 145.536 2.04245 142.56 2.04341L28.9766 2.08001C25.0838 2.08127 21.9694 4.7051 19.6929 7.86278C19.2046 8.53191 18.6206 9.15073 18.0114 9.71924C17.3267 10.3532 16.5212 10.7959 15.5597 10.9066C14.3111 11.0525 13.1583 10.4538 12.6599 9.36706C12.1615 8.28538 12.383 6.6855 13.1985 5.97109C13.4905 5.71451 13.9386 5.49314 14.3111 5.49314C15.0109 5.49314 15.7107 5.6642 16.4054 5.78495C16.9421 5.87287 17.4404 5.50073 17.3203 4.97032C17.0875 3.94165 16.6145 3.09346 15.9121 2.33868C14.9606 1.31738 13.7624 0.904834 12.393 1.02055C11.2905 1.11111 10.3843 1.584 9.86576 2.63046C9.71088 2.94817 9.25779 2.96851 8.9903 2.73749C7.38207 1.34852 6.0536 1.52979 4.41854 2.27831C2.37961 3.20906 1.41302 4.99508 1.00523 7.11315C0.93584 7.49951 1.52976 7.66184 1.87635 7.47754C2.061 7.37936 2.23484 7.28731 2.40982 7.19868C4.61489 6.08681 6.55313 6.439 8.16917 8.31055C8.71289 8.94446 9.12572 9.68403 9.62412 10.3582C10.2685 11.2336 10.8727 12.1593 11.6127 12.9441C12.9569 14.3629 14.6585 14.7805 16.5665 14.4132C18.7263 13.9957 20.3776 12.753 21.8376 11.1933C22.1804 10.8216 22.818 10.9986 23.0165 11.4637C23.6695 12.9936 24.9057 13.9241 26.3383 14.6849C26.7016 14.8703 26.6413 15.4196 26.3074 15.6537C25.5914 16.1559 24.9098 16.6291 24.249 17.135C23.5617 17.6634 23.2001 18.4071 22.8817 19.2172C22.7379 19.5831 22.2705 19.652 22.0087 19.3587C20.8559 18.0557 19.5368 16.9791 17.8956 16.3301C15.308 15.3088 13.0223 15.8118 11.1747 17.8846C10.6511 18.4733 10.2232 19.1575 9.7651 19.8065C9.35731 20.3901 8.99483 21.0089 8.56691 21.5775C6.7797 23.9471 4.65517 24.3948 2.07252 22.9811C2.018 22.9514 1.96289 22.9232 1.90654 22.8958C1.5233 22.7094 0.98532 22.9862 1.04048 23.4088C1.35764 25.884 3.33114 27.9921 5.76779 28.5354C6.9257 28.797 7.92251 28.5203 8.81863 27.7908C9.207 27.4755 9.77899 27.6083 10.0614 28.0212C10.4681 28.6158 11.0032 29.0142 11.7386 29.2196C14.186 29.9005 16.8167 28.0395 17.2997 25.5474C17.4225 24.9137 16.7979 24.5361 16.1638 24.6565C15.5496 24.7722 14.9203 24.9231 14.3111 24.8778C13.8983 24.8426 13.3999 24.5961 13.1281 24.2842C11.8644 22.8201 12.2219 20.1034 14.4622 19.5147C15.4338 19.2581 16.2897 19.5147 17.1052 19.9826Z' stroke='%23F3FFD5' stroke-miterlimit='10' /%3E%3C/svg%3E")}.qalam-tests-container .with-decoration.decoration-sm{width:10rem;background-image:url("data:image/svg+xml,%3Csvg width='141' height='30' viewBox='0 0 141 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.1052 19.9826C17.7799 20.3729 18.3544 20.8759 18.8693 21.4456C19.301 21.9231 19.6269 22.4837 19.9056 23.0641C21.4708 26.3246 24.7686 28.3972 28.3853 28.3934L112.764 28.305C116.249 28.3013 119.065 25.996 120.99 23.0918C121.564 22.2315 122.264 21.4215 123.024 20.7171C123.558 20.2191 124.257 19.8417 124.952 19.5902C126.145 19.1575 127.439 19.5851 128.119 20.4907C128.839 21.4517 128.884 23.0515 128.194 24.0477C127.817 24.5961 127.303 24.9734 126.613 24.9181C125.994 24.8628 125.38 24.7421 124.766 24.6213L124.766 24.6212C124.214 24.5093 123.682 24.8608 123.791 25.4134C124.078 26.8693 125.044 28.2392 126.261 28.8675C128.139 29.8385 130.636 29.4813 131.426 27.2676C131.47 27.1578 131.658 27.2456 131.749 27.3217C131.839 27.3978 131.936 27.4795 132.025 27.5694C133.042 28.5706 134.225 28.8423 135.61 28.475C137.885 27.8764 139.894 25.5721 140.081 23.2478C140.093 23.1306 140.06 23.0094 140.025 22.8955C139.989 22.7795 139.887 22.6049 139.778 22.6591C139.446 22.8151 139.104 22.961 138.777 23.132C136.501 24.3093 134.452 23.9219 132.816 21.9548C132.257 21.2806 131.819 20.5109 131.301 19.7965C130.757 19.0519 130.243 18.2771 129.629 17.5979C128.169 15.993 126.337 15.5452 124.247 16.0282C122.334 16.4709 120.819 17.5476 119.48 18.9261C119.018 19.4028 118.232 19.2237 117.947 18.6241C117.659 18.0161 117.301 17.4858 116.766 17.0797C116.665 17.0032 116.564 16.9275 116.462 16.8524C115.353 16.0344 115.478 14.4046 116.529 13.5125C117.16 12.9768 117.689 12.3456 118.044 11.5444C118.259 11.0583 118.937 10.8788 119.299 11.2688C120.366 12.4159 121.579 13.3768 123.034 13.9856C125.858 15.1729 128.456 14.4786 130.294 12.0436C130.752 11.4399 131.144 10.7959 131.567 10.172C131.92 9.65385 132.252 9.11552 132.64 8.62247C134.361 6.44906 136.421 6.02142 138.867 7.30434C139.004 7.37717 139.143 7.44909 139.287 7.52359C139.609 7.6899 140.1 7.52069 140.081 7.15842C139.924 4.60767 137.558 2.09719 135.031 1.77521C133.974 1.63937 133.037 1.90097 132.232 2.61035C131.862 2.93172 131.277 2.73854 131.018 2.32238C130.564 1.59097 129.858 1.21183 128.985 1.06581C127.726 0.854505 126.568 1.15136 125.566 1.96639C124.504 2.8267 123.975 3.99389 123.658 5.28184C123.557 5.67593 124.036 5.9623 124.425 5.84249C124.556 5.80213 124.683 5.76821 124.811 5.74469C125.466 5.62898 126.13 5.48308 126.785 5.49818C127.162 5.50321 127.6 5.72962 127.892 5.99124C128.708 6.72074 128.909 8.32059 128.406 9.39221C127.907 10.4538 126.704 11.0676 125.486 10.9116C124.444 10.7808 123.598 10.2525 122.843 9.56328C121.871 8.67781 121.086 7.6414 120.502 6.46916C119.174 3.80543 116.536 2.04264 113.56 2.04389L28.9766 2.07939C25.0838 2.08102 21.9695 4.70504 19.6929 7.86278C19.2046 8.53191 18.6206 9.15073 18.0114 9.71924C17.3267 10.3532 16.5212 10.7959 15.5597 10.9066C14.3111 11.0525 13.1583 10.4538 12.6599 9.36706C12.1615 8.28538 12.383 6.6855 13.1985 5.97109C13.4905 5.71451 13.9386 5.49314 14.3111 5.49314C15.0109 5.49314 15.7107 5.6642 16.4054 5.78495C16.9421 5.87287 17.4404 5.50073 17.3203 4.97032C17.0875 3.94165 16.6145 3.09346 15.9121 2.33868C14.9606 1.31738 13.7624 0.904834 12.393 1.02055C11.2905 1.11111 10.3843 1.584 9.86576 2.63046C9.71088 2.94817 9.25779 2.96851 8.9903 2.73749C7.38207 1.34852 6.0536 1.52979 4.41854 2.27831C2.37961 3.20906 1.41302 4.99508 1.00523 7.11315C0.93584 7.49951 1.52976 7.66184 1.87635 7.47754C2.061 7.37936 2.23484 7.28731 2.40982 7.19868C4.61489 6.08681 6.55313 6.439 8.16917 8.31055C8.71289 8.94446 9.12572 9.68403 9.62412 10.3582C10.2685 11.2336 10.8727 12.1593 11.6127 12.9441C12.9569 14.3629 14.6585 14.7805 16.5665 14.4132C18.7263 13.9957 20.3776 12.753 21.8376 11.1933C22.1804 10.8216 22.818 10.9986 23.0165 11.4637C23.6695 12.9936 24.9057 13.9241 26.3383 14.6849C26.7016 14.8703 26.6413 15.4196 26.3074 15.6537C25.5914 16.1559 24.9098 16.6291 24.249 17.135C23.5617 17.6634 23.2001 18.4071 22.8817 19.2172C22.7379 19.5831 22.2705 19.652 22.0087 19.3587C20.8559 18.0557 19.5368 16.9791 17.8956 16.3301C15.308 15.3088 13.0223 15.8118 11.1747 17.8846C10.6511 18.4733 10.2232 19.1575 9.7651 19.8065C9.35731 20.3901 8.99483 21.0089 8.56691 21.5775C6.7797 23.9471 4.65517 24.3948 2.07252 22.9811C2.018 22.9514 1.96289 22.9232 1.90654 22.8958C1.5233 22.7094 0.98532 22.9862 1.04048 23.4088C1.35764 25.884 3.33114 27.9921 5.76779 28.5354C6.9257 28.797 7.92251 28.5203 8.81863 27.7908C9.207 27.4755 9.77899 27.6083 10.0614 28.0212C10.4681 28.6158 11.0032 29.0142 11.7386 29.2196C14.186 29.9005 16.8167 28.0395 17.2997 25.5474C17.4225 24.9137 16.7979 24.5361 16.1638 24.6565C15.5496 24.7722 14.9203 24.9231 14.3111 24.8778C13.8983 24.8426 13.3999 24.5961 13.1281 24.2842C11.8644 22.8201 12.2219 20.1034 14.4622 19.5147C15.4338 19.2581 16.2897 19.5147 17.1052 19.9826Z' stroke='%23F3FFD5' stroke-miterlimit='10' /%3E%3C/svg%3E")}.qalam-tests-container .with-decoration--grey{background-image:url("data:image/svg+xml,%3Csvg width='290' height='42' viewBox='0 0 290 42' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.9869 28.0277C25.0491 28.6354 25.9373 29.4366 26.7294 30.3443C27.1821 30.8631 27.5373 31.4575 27.838 32.077L28.9033 34.2716C30.5768 37.7193 34.0734 39.9072 37.9057 39.9048L251.499 39.771C255.574 39.7684 258.983 37.1603 261.004 33.6213C261.237 33.2124 261.484 32.8103 261.748 32.4165C262.568 31.2021 263.566 30.0587 264.651 29.0645C265.413 28.3614 266.412 27.8288 267.403 27.4737C269.106 26.863 270.953 27.4666 271.923 28.7449C272.951 30.1013 273.015 32.3597 272.031 33.7658C271.492 34.5399 270.759 35.0725 269.775 34.9944C268.891 34.9163 268.014 34.7458 267.138 34.5754C266.349 34.4173 265.59 34.9206 265.749 35.709C266.163 37.7583 267.539 39.6846 269.272 40.5692C271.952 41.9399 275.516 41.4356 276.644 38.3109C276.707 38.1545 276.975 38.2799 277.105 38.3878C277.234 38.4951 277.371 38.6103 277.499 38.737C278.951 40.1502 280.639 40.5337 282.615 40.0153C285.863 39.1702 288.73 35.9176 288.996 32.6367C289.014 32.4721 288.967 32.3019 288.917 32.1419C288.866 31.9766 288.72 31.7291 288.565 31.8058C288.091 32.0259 287.602 32.2318 287.135 32.4733C283.887 34.1351 280.963 33.5883 278.627 30.8115C277.83 29.8599 277.205 28.7733 276.464 27.7649C275.688 26.7139 274.956 25.6202 274.079 24.6614C271.995 22.396 269.38 21.764 266.397 22.4457C263.667 23.0707 261.504 24.5904 259.593 26.5363C258.93 27.2123 257.812 26.9558 257.402 26.1029C256.991 25.2476 256.481 24.5017 255.72 23.93C255.586 23.8298 255.452 23.7307 255.318 23.6322C253.728 22.4713 253.906 20.1412 255.409 18.8705C256.296 18.121 257.039 17.239 257.54 16.1232C257.85 15.4316 258.816 15.1742 259.334 15.7276C260.857 17.3467 262.589 18.7031 264.666 19.5624C268.697 21.2384 272.405 20.2584 275.027 16.8212C275.681 15.969 276.242 15.06 276.845 14.1794C277.348 13.4479 277.823 12.688 278.376 11.9921C280.833 8.92413 283.772 8.32049 287.264 10.1314C287.463 10.2354 287.662 10.3381 287.871 10.4446C288.329 10.6781 289.024 10.4386 288.996 9.92545C288.773 6.32489 285.396 2.78118 281.789 2.32668C280.28 2.13493 278.943 2.5042 277.794 3.50554C277.264 3.96115 276.431 3.68426 276.058 3.09304C275.409 2.06454 274.403 1.53104 273.159 1.32532C271.363 1.02705 269.71 1.44608 268.28 2.59655C266.764 3.81094 266.009 5.4585 265.557 7.27653C265.413 7.83318 266.09 8.2397 266.64 8.07129C266.831 8.01284 267.015 7.96372 267.202 7.92988C268.136 7.76654 269.085 7.5606 270.019 7.5819C270.558 7.589 271.183 7.90861 271.6 8.27789C272.764 9.30764 273.051 11.5659 272.333 13.0786C271.621 14.5771 269.904 15.4435 268.165 15.2233C266.678 15.0387 265.471 14.293 264.393 13.3201C263.006 12.0702 261.885 10.6072 261.051 8.95252C260.971 8.79326 260.892 8.63374 260.813 8.47391C259.09 4.98993 255.628 2.70367 251.741 2.70465L38.5169 2.75817C34.4139 2.75919 30.9631 5.38849 28.9392 8.95758C28.5572 9.63122 28.1417 10.2867 27.6803 10.9197C26.9833 11.8642 26.1498 12.7377 25.2803 13.5402C24.3031 14.435 23.1534 15.06 21.7809 15.2162C19.9989 15.4222 18.3535 14.5771 17.6421 13.0431C16.9307 11.5162 17.2468 9.2579 18.4109 8.24946C18.8277 7.88727 19.4672 7.57479 19.9989 7.57479C20.9977 7.57479 21.9965 7.81626 22.9881 7.9867C23.7545 8.11087 24.465 7.5777 24.2904 6.82126C23.9567 5.37621 23.2829 4.18368 22.2839 3.12206C20.9259 1.68042 19.2157 1.09809 17.2612 1.26143C15.6876 1.38926 14.3942 2.05678 13.6541 3.53393C13.4318 3.98473 12.7885 4.01318 12.4064 3.68666C10.1102 1.72424 8.21364 1.97996 5.87926 3.03685C2.96911 4.35066 1.5895 6.87175 1.00747 9.86155C0.90808 10.4088 1.75133 10.6386 2.24362 10.3797C2.50985 10.2397 2.76021 10.1085 3.01223 9.98227C6.15951 8.4128 8.92595 8.90993 11.2325 11.5518C12.0086 12.4466 12.5978 13.4905 13.3092 14.4421C14.2289 15.6778 15.0912 16.9845 16.1475 18.0924C18.066 20.0951 20.4947 20.6845 23.218 20.1661C26.3007 19.5767 28.6575 17.8225 30.7414 15.621C31.2332 15.0935 32.1404 15.3473 32.4269 16.0092C33.3596 18.1649 35.1226 19.4767 37.1653 20.5496C37.6805 20.8096 37.596 21.5878 37.1217 21.9168C36.0996 22.6257 35.1266 23.2939 34.1832 24.0081C33.2031 24.7532 32.6872 25.8015 32.2331 26.9436C32.026 27.4643 31.3611 27.563 30.9856 27.147C29.3402 25.3077 27.4575 23.788 25.115 22.8718C21.4217 21.4302 18.1594 22.1403 15.5223 25.0662C14.775 25.8971 14.1643 26.863 13.5104 27.7791C12.9283 28.6029 12.411 29.4764 11.8002 30.2789C9.24933 33.6238 6.217 34.2558 2.53081 32.2602C2.4497 32.2165 2.36769 32.1752 2.28372 32.135C1.73989 31.8745 0.978874 32.2661 1.05777 32.8639C1.51046 36.3579 4.32722 39.3335 7.80503 40.1005C9.45772 40.4698 10.8805 40.0792 12.1595 39.0494C12.7159 38.6027 13.53 38.7929 13.9365 39.3793C14.5166 40.216 15.2795 40.7768 16.3271 41.0664C19.8145 42.0258 23.5627 39.4092 24.261 35.9002C24.441 34.9961 23.5492 34.4551 22.6432 34.6251C21.7666 34.7885 20.8684 35.0015 19.9989 34.9376C19.4097 34.8879 18.6984 34.5399 18.3103 34.0996C16.5068 32.033 17.0169 28.1981 20.2145 27.3672C21.6013 27.005 22.8228 27.3672 23.9869 28.0277Z' stroke='%2369626D' stroke-miterlimit='10' /%3E%3C/svg%3E");width:17.5rem;height:2.5rem;font-size:18px}.qalam-tests-container .with-decoration--red{color:#d22630;background-image:url("data:image/svg+xml,%3Csvg width='275' height='32' viewBox='0 0 275 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.2402 21.0687C19.0365 21.5237 19.7024 22.1234 20.2963 22.8029C20.6364 23.192 20.9032 23.6379 21.1291 24.1027L21.9268 25.7437C23.1825 28.3271 25.8033 29.9663 28.6756 29.965L245.876 29.8632C248.931 29.8617 251.487 27.9067 253.005 25.2546C253.179 24.9495 253.364 24.6495 253.561 24.3557C254.176 23.4462 254.925 22.5898 255.739 21.8452C256.31 21.3186 257.059 20.9197 257.803 20.6538C259.08 20.1963 260.465 20.6484 261.192 21.6058C261.963 22.6217 262.012 24.3132 261.273 25.3663C260.869 25.9461 260.319 26.345 259.581 26.2865C258.918 26.228 258.261 26.1003 257.603 25.9727C257.012 25.8542 256.442 26.2319 256.562 26.8232C256.873 28.3575 257.905 29.7994 259.204 30.4618C261.214 31.4884 263.887 31.1107 264.733 28.7704C264.781 28.6532 264.982 28.7472 265.079 28.8281C265.176 28.9084 265.278 28.9947 265.374 29.0895C266.463 30.148 267.729 30.4352 269.211 30.047C271.647 29.414 273.798 26.9779 273.997 24.5206C274.011 24.3974 273.976 24.2701 273.938 24.1503C273.899 24.0264 273.79 23.8409 273.674 23.8983C273.318 24.0632 272.952 24.2174 272.601 24.3983C270.165 25.6429 267.972 25.2333 266.221 23.1537C265.622 22.4409 265.153 21.6271 264.598 20.8719C264.016 20.0847 263.467 19.2655 262.809 18.5475C261.246 16.8507 259.285 16.3774 257.048 16.888C255 17.356 253.378 18.4943 251.945 19.9517C251.448 20.4583 250.609 20.2658 250.301 19.6264C249.993 18.9861 249.611 18.4277 249.04 17.9996C248.941 17.9254 248.841 17.8518 248.741 17.7788C247.549 16.9087 247.682 15.1608 248.81 14.208C249.473 13.6473 250.029 12.9875 250.405 12.1533C250.638 11.6348 251.362 11.4416 251.751 11.8563C252.893 13.069 254.192 14.0849 255.749 14.7285C258.773 15.9838 261.553 15.2498 263.521 12.6754C264.011 12.0372 264.431 11.3563 264.884 10.6968C265.261 10.149 265.617 9.57982 266.032 9.05857C267.875 6.76081 270.079 6.30871 272.698 7.66502C272.847 7.74304 272.997 7.82007 273.154 7.89995C273.497 8.07469 274.018 7.89522 273.997 7.51076C273.83 4.81407 271.297 2.15997 268.592 1.81956C267.46 1.67595 266.458 1.95252 265.595 2.70248C265.198 3.04391 264.573 2.83611 264.293 2.39295C263.806 1.62302 263.052 1.22361 262.119 1.06957C260.772 0.846181 259.533 1.16002 258.46 2.02168C257.323 2.93121 256.757 4.16518 256.418 5.52682C256.31 5.94376 256.817 6.24844 257.229 6.12238C257.373 6.07847 257.511 6.04156 257.652 6.01615C258.352 5.89381 259.064 5.73957 259.764 5.75553C260.168 5.76084 260.637 6.00022 260.95 6.2768C261.823 7.04804 262.039 8.73942 261.5 9.87235C260.966 10.9946 259.678 11.6436 258.374 11.4787C257.258 11.3404 256.353 10.7819 255.545 10.0532C254.504 9.11708 253.664 8.02137 253.039 6.78207C252.979 6.66347 252.919 6.54468 252.86 6.42565C251.567 3.81488 248.972 2.10179 246.059 2.10234L29.1354 2.14305C26.0593 2.14362 23.4721 4.11437 21.9526 6.789C21.6666 7.29243 21.3556 7.78231 21.0102 8.25541C20.4875 8.96283 19.8623 9.61705 19.2102 10.2181C18.4773 10.8883 17.615 11.3563 16.5857 11.4733C15.2492 11.6276 14.0151 10.9946 13.4816 9.84576C12.948 8.7022 13.1851 7.01079 14.0582 6.2555C14.3707 5.98424 14.8504 5.7502 15.2492 5.7502C15.9983 5.7502 16.7474 5.93105 17.4911 6.05871C18.0659 6.15171 18.5987 5.75165 18.4674 5.18437C18.2171 4.10274 17.7118 3.21003 16.963 2.41527C15.9444 1.33553 14.6618 0.899389 13.1959 1.02172C12.0157 1.11746 11.0456 1.61742 10.4905 2.72375C10.3238 3.06159 9.84159 3.08287 9.55501 2.83829C7.83271 1.36834 6.41029 1.55985 4.65945 2.35145C2.47683 3.33545 1.44212 5.22365 1.0056 7.4629C0.931028 7.87296 1.56305 8.04511 1.93204 7.85132C2.13197 7.74632 2.31994 7.64797 2.50917 7.55332C4.86963 6.37784 6.94447 6.75017 8.67439 8.7288C9.25642 9.39898 9.69834 10.1809 10.2319 10.8936C10.9217 11.8191 11.5684 12.7977 12.3606 13.6275C13.7995 15.1274 15.621 15.5689 17.6635 15.1806C19.9755 14.7392 21.7432 13.4254 23.306 11.7765C23.6752 11.3812 24.3553 11.5716 24.5704 12.0679C25.2701 13.6821 26.5922 14.6644 28.124 15.4678C28.5101 15.6624 28.4468 16.2456 28.0913 16.4918C27.3247 17.0227 26.5949 17.5232 25.8874 18.0581C25.1525 18.6161 24.7655 19.4011 24.4249 20.2564C24.2695 20.6468 23.771 20.7208 23.4892 20.4091C22.2551 19.0315 20.8432 17.8933 19.0863 17.2071C16.3163 16.1274 13.8696 16.6593 11.8917 18.8507C11.3313 19.473 10.8732 20.1963 10.3828 20.8825C9.94626 21.4995 9.55824 22.1537 9.10016 22.7547C7.187 25.2599 4.91275 25.7333 2.1481 24.2387C2.08697 24.2058 2.02515 24.1747 1.96184 24.1444C1.55427 23.9496 0.98414 24.243 1.04333 24.6908C1.38285 27.3077 3.49541 29.5363 6.10378 30.1108C7.34329 30.3874 8.41034 30.0948 9.36962 29.3236C9.78711 28.9888 10.3975 29.1315 10.7027 29.5711C11.1377 30.1975 11.7098 30.6174 12.4953 30.8342C15.1104 31.5526 17.9208 29.5939 18.4455 26.9666C18.5809 26.2885 17.912 25.8825 17.2324 26.0099C16.5749 26.1322 15.9013 26.2918 15.2492 26.2439C14.8073 26.2067 14.2738 25.9461 13.9828 25.6163C12.6301 24.0685 13.0127 21.1963 15.4109 20.574C16.451 20.3027 17.3671 20.574 18.2402 21.0687Z' stroke='%23D22630' stroke-width='0.75' stroke-miterlimit='10' /%3E%3C/svg%3E");width:21.5rem;height:2.5rem;font-size:18px}.question-decoration{width:2.5em;height:2.5em;line-height:1em;flex:0 0 2.5em;color:#d22630;display:inline-flex;text-align:center;justify-content:center;align-items:center;background-image:url("data:image/svg+xml,%3Csvg width='71' height='68' viewBox='0 0 71 68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M35.4875 0L36.0279 0.203614C38.5422 1.1511 41.0484 2.19008 43.4746 3.28791C48.9398 5.66365 53.2574 9.67488 55.7252 14.5662C60.8185 16.9178 65.02 21.0407 67.5147 26.3041L67.5236 26.3228L71 33.9221L67.511 41.7001C65.0127 46.9665 60.8039 51.0964 55.7093 53.4453C53.2389 58.3351 48.9293 62.3394 43.4676 64.7119C41.04 65.814 38.5373 66.8493 36.0241 67.7964L35.4837 68L34.9434 67.7964C32.4291 66.8489 29.923 65.81 27.4968 64.7122C22.0315 62.3364 17.7139 58.3252 15.2461 53.4338C10.1565 51.0839 5.95744 46.9654 3.46202 41.7075C2.31316 39.3837 1.22998 36.9874 0.238853 34.5801L0 34L0.238853 33.4199C1.2303 31.0119 2.31735 28.6119 3.46591 26.2887C5.96483 21.0277 10.171 16.9019 15.2619 14.5547C17.7323 9.66492 22.0419 5.66065 27.5036 3.2882C29.9312 2.18608 32.4339 1.1507 34.9472 0.203614L35.4875 0ZM35.4875 3.26474C33.2131 4.1341 30.9532 5.07575 28.7589 6.0722L28.7353 6.08295C23.7091 8.26332 19.8624 11.9618 17.7763 16.3732L17.5302 16.8938L17.0008 17.1225C12.3597 19.1278 8.49455 22.8231 6.22548 27.6063L6.21481 27.6287C5.18718 29.7068 4.20975 31.8483 3.30923 34.0001C4.20946 36.1519 5.18351 38.2903 6.21083 40.3677L6.22208 40.3905C8.48721 45.1694 12.3444 48.8579 16.9865 50.867L17.5157 51.096L17.7616 51.6168C19.8437 56.0273 23.6975 59.7333 28.728 61.9174L28.7496 61.9268C30.9456 62.9207 33.2094 63.8656 35.4838 64.7353C37.7582 63.8659 40.0181 62.9243 42.2123 61.9278L42.236 61.917C47.2621 59.7367 51.1088 56.0382 53.1949 51.6268L53.4411 51.1062L53.9704 50.8775C58.6069 48.8742 62.4689 45.1844 64.7389 40.4082L67.6428 33.9344L64.7451 27.6004C62.4794 22.8258 58.6239 19.1409 53.9848 17.133L53.4555 16.904L53.2097 16.3832C51.1276 11.9727 47.2738 8.26671 42.2432 6.08256L42.2216 6.07316C40.0257 5.07927 37.7619 4.13436 35.4875 3.26474Z' fill='%23D22630' /%3E%3C/svg%3E");background-size:contain;background-position:center;background-repeat:no-repeat}.decorated-result{background-image:url("data:image/svg+xml,%3Csvg width='352' height='83' viewBox='0 0 352 83' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M47.0183 55.0678C49.4515 56.4712 51.4288 58.3855 53.1834 60.5481C53.6158 61.081 53.9725 61.6702 54.2703 62.2884L59.6083 73.3727C61.2769 76.8376 64.7847 79.0386 68.6305 79.0337L282.666 78.7636C286.749 78.7585 290.359 76.2467 291.967 72.4933C293.238 69.5247 294.646 66.6271 296.444 63.9237C298.084 61.4733 300.083 59.1661 302.256 57.1599C303.78 55.7413 305.78 54.6666 307.765 53.9501C311.174 52.7177 314.871 53.9357 316.813 56.5151C318.87 59.2521 319 63.809 317.029 66.6463C315.95 68.2083 314.483 69.2831 312.512 69.1254C310.743 68.9678 308.988 68.6239 307.233 68.28C305.655 67.961 304.135 68.9662 304.449 70.5451C305.273 74.6885 308.03 78.586 311.505 80.3744C316.871 83.14 324.006 82.1226 326.264 75.8175C326.39 75.504 326.928 75.7549 327.186 75.9719C327.445 76.1887 327.719 76.4213 327.976 76.6772C330.882 79.5289 334.262 80.3027 338.218 79.2567C344.72 77.5514 350.46 70.9883 350.992 64.3679C351.028 64.0345 350.934 63.6899 350.833 63.3659C350.731 63.0346 350.439 62.5367 350.129 62.6913C349.18 63.1356 348.201 63.551 347.266 64.0383C340.764 67.3914 334.91 66.2881 330.235 60.6851C328.638 58.7649 327.386 56.5725 325.905 54.5376C324.351 52.4168 322.884 50.2099 321.129 48.2754C316.957 43.7042 311.721 42.4288 305.751 43.8045C300.285 45.0655 295.955 48.1321 292.129 52.0585C290.807 53.4181 288.563 52.9059 287.748 51.1943C286.923 49.4642 285.902 47.9554 284.375 46.7995C284.093 46.5861 283.81 46.375 283.525 46.1654C280.351 43.8319 280.708 39.1726 283.713 36.6251C285.508 35.1031 287.012 33.3104 288.023 31.0372C288.64 29.6495 290.577 29.136 291.611 30.2485C294.66 33.5157 298.127 36.2527 302.285 37.9866C310.355 41.3684 317.777 39.3909 323.028 32.4552C324.337 30.7357 325.459 28.9015 326.667 27.1246C327.674 25.6486 328.624 24.1153 329.731 22.7109C334.651 16.5204 340.534 15.3024 347.526 18.9565C347.919 19.1647 348.315 19.3702 348.729 19.5832C349.649 20.0561 351.048 19.5738 350.992 18.5409C350.546 11.2757 343.785 4.12512 336.564 3.208C333.543 2.8211 330.868 3.56622 328.566 5.58673C327.508 6.50323 325.837 5.95058 325.096 4.76305C323.798 2.68206 321.781 1.60313 319.288 1.18744C315.691 0.585589 312.383 1.43111 309.52 3.75255C306.485 6.20296 304.974 9.52745 304.068 13.1959C303.78 14.3186 305.145 15.1356 306.253 14.7947C306.629 14.6789 306.993 14.5816 307.362 14.5142C309.232 14.1846 311.131 13.7691 313.001 13.8121C314.08 13.8264 315.332 14.4713 316.166 15.2165C318.496 17.2943 319.072 21.8511 317.633 24.9034C316.209 27.927 312.771 29.6753 309.29 29.231C306.312 28.8585 303.896 27.3538 301.738 25.3906C298.961 22.8686 296.718 19.9166 295.049 16.5777C293.934 14.3488 292.885 12.094 291.826 9.78223C290.203 6.23759 286.669 3.96871 282.771 3.97068L69.3127 4.07866C65.2008 4.08074 61.5668 6.62387 59.943 10.4015C58.4082 13.972 56.6901 17.3975 54.4122 20.5471C53.0169 22.453 51.3482 24.2156 49.6076 25.8348C47.6512 27.6404 45.3496 28.9014 42.6021 29.2167C39.0346 29.6322 35.7405 27.927 34.3164 24.8317C32.8922 21.7508 33.5251 17.1939 35.8555 15.1591C36.6898 14.4283 37.9701 13.7977 39.0346 13.7977C41.0341 13.7977 43.0336 14.285 45.0187 14.6289C46.5524 14.8793 47.9759 13.8149 47.6309 12.2996C46.9647 9.37372 45.614 6.96057 43.609 4.81294C40.8903 1.90398 37.4666 0.728937 33.5539 1.05852C30.4036 1.31646 27.8142 2.66341 26.3326 5.64402C25.8894 6.55028 24.5967 6.60808 23.8322 5.94982C19.2364 1.9926 15.4403 2.50881 10.768 4.641C4.94202 7.29203 2.18014 12.3791 1.01495 18.412C0.816475 19.5135 2.51095 19.9763 3.49989 19.4521C4.02905 19.1716 4.52706 18.9087 5.02834 18.6556C11.329 15.4887 16.8672 16.4918 21.4848 21.8225C23.0384 23.6281 24.218 25.7346 25.6421 27.6548C27.4834 30.1482 29.2096 32.7848 31.3242 35.0203C35.165 39.0613 40.0271 40.2507 45.4791 39.2047C51.6502 38.0153 56.3686 34.4758 60.5402 30.0335C61.5213 28.973 63.3414 29.4794 63.9104 30.8073C65.7767 35.1628 69.3082 37.812 73.4005 39.9784C74.4367 40.5055 74.2652 42.0717 73.3124 42.7378C71.2665 44.168 69.3189 45.5161 67.4306 46.9571C65.4671 48.4617 64.4341 50.5789 63.5245 52.8856C63.1126 53.9302 61.7783 54.1274 61.0293 53.2908C57.7351 49.5794 53.9663 46.5129 49.2767 44.6643C41.8828 41.7554 35.3521 43.1883 30.0728 49.0922C28.5767 50.7688 27.354 52.7177 26.045 54.5662C24.8798 56.2285 23.844 57.9911 22.6213 59.6104C17.5146 66.3597 11.4441 67.6351 4.06457 63.6084C3.90689 63.5227 3.7475 63.4416 3.58445 63.3626C2.4912 62.8332 0.957955 63.6221 1.11566 64.8265C2.02191 71.8768 7.66087 77.881 14.6232 79.4286C17.9318 80.1738 20.78 79.3856 23.3406 77.3077C24.4515 76.4086 26.0845 76.7885 26.8935 77.9667C28.0553 79.6587 29.5838 80.7925 31.6839 81.3775C38.6737 83.3158 46.1868 78.0212 47.572 70.9279C47.9256 69.1175 46.1408 68.0374 44.3283 68.3802C42.5733 68.7098 40.7752 69.1397 39.0346 69.0108C37.855 68.9105 36.4309 68.2083 35.6542 67.3199C32.0435 63.1499 33.0648 55.4118 39.4661 53.7352C42.2424 53.0043 44.6879 53.7351 47.0183 55.0678Z' stroke='%2369626D' stroke-width='2' stroke-miterlimit='10' /%3E%3C/svg%3E");background-size:contain;background-position:center;background-repeat:no-repeat}@media screen and (min-width: 600px){.decorated-result{background-image:url("data:image/svg+xml,%3Csvg width='634' height='122' viewBox='0 0 634 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M69.7354 81.2746C73.5161 83.442 76.5599 86.4305 79.2589 89.8009C79.689 90.3379 80.0496 90.9266 80.3496 91.5458L89.8829 111.223C91.5555 114.675 95.0557 116.866 98.8919 116.863L533.458 116.45C537.535 116.446 541.177 113.958 542.725 110.186C544.968 104.723 547.389 99.3552 550.689 94.4229C553.138 90.7848 556.125 87.3594 559.369 84.3808C561.647 82.2745 564.633 80.6788 567.598 79.6151C572.691 77.7854 578.213 79.5937 581.113 83.4233C584.186 87.487 584.379 94.2526 581.436 98.4652C579.824 100.784 577.633 102.38 574.689 102.146C572.046 101.912 569.425 101.401 566.804 100.891L566.803 100.891C564.445 100.417 562.175 101.921 562.65 104.279C563.887 110.421 568.001 116.196 573.185 118.847C581.199 122.953 591.857 121.443 595.23 112.082C595.419 111.614 596.221 111.989 596.608 112.312C596.994 112.633 597.403 112.978 597.787 113.358C602.127 117.592 607.176 118.741 613.085 117.188C622.797 114.656 631.37 104.912 632.165 95.0825C632.219 94.5889 632.078 94.0787 631.929 93.5988C631.775 93.1046 631.339 92.3636 630.876 92.5933C629.457 93.2528 627.996 93.8697 626.6 94.593C616.888 99.5715 608.143 97.9334 601.16 89.6146C598.775 86.7637 596.906 83.5086 594.693 80.4874C592.372 77.3386 590.181 74.0621 587.559 71.1899C581.328 64.403 573.507 62.5094 564.59 64.5519C556.426 66.4241 549.958 70.9771 544.243 76.8067C542.264 78.8304 538.918 78.0638 537.694 75.512C536.464 72.9481 534.94 70.7122 532.662 68.9986C532.258 68.6945 531.852 68.3936 531.443 68.0947C526.694 64.62 527.227 57.6544 531.719 53.8534C534.377 51.6046 536.604 48.9576 538.106 45.6072C539.033 43.538 541.921 42.7691 543.469 44.4253C548.025 49.2761 553.203 53.3397 559.412 55.914C571.466 60.9351 582.553 57.9991 590.395 47.7017C592.351 45.1486 594.026 42.4254 595.831 39.7872C597.335 37.5958 598.754 35.3193 600.408 33.2343C607.756 24.0432 616.544 22.2348 626.987 27.6601C627.578 27.9711 628.173 28.2782 628.796 28.5965C630.166 29.2966 632.249 28.5793 632.165 27.043C631.499 16.2563 621.4 5.63987 610.614 4.27823C606.102 3.70379 602.105 4.81007 598.668 7.80993C597.084 9.17385 594.592 8.34651 593.479 6.57724C591.539 3.49397 588.529 1.89482 584.809 1.2783C579.437 0.384723 574.496 1.64007 570.22 5.08672C565.686 8.72485 563.43 13.6607 562.076 19.1073C561.646 20.7747 563.675 21.9914 565.322 21.4865C565.891 21.3122 566.439 21.1657 566.997 21.0646C569.79 20.5752 572.626 19.9583 575.419 20.0221C577.031 20.0434 578.9 21.0009 580.147 22.1072C583.627 25.1922 584.487 31.9577 582.338 36.4894C580.211 40.9785 575.076 43.5742 569.876 42.9147C565.428 42.3615 561.819 40.1276 558.596 37.2128C554.449 33.4683 551.097 29.0855 548.605 24.1283C546.484 19.9124 544.52 15.6339 542.486 11.1979C540.865 7.66211 537.329 5.40672 533.439 5.4082L99.6566 5.57342C95.5517 5.57499 91.8901 8.09537 90.3305 11.8924C87.6996 18.2976 84.8329 24.4504 80.7793 30.0216C78.6952 32.8513 76.2027 35.4682 73.6029 37.8724C70.6807 40.5531 67.2429 42.4253 63.1391 42.8934C57.8105 43.5103 52.8902 40.9786 50.7631 36.383C48.6359 31.8088 49.5812 25.0431 53.062 22.022C54.3082 20.937 56.2205 20.0008 57.8105 20.0008C60.7971 20.0008 63.7836 20.7242 66.7487 21.2348C69.0401 21.6068 71.1652 20.0135 70.6446 17.7513C69.6476 13.4186 67.6321 9.84349 64.6431 6.66109C60.5822 2.34214 55.4685 0.597554 49.6242 1.08689C44.9188 1.46985 41.0512 3.46967 38.8381 7.89499C38.1742 9.2443 36.2488 9.32968 35.1065 8.35169C28.2406 2.47349 22.5698 3.23965 15.5899 6.4058C6.88801 10.3418 2.76272 17.8946 1.02233 26.8516C0.725318 28.4902 3.24906 29.1782 4.72232 28.402C5.51704 27.9832 6.26452 27.5909 7.01695 27.2133C16.4279 22.5114 24.7001 24.0007 31.5972 31.9152C33.9178 34.5959 35.6797 37.7235 37.8068 40.5744C40.557 44.2763 43.1354 48.191 46.2939 51.51C52.0307 57.5097 59.293 59.2756 67.4363 57.7225C76.6539 55.9567 83.7015 50.7015 89.9325 44.1061C91.402 42.5272 94.1161 43.2854 94.971 45.2657C97.7597 51.7259 103.032 55.6567 109.141 58.8714C110.684 59.6512 110.43 61.9812 109.011 62.9674C105.954 65.0912 103.045 67.0929 100.224 69.2326C97.2932 71.4652 95.7503 74.6064 94.3922 78.0289C93.7741 79.5866 91.7846 79.8816 90.663 78.6363C85.7426 73.126 80.1132 68.5731 73.1087 65.8285C62.0648 61.5096 52.3101 63.6371 44.4246 72.4026C42.19 74.8918 40.3637 77.7853 38.4085 80.5299C36.6681 82.9979 35.1211 85.6148 33.2947 88.0189C25.6671 98.0397 16.5999 99.9332 5.57741 93.9548C5.33656 93.8247 5.09305 93.7017 4.84376 93.582C3.21598 92.8002 0.936918 93.973 1.17275 95.7633C2.52638 106.231 10.949 115.145 21.3484 117.443C26.2902 118.549 30.5445 117.379 34.3691 114.294C36.0317 112.957 38.4672 113.525 39.6811 115.28C41.4158 117.788 43.6974 119.469 46.8311 120.337C57.2621 123.212 68.4732 115.368 70.5569 104.851C71.0925 102.147 68.4262 100.53 65.7174 101.04C63.0961 101.529 60.4103 102.167 57.8105 101.976C56.0486 101.827 53.9216 100.784 52.7613 99.4652C47.3682 93.274 48.8937 81.7852 58.4551 79.296C62.6019 78.211 66.2546 79.296 69.7354 81.2746Z' stroke='%2369626D' stroke-width='2' stroke-miterlimit='10' /%3E%3C/svg%3E")}}.appended-notification{width:200px;text-align:center;background:#4a4a68;color:#f3ffd5;font-size:16px;padding:12px;border-radius:12px;margin:1rem;transition:.5s}.appended-notification-wrapper{position:fixed;z-index:1000;top:0;left:0;width:100vw;display:flex;justify-content:center}input[type=checkbox],input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff0;margin:0;width:1rem;height:1rem;background-size:contain;background-position:center;background-repeat:no-repeat}input[type=checkbox]{background-image:url(data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2228%22%20height%3D%2228%22%20rx%3D%222%22%20stroke%3D%22%2369626D%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A)}input[type=checkbox]:checked{background-image:url(data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%2228%22%20height%3D%2228%22%20rx%3D%222%22%20stroke%3D%22%232E2E31%22%20stroke-width%3D%222%22%2F%3E%3Cpath%20d%3D%22M6%2013.3333L13.2%2020L24%2010%22%20stroke%3D%22%232E2E31%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E)}input[type=radio]{background-image:url(data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2231%22%20viewBox%3D%220%200%2030%2031%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2215%22%20cy%3D%2215.3223%22%20r%3D%2214%22%20stroke%3D%22%2369626D%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A)}input[type=radio]:checked{background-image:url(data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2231%22%20viewBox%3D%220%200%2030%2031%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2215%22%20cy%3D%2215.3223%22%20r%3D%2214%22%20stroke%3D%22%232E2E31%22%20stroke-width%3D%222%22%2F%3E%0A%3Ccircle%20cx%3D%2215%22%20cy%3D%2215.3223%22%20r%3D%2210%22%20fill%3D%22%232E2E31%22%2F%3E%0A%3C%2Fsvg%3E%0A)}label{margin-left:.5rem}.tags-enter-from,.tags-leave-to{max-height:0;opacity:0;overflow:hidden}.tags-enter-to,.tags-leave-from{max-height:300px;opacity:1;overflow:hidden}.tags-enter-active,.tags-leave-active{transition:all .3s;overflow:hidden}.fade-enter-active{transition:opacity .5s ease}.fade-leave-active{transition:none}.fade-enter-from,.fade-leave-to{opacity:0}@keyframes tags-fadeIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}html{scroll-behavior:smooth}body{background:#faf3f0}#app{overflow:hidden}.hover\\:bg-red:hover{--tw-bg-opacity: 1;background-color:rgb(210 38 48 / var(--tw-bg-opacity))}.hover\\:text-\\[\\#fff\\]:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:shadow-lg:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:shadow-none:hover{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.disabled\\:invisible:disabled{visibility:hidden}.disabled\\:border-grey-border:disabled{--tw-border-opacity: 1;border-color:rgb(159 159 159 / var(--tw-border-opacity))}.disabled\\:bg-grey-border:disabled{--tw-bg-opacity: 1;background-color:rgb(159 159 159 / var(--tw-bg-opacity))}.disabled\\:text-\\[\\#fff\\]:disabled{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){.sm\\:p-8{padding:2rem}}@media (min-width: 768px){.md\\:col-span-4{grid-column:span 4 / span 4}.md\\:col-span-5{grid-column:span 5 / span 5}.md\\:my-0{margin-top:0;margin-bottom:0}.md\\:aspect-\\[450\\/280\\]{aspect-ratio:450/280}.md\\:min-h-\\[400px\\]{min-height:400px}.md\\:w-auto{width:auto}.md\\:auto-rows-\\[1fr\\]{grid-auto-rows:1fr}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-9{grid-template-columns:repeat(9,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:gap-8{gap:2rem}.md\\:p-10{padding:2.5rem}.md\\:p-12{padding:3rem}.md\\:text-left{text-align:left}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:aspect-\\[654\\/412\\]{aspect-ratio:654/412}.lg\\:max-w-\\[60\\%\\]{max-width:60%}}@media (min-width: 1280px){.xl\\:h-auto{height:auto}.xl\\:w-auto{width:auto}.xl\\:flex-col{flex-direction:column}.xl\\:justify-end{justify-content:flex-end}.xl\\:gap-6{gap:1.5rem}.xl\\:p-6{padding:1.5rem}.xl\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.xl\\:pb-6{padding-bottom:1.5rem}}@media (min-width: 1536px){.\\32xl\\:w-\\[1028px\\]{width:1028px}}.\\[\\&\\>div\\>img\\]\\:rounded-\\[20px\\]>div>img{border-radius:20px}@media (min-width: 768px){.\\[\\&\\>div\\>img\\]\\:md\\:rounded-xl>div>img{border-radius:.75rem}}.\\[\\&\\>div\\]\\:min-h-\\[210px\\]>div{min-height:210px}@media (min-width: 768px){.\\[\\&\\>div\\]\\:md\\:min-h-\\[350px\\]>div{min-height:350px}}`
        )
      ),
        document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ls(e, t) {
  const n = new Set(e.split(","));
  return (s) => n.has(s);
}
const ee = {},
  St = [],
  Re = () => { },
  Ji = () => !1,
  Tn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ps = (e) => e.startsWith("onUpdate:"),
  de = Object.assign,
  ks = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Qi = Object.prototype.hasOwnProperty,
  z = (e, t) => Qi.call(e, t),
  I = Array.isArray,
  Ct = (e) => An(e) === "[object Map]",
  oo = (e) => An(e) === "[object Set]",
  j = (e) => typeof e == "function",
  le = (e) => typeof e == "string",
  lt = (e) => typeof e == "symbol",
  te = (e) => e !== null && typeof e == "object",
  io = (e) => (te(e) || j(e)) && j(e.then) && j(e.catch),
  lo = Object.prototype.toString,
  An = (e) => lo.call(e),
  Zi = (e) => An(e).slice(8, -1),
  co = (e) => An(e) === "[object Object]",
  $s = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ht = Ls(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  On = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Xi = /-(\w)/g,
  At = On((e) => e.replace(Xi, (t, n) => (n ? n.toUpperCase() : ""))),
  Yi = /\B([A-Z])/g,
  Lt = On((e) => e.replace(Yi, "-$1").toLowerCase()),
  uo = On((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Wn = On((e) => (e ? `on${uo(e)}` : "")),
  ot = (e, t) => !Object.is(e, t),
  zn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  ao = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n });
  },
  el = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let cr;
const fo = () =>
  cr ||
  (cr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Ns(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = le(s) ? rl(s) : Ns(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (le(e) || te(e)) return e;
}
const tl = /;(?![^(]*\))/g,
  nl = /:([^]+)/,
  sl = /\/\*[^]*?\*\//g;
function rl(e) {
  const t = {};
  return (
    e
      .replace(sl, "")
      .split(tl)
      .forEach((n) => {
        if (n) {
          const s = n.split(nl);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Ke(e) {
  let t = "";
  if (le(e)) t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ke(e[n]);
      s && (t += s + " ");
    }
  else if (te(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const ol = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  il = Ls(ol);
function ho(e) {
  return !!e || e === "";
}
const po = (e) => !!(e && e.__v_isRef === !0),
  oe = (e) =>
    le(e)
      ? e
      : e == null
        ? ""
        : I(e) || (te(e) && (e.toString === lo || !j(e.toString)))
          ? po(e)
            ? oe(e.value)
            : JSON.stringify(e, mo, 2)
          : String(e),
  mo = (e, t) =>
    po(t)
      ? mo(e, t.value)
      : Ct(t)
        ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], o) => ((n[Gn(s, o) + " =>"] = r), n),
            {}
          ),
        }
        : oo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Gn(n)) }
          : lt(t)
            ? Gn(t)
            : te(t) && !I(t) && !co(t)
              ? String(t)
              : t,
  Gn = (e, t = "") => {
    var n;
    return lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ce;
class go {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ce),
      !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ce;
      try {
        return (Ce = this), t();
      } finally {
        Ce = n;
      }
    }
  }
  on() {
    Ce = this;
  }
  off() {
    Ce = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function _o(e) {
  return new go(e);
}
function ll(e, t = Ce) {
  t && t.active && t.effects.push(e);
}
function yo() {
  return Ce;
}
function cl(e) {
  Ce && Ce.cleanups.push(e);
}
let gt;
class Is {
  constructor(t, n, s, r) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      ll(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), ct();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ul(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ut();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = nt,
      n = gt;
    try {
      return (nt = !0), (gt = this), this._runnings++, ur(this), this.fn();
    } finally {
      ar(this), this._runnings--, (gt = n), (nt = t);
    }
  }
  stop() {
    this.active && (ur(this), ar(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function ul(e) {
  return e.value;
}
function ur(e) {
  e._trackId++, (e._depsLength = 0);
}
function ar(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) bo(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function bo(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let nt = !0,
  cs = 0;
const wo = [];
function ct() {
  wo.push(nt), (nt = !1);
}
function ut() {
  const e = wo.pop();
  nt = e === void 0 ? !0 : e;
}
function Fs() {
  cs++;
}
function Ms() {
  for (cs--; !cs && us.length;) us.shift()();
}
function xo(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && bo(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const us = [];
function vo(e, t, n) {
  Fs();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), (s._dirtyLevel = t)),
      s._shouldSchedule &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
        s._dirtyLevel !== 2 &&
        ((s._shouldSchedule = !1), s.scheduler && us.push(s.scheduler)));
  }
  Ms();
}
const Eo = (e, t) => {
  const n = new Map();
  return (n.cleanup = e), (n.computed = t), n;
},
  bn = new WeakMap(),
  _t = Symbol(""),
  as = Symbol("");
function Ee(e, t, n) {
  if (nt && gt) {
    let s = bn.get(e);
    s || bn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Eo(() => s.delete(n)))), xo(gt, r);
  }
}
function We(e, t, n, s, r, o) {
  const i = bn.get(e);
  if (!i) return;
  let l = [];
  if (t === "clear") l = [...i.values()];
  else if (n === "length" && I(e)) {
    const c = Number(s);
    i.forEach((a, u) => {
      (u === "length" || (!lt(u) && u >= c)) && l.push(a);
    });
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case "add":
        I(e) ? $s(n) && l.push(i.get("length")) : (l.push(i.get(_t)), Ct(e) && l.push(i.get(as)));
        break;
      case "delete":
        I(e) || (l.push(i.get(_t)), Ct(e) && l.push(i.get(as)));
        break;
      case "set":
        Ct(e) && l.push(i.get(_t));
        break;
    }
  Fs();
  for (const c of l) c && vo(c, 4);
  Ms();
}
function al(e, t) {
  const n = bn.get(e);
  return n && n.get(t);
}
const fl = Ls("__proto__,__v_isRef,__isVue"),
  So = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(lt)
  ),
  fr = dl();
function dl() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = G(this);
        for (let o = 0, i = this.length; o < i; o++) Ee(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(G)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        ct(), Fs();
        const s = G(this)[t].apply(this, n);
        return Ms(), ut(), s;
      };
    }),
    e
  );
}
function hl(e) {
  lt(e) || (e = String(e));
  const t = G(this);
  return Ee(t, "has", e), t.hasOwnProperty(e);
}
class Co {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return s === (r ? (o ? Rl : Oo) : o ? Ao : To).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = I(t);
    if (!r) {
      if (i && z(fr, n)) return Reflect.get(fr, n, s);
      if (n === "hasOwnProperty") return hl;
    }
    const l = Reflect.get(t, n, s);
    return (lt(n) ? So.has(n) : fl(n)) || (r || Ee(t, "get", n), o)
      ? l
      : ie(l)
        ? i && $s(n)
          ? l
          : l.value
        : te(l)
          ? r
            ? Lo(l)
            : Pn(l)
          : l;
  }
}
class Ro extends Co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const c = zt(o);
      if ((!wn(s) && !zt(s) && ((o = G(o)), (s = G(s))), !I(t) && ie(o) && !ie(s)))
        return c ? !1 : ((o.value = s), !0);
    }
    const i = I(t) && $s(n) ? Number(n) < t.length : z(t, n),
      l = Reflect.set(t, n, s, r);
    return t === G(r) && (i ? ot(s, o) && We(t, "set", n, s) : We(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = z(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && We(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!lt(n) || !So.has(n)) && Ee(t, "has", n), s;
  }
  ownKeys(t) {
    return Ee(t, "iterate", I(t) ? "length" : _t), Reflect.ownKeys(t);
  }
}
class pl extends Co {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ml = new Ro(),
  gl = new pl(),
  _l = new Ro(!0);
const js = (e) => e,
  Ln = (e) => Reflect.getPrototypeOf(e);
function rn(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = G(e),
    o = G(t);
  n || (ot(t, o) && Ee(r, "get", t), Ee(r, "get", o));
  const { has: i } = Ln(r),
    l = s ? js : n ? Ds : Gt;
  if (i.call(r, t)) return l(e.get(t));
  if (i.call(r, o)) return l(e.get(o));
  e !== r && e.get(t);
}
function on(e, t = !1) {
  const n = this.__v_raw,
    s = G(n),
    r = G(e);
  return (
    t || (ot(e, r) && Ee(s, "has", e), Ee(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function ln(e, t = !1) {
  return (e = e.__v_raw), !t && Ee(G(e), "iterate", _t), Reflect.get(e, "size", e);
}
function dr(e) {
  e = G(e);
  const t = G(this);
  return Ln(t).has.call(t, e) || (t.add(e), We(t, "add", e, e)), this;
}
function hr(e, t) {
  t = G(t);
  const n = G(this),
    { has: s, get: r } = Ln(n);
  let o = s.call(n, e);
  o || ((e = G(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return n.set(e, t), o ? ot(t, i) && We(n, "set", e, t) : We(n, "add", e, t), this;
}
function pr(e) {
  const t = G(this),
    { has: n, get: s } = Ln(t);
  let r = n.call(t, e);
  r || ((e = G(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && We(t, "delete", e, void 0), o;
}
function mr() {
  const e = G(this),
    t = e.size !== 0,
    n = e.clear();
  return t && We(e, "clear", void 0, void 0), n;
}
function cn(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = G(i),
      c = t ? js : e ? Ds : Gt;
    return !e && Ee(l, "iterate", _t), i.forEach((a, u) => s.call(r, c(a), c(u), o));
  };
}
function un(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = G(r),
      i = Ct(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      a = r[e](...s),
      u = n ? js : t ? Ds : Gt;
    return (
      !t && Ee(o, "iterate", c ? as : _t),
      {
        next() {
          const { value: h, done: g } = a.next();
          return g ? { value: h, done: g } : { value: l ? [u(h[0]), u(h[1])] : u(h), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Qe(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yl() {
  const e = {
    get(o) {
      return rn(this, o);
    },
    get size() {
      return ln(this);
    },
    has: on,
    add: dr,
    set: hr,
    delete: pr,
    clear: mr,
    forEach: cn(!1, !1),
  },
    t = {
      get(o) {
        return rn(this, o, !1, !0);
      },
      get size() {
        return ln(this);
      },
      has: on,
      add: dr,
      set: hr,
      delete: pr,
      clear: mr,
      forEach: cn(!1, !0),
    },
    n = {
      get(o) {
        return rn(this, o, !0);
      },
      get size() {
        return ln(this, !0);
      },
      has(o) {
        return on.call(this, o, !0);
      },
      add: Qe("add"),
      set: Qe("set"),
      delete: Qe("delete"),
      clear: Qe("clear"),
      forEach: cn(!0, !1),
    },
    s = {
      get(o) {
        return rn(this, o, !0, !0);
      },
      get size() {
        return ln(this, !0);
      },
      has(o) {
        return on.call(this, o, !0);
      },
      add: Qe("add"),
      set: Qe("set"),
      delete: Qe("delete"),
      clear: Qe("clear"),
      forEach: cn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = un(o, !1, !1)),
        (n[o] = un(o, !0, !1)),
        (t[o] = un(o, !1, !0)),
        (s[o] = un(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [bl, wl, xl, vl] = yl();
function Bs(e, t) {
  const n = t ? (e ? vl : xl) : e ? wl : bl;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? s
          : Reflect.get(z(n, r) && r in s ? n : s, r, o);
}
const El = { get: Bs(!1, !1) },
  Sl = { get: Bs(!1, !0) },
  Cl = { get: Bs(!0, !1) };
const To = new WeakMap(),
  Ao = new WeakMap(),
  Oo = new WeakMap(),
  Rl = new WeakMap();
function Tl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Al(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Tl(Zi(e));
}
function Pn(e) {
  return zt(e) ? e : Hs(e, !1, ml, El, To);
}
function Ol(e) {
  return Hs(e, !1, _l, Sl, Ao);
}
function Lo(e) {
  return Hs(e, !0, gl, Cl, Oo);
}
function Hs(e, t, n, s, r) {
  if (!te(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = Al(e);
  if (i === 0) return e;
  const l = new Proxy(e, i === 2 ? s : n);
  return r.set(e, l), l;
}
function st(e) {
  return zt(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zt(e) {
  return !!(e && e.__v_isReadonly);
}
function wn(e) {
  return !!(e && e.__v_isShallow);
}
function Po(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Us(e) {
  return Object.isExtensible(e) && ao(e, "__v_skip", !0), e;
}
const Gt = (e) => (te(e) ? Pn(e) : e),
  Ds = (e) => (te(e) ? Lo(e) : e);
class ko {
  constructor(t, n, s, r) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Is(
        () => t(this._value),
        () => hn(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = G(this);
    return (
      (!t._cacheable || t.effect.dirty) && ot(t._value, (t._value = t.effect.run())) && hn(t, 4),
      $o(t),
      t.effect._dirtyLevel >= 2 && hn(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function Ll(e, t, n = !1) {
  let s, r;
  const o = j(e);
  return o ? ((s = e), (r = Re)) : ((s = e.get), (r = e.set)), new ko(s, r, o || !r, n);
}
function $o(e) {
  var t;
  nt &&
    gt &&
    ((e = G(e)),
      xo(
        gt,
        (t = e.dep) != null ? t : (e.dep = Eo(() => (e.dep = void 0), e instanceof ko ? e : void 0))
      ));
}
function hn(e, t = 4, n, s) {
  e = G(e);
  const r = e.dep;
  r && vo(r, t);
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function be(e) {
  return Pl(e, !1);
}
function Pl(e, t) {
  return ie(e) ? e : new kl(e, t);
}
class kl {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : G(t)),
      (this._value = n ? t : Gt(t));
  }
  get value() {
    return $o(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || wn(t) || zt(t);
    (t = n ? t : G(t)),
      ot(t, this._rawValue) &&
      (this._rawValue, (this._rawValue = t), (this._value = n ? t : Gt(t)), hn(this, 4));
  }
}
function ue(e) {
  return ie(e) ? e.value : e;
}
const $l = {
  get: (e, t, n) => ue(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ie(r) && !ie(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function No(e) {
  return st(e) ? e : new Proxy(e, $l);
}
function Nl(e) {
  const t = I(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Io(e, n);
  return t;
}
class Il {
  constructor(t, n, s) {
    (this._object = t), (this._key = n), (this._defaultValue = s), (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return al(G(this._object), this._key);
  }
}
class Fl {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Ml(e, t, n) {
  return ie(e) ? e : j(e) ? new Fl(e) : te(e) && arguments.length > 1 ? Io(e, t, n) : be(e);
}
function Io(e, t, n) {
  const s = e[t];
  return ie(s) ? s : new Il(e, t, n);
}
/**
 * @vue/runtime-core v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function rt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    kn(r, t, n);
  }
}
function Pe(e, t, n, s) {
  if (j(e)) {
    const r = rt(e, t, n, s);
    return (
      r &&
      io(r) &&
      r.catch((o) => {
        kn(o, t, n);
      }),
      r
    );
  }
  if (I(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++) r.push(Pe(e[o], t, n, s));
    return r;
  }
}
function kn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o;) {
      const a = o.ec;
      if (a) {
        for (let u = 0; u < a.length; u++) if (a[u](e, i, l) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      ct(), rt(c, null, 10, [e, i, l]), ut();
      return;
    }
  }
  jl(e, n, r, s);
}
function jl(e, t, n, s = !0) {
  console.error(e);
}
let Jt = !1,
  fs = !1;
const me = [];
let He = 0;
const Rt = [];
let Ye = null,
  pt = 0;
const Fo = Promise.resolve();
let qs = null;
function Mo(e) {
  const t = qs || Fo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bl(e) {
  let t = He + 1,
    n = me.length;
  for (; t < n;) {
    const s = (t + n) >>> 1,
      r = me[s],
      o = Qt(r);
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function Vs(e) {
  (!me.length || !me.includes(e, Jt && e.allowRecurse ? He + 1 : He)) &&
    (e.id == null ? me.push(e) : me.splice(Bl(e.id), 0, e), jo());
}
function jo() {
  !Jt && !fs && ((fs = !0), (qs = Fo.then(Ho)));
}
function Hl(e) {
  const t = me.indexOf(e);
  t > He && me.splice(t, 1);
}
function Ul(e) {
  I(e) ? Rt.push(...e) : (!Ye || !Ye.includes(e, e.allowRecurse ? pt + 1 : pt)) && Rt.push(e), jo();
}
function gr(e, t, n = Jt ? He + 1 : 0) {
  for (; n < me.length; n++) {
    const s = me[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      me.splice(n, 1), n--, s();
    }
  }
}
function Bo(e) {
  if (Rt.length) {
    const t = [...new Set(Rt)].sort((n, s) => Qt(n) - Qt(s));
    if (((Rt.length = 0), Ye)) {
      Ye.push(...t);
      return;
    }
    for (Ye = t, pt = 0; pt < Ye.length; pt++) {
      const n = Ye[pt];
      n.active !== !1 && n();
    }
    (Ye = null), (pt = 0);
  }
}
const Qt = (e) => (e.id == null ? 1 / 0 : e.id),
  Dl = (e, t) => {
    const n = Qt(e) - Qt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Ho(e) {
  (fs = !1), (Jt = !0), me.sort(Dl);
  try {
    for (He = 0; He < me.length; He++) {
      const t = me[He];
      t && t.active !== !1 && rt(t, null, 14);
    }
  } finally {
    (He = 0), (me.length = 0), Bo(), (Jt = !1), (qs = null), (me.length || Rt.length) && Ho();
  }
}
function ql(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: h, trim: g } = s[u] || ee;
    g && (r = n.map((v) => (le(v) ? v.trim() : v))), h && (r = n.map(el));
  }
  let l,
    c = s[(l = Wn(t))] || s[(l = Wn(At(t)))];
  !c && o && (c = s[(l = Wn(Lt(t)))]), c && Pe(c, e, 6, r);
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Pe(a, e, 6, r);
  }
}
function Uo(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!j(e)) {
    const c = (a) => {
      const u = Uo(a, t, !0);
      u && ((l = !0), de(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (te(e) && s.set(e, null), null)
    : (I(o) ? o.forEach((c) => (i[c] = null)) : de(i, o), te(e) && s.set(e, i), i);
}
function $n(e, t) {
  return !e || !Tn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Lt(t)) || z(e, t));
}
let he = null,
  Do = null;
function xn(e) {
  const t = he;
  return (he = e), (Do = (e && e.type.__scopeId) || null), t;
}
function mt(e, t = he, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Or(-1);
    const o = xn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      xn(o), s._d && Or(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Jn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: c,
    render: a,
    renderCache: u,
    props: h,
    data: g,
    setupState: v,
    ctx: w,
    inheritAttrs: C,
  } = e,
    D = xn(e);
  let H, J;
  try {
    if (n.shapeFlag & 4) {
      const K = r || s,
        W = K;
      (H = Be(a.call(W, K, u, h, v, g, w))), (J = l);
    } else {
      const K = t;
      (H = Be(K.length > 1 ? K(h, { attrs: l, slots: i, emit: c }) : K(h, null))),
        (J = t.props ? l : Vl(l));
    }
  } catch (K) {
    (Kt.length = 0), kn(K, e, 1), (H = re(it));
  }
  let R = H;
  if (J && C !== !1) {
    const K = Object.keys(J),
      { shapeFlag: W } = R;
    K.length && W & 7 && (o && K.some(Ps) && (J = Kl(J, o)), (R = Ot(R, J, !1, !0)));
  }
  return (
    n.dirs && ((R = Ot(R, null, !1, !0)), (R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (R.transition = n.transition),
    (H = R),
    xn(D),
    H
  );
}
const Vl = (e) => {
  let t;
  for (const n in e) (n === "class" || n === "style" || Tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
},
  Kl = (e, t) => {
    const n = {};
    for (const s in e) (!Ps(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Wl(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? _r(s, i, a) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const g = u[h];
        if (i[g] !== s[g] && !$n(a, g)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? (i ? _r(s, i, a) : !0) : !!i;
  return !1;
}
function _r(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !$n(n, o)) return !0;
  }
  return !1;
}
function zl({ vnode: e, parent: t }, n) {
  for (; t;) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Gl = Symbol.for("v-ndc"),
  Jl = (e) => e.__isSuspense;
function Ql(e, t) {
  t && t.pendingBranch ? (I(e) ? t.effects.push(...e) : t.effects.push(e)) : Ul(e);
}
function Nn(e, t, n = ge, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          ct();
          const l = Yt(n),
            c = Pe(t, n, e, i);
          return l(), ut(), c;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const ze =
  (e) =>
    (t, n = ge) => {
      (!Mn || e === "sp") && Nn(e, (...s) => t(...s), n);
    },
  Zl = ze("bm"),
  qo = ze("m"),
  Xl = ze("bu"),
  Yl = ze("u"),
  ec = ze("bum"),
  Vo = ze("um"),
  tc = ze("sp"),
  nc = ze("rtg"),
  sc = ze("rtc");
function rc(e, t = ge) {
  Nn("ec", e, t);
}
function oc(e, t) {
  if (he === null) return e;
  const n = jn(he),
    s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = ee] = t[r];
    o &&
      (j(o) && (o = { mounted: o, updated: o }),
        o.deep && tt(i),
        s.push({ dir: o, instance: n, value: i, oldValue: void 0, arg: l, modifiers: c }));
  }
  return e;
}
function dt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let c = l.dir[s];
    c && (ct(), Pe(c, n, 8, [e.el, l, e, t]), ut());
  }
}
function an(e, t, n, s) {
  let r;
  const o = n;
  if (I(e) || le(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++) r[i] = t(e[i], i, void 0, o);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o);
  } else if (te(e))
    if (e[Symbol.iterator]) r = Array.from(e, (i, l) => t(i, l, void 0, o));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const a = i[l];
        r[l] = t(e[a], a, l, o);
      }
    }
  else r = [];
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function $e(e, t) {
  return j(e) ? de({ name: e.name }, t, { setup: e }) : e;
}
const Ut = (e) => !!e.type.__asyncLoader;
function In(e, t, n = {}, s, r) {
  if (he.isCE || (he.parent && Ut(he.parent) && he.parent.isCE)) return re("slot", n, s);
  let o = e[t];
  o && o._c && (o._d = !1), O();
  const i = o && Ko(o(n)),
    l = _e(pe, { key: n.key || (i && i.key) || `_${t}` }, i || [], i && e._ === 1 ? 64 : -2);
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function Ko(e) {
  return e.some((t) => (ai(t) ? !(t.type === it || (t.type === pe && !Ko(t.children))) : !0))
    ? e
    : null;
}
const ds = (e) => (e ? (di(e) ? jn(e) : ds(e.parent)) : null),
  Dt = de(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ds(e.parent),
    $root: (e) => ds(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ks(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Vs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Mo.bind(e.proxy)),
    $watch: (e) => Tc.bind(e),
  }),
  Qn = (e, t) => e !== ee && !e.__isScriptSetup && z(e, t),
  ic = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e;
      let a;
      if (t[0] !== "$") {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Qn(s, t)) return (i[t] = 1), s[t];
          if (r !== ee && z(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && z(a, t)) return (i[t] = 3), o[t];
          if (n !== ee && z(n, t)) return (i[t] = 4), n[t];
          hs && (i[t] = 0);
        }
      }
      const u = Dt[t];
      let h, g;
      if (u) return t === "$attrs" && Ee(e.attrs, "get", ""), u(e);
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== ee && z(n, t)) return (i[t] = 4), n[t];
      if (((g = c.config.globalProperties), z(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return Qn(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && z(s, t)
          ? ((s[t] = n), !0)
          : z(e.props, t) || (t[0] === "$" && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0);
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } },
      i
    ) {
      let l;
      return (
        !!n[i] ||
        (e !== ee && z(e, i)) ||
        Qn(t, i) ||
        ((l = o[0]) && z(l, i)) ||
        z(s, i) ||
        z(Dt, i) ||
        z(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : z(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function yr(e) {
  return I(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let hs = !0;
function lc(e) {
  const t = Ks(e),
    n = e.proxy,
    s = e.ctx;
  (hs = !1), t.beforeCreate && br(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    created: u,
    beforeMount: h,
    mounted: g,
    beforeUpdate: v,
    updated: w,
    activated: C,
    deactivated: D,
    beforeDestroy: H,
    beforeUnmount: J,
    destroyed: R,
    unmounted: K,
    render: W,
    renderTracked: k,
    renderTriggered: q,
    errorCaptured: N,
    serverPrefetch: V,
    expose: se,
    inheritAttrs: ae,
    components: Ie,
    directives: wt,
    filters: $t,
  } = t;
  if ((a && cc(a, s, null), i))
    for (const ne in i) {
      const X = i[ne];
      j(X) && (s[ne] = X.bind(n));
    }
  if (r) {
    const ne = r.call(n, n);
    te(ne) && (e.data = Pn(ne));
  }
  if (((hs = !0), o))
    for (const ne in o) {
      const X = o[ne],
        at = j(X) ? X.bind(n, n) : j(X.get) ? X.get.bind(n, n) : Re,
        nn = !j(X) && j(X.set) ? X.set.bind(n) : Re,
        ft = xe({ get: at, set: nn });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => ft.value,
        set: (Fe) => (ft.value = Fe),
      });
    }
  if (l) for (const ne in l) Wo(l[ne], s, n, ne);
  if (c) {
    const ne = j(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach((X) => {
      pc(X, ne[X]);
    });
  }
  u && br(u, e, "c");
  function Z(ne, X) {
    I(X) ? X.forEach((at) => ne(at.bind(n))) : X && ne(X.bind(n));
  }
  if (
    (Z(Zl, h),
      Z(qo, g),
      Z(Xl, v),
      Z(Yl, w),
      Z(Ac, C),
      Z(Oc, D),
      Z(rc, N),
      Z(sc, k),
      Z(nc, q),
      Z(ec, J),
      Z(Vo, K),
      Z(tc, V),
      I(se))
  )
    if (se.length) {
      const ne = e.exposed || (e.exposed = {});
      se.forEach((X) => {
        Object.defineProperty(ne, X, { get: () => n[X], set: (at) => (n[X] = at) });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === Re && (e.render = W),
    ae != null && (e.inheritAttrs = ae),
    Ie && (e.components = Ie),
    wt && (e.directives = wt);
}
function cc(e, t, n = Re) {
  I(e) && (e = ps(e));
  for (const s in e) {
    const r = e[s];
    let o;
    te(r)
      ? "default" in r
        ? (o = qt(r.from || s, r.default, !0))
        : (o = qt(r.from || s))
      : (o = qt(r)),
      ie(o)
        ? Object.defineProperty(t, s, {
          enumerable: !0,
          configurable: !0,
          get: () => o.value,
          set: (i) => (o.value = i),
        })
        : (t[s] = o);
  }
}
function br(e, t, n) {
  Pe(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wo(e, t, n, s) {
  const r = s.includes(".") ? ri(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    j(o) && pn(r, o);
  } else if (j(e)) pn(r, e.bind(n));
  else if (te(e))
    if (I(e)) e.forEach((o) => Wo(o, t, n, s));
    else {
      const o = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(o) && pn(r, o, e);
    }
}
function Ks(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach((a) => vn(c, a, i, !0)), vn(c, t, i)),
    te(t) && o.set(t, c),
    c
  );
}
function vn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && vn(e, o, n, !0), r && r.forEach((i) => vn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = uc[i] || (n && n[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const uc = {
  data: wr,
  props: xr,
  emits: xr,
  methods: Bt,
  computed: Bt,
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  components: Bt,
  directives: Bt,
  watch: fc,
  provide: wr,
  inject: ac,
};
function wr(e, t) {
  return t
    ? e
      ? function () {
        return de(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t);
      }
      : t
    : e;
}
function ac(e, t) {
  return Bt(ps(e), ps(t));
}
function ps(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bt(e, t) {
  return e ? de(Object.create(null), e, t) : t;
}
function xr(e, t) {
  return e
    ? I(e) && I(t)
      ? [...new Set([...e, ...t])]
      : de(Object.create(null), yr(e), yr(t ?? {}))
    : t;
}
function fc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(Object.create(null), e);
  for (const s in t) n[s] = ye(e[s], t[s]);
  return n;
}
function zo() {
  return {
    app: null,
    config: {
      isNativeTag: Ji,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let dc = 0;
function hc(e, t) {
  return function (s, r = null) {
    j(s) || (s = de({}, s)), r != null && !te(r) && (r = null);
    const o = zo(),
      i = new WeakSet();
    let l = !1;
    const c = (o.app = {
      _uid: dc++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: zc,
      get config() {
        return o.config;
      },
      set config(a) { },
      use(a, ...u) {
        return (
          i.has(a) ||
          (a && j(a.install) ? (i.add(a), a.install(c, ...u)) : j(a) && (i.add(a), a(c, ...u))),
          c
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c;
      },
      component(a, u) {
        return u ? ((o.components[a] = u), c) : o.components[a];
      },
      directive(a, u) {
        return u ? ((o.directives[a] = u), c) : o.directives[a];
      },
      mount(a, u, h) {
        if (!l) {
          const g = re(s, r);
          return (
            (g.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            u && t ? t(g, a) : e(g, a, h),
            (l = !0),
            (c._container = a),
            (a.__vue_app__ = c),
            jn(g.component)
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, u) {
        return (o.provides[a] = u), c;
      },
      runWithContext(a) {
        const u = Tt;
        Tt = c;
        try {
          return a();
        } finally {
          Tt = u;
        }
      },
    });
    return c;
  };
}
let Tt = null;
function pc(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), (n[e] = t);
  }
}
function qt(e, t, n = !1) {
  const s = ge || he;
  if (s || Tt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Tt._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && j(t) ? t.call(s && s.proxy) : t;
  }
}
function mc() {
  return !!(ge || he || Tt);
}
const Go = {},
  Jo = () => Object.create(Go),
  Qo = (e) => Object.getPrototypeOf(e) === Go;
function gc(e, t, n, s = !1) {
  const r = {},
    o = Jo();
  (e.propsDefaults = Object.create(null)), Zo(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : Ol(r)) : e.type.props ? (e.props = r) : (e.props = o), (e.attrs = o);
}
function _c(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i },
  } = e,
    l = G(r),
    [c] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let g = u[h];
        if ($n(e.emitsOptions, g)) continue;
        const v = t[g];
        if (c)
          if (z(o, g)) v !== o[g] && ((o[g] = v), (a = !0));
          else {
            const w = At(g);
            r[w] = ms(c, l, w, v, e, !1);
          }
        else v !== o[g] && ((o[g] = v), (a = !0));
      }
    }
  } else {
    Zo(e, t, r, o) && (a = !0);
    let u;
    for (const h in l)
      (!t || (!z(t, h) && ((u = Lt(h)) === h || !z(t, u)))) &&
        (c
          ? n && (n[h] !== void 0 || n[u] !== void 0) && (r[h] = ms(c, l, h, void 0, e, !0))
          : delete r[h]);
    if (o !== l) for (const h in o) (!t || !z(t, h)) && (delete o[h], (a = !0));
  }
  a && We(e.attrs, "set", "");
}
function Zo(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let c in t) {
      if (Ht(c)) continue;
      const a = t[c];
      let u;
      r && z(r, (u = At(c)))
        ? !o || !o.includes(u)
          ? (n[u] = a)
          : ((l || (l = {}))[u] = a)
        : $n(e.emitsOptions, c) || ((!(c in s) || a !== s[c]) && ((s[c] = a), (i = !0)));
    }
  if (o) {
    const c = G(n),
      a = l || ee;
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      n[h] = ms(r, c, h, a[h], e, !z(a, h));
    }
  }
  return i;
}
function ms(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = z(i, "default");
    if (l && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && j(c)) {
        const { propsDefaults: a } = r;
        if (n in a) s = a[n];
        else {
          const u = Yt(r);
          (s = a[n] = c.call(null, t)), u();
        }
      } else s = c;
    }
    i[0] && (o && !l ? (s = !1) : i[1] && (s === "" || s === Lt(n)) && (s = !0));
  }
  return s;
}
function Xo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let c = !1;
  if (!j(e)) {
    const u = (h) => {
      c = !0;
      const [g, v] = Xo(h, t, !0);
      de(i, g), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!o && !c) return te(e) && s.set(e, St), St;
  if (I(o))
    for (let u = 0; u < o.length; u++) {
      const h = At(o[u]);
      vr(h) && (i[h] = ee);
    }
  else if (o)
    for (const u in o) {
      const h = At(u);
      if (vr(h)) {
        const g = o[u],
          v = (i[h] = I(g) || j(g) ? { type: g } : de({}, g));
        if (v) {
          const w = Cr(Boolean, v.type),
            C = Cr(String, v.type);
          (v[0] = w > -1), (v[1] = C < 0 || w < C), (w > -1 || z(v, "default")) && l.push(h);
        }
      }
    }
  const a = [i, l];
  return te(e) && s.set(e, a), a;
}
function vr(e) {
  return e[0] !== "$" && !Ht(e);
}
function Er(e) {
  return e === null
    ? "null"
    : typeof e == "function"
      ? e.name || ""
      : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Sr(e, t) {
  return Er(e) === Er(t);
}
function Cr(e, t) {
  return I(t) ? t.findIndex((n) => Sr(n, e)) : j(t) && Sr(t, e) ? 0 : -1;
}
const Yo = (e) => e[0] === "_" || e === "$stable",
  Ws = (e) => (I(e) ? e.map(Be) : [Be(e)]),
  yc = (e, t, n) => {
    if (t._n) return t;
    const s = mt((...r) => Ws(t(...r)), n);
    return (s._c = !1), s;
  },
  ei = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (Yo(r)) continue;
      const o = e[r];
      if (j(o)) t[r] = yc(r, o, s);
      else if (o != null) {
        const i = Ws(o);
        t[r] = () => i;
      }
    }
  },
  ti = (e, t) => {
    const n = Ws(t);
    e.slots.default = () => n;
  },
  bc = (e, t) => {
    const n = (e.slots = Jo());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (de(n, t), ao(n, "_", s, !0)) : ei(t, n);
    } else t && ti(e, t);
  },
  wc = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = ee;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (de(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), ei(t, r)),
        (i = t);
    } else t && (ti(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !Yo(l) && i[l] == null && delete r[l];
  };
function gs(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach((g, v) => gs(g, t && (I(t) ? t[v] : t), n, s, r));
    return;
  }
  if (Ut(s) && !r) return;
  const o = s.shapeFlag & 4 ? jn(s.component) : s.el,
    i = r ? null : o,
    { i: l, r: c } = e,
    a = t && t.r,
    u = l.refs === ee ? (l.refs = {}) : l.refs,
    h = l.setupState;
  if (
    (a != null &&
      a !== c &&
      (le(a) ? ((u[a] = null), z(h, a) && (h[a] = null)) : ie(a) && (a.value = null)),
      j(c))
  )
    rt(c, l, 12, [i, u]);
  else {
    const g = le(c),
      v = ie(c);
    if (g || v) {
      const w = () => {
        if (e.f) {
          const C = g ? (z(h, c) ? h[c] : u[c]) : c.value;
          r
            ? I(C) && ks(C, o)
            : I(C)
              ? C.includes(o) || C.push(o)
              : g
                ? ((u[c] = [o]), z(h, c) && (h[c] = u[c]))
                : ((c.value = [o]), e.k && (u[e.k] = c.value));
        } else g ? ((u[c] = i), z(h, c) && (h[c] = i)) : v && ((c.value = i), e.k && (u[e.k] = i));
      };
      i ? ((w.id = -1), we(w, n)) : w();
    }
  }
}
const we = Ql;
function xc(e) {
  return vc(e);
}
function vc(e, t) {
  const n = fo();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: u,
    parentNode: h,
    nextSibling: g,
    setScopeId: v = Re,
    insertStaticContent: w,
  } = e,
    C = (f, d, m, _ = null, y = null, E = null, T = void 0, x = null, S = !!d.dynamicChildren) => {
      if (f === d) return;
      f && !Ft(f, d) && ((_ = sn(f)), Fe(f, y, E, !0), (f = null)),
        d.patchFlag === -2 && ((S = !1), (d.dynamicChildren = null));
      const { type: b, ref: A, shapeFlag: $ } = d;
      switch (b) {
        case Fn:
          D(f, d, m, _);
          break;
        case it:
          H(f, d, m, _);
          break;
        case Xn:
          f == null && J(d, m, _, T);
          break;
        case pe:
          Ie(f, d, m, _, y, E, T, x, S);
          break;
        default:
          $ & 1
            ? W(f, d, m, _, y, E, T, x, S)
            : $ & 6
              ? wt(f, d, m, _, y, E, T, x, S)
              : ($ & 64 || $ & 128) && b.process(f, d, m, _, y, E, T, x, S, Nt);
      }
      A != null && y && gs(A, f && f.ref, E, d || f, !d);
    },
    D = (f, d, m, _) => {
      if (f == null) s((d.el = l(d.children)), m, _);
      else {
        const y = (d.el = f.el);
        d.children !== f.children && a(y, d.children);
      }
    },
    H = (f, d, m, _) => {
      f == null ? s((d.el = c(d.children || "")), m, _) : (d.el = f.el);
    },
    J = (f, d, m, _) => {
      [f.el, f.anchor] = w(f.children, d, m, _, f.el, f.anchor);
    },
    R = ({ el: f, anchor: d }, m, _) => {
      let y;
      for (; f && f !== d;) (y = g(f)), s(f, m, _), (f = y);
      s(d, m, _);
    },
    K = ({ el: f, anchor: d }) => {
      let m;
      for (; f && f !== d;) (m = g(f)), r(f), (f = m);
      r(d);
    },
    W = (f, d, m, _, y, E, T, x, S) => {
      d.type === "svg" ? (T = "svg") : d.type === "math" && (T = "mathml"),
        f == null ? k(d, m, _, y, E, T, x, S) : V(f, d, y, E, T, x, S);
    },
    k = (f, d, m, _, y, E, T, x) => {
      let S, b;
      const { props: A, shapeFlag: $, transition: L, dirs: F } = f;
      if (
        ((S = f.el = i(f.type, E, A && A.is, A)),
          $ & 8 ? u(S, f.children) : $ & 16 && N(f.children, S, null, _, y, Zn(f, E), T, x),
          F && dt(f, null, _, "created"),
          q(S, f, f.scopeId, T, _),
          A)
      ) {
        for (const Y in A) Y !== "value" && !Ht(Y) && o(S, Y, null, A[Y], E, f.children, _, y, Ue);
        "value" in A && o(S, "value", null, A.value, E), (b = A.onVnodeBeforeMount) && je(b, _, f);
      }
      F && dt(f, null, _, "beforeMount");
      const U = Ec(y, L);
      U && L.beforeEnter(S),
        s(S, d, m),
        ((b = A && A.onVnodeMounted) || U || F) &&
        we(() => {
          b && je(b, _, f), U && L.enter(S), F && dt(f, null, _, "mounted");
        }, y);
    },
    q = (f, d, m, _, y) => {
      if ((m && v(f, m), _)) for (let E = 0; E < _.length; E++) v(f, _[E]);
      if (y) {
        let E = y.subTree;
        if (d === E) {
          const T = y.vnode;
          q(f, T, T.scopeId, T.slotScopeIds, y.parent);
        }
      }
    },
    N = (f, d, m, _, y, E, T, x, S = 0) => {
      for (let b = S; b < f.length; b++) {
        const A = (f[b] = x ? et(f[b]) : Be(f[b]));
        C(null, A, d, m, _, y, E, T, x);
      }
    },
    V = (f, d, m, _, y, E, T) => {
      const x = (d.el = f.el);
      let { patchFlag: S, dynamicChildren: b, dirs: A } = d;
      S |= f.patchFlag & 16;
      const $ = f.props || ee,
        L = d.props || ee;
      let F;
      if (
        (m && ht(m, !1),
          (F = L.onVnodeBeforeUpdate) && je(F, m, d, f),
          A && dt(d, f, m, "beforeUpdate"),
          m && ht(m, !0),
          b
            ? se(f.dynamicChildren, b, x, m, _, Zn(d, y), E)
            : T || X(f, d, x, null, m, _, Zn(d, y), E, !1),
          S > 0)
      ) {
        if (S & 16) ae(x, d, $, L, m, _, y);
        else if (
          (S & 2 && $.class !== L.class && o(x, "class", null, L.class, y),
            S & 4 && o(x, "style", $.style, L.style, y),
            S & 8)
        ) {
          const U = d.dynamicProps;
          for (let Y = 0; Y < U.length; Y++) {
            const Q = U[Y],
              fe = $[Q],
              Oe = L[Q];
            (Oe !== fe || Q === "value") && o(x, Q, fe, Oe, y, f.children, m, _, Ue);
          }
        }
        S & 1 && f.children !== d.children && u(x, d.children);
      } else !T && b == null && ae(x, d, $, L, m, _, y);
      ((F = L.onVnodeUpdated) || A) &&
        we(() => {
          F && je(F, m, d, f), A && dt(d, f, m, "updated");
        }, _);
    },
    se = (f, d, m, _, y, E, T) => {
      for (let x = 0; x < d.length; x++) {
        const S = f[x],
          b = d[x],
          A = S.el && (S.type === pe || !Ft(S, b) || S.shapeFlag & 70) ? h(S.el) : m;
        C(S, b, A, null, _, y, E, T, !0);
      }
    },
    ae = (f, d, m, _, y, E, T) => {
      if (m !== _) {
        if (m !== ee)
          for (const x in m) !Ht(x) && !(x in _) && o(f, x, m[x], null, T, d.children, y, E, Ue);
        for (const x in _) {
          if (Ht(x)) continue;
          const S = _[x],
            b = m[x];
          S !== b && x !== "value" && o(f, x, b, S, T, d.children, y, E, Ue);
        }
        "value" in _ && o(f, "value", m.value, _.value, T);
      }
    },
    Ie = (f, d, m, _, y, E, T, x, S) => {
      const b = (d.el = f ? f.el : l("")),
        A = (d.anchor = f ? f.anchor : l(""));
      let { patchFlag: $, dynamicChildren: L, slotScopeIds: F } = d;
      F && (x = x ? x.concat(F) : F),
        f == null
          ? (s(b, m, _), s(A, m, _), N(d.children || [], m, A, y, E, T, x, S))
          : $ > 0 && $ & 64 && L && f.dynamicChildren
            ? (se(f.dynamicChildren, L, m, y, E, T, x),
              (d.key != null || (y && d === y.subTree)) && zs(f, d, !0))
            : X(f, d, m, A, y, E, T, x, S);
    },
    wt = (f, d, m, _, y, E, T, x, S) => {
      (d.slotScopeIds = x),
        f == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, m, _, T, S)
            : $t(d, m, _, y, E, T, S)
          : Je(f, d, S);
    },
    $t = (f, d, m, _, y, E, T) => {
      const x = (f.component = Uc(f, _, y));
      if ((oi(f) && (x.ctx.renderer = Nt), Dc(x), x.asyncDep)) {
        if ((y && y.registerDep(x, Z, T), !f.el)) {
          const S = (x.subTree = re(it));
          H(null, S, d, m);
        }
      } else Z(x, f, d, m, y, E, T);
    },
    Je = (f, d, m) => {
      const _ = (d.component = f.component);
      if (Wl(f, d, m))
        if (_.asyncDep && !_.asyncResolved) {
          ne(_, d, m);
          return;
        } else (_.next = d), Hl(_.update), (_.effect.dirty = !0), _.update();
      else (d.el = f.el), (_.vnode = d);
    },
    Z = (f, d, m, _, y, E, T) => {
      const x = () => {
        if (f.isMounted) {
          let { next: A, bu: $, u: L, parent: F, vnode: U } = f;
          {
            const xt = ni(f);
            if (xt) {
              A && ((A.el = U.el), ne(f, A, T)),
                xt.asyncDep.then(() => {
                  f.isUnmounted || x();
                });
              return;
            }
          }
          let Y = A,
            Q;
          ht(f, !1),
            A ? ((A.el = U.el), ne(f, A, T)) : (A = U),
            $ && zn($),
            (Q = A.props && A.props.onVnodeBeforeUpdate) && je(Q, F, A, U),
            ht(f, !0);
          const fe = Jn(f),
            Oe = f.subTree;
          (f.subTree = fe),
            C(Oe, fe, h(Oe.el), sn(Oe), f, y, E),
            (A.el = fe.el),
            Y === null && zl(f, fe.el),
            L && we(L, y),
            (Q = A.props && A.props.onVnodeUpdated) && we(() => je(Q, F, A, U), y);
        } else {
          let A;
          const { el: $, props: L } = d,
            { bm: F, m: U, parent: Y } = f,
            Q = Ut(d);
          if (
            (ht(f, !1),
              F && zn(F),
              !Q && (A = L && L.onVnodeBeforeMount) && je(A, Y, d),
              ht(f, !0),
              $ && rr)
          ) {
            const fe = () => {
              (f.subTree = Jn(f)), rr($, f.subTree, f, y, null);
            };
            Q ? d.type.__asyncLoader().then(() => !f.isUnmounted && fe()) : fe();
          } else {
            const fe = (f.subTree = Jn(f));
            C(null, fe, m, _, f, y, E), (d.el = fe.el);
          }
          if ((U && we(U, y), !Q && (A = L && L.onVnodeMounted))) {
            const fe = d;
            we(() => je(A, Y, fe), y);
          }
          (d.shapeFlag & 256 || (Y && Ut(Y.vnode) && Y.vnode.shapeFlag & 256)) &&
            f.a &&
            we(f.a, y),
            (f.isMounted = !0),
            (d = m = _ = null);
        }
      },
        S = (f.effect = new Is(x, Re, () => Vs(b), f.scope)),
        b = (f.update = () => {
          S.dirty && S.run();
        });
      (b.id = f.uid), ht(f, !0), b();
    },
    ne = (f, d, m) => {
      d.component = f;
      const _ = f.vnode.props;
      (f.vnode = d), (f.next = null), _c(f, d.props, _, m), wc(f, d.children, m), ct(), gr(f), ut();
    },
    X = (f, d, m, _, y, E, T, x, S = !1) => {
      const b = f && f.children,
        A = f ? f.shapeFlag : 0,
        $ = d.children,
        { patchFlag: L, shapeFlag: F } = d;
      if (L > 0) {
        if (L & 128) {
          nn(b, $, m, _, y, E, T, x, S);
          return;
        } else if (L & 256) {
          at(b, $, m, _, y, E, T, x, S);
          return;
        }
      }
      F & 8
        ? (A & 16 && Ue(b, y, E), $ !== b && u(m, $))
        : A & 16
          ? F & 16
            ? nn(b, $, m, _, y, E, T, x, S)
            : Ue(b, y, E, !0)
          : (A & 8 && u(m, ""), F & 16 && N($, m, _, y, E, T, x, S));
    },
    at = (f, d, m, _, y, E, T, x, S) => {
      (f = f || St), (d = d || St);
      const b = f.length,
        A = d.length,
        $ = Math.min(b, A);
      let L;
      for (L = 0; L < $; L++) {
        const F = (d[L] = S ? et(d[L]) : Be(d[L]));
        C(f[L], F, m, null, y, E, T, x, S);
      }
      b > A ? Ue(f, y, E, !0, !1, $) : N(d, m, _, y, E, T, x, S, $);
    },
    nn = (f, d, m, _, y, E, T, x, S) => {
      let b = 0;
      const A = d.length;
      let $ = f.length - 1,
        L = A - 1;
      for (; b <= $ && b <= L;) {
        const F = f[b],
          U = (d[b] = S ? et(d[b]) : Be(d[b]));
        if (Ft(F, U)) C(F, U, m, null, y, E, T, x, S);
        else break;
        b++;
      }
      for (; b <= $ && b <= L;) {
        const F = f[$],
          U = (d[L] = S ? et(d[L]) : Be(d[L]));
        if (Ft(F, U)) C(F, U, m, null, y, E, T, x, S);
        else break;
        $--, L--;
      }
      if (b > $) {
        if (b <= L) {
          const F = L + 1,
            U = F < A ? d[F].el : _;
          for (; b <= L;) C(null, (d[b] = S ? et(d[b]) : Be(d[b])), m, U, y, E, T, x, S), b++;
        }
      } else if (b > L) for (; b <= $;) Fe(f[b], y, E, !0), b++;
      else {
        const F = b,
          U = b,
          Y = new Map();
        for (b = U; b <= L; b++) {
          const Se = (d[b] = S ? et(d[b]) : Be(d[b]));
          Se.key != null && Y.set(Se.key, b);
        }
        let Q,
          fe = 0;
        const Oe = L - U + 1;
        let xt = !1,
          or = 0;
        const It = new Array(Oe);
        for (b = 0; b < Oe; b++) It[b] = 0;
        for (b = F; b <= $; b++) {
          const Se = f[b];
          if (fe >= Oe) {
            Fe(Se, y, E, !0);
            continue;
          }
          let Me;
          if (Se.key != null) Me = Y.get(Se.key);
          else
            for (Q = U; Q <= L; Q++)
              if (It[Q - U] === 0 && Ft(Se, d[Q])) {
                Me = Q;
                break;
              }
          Me === void 0
            ? Fe(Se, y, E, !0)
            : ((It[Me - U] = b + 1),
              Me >= or ? (or = Me) : (xt = !0),
              C(Se, d[Me], m, null, y, E, T, x, S),
              fe++);
        }
        const ir = xt ? Sc(It) : St;
        for (Q = ir.length - 1, b = Oe - 1; b >= 0; b--) {
          const Se = U + b,
            Me = d[Se],
            lr = Se + 1 < A ? d[Se + 1].el : _;
          It[b] === 0
            ? C(null, Me, m, lr, y, E, T, x, S)
            : xt && (Q < 0 || b !== ir[Q] ? ft(Me, m, lr, 2) : Q--);
        }
      }
    },
    ft = (f, d, m, _, y = null) => {
      const { el: E, type: T, transition: x, children: S, shapeFlag: b } = f;
      if (b & 6) {
        ft(f.component.subTree, d, m, _);
        return;
      }
      if (b & 128) {
        f.suspense.move(d, m, _);
        return;
      }
      if (b & 64) {
        T.move(f, d, m, Nt);
        return;
      }
      if (T === pe) {
        s(E, d, m);
        for (let $ = 0; $ < S.length; $++) ft(S[$], d, m, _);
        s(f.anchor, d, m);
        return;
      }
      if (T === Xn) {
        R(f, d, m);
        return;
      }
      if (_ !== 2 && b & 1 && x)
        if (_ === 0) x.beforeEnter(E), s(E, d, m), we(() => x.enter(E), y);
        else {
          const { leave: $, delayLeave: L, afterLeave: F } = x,
            U = () => s(E, d, m),
            Y = () => {
              $(E, () => {
                U(), F && F();
              });
            };
          L ? L(E, U, Y) : Y();
        }
      else s(E, d, m);
    },
    Fe = (f, d, m, _ = !1, y = !1) => {
      const {
        type: E,
        props: T,
        ref: x,
        children: S,
        dynamicChildren: b,
        shapeFlag: A,
        patchFlag: $,
        dirs: L,
        memoIndex: F,
      } = f;
      if (
        ($ === -2 && (y = !1),
          x != null && gs(x, null, m, f, !0),
          F != null && (d.renderCache[F] = void 0),
          A & 256)
      ) {
        d.ctx.deactivate(f);
        return;
      }
      const U = A & 1 && L,
        Y = !Ut(f);
      let Q;
      if ((Y && (Q = T && T.onVnodeBeforeUnmount) && je(Q, d, f), A & 6)) Gi(f.component, m, _);
      else {
        if (A & 128) {
          f.suspense.unmount(m, _);
          return;
        }
        U && dt(f, null, d, "beforeUnmount"),
          A & 64
            ? f.type.remove(f, d, m, Nt, _)
            : b && (E !== pe || ($ > 0 && $ & 64))
              ? Ue(b, d, m, !1, !0)
              : ((E === pe && $ & 384) || (!y && A & 16)) && Ue(S, d, m),
          _ && tr(f);
      }
      ((Y && (Q = T && T.onVnodeUnmounted)) || U) &&
        we(() => {
          Q && je(Q, d, f), U && dt(f, null, d, "unmounted");
        }, m);
    },
    tr = (f) => {
      const { type: d, el: m, anchor: _, transition: y } = f;
      if (d === pe) {
        zi(m, _);
        return;
      }
      if (d === Xn) {
        K(f);
        return;
      }
      const E = () => {
        r(m), y && !y.persisted && y.afterLeave && y.afterLeave();
      };
      if (f.shapeFlag & 1 && y && !y.persisted) {
        const { leave: T, delayLeave: x } = y,
          S = () => T(m, E);
        x ? x(f.el, E, S) : S();
      } else E();
    },
    zi = (f, d) => {
      let m;
      for (; f !== d;) (m = g(f)), r(f), (f = m);
      r(d);
    },
    Gi = (f, d, m) => {
      const { bum: _, scope: y, update: E, subTree: T, um: x, m: S, a: b } = f;
      Rr(S),
        Rr(b),
        _ && zn(_),
        y.stop(),
        E && ((E.active = !1), Fe(T, f, d, m)),
        x && we(x, d),
        we(() => {
          f.isUnmounted = !0;
        }, d),
        d &&
        d.pendingBranch &&
        !d.isUnmounted &&
        f.asyncDep &&
        !f.asyncResolved &&
        f.suspenseId === d.pendingId &&
        (d.deps--, d.deps === 0 && d.resolve());
    },
    Ue = (f, d, m, _ = !1, y = !1, E = 0) => {
      for (let T = E; T < f.length; T++) Fe(f[T], d, m, _, y);
    },
    sn = (f) =>
      f.shapeFlag & 6
        ? sn(f.component.subTree)
        : f.shapeFlag & 128
          ? f.suspense.next()
          : g(f.anchor || f.el);
  let Kn = !1;
  const nr = (f, d, m) => {
    f == null
      ? d._vnode && Fe(d._vnode, null, null, !0)
      : C(d._vnode || null, f, d, null, null, null, m),
      Kn || ((Kn = !0), gr(), Bo(), (Kn = !1)),
      (d._vnode = f);
  },
    Nt = { p: C, um: Fe, m: ft, r: tr, mt: $t, mc: N, pc: X, pbc: se, n: sn, o: e };
  let sr, rr;
  return { render: nr, hydrate: sr, createApp: hc(nr, sr) };
}
function Zn({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html"))
    ? void 0
    : n;
}
function ht({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ec(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function zs(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (I(s) && I(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[o] = et(r[o])), (l.el = i.el)),
          !n && l.patchFlag !== -2 && zs(i, l)),
        l.type === Fn && (l.el = i.el);
    }
}
function Sc(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i;)
        (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0;) (n[o] = i), (i = t[i]);
  return n;
}
function ni(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ni(t);
}
function Rr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const Cc = Symbol.for("v-scx"),
  Rc = () => qt(Cc),
  fn = {};
function pn(e, t, n) {
  return si(e, t, n);
}
function si(e, t, { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: l } = ee) {
  if (t && o) {
    const k = t;
    t = (...q) => {
      k(...q), W();
    };
  }
  const c = ge,
    a = (k) => (s === !0 ? k : tt(k, s === !1 ? 1 : void 0));
  let u,
    h = !1,
    g = !1;
  if (
    (ie(e)
      ? ((u = () => e.value), (h = wn(e)))
      : st(e)
        ? ((u = () => a(e)), (h = !0))
        : I(e)
          ? ((g = !0),
            (h = e.some((k) => st(k) || wn(k))),
            (u = () =>
              e.map((k) => {
                if (ie(k)) return k.value;
                if (st(k)) return a(k);
                if (j(k)) return rt(k, c, 2);
              })))
          : j(e)
            ? t
              ? (u = () => rt(e, c, 2))
              : (u = () => (v && v(), Pe(e, c, 3, [w])))
            : (u = Re),
      t && s)
  ) {
    const k = u;
    u = () => tt(k());
  }
  let v,
    w = (k) => {
      v = R.onStop = () => {
        rt(k, c, 4), (v = R.onStop = void 0);
      };
    },
    C;
  if (Mn)
    if (((w = Re), t ? n && Pe(t, c, 3, [u(), g ? [] : void 0, w]) : u(), r === "sync")) {
      const k = Rc();
      C = k.__watcherHandles || (k.__watcherHandles = []);
    } else return Re;
  let D = g ? new Array(e.length).fill(fn) : fn;
  const H = () => {
    if (!(!R.active || !R.dirty))
      if (t) {
        const k = R.run();
        (s || h || (g ? k.some((q, N) => ot(q, D[N])) : ot(k, D))) &&
          (v && v(), Pe(t, c, 3, [k, D === fn ? void 0 : g && D[0] === fn ? [] : D, w]), (D = k));
      } else R.run();
  };
  H.allowRecurse = !!t;
  let J;
  r === "sync"
    ? (J = H)
    : r === "post"
      ? (J = () => we(H, c && c.suspense))
      : ((H.pre = !0), c && (H.id = c.uid), (J = () => Vs(H)));
  const R = new Is(u, Re, J),
    K = yo(),
    W = () => {
      R.stop(), K && ks(K.effects, R);
    };
  return (
    t ? (n ? H() : (D = R.run())) : r === "post" ? we(R.run.bind(R), c && c.suspense) : R.run(),
    C && C.push(W),
    W
  );
}
function Tc(e, t, n) {
  const s = this.proxy,
    r = le(e) ? (e.includes(".") ? ri(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  j(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Yt(this),
    l = si(r, o.bind(s), n);
  return i(), l;
}
function ri(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function tt(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
  if ((n.add(e), t--, ie(e))) tt(e.value, t, n);
  else if (I(e)) for (let s = 0; s < e.length; s++) tt(e[s], t, n);
  else if (oo(e) || Ct(e))
    e.forEach((s) => {
      tt(s, t, n);
    });
  else if (co(e)) {
    for (const s in e) tt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && tt(e[s], t, n);
  }
  return e;
}
const oi = (e) => e.type.__isKeepAlive;
function Ac(e, t) {
  ii(e, "a", t);
}
function Oc(e, t) {
  ii(e, "da", t);
}
function ii(e, t, n = ge) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r;) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Nn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent;) oi(r.parent.vnode) && Lc(s, t, n, r), (r = r.parent);
  }
}
function Lc(e, t, n, s) {
  const r = Nn(t, e, s, !0);
  Vo(() => {
    ks(s[t], r);
  }, n);
}
function li(e, t) {
  e.shapeFlag & 6 && e.component
    ? li(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
const Pc = (e) => e.__isTeleport,
  Vt = (e) => e && (e.disabled || e.disabled === ""),
  Tr = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  Ar = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  _s = (e, t) => {
    const n = e && e.to;
    return le(n) ? (t ? t(n) : null) : n;
  },
  kc = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, s, r, o, i, l, c, a) {
      const {
        mc: u,
        pc: h,
        pbc: g,
        o: { insert: v, querySelector: w, createText: C, createComment: D },
      } = a,
        H = Vt(t.props);
      let { shapeFlag: J, children: R, dynamicChildren: K } = t;
      if (e == null) {
        const W = (t.el = C("")),
          k = (t.anchor = C(""));
        v(W, n, s), v(k, n, s);
        const q = (t.target = _s(t.props, w)),
          N = (t.targetAnchor = C(""));
        q &&
          (v(N, q),
            i === "svg" || Tr(q) ? (i = "svg") : (i === "mathml" || Ar(q)) && (i = "mathml"));
        const V = (se, ae) => {
          J & 16 && u(R, se, ae, r, o, i, l, c);
        };
        H ? V(n, k) : q && V(q, N);
      } else {
        t.el = e.el;
        const W = (t.anchor = e.anchor),
          k = (t.target = e.target),
          q = (t.targetAnchor = e.targetAnchor),
          N = Vt(e.props),
          V = N ? n : k,
          se = N ? W : q;
        if (
          (i === "svg" || Tr(k) ? (i = "svg") : (i === "mathml" || Ar(k)) && (i = "mathml"),
            K
              ? (g(e.dynamicChildren, K, V, r, o, i, l), zs(e, t, !0))
              : c || h(e, t, V, se, r, o, i, l, !1),
            H)
        )
          N
            ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to)
            : dn(t, n, W, a, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const ae = (t.target = _s(t.props, w));
          ae && dn(t, ae, null, a, 0);
        } else N && dn(t, k, q, a, 1);
      }
      ci(t);
    },
    remove(e, t, n, { um: s, o: { remove: r } }, o) {
      const { shapeFlag: i, children: l, anchor: c, targetAnchor: a, target: u, props: h } = e;
      if ((u && r(a), o && r(c), i & 16)) {
        const g = o || !Vt(h);
        for (let v = 0; v < l.length; v++) {
          const w = l[v];
          s(w, t, n, g, !!w.dynamicChildren);
        }
      }
    },
    move: dn,
    hydrate: $c,
  };
function dn(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: c, children: a, props: u } = e,
    h = o === 2;
  if ((h && s(i, t, n), (!h || Vt(u)) && c & 16))
    for (let g = 0; g < a.length; g++) r(a[g], t, n, 2);
  h && s(l, t, n);
}
function $c(e, t, n, s, r, o, { o: { nextSibling: i, parentNode: l, querySelector: c } }, a) {
  const u = (t.target = _s(t.props, c));
  if (u) {
    const h = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Vt(t.props)) (t.anchor = a(i(e), t, l(e), n, s, r, o)), (t.targetAnchor = h);
      else {
        t.anchor = i(e);
        let g = h;
        for (; g;)
          if (((g = i(g)), g && g.nodeType === 8 && g.data === "teleport anchor")) {
            (t.targetAnchor = g), (u._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        a(h, t, u, n, s, r, o);
      }
    ci(t);
  }
  return t.anchor && i(t.anchor);
}
const Nc = kc;
function ci(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor;)
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), (n = n.nextSibling);
    t.ut();
  }
}
const pe = Symbol.for("v-fgt"),
  Fn = Symbol.for("v-txt"),
  it = Symbol.for("v-cmt"),
  Xn = Symbol.for("v-stc"),
  Kt = [];
let Le = null;
function O(e = !1) {
  Kt.push((Le = e ? null : []));
}
function Ic() {
  Kt.pop(), (Le = Kt[Kt.length - 1] || null);
}
let Zt = 1;
function Or(e) {
  Zt += e;
}
function ui(e) {
  return (e.dynamicChildren = Zt > 0 ? Le || St : null), Ic(), Zt > 0 && Le && Le.push(e), e;
}
function B(e, t, n, s, r, o) {
  return ui(P(e, t, n, s, r, o, !0));
}
function _e(e, t, n, s, r) {
  return ui(re(e, t, n, s, r, !0));
}
function ai(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fi = ({ key: e }) => e ?? null,
  mn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null ? (le(e) || ie(e) || j(e) ? { i: he, r: e, k: t, f: !!n } : e) : null
  );
function P(e, t = null, n = null, s = 0, r = null, o = e === pe ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fi(t),
    ref: t && mn(t),
    scopeId: Do,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he,
  };
  return (
    l ? (Gs(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= le(n) ? 8 : 16),
    Zt > 0 && !i && Le && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Le.push(c),
    c
  );
}
const re = Fc;
function Fc(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Gl) && (e = it), ai(e))) {
    const l = Ot(e, t, !0);
    return (
      n && Gs(l, n),
      Zt > 0 && !o && Le && (l.shapeFlag & 6 ? (Le[Le.indexOf(e)] = l) : Le.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Wc(e) && (e = e.__vccOpts), t)) {
    t = Mc(t);
    let { class: l, style: c } = t;
    l && !le(l) && (t.class = Ke(l)),
      te(c) && (Po(c) && !I(c) && (c = de({}, c)), (t.style = Ns(c)));
  }
  const i = le(e) ? 1 : Jl(e) ? 128 : Pc(e) ? 64 : te(e) ? 4 : j(e) ? 2 : 0;
  return P(e, t, n, s, r, i, o, !0);
}
function Mc(e) {
  return e ? (Po(e) || Qo(e) ? de({}, e) : e) : null;
}
function Ot(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: c } = e,
    a = t ? jc(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && fi(a),
      ref: t && t.ref ? (n && o ? (I(o) ? o.concat(mn(t)) : [o, mn(t)]) : mn(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== pe ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ot(e.ssContent),
      ssFallback: e.ssFallback && Ot(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return c && s && li(u, c.clone(u)), u;
}
function Ve(e = " ", t = 0) {
  return re(Fn, null, e, t);
}
function Te(e = "", t = !1) {
  return t ? (O(), _e(it, null, e)) : re(it, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean"
    ? re(it)
    : I(e)
      ? re(pe, null, e.slice())
      : typeof e == "object"
        ? et(e)
        : re(Fn, null, String(e));
}
function et(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ot(e);
}
function Gs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (I(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Gs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Qo(t)
        ? (t._ctx = he)
        : r === 3 && he && (he.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    j(t)
      ? ((t = { default: t, _ctx: he }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Ve(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function jc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class") t.class !== s.class && (t.class = Ke([t.class, s.class]));
      else if (r === "style") t.style = Ns([t.style, s.style]);
      else if (Tn(r)) {
        const o = t[r],
          i = s[r];
        i && o !== i && !(I(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Pe(e, t, 7, [n, s]);
}
const Bc = zo();
let Hc = 0;
function Uc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Bc,
    o = {
      uid: Hc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new go(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Xo(s, r),
      emitsOptions: Uo(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = ql.bind(null, o)), e.ce && e.ce(o), o
  );
}
let ge = null,
  En,
  ys;
{
  const e = fo(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
        }
      );
    };
  (En = t("__VUE_INSTANCE_SETTERS__", (n) => (ge = n))),
    (ys = t("__VUE_SSR_SETTERS__", (n) => (Mn = n)));
}
const Yt = (e) => {
  const t = ge;
  return (
    En(e),
    e.scope.on(),
    () => {
      e.scope.off(), En(t);
    }
  );
},
  Lr = () => {
    ge && ge.scope.off(), En(null);
  };
function di(e) {
  return e.vnode.shapeFlag & 4;
}
let Mn = !1;
function Dc(e, t = !1) {
  t && ys(t);
  const { props: n, children: s } = e.vnode,
    r = di(e);
  gc(e, n, r, t), bc(e, s);
  const o = r ? qc(e, t) : void 0;
  return t && ys(!1), o;
}
function qc(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ic));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Kc(e) : null),
      o = Yt(e);
    ct();
    const i = rt(s, e, 0, [e.props, r]);
    if ((ut(), o(), io(i))) {
      if ((i.then(Lr, Lr), t))
        return i
          .then((l) => {
            Pr(e, l, t);
          })
          .catch((l) => {
            kn(l, e, 0);
          });
      e.asyncDep = i;
    } else Pr(e, i, t);
  } else hi(e, t);
}
function Pr(e, t, n) {
  j(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : te(t) && (e.setupState = No(t)),
    hi(e, n);
}
let kr;
function hi(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && kr && !s.render) {
      const r = s.template || Ks(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          a = de(de({ isCustomElement: o, delimiters: l }, i), c);
        s.render = kr(r, a);
      }
    }
    e.render = s.render || Re;
  }
  {
    const r = Yt(e);
    ct();
    try {
      lc(e);
    } finally {
      ut(), r();
    }
  }
}
const Vc = {
  get(e, t) {
    return Ee(e, "get", ""), e[t];
  },
};
function Kc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return { attrs: new Proxy(e.attrs, Vc), slots: e.slots, emit: e.emit, expose: t };
}
function jn(e) {
  return e.exposed
    ? e.exposeProxy ||
    (e.exposeProxy = new Proxy(No(Us(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Dt) return Dt[n](e);
      },
      has(t, n) {
        return n in t || n in Dt;
      },
    }))
    : e.proxy;
}
function Wc(e) {
  return j(e) && "__vccOpts" in e;
}
const xe = (e, t) => Ll(e, t, Mn),
  zc = "3.4.31";
/**
 * @vue/runtime-dom v3.4.31
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Gc = "http://www.w3.org/2000/svg",
  Jc = "http://www.w3.org/1998/Math/MathML",
  De = typeof document < "u" ? document : null,
  $r = De && De.createElement("template"),
  Qc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? De.createElementNS(Gc, e)
          : t === "mathml"
            ? De.createElementNS(Jc, e)
            : n
              ? De.createElement(e, { is: n })
              : De.createElement(e);
      return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
    },
    createText: (e) => De.createTextNode(e),
    createComment: (e) => De.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => De.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)););
      else {
        $r.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
        const l = $r.content;
        if (s === "svg" || s === "mathml") {
          const c = l.firstChild;
          for (; c.firstChild;) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    },
  },
  Zc = Symbol("_vtc");
function Xc(e, t, n) {
  const s = e[Zc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
}
const Sn = Symbol("_vod"),
  pi = Symbol("_vsh"),
  Yc = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[Sn] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Mt(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Mt(e, !0), s.enter(e))
            : s.leave(e, () => {
              Mt(e, !1);
            })
          : Mt(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Mt(e, t);
    },
  };
function Mt(e, t) {
  (e.style.display = t ? e[Sn] : "none"), (e[pi] = !t);
}
const eu = Symbol(""),
  tu = /(^|;)\s*display\s*:/;
function nu(e, t, n) {
  const s = e.style,
    r = le(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && gn(s, l, "");
        }
      else for (const i in t) n[i] == null && gn(s, i, "");
    for (const i in n) i === "display" && (o = !0), gn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[eu];
      i && (n += ";" + i), (s.cssText = n), (o = tu.test(n));
    }
  } else t && e.removeAttribute("style");
  Sn in e && ((e[Sn] = o ? s.display : ""), e[pi] && (s.display = "none"));
}
const Nr = /\s*!important$/;
function gn(e, t, n) {
  if (I(n)) n.forEach((s) => gn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = su(e, t);
    Nr.test(n) ? e.setProperty(Lt(s), n.replace(Nr, ""), "important") : (e[s] = n);
  }
}
const Ir = ["Webkit", "Moz", "ms"],
  Yn = {};
function su(e, t) {
  const n = Yn[t];
  if (n) return n;
  let s = At(t);
  if (s !== "filter" && s in e) return (Yn[t] = s);
  s = uo(s);
  for (let r = 0; r < Ir.length; r++) {
    const o = Ir[r] + s;
    if (o in e) return (Yn[t] = o);
  }
  return t;
}
const Fr = "http://www.w3.org/1999/xlink";
function Mr(e, t, n, s, r, o = il(t)) {
  s && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Fr, t.slice(6, t.length))
      : e.setAttributeNS(Fr, t, n)
    : n == null || (o && !ho(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : lt(n) ? String(n) : n);
}
function ru(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
    const a = l === "OPTION" ? e.getAttribute("value") || "" : e.value,
      u = n == null ? "" : String(n);
    (a !== u || !("_value" in e)) && (e.value = u),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = ho(n))
      : n == null && a === "string"
        ? ((n = ""), (c = !0))
        : a === "number" && ((n = 0), (c = !0));
  }
  try {
    e[t] = n;
  } catch { }
  c && e.removeAttribute(t);
}
function ou(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function iu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const jr = Symbol("_vei");
function lu(e, t, n, s, r = null) {
  const o = e[jr] || (e[jr] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [l, c] = cu(t);
    if (s) {
      const a = (o[t] = fu(s, r));
      ou(e, l, a, c);
    } else i && (iu(e, l, i, c), (o[t] = void 0));
  }
}
const Br = /(?:Once|Passive|Capture)$/;
function cu(e) {
  let t;
  if (Br.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Br));)
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Lt(e.slice(2)), t];
}
let es = 0;
const uu = Promise.resolve(),
  au = () => es || (uu.then(() => (es = 0)), (es = Date.now()));
function fu(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Pe(du(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = au()), n;
}
function du(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Hr = (e) =>
  e.charCodeAt(0) === 111 &&
  e.charCodeAt(1) === 110 &&
  e.charCodeAt(2) > 96 &&
  e.charCodeAt(2) < 123,
  hu = (e, t, n, s, r, o, i, l, c) => {
    const a = r === "svg";
    t === "class"
      ? Xc(e, s, a)
      : t === "style"
        ? nu(e, n, s)
        : Tn(t)
          ? Ps(t) || lu(e, t, n, s, i)
          : (
            t[0] === "."
              ? ((t = t.slice(1)), !0)
              : t[0] === "^"
                ? ((t = t.slice(1)), !1)
                : pu(e, t, s, a)
          )
            ? (ru(e, t, s, o, i, l, c),
              !e.tagName.includes("-") &&
              (t === "value" || t === "checked" || t === "selected") &&
              Mr(e, t, s, a, i, t !== "value"))
            : (t === "true-value" ? (e._trueValue = s) : t === "false-value" && (e._falseValue = s),
              Mr(e, t, s, a));
  };
function pu(e, t, n, s) {
  if (s) return !!(t === "innerHTML" || t === "textContent" || (t in e && Hr(t) && j(n)));
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1;
  }
  return Hr(t) && le(n) ? !1 : t in e;
}
const mu = ["ctrl", "shift", "alt", "meta"],
  gu = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => mu.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  _u = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join(".");
    return (
      n[s] ||
      (n[s] = (r, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const l = gu[t[i]];
          if (l && l(r, t)) return;
        }
        return e(r, ...o);
      })
    );
  },
  yu = de({ patchProp: hu }, Qc);
let Ur;
function bu() {
  return Ur || (Ur = xc(yu));
}
const wu = (...e) => {
  const t = bu().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = vu(s);
      if (!r) return;
      const o = t._component;
      !j(o) && !o.render && !o.template && (o.template = r.innerHTML), (r.innerHTML = "");
      const i = n(r, !1, xu(r));
      return (
        r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i
      );
    }),
    t
  );
};
function xu(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function vu(e) {
  return le(e) ? document.querySelector(e) : e;
}
var Eu = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let mi;
const Bn = (e) => (mi = e),
  gi = Symbol();
function bs(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Wt;
(function (e) {
  (e.direct = "direct"), (e.patchObject = "patch object"), (e.patchFunction = "patch function");
})(Wt || (Wt = {}));
function Su() {
  const e = _o(!0),
    t = e.run(() => be({}));
  let n = [],
    s = [];
  const r = Us({
    install(o) {
      Bn(r),
        (r._a = o),
        o.provide(gi, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = []);
    },
    use(o) {
      return !this._a && !Eu ? s.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const _i = () => { };
function Dr(e, t, n, s = _i) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && yo() && cl(r), r;
}
function vt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Cu = (e) => e();
function ws(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n],
      r = e[n];
    bs(r) && bs(s) && e.hasOwnProperty(n) && !ie(s) && !st(s) ? (e[n] = ws(r, s)) : (e[n] = s);
  }
  return e;
}
const Ru = Symbol();
function Tu(e) {
  return !bs(e) || !e.hasOwnProperty(Ru);
}
const { assign: Xe } = Object;
function Au(e) {
  return !!(ie(e) && e.effect);
}
function Ou(e, t, n, s) {
  const { state: r, actions: o, getters: i } = t,
    l = n.state.value[e];
  let c;
  function a() {
    l || (n.state.value[e] = r ? r() : {});
    const u = Nl(n.state.value[e]);
    return Xe(
      u,
      o,
      Object.keys(i || {}).reduce(
        (h, g) => (
          (h[g] = Us(
            xe(() => {
              Bn(n);
              const v = n._s.get(e);
              return i[g].call(v, v);
            })
          )),
          h
        ),
        {}
      )
    );
  }
  return (c = yi(e, a, t, n, s, !0)), c;
}
function yi(e, t, n = {}, s, r, o) {
  let i;
  const l = Xe({ actions: {} }, n),
    c = { deep: !0 };
  let a,
    u,
    h = [],
    g = [],
    v;
  const w = s.state.value[e];
  !o && !w && (s.state.value[e] = {}), be({});
  let C;
  function D(N) {
    let V;
    (a = u = !1),
      typeof N == "function"
        ? (N(s.state.value[e]), (V = { type: Wt.patchFunction, storeId: e, events: v }))
        : (ws(s.state.value[e], N),
          (V = { type: Wt.patchObject, payload: N, storeId: e, events: v }));
    const se = (C = Symbol());
    Mo().then(() => {
      C === se && (a = !0);
    }),
      (u = !0),
      vt(h, V, s.state.value[e]);
  }
  const H = o
    ? function () {
      const { state: V } = n,
        se = V ? V() : {};
      this.$patch((ae) => {
        Xe(ae, se);
      });
    }
    : _i;
  function J() {
    i.stop(), (h = []), (g = []), s._s.delete(e);
  }
  function R(N, V) {
    return function () {
      Bn(s);
      const se = Array.from(arguments),
        ae = [],
        Ie = [];
      function wt(Z) {
        ae.push(Z);
      }
      function $t(Z) {
        Ie.push(Z);
      }
      vt(g, { args: se, name: N, store: W, after: wt, onError: $t });
      let Je;
      try {
        Je = V.apply(this && this.$id === e ? this : W, se);
      } catch (Z) {
        throw (vt(Ie, Z), Z);
      }
      return Je instanceof Promise
        ? Je.then((Z) => (vt(ae, Z), Z)).catch((Z) => (vt(Ie, Z), Promise.reject(Z)))
        : (vt(ae, Je), Je);
    };
  }
  const K = {
    _p: s,
    $id: e,
    $onAction: Dr.bind(null, g),
    $patch: D,
    $reset: H,
    $subscribe(N, V = {}) {
      const se = Dr(h, N, V.detached, () => ae()),
        ae = i.run(() =>
          pn(
            () => s.state.value[e],
            (Ie) => {
              (V.flush === "sync" ? u : a) && N({ storeId: e, type: Wt.direct, events: v }, Ie);
            },
            Xe({}, c, V)
          )
        );
      return se;
    },
    $dispose: J,
  },
    W = Pn(K);
  s._s.set(e, W);
  const q = ((s._a && s._a.runWithContext) || Cu)(() => s._e.run(() => (i = _o()).run(t)));
  for (const N in q) {
    const V = q[N];
    if ((ie(V) && !Au(V)) || st(V))
      o || (w && Tu(V) && (ie(V) ? (V.value = w[N]) : ws(V, w[N])), (s.state.value[e][N] = V));
    else if (typeof V == "function") {
      const se = R(N, V);
      (q[N] = se), (l.actions[N] = V);
    }
  }
  return (
    Xe(W, q),
    Xe(G(W), q),
    Object.defineProperty(W, "$state", {
      get: () => s.state.value[e],
      set: (N) => {
        D((V) => {
          Xe(V, N);
        });
      },
    }),
    s._p.forEach((N) => {
      Xe(
        W,
        i.run(() => N({ store: W, app: s._a, pinia: s, options: l }))
      );
    }),
    w && o && n.hydrate && n.hydrate(W.$state, w),
    (a = !0),
    (u = !0),
    W
  );
}
function bi(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  typeof e == "string" ? ((s = e), (r = o ? n : t)) : ((r = e), (s = e.id));
  function i(l, c) {
    const a = mc();
    return (
      (l = l || (a ? qt(gi, null) : null)),
      l && Bn(l),
      (l = mi),
      l._s.has(s) || (o ? yi(s, t, r, l) : Ou(s, r, l)),
      l._s.get(s)
    );
  }
  return (i.$id = s), i;
}
function Lu(e) {
  {
    e = G(e);
    const t = {};
    for (const n in e) {
      const s = e[n];
      (ie(s) || st(s)) && (t[n] = Ml(e, n));
    }
    return t;
  }
}
const Ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t) n[s] = r;
  return n;
},
  Pu = {},
  ku = { class: "question-decoration flex-shrink-0 flex-grow-0" },
  $u = { class: "text-[1em] mt-[-0.1em] lining-nums" };
function Nu(e, t) {
  return O(), B("div", ku, [P("div", $u, [In(e.$slots, "default")])]);
}
const Iu = Ge(Pu, [["render", Nu]]),
  Fu = ["src", "alt"],
  Mu = { key: 1, class: "row-span-2 md:aspect-[450/280] lg:aspect-[654/412] bg-grey-question-bg" },
  ju = { class: "row-span-1 flex items-center justify-center" },
  Bu = $e({
    __name: "ICardOption",
    props: { option: {}, optionProps: {} },
    setup(e) {
      return (t, n) => (
        O(),
        B(
          "div",
          {
            class: Ke([
              "grid grid-rows-3 rounded-3xl cursor-pointer hover:shadow-lg transition-shadow overflow-hidden",
              {
                "cursor-default hover:shadow-none": t.optionProps.disabled,
                "bg-grey-question-bg": !t.optionProps.isSelected,
                "bg-red": !t.optionProps.isRight && t.optionProps.isSelected,
                "bg-green": t.optionProps.isRight && t.optionProps.isSelected,
                "text-[#fff]": t.optionProps.isSelected,
              },
            ]),
            onClick: n[0] || (n[0] = (s) => t.optionProps.disabled || t.optionProps.onSelected()),
          },
          [
            t.option.cover
              ? (O(),
                B(
                  "img",
                  {
                    key: 0,
                    class: "row-span-2 md:aspect-[450/280] lg:aspect-[654/412] object-cover",
                    src: t.option.cover,
                    alt: t.option.content,
                  },
                  null,
                  8,
                  Fu
                ))
              : (O(), B("div", Mu)),
            P("div", ju, oe(t.option.content), 1),
          ],
          2
        )
      );
    },
  }),
  Hu = {},
  Uu = {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Du = P(
    "path",
    {
      d: "M9.07422 17.13L14.7641 23.1169L25.2779 12.3145",
      stroke: "white",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    null,
    -1
  ),
  qu = P(
    "circle",
    { cx: "17.5", cy: "17.5", r: "16.5", stroke: "white", "stroke-width": "2" },
    null,
    -1
  ),
  Vu = [Du, qu];
function Ku(e, t) {
  return O(), B("svg", Uu, Vu);
}
const Wu = Ge(Hu, [["render", Ku]]),
  zu = {},
  Gu = {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ju = P(
    "path",
    {
      d: "M11.0186 11.0195L23.9815 23.9825",
      stroke: "white",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    null,
    -1
  ),
  Qu = P(
    "path",
    {
      d: "M23.9814 11.0195L11.0185 23.9825",
      stroke: "white",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    null,
    -1
  ),
  Zu = P(
    "circle",
    { cx: "17.5", cy: "17.5", r: "16.5", stroke: "white", "stroke-width": "2" },
    null,
    -1
  ),
  Xu = [Ju, Qu, Zu];
function Yu(e, t) {
  return O(), B("svg", Gu, Xu);
}
const ea = Ge(zu, [["render", Yu]]),
  ta = { key: 0, class: "absolute top-0 left-0 h-full pl-4 flex items-center" },
  na = $e({
    __name: "ISingleOption",
    props: { optionProps: {} },
    setup(e) {
      return (t, n) => (
        O(),
        B(
          "div",
          {
            class: Ke([
              "rounded-2xl flex items-center justify-center py-6 text-center gap-4 px-14 relative",
              {
                "cursor-pointer hover:shadow-lg transition-shadow": !t.optionProps.disabled,
                "bg-grey-question-bg": !t.optionProps.isSelected,
                "bg-red": t.optionProps.isSelected && !t.optionProps.isRight,
                "bg-green": t.optionProps.isSelected && t.optionProps.isRight,
                "text-[#fff]": t.optionProps.isSelected,
              },
            ]),
            onClick: n[0] || (n[0] = (s) => t.optionProps.disabled || t.optionProps.onSelected()),
          },
          [
            t.optionProps.isSelected
              ? (O(),
                B("div", ta, [
                  t.optionProps.isRight ? (O(), _e(Wu, { key: 0 })) : (O(), _e(ea, { key: 1 })),
                ]))
              : Te("", !0),
            In(t.$slots, "default"),
          ],
          2
        )
      );
    },
  }),
  wi = (e) => {
    var n;
    return (n = e == null ? void 0 : e.file) != null && n.path
      ? "https://dev-quiz.qalam.global" + (e == null ? void 0 : e.file.path)
      : "/fallback-og.webp";
  },
  xi = (e) => {
    var r, o, i, l, c;
    const t = "https://dev-quiz.qalam.global",
      n = (r = e == null ? void 0 : e.file) == null ? void 0 : r.crops,
      s =
        ((o = n == null ? void 0 : n.find((a) => a.key === "mobile")) == null ? void 0 : o.path) ??
        ((i = n == null ? void 0 : n.find((a) => a.key === "lead_img_mobile")) == null
          ? void 0
          : i.path) ??
        ((l = n == null ? void 0 : n.find((a) => a.key === "banner_mobile")) == null
          ? void 0
          : l.path);
    return s
      ? t + s
      : (c = e == null ? void 0 : e.file) != null && c.path
        ? t + (e == null ? void 0 : e.file.path)
        : "/fallback-og.webp";
  },
  sa = { class: "p-4 max-w-[1600px] w-full mx-auto grid gap-[14px] text-base" },
  ra = { class: "w-full min-h-[480px] md:min-h-[400px] max-h-[550px]" },
  oa = ["src", "alt"],
  ia = { key: 0, class: "text-grey-lavender" },
  ts = $e({
    __name: "LeadPicture",
    props: { testData: {}, lead: { type: Boolean } },
    setup(e) {
      const t = e,
        n = screen.width <= 760,
        s = xe(() => wi(t.testData)),
        r = xe(() => xi(t.testData));
      return (o, i) => {
        var l, c, a, u;
        return (
          O(),
          B("div", sa, [
            P("div", ra, [
              P(
                "img",
                {
                  src: n ? (r.value ?? s.value) : s.value,
                  alt:
                    ((c = (l = o.testData) == null ? void 0 : l.file) == null
                      ? void 0
                      : c.credit) ?? "",
                  class: Ke([
                    { "m-auto md:w-auto": !o.lead },
                    "w-full h-full object-cover rounded-xl",
                  ]),
                },
                null,
                10,
                oa
              ),
            ]),
            (u = (a = o.testData) == null ? void 0 : a.file) != null && u.credit
              ? (O(), B("p", ia, oe(o.testData.file.credit), 1))
              : Te("", !0),
          ])
        );
      };
    },
  });
var vi = ((e) => ((e.ru = "ru"), (e.kk = "kk"), (e.en = "en"), e))(vi || {}),
  Et = ((e) => (
    (e[(e.cards = 0)] = "cards"),
    (e[(e.single_choice = 1)] = "single_choice"),
    (e[(e.radio = 2)] = "radio"),
    (e[(e.checkbox = 3)] = "checkbox"),
    e
  ))(Et || {});
function la(e) {
  return e.questions.map((n, s) => {
    var i, l;
    const r = {
      type: Et.single_choice,
      options: n.answerOptions.map((c, a) => ({
        content: c.content,
        id: a,
        is_right: c.isCorrect,
        result_content: c.hint,
        hint_image: c.hintImage,
      })),
      cover:
        (i = n.file) != null && i.path
          ? "https://dev-quiz.qalam.global" + ((l = n.file) == null ? void 0 : l.path)
          : "",
    };
    return {
      id: s,
      ordinal: s + 1,
      content: n.content,
      result_content: n.hint,
      file: n.file,
      ...r,
    };
  });
}
function ca(e) {
  return { selected_option_id: e.id, is_right: e.is_right ?? !1 };
}
function ua(e, t = () => { }, n) {
  return {
    isSelected: !!(e && n && e.selected_option_id === n.id),
    disabled: !!e,
    isRight: !!(e != null && e.is_right),
    onSelected: t,
  };
}
const aa = { key: 0 },
  fa = { class: "grid md:grid-cols-2 md:auto-rows-[1fr] gap-6" },
  da = { key: 1, class: "grid grid-cols-2 gap-8 px-4" },
  ha = { key: 2 },
  pa = ["value", "name", "id"],
  ma = ["for"],
  ga = { key: 3 },
  _a = ["value", "name", "id"],
  ya = ["for"],
  ba = $e({
    __name: "IQuestionCard",
    props: { question: {}, savedAnswer: {} },
    emits: ["saveAnswer"],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        r = (i) => {
          s("saveAnswer", ca(i), n.question.id);
        },
        o = (i) => ua(n.savedAnswer, () => r(i), i);
      return (i, l) =>
        i.question.type === ue(Et).single_choice
          ? (O(),
            B("div", aa, [
              i.question.cover && !i.savedAnswer
                ? (O(),
                  _e(
                    ts,
                    {
                      key: 0,
                      "test-data": i.question.file ? { file: i.question.file } : null,
                      class:
                        "!p-0 mb-4 [&>div]:min-h-[210px] [&>div]:md:min-h-[350px] [&>div>img]:rounded-[20px] [&>div>img]:md:rounded-xl",
                    },
                    null,
                    8,
                    ["test-data"]
                  ))
                : Te("", !0),
              P("div", fa, [
                (O(!0),
                  B(
                    pe,
                    null,
                    an(
                      i.question.options,
                      (c) => (
                        O(),
                        _e(
                          na,
                          { key: c.id, "option-props": o(c) },
                          { default: mt(() => [Ve(oe(c.content), 1)]), _: 2 },
                          1032,
                          ["option-props"]
                        )
                      )
                    ),
                    128
                  )),
              ]),
            ]))
          : i.question.type === ue(Et).cards
            ? (O(),
              B("div", da, [
                (O(!0),
                  B(
                    pe,
                    null,
                    an(
                      i.question.options,
                      (c) => (
                        O(),
                        _e(Bu, { key: c.id, option: c, "option-props": o(c) }, null, 8, [
                          "option",
                          "option-props",
                        ])
                      )
                    ),
                    128
                  )),
              ]))
            : i.question.type === ue(Et).checkbox
              ? (O(),
                B("div", ha, [
                  re(
                    ts,
                    {
                      "test-data": i.question.file ? { file: i.question.file } : null,
                      class: "mb-4 !min-h-[340px] !md:min-h-[400px]",
                    },
                    null,
                    8,
                    ["test-data"]
                  ),
                  (O(!0),
                    B(
                      pe,
                      null,
                      an(
                        i.question.options,
                        (c) => (
                          O(),
                          B("div", { key: c.id, class: "ml-4" }, [
                            P(
                              "input",
                              {
                                type: "checkbox",
                                value: c.id,
                                name: `${i.question.id}`,
                                id: `${c.id}-${c.content}`,
                              },
                              null,
                              8,
                              pa
                            ),
                            P("label", { for: `${c.id}-${c.content}` }, oe(c.content), 9, ma),
                          ])
                        )
                      ),
                      128
                    )),
                ]))
              : i.question.type === ue(Et).radio
                ? (O(),
                  B("div", ga, [
                    re(
                      ts,
                      {
                        "test-data": i.question.file ? { file: i.question.file } : null,
                        class: "p-0 mb-4",
                      },
                      null,
                      8,
                      ["test-data"]
                    ),
                    (O(!0),
                      B(
                        pe,
                        null,
                        an(
                          i.question.options,
                          (c) => (
                            O(),
                            B("div", { key: c.id, class: "ml-4" }, [
                              P(
                                "input",
                                {
                                  type: "radio",
                                  value: c.id,
                                  name: `${i.question.id}`,
                                  id: `${c.id}-${c.content}`,
                                },
                                null,
                                8,
                                _a
                              ),
                              P("label", { for: `${c.id}-${c.content}` }, oe(c.content), 9, ya),
                            ])
                          )
                        ),
                        128
                      )),
                  ]))
                : Te("", !0);
    },
  }),
  wa = {},
  xa = {
    width: "54",
    height: "24",
    viewBox: "0 0 54 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  va = P("path", { d: "M52.4804 12L5.98047 12", stroke: "currentColor" }, null, -1),
  Ea = P(
    "path",
    {
      d: "M2.877 9.88477C1.19652 9.88477 0 10.5301 0 11.9013C0 13.2726 1.19652 13.9179 2.877 13.9179C5.67332 13.9179 6.69505 12.5736 16.993 12.345V11.4577C6.69505 11.1888 5.67332 9.88477 2.877 9.88477Z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Sa = P(
    "path",
    {
      d: "M53.2895 12.009C46.3524 4.68211 46.5675 3.08226 44.5912 1.1329C43.4351 -0.0367099 42.1445 -0.413141 41.2035 0.541372C40.2624 1.49588 40.6388 2.77308 41.795 3.92925C43.6771 5.81138 45.25 5.69039 52.0392 11.9956C45.25 18.341 43.6637 18.22 41.7815 20.0619C40.6254 21.2315 40.2355 22.5086 41.19 23.4631C42.1445 24.4176 43.4217 24.0278 44.5779 22.8582C46.5407 20.9492 46.3524 19.2956 53.2895 12.009Z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  Ca = [va, Ea, Sa];
function Ra(e, t) {
  return O(), B("svg", xa, Ca);
}
const qr = Ge(wa, [["render", Ra]]),
  Ta = {
    class:
      "rounded-full border-grey-border border text-base px-4 py-2 flex gap-2 items-center hover:shadow-md transition outline-none",
  },
  ns = $e({
    __name: "IButton",
    props: { arrow: {} },
    setup(e) {
      return (t, n) => (
        O(),
        B("button", Ta, [
          t.arrow === "left" ? (O(), _e(qr, { key: 0, class: "w-10 rotate-180" })) : Te("", !0),
          In(t.$slots, "default"),
          t.arrow === "right" ? (O(), _e(qr, { key: 1, class: "w-10" })) : Te("", !0),
        ])
      );
    },
  }),
  Aa = {},
  Oa = {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  La = P(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M30 0L38.7869 8.7874H51.213V21.2141L60 29.9983L51.213 38.7857V51.2126H38.7869L30 60L21.2131 51.2126H8.78697V38.7857L0 29.9983L8.78697 21.2141V8.7874H21.2131L30 0ZM30 3.47564L22.2311 11.245H11.2445V22.2323L3.47577 29.9986L11.2445 37.7678V48.755H22.2311L30 56.5244L37.7689 48.755H48.7555V37.7678L56.5242 29.9986L48.7555 22.2323V11.245H37.7689L30 3.47564Z",
      fill: "#D22630",
    },
    null,
    -1
  ),
  Pa = P(
    "path",
    {
      d: "M30.28 19.36C29.12 19.36 28.12 18.44 28.12 17.2C28.12 15.96 29.12 15 30.28 15C31.52 15 32.52 15.96 32.52 17.2C32.52 18.44 31.52 19.36 30.28 19.36ZM27.84 44.32V44.24C28.6 42.24 28.92 40.4 28.92 37.28V29.92C28.92 27.84 28 26.52 27 25.72V25.52L32.08 23.28V37.24C32.08 40.36 32.12 42.24 33.12 44.24V44.32H27.84Z",
      fill: "#D22630",
    },
    null,
    -1
  ),
  ka = [La, Pa];
function $a(e, t) {
  return O(), B("svg", Oa, ka);
}
const Na = Ge(Aa, [["render", $a]]),
  Ia = {},
  Fa = {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ma = P(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M30 0L38.7869 8.7874H51.213V21.2141L60 29.9983L51.213 38.7857V51.2126H38.7869L30 60L21.2131 51.2126H8.78697V38.7857L0 29.9983L8.78697 21.2141V8.7874H21.2131L30 0ZM30 3.47564L22.2311 11.245H11.2445V22.2323L3.47577 29.9986L11.2445 37.7678V48.755H22.2311L30 56.5244L37.7689 48.755H48.7555V37.7678L56.5242 29.9986L48.7555 22.2323V11.245H37.7689L30 3.47564Z",
      fill: "#D22630",
    },
    null,
    -1
  ),
  ja = P(
    "path",
    {
      d: "M23.3287 39.0429C25.1508 37.2632 24.8334 35.6335 30.2382 30.0444L30.3815 29.9044C24.9665 24.3053 25.2634 22.6755 23.472 20.9058C22.3768 19.836 21.1177 19.526 20.1657 20.4559C19.2137 21.3857 19.5413 22.6156 20.6366 23.6754C22.3972 25.4051 24.0043 25.1652 29.2964 29.9244C23.902 34.8036 22.2744 34.5536 20.4933 36.2934C19.398 37.3532 19.0705 38.583 20.0225 39.5128C20.9744 40.4427 22.2335 40.1327 23.3287 39.0629",
      fill: "#D22630",
    },
    null,
    -1
  ),
  Ba = P(
    "path",
    {
      d: "M36.5941 20.9273C34.7721 22.707 35.0894 24.3367 29.6847 29.9258L29.5414 30.0658C34.9563 35.6649 34.6595 37.2947 36.4508 39.0644C37.5461 40.1342 38.8052 40.4442 39.7571 39.5143C40.7091 38.5845 40.3815 37.3546 39.2862 36.2948C37.5256 34.5651 35.9185 34.8051 30.6264 30.0458C36.0209 25.1666 37.6485 25.4166 39.4296 23.6769C40.5248 22.617 40.8524 21.3873 39.9004 20.4574C38.9484 19.5276 37.6894 19.8375 36.5941 20.9073",
      fill: "#D22630",
    },
    null,
    -1
  ),
  Ha = [Ma, ja, Ba];
function Ua(e, t) {
  return O(), B("svg", Fa, Ha);
}
const Da = Ge(Ia, [["render", Ua]]),
  qa = { class: "relative aspect-square h-[60px]" },
  Va = { class: "h-0 w-0 relative m-auto" },
  Ka = {
    class:
      "border-2 border-red rounded-3xl bg-beige-pink py-6 px-8 text-center italic text-lg absolute w-80 bottom-8 left-[-160px]",
  },
  Wa = $e({
    __name: "IHint",
    setup(e) {
      const t = be(!1);
      return (n, s) => (
        O(),
        B("div", qa, [
          P("div", Va, [oc(P("div", Ka, [In(n.$slots, "default")], 512), [[Yc, t.value]])]),
          t.value
            ? (O(),
              _e(Da, {
                key: 0,
                onClick: s[0] || (s[0] = (r) => (t.value = !t.value)),
                class: "h-full w-full cursor-pointer",
              }))
            : (O(),
              _e(Na, {
                key: 1,
                onClick: s[1] || (s[1] = (r) => (t.value = !t.value)),
                class: "h-full w-full cursor-pointer",
              })),
        ])
      );
    },
  }),
  za = { ru: "ЧТО ЭТО??!", kk: "БҰЛ НЕ НӘРСЕ?", en: "WHAT IS THIS?!" },
  Ga = {
    ru: "Сможете отгадать, для чего эту штуку использовали наши предки? Тест на знание самых обычных вещей минувших веков, возможно, спасет вам жизнь, если вы случайно попадете во временную ловушку и перенесетесь лет на триста назад.",
    kk: "Ата-бабалардың мұны не үшін қолданғанын таба аласыз ба? Егер аяқ астынан уақыт тұзағына ілініп, үш жүз жыл бұрынғы кезге тап болсаңыз, өткен ғасырлардағы ең бір қарапайым заттарды білу бойынша осы сынақ сізді аман сақтап қалуы әбден мүмкін.",
    en: "Can you guess what our ancestors used this thing for? A test of knowledge about most common items from the past centuries might save your life if you accidentally end up in a time trap and get transported back three hundred years.",
  },
  Ja = {
    ru: "Спецпроект подготовлен в сотрудничестве с Lenovo",
    kk: "Бұл арнайы жоба Lenovo-мен бірлесіп дайындалды",
    en: "This special project was prepared in cooperation with Lenovo",
  },
  Qa = { ru: "Спецпроект", kk: "арнайы жоба", en: "special project" },
  Za = { ru: "ПРАВИЛЬНЫХ ОТВЕТОВ", kk: "ДҰРЫС ЖАУАП", en: "CORRECT ANSWERS" },
  Xa = { ru: "ПРОЙТИ ЗАНОВО", kk: "ҚАЙТА ӨТУ", en: "TAKE THE QUIZ AGAIN" },
  Ya = { ru: "ПОДЕЛИТЬСЯ РЕЗУЛЬТАТОМ", kk: "НӘТИЖЕМЕН БӨЛІСУ", en: "SHARE THE RESULT" },
  ef = { ru: "Иллюстрация", kk: "Иллюстрация", en: "The illustration" },
  tf = { ru: "ВЕРНО!", kk: "ДҰРЫС!", en: "CORRECT!" },
  nf = { ru: "НЕПРАВИЛЬНЫЙ ВЫБОР", kk: "ҚАТЕ", en: "INCORRECT" },
  sf = { ru: "Читать больше", kk: "Толығырақ", en: "Read more" },
  rf = { ru: "ВНИМАНИЕ!", kk: "Назар аударыңыз!", en: "Attention!" },
  of = {
    ru: "Пожалуйста, выберите вариант ответа",
    kk: "Жауап таңдаңыз",
    en: "Please select an answer option",
  },
  lf = { ru: "Назад", kk: "Артқа", en: "Previous" },
  cf = { ru: "Далее", kk: "Келесі", en: "Next" },
  uf = { ru: "Узнать результат", kk: "Нәтижесін көру", en: "Show the result" },
  af = {
    ru: "История, литература, искусство в лекциях, шпаргалках, играх и ответах экспертов. Новые знания каждый день © QALAM ",
    kk: "Тарих, әдебиет және өнерді дәрістерден, шпаргалкадан, ойындар мен сарапшылардың жауабынан таба аласыз. Күн сайын жаңа білім. © QALAM",
    en: "History, literature, art in lectures, games and expert comments: new knowledge every day © QALAM",
  },
  ff = {
    ru: "2023. Все права защищены",
    kk: "2023. Барлық құқығы қорғалған",
    en: "2023. All rights reserved",
  },
  df = { ru: "Дизайн", kk: "Дизайн", en: "Design by" },
  hf = { ru: "О проекте", kk: "QALAM жобасы туралы", en: "About the project" },
  pf = { ru: "Реклама в Qalam", kk: "Qalam-дағы жарнама", en: "Advertisement in Qalam" },
  mf = { ru: "Политика конфиденциальности ", kk: "ҚҰПИЯЛЫЛЫҚ САЯСАТЫ", en: "Privacy Policy" },
  gf = { ru: "Начать тест", kk: "Тестті бастау", en: "Start the quiz" },
  _f = {
    ru: "Иероним Босх. Искушение святого Антония. 1500−1510 гг./Wikimedia Commons",
    kk: "Иероним Босх. Әулие Антонийдің азғыруы. 1500-1510 жж./Wikimedia Commons",
    en: "Hieronymus Bosch. The Temptation of St. Anthony. 1500-1510 / Wikimedia Commons",
  },
  yf = { ru: "ПЕРЕЙТИ", kk: "тест тапсыру", en: "Start Quiz" },
  bf = { ru: "Тесты - Qalam", kk: "Тест - Qalam", en: "Quiz - Qalam" },
  wf = { ru: "пройти другие тесты", kk: "басқа тесттерден өту", en: "take other quizzes" },
  xf = { ru: "Читать также", kk: "Тағы да оқу", en: "Read also" },
  vf = {
    lead_block_title: za,
    lead_block_description: Ga,
    lead_block_subtitle: Ja,
    special_project: Qa,
    correct_answers: Za,
    take_again: Xa,
    share_result: Ya,
    illustration: ef,
    correct_answer: tf,
    incorrect_answer: nf,
    read_more: sf,
    warning: rf,
    warning_text: of,
    previous: lf,
    next: cf,
    show_result: uf,
    copyright_1: af,
    copyright_2: ff,
    design: df,
    about_page: hf,
    advertisement: pf,
    privacy_policy: mf,
    begin_test: gf,
    illustration_text: _f,
    proceed: yf,
    og_title: bf,
    "menu-of-meanings": { ru: "меню смыслов", kk: "мағыналар жиыны", en: "menu of meanings" },
    "central-asia-stories": {
      ru: "Истории из сердца Азии",
      kk: "Азия жүрегіне тұнған тарих",
      en: "History from the Heart of Asia",
    },
    see_other_tests: wf,
    read_more_posts: xf,
  },
  xs = bi("locale", () => ({ locale: be(vi.ru) })),
  ss = vf,
  qe = (e) => {
    var n, s;
    const t = xs();
    return (n = ss[e]) != null && n[t.locale]
      ? ss[e][t.locale]
      : (((s = ss[e]) == null ? void 0 : s.ru) ?? e);
  },
  Ef = { class: "flex justify-between items-center col-span-2 font-[300] gap-7" },
  Sf = $e({
    __name: "IQuestionNavigation",
    props: { canGoBack: { type: Boolean }, isLastQuestion: { type: Boolean }, hint: {} },
    emits: ["goBack", "goNext", "finishTest"],
    setup(e, { emit: t }) {
      const n = t;
      return (s, r) => (
        O(),
        B("div", Ef, [
          re(
            ns,
            {
              class:
                "text-red border-red hover:text-[#fff] hover:bg-red disabled:text-[#fff] disabled:border-grey-border disabled:bg-grey-border disabled:invisible",
              arrow: "left",
              disabled: !s.canGoBack,
              onClick: r[0] || (r[0] = (o) => s.canGoBack && n("goBack")),
            },
            { default: mt(() => [Ve(oe(ue(qe)("previous")), 1)]), _: 1 },
            8,
            ["disabled"]
          ),
          s.hint
            ? (O(), _e(Wa, { key: 0 }, { default: mt(() => [Ve(oe(s.hint), 1)]), _: 1 }))
            : Te("", !0),
          s.isLastQuestion
            ? (O(),
              _e(
                ns,
                {
                  key: 2,
                  class:
                    "text-red border-red hover:text-[#fff] hover:bg-red disabled:text-[#fff] disabled:border-grey-border disabled:bg-grey-border",
                  onClick: r[2] || (r[2] = (o) => n("finishTest")),
                },
                { default: mt(() => [Ve(oe(ue(qe)("show_result")), 1)]), _: 1 }
              ))
            : (O(),
              _e(
                ns,
                {
                  key: 1,
                  class:
                    "text-red border-red hover:text-[#fff] hover:bg-red disabled:text-[#fff] disabled:border-grey-border disabled:bg-grey-border",
                  arrow: "right",
                  onClick: r[1] || (r[1] = (o) => !s.isLastQuestion && n("goNext")),
                },
                { default: mt(() => [Ve(oe(ue(qe)("next")), 1)]), _: 1 }
              )),
        ])
      );
    },
  }),
  Cf = {},
  Rf = {
    width: "88",
    height: "63",
    viewBox: "0 0 88 63",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Tf = P(
    "path",
    {
      d: "M69.3334 58.4943C61.1102 58.4943 54.148 55.685 46.0741 48.5857L43.9841 46.7466C51.3148 42.0254 55.2597 34.0699 55.2597 25.5881C55.2597 12.1282 45.1847 0 27.5568 0C9.92882 0 0 12.1282 0 25.5849C0 39.0417 10.0749 51.1699 27.7029 51.1699C31.8923 51.1699 35.6466 50.485 38.9339 49.2611L41.1096 51.1699C51.1083 59.9688 59.0362 63 68.7395 63C78.4428 63 84.0742 58.1202 88 52.5745L87.8507 52.4255C82.2225 56.3446 76.8134 58.488 69.3334 58.488V58.4943ZM27.7029 45.7764C13.3337 45.7764 5.77752 34.9799 5.77752 25.5881C5.77752 16.1963 13.1844 5.39665 27.5568 5.39665C41.9291 5.39665 49.4821 16.1931 49.4821 25.5849C49.4821 31.9296 46.0995 38.9148 39.4739 42.78L28.6653 33.2772H19.7751V33.4992C20.8137 33.7941 22.0715 34.4599 22.7385 35.0528L34.068 44.9932C32.1242 45.4974 30.0025 45.7764 27.7029 45.7764Z",
      fill: "white",
    },
    null,
    -1
  ),
  Af = [Tf];
function Of(e, t) {
  return O(), B("svg", Rf, Af);
}
const Vr = Ge(Cf, [["render", Of]]),
  Lf = {},
  Pf = {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  kf = P(
    "path",
    {
      d: "M31.3373 14.3999V14.4814L30.2241 36.3293H28.8724L27.799 14.4814V14.3999H31.3373ZM29.5482 44.3999C28.276 44.3999 27.2026 43.2994 27.2026 41.995C27.2026 40.6499 28.276 39.5494 29.5482 39.5494C30.8602 39.5494 31.9336 40.6499 31.9336 41.995C31.9336 43.2994 30.8602 44.3999 29.5482 44.3999Z",
      fill: "white",
    },
    null,
    -1
  ),
  $f = P(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M29.5686 0L38.2291 8.7874H50.4765V21.2141L59.1371 29.9983L50.4765 38.7857V51.2126H38.2291L29.5686 60L20.908 51.2126H8.6606V38.7857L0 29.9983L8.6606 21.2141V8.7874H20.908L29.5686 0ZM29.5686 3.47564L21.9114 11.245H11.0828V22.2323L3.42578 29.9986L11.0828 37.7678V48.755H21.9114L29.5686 56.5244L37.2257 48.755H48.0543V37.7678L55.7113 29.9986L48.0543 22.2323V11.245H37.2257L29.5686 3.47564Z",
      fill: "white",
    },
    null,
    -1
  ),
  Nf = [kf, $f];
function If(e, t) {
  return O(), B("svg", Pf, Nf);
}
const Ff = Ge(Lf, [["render", If]]),
  Mf = {},
  jf = {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Bf = P(
    "path",
    {
      d: "M12.5918 12.5927L27.4066 27.4075",
      stroke: "#69626D",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    null,
    -1
  ),
  Hf = P(
    "path",
    {
      d: "M27.4062 12.5927L12.5914 27.4075",
      stroke: "#69626D",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    null,
    -1
  ),
  Uf = P(
    "circle",
    { cx: "20", cy: "20", r: "19", stroke: "#69626D", "stroke-width": "2" },
    null,
    -1
  ),
  Df = [Bf, Hf, Uf];
function qf(e, t) {
  return O(), B("svg", jf, Df);
}
const Vf = Ge(Mf, [["render", qf]]),
  Kf = { class: "flex justify-center xl:justify-end" },
  Wf = ["innerHTML"],
  zf = $e({
    __name: "IModal",
    props: { content: {} },
    emits: ["closeModal"],
    setup(e, { emit: t }) {
      const n = t;
      return (s, r) => (
        O(),
        B(
          "div",
          {
            class:
              "modal-overlay w-[100vw] h-[100vh] flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 p-4 sm:p-8 z-50",
            onClick: r[2] || (r[2] = (o) => n("closeModal")),
          },
          [
            P(
              "div",
              {
                class:
                  "modal-body bg-beige-pink rounded-2xl py-4 px-6 md:p-10 xl:p-6 flex flex-col-reverse xl:flex-col gap-4 xl:gap-6 max-w-[650px] text-base md:text-lg font-canela max-h-[95vh]",
                onClick: r[1] || (r[1] = _u(() => { }, ["stop"])),
              },
              [
                P("div", Kf, [
                  re(Vf, {
                    onClick: r[0] || (r[0] = (o) => n("closeModal")),
                    class: "cursor-pointer w-8 h-8 xl:w-auto xl:h-auto",
                  }),
                ]),
                P(
                  "p",
                  { innerHTML: s.content, class: "xl:pb-6 xl:px-6 font-thin overflow-auto" },
                  null,
                  8,
                  Wf
                ),
              ]
            ),
          ]
        )
      );
    },
  }),
  Gf = { key: 0, class: "grid md:grid-cols-9 overflow-hidden border-2 border-red rounded-[20px]" },
  Jf = {
    class:
      "md:col-span-4 rounded-r-[20px] bg-red text-[#fff] flex justify-center items-center gap-4 uppercase text-[20px] py-12 px-4",
  },
  Qf = { class: "lg:max-w-[60%]" },
  Zf = {
    class:
      "md:col-span-5 flex items-center justify-center px-4 text-lg text-center md:text-left my-8 md:my-0",
  },
  Xf = { key: 1, class: "grid overflow-hidden border-2 border-green rounded-[20px]" },
  Yf = {
    class:
      "rounded-r-[20px] bg-green text-[#fff] flex justify-center items-center gap-4 uppercase text-[20px] py-6 px-4",
  },
  ed = { class: "lg:max-w-[60%]" },
  td = { key: 0 },
  nd = {
    class: "h-[320px] w-[320px] flex items-center justify-center m-auto overflow-hidden rounded-xl",
  },
  sd = ["src", "alt"],
  rd = {
    key: 1,
    class: "flex items-center justify-center px-4 text-lg text-center md:text-left my-8 md:my-0",
  },
  od = {
    key: 2,
    class: "flex items-center justify-center px-4 text-lg text-center md:text-left my-8 md:my-0",
  },
  id = { key: 2, class: "grid overflow-hidden border-2 border-red rounded-[20px]" },
  ld = {
    class:
      "rounded-r-[20px] bg-red text-[#fff] flex justify-center items-center gap-4 uppercase text-[20px] py-6 px-4",
  },
  cd = { class: "lg:max-w-[60%]" },
  ud = { key: 0 },
  ad = {
    class: "h-[320px] w-[320px] flex items-center justify-center m-auto overflow-hidden rounded-xl",
  },
  fd = ["src", "alt"],
  dd = {
    key: 1,
    class: "flex items-center justify-center px-4 text-lg text-center md:text-left my-8 md:my-0",
  },
  hd = {
    key: 2,
    class: "flex items-center justify-center px-4 text-lg text-center md:text-left my-8 md:my-0",
  },
  pd = $e({
    __name: "INotification",
    props: {
      isWarning: { type: Boolean },
      isRight: { type: Boolean },
      resultContent: {},
      hintImage: {},
    },
    setup(e) {
      const t = e,
        n = xe(() => t.resultContent && t.resultContent.length > 150),
        s = (c) =>
          c.substring(0, 130).split(" ").slice(0, -1).join(" ").replace(/,\s*$/, "") + "...",
        r = be(!1),
        o = xe(() => wi(t.hintImage ? { file: t.hintImage } : null)),
        i = xe(() => xi(t.hintImage ? { file: t.hintImage } : null)),
        l = screen.width <= 760;
      return (c, a) => (
        O(),
        B(
          pe,
          null,
          [
            (O(),
              _e(Nc, { to: "body" }, [
                re(
                  zf,
                  {
                    content: c.resultContent ?? "",
                    onCloseModal: a[0] || (a[0] = (u) => (r.value = !1)),
                    class: Ke([
                      "invisible opacity-0 transition-all duration-300",
                      { "!visible !opacity-100": r.value },
                    ]),
                  },
                  null,
                  8,
                  ["content", "class"]
                ),
              ])),
            c.isWarning
              ? (O(),
                B("div", Gf, [
                  P("div", Jf, [
                    re(Vr, { class: "aspect-[3/2] w-[3em] h-[2em] shrink-0" }),
                    P("div", Qf, oe(ue(qe)("warning")), 1),
                  ]),
                  P("div", Zf, oe(ue(qe)("warning_text")), 1),
                ]))
              : c.isRight
                ? (O(),
                  B("div", Xf, [
                    P("div", Yf, [
                      re(Vr, { class: "aspect-[3/2] w-[3em] h-[2em] shrink-0" }),
                      P("div", ed, oe(ue(qe)("correct_answer")), 1),
                    ]),
                    P(
                      "div",
                      {
                        class: Ke([
                          "p-4 md:p-12 md:gap-8",
                          c.hintImage ? "grid md:grid-cols-2" : "flex justify-center items-center",
                        ]),
                      },
                      [
                        c.hintImage
                          ? (O(),
                            B("div", td, [
                              P("div", nd, [
                                P(
                                  "img",
                                  {
                                    src: l ? i.value : o.value,
                                    alt: c.resultContent,
                                    class: "rounded-xl max-w-full max-h-full",
                                  },
                                  null,
                                  8,
                                  sd
                                ),
                              ]),
                            ]))
                          : Te("", !0),
                        n.value
                          ? (O(),
                            B("div", rd, [
                              P("p", null, [
                                Ve(oe(s(c.resultContent ?? "")) + " ", 1),
                                P(
                                  "span",
                                  {
                                    class: "italic underline cursor-pointer",
                                    onClick: a[1] || (a[1] = (u) => (r.value = !0)),
                                  },
                                  oe(ue(qe)("read_more")),
                                  1
                                ),
                              ]),
                            ]))
                          : (O(), B("div", od, oe(c.resultContent ?? ""), 1)),
                      ],
                      2
                    ),
                  ]))
                : c.isRight === !1
                  ? (O(),
                    B("div", id, [
                      P("div", ld, [
                        re(Ff, { class: "w-10 h-10" }),
                        P("div", cd, oe(ue(qe)("incorrect_answer")), 1),
                      ]),
                      P(
                        "div",
                        {
                          class: Ke([
                            "p-4 md:p-12 md:gap-8",
                            c.hintImage
                              ? "grid md:grid-cols-2"
                              : "flex justify-center items-center",
                          ]),
                        },
                        [
                          c.hintImage
                            ? (O(),
                              B("div", ud, [
                                P("div", ad, [
                                  P(
                                    "img",
                                    {
                                      src: l ? i.value : o.value,
                                      alt: c.resultContent,
                                      class: "rounded-xl max-w-full max-h-full",
                                    },
                                    null,
                                    8,
                                    fd
                                  ),
                                ]),
                              ]))
                            : Te("", !0),
                          n.value
                            ? (O(),
                              B("div", dd, [
                                P("p", null, [
                                  Ve(oe(s(c.resultContent ?? "")) + " ", 1),
                                  P(
                                    "span",
                                    {
                                      class: "italic underline cursor-pointer",
                                      onClick: a[2] || (a[2] = (u) => (r.value = !0)),
                                    },
                                    oe(ue(qe)("read_more")),
                                    1
                                  ),
                                ]),
                              ]))
                            : (O(), B("div", hd, oe(c.resultContent ?? ""), 1)),
                        ],
                        2
                      ),
                    ]))
                  : Te("", !0),
          ],
          64
        )
      );
    },
  }),
  md = { class: "flex gap-6 font-canela items-center flex-col md:flex-row md:my-0" },
  gd = ["innerHTML"],
  _d = $e({
    __name: "ISurvey",
    props: { data: {} },
    emits: ["goBack", "goNext", "saveAnswer", "endTest"],
    setup(e, { emit: t }) {
      const n = be(),
        s = e,
        r = t,
        o = xe(() => {
          var l;
          return (l = s.data.currentQuestion) == null
            ? void 0
            : l.options.find((c) => {
              var a, u;
              return (
                c.id ===
                ((u =
                  s.data.savedAnswers[
                  ((a = s.data.currentQuestion) == null ? void 0 : a.id) ?? -1
                  ]) == null
                  ? void 0
                  : u.selected_option_id)
              );
            });
        }),
        i = xe(() => {
          var l, c;
          return (
            ((l = o.value) == null ? void 0 : l.hint_image) ??
            ((c = s.data.currentQuestion) == null ? void 0 : c.file)
          );
        });
      return (l, c) => {
        var a, u;
        return l.data.currentQuestion
          ? (O(),
            B(
              "div",
              {
                key: 0,
                class:
                  "w-[773px] 2xl:w-[1028px] mx-4 text-[20px] inline-flex flex-col gap-6 font-thin",
                ref_key: "surveyContainer",
                ref: n,
              },
              [
                P("div", md, [
                  re(Iu, null, {
                    default: mt(() => [Ve(oe(l.data.currentQuestionNumber), 1)]),
                    _: 1,
                  }),
                  P(
                    "p",
                    {
                      class: "inline-block leading-[1.2em] text-center md:text-left",
                      innerHTML: l.data.currentQuestion.content.replaceAll("/n", "<br/>"),
                    },
                    null,
                    8,
                    gd
                  ),
                ]),
                re(
                  pd,
                  {
                    "is-warning": l.data.warning,
                    "is-right":
                      (a = l.data.savedAnswers[l.data.currentQuestion.id]) == null
                        ? void 0
                        : a.is_right,
                    "result-content":
                      ((u = o.value) == null ? void 0 : u.result_content) ??
                      l.data.currentQuestion.result_content,
                    "hint-image": i.value,
                  },
                  null,
                  8,
                  ["is-warning", "is-right", "result-content", "hint-image"]
                ),
                re(
                  ba,
                  {
                    question: l.data.currentQuestion,
                    "saved-answer": l.data.savedAnswers[l.data.currentQuestion.id],
                    onSaveAnswer: c[0] || (c[0] = (h, g) => r("saveAnswer", h, g)),
                  },
                  null,
                  8,
                  ["question", "saved-answer"]
                ),
                re(
                  Sf,
                  {
                    "can-go-back": l.data.canGoBack,
                    "is-last-question": l.data.isLastQuestion,
                    hint: l.data.currentQuestion.hint,
                    onGoBack: c[1] || (c[1] = (h) => r("goBack")),
                    onGoNext: c[2] || (c[2] = (h) => r("goNext")),
                    onFinishTest: c[3] || (c[3] = (h) => r("endTest")),
                  },
                  null,
                  8,
                  ["can-go-back", "is-last-question", "hint"]
                ),
              ],
              512
            ))
          : Te("", !0);
      };
    },
  }),
  Kr = (e) => {
    var t;
    (t = window.ym) == null || t.call(window, 96405981, "reachGoal", e);
  };
function Ei(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: yd } = Object.prototype,
  { getPrototypeOf: Js } = Object,
  Hn = ((e) => (t) => {
    const n = yd.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ne = (e) => ((e = e.toLowerCase()), (t) => Hn(t) === e),
  Un = (e) => (t) => typeof t === e,
  { isArray: Pt } = Array,
  Xt = Un("undefined");
function bd(e) {
  return (
    e !== null &&
    !Xt(e) &&
    e.constructor !== null &&
    !Xt(e.constructor) &&
    Ae(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Si = Ne("ArrayBuffer");
function wd(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Si(e.buffer)),
    t
  );
}
const xd = Un("string"),
  Ae = Un("function"),
  Ci = Un("number"),
  Dn = (e) => e !== null && typeof e == "object",
  vd = (e) => e === !0 || e === !1,
  _n = (e) => {
    if (Hn(e) !== "object") return !1;
    const t = Js(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ed = Ne("Date"),
  Sd = Ne("File"),
  Cd = Ne("Blob"),
  Rd = Ne("FileList"),
  Td = (e) => Dn(e) && Ae(e.pipe),
  Ad = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ae(e.append) &&
          ((t = Hn(e)) === "formdata" ||
            (t === "object" && Ae(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  Od = Ne("URLSearchParams"),
  [Ld, Pd, kd, $d] = ["ReadableStream", "Request", "Response", "Headers"].map(Ne),
  Nd = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function en(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let s, r;
  if ((typeof e != "object" && (e = [e]), Pt(e)))
    for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let l;
    for (s = 0; s < i; s++) (l = o[s]), t.call(null, e[l], l, e);
  }
}
function Ri(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length,
    r;
  for (; s-- > 0;) if (((r = n[s]), t === r.toLowerCase())) return r;
  return null;
}
const Ti =
  typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : global,
  Ai = (e) => !Xt(e) && e !== Ti;
function vs() {
  const { caseless: e } = (Ai(this) && this) || {},
    t = {},
    n = (s, r) => {
      const o = (e && Ri(t, r)) || r;
      _n(t[o]) && _n(s)
        ? (t[o] = vs(t[o], s))
        : _n(s)
          ? (t[o] = vs({}, s))
          : Pt(s)
            ? (t[o] = s.slice())
            : (t[o] = s);
    };
  for (let s = 0, r = arguments.length; s < r; s++) arguments[s] && en(arguments[s], n);
  return t;
}
const Id = (e, t, n, { allOwnKeys: s } = {}) => (
  en(
    t,
    (r, o) => {
      n && Ae(r) ? (e[o] = Ei(r, n)) : (e[o] = r);
    },
    { allOwnKeys: s }
  ),
  e
),
  Fd = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Md = (e, t, n, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  jd = (e, t, n, s) => {
    let r, o, i;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0;)
        (i = r[o]), (!s || s(i, e, t)) && !l[i] && ((t[i] = e[i]), (l[i] = !0));
      e = n !== !1 && Js(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Bd = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const s = e.indexOf(t, n);
    return s !== -1 && s === n;
  },
  Hd = (e) => {
    if (!e) return null;
    if (Pt(e)) return e;
    let t = e.length;
    if (!Ci(t)) return null;
    const n = new Array(t);
    for (; t-- > 0;) n[t] = e[t];
    return n;
  },
  Ud = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Js(Uint8Array)),
  Dd = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = s.next()) && !r.done;) {
      const o = r.value;
      t.call(e, o[0], o[1]);
    }
  },
  qd = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null;) s.push(n);
    return s;
  },
  Vd = Ne("HTMLFormElement"),
  Kd = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
      return s.toUpperCase() + r;
    }),
  Wr = (
    ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
  )(Object.prototype),
  Wd = Ne("RegExp"),
  Oi = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {};
    en(n, (r, o) => {
      let i;
      (i = t(r, o, e)) !== !1 && (s[o] = i || r);
    }),
      Object.defineProperties(e, s);
  },
  zd = (e) => {
    Oi(e, (t, n) => {
      if (Ae(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const s = e[n];
      if (Ae(s)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Gd = (e, t) => {
    const n = {},
      s = (r) => {
        r.forEach((o) => {
          n[o] = !0;
        });
      };
    return Pt(e) ? s(e) : s(String(e).split(t)), n;
  },
  Jd = () => { },
  Qd = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  rs = "abcdefghijklmnopqrstuvwxyz",
  zr = "0123456789",
  Li = { DIGIT: zr, ALPHA: rs, ALPHA_DIGIT: rs + rs.toUpperCase() + zr },
  Zd = (e = 16, t = Li.ALPHA_DIGIT) => {
    let n = "";
    const { length: s } = t;
    for (; e--;) n += t[(Math.random() * s) | 0];
    return n;
  };
function Xd(e) {
  return !!(e && Ae(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Yd = (e) => {
  const t = new Array(10),
    n = (s, r) => {
      if (Dn(s)) {
        if (t.indexOf(s) >= 0) return;
        if (!("toJSON" in s)) {
          t[r] = s;
          const o = Pt(s) ? [] : {};
          return (
            en(s, (i, l) => {
              const c = n(i, r + 1);
              !Xt(c) && (o[l] = c);
            }),
            (t[r] = void 0),
            o
          );
        }
      }
      return s;
    };
  return n(e, 0);
},
  eh = Ne("AsyncFunction"),
  th = (e) => e && (Dn(e) || Ae(e)) && Ae(e.then) && Ae(e.catch),
  p = {
    isArray: Pt,
    isArrayBuffer: Si,
    isBuffer: bd,
    isFormData: Ad,
    isArrayBufferView: wd,
    isString: xd,
    isNumber: Ci,
    isBoolean: vd,
    isObject: Dn,
    isPlainObject: _n,
    isReadableStream: Ld,
    isRequest: Pd,
    isResponse: kd,
    isHeaders: $d,
    isUndefined: Xt,
    isDate: Ed,
    isFile: Sd,
    isBlob: Cd,
    isRegExp: Wd,
    isFunction: Ae,
    isStream: Td,
    isURLSearchParams: Od,
    isTypedArray: Ud,
    isFileList: Rd,
    forEach: en,
    merge: vs,
    extend: Id,
    trim: Nd,
    stripBOM: Fd,
    inherits: Md,
    toFlatObject: jd,
    kindOf: Hn,
    kindOfTest: Ne,
    endsWith: Bd,
    toArray: Hd,
    forEachEntry: Dd,
    matchAll: qd,
    isHTMLForm: Vd,
    hasOwnProperty: Wr,
    hasOwnProp: Wr,
    reduceDescriptors: Oi,
    freezeMethods: zd,
    toObjectSet: Gd,
    toCamelCase: Kd,
    noop: Jd,
    toFiniteNumber: Qd,
    findKey: Ri,
    global: Ti,
    isContextDefined: Ai,
    ALPHABET: Li,
    generateString: Zd,
    isSpecCompliantForm: Xd,
    toJSONObject: Yd,
    isAsyncFn: eh,
    isThenable: th,
  };
function M(e, t, n, s, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    r && (this.response = r);
}
p.inherits(M, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Pi = M.prototype,
  ki = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ki[e] = { value: e };
});
Object.defineProperties(M, ki);
Object.defineProperty(Pi, "isAxiosError", { value: !0 });
M.from = (e, t, n, s, r, o) => {
  const i = Object.create(Pi);
  return (
    p.toFlatObject(
      e,
      i,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    M.call(i, e.message, t, n, s, r),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const nh = null;
function Es(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function $i(e) {
  return p.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gr(e, t, n) {
  return e
    ? e
      .concat(t)
      .map(function (r, o) {
        return (r = $i(r)), !n && o ? "[" + r + "]" : r;
      })
      .join(n ? "." : "")
    : t;
}
function sh(e) {
  return p.isArray(e) && !e.some(Es);
}
const rh = p.toFlatObject(p, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function qn(e, t, n) {
  if (!p.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = p.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (C, D) {
      return !p.isUndefined(D[C]);
    }));
  const s = n.metaTokens,
    r = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && p.isSpecCompliantForm(t);
  if (!p.isFunction(r)) throw new TypeError("visitor must be a function");
  function a(w) {
    if (w === null) return "";
    if (p.isDate(w)) return w.toISOString();
    if (!c && p.isBlob(w)) throw new M("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(w) || p.isTypedArray(w)
      ? c && typeof Blob == "function"
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function u(w, C, D) {
    let H = w;
    if (w && !D && typeof w == "object") {
      if (p.endsWith(C, "{}")) (C = s ? C : C.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (p.isArray(w) && sh(w)) ||
        ((p.isFileList(w) || p.endsWith(C, "[]")) && (H = p.toArray(w)))
      )
        return (
          (C = $i(C)),
          H.forEach(function (R, K) {
            !(p.isUndefined(R) || R === null) &&
              t.append(i === !0 ? Gr([C], K, o) : i === null ? C : C + "[]", a(R));
          }),
          !1
        );
    }
    return Es(w) ? !0 : (t.append(Gr(D, C, o), a(w)), !1);
  }
  const h = [],
    g = Object.assign(rh, { defaultVisitor: u, convertValue: a, isVisitable: Es });
  function v(w, C) {
    if (!p.isUndefined(w)) {
      if (h.indexOf(w) !== -1) throw Error("Circular reference detected in " + C.join("."));
      h.push(w),
        p.forEach(w, function (H, J) {
          (!(p.isUndefined(H) || H === null) &&
            r.call(t, H, p.isString(J) ? J.trim() : J, C, g)) === !0 && v(H, C ? C.concat(J) : [J]);
        }),
        h.pop();
    }
  }
  if (!p.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Jr(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function Qs(e, t) {
  (this._pairs = []), e && qn(e, this, t);
}
const Ni = Qs.prototype;
Ni.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ni.toString = function (t) {
  const n = t
    ? function (s) {
      return t.call(this, s, Jr);
    }
    : Jr;
  return this._pairs
    .map(function (r) {
      return n(r[0]) + "=" + n(r[1]);
    }, "")
    .join("&");
};
function oh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ii(e, t, n) {
  if (!t) return e;
  const s = (n && n.encode) || oh,
    r = n && n.serialize;
  let o;
  if (
    (r ? (o = r(t, n)) : (o = p.isURLSearchParams(t) ? t.toString() : new Qs(t, n).toString(s)), o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Qr {
  constructor() {
    this.handlers = [];
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    p.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const Fi = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  ih = typeof URLSearchParams < "u" ? URLSearchParams : Qs,
  lh = typeof FormData < "u" ? FormData : null,
  ch = typeof Blob < "u" ? Blob : null,
  uh = {
    isBrowser: !0,
    classes: { URLSearchParams: ih, FormData: lh, Blob: ch },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Zs = typeof window < "u" && typeof document < "u",
  ah = ((e) => Zs && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  fh =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  dh = (Zs && window.location.href) || "http://localhost",
  hh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Zs,
        hasStandardBrowserEnv: ah,
        hasStandardBrowserWebWorkerEnv: fh,
        origin: dh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ke = { ...hh, ...uh };
function ph(e, t) {
  return qn(
    e,
    new ke.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, r, o) {
          return ke.isNode && p.isBuffer(n)
            ? (this.append(s, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function mh(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function gh(e) {
  const t = {},
    n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++) (o = n[s]), (t[o] = e[o]);
  return t;
}
function Mi(e) {
  function t(n, s, r, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i),
      c = o >= n.length;
    return (
      (i = !i && p.isArray(r) ? r.length : i),
      c
        ? (p.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !l)
        : ((!r[i] || !p.isObject(r[i])) && (r[i] = []),
          t(n, s, r[i], o) && p.isArray(r[i]) && (r[i] = gh(r[i])),
          !l)
    );
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const n = {};
    return (
      p.forEachEntry(e, (s, r) => {
        t(mh(s), r, n, 0);
      }),
      n
    );
  }
  return null;
}
function _h(e, t, n) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (n || JSON.stringify)(e);
}
const tn = {
  transitional: Fi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || "",
        r = s.indexOf("application/json") > -1,
        o = p.isObject(t);
      if ((o && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t)))
        return r ? JSON.stringify(Mi(t)) : t;
      if (
        p.isArrayBuffer(t) ||
        p.isBuffer(t) ||
        p.isStream(t) ||
        p.isFile(t) ||
        p.isBlob(t) ||
        p.isReadableStream(t)
      )
        return t;
      if (p.isArrayBufferView(t)) return t.buffer;
      if (p.isURLSearchParams(t))
        return (
          n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString()
        );
      let l;
      if (o) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return ph(t, this.formSerializer).toString();
        if ((l = p.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return qn(l ? { "files[]": t } : t, c && new c(), this.formSerializer);
        }
      }
      return o || r ? (n.setContentType("application/json", !1), _h(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || tn.transitional,
        s = n && n.forcedJSONParsing,
        r = this.responseType === "json";
      if (p.isResponse(t) || p.isReadableStream(t)) return t;
      if (t && p.isString(t) && ((s && !this.responseType) || r)) {
        const i = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (i)
            throw l.name === "SyntaxError"
              ? M.from(l, M.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ke.classes.FormData, Blob: ke.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
p.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  tn.headers[e] = {};
});
const yh = p.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent",
]),
  bh = (e) => {
    const t = {};
    let n, s, r;
    return (
      e &&
      e
        .split(
          `
`
        )
        .forEach(function (i) {
          (r = i.indexOf(":")),
            (n = i.substring(0, r).trim().toLowerCase()),
            (s = i.substring(r + 1).trim()),
            !(!n || (t[n] && yh[n])) &&
            (n === "set-cookie"
              ? t[n]
                ? t[n].push(s)
                : (t[n] = [s])
              : (t[n] = t[n] ? t[n] + ", " + s : s));
        }),
      t
    );
  },
  Zr = Symbol("internals");
function jt(e) {
  return e && String(e).trim().toLowerCase();
}
function yn(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(yn) : String(e);
}
function wh(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = n.exec(e));) t[s[1]] = s[2];
  return t;
}
const xh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function os(e, t, n, s, r) {
  if (p.isFunction(s)) return s.call(this, t, n);
  if ((r && (t = n), !!p.isString(t))) {
    if (p.isString(s)) return t.indexOf(s) !== -1;
    if (p.isRegExp(s)) return s.test(t);
  }
}
function vh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Eh(e, t) {
  const n = p.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function (r, o, i) {
        return this[s].call(this, t, r, o, i);
      },
      configurable: !0,
    });
  });
}
class ve {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(l, c, a) {
      const u = jt(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const h = p.findKey(r, u);
      (!h || r[h] === void 0 || a === !0 || (a === void 0 && r[h] !== !1)) && (r[h || c] = yn(l));
    }
    const i = (l, c) => p.forEach(l, (a, u) => o(a, u, c));
    if (p.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (p.isString(t) && (t = t.trim()) && !xh(t)) i(bh(t), n);
    else if (p.isHeaders(t)) for (const [l, c] of t.entries()) o(c, l, s);
    else t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (((t = jt(t)), t)) {
      const s = p.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n) return r;
        if (n === !0) return wh(r);
        if (p.isFunction(n)) return n.call(this, r, s);
        if (p.isRegExp(n)) return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = jt(t)), t)) {
      const s = p.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || os(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(i) {
      if (((i = jt(i)), i)) {
        const l = p.findKey(s, i);
        l && (!n || os(s, s[l], l, n)) && (delete s[l], (r = !0));
      }
    }
    return p.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length,
      r = !1;
    for (; s--;) {
      const o = n[s];
      (!t || os(this, this[o], o, t, !0)) && (delete this[o], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const n = this,
      s = {};
    return (
      p.forEach(this, (r, o) => {
        const i = p.findKey(s, o);
        if (i) {
          (n[i] = yn(r)), delete n[o];
          return;
        }
        const l = t ? vh(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = yn(r)), (s[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      p.forEach(this, (s, r) => {
        s != null && s !== !1 && (n[r] = t && p.isArray(s) ? s.join(", ") : s);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[Zr] = this[Zr] = { accessors: {} }).accessors,
      r = this.prototype;
    function o(i) {
      const l = jt(i);
      s[l] || (Eh(r, i), (s[l] = !0));
    }
    return p.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ve.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
p.reduceDescriptors(ve.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    },
  };
});
p.freezeMethods(ve);
function is(e, t) {
  const n = this || tn,
    s = t || n,
    r = ve.from(s.headers);
  let o = s.data;
  return (
    p.forEach(e, function (l) {
      o = l.call(n, o, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    o
  );
}
function ji(e) {
  return !!(e && e.__CANCEL__);
}
function kt(e, t, n) {
  M.call(this, e ?? "canceled", M.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
p.inherits(kt, M, { __CANCEL__: !0 });
function Bi(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
      new M(
        "Request failed with status code " + n.status,
        [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
        n.config,
        n.request,
        n
      )
    );
}
function Sh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Ch(e, t) {
  e = e || 10;
  const n = new Array(e),
    s = new Array(e);
  let r = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const a = Date.now(),
        u = s[o];
      i || (i = a), (n[r] = c), (s[r] = a);
      let h = o,
        g = 0;
      for (; h !== r;) (g += n[h++]), (h = h % e);
      if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), a - i < t)) return;
      const v = u && a - u;
      return v ? Math.round((g * 1e3) / v) : void 0;
    }
  );
}
function Rh(e, t) {
  let n = 0;
  const s = 1e3 / t;
  let r = null;
  return function () {
    const i = this === !0,
      l = Date.now();
    if (i || l - n > s)
      return r && (clearTimeout(r), (r = null)), (n = l), e.apply(null, arguments);
    r ||
      (r = setTimeout(() => ((r = null), (n = Date.now()), e.apply(null, arguments)), s - (l - n)));
  };
}
const Cn = (e, t, n = 3) => {
  let s = 0;
  const r = Ch(50, 250);
  return Rh((o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      c = i - s,
      a = r(c),
      u = i <= l;
    s = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: c,
      rate: a || void 0,
      estimated: a && l && u ? (l - i) / a : void 0,
      event: o,
      lengthComputable: l != null,
    };
    (h[t ? "download" : "upload"] = !0), e(h);
  }, n);
},
  Th = ke.hasStandardBrowserEnv
    ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let s;
      function r(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (s = r(window.location.href)),
        function (i) {
          const l = p.isString(i) ? r(i) : i;
          return l.protocol === s.protocol && l.host === s.host;
        }
      );
    })()
    : (function () {
      return function () {
        return !0;
      };
    })(),
  Ah = ke.hasStandardBrowserEnv
    ? {
      write(e, t, n, s, r, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        p.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          p.isString(s) && i.push("path=" + s),
          p.isString(r) && i.push("domain=" + r),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
    : {
      write() { },
      read() {
        return null;
      },
      remove() { },
    };
function Oh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Lh(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Hi(e, t) {
  return e && !Oh(t) ? Lh(e, t) : t;
}
const Xr = (e) => (e instanceof ve ? { ...e } : e);
function bt(e, t) {
  t = t || {};
  const n = {};
  function s(a, u, h) {
    return p.isPlainObject(a) && p.isPlainObject(u)
      ? p.merge.call({ caseless: h }, a, u)
      : p.isPlainObject(u)
        ? p.merge({}, u)
        : p.isArray(u)
          ? u.slice()
          : u;
  }
  function r(a, u, h) {
    if (p.isUndefined(u)) {
      if (!p.isUndefined(a)) return s(void 0, a, h);
    } else return s(a, u, h);
  }
  function o(a, u) {
    if (!p.isUndefined(u)) return s(void 0, u);
  }
  function i(a, u) {
    if (p.isUndefined(u)) {
      if (!p.isUndefined(a)) return s(void 0, a);
    } else return s(void 0, u);
  }
  function l(a, u, h) {
    if (h in t) return s(a, u);
    if (h in e) return s(void 0, a);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (a, u) => r(Xr(a), Xr(u), !0),
  };
  return (
    p.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const h = c[u] || r,
        g = h(e[u], t[u], u);
      (p.isUndefined(g) && h !== l) || (n[u] = g);
    }),
    n
  );
}
const Ui = (e) => {
  const t = bt({}, e);
  let {
    data: n,
    withXSRFToken: s,
    xsrfHeaderName: r,
    xsrfCookieName: o,
    headers: i,
    auth: l,
  } = t;
  (t.headers = i = ve.from(i)),
    (t.url = Ii(Hi(t.baseURL, t.url), e.params, e.paramsSerializer)),
    l &&
    i.set(
      "Authorization",
      "Basic " +
      btoa(
        (l.username || "") +
        ":" +
        (l.password ? unescape(encodeURIComponent(l.password)) : "")
      )
    );
  let c;
  if (p.isFormData(n)) {
    if (ke.hasStandardBrowserEnv || ke.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [a, ...u] = c
        ? c
          .split(";")
          .map((h) => h.trim())
          .filter(Boolean)
        : [];
      i.setContentType([a || "multipart/form-data", ...u].join("; "));
    }
  }
  if (
    ke.hasStandardBrowserEnv &&
    (s && p.isFunction(s) && (s = s(t)), s || (s !== !1 && Th(t.url)))
  ) {
    const a = r && o && Ah.read(o);
    a && i.set(r, a);
  }
  return t;
},
  Ph = typeof XMLHttpRequest < "u",
  kh =
    Ph &&
    function (e) {
      return new Promise(function (n, s) {
        const r = Ui(e);
        let o = r.data;
        const i = ve.from(r.headers).normalize();
        let { responseType: l } = r,
          c;
        function a() {
          r.cancelToken && r.cancelToken.unsubscribe(c),
            r.signal && r.signal.removeEventListener("abort", c);
        }
        let u = new XMLHttpRequest();
        u.open(r.method.toUpperCase(), r.url, !0), (u.timeout = r.timeout);
        function h() {
          if (!u) return;
          const v = ve.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
            C = {
              data: !l || l === "text" || l === "json" ? u.responseText : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: v,
              config: e,
              request: u,
            };
          Bi(
            function (H) {
              n(H), a();
            },
            function (H) {
              s(H), a();
            },
            C
          ),
            (u = null);
        }
        "onloadend" in u
          ? (u.onloadend = h)
          : (u.onreadystatechange = function () {
            !u ||
              u.readyState !== 4 ||
              (u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
              setTimeout(h);
          }),
          (u.onabort = function () {
            u && (s(new M("Request aborted", M.ECONNABORTED, r, u)), (u = null));
          }),
          (u.onerror = function () {
            s(new M("Network Error", M.ERR_NETWORK, r, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let w = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
            const C = r.transitional || Fi;
            r.timeoutErrorMessage && (w = r.timeoutErrorMessage),
              s(new M(w, C.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, r, u)),
              (u = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
          p.forEach(i.toJSON(), function (w, C) {
            u.setRequestHeader(C, w);
          }),
          p.isUndefined(r.withCredentials) || (u.withCredentials = !!r.withCredentials),
          l && l !== "json" && (u.responseType = r.responseType),
          typeof r.onDownloadProgress == "function" &&
          u.addEventListener("progress", Cn(r.onDownloadProgress, !0)),
          typeof r.onUploadProgress == "function" &&
          u.upload &&
          u.upload.addEventListener("progress", Cn(r.onUploadProgress)),
          (r.cancelToken || r.signal) &&
          ((c = (v) => {
            u && (s(!v || v.type ? new kt(null, e, u) : v), u.abort(), (u = null));
          }),
            r.cancelToken && r.cancelToken.subscribe(c),
            r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
        const g = Sh(r.url);
        if (g && ke.protocols.indexOf(g) === -1) {
          s(new M("Unsupported protocol " + g + ":", M.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  $h = (e, t) => {
    let n = new AbortController(),
      s;
    const r = function (c) {
      if (!s) {
        (s = !0), i();
        const a = c instanceof Error ? c : this.reason;
        n.abort(a instanceof M ? a : new kt(a instanceof Error ? a.message : a));
      }
    };
    let o =
      t &&
      setTimeout(() => {
        r(new M(`timeout ${t} of ms exceeded`, M.ETIMEDOUT));
      }, t);
    const i = () => {
      e &&
        (o && clearTimeout(o),
          (o = null),
          e.forEach((c) => {
            c && (c.removeEventListener ? c.removeEventListener("abort", r) : c.unsubscribe(r));
          }),
          (e = null));
    };
    e.forEach((c) => c && c.addEventListener && c.addEventListener("abort", r));
    const { signal: l } = n;
    return (
      (l.unsubscribe = i),
      [
        l,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  Nh = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let s = 0,
      r;
    for (; s < n;) (r = s + t), yield e.slice(s, r), (s = r);
  },
  Ih = async function* (e, t, n) {
    for await (const s of e) yield* Nh(ArrayBuffer.isView(s) ? s : await n(String(s)), t);
  },
  Yr = (e, t, n, s, r) => {
    const o = Ih(e, t, r);
    let i = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(l) {
          const { done: c, value: a } = await o.next();
          if (c) {
            l.close(), s();
            return;
          }
          let u = a.byteLength;
          n && n((i += u)), l.enqueue(new Uint8Array(a));
        },
        cancel(l) {
          return s(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  eo = (e, t) => {
    const n = e != null;
    return (s) => setTimeout(() => t({ lengthComputable: n, total: e, loaded: s }));
  },
  Vn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  Di = Vn && typeof ReadableStream == "function",
  Ss =
    Vn &&
    (typeof TextEncoder == "function"
      ? (
        (e) => (t) =>
          e.encode(t)
      )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Fh =
    Di &&
    (() => {
      let e = !1;
      const t = new Request(ke.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  to = 64 * 1024,
  Cs =
    Di &&
    !!(() => {
      try {
        return p.isReadableStream(new Response("").body);
      } catch { }
    })(),
  Rn = { stream: Cs && ((e) => e.body) };
Vn &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Rn[t] &&
        (Rn[t] = p.isFunction(e[t])
          ? (n) => n[t]()
          : (n, s) => {
            throw new M(`Response type '${t}' is not supported`, M.ERR_NOT_SUPPORT, s);
          });
    });
  })(new Response());
const Mh = async (e) => {
  if (e == null) return 0;
  if (p.isBlob(e)) return e.size;
  if (p.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(e)) return e.byteLength;
  if ((p.isURLSearchParams(e) && (e = e + ""), p.isString(e))) return (await Ss(e)).byteLength;
},
  jh = async (e, t) => {
    const n = p.toFiniteNumber(e.getContentLength());
    return n ?? Mh(t);
  },
  Bh =
    Vn &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: s,
        signal: r,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: l,
        onUploadProgress: c,
        responseType: a,
        headers: u,
        withCredentials: h = "same-origin",
        fetchOptions: g,
      } = Ui(e);
      a = a ? (a + "").toLowerCase() : "text";
      let [v, w] = r || o || i ? $h([r, o], i) : [],
        C,
        D;
      const H = () => {
        !C &&
          setTimeout(() => {
            v && v.unsubscribe();
          }),
          (C = !0);
      };
      let J;
      try {
        if (c && Fh && n !== "get" && n !== "head" && (J = await jh(u, s)) !== 0) {
          let k = new Request(t, { method: "POST", body: s, duplex: "half" }),
            q;
          p.isFormData(s) && (q = k.headers.get("content-type")) && u.setContentType(q),
            k.body && (s = Yr(k.body, to, eo(J, Cn(c)), null, Ss));
        }
        p.isString(h) || (h = h ? "cors" : "omit"),
          (D = new Request(t, {
            ...g,
            signal: v,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: s,
            duplex: "half",
            withCredentials: h,
          }));
        let R = await fetch(D);
        const K = Cs && (a === "stream" || a === "response");
        if (Cs && (l || K)) {
          const k = {};
          ["status", "statusText", "headers"].forEach((N) => {
            k[N] = R[N];
          });
          const q = p.toFiniteNumber(R.headers.get("content-length"));
          R = new Response(Yr(R.body, to, l && eo(q, Cn(l, !0)), K && H, Ss), k);
        }
        a = a || "text";
        let W = await Rn[p.findKey(Rn, a) || "text"](R, e);
        return (
          !K && H(),
          w && w(),
          await new Promise((k, q) => {
            Bi(k, q, {
              data: W,
              headers: ve.from(R.headers),
              status: R.status,
              statusText: R.statusText,
              config: e,
              request: D,
            });
          })
        );
      } catch (R) {
        throw (
          (H(),
            R && R.name === "TypeError" && /fetch/i.test(R.message)
              ? Object.assign(new M("Network Error", M.ERR_NETWORK, e, D), { cause: R.cause || R })
              : M.from(R, R && R.code, e, D))
        );
      }
    }),
  Rs = { http: nh, xhr: kh, fetch: Bh };
p.forEach(Rs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch { }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const no = (e) => `- ${e}`,
  Hh = (e) => p.isFunction(e) || e === null || e === !1,
  qi = {
    getAdapter: (e) => {
      e = p.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, s;
      const r = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (((s = n), !Hh(n) && ((s = Rs[(i = String(n)).toLowerCase()]), s === void 0)))
          throw new M(`Unknown adapter '${i}'`);
        if (s) break;
        r[i || "#" + o] = s;
      }
      if (!s) {
        const o = Object.entries(r).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
            o.map(no).join(`
`)
            : " " + no(o[0])
          : "as no adapter specified";
        throw new M("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT");
      }
      return s;
    },
    adapters: Rs,
  };
function ls(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
    throw new kt(null, e);
}
function so(e) {
  return (
    ls(e),
    (e.headers = ve.from(e.headers)),
    (e.data = is.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
    e.headers.setContentType("application/x-www-form-urlencoded", !1),
    qi
      .getAdapter(e.adapter || tn.adapter)(e)
      .then(
        function (s) {
          return (
            ls(e),
            (s.data = is.call(e, e.transformResponse, s)),
            (s.headers = ve.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            ji(s) ||
            (ls(e),
              s &&
              s.response &&
              ((s.response.data = is.call(e, e.transformResponse, s.response)),
                (s.response.headers = ve.from(s.response.headers)))),
            Promise.reject(s)
          );
        }
      )
  );
}
const Vi = "1.7.2",
  Xs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Xs[e] = function (s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ro = {};
Xs.transitional = function (t, n, s) {
  function r(o, i) {
    return "[Axios v" + Vi + "] Transitional option '" + o + "'" + i + (s ? ". " + s : "");
  }
  return (o, i, l) => {
    if (t === !1) throw new M(r(i, " has been removed" + (n ? " in " + n : "")), M.ERR_DEPRECATED);
    return (
      n &&
      !ro[i] &&
      ((ro[i] = !0),
        console.warn(
          r(i, " has been deprecated since v" + n + " and will be removed in the near future")
        )),
      t ? t(o, i, l) : !0
    );
  };
};
function Uh(e, t, n) {
  if (typeof e != "object") throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0;) {
    const o = s[r],
      i = t[o];
    if (i) {
      const l = e[o],
        c = l === void 0 || i(l, o, e);
      if (c !== !0) throw new M("option " + o + " must be " + c, M.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new M("Unknown option " + o, M.ERR_BAD_OPTION);
  }
}
const Ts = { assertOptions: Uh, validators: Xs },
  Ze = Ts.validators;
class yt {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new Qr(), response: new Qr() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r;
        Error.captureStackTrace ? Error.captureStackTrace((r = {})) : (r = new Error());
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? o &&
            !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (s.stack +=
              `
` + o)
            : (s.stack = o);
        } catch { }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = bt(this.defaults, n));
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 &&
      Ts.assertOptions(
        s,
        {
          silentJSONParsing: Ze.transitional(Ze.boolean),
          forcedJSONParsing: Ze.transitional(Ze.boolean),
          clarifyTimeoutError: Ze.transitional(Ze.boolean),
        },
        !1
      ),
      r != null &&
      (p.isFunction(r)
        ? (n.paramsSerializer = { serialize: r })
        : Ts.assertOptions(r, { encode: Ze.function, serialize: Ze.function }, !0)),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && p.merge(o.common, o[n.method]);
    o &&
      p.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (w) => {
        delete o[w];
      }),
      (n.headers = ve.concat(i, o));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (C) {
      (typeof C.runWhen == "function" && C.runWhen(n) === !1) ||
        ((c = c && C.synchronous), l.unshift(C.fulfilled, C.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (C) {
      a.push(C.fulfilled, C.rejected);
    });
    let u,
      h = 0,
      g;
    if (!c) {
      const w = [so.bind(this), void 0];
      for (w.unshift.apply(w, l), w.push.apply(w, a), g = w.length, u = Promise.resolve(n); h < g;)
        u = u.then(w[h++], w[h++]);
      return u;
    }
    g = l.length;
    let v = n;
    for (h = 0; h < g;) {
      const w = l[h++],
        C = l[h++];
      try {
        v = w(v);
      } catch (D) {
        C.call(this, D);
        break;
      }
    }
    try {
      u = so.call(this, v);
    } catch (w) {
      return Promise.reject(w);
    }
    for (h = 0, g = a.length; h < g;) u = u.then(a[h++], a[h++]);
    return u;
  }
  getUri(t) {
    t = bt(this.defaults, t);
    const n = Hi(t.baseURL, t.url);
    return Ii(n, t.params, t.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function (t) {
  yt.prototype[t] = function (n, s) {
    return this.request(bt(s || {}, { method: t, url: n, data: (s || {}).data }));
  };
});
p.forEach(["post", "put", "patch"], function (t) {
  function n(s) {
    return function (o, i, l) {
      return this.request(
        bt(l || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (yt.prototype[t] = n()), (yt.prototype[t + "Form"] = n(!0));
});
class Ys {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0;) s._listeners[o](r);
      s._listeners = null;
    }),
      (this.promise.then = (r) => {
        let o;
        const i = new Promise((l) => {
          s.subscribe(l), (o = l);
        }).then(r);
        return (
          (i.cancel = function () {
            s.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, l) {
        s.reason || ((s.reason = new kt(o, i, l)), n(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ys(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
}
function Dh(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function qh(e) {
  return p.isObject(e) && e.isAxiosError === !0;
}
const As = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(As).forEach(([e, t]) => {
  As[t] = e;
});
function Ki(e) {
  const t = new yt(e),
    n = Ei(yt.prototype.request, t);
  return (
    p.extend(n, yt.prototype, t, { allOwnKeys: !0 }),
    p.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (r) {
      return Ki(bt(e, r));
    }),
    n
  );
}
const ce = Ki(tn);
ce.Axios = yt;
ce.CanceledError = kt;
ce.CancelToken = Ys;
ce.isCancel = ji;
ce.VERSION = Vi;
ce.toFormData = qn;
ce.AxiosError = M;
ce.Cancel = ce.CanceledError;
ce.all = function (t) {
  return Promise.all(t);
};
ce.spread = Dh;
ce.isAxiosError = qh;
ce.mergeConfig = bt;
ce.AxiosHeaders = ve;
ce.formToJSON = (e) => Mi(p.isHTMLForm(e) ? new FormData(e) : e);
ce.getAdapter = qi.getAdapter;
ce.HttpStatusCode = As;
ce.default = ce;
const er = (e = "ru", t) =>
  ce.create({
    baseURL: t ?? "https://dev-tests-api.qalam.global/",
    headers: { "Accept-Language": e },
  });
er();
const Wi = er(void 0, "https://dev-quiz.qalam.global");
er(void 0, "https://dev-api.qalam.global/api/v1");
const Vh = async (e, t = "ru") => {
  const { data: n } = await Wi.get(`/api/quizzes/${e}`, { headers: { "Accept-Language": t } });
  return { data: la(n), meta: { ...n, questions: void 0 } };
},
  Kh = (e = "ru") => Wi.get("/api/quizzes", { headers: { "Accept-Language": e } }),
  Wh = bi("main", () => {
    const e = be(!1),
      t = be(0),
      n = be([]),
      s = be({}),
      r = be(!1),
      o = be(""),
      i = be([]),
      l = be(),
      c = xe(() => n.value.find((R) => R.ordinal === t.value)),
      a = xe(() => !!(c.value && c.value.id in s.value)),
      u = xe(() => t.value > 1 && n.value.find((R) => R.ordinal === t.value - 1) !== null),
      h = xe(() => t.value === n.value[n.value.length - 1].ordinal),
      g = xe(() => Object.keys(s.value).filter((R) => s.value[Number(R)].is_right).length),
      v = () => {
        (r.value = !1), u.value && t.value--;
      },
      w = async () => {
        var R;
        (r.value = !1),
          a.value && !h.value
            ? (Kr(`${t.value}_${(R = l.value) == null ? void 0 : R.slug}`), t.value++)
            : h.value
              ? D()
              : setTimeout(() => (r.value = !0));
      },
      C = async (R) => {
        const K = xs();
        s.value = {};
        const { data: W, meta: k } = await Vh(R, K.locale);
        (o.value = R),
          (n.value = W),
          n.value.sort((q, N) => q.ordinal - N.ordinal),
          (r.value = !1),
          (l.value = k),
          (t.value = 1);
      },
      D = async () => {
        var R;
        if (a.value)
          (e.value = !0), Kr(`${t.value + 1}_${(R = l.value) == null ? void 0 : R.slug}`);
        else throw ((r.value = !0), "");
      };
    return {
      isTestEnded: e,
      questions: n,
      currentQuestion: c,
      currentQuestionNumber: t,
      canGoBack: u,
      canGoNext: a,
      savedAnswers: s,
      saveAnswer: (R, K) => {
        (s.value[K] = R), (r.value = !1);
      },
      isLastQuestion: h,
      warning: r,
      currentScore: g,
      slug: o,
      getAllTests: async () => {
        try {
          const R = xs(),
            { data: K } = await Kh(R.locale);
          (i.value = K),
            i.value.sort((W, k) => {
              const q = new Date(W.createdAt ?? 0).getTime();
              return new Date(k.createdAt ?? 0).getTime() - q;
            });
        } catch (R) {
          console.log("Error in stores/index.ts > getAllTests()", R);
        }
      },
      allTests: i,
      currentTestData: l,
      goBack: v,
      goNext: w,
      startTest: C,
      endTest: D,
    };
  }),
  zh = $e({
    __name: "App",
    props: { testSlug: {}, id: {} },
    setup(e) {
      const t = e,
        n = Wh(),
        { currentTestData: s } = Lu(n),
        { goBack: r, goNext: o, saveAnswer: i } = n,
        l = () =>
          n
            .endTest()
            .then(() => {
              window.dispatchEvent(
                new CustomEvent("test-ended", { detail: { id: t.id, score: n.currentScore } })
              );
            })
            .catch(() => { });
      return (
        qo(async () => {
          console.log(`Test with id ${t.id} mounted with slug "${t.testSlug}"`),
            await n.startTest(t.testSlug).catch((c) => {
              console.log({ statusCode: c.response.status, message: c.response.data });
            });
        }),
        (c, a) =>
          ue(s)
            ? (O(),
              _e(
                _d,
                {
                  key: 0,
                  data: ue(n),
                  onGoBack: ue(r),
                  onGoNext: ue(o),
                  onSaveAnswer: ue(i),
                  onEndTest: l,
                },
                null,
                8,
                ["data", "onGoBack", "onGoNext", "onSaveAnswer"]
              ))
            : Te("", !0)
      );
    },
  }),
  Os = Array.from(document.getElementsByClassName("qalam-tests-container"));
Os.length && console.log("Qalam Tests containers found:", Os);
Os.forEach((e) => {
  const t = wu(zh, { testSlug: e.dataset.testSlug ?? "chto-eto", id: e.id });
  t.use(Su()), t.mount(e);
});
