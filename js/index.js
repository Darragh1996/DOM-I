const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let aTags = document.querySelectorAll("a");
aTags[0].textContent = siteContent["nav"]["nav-item-1"];
aTags[1].textContent = siteContent["nav"]["nav-item-2"];
aTags[2].textContent = siteContent["nav"]["nav-item-3"];
aTags[3].textContent = siteContent["nav"]["nav-item-4"];
aTags[4].textContent = siteContent["nav"]["nav-item-5"];
aTags[5].textContent = siteContent["nav"]["nav-item-6"];
let codePicture = document.getElementById("cta-img");
codePicture.setAttribute('src', siteContent['cta']['img-src'])
let heading = document.querySelector('h1');
heading.textContent = siteContent['cta']['h1'];
let btn = document.querySelector("button");
btn.textContent = siteContent['cta']['button'];
let h4s = document.querySelectorAll('h4');
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
let paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];
h4s[5].textContent = siteContent['contact']['contact-h4'];
paragraphs[5].textContent = siteContent['contact']['address']
paragraphs[6].textContent = siteContent['contact']['phone']
paragraphs[7].textContent = siteContent['contact']['email']
paragraphs[8].textContent = siteContent['footer']['copyright'];
for(let i =0; i < aTags.length; i++){
  aTags[i].style.color = 'green'
}
let nav = document.querySelector("nav");
let test = document.createElement('a');
test.textContent = 'Test';
nav.prepend(test);
let test2 = document.createElement('a');
test2.textContent = 'Test 2';
nav.appendChild(test2);
let contact = document.querySelector('.contact');
let newBtn = document.createElement('button');
newBtn.textContent = 'Press Me';
contact.prepend(newBtn);
newBtn.addEventListener('click', (event)=>{
  contact.style.background = 'red';
})