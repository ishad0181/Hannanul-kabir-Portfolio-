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
const likes = document.querySelectorAll('.like');
const likePaths = document.querySelectorAll('.like path:nth-child(1)');
const likePaths2 = document.querySelectorAll('.like path:nth-child(2)');
const postTitle = document.querySelectorAll('.post-title');
const postDescriptions = document.querySelectorAll('.post-des');
const name =document.querySelectorAll('.info-conti')
const postCards = document.querySelectorAll('.cards');
const postMores = document.querySelectorAll('.more');
const rpText = document.querySelector('.rptext');
// Initialize like states based on localStorage or default to false
let isLikedStates = JSON.parse(localStorage.getItem('isLikedStates')) || Array(likes.length).fill(false);

// Function to update the like button style based on like state
function updateLikeState(index) {
  if (isLikedStates[index]) {
    likePaths[index].style.fill = '#1c274c'; // Liked color
  } else {
    likePaths[index].style.fill = '#ffffff'; // Default color
  }
}

// Toggle like function for each element
likes.forEach((like, index) => {
  updateLikeState(index); // Set initial state on page load

  like.addEventListener('click', () => {
    isLikedStates[index] = !isLikedStates[index]; // Toggle the like state
    localStorage.setItem('isLikedStates', JSON.stringify(isLikedStates)); // Save all states to localStorage
    updateLikeState(index); // Update the style for this element
  });
});

// Handle the 'more' functionality for each post
postDescriptions.forEach((postDes, index) => {
  let isOpen = false;

  postDes.addEventListener('click', () => {
    if (isOpen === false) {
      // Start by setting a fixed height (e.g., initial height) before opening
      postDes.style.height = 'auto'; // Set to the full height of content
      postCards[index].style.height= 'auto'; // Same for post card
      postMores[index].innerText = 'See less';
      isOpen = true;
    } else {
      // Collapse it back to the original height (zero or a specific height)
      postDes.style.height = '';
      postCards[index].style.height = '';
      postMores[index].innerText = '...more';
      isOpen = false;
    }
  });
});
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
    body.style.background='#111111';
    h2.style.color = '#eee';
    divP.style.color = '#ccc';
    Sands.style.color = '#eee';
    darkMode.style.background = '#ffffff20';
    isdark = true;
    rpText.style.color ='#eee';
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
     postCards.forEach(pd => pd.style.background = '#151515');
     postTitle.forEach(tt => tt.style.color = '#eee');
     likePaths.forEach(lp => lp.style.background='#222222');
     likePaths.forEach(lp => lp.style.stroke='#eee');
     likePaths2.forEach(lp => lp.style.fill='#eee');
     name.forEach(nm => nm.style.color='#eee');
  } else {
  name.forEach(nm => nm.style.color='');
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
    rpText.style.color ='';
    isdark = false;
    darkMode.style.background = '';
    darkMode.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';

    // Reset color for each element in 'sec2' and 'sec2P' classes
    sec2Elements.forEach(el => el.style.color = '');
    sec2PElements.forEach(el => el.style.color = '');
    postCards.forEach(pd => pd.style.background = '');
    postTitle.forEach(tt => tt.style.color = '');
    likePaths.forEach(lp => lp.style.fill='');
    likePaths2.forEach(lp => lp.style.fill='');
    likePaths.forEach(lp => lp.style.stroke='');
  }
  
});
// Airtable API details
const apiToken = 'patyTbwKoqoNEv17z.254959f6c28e5a92bba55ddf2644606e647c6241a2085e4c65de2bf6ec958975';
const baseId = 'appZI7XwgPACxBYSt';
const tableName = 'Table%201'; // Spaces need to be URL encoded

// Airtable API URL
const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

// Function to fetch data from Airtable
async function fetchAirtableData() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${apiToken}`
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        // Declare individual variables for each field and assign data from the first record
        if (data.records.length > 0) {
            
            const postImgElements = document.querySelectorAll('.post-img'); // Select all post-img elements

            // Loop through each postTitle element and assign the title from Airtable to each one
            const postDate = document.querySelectorAll('.post-date');
            postDate.forEach((pt, index) => {
                if (data.records[index]) {
                    pt.innerText = data.records[index].fields.Date; // Assign title data
                }
            });
            postTitle.forEach((pt, index) => {
                if (data.records[index]) {
                    pt.innerText = data.records[index].fields.Title; // Assign title data
                }
            });
            
            postDescriptions.forEach((pt, index) => {
                if (data.records[index]) {
                    pt.innerText = data.records[index].fields.Description; // Assign title data
                }
            });

            // Loop through each post-img element and assign the image URL from Airtable to each one
            postImgElements.forEach((imgElement, index) => {
                if (data.records[index] && data.records[index].fields.Image) {
                    // Assuming Image field contains a direct URL (not an array of objects)
                    imgElement.src = data.records[index].fields.Image; // Set image src to the direct URL from Airtable
                }
            });
        }

    } catch (error) {
        console.error("Failed to fetch data from Airtable:", error);
    }
}

// Call the function
fetchAirtableData();