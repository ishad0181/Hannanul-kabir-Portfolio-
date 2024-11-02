const darkMode = document.querySelector('.dark-mode');
const body = document.querySelector('body');
const divP = document.querySelector('.div1 p');
const h2 = document.querySelector('.div1 h2');
const Sands = document.querySelector('.sands');
const spnP1 = document.querySelector('.spn-card p:nth-child(1)');
const spnP2 = document.querySelector('.spn-card p:nth-child(2)');
const tagLine = document.querySelector('.tagline');
const hu1 = document.querySelector('.hu1');
const hu2 = document.querySelector('.hu2');
const hu3 = document.querySelector('.hu3');
const hu4 = document.querySelector('.hu4');
const aboutMe = document.querySelector('.abme');
// Select all elements with the class 'sec2' and 'sec2P'
const sec2Elements = document.querySelectorAll('#sec2 div p:nth-child(1)');
const sec2PElements = document.querySelectorAll('#sec2 div p:nth-child(2)');
const div4H2 = document.querySelector('.div4 h2');
const div3H2 = document.querySelector('.div3 h2');
const email = document.querySelector('.email');
const emailSvg = document.querySelector('.email svg');
const otherSvg = document.querySelector('.othercontacts svg');
const svgpath = document.querySelector('othercontacts svg path');
const ctmBtn = document.querySelector('.ctm-btn');
const popup = document.querySelector('.popup-bg');
const contactInfo = document.querySelector('.contact-info');

//*other svg hover effect*//

//*tooltip*//
email.addEventListener('mouseover',() =>{
  emailSvg.style.opacity='1';
});
email.addEventListener('mouseout',() =>{
  emailSvg.style.opacity='';
});
//*dark mode program*//
let isdark = false;

darkMode.addEventListener('click', () => {
  if (isdark === false) {
  div4H2.style.color = '#eee';
  div3H2.style.color = '#eee';
    body.style.background = '#04010d';
    h2.style.color = '#eee';
    divP.style.color = '#ccc';
    Sands.style.color = '#eee';
    darkMode.style.background = '#ffffff20';
    isdark = true;
    darkMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z" style="fill:#fff;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';
    aboutMe.style.color ='#bbb';
    tagLine.style.color ='#eee';
    // Set color to white for each element in 'sec2' and 'sec2P' classes
    sec2Elements.forEach(el => el.style.color = '#fff');
    sec2PElements.forEach(el => el.style.color = '#ccc');
    hu1.style.color='#eee';
    hu2.style.color='#eee';
    hu3.style.color='#eee';
    hu4.style.color='#eee';
  } else {
   hu1.style.color='';
    hu2.style.color='';
    hu3.style.color='';
    hu4.style.color='';
  div4H2.style.color = '';
  div3H2.style.color = '';
   tagLine.style.color ='';
  aboutMe.style.color ='';
    body.style.background = '';
    h2.style.color = '';
    divP.style.color = '';
    Sands.style.color = '';
    isdark = false;
    darkMode.style.background = '';
    darkMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';

    // Reset color for each element in 'sec2' and 'sec2P' classes
    sec2Elements.forEach(el => el.style.color = '');
    sec2PElements.forEach(el => el.style.color = '');
  }
});
