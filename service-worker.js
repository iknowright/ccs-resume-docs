if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,c,n)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return a;case"module":return o;default:return e(i)}}))).then((e=>{const i=n(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/page.css",revision:"a9a4495260e4c887f90782631adc97bb"},{url:"css/style.min.css",revision:"16a4cc20ac2ecce2dfd8bc11dcf43592"},{url:"css/vue-pdf.css",revision:"6faa319bf414bbb50d7c20451742b25c"},{url:"images/avatar.jpg",revision:"efad5baa6e2be1de6b57fbee083d51e1"},{url:"images/favicon/android-icon-144x144.png",revision:"3030aa34cef223ac0feaf7fa2fbc4e69"},{url:"images/favicon/android-icon-192x192.png",revision:"790975c675c4d5ffa401368118f879d0"},{url:"images/favicon/android-icon-36x36.png",revision:"cb20dc96775f7450a2d3c641cae2362c"},{url:"images/favicon/android-icon-48x48.png",revision:"92552fb4a7825a6a7a0a582b1dc4301f"},{url:"images/favicon/android-icon-72x72.png",revision:"30388e29a86a753069a471341c3e8002"},{url:"images/favicon/android-icon-96x96.png",revision:"7d176c6c79031b3725802ffe018387d4"},{url:"images/favicon/apple-icon-114x114.png",revision:"ea7bc1f12f6cea4bfffb983c5059d94e"},{url:"images/favicon/apple-icon-120x120.png",revision:"d77d88eb591e36eeed2d91b340e4f6f6"},{url:"images/favicon/apple-icon-144x144.png",revision:"3030aa34cef223ac0feaf7fa2fbc4e69"},{url:"images/favicon/apple-icon-152x152.png",revision:"f55bb7b19ea64b602a1dab293521764c"},{url:"images/favicon/apple-icon-180x180.png",revision:"a3709d98c72b9a9483cf50b20165cf92"},{url:"images/favicon/apple-icon-57x57.png",revision:"8ac2995ffcb3d1238d911e77c33211d6"},{url:"images/favicon/apple-icon-60x60.png",revision:"9a62509ae25661d533a9bc5d2081f47c"},{url:"images/favicon/apple-icon-72x72.png",revision:"30388e29a86a753069a471341c3e8002"},{url:"images/favicon/apple-icon-76x76.png",revision:"5e4d0547cc071f5256ab81f982c70917"},{url:"images/favicon/apple-icon-precomposed.png",revision:"a92a90d19a9cf3c9bc8689eb0205be0d"},{url:"images/favicon/apple-icon.png",revision:"a92a90d19a9cf3c9bc8689eb0205be0d"},{url:"images/favicon/favicon-16x16.png",revision:"285d9fc959305c3a6fbd54666573a8be"},{url:"images/favicon/favicon-32x32.png",revision:"aa24184fe7ff0a067bc00058d5ed1206"},{url:"images/favicon/favicon-96x96.png",revision:"7d176c6c79031b3725802ffe018387d4"},{url:"images/favicon/ms-icon-144x144.png",revision:"3030aa34cef223ac0feaf7fa2fbc4e69"},{url:"images/favicon/ms-icon-150x150.png",revision:"9ee5d68ca29253cf0b564474698947e6"},{url:"images/favicon/ms-icon-310x310.png",revision:"4562e34b834fe3c7f1fc9e33aa8dfda6"},{url:"images/favicon/ms-icon-70x70.png",revision:"9cb6a5ed4f1e4e1c5feace7588cbcf3f"},{url:"images/logo/ansible.png",revision:"cf48f92c8f76c8202db8b9e55b3ed3d1"},{url:"images/logo/aws.png",revision:"a4af65231621fba65fc5afd60149471f"},{url:"images/logo/bluetooth.png",revision:"a2c56a6b32f7352b1acf4d51684480d5"},{url:"images/logo/django.png",revision:"2308563e87d676f5a3d4c40e07fd4c72"},{url:"images/logo/docker.png",revision:"d90d02ea54e66ae38e81ab43d8cf7cea"},{url:"images/logo/ethereum.png",revision:"662673aba56fa1e02d50a841bb0957d3"},{url:"images/logo/fastapi.png",revision:"4e6fe843f843c878ac5c8931bfb60180"},{url:"images/logo/flask.png",revision:"653a4786f1e93ab50011155ed79ee68f"},{url:"images/logo/flutter.png",revision:"29cc077b8f33a112a45d90c8faa68cc3"},{url:"images/logo/gitlab.png",revision:"80b0b5494d198d133475f2d2aa234003"},{url:"images/logo/raspberry.png",revision:"339939394ea4dc45d767bfa4c73d0330"},{url:"images/logo/shellhub.png",revision:"53714767cc5a0a94cf9244e3e25c0628"},{url:"images/project/energy-trading.png",revision:"bc207923e15873e4bd587928faeb35f3"},{url:"images/project/ovitrap-1.png",revision:"1e5d9417e8c974706ac5332d1b530e2b"},{url:"images/project/ovitrap-2.png",revision:"f22b8b26152b73962dc70a98ba315100"},{url:"images/project/ovitrap-3.png",revision:"80f6b4125a2c5a8a148718629bbb9c5f"},{url:"images/project/wrist-app.png",revision:"40e4eb26967fe74dd1cc6355d5045db4"},{url:"images/project/wrist-collect.png",revision:"b18b127f5453da6bf978d591a42dd7b8"},{url:"index.html",revision:"c477eb6b3bee8dc8a52191911b4703a7"},{url:"js/common.js",revision:"ae798d30af603c3cbf2fa6549151dd0b"},{url:"js/css.escape.js",revision:"fe4db48c9e3f272a6d12cf1312de889e"},{url:"js/smooth-scroll.min.js",revision:"53a7fcc785e987d5ed08302f36de6653"}],{})}));
//# sourceMappingURL=service-worker.js.map