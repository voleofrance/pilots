let siteChart = null;
let monthChart = null;
let yearChart = null;
let currentFlightIndex = 0;
let allFlights = [];
let currentSortColumn = 'date';
let isAscending = false;
let lightbox = null;
let coordinatePickerMap = null;
let coordinateMarker = null;
let selectedFlightCoordinates = null;
let flightData = [];
let currentView = 'grid';
let currentSortedFlights = [];
let takeoffMarker = null;
let landingMarker = null;
let selectedTakeoffCoordinates = null;
let selectedLandingCoordinates = null;
let gearChanged = false;
let heatMap = null;
let gearData = {
    gliders: [], 
    harnesses: [], 
    reserve: [],
    activeGliderIndex: -1,
    activeHarnessIndex: -1 
};
let profileData = {
    qualifications: [],
    Courses: [],
    documents: [],
    birthDate: ''
};



// const pageContent = {
  
  
//     'cookie-policy-title': 'Política de privacitat i Cookies',
//     'cookie-policy-content': `
  
//   <h2>LEGAL NOTICE ON COPYRIGHT AND RESERVED RIGHTS</h2>
  
//    <h3>1. INTRODUCTION</h3>
//       <p>This Legal Notice sets out the terms and conditions related to copyright and reserved rights for this website, which is part of MENAIRO.COM, along with all its subdomains, such as pilots.menairo.com, meteo.menairo.com, and apps.menairo.com (hereinafter referred to as the "Website" or "Platform"). The use and access to this Website are governed by this Legal Notice. By using this Website, you accept the terms and conditions outlined herein.</p>
  
//    <h3>2. COPYRIGHT</h3>
//       <p>-The contents of this website, which is part of MENAIRO.COM (including all its subdomains, such as pilots.menairo.com, meteo.menairo.com, and future subdomains within MENAIRO.COM), including source code, texts, images, videos, logos, designs, GPX files, and any other material (hereinafter referred to as "Content"), are the property of Francesc Zamora and Joan M. Zamora, unless otherwise stated.</p>
    
//     <p>-In certain situations, it is essential to highlight that the images or videos we use are not our property but are provided by third parties. These third parties allow the material to be published on their profiles, meaning that the copyright of these images or videos is subject to the terms and conditions established by the copyright-owning company. On the other hand, in other specific cases, landscape, nature, museum materials, etc., are kindly provided by ‘Joan Manel Zamora,’ and in this case, the rights belong to him."</p>
  
//      <p>-The "ICONS" are the property of "ICONS8.COM," with usage rights credited to the author.</p>
  
//       <h3>3. RESERVED RIGHTS</h3>
//       <p>-All rights to the Contents of this Website are reserved. No use, reproduction, distribution, or modification of the Contents, in whole or in part, is permitted without the express written consent of the copyright holder. The use of the Contents for commercial purposes is expressly prohibited without prior written authorization from the rights holder.</p>
  
//   <p>-Additionally, this prohibition also applies to GPX files (GPX files are for personal use only), as well as all content within the application and images. The same terms and conditions apply to these contents, and any use, reproduction, distribution, or modification of this material will require the express written consent of the copyright holder.</p>
  
//    <p>-Regarding the database, no use, reproduction, distribution, or modification of the Contents, in whole or in part, is permitted without the express written consent of the legal representative of Menairó. If the database contains data provided by a third party, such data will be protected by that party's rights.
//   </p>
  
//       <h3>4. EXCEPTIONS: TYPOGRAPHICAL ERRORS</h3>
//       <p>Despite diligent efforts to ensure the accuracy of the information provided on this Website, typographical errors or unintentional inaccuracies may exist. The Website owner reserves the right to correct these errors and inaccuracies without prior notice.</p>
  
//       <h3>5. CONTACT</h3>
//       <p>If you believe any Content on this Website infringes your copyright or if you have any questions or inquiries related to this Legal Notice, you can contact us via the following email address.</p>
    
  
//     <h3>6. CHANGES TO THE LEGAL NOTICE</h3>
//       <p>The Website owner reserves the right to modify this Legal Notice at any time. Modifications will take effect on the date they are published on this Website. It is recommended to review this Legal Notice regularly to stay informed about any changes. Continued use of this Website after the publication of modifications constitutes acceptance of these changes.</p>
     
//   <p>-This Legal Notice is drafted in compliance with applicable intellectual property and copyright laws and aims to establish the rules for using the Contents of this Website. Users who do not accept these terms and conditions must cease using this Website immediately.</p>
  
  
  
//    <h2>DISCLAIMER NOTICE</h2>
//       <p>This Disclaimer Notice (hereinafter, "Notice") establishes the terms and conditions under which you ("User") use this website and any information, content, services, or materials available through this website (hereinafter, the "Site").</p>
  
  
//       <h3>1. Acceptance of Terms and Conditions</h3>
//       <p>By accessing and using this Site, the User agrees to comply with the terms and conditions set forth in this Notice. If the User does not agree with these terms, they are requested not to use this Site.</p>
  
//       <h3>2. Informational Purpose</h3>
//       <p>The content provided on this Site is purely for informational and educational purposes. It does not constitute legal, medical, financial, or any other type of advice. Any decision based on the information provided on this Site is the sole responsibility of the User.</p>
  
//       <h3>3. Changes to Content</h3>
//       <p>The information and content on this Site may change without prior notice. Although we strive to keep the information updated and accurate, we do not guarantee or represent the accuracy, completeness, or timeliness of the information provided on this Site.</p>
  
//       <h3>4.Use of Third-Party Content</h3>
//       <p>-This Site may contain links to third-party websites or incorporate content provided by third parties. We have no control over the content of these third-party websites and assume no responsibility for any information, services, or products provided through these websites.</p>
//     <p>-Hotel Reservations and Orders through External Platforms
// Hotel reservations are made through Booking or similar platforms. We are not responsible for their use. Likewise, for orders made through City Xerpa or similar services, we are also not responsible for the use of these platforms.</p>
//   <p>-WE ARE NOT RESPONSIBLE FOR ANY EXTERNAL LINK.</p>
  
//       <h3>5. Disclaimer of Liability</h3>
//       <p>-The User uses this Site at their own risk. We are not responsible for any direct, indirect, incidental, special, consequential, or punitive damages that may arise from the use or inability to use this Site. This Site serves as an informative guide for various activities, including cycling routes, BTT, hiking, climbing, via ferrata, sports facilities, points of interest such as monuments, shops, and other relevant aspects.</p>
//   <p>-We are not responsible in any way for any reckless or irresponsible action of the User, including engaging in sports or activities, visiting commercial establishments, or any issues arising from consuming food or services in restaurants or other establishments. In no case will we be liable for any damages or consequences that may result from the misuse of the information provided on this Site.</p>
//   <p>-Users are always advised to be cautious and prepared for the activities they undertake. We recommend checking the weather forecast before engaging in any outdoor activity and provide emergency contact information for mountain rescue, police, firefighters, medical emergency services, and information points. However, the decision to engage in activities is the User’s responsibility. Additionally, we are not responsible for any incidents or damages that may arise if the User carries out activities inside buildings or establishments.</p>
//   <p>-If the User contracts services and/or activities, makes purchases, or conducts transactions with companies advertised on this Site, the User is solely responsible for the resulting relationships and transactions. We assume no responsibility for any incidents, problems, or disadvantages that may arise from interactions between the User and companies advertising on this platform.</p>
  
  
  
//       <h3>6. No Professional Relationship</h3>
//       <p>Using this Site does not create a professional relationship between the User and us. We are not responsible for any legal, medical, financial, or other consequences the User may experience as a result of using this Site.</p>
//       <h3>7. Applicable Law</h3>
//       <p>This Disclaimer Notice is governed by the laws of Andorra, and any disputes arising in connection with this Notice are subject to the exclusive jurisdiction of the courts of Andorra.</p>
//       <h3>8. Modifications</h3>
//       <p>We reserve the right to modify this Notice at any time without prior notice. Any changes to this Notice will be effective immediately upon publication on this Site.</p>
//       <h3>9. Contact</h3>
//       <p>For any questions or concerns related to this Disclaimer Notice, the User can contact us using the contact information provided on this Site.</p>
//       <h3>10. USER</h3>
//       <p>By using this Site, the User confirms that they have read, understood, and accepted the terms and conditions of this Disclaimer Notice.</p>
  
//       <h2>LEGAL NOTICE ON THE USE OF COOKIES AND SIMILAR TECHNOLOGIES</h2>
//   <h3>1. INTRODUCTION</h3>
//       <p>This cookie policy (hereinafter, "Policy") aims to provide clear and complete information about the use of cookies and similar technologies on this website, in compliance with applicable European and national data protection and privacy regulations, including Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016, concerning the protection of natural persons regarding the processing of personal data and the free movement of such data (hereinafter, "General Data Protection Regulation" or "GDPR") and Organic Law 3/2018 of December 5 on Personal Data Protection and Digital Rights Guarantee (hereinafter, "LOPDGDD").</p>
//       <h3>2. WHAT ARE COOKIES?</h3>
//       <p>Cookies are small data files that are downloaded and stored on the user's device when browsing a website. These cookies allow the website to store and retrieve information about the user's browsing habits or device and, depending on the information they contain and how the device is used, they may be used to identify the user.</p>
//       <h3>3. WHY DO WE USE COOKIES?</h3>
//       <p>Cookies are an essential part of how our website functions. Using cookies allows us to improve your browsing experience by offering more relevant and personalized content, as well as facilitating and enhancing the use of the website. We use cookies to:</p>
//       <ul>
//         <li>-Enable certain functionalities of the website.</li>
//         <li>-Collect statistical data on how visitors use the website to improve its functionality and content.</li>
//         <li>-Personalize your experience by providing content tailored to your interests and preferences.</li>
//         <li>-Gather information to display relevant advertising.</li>
//       </ul>
  
  
  
  
//       <h3>4. TYPES OF COOKIES WE USE</h3>
//       <p>Below are the types of cookies we use:</p>
//   <li>-Strictly necessary cookies: These cookies are essential for you to navigate the website and use its basic features. They cannot be disabled.</li>
//   <li>-Performance cookies: These cookies collect anonymous information about how visitors use the website. They are used to improve the website's operation.</li>
//   <li>-Functionality cookies: These cookies allow the website to remember the options you have selected (such as language) and provide enhanced and more personalized functionalities.</li>
//   <li>-Marketing cookies: These cookies are used to track visitors across websites. The goal is to display ads that are relevant and appealing to the individual user.</li>
  
  
//       <h3>5. USER CONSENT</h3>
//       <p>By using this website, you accept and consent to the use of cookies in accordance with this Policy. If you do not accept the use of cookies, please configure your browser to block them. If you choose to block cookies, you may not be able to access certain parts of the website, and your browsing experience may be affected.</p>
  
//       <h3>6. HOW TO MANAGE COOKIES</h3>
//       <p>You can manage cookies through your browser settings. Below are instructions for the most common browsers:</p>
//   <li>-Google Chrome: Settings > Privacy and security > Cookies and other site data > Cookie settings.</li>
//   <li>-Mozilla Firefox: Options > Privacy & Security > History > Use custom settings for history.</li>
//   <li>-Internet Explorer: Tools > Internet Options > Privacy > Settings.</li>
//   <li>-Safari: Preferences > Privacy > Block.</li>
//     <p>Additionally, you can install browser extensions that offer additional features for managing cookies and other tracking elements. These extensions can be useful for users who want greater control over their online privacy.</p>
  
  
//       <h3>7. THIRD-PARTY COOKIES</h3>
//       <p>-In addition to our own cookies, this website may include third-party cookies for analytical, advertising, or tracking purposes. These third parties may include services such as Booking, TripAdvisor, Mapbox, or other similar platforms.</p>
//    <p>-It is important to note that we do not control the cookies used by these third parties. Their presence and use are subject to the respective privacy and cookie policies of those third parties. We recommend reviewing their policies to obtain more information on how they use cookies and other tracking technologies, as well as how to manage your privacy preferences.</p>
//       <h3>8. CONTACT</h3>
//       <p>-If you have any questions or concerns about the cookies used on this website, please contact us using the contact information provided on this page. We will be happy to assist you and provide further information on this topic.</p>
  
  
//   <h2>DATA COLLECTION AND USAGE</h2>
//    <p>-We want to assure our users that we do not collect or store sensitive personal data at any time, such as bank accounts, addresses, phone numbers, or other private information. We only use information that is already public and openly available. This means that such information will never be published on the platform. The only data collection is internal, using MATOMO for the MENAIRO.COM platforms and subdomains, and Mapbox, which is used exclusively for MENAIRO.COM (see the "Cookies" section).</p>
  
//   <p>-We emphasize that we only collect publicly available information and never request or store private user information. Additionally, at the time of writing this page, we have not implemented any user account registration system. Therefore, we do not store email addresses or other personal user data.
// </p>
//   <p>-In the future, we may consider implementing a user account system for our application. This system could allow users to save their favorite locations. Alternatively, we may explore options that do not require registration and store data only on the user's mobile device.</p>
//   <p></p>
//   <p></p>
//   <p></p>
//       <h3>WE DO NOT SHARE DATA WITH THIRD PARTIES</h3>
//       <p>We are committed to not sharing any user-provided data with third parties. The data collected, which is publicly available, is used solely to improve our services and is not provided to any other entity or person.
//   We are committed to protecting our users' privacy and complying with all applicable data protection regulations.</p>
//       <h3>DATA SECURITY</h3>
//       <p>Even though the data displayed on our platform is already public in nature, we implement appropriate technical and organizational measures to protect the security of the collected data and prevent any unauthorized access, disclosure, alteration, or destruction of the information.</p>
//       <h3>USER RIGHTS</h3>
//       <p>Users can be assured that their personal data will never be shared with third parties at any time. If they have any questions or concerns about data protection, they can contact us.</p>
    
//     `
  
//   };



let currentCalendarDate = new Date();
let flightDataForCalendar = []; // Store flight data for calendar




// const apps = [
//   {
//     title: "Votre Compagnon Sécurité",
//     desc: "Créez votre profil médical et accédez instantanément à vos informations d'urgence.",
//     img: "assets/icecode.webp",
//     link: "https://ice-code.domoun.re/index.php/fr/"
//   },
//   {
//     title: "Menairó Maps",
//     desc: "Rediscover Andorra",
//     img: "assets/mm-192.png",
//     link: "https://menairo.com"
//   },
//   {
//     title: "Gaggle",
//     desc: "Flight Instruments, Flight Recordings, and 3D Playback",
//     img: "assets/gaggle.png",
//     link: "https://flygaggle.com/"
//   },
//   {
//     title: "Voléo",
//     desc: "Tout le parapente en un clic, 100 % gratuit, sans pub, sans complications.",
//     img: "assets/social/3.png",
//     link: "https://voleo.org/"
//   }
// ];

// let index = 0;

// const container = document.getElementById("appsSlideshow");

// function renderApp(){

//     const app = apps[index];

//     container.innerHTML = `
//         <a href="${app.link}"
//            target="_blank"
//            class="icecode-link">

//             <div class="icecode">

//                 <img src="${app.img}" alt="${app.title}">


//                 <div class="banner-full">
//                 <div class="banner-in">
//                 <h2 class="ffvl-text-title">
//                     ${app.title}
//                     </h2>
//                 </div>
//                     <div class="banner-in">
//                     <span class="ffvl-since">
//                         ${app.desc}
//                     </span>
                
//             </div>
// </div>

//             </div>

//         </a>
//     `;
// }

// renderApp();

// setInterval(() => {

//     index = (index + 1) % apps.length;

//     renderApp();

// }, 10000);


const tabs = document.querySelectorAll('.profile-tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        // Retire active de tous les tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Cache tous les contenus
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Active le tab sélectionné
        tab.classList.add('active');

        // Affiche son contenu
        document
            .getElementById(`${target}Tab`)
            .classList.add('active');
    });
});



const apps = [
  {
    title: "Votre Compagnon Sécurité",
    desc: "Créez votre profil médical et accédez instantanément à vos informations d'urgence.",
    img: "assets/icecode.webp",
    link: "https://ice-code.domoun.re/index.php/fr/"
  },
  {
    title: "Menairó Maps",
    desc: "Rediscover Andorra",
    img: "assets/mm-192.png",
    link: "https://menairo.com"
  },
  {
    title: "Gaggle",
    desc: "Flight Instruments, Flight Recordings, and 3D Playback",
    img: "assets/gaggle.png",
    link: "https://flygaggle.com/"
  },
  {
    title: "Voléo",
    desc: "Tout le parapente en un clic, 100 % gratuit, sans pub, sans complications.",
    img: "assets/social/3.png",
    link: "https://voleo.org/"
  }
];

let index = 0;

const containers = document.querySelectorAll(".appsSlideshow");

function renderApps(){

    const app = apps[index];

    containers.forEach(container => {

        container.innerHTML = `
            <a href="${app.link}"
               target="_blank"
               class="icecode-link">

                <div class="icecode">

                    <img src="${app.img}" alt="${app.title}">

                    <div class="banner-full">

                        <div class="banner-in">
                            <h2 class="ffvl-text-title">
                                ${app.title}
                            </h2>
                        </div>

                        <div class="banner-in">
                            <span class="ffvl-since">
                                ${app.desc}
                            </span>
                        </div>

                    </div>

                </div>

            </a>
        `;
    });
}

renderApps();

setInterval(() => {

    index = (index + 1) % apps.length;

    renderApps();

}, 10000);





function initializeFlightCalendar() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const yearSelector = document.getElementById('yearSelector');

    // Add event listeners for navigation buttons
    if (prevBtn) prevBtn.addEventListener('click', () => navigateCalendar(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateCalendar(1));
    
    // Initialize year selector
    if (yearSelector) {
        populateYearSelector(yearSelector);
        yearSelector.addEventListener('change', (e) => changeYear(e.target.value));
    }
    
    // Load flight data and render calendar
    loadFlightDataForCalendar();
}

function populateYearSelector(selector) {
    const currentYear = currentCalendarDate.getFullYear();
    const years = [];

    // Generate a list of years for the dropdown (e.g., from currentYear - 5 to currentYear + 5)
    for (let i = currentYear - 45; i <= currentYear + 0; i++) {
        years.push(i);
    }

    // Populate the select dropdown with year options
    selector.innerHTML = years.map(year => 
        `<option value="${year}" ${year === currentYear ? 'selected' : ''}>${year}</option>`
    ).join('');
}

function changeYear(year) {
    currentCalendarDate.setFullYear(Number(year));  // Set the year to the selected value
    renderFlightCalendar();
    updateYearSelector(year);  // Update the year selector to reflect the current year
}

function navigateCalendar(direction) {
    const currentYear = currentCalendarDate.getFullYear();
    const currentMonth = currentCalendarDate.getMonth();

    // If moving forward and we're at the current year, prevent moving into the next year
    if (direction === 1 && currentYear === new Date().getFullYear() && currentMonth === 11) {
        return; // Don't let the user go past December of the current year
    }

    // Change the month by the given direction
    currentCalendarDate.setMonth(currentMonth + direction);
    
    // If the month goes beyond December (next year), update the year
    if (currentCalendarDate.getMonth() > 11) {
        currentCalendarDate.setMonth(0);
        currentCalendarDate.setFullYear(currentYear + 1);
    }

    // If the month goes before January (previous year), update the year
    if (currentCalendarDate.getMonth() < 0) {
        currentCalendarDate.setMonth(11);
        currentCalendarDate.setFullYear(currentYear - 1);
    }

    renderFlightCalendar();
    updateYearSelector(currentCalendarDate.getFullYear());  // Update the year selector after navigating
}


function updateYearSelector(year) {
    const yearSelector = document.getElementById('yearSelector');
    if (yearSelector) {
        yearSelector.value = year;  // Set the value of the year dropdown to the current year
    }
}

async function loadFlightDataForCalendar() {
    try {
        // Get all flights from IndexedDB
        const flights = await dbOperations.getAllData(STORES.flights);
        flightDataForCalendar = flights || [];
        console.log('Loaded flight data for calendar:', flightDataForCalendar.length, 'flights');
        renderFlightCalendar();
    } catch (error) {
        console.error('Error loading flight data for calendar:', error);
        flightDataForCalendar = [];
        renderFlightCalendar();
    }
}

function renderFlightCalendar() {
    const calendarContainer = document.getElementById('flightCalendar');
    const monthYearDisplay = document.getElementById('currentMonthYear');
    
    if (!calendarContainer) return;

    renderMonthView(calendarContainer, monthYearDisplay);
}

function renderMonthView(container, monthYearDisplay) {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    // Update month/year display
    if (monthYearDisplay) {
        monthYearDisplay.textContent = new Date(year, month).toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
        });
    }

    // Get flight data for this month
    const flightsInMonth = getFlightsInMonth(year, month);
    
    // Create calendar grid
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    const dayOfWeek = firstDay.getDay(); // 0 (Sun) to 6 (Sat)
    const offset = (dayOfWeek + 6) % 7;  // 0 → 6 (Sun), 1 → 0 (Mon), etc.
    startDate.setDate(startDate.getDate() - offset);

    let calendarHTML = '';
    
    // Weekday headers
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    weekdays.forEach(day => {
        calendarHTML += `<div class="calendar-weekday">${day}</div>`;
    });
    
    // Calendar days
    const today = new Date();
    for (let i = 0; i < 42; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        
        const isCurrentMonth = currentDate.getMonth() === month;
        const isToday = currentDate.toDateString() === today.toDateString();
        const dateKey = currentDate.toISOString().split('T')[0];
        const dayFlights = flightsInMonth[dateKey] || [];
        
        let dayClasses = 'calendar-day';
        if (!isCurrentMonth) dayClasses += ' other-month';
        if (isToday) dayClasses += ' today';
        if (dayFlights.length > 0) {
            dayClasses += ' has-flight';
            if (dayFlights.length > 1) dayClasses += ' multiple-flights';
        }
        
        let dataAttributes = '';
        if (dayFlights.length > 1) {
            dataAttributes = ` data-flight-count="${dayFlights.length}"`;
        }
        
        calendarHTML += `
            <div class="${dayClasses}"${dataAttributes} onclick="showFlightsForDate('${dateKey}')">
                ${currentDate.getDate()}
            </div>
        `;
    }
    
    container.className = 'flight-calendar month-view';
    container.innerHTML = calendarHTML;
}

function getFlightsInMonth(targetYear, targetMonth) {
    const flightsByDate = {};
    
    if (!flightDataForCalendar || !Array.isArray(flightDataForCalendar)) {
        return flightsByDate;
    }
    
    flightDataForCalendar.forEach(flight => {
        if (flight.date) {
            try {
                // Parse date in DD/MM/YY format
                const [day, month, year] = flight.date.split('/').map(Number);
                const flightDate = new Date(2000 + year, month - 1, day);
                
                // Compare with the requested year and month
                if (flightDate.getFullYear() === targetYear && flightDate.getMonth() === targetMonth) {
                    const dateKey = flightDate.toISOString().split('T')[0];
                    if (!flightsByDate[dateKey]) {
                        flightsByDate[dateKey] = [];
                    }
                    flightsByDate[dateKey].push(flight);
                }
            } catch (error) {
                console.error('Error parsing flight date:', flight.date, error);
            }
        }
    });
    
    return flightsByDate;
}


function showFlightsForDate(dateKey) {
    const selectedDate = new Date(dateKey);
    const dateStr = selectedDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    const flightsOnDate = getFlightsInMonth(selectedDate.getFullYear(), selectedDate.getMonth())[dateKey] || [];
    
    if (flightsOnDate.length === 0) {
        showCustomAlert(`<div class="alert-message">No flights on ${dateStr}</div>`);
        return;
    }
    
    let message = `<div class="alert-message"><strong>${dateStr}:</strong></div><div class="flights-list">`;
    flightsOnDate.forEach((flight, index) => {
        const timeStr = flight.timeOfDay ? `${flight.timeOfDay}` : '';
        const typeStr = flight.type ? `${flight.type}` : '';
        const siteStr = flight.site ? ` - ${flight.site}` : '';
        const durationStr = flight.time ? `${flight.time} min` : 'N/A';
        
        message += `
            <div class="flight-item">
                <div class="flight-number">#${index + 1}</div>
                <div class="flight-time">${timeStr ? ` - ${timeStr}` : ''}</div>
                <div class="flight-duration">${durationStr ? ` - ${durationStr}` : ''}</div>
                <div class="flight-site">${siteStr ? siteStr + ' - ' : ''}</div>
                <div class="flight-type">${typeStr ? typeStr : ''}</div>
            </div>
        `;
    });
    
    message += '</div>';
    
    showCustomAlert(message);
}


// Function to refresh calendar when flight data changes
function refreshFlightCalendar() {
    loadFlightDataForCalendar();
}












//   function openModalCopy() {
//     const modal = document.getElementById('fullScreenModalcopy');
//     if (pageContent && 'cookie-policy-title' in pageContent && 'cookie-policy-content' in pageContent) {
//         document.getElementById('cookie-policy-title').textContent = pageContent['cookie-policy-title'];
//         document.getElementById('cookie-policy-content').innerHTML = pageContent['cookie-policy-content'];
//     } else {
//         console.error('Cookie policy content not found in pageContent');
//     }
//     modal.style.display = 'block';

//     // Add close functionality
//     const closeIcon = modal.querySelector('.close-icon');
//     closeIcon.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     // Optional: Close modal when clicking outside
//     modal.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// }

//   const handleCookieBanner = () => {
//     const cookiesBanner = document.getElementById('cookies-banner');
//     if (!cookiesBanner) {
//         console.error('Cookie banner element not found');
//         return;
//     }

//     // Add specific event listener for the learn more button
//     document.getElementById('learn-more-cookies').addEventListener('click', (event) => {
//         event.preventDefault();
//         openModalCopy();
//     });

//     document.addEventListener('click', (event) => {
//         const target = event.target;
        
//         // Check if the clicked element or any of its parents have the ID
//         const clickedCopyright = target.closest('#copyright-clickable, #copyright-clickable-menu');
        
//         if (clickedCopyright) {
//             event.preventDefault();
//             openModalCopy();
//             return;
//         }
        
//         // Handle cookie consent buttons
//         if (target.matches('#accept-cookies')) {
//             manageCookieConsent('accept');
//             return;
//         }
//         if (target.matches('#reject-cookies')) {
//             manageCookieConsent('reject');
//             return;
//         }
//     });

//     const showBanner = () => {
//         const consentStatus = checkCookieConsent();
//         if (!consentStatus) {
//             cookiesBanner.style.display = 'block';
//         }
//     };

//     if ('requestIdleCallback' in window) {
//         requestIdleCallback(showBanner);
//     } else {
//         setTimeout(showBanner, 0);
//     }
// };
  
  
  
  



// function manageCookieConsent(action) {
//     console.log('manageCookieConsent called with action:', action);
//     const cookiesBanner = document.getElementById('cookies-banner');
//     if (!cookiesBanner) {
//         console.error('Cookie banner element not found');
//         return;
//     }
    
//     if (action === 'accept' || action === 'reject') {
//         console.log(`${action.charAt(0).toUpperCase() + action.slice(1)}ing cookies`);
        
//         const consentData = {
//             status: action,
//             timestamp: new Date().toISOString()
//         };
//         localStorage.setItem('cookieConsent', JSON.stringify(consentData));
  
    
//         cookiesBanner.style.display = 'none';
//     } else {
//         console.error('Invalid action:', action);
//     }
//     }
    
//     function checkCookieConsent() {
//     const consentData = localStorage.getItem('cookieConsent');
//     if (consentData) {
//       const { status, timestamp } = JSON.parse(consentData);
//       const consentAge = (new Date() - new Date(timestamp)) / (1000 * 60 * 60 * 24); 
    
//       if (consentAge > 365) { 
//         console.log('Consent is older than 365 days, resetting.');
//         return null;
//       }
//       return status;
//     }
//     return null;
//     }




const paraglindingQuotes = [
    "The air is the only place free from prejudice. - Bessie Coleman",
    "In paragliding, the journey is the destination.",
    "The sky is not the limit, it's home.",
    "Life is better with altitude.",
    "Free as a bird, grounded as a pilot.",
    "Between earth and heaven, find yourself.",
    "Every landing is a new beginning.",
    "The best view comes after the hardest climb.",
    "Touch the sky, feel alive.",
    "Gravity can't hold a dreamer down.",
    "In the sky, everyone speaks the same language.",
    "When in doubt, fly it out.",
    "The wind whispers freedom to those who listen.",
    "Life is short, fly often.",
    "No elevator to success, take the thermal up.",
    "The sky calls to all of us, but paragliders answer.",
    "Find peace where earth meets sky.",
    "Flying is learning how to throw yourself at the ground and miss. - Douglas Adams",
    "The moment you doubt whether you can fly, you cease forever to be able to do it. - J.M. Barrie",
    "Adventure is worthwhile in itself. - Amelia Earhart",
    "Once you have tasted flight, you will forever walk the earth with your eyes turned skyward. - Leonardo da Vinci",
    "The good thing about flying solo is it's never boring. - Steve Fossett",
    "There's something in a gliding bird that points toward the sea. - Robert Frost",
    "The air up there in the clouds is very pure and fine, bracing and delicious. - John Muir",
    "To fly is to take power from the dreams we dare to dream.",
    "Thermals don't ask for experience, they teach it.",
    "The sky is not our limit, it's our playground.",
    "Where wings take dream.",
    "Freedom is a harness and a wing.",
    "Every flight is a story waiting to be told."
];
function isMobileDevice() {
    return (
        window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
}
function displayRandomQuote() {
    const quoteElement = document.getElementById('random-quote');
    const randomIndex = Math.floor(Math.random() * paraglindingQuotes.length);
    quoteElement.textContent = paraglindingQuotes[randomIndex];
}
const countries = [
    { code: 'AD', name: 'Andorra' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AL', name: 'Albania' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AO', name: 'Angola' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AT', name: 'Austria' },
    { code: 'AU', name: 'Australia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BI', name: 'Burundi' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BZ', name: 'Belize' },
    { code: 'CA', name: 'Canada' },
    { code: 'CD', name: 'Democratic Republic of the Congo' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'CG', name: 'Republic of the Congo' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'CI', name: 'Ivory Coast' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'CL', name: 'Chile' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DE', name: 'Germany' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EE', name: 'Estonia' },
    { code: 'EG', name: 'Egypt' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'ES', name: 'Spain' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FI', name: 'Finland' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FK', name: 'Falkland Islands' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'FO', name: 'Faroe Islands' },
    { code: 'FR', name: 'France' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GE', name: 'Georgia' },
    { code: 'GF', name: 'French Guiana' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GL', name: 'Greenland' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GP', name: 'Guadeloupe' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'GR', name: 'Greece' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GU', name: 'Guam' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HR', name: 'Croatia' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HU', name: 'Hungary' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IN', name: 'India' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IR', name: 'Iran' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JO', name: 'Jordan' },
    { code: 'JP', name: 'Japan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KM', name: 'Comoros' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'KP', name: 'North Korea' },
    { code: 'KR', name: 'South Korea' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LY', name: 'Libya' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MD', name: 'Moldova' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'ML', name: 'Mali' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'MO', name: 'Macau' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MT', name: 'Malta' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'MV', name: 'Maldives' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MX', name: 'Mexico' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NE', name: 'Niger' },
    { code: 'NF', name: 'Norfolk Island' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NO', name: 'Norway' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NU', name: 'Niue' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'OM', name: 'Oman' },
    { code: 'PA', name: 'Panama' },
    { code: 'PE', name: 'Peru' },
    { code: 'PF', name: 'French Polynesia' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PL', name: 'Poland' },
    { code: 'PM', name: 'Saint Pierre and Miquelon' },
    { code: 'PN', name: 'Pitcairn Islands' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'PS', name: 'Palestine' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PW', name: 'Palau' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RE', name: 'Réunion' },
    { code: 'RO', name: 'Romania' },
    { code: 'RS', name: 'Serbia' },
    { code: 'RU', name: 'Russia' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SE', name: 'Sweden' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SH', name: 'Saint Helena' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SM', name: 'San Marino' },
    { code: 'SN', name: 'Senegal' },
    { code: 'SO', name: 'Somalia' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SS', name: 'South Sudan' },
    { code: 'ST', name: 'São Tomé and Príncipe' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'SY', name: 'Syria' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'TD', name: 'Chad' },
    { code: 'TG', name: 'Togo' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TL', name: 'East Timor' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'UG', name: 'Uganda' },
    { code: 'US', name: 'United States' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VA', name: 'Vatican City' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VG', name: 'British Virgin Islands' },
    { code: 'VI', name: 'U.S. Virgin Islands' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'WF', name: 'Wallis and Futuna' },
    { code: 'WS', name: 'Samoa' },
    { code: 'YE', name: 'Yemen' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' }
];
window.addEventListener('load', initializeFlights);


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
                
                // Force update check
                registration.update();
                
                // Force cache update when page loads
                if (navigator.serviceWorker.controller) {
                    navigator.serviceWorker.controller.postMessage({
                        type: 'UPDATE_CACHE'
                    });
                }
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
    
    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', event => {
        if (event.data && event.data.type === 'UPDATE_COMPLETE') {
            console.log('Cache update complete');
        }
    });
}

//FAQ
function openfaqmodal() {
    const modal = document.getElementById('faq-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closefaqmodal() {
    const modal = document.getElementById('faq-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}




// document.addEventListener('DOMContentLoaded', () => {
//     const openBtn = document.getElementById('badge-open-button');
//     const modal = document.getElementById('badge-modal');
//     const modalClose = document.querySelector('.modal-close-badge');
//     const toggle = document.getElementById('badge-open-button');
  
//     async function openModal() {
//         const flights = await dbOperations.getAllFromStore(STORES.flights);
//         const badges = await badgesSummary(flights || []); // Modify badgesSummary to return badge list
//         await preloadBadgeImages(badges);
        
//         modal.classList.add('show');
//         document.body.classList.add('modal-open');
//       }
      
  
//     function closeModal() {
//       modal.classList.remove('show');
//       document.body.classList.remove('modal-open');
//       if (toggle) toggle.checked = false;
//     }
  
//     openBtn.addEventListener('click', openModal);
//     modalClose.addEventListener('click', closeModal);
  
//     window.addEventListener('click', (event) => {
//       if (event.target === modal) {
//         closeModal();
//       }
//     });
//   });
  
  
function scrollModalToTop(modal) {
    const modalContent = modal.querySelector('.modal-content');

    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

  
// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('faq-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closefaqmodal();
            }
        });
    }
});

//INDEXEDB
async function ensureFavoriteSitesInitialized() {
    try {
        const sites = await dbOperations.getData(STORES.favoriteSites, 'sites');
        if (!sites) {
            await dbOperations.setData(STORES.favoriteSites, [], 'sites');
        }
    } catch (error) {
        console.error('Error initializing favorite sites:', error);
    }
}
window.addEventListener('load', async () => {
    await ensureFavoriteSitesInitialized();
});


let db = null;
const STORES = {
    flights: 'flights',
    // tracks: 'tracks',
    gear: 'gear',
    profile: 'profile',
    favoriteSites: 'favoriteSites'
};


const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('ParaglidingDB', 7); // Increment version for new structure

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const transaction = event.target.transaction;

            // Create object stores only if they don't exist
            if (!db.objectStoreNames.contains(STORES.flights)) {
                db.createObjectStore(STORES.flights, { keyPath: 'id', autoIncrement: true });
            }

            if (!db.objectStoreNames.contains(STORES.gear)) {
                db.createObjectStore(STORES.gear);
            }
            if (!db.objectStoreNames.contains(STORES.profile)) {
                db.createObjectStore(STORES.profile);
            }
            if (!db.objectStoreNames.contains(STORES.favoriteSites)) {
                const favoriteSitesStore = db.createObjectStore(STORES.favoriteSites);
                favoriteSitesStore.put([], 'sites');
            }

            // Initialize 'gear' store with default data if it's empty
            const gearStore = transaction.objectStore(STORES.gear);
            const getGearRequest = gearStore.get('defaultGear');
            getGearRequest.onsuccess = () => {
                if (!getGearRequest.result) {
                    gearStore.put({
                        gliders: [],
                        harnesses: [],
                        reserve: [],
                        activeGliderIndex: -1,
                        activeHarnessIndex: -1
                    }, 'defaultGear');
                }
            };

            // Profile Store Initialization
            const profileStore = transaction.objectStore(STORES.profile);

            // Check if basic profile exists and insert default if it does not
            // const basicProfileRequest = profileStore.get('basicProfile');
            // basicProfileRequest.onsuccess = () => {
            //     if (!basicProfileRequest.result) {
            //         profileStore.put({
            //             name: '',
            //             image: 'assets/default-profile.png',
            //             birthDate: '',
            //             weight: '',
            //             backgroundImage: 'url("assets/default-background1.jpg")'
            //         }, 'basicProfile');
            //     }
            // };
            const basicProfileRequest = profileStore.get('basicProfile');

            basicProfileRequest.onsuccess = () => {
                if (!basicProfileRequest.result) {
                    profileStore.put({
                        name: '',
                        image: 'assets/default-profile.png',
                        birthDate: '',
                        weight: '',
                        blood: '',
                        license: '',
                        backgroundImage: 'none',
                        backgroundColor: 'white'
                    }, 'basicProfile');
                }
            };

            // Check if extended profile exists and insert default if it does not
            const extendedProfileRequest = profileStore.get('extendedProfile');
            extendedProfileRequest.onsuccess = () => {
                if (!extendedProfileRequest.result) {
                    profileStore.put({
                        qualifications: [],
                        Courses: [],
                        documents: []
                    }, 'extendedProfile');
                } else {
                    // Ensure 'Courses' is not overwritten if it already exists
                    const extendedProfile = extendedProfileRequest.result;
                    if (!extendedProfile.Courses || extendedProfile.Courses.length === 0) {
                        extendedProfile.Courses = [];  // Default to empty if null or undefined
                    }
                    // Do not overwrite if 'Courses' already contains data
                    profileStore.put(extendedProfile, 'extendedProfile');
                }
            };
        };
    });
};



const ensureDB = async () => {
    if (!db) {
        await initDB();
    }
    return db;
};

const dbOperations = {
    getFavoriteSites: async () => {
        try {
            const sites = await dbOperations.getData(STORES.favoriteSites, 'sites');
            return sites || [];
        } catch (error) {
            console.error('Error getting favorite sites:', error);
            return [];
        }
    },

    toggleFavoriteSite: async (site) => {
        try {
            let sites = await dbOperations.getData(STORES.favoriteSites, 'sites') || [];
            const isFavorite = sites.includes(site);
            
            if (isFavorite) {
                sites = sites.filter(s => s !== site);
            } else {
                sites.push(site);
            }
            
            await dbOperations.setData(STORES.favoriteSites, sites, 'sites');
            return !isFavorite; // Return new favorite status
        } catch (error) {
            console.error('Error toggling favorite site:', error);
            throw error;
        }
    },

    isSiteFavorite: async (site) => {
        try {
            const sites = await dbOperations.getData(STORES.favoriteSites, 'sites') || [];
            return sites.includes(site);
        } catch (error) {
            console.error('Error checking favorite site:', error);
            return false;
        }
    },
    getAllFromStore: async (storeName) => {
        try {
            const db = await ensureDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction([storeName], 'readonly');
                const store = transaction.objectStore(storeName);
                const request = store.getAll();
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error(`Error getting all data from ${storeName}:`, error);
            return null;
        }
    },
    getAllFlights: async () => {
        try {
            const db = await ensureDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(['flights'], 'readonly');
                const store = transaction.objectStore('flights');
                const request = store.getAll();
                
                request.onsuccess = () => {
                    const flights = request.result;

                    resolve(flights);
                };
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error('Error in getAllFlights:', error);
            return [];
        }
    },
    saveFlight: async (flight) => {
        try {
            const db = await ensureDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(['flights'], 'readwrite');
                const store = transaction.objectStore('flights');
                
                const { id, ...flightData } = flight;
                
                const mapCanvas = document.querySelector('#map canvas');
                // if (mapCanvas) {
                //     try {
                //         flightData.minimapImage = mapCanvas.toDataURL();
                //     } catch (error) {
                //         console.error('Error creating minimap:', error);
                //     }
                // }
                
                const request = store.add(flightData);
                
                request.onsuccess = () => {

                    resolve(request.result);
                };
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error('Error saving flight:', error);
            throw error;
        }
    },

    updateFlight: async (flight) => {
        const db = await ensureDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(['flights'], 'readwrite');
            const store = transaction.objectStore('flights');
            const request = store.put(flight);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    deleteFlight: async (id) => {
        const db = await ensureDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(['flights'], 'readwrite');
            const store = transaction.objectStore('flights');
            const request = store.delete(id);
            
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    getData: async (storeName, key = null) => {
        const db = await ensureDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            
            if (storeName === STORES.gear && !key) {
                key = 'defaultGear';
            }
            
            const request = key ? store.get(key) : store.getAll();
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    setData: async (storeName, data, key = null) => {
        const db = await ensureDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            
            if (storeName === STORES.gear && !key) {
                key = 'defaultGear';
            }
            
            const request = key ? store.put(data, key) : store.put(data);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    deleteData: async (storeName, key) => {
        const db = await ensureDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(key);
            
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    getFlight: async (id) => {
        const db = await ensureDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(['flights'], 'readonly');
            const store = transaction.objectStore('flights');
            const request = store.get(id);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },
    clearStore: async (storeName) => {
        try {
            const db = await ensureDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction([storeName], 'readwrite');
                const store = transaction.objectStore(storeName);
                const request = store.clear();
                
                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error(`Error clearing store ${storeName}:`, error);
            throw error;
        }
    },

    clearAllData: async () => {
        try {
            for (const storeName of Object.values(STORES)) {
                await dbOperations.clearStore(storeName);
            }
        } catch (error) {
            console.error('Error clearing all data:', error);
            throw error;
        }
    },
    async getAllData(storeName) {
        try {
            const db = await ensureDB();  
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(storeName, 'readonly');
                const store = transaction.objectStore(storeName);
                const request = store.getAll();

                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error(`Error getting all data from ${storeName}:`, error);
            return [];
        }
    },
    deleteFromStore: async (storeName, key) => {
        try {
            const db = await ensureDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction([storeName], 'readwrite');
                const store = transaction.objectStore(storeName);
                const request = store.delete(key);
                
                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            });
        } catch (error) {
            console.error(`Error deleting from ${storeName}:`, error);
            throw error;
        }
    }
};




//COORDINATES
function closeCoordinatePickerModal() {
    const modal = document.getElementById('coordinatePickerModal');
    modal.style.display = 'none';
}

function resetCoordinatePicker() {
    if (takeoffMarker) {
        takeoffMarker.remove();
        takeoffMarker = null;
    }
    if (landingMarker) {
        landingMarker.remove();
        landingMarker = null;
    }
    
    selectedTakeoffCoordinates = null;
    selectedLandingCoordinates = null;
    
    document.getElementById('flightTakeoffAlt').value = '';
    document.getElementById('flightLandingAlt').value = '';
    document.getElementById('flightDistance').value = '';
    
    updateCoordinatesDisplay();
    
    if (window.flightPath) {
        window.flightPath.remove();
        window.flightPath = null;
    }
}


function showCoordinatePicker() {
    if (!navigator.onLine) {
        showCustomAlert('Internet connection required to set coordinates. Please connect and try again.');
        return;
    }
    const modal = document.getElementById('coordinatePickerModal');
    modal.style.display = 'block';


    
    document.getElementById('flightTakeoffAlt').value = '';
    document.getElementById('flightLandingAlt').value = '';
    document.getElementById('flightDistance').value = '';
    
    updateCoordinatesDisplay();
    if (!coordinatePickerMap) {
        coordinatePickerMap = L.map('coordinatePickerMap').setView([46.0, 2.0], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(coordinatePickerMap);
        
        // Add fullscreen control
        L.control.fullscreen({
            position: 'topleft',
            title: {
                'false': 'View Fullscreen',
                'true': 'Exit Fullscreen'
            },
            content: '<span style="font-size: 18px; font-weight: bold;">⛶</span>'
        }).addTo(coordinatePickerMap);

        coordinatePickerMap.on('click', async function(e) {
            const lat = e.latlng.lat;
            const lon = e.latlng.lng;
            
            const isSettingTakeoff = !selectedTakeoffCoordinates || 
                (selectedTakeoffCoordinates && selectedLandingCoordinates);
            
            if (isSettingTakeoff) {
                if (takeoffMarker) takeoffMarker.remove();
                if (landingMarker) landingMarker.remove();
                landingMarker = null;
                selectedLandingCoordinates = null;
                
                takeoffMarker = L.marker(e.latlng, {
                    icon: L.divIcon({
                        html: '●',
                        className: 'takeoff-marker',
                        iconSize: [20, 20]
                    })
                }).addTo(coordinatePickerMap);
                selectedTakeoffCoordinates = [lat, lon];
                
                const elevation = await getElevationForPoint(lat, lon);
                if (elevation !== null) {
                    document.getElementById('flightTakeoffAlt').value = Math.round(elevation);
                    calculateGrade();
                }
            } else {
                if (landingMarker) landingMarker.remove();
                landingMarker = L.marker(e.latlng, {
                    icon: L.divIcon({
                        html: '●',
                        className: 'landing-marker',
                        iconSize: [20, 20]
                    })
                }).addTo(coordinatePickerMap);
                selectedLandingCoordinates = [lat, lon];
                
                const elevation = await getElevationForPoint(lat, lon);
                if (elevation !== null) {
                    document.getElementById('flightLandingAlt').value = Math.round(elevation);
                    calculateGrade();
                }

                if (selectedTakeoffCoordinates && selectedLandingCoordinates) {
                    const distance = calculateDistance(
                        selectedTakeoffCoordinates[0],
                        selectedTakeoffCoordinates[1],
                        selectedLandingCoordinates[0],
                        selectedLandingCoordinates[1]
                    );

                    const points = [
                        {
                            lat: selectedTakeoffCoordinates[0],
                            lon: selectedTakeoffCoordinates[1],
                            ele: parseFloat(document.getElementById('flightTakeoffAlt').value),
                            time: new Date()
                        },
                        {
                            lat: selectedLandingCoordinates[0],
                            lon: selectedLandingCoordinates[1],
                            ele: parseFloat(document.getElementById('flightLandingAlt').value),
                            time: new Date(Date.now() + 1000)
                        }
                    ];

                    processTrackData(
                        points,
                        points[0].ele,
                        points[1].ele,
                        0
                    );

                    document.getElementById('flightDistance').value = distance.toFixed(2);
                }
            }

            updateCoordinatesDisplay();
        });
    }
    
    setTimeout(() => {
        coordinatePickerMap.invalidateSize();
    }, 100);
}


async function getElevationForPoint(lat, lon) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/elevation?latitude=${lat}&longitude=${lon}`
        );
        
        if (response.ok) {
            const data = await response.json();
            if (data.elevation && data.elevation.length > 0) {
                return data.elevation[0];
            }
        }
    } catch (error) {
        console.warn('Error fetching elevation:', error);
    }
    return null;
}


function updateCoordinatesDisplay() {
    const displayElement = document.getElementById('selectedCoordinates');
    let displayText = '';
    
    if (selectedTakeoffCoordinates) {
        displayText += `Takeoff: ${selectedTakeoffCoordinates[0].toFixed(6)}, ${selectedTakeoffCoordinates[1].toFixed(6)}`;
    }
    
    if (selectedLandingCoordinates) {
        if (displayText) displayText += '<br>';
        displayText += `Landing: ${selectedLandingCoordinates[0].toFixed(6)}, ${selectedLandingCoordinates[1].toFixed(6)}`;
        
        displayText += `
            <div class="save-coordinates-wrapper">
                <button class="save-coordinates-btn" onclick="saveCoordinates()">
                    <img src="assets/save.png" alt="Save" style="width: 16px; height: 16px; margin-right: 4px;">
                    Save Coordinates
                </button>
            </div>
        `;
    }
    
    if (!selectedTakeoffCoordinates && !selectedLandingCoordinates) {
        displayText = 'Click to set takeoff location, then landing location';
    }
    
    displayElement.innerHTML = displayText;
}



function saveCoordinates() {

    if (selectedTakeoffCoordinates && selectedLandingCoordinates) {
        selectedFlightCoordinates = {
            coords: [selectedTakeoffCoordinates, selectedLandingCoordinates]
        };
    }
    
    closeCoordinatePickerModal();
}

//MAPS
    // async function initializeMiniMap(flight, mapDiv) {
    //     try {
    //         let coordinates;
    //         if (typeof flight.coordinates === 'string') {
    //             coordinates = JSON.parse(flight.coordinates);
    //         } else {
    //             coordinates = flight.coordinates;
    //         }

    //         if (!coordinates || !coordinates.coords || !coordinates.coords.length) {
    //             console.warn('No valid coordinates found for flight:', flight);
    //             return;
    //         }

    //         const miniMap = L.map(mapDiv, {
    //             zoomControl: false,
    //             attributionControl: false,
    //             dragging: false,
    //             scrollWheelZoom: false,
    //             touchZoom: false,
    //             doubleClickZoom: false,
    //             boxZoom: false,
    //             keyboard: false,
    //             zoomAnimation: false,    // Disable zoom animations
    //             fadeAnimation: false,    // Disable fade animations
    //             markerZoomAnimation: false, // Disable marker animations
    //             transform3DLimit: 0      // Disable 3D transforms
    //         });

    //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //             attribution: '',
    //             opacity: 1.0,
    //             noWrap: true,
    //             bounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))
    //         }).addTo(miniMap);

    //         await renderAndCaptureMap(coordinates, mapDiv);

    // await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to ensure centering

    //         return miniMap;
    //     } catch (error) {
    //         console.error('Error initializing mini map:', error);
    //         return null;
    //     }
    // }

function cleanupMapCache() {
    const maxCacheAge = 30 * 24 * 60 * 60 * 1000; // 30 days
    const now = Date.now();
    
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('map_cache_')) {
            try {
                const dateStr = key.split('_')[2]; // Extract date from cache key
                const cacheDate = new Date(dateStr).getTime();
                if (now - cacheDate > maxCacheAge) {
                    localStorage.removeItem(key);
                }
            } catch (e) {
            }
        }
    });
}
function cleanupMap() {
    if (window.flightMap) {
        window.flightMap.remove();
        window.flightMap = null;
    }

    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.innerHTML = '';
    }

    const gpxMap = document.getElementById('gpxMap');
    if (gpxMap) {
        gpxMap.innerHTML = '';
        gpxMap.style.display = 'none';
    }

    if (window.takeoffMarker) {
        takeoffMarker.remove();
        takeoffMarker = null;
    }
    if (window.landingMarker) {
        landingMarker.remove();
        landingMarker = null;
    }
    if (window.coordinateMarker) {
        coordinateMarker.remove();
        coordinateMarker = null;
    }

    window.lastUploadedCoordinates = null;
    selectedTakeoffCoordinates = null;
    selectedLandingCoordinates = null;
    selectedFlightCoordinates = null;
}
function safelyInitializeMap(containerId, filteredFlights = null) {
    try {
        // First, completely remove any existing map
        if (heatMap) {
            try {
                heatMap.off();  // Remove all event listeners
                heatMap.remove();
            } catch (e) {
                console.warn('Error removing previous map:', e);
            }
            heatMap = null;
        }
        
        // Get the container element
        const container = document.getElementById(containerId);
        if (!container) return null;
        
        // Create a completely new div element
        const newMapDiv = document.createElement('div');
        newMapDiv.id = containerId;
        
        // Copy the style from the original container
        newMapDiv.style.cssText = container.style.cssText;
        if (!newMapDiv.style.height) {
            newMapDiv.style.height = '400px';
        }
        
        // Replace the old container with the new one
        container.parentNode.replaceChild(newMapDiv, container);
        
        // Wait for the next frame to ensure DOM is updated
        return new Promise(resolve => {
            requestAnimationFrame(() => {
                try {
                    // Now it's safe to create a new map
                    const map = L.map(containerId, {
                        fadeAnimation: false,  // Disable animations that might cause positioning issues
                        zoomAnimation: false,  // Disable zoom animations
                        markerZoomAnimation: false  // Disable marker animations
                    }).setView([0, 0], 2);
                    
                    // Add a handler for when the map is ready
                    map.whenReady(() => {
                        // Force a recalculation of map size
                        setTimeout(() => {
                            map.invalidateSize();
                        }, 100);
                    });
                    
                    resolve(map);
                } catch (error) {
                    console.error('Error creating map:', error);
                    resolve(null);
                }
            });
        });
    } catch (error) {
        console.error('Error safely initializing map:', error);
        return Promise.resolve(null);
    }
}
async function createHeatMap(containerId, specificFlights = null) {
    try {
        // Safely initialize the map
        heatMap = await safelyInitializeMap(containerId);
        if (!heatMap) return null;
        
        // Add the tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(heatMap);
        
        // Add fullscreen control
        L.control.fullscreen({
            position: 'topleft',
            title: {
                'false': 'View Fullscreen',
                'true': 'Exit Fullscreen'
            },
            content: '<span style="font-size: 18px; font-weight: bold;">⛶</span>'
        }).addTo(heatMap);
        
        // Use the provided flights or get all flights
        const flights = specificFlights || await dbOperations.getAllFromStore(STORES.flights);
        
        // Process flights only if we have a valid map
        if (heatMap && flights && flights.length > 0) {
            // Rest of your existing code for processing flights and creating markers
            const takeoffGroups = new Map();
                
                flights.forEach(flight => {
                    if (flight.coordinates && flight.takeoff) {
                        try {
                            const coords = typeof flight.coordinates === 'string' 
                                ? JSON.parse(flight.coordinates) 
                                : flight.coordinates;
                                
                            if (coords && coords.coords && coords.coords.length > 0) {
                                const takeoffName = flight.takeoff.trim().toLowerCase();
                                if (!takeoffGroups.has(takeoffName)) {
                                    takeoffGroups.set(takeoffName, []);
                                }
                                takeoffGroups.get(takeoffName).push({
                                    flight,
                                    coords: coords.coords[0]
                                });
                            }
                        } catch (error) {
                            console.warn('Error parsing coordinates for flight:', flight, error);
                        }
                    }
                });

            function getDistanceInMeters(lat1, lon1, lat2, lon2) {
                const R = 6371e3; 
                const φ1 = lat1 * Math.PI/180;
                const φ2 = lat2 * Math.PI/180;
                const Δφ = (lat2-lat1) * Math.PI/180;
                const Δλ = (lon2-lon1) * Math.PI/180;

                const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                        Math.cos(φ1) * Math.cos(φ2) *
                        Math.sin(Δλ/2) * Math.sin(Δλ/2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

                return R * c;
            }

            const locationFlights = new Map();
            const MAX_DISTANCE = 150; // meters

            takeoffGroups.forEach((flightGroup, takeoffName) => {
                if (flightGroup.length === 0) return;

                const clusters = [];
                
                flightGroup.forEach(({flight, coords}) => {
                    let addedToCluster = false;
                    
                    for (const cluster of clusters) {
                        const centerCoords = cluster.centerCoords;
                        const distance = getDistanceInMeters(
                            centerCoords[0], centerCoords[1],
                            coords[0], coords[1]
                        );
                        
                        if (distance <= MAX_DISTANCE) {
                            cluster.flights.push(flight);
                            const n = cluster.flights.length;
                            cluster.centerCoords = [
                                (centerCoords[0] * (n-1) + coords[0]) / n,
                                (centerCoords[1] * (n-1) + coords[1]) / n
                            ];
                            addedToCluster = true;
                            break;
                        }
                    }
                    
                    if (!addedToCluster) {
                        clusters.push({
                            centerCoords: coords,
                            flights: [flight]
                        });
                    }
                });

                clusters.forEach(cluster => {
                    const key = `${cluster.centerCoords[0]},${cluster.centerCoords[1]}`;
                    locationFlights.set(key, cluster.flights);
                });
            });

            if (locationFlights.size > 0) {
                const points = Array.from(locationFlights.keys()).map(key => key.split(',').map(Number));
                const bounds = L.latLngBounds(points);
                heatMap.fitBounds(bounds, {
                    padding: [100, 100],
                    maxZoom: 8
                });
            }

            setTimeout(() => {
                locationFlights.forEach((flightList, key) => {
                    const [lat, lon] = key.split(',').map(Number);
                    
                    const flightCount = flightList.length;
                    const baseRadius = 8;
                    const radius = Math.min(baseRadius + Math.log2(flightCount) * 2, 14);
                    
                    const icon = L.divIcon({
                        className: 'custom-marker',
                        html: `<div class="marker-container">
                                <div class="flight-count-heat">${flightCount}</div>
                               </div>`,
                        iconSize: [radius * 2, radius * 2]
                    });
            
                    const marker = L.marker([lat, lon], {
                        icon: icon,
                        interactive: true
                    }).addTo(heatMap);
            
                    const popupContent = `
                        <div style="max-height: 300px; overflow-y: auto; min-width: 200px;">
                            <h4 style="margin: 0 0 8px 0;">
                                ${flightList[0].site || 'Unknown Site'}
                                ${flightCount > 1 ? ` (${flightCount} flights)` : ''}
                            </h4>
                            <div style="margin-bottom: 10px;">
                                <strong>Takeoff:</strong> ${flightList[0].takeoff || 'Unknown'} 
                                ${flightList[0].takeoff_alt ? `(${flightList[0].takeoff_alt}m)` : ''}
                            </div>
                            <hr style="margin: 8px 0;">
                            ${flightList.map(flight => `
                                <div style="margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #eee;">
                                    <div><strong>📅 ${flight.date || 'No date'}</strong></div>
                                    ${flight.time ? `<div>⏱️ ${flight.time} min</div>` : ''}
                                    ${flight.flight_distance ? `<div>📏 ${flight.flight_distance.toFixed(1)} km</div>` : ''}
                                    ${flight.max_altitude ? `<div>⛰️ Max: ${flight.max_altitude}m</div>` : ''}
                                    ${flight.landing ? `<div>🎯 Landing: ${flight.landing}</div>` : ''}
                                    ${flight.glider ? `<div>🪂 ${flight.glider}</div>` : ''}
                                    ${flight.comments ? `<div style="font-style: italic; margin-top: 4px;">${flight.comments}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    `;
            
                    marker.bindPopup(popupContent);
                    
                    marker.on('mouseover', function(e) {
                        e.target._icon.querySelector('.marker-container').classList.add('hover');
                    }).on('mouseout', function(e) {
                        e.target._icon.querySelector('.marker-container').classList.remove('hover');
                    });
                });
            }, 100);
        }
            return heatMap;
        } catch (error) {
            console.error('Error in createHeatMap:', error);
            return null;
        }
    }

// async function renderAndCaptureMap(coordinates, mapDiv) {
//     mapDiv.style.width = '300px';
//     mapDiv.style.height = '200px';
//     mapDiv.style.position = 'absolute';
//     mapDiv.style.left = '-9999px';
//     mapDiv.style.margin = '0';
//     mapDiv.style.padding = '0';

//     const takeoffIcon = L.divIcon({
//         className: 'custom-div-icon',
//         html: '<div style="background:#4CAF50;width:6px;height:6px;border-radius:50%"></div>',
//         iconSize: [6, 6],
//         iconAnchor: [3, 3]
//     });

//     const landingIcon = L.divIcon({
//         className: 'custom-div-icon',
//         html: '<div style="background:#F44336;width:6px;height:6px;border-radius:50%"></div>',
//         iconSize: [6, 6],
//         iconAnchor: [3, 3]
//     });

//     const miniMap = L.map(mapDiv, {
//         zoomControl: false,
//         attributionControl: false,
//         dragging: false,
//         scrollWheelZoom: false,
//         touchZoom: false,
//         doubleClickZoom: false,
//         boxZoom: false,
//         keyboard: false,
//         zoomAnimation: false,
//         fadeAnimation: false,
//         markerZoomAnimation: false,
//         preferCanvas: true, 
//         renderer: L.canvas()
//     });

//     const tileLoadPromise = new Promise((resolve) => {
//         const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '',
//             opacity: 1.0,
//             noWrap: true,
//             minZoom: 1,
//             maxZoom: 13
//         }).addTo(miniMap);

//         let tilesLoading = 0;
//         let tilesLoaded = 0;

//         tileLayer.on('loading', () => {
//             tilesLoading++;
//         });

//         tileLayer.on('load', () => {
//             tilesLoaded++;
//             if (tilesLoaded >= tilesLoading) {
//                 resolve();
//             }
//         });
//     });

//     let bounds;
//     if (coordinates.type === 'manual') {
//         const [takeoff, landing] = coordinates.coords;
//         L.marker(takeoff, {icon: takeoffIcon, interactive: false}).addTo(miniMap);
//         L.marker(landing, {icon: landingIcon, interactive: false}).addTo(miniMap);
//         bounds = L.latLngBounds([takeoff, landing]);
//     } else {
//         const firstPoint = coordinates.coords[0];
//         const lastPoint = coordinates.coords[coordinates.coords.length - 1];
//         L.marker(firstPoint, {icon: takeoffIcon, interactive: false}).addTo(miniMap);
//         L.marker(lastPoint, {icon: landingIcon, interactive: false}).addTo(miniMap);
//         bounds = L.latLngBounds([firstPoint, lastPoint]);
//     }

//     const paddedBounds = bounds.pad(0.2);
//     miniMap.fitBounds(paddedBounds, { animate: false });
//     miniMap.invalidateSize({ animate: false });

//     try {
//         await Promise.race([
//             tileLoadPromise,
//             new Promise((_, reject) => 
//                 setTimeout(() => reject(new Error('Tile loading timeout')), 5000)
//             )
//         ]);

//         await new Promise(resolve => setTimeout(resolve, 500));

//         const canvas = await html2canvas(mapDiv, {
//             useCORS: true,
//             allowTaint: true,
//             backgroundColor: null,
//             scale: 1.5,
//             logging: false,
//             removeContainer: true,
//             foreignObjectRendering: false,
//             imageTimeout: 5000
//         });

//         miniMap.remove();
//         return canvas.toDataURL('image/jpeg', 0.8);
//     } catch (error) {
//         console.warn('Error capturing map:', error);
//         miniMap.remove();
//         return null;
//     }
// }


//STATS
function daysSinceDate(dateString) {
    if (!dateString) return null;
    
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const years = Math.floor(diffDays / 365);
    const remainingDaysAfterYears = diffDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30.44);
    const days = Math.floor(remainingDaysAfterYears % 30.44);
    
    const parts = [];
    
    if (years > 0) {
        parts.push(`<span class="number">${years}</span> year${years > 1 ? 's' : ''}`);
    }
    
    if (months > 0) {
        parts.push(`<span class="number">${months}</span> month${months > 1 ? 's' : ''}`);
    }
    
    if (days > 0) {
        parts.push(`<span class="number">${days}</span> day${days > 1 ? 's' : ''}`);
    }
    
    if (parts.length === 0) {
        return 'Today';
    }
    
    if (parts.length === 1) {
        return parts[0];
    }
    
    if (parts.length === 2) {
        return `${parts[0]} and ${parts[1]}`;
    }
    
    return `${parts[0]} ${parts[1]} and ${parts[2]}`;
}
async function getStatsFromLastCheck(gear, type) {
    if (!gear.last_check) {
        return { hours: 0, flights: 0 };
    }
    
    const lastCheckDate = new Date(gear.last_check);
    const flights = await dbOperations.getAllData(STORES.flights);
    
    // Filter flights after last check date and matching gear
    const relevantFlights = flights.filter(flight => {
        const flightDate = parseFlightDate(flight.date);
        
        const matchesGear = () => {
            if (type === 'glider') {
                const gearFullName = `${gear.brand} ${gear.model}`.trim();
                return flight.glider === gearFullName || flight.glider === gear.serial;
            } else if (type === 'harness') {
                const gearFullName = `${gear.brand} ${gear.model}`.trim();
                return flight.harness === gearFullName || flight.harness === gear.serial;
            } else if (type === 'reserve') {
                const gearFullName = `${gear.brand} ${gear.model}`.trim();
                return flight.reserve === gearFullName || flight.reserve === gear.serial;
            }
            return false;
        };

        return flightDate > lastCheckDate && matchesGear();
    });

    // Calculate total hours by converting minutes to hours
    const hours = relevantFlights.reduce((total, flight) => {
        let flightMinutes = 0;
        if (flight.time) {
            flightMinutes = parseFloat(flight.time) || 0;
        }
        return total + (flightMinutes / 60); // Convert minutes to hours
    }, 0);
    
    return {
        hours: Number(hours.toFixed(1)),
        flights: relevantFlights.length
    };
}
function parseFlightDate(dateStr) {
    // Handle DD/MM/YY format
    if (dateStr.includes('/')) {
        const [day, month, year] = dateStr.split('/');
        return new Date(2000 + parseInt(year), month - 1, day);
    }
    // Handle ISO format (YYYY-MM-DD)
    return new Date(dateStr);
}


function handleBackgroundImageChange(event) {
    const file = event.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    
    if (!file) return;
    
    if (!allowedTypes.includes(file.type)) {
        showCustomAlert('Please upload a valid image file (JPEG, PNG, or WEBP)');
        return;
    }
    
    if (file.size > maxSize) {
        showCustomAlert('Image size should be less than 5MB');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const profileInfo = document.querySelector('.profile-info');
            const formGroupProfile = document.querySelector('.form-group-profile');
            const backgroundStyle = `url(${e.target.result})`;
            
            if (profileInfo) profileInfo.style.backgroundImage = backgroundStyle;
            if (formGroupProfile) formGroupProfile.style.backgroundImage = backgroundStyle;
            
            updateBackgroundButtonVisibility();
            gearChanged = true;
            showSaveChangesButton();
        } catch (error) {
            console.error('Error updating background image:', error);
            showCustomAlert('Failed to update background image. Please try again.');
        }
    };
    
    reader.readAsDataURL(file);
}

// function removeBackgroundImage() {
//     const defaultBackground = 'url("assets/default-background1.jpg")';
//     const profileInfo = document.querySelector('.profile-info');
//     const formGroupProfile = document.querySelector('.form-group-profile');
    
//     if (profileInfo) profileInfo.style.backgroundImage = defaultBackground;
//     if (formGroupProfile) formGroupProfile.style.backgroundImage = defaultBackground;
    
//     updateBackgroundButtonVisibility();
//     gearChanged = true;
//     showSaveChangesButton();
// }
// function updateBackgroundButtonVisibility() {
//     const removeBackgroundBtn = document.getElementById('removeBackgroundBtn');
//     const profileInfo = document.querySelector('.profile-info');
//     const defaultBackground = 'url("assets/default-background1.jpg")';
    
//     if (removeBackgroundBtn && profileInfo) {
//         const hasCustomBackground = profileInfo.style.backgroundImage && 
//                                   profileInfo.style.backgroundImage !== 'none' &&
//                                   profileInfo.style.backgroundImage !== '' &&
//                                   profileInfo.style.backgroundImage !== defaultBackground;
        
//         removeBackgroundBtn.style.display = hasCustomBackground ? 'block' : 'none';
//     }
// }

function removeBackgroundImage() {
    const defaultBackground = 'white';
    const profileInfo = document.querySelector('.profile-info');
    const formGroupProfile = document.querySelector('.form-group-profile');
    
    if (profileInfo) {
        profileInfo.style.backgroundImage = 'none';
        profileInfo.style.backgroundColor = defaultBackground;
    }

    if (formGroupProfile) {
        formGroupProfile.style.backgroundImage = 'none';
        formGroupProfile.style.backgroundColor = defaultBackground;
    }
    
    updateBackgroundButtonVisibility();
    gearChanged = true;
    showSaveChangesButton();
}

function updateBackgroundButtonVisibility() {
    const removeBackgroundBtn = document.getElementById('removeBackgroundBtn');
    const profileInfo = document.querySelector('.profile-info');
    
    if (removeBackgroundBtn && profileInfo) {
        const hasCustomBackground =
            profileInfo.style.backgroundImage &&
            profileInfo.style.backgroundImage !== 'none' &&
            profileInfo.style.backgroundImage !== '';
        
        removeBackgroundBtn.style.display = hasCustomBackground ? 'block' : 'none';
    }
}

//DOMCONTENTLOAD
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initDB();
        await loadProfile();
        await loadGear();
        // await refreshFlightSummaries();
        initializeViews();
        await loadFlights();
        // handleCookieBanner();
        lightbox = new PhotoSwipeLightbox({
            gallery: '.documents-gallery',
            children: 'a',
            pswpModule: PhotoSwipe
        });
        lightbox.init();

        const navButtons = document.querySelectorAll('.nav-button-menu');
        // navButtons.forEach(button => {
        //     button.addEventListener('click', () => {
        //         navButtons.forEach(btn => btn.classList.remove('active'));
        //         document.querySelectorAll('.content-box').forEach(box => {
        //             box.classList.remove('active');
        //         });
                
        //         button.classList.add('active');
        //         const targetBox = document.querySelector(`.${button.dataset.target}`);
        //         targetBox.classList.add('active');
        //         currentPage = 1;
                
        //         switch(button.dataset.target) {
        //             case 'box-flights':
        //                 handleFlightsBoxActivation();
        //                 break;
        //             case 'box-mysites':
        //                 handleMySitesBoxActivation();
        //                 break;
        //             case 'box-stats':
        //                 currentCalendarDate = new Date();

        //                 handleStatsBoxActivation();
        //                 initializeFlightCalendar();
        //                 renderFlightCalendar();
        //                 break;
        //         }
        //     });
        // });

        let flightCalendarInitialized = false;

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.content-box').forEach(box => {
            box.classList.remove('active');
        });

        button.classList.add('active');
        const targetBox = document.querySelector(`.${button.dataset.target}`);
        targetBox.classList.add('active');
        currentPage = 1;

        switch(button.dataset.target) {
            case 'box-flights':
                handleFlightsBoxActivation();
                break;
                case 'box-profile':
                    handleProfileBoxActivation();
                    break;
            case 'box-stats':
                // Remove resetting currentCalendarDate here
                if (!flightCalendarInitialized) {
                    initializeFlightCalendar();
                    flightCalendarInitialized = true;
                }
                
                renderFlightCalendar();
                handleStatsBoxActivation();
                break;
        }
    });
});


        const modal = document.getElementById('flightModal');
        document.addEventListener('keydown', function(e) {
            if (modal.style.display === 'block') {
                if (e.key === 'ArrowLeft') {
                    showPreviousFlight();
                } else if (e.key === 'ArrowRight') {
                    showNextFlight();
                }
            }
        });

        const birthDateInput = document.getElementById('profileBirthDateInput');
        if (birthDateInput) {
            flatpickr(birthDateInput, {
                dateFormat: "Y-m-d",
                maxDate: "2010-12-31",
                minDate: "1940-01-01",
                defaultDate: birthDateInput.value || undefined,
                yearSelector: true,
                onChange: function(selectedDates, dateStr) {
                    const saveButton = document.getElementById('saveChangesButton');
                    if (saveButton) {
                        saveButton.style.display = 'block';
                    }
                }
            });
        }

        initializeDatePickers();
        sortedFlightData = JSON.parse(localStorage.getItem('flights')) || [];
        isAscending = false;
        currentSortColumn = 'date';
        sortFlights();
        
        // initSitesSection();
        await handleFlightsBoxActivation(); 
        
        const editIcon = document.querySelector('.edit-icon');
        if (editIcon) {
            editIcon.addEventListener('click', openProfileGearModal);
        }

        const saveButton = document.getElementById('saveChangesButton');
        if (saveButton) {
            saveButton.addEventListener('click', function(e) {
                e.preventDefault();
                saveProfileGearDetails();
            });
        }

        const inputs = document.querySelectorAll('#profileGearForm input');
        inputs.forEach(input => {
            input.addEventListener('input', showSaveChangesButton);
        });

        const backgroundInput = document.getElementById('profileBackgroundInput');
        if (backgroundInput) {
            backgroundInput.addEventListener('change', handleBackgroundImageChange);
        }
    
        const removeBackgroundBtn = document.getElementById('removeBackgroundBtn');
        if (removeBackgroundBtn) {
            removeBackgroundBtn.addEventListener('click', removeBackgroundImage);
        }

        

    } catch (error) {
        console.error('Error during initialization:', error);
    }
});



document.getElementById('saveChangesButton')?.addEventListener('click', async () => {
    try {
        await saveGear();
    } catch (error) {
        console.error('Error saving gear:', error);
        showCustomAlert('Error saving changes. Please try again.');
    }
});




//FLIGHTS
function getStarsHTML(rating) {
    return '<img src="assets/rating.png" class="rating-star modal-star">'.repeat(parseInt(rating));
}

function getStressHTML(level) {
    return `
        <div class="stress-level-display-readonly">
            <div class="stress-bar">
                <div class="stress-fill" style="width: ${level}%"></div>
            </div>
            <div class="stress-value">${level}%</div>
        </div>
    `;
}

function getStressHTMLcard(level) {
    return `
        <div class="stress-level-display-readonly-card">
            <div class="stress-bar-card">
                <div class="stress-fill" style="width: ${level}%"></div>
            </div>
            <div class="stress-value-card">${level}%</div>
        </div>
    `;
}

// document.getElementById('stressLevel').addEventListener('input', function() {
//     const value = this.value || '0';  // Use 0 if the value is empty
//     const stressValue = this.parentElement.querySelector('.stress-value');
//     if (stressValue) {
//         stressValue.textContent = `${value}%`;
//     }
// });

document.getElementById('stressLevel').addEventListener('input', function() {
    const value = this.value || '0';
    const group = this.closest('.stress-level-group');
    const stressValue = group?.querySelector('.stress-value');

    if (stressValue) {
        stressValue.textContent = `${value}%`;
    }
});



async function handleAddFlight(event) {
    event.preventDefault();
    
    const dateInput = document.getElementById('flightDate');
    let formattedDate;
    
    // Get date from Flatpickr instance
    const fp = dateInput._flatpickr;
    if (fp) {
        const selectedDate = fp.selectedDates[0];
        formattedDate = `${selectedDate.getDate().toString().padStart(2, '0')}/${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}/${selectedDate.getFullYear().toString().slice(-2)}`;
    } else {
        throw new Error('Date picker not initialized');
    }

    let coordinates = null;

    if (window.lastUploadedCoordinates) {
        coordinates = window.lastUploadedCoordinates;
    } else if (selectedTakeoffCoordinates && selectedLandingCoordinates) {
        coordinates = {
            coords: [selectedTakeoffCoordinates, selectedLandingCoordinates],
            type: 'manual'
        };
    }
    

    // let minimapImage = null;
    // const mapCanvas = document.querySelector('#map canvas');
    // if (coordinates && mapCanvas) {
    //     try {
    //         minimapImage = mapCanvas.toDataURL();
    //     } catch (error) {
    //         console.error('Error capturing map:', error);
    //     }
    // }

    const countrySelect = document.getElementById('flightCountry');
    const countryCode = countrySelect.value;

    const newFlight = {
        date: formattedDate,
        timeOfDay: document.getElementById('flightTimeOfDay').value || null,
        altitude_gain: parseInt(document.getElementById('flightAltGain').value) || null,
        type: document.getElementById('flightType').value,
        type2: document.getElementById('flightType2').value,
        rating: parseInt(document.querySelector('input[name="flightRating"]:checked')?.value) || 0,
        stressLevel: parseInt(document.getElementById('stressLevel').value) || 0,
        site: document.getElementById('flightSite').value,
        takeoff: document.getElementById('flightTakeoff').value,
        takeoff_alt: parseInt(document.getElementById('flightTakeoffAlt').value) || 0,
        landing: document.getElementById('flightLanding').value,
        landing_alt: parseInt(document.getElementById('flightLandingAlt').value) || 0,
        flight_distance: parseFloat(document.getElementById('flightDistance').value) || 0,
        glider: document.getElementById('flightGlider').value,
        harness: document.getElementById('flightHarness').value,
        reserve: document.getElementById('flightreserve').value,
        country: countryCode, // Use the selected country code
        grade: parseInt(document.getElementById('flightGrade').value) || 0,
        time: parseInt(document.getElementById('flightTime').value) || 0,
        comments: document.getElementById('flightComments').value,
        school: document.getElementById('flightSchool').value,
        club: document.getElementById('flightClub').value,
        max_altitude: parseInt(document.getElementById('flightMaxAlt').value) || 0,
        max_speed: parseFloat(document.getElementById('flightMaxSpeed').value) || 0,
        avg_speed: Number(document.getElementById('flightAvgSpeed').value) || 0,
        max_climb: document.getElementById('flightMaxClimb').value !== '' ? 
        parseFloat(document.getElementById('flightMaxClimb').value) : null,
        max_sink: document.getElementById('flightMaxSink').value !== '' ? 
        parseFloat(document.getElementById('flightMaxSink').value) : null,
        avg_heart_rate: parseInt(document.getElementById('flightAvgHR')?.value) || 0,
        max_heart_rate: parseInt(document.getElementById('flightMaxHR')?.value) || 0,
        avg_temperature: parseFloat(document.getElementById('flightAvgTemp')?.value) || 0,
        coordinates: coordinates ? JSON.stringify(coordinates) : null,
        // minimapImage: minimapImage
    };
    // Find the submit button and processing indicator
    const submitButton = event.target.querySelector('button[type="submit"]');
    const processingIndicator = event.target.querySelector('.processing-indicator');
    
    // Show processing state
    if (submitButton) submitButton.disabled = true;
    if (processingIndicator) processingIndicator.style.display = 'inline-block';
try {
    // if (coordinates) {
    //     const mapDiv = document.createElement('div');
    //     document.body.appendChild(mapDiv);
    //     try {
    //         newFlight.minimapImage = await renderAndCaptureMap(coordinates, mapDiv);
    //     } catch (error) {
    //         console.warn('Could not generate map image:', error);
    //     } finally {
    //         if (mapDiv.parentNode) {
    //             document.body.removeChild(mapDiv);
    //         }
    //     }
    // }

        await dbOperations.saveFlight(newFlight);
        
        // Reset coordinate data
        window.lastUploadedCoordinates = null;
        selectedTakeoffCoordinates = null;
        selectedLandingCoordinates = null;
        
        if (takeoffMarker) {
            takeoffMarker.remove();
            takeoffMarker = null;
        }
        if (landingMarker) {
            landingMarker.remove();
            landingMarker = null;
        }
    
        await loadFlights();
        await populateFlightDataLists();
        // initSitesSection();
        populateFlightDataLists();
        sortFlights();
        currentPage = 1; 
        displayGridView(currentSortedFlights);
        
        // Refresh calendar if it's visible
        refreshFlightCalendar();
        
        closeAddFlightModal();
        showSuccessMessage('Flight added successfully!');
    } catch (error) {
        console.error('Error saving to IndexedDB:', error);
        showCustomAlert('Error saving flight. Please try again.');
        if (submitButton) submitButton.disabled = false;
        if (processingIndicator) processingIndicator.style.display = 'none';
    }
}

async function getElevationsFromAPI(takeoffLat, takeoffLon, landingLat, landingLon) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/elevation?` +
            `latitude=${takeoffLat},${landingLat}&` +
            `longitude=${takeoffLon},${landingLon}`
        );
        
        if (response.ok) {
            const data = await response.json();
            if (data.elevation && data.elevation.length === 2) {
                return {
                    takeoff: Math.round(data.elevation[0]),
                    landing: Math.round(data.elevation[1])
                };
            }
        }
    } catch (error) {
        console.warn('Open-Meteo API failed, trying fallback...', error);
    }

    try {
        const response = await fetch(
            `https://api.open-elevation.com/api/v1/lookup?locations=` +
            `${takeoffLat},${takeoffLon}|${landingLat},${landingLon}`
        );
        
        if (response.ok) {
            const data = await response.json();
            return {
                takeoff: Math.round(data.results[0].elevation),
                landing: Math.round(data.results[1].elevation)
            };
        }
    } catch (error) {
        console.warn('Both elevation APIs failed', error);
    }

    return null;
}
function getBiometricStats(points) {
    const stats = {};
    
    const heartRates = points.map(p => p.heartRate).filter(hr => hr != null);
    if (heartRates.length > 0) {
        stats.avgHR = Math.round(heartRates.reduce((a, b) => a + b) / heartRates.length);
        stats.maxHR = Math.max(...heartRates);
    }
    
    const temps = points.map(p => p.temperature).filter(t => t != null);
    if (temps.length > 0) {
        stats.avgTemp = (temps.reduce((a, b) => a + b) / temps.length).toFixed(1);
    }
    
    return stats;
}


function handleIgcUpload(file) {
    const reader = new FileReader();
    
    reader.onload = async function(e) {
        try {
            const igcContent = e.target.result;
            
            // Try to detect if this is a valid IGC file
            if (!igcContent.includes('HFDTE') || !igcContent.includes('B')) {
                showCustomAlert('Invalid IGC file format');
                return;
            }
            
            // Parse the IGC file with a universal approach
            const result = parseIgcFile(igcContent);
            
            if (!result || !result.points || result.points.length === 0) {
                showCustomAlert('No valid GPS points found in IGC file');
                return;
            }
            
            // For consistency with GPX handling, use the raw distance
            const displayDistance = result.rawDistance;
            
            console.log(`Parsed ${result.points.length} points from IGC file`);
            console.log(`Flight date: ${result.date}`);
            console.log(`Flight duration: ${formatDuration(result.flightTimeMinutes)}`);
            console.log(`Raw distance: ${result.rawDistance.toFixed(2)} km`);
            console.log(`Filtered distance: ${result.filteredDistance.toFixed(2)} km`);
            console.log(`Max altitude: ${result.maxAltitude} m`);
            console.log(`Average ground speed: ${result.avgGroundSpeed.toFixed(1)} km/h`);
            console.log(`Is aircraft: ${result.isAircraft}`);
            
            // Set the flight date
            const dateInput = document.getElementById('flightDate');
            if (dateInput && result.date) {
                const fp = dateInput._flatpickr;
                if (fp) {
                    fp.setDate(result.date);
                }
            }

            // Set time of day from IGC start time
            const timeOfDayInput = document.getElementById('flightTimeOfDay');
            if (timeOfDayInput && result.points[0] && result.points[0].time) {
                const startTime = new Date(result.points[0].time);
                const hours = startTime.getHours().toString().padStart(2, '0');
                const minutes = startTime.getMinutes().toString().padStart(2, '0');
                timeOfDayInput.value = `${hours}:${minutes}`;
            }
            


             // Get takeoff and landing coordinates and elevations directly from the IGC data
            const takeoffPoint = result.points[0];
            const landingPoint = result.points[result.points.length - 1];
            
            // Use the elevations from the IGC file first, fall back to API if needed
            if (takeoffPoint.ele && landingPoint.ele) {
                processTrackData(
                    result.points, 
                    takeoffPoint.ele,  // Use elevation from IGC file
                    landingPoint.ele,  // Use elevation from IGC file
                    result.flightTimeMinutes,
                    result.isAircraft
                );
            } else {
                // Only use API if IGC doesn't have elevation data
                getElevationsFromAPI(
                    takeoffPoint.lat, takeoffPoint.lon,
                    landingPoint.lat, landingPoint.lon
                ).then(elevations => {
                    processTrackData(
                        result.points, 
                        elevations?.takeoff || null,
                        elevations?.landing || null,
                        result.flightTimeMinutes,
                        result.isAircraft
                    );
                });
            }
            
            // Override the distance in the form with our calculated value
            document.getElementById('flightDistance').value = displayDistance.toFixed(2);
            
            // Update the preview stats
            const previewElement = document.getElementById('gpxPreview');
            if (previewElement) {
                const html = previewElement.innerHTML;
                const updatedHtml = html.replace(
                    /Distance: [\d.]+ km/,
                    `Distance: ${displayDistance.toFixed(2)} km`
                );
                previewElement.innerHTML = updatedHtml;
            }
            
        } catch (error) {
            console.error('Error processing IGC file:', error);
            showCustomAlert('Error processing IGC file: ' + error.message);
        }
    };
    
    reader.readAsText(file);
}
function parseIgcFile(igcContent) {
    const lines = igcContent.split('\n');
    console.log(`Total lines in IGC file: ${lines.length}`);
    
    const allPoints = [];
    let date = null;
    let pilot = '';
    let gliderType = '';
    let validBRecords = 0;
    
    // First pass: get metadata
    for (let line of lines) {
        line = line.trim();
        
        if (line.startsWith('HFDTE')) {
            try {
                const dateStr = line.substring(5).trim();
                if (dateStr.length >= 6) {
                    const day = parseInt(dateStr.substring(0, 2));
                    const month = parseInt(dateStr.substring(2, 4)) - 1; // JS months are 0-based
                    const year = 2000 + parseInt(dateStr.substring(4, 6)); // Assuming 21st century
                    
                    // Validate date components
                    if (isNaN(day) || day < 1 || day > 31 || 
                        isNaN(month) || month < 0 || month > 11 || 
                        isNaN(year)) {
                        console.warn('Invalid date components in IGC file, using current date');
                        date = new Date();
                    } else {
                        date = new Date(year, month, day);
                        // Check if date is valid
                        if (isNaN(date.getTime())) {
                            console.warn('Invalid date in IGC file, using current date');
                            date = new Date();
                        } else {
                            console.log(`Found date: ${date.toISOString().split('T')[0]}`);
                        }
                    }
                }
            } catch (e) {
                console.warn('Error parsing date from IGC file:', e);
                date = new Date(); // Fallback to current date
            }
        } else if (line.startsWith('HFPLTPILOT') || line.startsWith('HFPLTPILOTINCHARGE')) {
            pilot = line.substring(line.indexOf(':') + 1).trim();
            console.log(`Found pilot: ${pilot}`);
        } else if (line.startsWith('HFGTYGLIDERTYPE')) {
            gliderType = line.substring(line.indexOf(':') + 1).trim();
            console.log(`Found glider type: ${gliderType}`);
        }
    }
    
    if (!date) {
        console.warn('No date found in IGC file, using current date');
        date = new Date();
    }
    
    // Count B records
    const bRecords = lines.filter(line => line.trim().startsWith('B'));
    console.log(`Found ${bRecords.length} B records (GPS fixes)`);
    
    // Second pass: parse B records (GPS fixes)
    for (let line of lines) {
        line = line.trim();
        
        if (line.startsWith('B')) {
            try {
                // Ensure the line is long enough
                if (line.length < 35) continue;
                
                // Parse time
                const timeStr = line.substring(1, 7); // HHMMSS
                const hour = parseInt(timeStr.substring(0, 2));
                const minute = parseInt(timeStr.substring(2, 4));
                const second = parseInt(timeStr.substring(4, 6));
                
                // Validate time components
                if (isNaN(hour) || hour < 0 || hour > 23 || 
                    isNaN(minute) || minute < 0 || minute > 59 || 
                    isNaN(second) || second < 0 || second > 59) {
                    continue; // Skip invalid time
                }
                
                // Create timestamp
                const timestamp = new Date(date);
                timestamp.setHours(hour, minute, second, 0);
                
                // Validate timestamp
                if (isNaN(timestamp.getTime())) {
                    continue; // Skip invalid timestamp
                }
                
                // Parse latitude: DDMMmmmN/S
                const latStr = line.substring(7, 15);
                const latDeg = parseInt(latStr.substring(0, 2));
                const latMin = parseInt(latStr.substring(2, 4));
                const latMil = parseInt(latStr.substring(4, 7));
                const latDir = latStr.charAt(7);
                
                // Validate latitude components
                if (isNaN(latDeg) || isNaN(latMin) || isNaN(latMil) || 
                    !['N', 'S'].includes(latDir)) {
                    continue; // Skip invalid latitude
                }
                
                let latitude = latDeg + (latMin + latMil/1000)/60;
                if (latDir === 'S') latitude = -latitude;
                
                // Parse longitude: DDDMMmmmE/W
                const lonStr = line.substring(15, 24);
                const lonDeg = parseInt(lonStr.substring(0, 3));
                const lonMin = parseInt(lonStr.substring(3, 5));
                const lonMil = parseInt(lonStr.substring(5, 8));
                const lonDir = lonStr.charAt(8);
                
                // Validate longitude components
                if (isNaN(lonDeg) || isNaN(lonMin) || isNaN(lonMil) || 
                    !['E', 'W'].includes(lonDir)) {
                    continue; // Skip invalid longitude
                }
                
                let longitude = lonDeg + (lonMin + lonMil/1000)/60;
                if (lonDir === 'W') longitude = -longitude;
                
                // Parse altitude
                let elevation = null;
                if (line.length >= 35) {
                    const altGpsStr = line.substring(30, 35);  // GPS altitude
                    const altBaroStr = line.substring(25, 30); // Pressure altitude
                    elevation = parseInt(altGpsStr) || parseInt(altBaroStr);
                }
                
                // Validate coordinates
                if (isNaN(latitude) || isNaN(longitude) || 
                    Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
                    continue; // Skip invalid coordinates
                }
                
                allPoints.push({
                    lat: latitude,
                    lon: longitude,
                    ele: elevation,
                    time: timestamp.getTime()
                });
                validBRecords++;
                
            } catch (e) {
                console.warn('Error parsing B record:', e);
                // Continue to next line
            }
        }
    }
    
    console.log(`Successfully parsed ${validBRecords} valid B records`);
    
    // Check if we have enough valid points
    if (validBRecords < 2) {
        throw new Error('Not enough valid GPS points found in IGC file');
    }
    
    // Sort points by time
    allPoints.sort((a, b) => a.time - b.time);
    
    // Calculate max speed between consecutive points
    let maxSpeed = 0;
    for (let i = 1; i < allPoints.length; i++) {
        const timeDiff = (allPoints[i].time - allPoints[i-1].time) / 1000; // seconds
        if (timeDiff <= 0) continue;
        
        const distance = calculateDistance(
            allPoints[i-1].lat, allPoints[i-1].lon,
            allPoints[i].lat, allPoints[i].lon
        );
        
        const speed = (distance / timeDiff) * 3600; // km/h
        
        // Only consider speeds from points at least 5 seconds apart
        // to avoid GPS jitter causing unrealistic speeds
        if (timeDiff >= 5 && speed > maxSpeed && speed < 1000) { // Cap at 1000 km/h to avoid outliers
            maxSpeed = speed;
        }
    }
    
    console.log(`Max speed: ${maxSpeed.toFixed(1)} km/h`);
    
    // Calculate max speed with a shorter window for paragliding
    let maxSpeedParagliding = 0;
    for (let i = 1; i < allPoints.length; i++) {
        const timeDiff = (allPoints[i].time - allPoints[i-1].time) / 1000; // seconds
        if (timeDiff <= 0) continue;
        
        const distance = calculateDistance(
            allPoints[i-1].lat, allPoints[i-1].lon,
            allPoints[i].lat, allPoints[i].lon
        );
        
        const speed = (distance / timeDiff) * 3600; // km/h
        
        // For paragliding, use a shorter time window
        if (timeDiff >= 1 && speed > maxSpeedParagliding && speed < 100) { // Cap at 100 km/h for paragliding
            maxSpeedParagliding = speed;
        }
    }
    
    // Determine if this is likely an aircraft based on:
    // 1. Max speed > 70 km/h
    // 2. Glider type contains aircraft indicators
    const aircraftTypes = ['rv', 'cessna', 'piper', 'beech', 'boeing', 'airbus', 'aircraft', 'plane'];
    const gliderTypeLower = gliderType.toLowerCase();
    const isLikelyAircraft = maxSpeed > 70 || 
                             aircraftTypes.some(type => gliderTypeLower.includes(type));
    
    console.log(`Flight type: ${isLikelyAircraft ? 'Aircraft' : 'Paragliding/Paramotoring'}`);
    
    // Calculate raw distance (all points)
    let rawDistance = 0;
    for (let i = 1; i < allPoints.length; i++) {
        const distance = calculateDistance(
            allPoints[i-1].lat, allPoints[i-1].lon,
            allPoints[i].lat, allPoints[i].lon
        );
        rawDistance += distance;
    }
    
    // Filter points based on flight type
    const filteredPoints = filterPoints(allPoints, isLikelyAircraft);
    console.log(`Filtered to ${filteredPoints.length} points`);
    
    // Calculate filtered distance
    let filteredDistance = 0;
    for (let i = 1; i < filteredPoints.length; i++) {
        const distance = calculateDistance(
            filteredPoints[i-1].lat, filteredPoints[i-1].lon,
            filteredPoints[i].lat, filteredPoints[i].lon
        );
        filteredDistance += distance;
    }
    
    // Calculate straight-line distance
    const startPoint = allPoints[0];
    const endPoint = allPoints[allPoints.length - 1];
    const straightLineDistance = calculateDistance(
        startPoint.lat, startPoint.lon,
        endPoint.lat, endPoint.lon
    );
    
    // Calculate OLC-style distance (approximation)
    let olcDistance = rawDistance;
    if (!isLikelyAircraft) {
        // For short flights (<10km raw distance), OLC optimization typically
        // reduces the distance by 60-70%
        if (rawDistance < 10) {
            olcDistance = rawDistance * 0.35;
        } 
        // For medium flights (10-50km), the reduction is less dramatic
        else if (rawDistance < 50) {
            olcDistance = rawDistance * 0.5;
        }
        // For long flights, even less reduction
        else {
            olcDistance = rawDistance * 0.7;
        }
    }
    
    // Calculate flight time in minutes
    const flightTimeMinutes = Math.round((allPoints[allPoints.length - 1].time - 
                                         allPoints[0].time) / (60 * 1000));
    
    // Calculate average ground speed in km/h
    const flightTimeHours = flightTimeMinutes / 60;
    const avgGroundSpeed = filteredDistance / flightTimeHours;
    
    // Calculate effective ground speed (straight-line distance / time)
    const effectiveGroundSpeed = straightLineDistance / flightTimeHours;
    
    // Calculate min and max altitude
    let maxAltitude = -Infinity;
    let minAltitude = Infinity;
    for (const point of allPoints) {
        if (point.ele !== null && !isNaN(point.ele)) {
            if (point.ele > maxAltitude) maxAltitude = point.ele;
            if (point.ele < minAltitude) minAltitude = point.ele;
        }
    }
    
    // Calculate vertical stats
    const { maxClimb, maxSink, maxAltitude: vertMaxAlt } = calculateVerticalStats(allPoints);
    
    // For display and other calculations, use a subset of the original points
    const displayPoints = samplePointsForDisplay(allPoints);
    
    // Comprehensive logging
    console.log('===== IGC PARSING RESULTS =====');
    console.log(`Flight type: ${isLikelyAircraft ? 'Aircraft' : 'Paragliding/Paramotoring'}`);
    console.log(`Glider type: ${gliderType}`);
    console.log(`Pilot: ${pilot}`);
    console.log(`Flight date: ${date.toDateString()}`);
    console.log(`Flight duration: ${formatDuration(flightTimeMinutes)}`);
    console.log(`Total points: ${allPoints.length}`);
    console.log(`Filtered points: ${filteredPoints.length}`);
    console.log('\n--- DISTANCE METRICS ---');
    console.log(`Raw distance: ${rawDistance.toFixed(2)} km`);
    console.log(`Filtered distance: ${filteredDistance.toFixed(2)} km`);
    console.log(`Straight-line distance: ${straightLineDistance.toFixed(2)} km`);
    console.log(`OLC-style distance (approx): ${olcDistance.toFixed(2)} km`);
    console.log('\n--- SPEED METRICS ---');
    console.log(`Max speed (5s window): ${maxSpeed.toFixed(1)} km/h`);
    console.log(`Max speed (1s window): ${maxSpeedParagliding.toFixed(1)} km/h`);
    console.log(`Average ground speed: ${avgGroundSpeed.toFixed(1)} km/h`);
    console.log(`Effective ground speed (straight-line): ${effectiveGroundSpeed.toFixed(1)} km/h`);
    console.log('\n--- ALTITUDE METRICS ---');
    console.log(`Min altitude: ${minAltitude} m`);
    console.log(`Max altitude: ${maxAltitude} m`);
    console.log(`Altitude gain: ${(maxAltitude - minAltitude)} m`);
    console.log('\n--- VERTICAL SPEED METRICS ---');
    console.log(`Max climb rate: ${maxClimb.toFixed(1)} m/s`);
    console.log(`Max sink rate: ${maxSink.toFixed(1)} m/s`);
    console.log('===============================');
    
    return {
        date: date,
        points: displayPoints,
        rawDistance: rawDistance,
        filteredDistance: filteredDistance,
        straightLineDistance: straightLineDistance,
        olcDistance: olcDistance,
        flightTimeMinutes: flightTimeMinutes,
        avgGroundSpeed: avgGroundSpeed,
        effectiveGroundSpeed: effectiveGroundSpeed,
        maxSpeed: isLikelyAircraft ? maxSpeed : maxSpeedParagliding, // Use appropriate max speed based on flight type
        maxClimb: maxClimb,
        maxSink: maxSink,
        maxAltitude: maxAltitude,
        minAltitude: minAltitude,
        altitudeGain: maxAltitude - minAltitude,
        pilot: pilot,
        gliderType: gliderType,
        isAircraft: isLikelyAircraft
    };
}

function filterPoints(points, isAircraft) {
    if (!points || points.length < 3) return points;
    
    const filtered = [points[0]]; // Always include first point
    let lastAddedPoint = points[0];
    
    // Different filtering parameters based on flight type
    const minTimeDiff = isAircraft ? 1 : 3; // seconds
    const minDistance = isAircraft ? 0.05 : 0.01; // km (50m for aircraft, 10m for paragliding)
    
    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        const timeDiff = (point.time - lastAddedPoint.time) / 1000; // seconds
        if (timeDiff <= 0) continue;
        
        const distance = calculateDistance(
            lastAddedPoint.lat, lastAddedPoint.lon,
            point.lat, point.lon
        );
        
        // Add point if:
        // 1. It's been at least minTimeDiff seconds since last point, or
        // 2. We've moved at least minDistance
        if (timeDiff >= minTimeDiff || distance >= minDistance) {
            filtered.push(point);
            lastAddedPoint = point;
        }
    }
    
    // Always include the last point
    if (filtered[filtered.length - 1] !== points[points.length - 1]) {
        filtered.push(points[points.length - 1]);
    }
    
    return filtered;
}

function calculateMaxSpeed(points) {
    if (!points || points.length < 2) return 0;
    
    let maxSpeed = 0;
    
    // Calculate speed between consecutive points
    for (let i = 1; i < points.length; i++) {
        const timeDiff = (points[i].time - points[i-1].time) / 1000; // seconds
        if (timeDiff <= 0) continue;
        
        const distance = calculateDistance(
            points[i-1].lat, points[i-1].lon,
            points[i].lat, points[i].lon
        );
        
        const speed = (distance / timeDiff) * 3600; // km/h
        
        // Only consider speeds from points at least 5 seconds apart
        // to avoid GPS jitter causing unrealistic speeds
        if (timeDiff >= 5 && speed > maxSpeed) {
            maxSpeed = speed;
        }
    }
    
    return maxSpeed;
}


function samplePointsForDisplay(points) {
    if (!points || points.length < 2) return points;
    
    // If we have fewer than 1000 points, just return them all
    if (points.length <= 1000) return points;
    
    // Otherwise, sample to get about 1000 points
    const sampledPoints = [points[0]]; // Always include first point
    const step = Math.floor(points.length / 1000);
    
    for (let i = step; i < points.length - step; i += step) {
        sampledPoints.push(points[i]);
    }
    
    sampledPoints.push(points[points.length - 1]); // Always include last point
    
    return sampledPoints;
}

function calculateVerticalStats(points) {
    if (!points || points.length < 2) {
        return { maxClimb: 0, maxSink: 0, maxAltitude: 0 };
    }
    
    let maxClimb = 0;
    let maxSink = 0;
    let maxAltitude = -Infinity;
    
    // Filter points with valid elevation
    const validPoints = points.filter(p => p.ele !== null && !isNaN(p.ele));
    
    if (validPoints.length < 2) {
        return { maxClimb: 0, maxSink: 0, maxAltitude: 0 };
    }
    
    // Find max altitude
    for (const point of validPoints) {
        if (point.ele > maxAltitude) {
            maxAltitude = point.ele;
        }
    }
    
    // Calculate vertical speeds using a 10-second window
    for (let i = 10; i < validPoints.length; i++) {
        const timeDiff = (validPoints[i].time - validPoints[i-10].time) / 1000; // seconds
        const altDiff = validPoints[i].ele - validPoints[i-10].ele; // meters
        
        if (timeDiff > 0) {
            const vertSpeed = altDiff / timeDiff; // m/s
            
            if (vertSpeed > maxClimb) {
                maxClimb = vertSpeed;
            }
            
            if (vertSpeed < maxSink) {
                maxSink = vertSpeed;
            }
        }
    }
    
    // Convert max sink to a positive value for display
    maxSink = Math.abs(maxSink);
    
    return { maxClimb, maxSink, maxAltitude };
}


function handleTcxUpload(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const parser = new DOMParser();
        const tcx = parser.parseFromString(e.target.result, "text/xml");
        
        const trackpoints = tcx.getElementsByTagName('Trackpoint');
        const points = [];
        
        for (let tp of trackpoints) {
            const position = tp.getElementsByTagName('Position')[0];
            if (!position) continue;
            
            const lat = parseFloat(position.getElementsByTagName('LatitudeDegrees')[0]?.textContent);
            const lon = parseFloat(position.getElementsByTagName('LongitudeDegrees')[0]?.textContent);
            const ele = parseFloat(tp.getElementsByTagName('AltitudeMeters')[0]?.textContent);
            const time = tp.getElementsByTagName('Time')[0]?.textContent;
            const hr = parseFloat(tp.getElementsByTagName('HeartRateBpm')[0]?.getElementsByTagName('Value')[0]?.textContent);
            
            if (lat && lon) {
                points.push({
                    lat: lat,
                    lon: lon,
                    ele: ele || null,
                    time: time,
                    heartRate: hr || null
                });
            }
        }

        if (points.length === 0) {
            showCustomAlert('No valid GPS points found in TCX file');
            return;
        }

        const startTime = new Date(points[0].time);
        const endTime = new Date(points[points.length - 1].time);
        const flightTimeMinutes = Math.round((endTime - startTime) / 1000 / 60);

        const dateInput = document.getElementById('flightDate');
        if (dateInput && startTime) {
            const fp = dateInput._flatpickr;
            if (fp) {
                fp.setDate(startTime);
            }
        }

        // Set time of day from TCX start time
        const timeOfDayInput = document.getElementById('flightTimeOfDay');
        if (timeOfDayInput && startTime) {
            const hours = startTime.getHours().toString().padStart(2, '0');
            const minutes = startTime.getMinutes().toString().padStart(2, '0');
            timeOfDayInput.value = `${hours}:${minutes}`;
        }

        const takeoffLat = points[0].lat;
        const takeoffLon = points[0].lon;
        const landingLat = points[points.length - 1].lat;
        const landingLon = points[points.length - 1].lon;

        getElevationsFromAPI(takeoffLat, takeoffLon, landingLat, landingLon)
            .then(elevations => {
                if (elevations) {
                    processTrackData(points, elevations.takeoff, elevations.landing, flightTimeMinutes);
                    
                    // Add heart rate data if available
                    if (points.some(p => p.heartRate)) {
                        const biometricStats = getBiometricStats(points);
                        const existingPreview = document.getElementById('gpxPreview');
                        existingPreview.innerHTML += `
                            <div class="biometric-stats">
                                ${biometricStats.avgHR ? `<div>Avg Heart Rate: ${biometricStats.avgHR} bpm</div>` : ''}
                                ${biometricStats.maxHR ? `<div>Max Heart Rate: ${biometricStats.maxHR} bpm</div>` : ''}
                            </div>
                        `;
                    }
                }
            })
            .catch(error => {
                console.warn('Error:', error);
                processTrackData(points, null, null, flightTimeMinutes);
            });
    };

    reader.readAsText(file);
}

function handleGpxUpload(file) {
    
    const reader = new FileReader();
    reader.onload = async function(e) {
        const gpx = new gpxParser();
        gpx.parse(e.target.result);
        
        // Get the first track
        const track = gpx.tracks[0];
        if (!track || !track.points.length) {
            console.error('No valid track found in GPX file');
            return;
        }
        
        const points = track.points;
        const startTime = new Date(points[0].time);
        const endTime = new Date(points[points.length - 1].time);
        const flightTimeMinutes = Math.round((endTime - startTime) / 1000 / 60);

        const dateInput = document.getElementById('flightDate');
        if (dateInput && startTime) {
            // Set date using Flatpickr
            const fp = dateInput._flatpickr;
            if (fp) {
                fp.setDate(startTime);
            }
        }

        // Set time of day from GPX start time
        const timeOfDayInput = document.getElementById('flightTimeOfDay');
        if (timeOfDayInput && startTime) {
            const hours = startTime.getHours().toString().padStart(2, '0');
            const minutes = startTime.getMinutes().toString().padStart(2, '0');
            timeOfDayInput.value = `${hours}:${minutes}`;
        }


        try {
            const takeoffLat = points[0].lat;
            const takeoffLon = points[0].lon;
            const landingLat = points[points.length - 1].lat;
            const landingLon = points[points.length - 1].lon;
            
            const elevations = await getElevationsFromAPI(takeoffLat, takeoffLon, landingLat, landingLon);
            
            if (elevations) {
                processTrackData(points, elevations.takeoff, elevations.landing, flightTimeMinutes);
            } else {
                throw new Error('No elevation data available');
            }
        } catch (error) {
            console.warn('Error fetching elevation:', error);
            processTrackData(points, null, null, flightTimeMinutes);
        }
    };

    reader.readAsText(file);
}

function mean(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
}











function processTrackData(points, takeoffAlt, apiLandingAlt, flightTimeMinutes, isAircraft = false) {
    const coordinates = points.map(p => [p.lat, p.lon]);

    // Set speed limits based on flight type
    const minSpeedThreshold = isAircraft ? 30 : 10;  // km/h
    const maxSpeedThreshold = isAircraft ? 500 : 40; // km/h - reduced from 50 to 40 for paragliding

    let grade = '';
    let landingAlt = '';
    let maxEle = 0; 
    
    // Process biometric data if available
    if (points.some(p => p.heartRate || p.temperature)) {
        const biometricStats = getBiometricStats(points);
        
        if (biometricStats.avgHR) {
            document.getElementById('flightAvgHR').value = biometricStats.avgHR;
        }
        if (biometricStats.maxHR) {
            document.getElementById('flightMaxHR').value = biometricStats.maxHR;
        }
        if (biometricStats.avgTemp) {
            document.getElementById('flightAvgTemp').value = biometricStats.avgTemp;
        }
    }
    
    // Extract and filter valid elevations
    const validElevations = points
        .map(p => p.ele)
        .filter(ele => ele !== null && !isNaN(ele) && ele > 0);
    
    // Calculate min and max elevations from track data
    // Round to nearest 10m for min elevation like Leonardo does
    const minAltitude = validElevations.length > 0 ? 
        Math.ceil(Math.min(...validElevations) / 10) * 10 : 
        Math.min(takeoffAlt, apiLandingAlt);
    
    if (validElevations.length > 0) {
        // Round max elevation to nearest 10m like Leonardo does
        maxEle = Math.round(Math.max(...validElevations) / 10) * 10;
        
        if (points[0].ele && (!takeoffAlt || takeoffAlt === null)) {
            takeoffAlt = points[0].ele;
        }
        
        if (points[points.length-1].ele && (!apiLandingAlt || apiLandingAlt === null)) {
            apiLandingAlt = points[points.length-1].ele;
        }
    }
    
    if (takeoffAlt !== null && apiLandingAlt !== null) {
        landingAlt = apiLandingAlt;
        grade = takeoffAlt - landingAlt;
        
        if (maxEle === 0) {
            maxEle = Math.max(takeoffAlt, apiLandingAlt);
        }
        
        document.getElementById('flightGrade').value = grade;
        document.getElementById('flightTakeoffAlt').value = takeoffAlt;
        document.getElementById('flightLandingAlt').value = landingAlt;
        document.getElementById('flightMaxAlt').value = Math.round(maxEle);
    }

    // IMPROVED SPEED CALCULATION - MATCHING CHART CODE
    let totalDistance = 0;
    const rawSpeeds = [0]; // Start with 0 speed
    
    // Calculate distances and raw speeds
    for (let i = 1; i < points.length; i++) {
        const currentPoint = points[i];
        const prevPoint = points[i-1];
        
        const segmentDistance = calculateDistance(
            prevPoint.lat, prevPoint.lon,
            currentPoint.lat, currentPoint.lon
        );
        
        totalDistance += segmentDistance;
        
        const timeDiffSeconds = (new Date(currentPoint.time) - new Date(prevPoint.time)) / 1000;
        
        if (timeDiffSeconds > 0) {
            // Calculate speed in km/h
            const speed = (segmentDistance / timeDiffSeconds) * 3600;
            rawSpeeds.push(speed);
        } else {
            // Use previous speed if time difference is invalid
            rawSpeeds.push(rawSpeeds.length > 0 ? rawSpeeds[rawSpeeds.length - 1] : 0);
        }
    }
    
    // Apply moving average to smooth speed data with a larger window (like in chart code)
    const windowSize = 20; // Same as chart code
    const speeds = applyMovingAverage(rawSpeeds, windowSize);
    
    // Filter out unreasonable speeds
    const filteredSpeeds = speeds.filter(speed => speed < maxSpeedThreshold);
    const maxSpeed = filteredSpeeds.length > 0 ? Math.max(...filteredSpeeds) : 0;
    
    // Calculate average speed like Leonardo does (distance/time)
    const flightTimeHours = flightTimeMinutes / 60;
    const avgSpeed = flightTimeHours > 0 ? totalDistance / flightTimeHours : 0;
    const validSpeedCount = filteredSpeeds.length;

    // Rest of your vertical speed calculation is already good
    const verticalSpeeds = [];
    
    // First, smooth the elevation data to reduce noise
    const elevations = points.map(p => p.ele);
    const smoothedElevations = applyMovingAverage(elevations, 10);
    
    // Calculate vertical speeds using smoothed elevations
    for (let i = 1; i < points.length; i++) {
        const currentPoint = points[i];
        const prevPoint = points[i - 1];
        
        const timeDiffSeconds = (new Date(currentPoint.time) - new Date(prevPoint.time)) / 1000;
        
        // Adjust vertical speed threshold based on flight type
        const maxVerticalSpeedThreshold = isAircraft ? 30 : 10; // m/s
        
        if (timeDiffSeconds > 0) {
            const elevDiff = smoothedElevations[i] - smoothedElevations[i-1];
            const verticalSpeed = elevDiff / timeDiffSeconds;
            if (Math.abs(verticalSpeed) < maxVerticalSpeedThreshold) { 
                verticalSpeeds.push(verticalSpeed);
            } else {
                // Use previous value or 0 for outliers
                verticalSpeeds.push(verticalSpeeds.length > 0 ? verticalSpeeds[verticalSpeeds.length - 1] : 0);
            }
        }
    }
    
    // Apply smoothing to vertical speeds for more accurate max/min
    const smoothedVertSpeeds = applyMovingAverage(verticalSpeeds, 15);
    const doubleSmoothedVertSpeeds = applyMovingAverage(smoothedVertSpeeds, 8);
    
    // Find max climb and sink rates from smoothed data
    let maxClimbRate = 0;
    let maxSinkRate = 0;
    
    if (doubleSmoothedVertSpeeds.length > 0) {
        maxClimbRate = Math.max(...doubleSmoothedVertSpeeds);
        maxSinkRate = Math.min(...doubleSmoothedVertSpeeds);
    }

    // Calculate altitude gain using min and max elevations
    const altitudeGain = maxEle - minAltitude;

    // Update form fields
    document.getElementById('flightTime').value = flightTimeMinutes;
    document.getElementById('flightDistance').value = totalDistance.toFixed(2);
    document.getElementById('flightMaxSpeed').value = Math.round(maxSpeed);
    document.getElementById('flightAvgSpeed').value = avgSpeed.toFixed(1);
    document.getElementById('flightMaxClimb').value = maxClimbRate.toFixed(1);
    document.getElementById('flightMaxSink').value = maxSinkRate.toFixed(1);
    document.getElementById('flightAltGain').value = Math.round(altitudeGain); // Add this line
    window.lastUploadedCoordinates = {
        coords: coordinates,
        speeds: speeds,
        points: points
    };
    
    // Map visualization
    const mapDiv = document.getElementById('gpxMap');
    mapDiv.style.display = 'block';
    
    if (window.flightMap) {
        window.flightMap.remove();
    }
    
    window.flightMap = L.map(mapDiv);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(window.flightMap);
    
    const gradientMinSpeed = Math.min(...speeds.filter(s => s > 0));
    const gradientMaxSpeed = Math.max(...speeds);
    
    for (let i = 0; i < coordinates.length - 1; i++) {
        const normalizedSpeed = (speeds[i] - gradientMinSpeed) / (gradientMaxSpeed - gradientMinSpeed);
        const color = getSpeedColor(normalizedSpeed);
        
        L.polyline([coordinates[i], coordinates[i + 1]], {
            color: color,
            weight: 3,
            opacity: 0.8
        }).addTo(window.flightMap);
    }
    
    // Add start/finish markers
    if (coordinates.length > 0) {
        L.marker(coordinates[0], {
            icon: L.icon({
                iconUrl: 'assets/start.png',
                iconSize: [32, 32],
                iconAnchor: [6, 28],
                popupAnchor: [16, -16]
            })
        }).addTo(window.flightMap);
        
        L.marker(coordinates[coordinates.length - 1], {
            icon: L.icon({
                iconUrl: 'assets/finish.png',
                iconSize: [32, 32],
                iconAnchor: [6, 28],
                popupAnchor: [16, -16]
            })
        }).addTo(window.flightMap);
    }
    
    // Add speed legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
        const div = L.DomUtil.create('div', 'speed-legend');
        div.innerHTML = `
            <div class="legend-title">Speed</div>
            <div class="legend-gradient"></div>
            <div class="legend-labels">
                <span>${Math.round(gradientMinSpeed)} km/h</span>
                <span>${Math.round(gradientMaxSpeed)} km/h</span>
            </div>
        `;
        return div;
    };
    legend.addTo(window.flightMap);
    
    // Fit map bounds
    window.flightMap.fitBounds(L.polyline(coordinates).getBounds(), {
        padding: [30, 30]
    });
    window.flightMap.invalidateSize();
    
    // Update preview stats
    document.getElementById('gpxPreview').innerHTML = `
        <div class="gpx-stats">
            <div>Flight Time: ${formatDuration(flightTimeMinutes)}</div>
            <div>Distance: ${totalDistance.toFixed(2)} km</div>
            ${takeoffAlt !== null ? `
                <div>Grade: ${grade}m</div>
                <div>Take-off Alt: ${Math.round(takeoffAlt)}m</div>
                <div>Landing Alt: ${Math.round(landingAlt)}m</div>
                <div>Max Alt: ${Math.round(maxEle)}m</div>
                <div>Min Alt: ${Math.round(minAltitude)}m</div>
                <div>Altitude Gain: ${Math.round(altitudeGain)}m</div>
            ` : ''}
            <div>Max Speed: ${Math.round(maxSpeed)} km/h</div>
            <div>Avg Speed: ${avgSpeed.toFixed(1)} km/h</div>
            <div>Max Climb: ${maxClimbRate.toFixed(1)} m/s</div>
            <div>Max Sink: ${maxSinkRate.toFixed(1)} m/s</div>
        </div>
    `;
    
    // Comprehensive logging
    console.log('\n===== PROCESSED TRACK DATA =====');
    console.log(`Flight type: ${isAircraft ? 'Aircraft' : 'Paragliding/Paramotoring'}`);
    console.log(`Total points: ${points.length}`);
    console.log(`Valid elevation points: ${validElevations.length}`);
    console.log('\n--- DISTANCE METRICS ---');
    console.log(`Total distance: ${totalDistance.toFixed(2)} km`);
    console.log('\n--- SPEED METRICS ---');
    console.log(`Max speed: ${Math.round(maxSpeed)} km/h`);
    console.log(`Avg speed: ${avgSpeed.toFixed(1)} km/h`);
    console.log(`Valid speed points: ${validSpeedCount}`);
    console.log('\n--- ALTITUDE METRICS ---');
    console.log(`Take-off altitude: ${Math.round(takeoffAlt)} m`);
    console.log(`Landing altitude: ${Math.round(apiLandingAlt)} m`);
    console.log(`Grade (takeoff-landing): ${Math.round(grade)} m`);
    console.log(`Min altitude: ${Math.round(minAltitude)} m`);
    console.log(`Max altitude: ${Math.round(maxEle)} m`);
    console.log(`Altitude gain (max-min): ${Math.round(altitudeGain)} m`);
    console.log('\n--- VERTICAL SPEED METRICS ---');
    console.log(`Max climb rate: ${maxClimbRate.toFixed(1)} m/s`);
    console.log(`Max sink rate: ${maxSinkRate.toFixed(1)} m/s`);
    console.log(`Vertical speed points: ${verticalSpeeds.length}`);
    console.log('\n--- THRESHOLDS ---');
    console.log(`Speed thresholds: ${minSpeedThreshold}-${maxSpeedThreshold} km/h`);
    console.log('================================');
}







function movingAverage(array, windowSize) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let start = Math.max(0, i - Math.floor(windowSize/2));
        let end = Math.min(array.length, i + Math.floor(windowSize/2) + 1);
        let sum = 0;
        for (let j = start; j < end; j++) {
            sum += array[j];
        }
        result.push(sum / (end - start));
    }
    return result;
}
function checkConnectionBeforeUpload(event) {
    event.preventDefault(); // Prevent any default behavior
    
    if (!navigator.onLine) {
        showCustomAlert('Internet connection required to process track files. Please connect and try again.');
        return;
    }
    
    // If online, trigger the file input once
    document.getElementById('trackFile').click();
}

function handleTrackUpload(file) {
    if (!navigator.onLine) {
        showCustomAlert('Internet connection required to process track files. Please connect and try again.');
        // Clear the file input so user can retry when online
        const fileInput = document.getElementById('trackFile');
        if (fileInput) fileInput.value = '';
        return;
    }
    if (!file) return;
    
    const fileExtension = file.name.split('.').pop().toLowerCase();
    
    if (fileExtension === 'gpx') {
        handleGpxUpload(file);
    } else if (fileExtension === 'tcx') {
        handleTcxUpload(file);
    } else if (fileExtension === 'igc') {
        handleIgcUpload(file);
    } else {
        showCustomAlert('Please upload a .gpx, .tcx, or .igc file');
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; 
}

function getSpeedColor(normalizedSpeed) {
    const hue = (1 - normalizedSpeed) * 120; 
    return `hsl(${hue}, 100%, 50%)`;
}

function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h${mins}m`;
}

function formatTimeOfDay(timeString) {
    if (!timeString) return 'Not specified';
    const [hours, minutes] = timeString.split(':');
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}
async function deleteFlight() {
    const flight = currentSortedFlights[currentFlightIndex];
    if (!flight) return;

    try {
        // Delete from IndexedDB
        await dbOperations.deleteFromStore(STORES.flights, flight.id);



        // Close the flight details modal
        const flightModal = document.getElementById('flightModal');
        if (flightModal) {
            flightModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';

        // Clear current flights array and reload from DB
        currentSortedFlights = [];
        const flights = await dbOperations.getAllFromStore(STORES.flights);
        
        if (flights && flights.length > 0) {
            currentSortedFlights = flights;
            // Update the current view
            if (currentView === 'grid') {
                await displayGridView(flights);
            } else {
                displayListView(flights);
            }
        } else {
            // No flights left, show empty state
            const container = document.getElementById('flightsGrid');
            container.innerHTML = '<div class="no-flights">No flights found. Add a flight to start filling this space</div>';
        }

        // Refresh sites data
        const sites = await getUniqueSites();
        // await initSitesSection();
        
        // Update sites weather if we're on the sites page
        const sitesContainer = document.querySelector('.sites-container');
        if (sitesContainer && sitesContainer.style.display !== 'none') {
            await handleMySitesBoxActivation();
        }

        // Update stats and heat map
        const statsContainer = document.querySelector('.box-stats');
        if (statsContainer && statsContainer.style.display !== 'none') {
            await handleStatsBoxActivation();
            
            // Reset heat map if no flights left
            if (!flights || flights.length === 0) {
                const mapContainer = document.getElementById('flight-map');
                if (mapContainer) {
                    // Clear the map container
                    mapContainer.innerHTML = '';
                    // Reinitialize an empty map
                    const map = L.map('flight-map').setView([0, 0], 2);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors'
                    }).addTo(map);
                    
                    // Add fullscreen control
                    L.control.fullscreen({
                        position: 'topleft',
                        title: {
                            'false': 'View Fullscreen',
                            'true': 'Exit Fullscreen'
                        },
                        content: '<span style="font-size: 18px; font-weight: bold;">⛶</span>'
                    }).addTo(map);
                }
                window.heatMapInitialized = false;
            }
        } else {
            // Update stats in background anyway to keep data fresh
            const allFlights = await dbOperations.getAllFromStore(STORES.flights);
            if (allFlights && allFlights.length > 0) {
                updateSummaryStats(allFlights);
                await refreshFlightSummaries();
                createCharts(allFlights);
            } else {
                // Reset stats if no flights left
                updateSummaryStats([]);
                await refreshFlightSummaries();
                createCharts([]);
            }
        }

        // Refresh calendar if it's visible
        refreshFlightCalendar();
        
        showSuccessMessage('Flight deleted successfully!');

    } catch (error) {
        console.error('Error deleting flight:', error);
        showCustomAlert('Error deleting flight: ' + error.message);
    }
}


async function handleUpdateFlight(event, flight) {
    event.preventDefault();
        
    // Find the submit button and processing indicator
    const submitButton = event.target.querySelector('button[type="submit"]');
    const processingIndicator = event.target.querySelector('.processing-indicator');
    
    // Show processing state
    if (submitButton) submitButton.disabled = true;
    if (processingIndicator) processingIndicator.style.display = 'inline-block';
    try {
        // Format the date first
        const dateInput = document.getElementById('flightDate');
        let formattedDate;
        
        // Get date from Flatpickr instance
        const fp = dateInput._flatpickr;
        if (fp) {
            const selectedDate = fp.selectedDates[0];
            formattedDate = `${selectedDate.getDate().toString().padStart(2, '0')}/${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}/${selectedDate.getFullYear().toString().slice(-2)}`;
        } else {
            formattedDate = flight.date;
        }

        let coordinates = null;

        if (window.lastUploadedCoordinates) {
            coordinates = window.lastUploadedCoordinates;
        } else if (selectedTakeoffCoordinates && selectedLandingCoordinates) {
            coordinates = {
                coords: [selectedTakeoffCoordinates, selectedLandingCoordinates],
                type: 'manual'
            };
        }
        

        const updatedFlight = {
            ...flight,
            id: flight.id,
            type: document.getElementById('flightType').value || flight.type,
            type2: document.getElementById('flightType2').value || flight.type2,
            coordinates: coordinates ? JSON.stringify(coordinates) : flight.coordinates,
            // minimapImage: coordinates ? null : flight.minimapImage,
            rating: parseInt(document.querySelector('input[name="flightRating"]:checked')?.value) || flight.rating || 0,
            stressLevel: parseInt(document.getElementById('stressLevel').value) || 0,
            date: formattedDate,
            timeOfDay: document.getElementById('flightTimeOfDay').value || flight.timeOfDay || null,
            site: document.getElementById('flightSite').value || flight.site,
            country: document.getElementById('flightCountry').value || flight.country,
            takeoff: document.getElementById('flightTakeoff').value || flight.takeoff,
            takeoff_alt: parseInt(document.getElementById('flightTakeoffAlt').value) || flight.takeoff_alt || 0,
            landing: document.getElementById('flightLanding').value || flight.landing,
            landing_alt: parseInt(document.getElementById('flightLandingAlt').value) || flight.landing_alt || 0,
            grade: parseInt(document.getElementById('flightGrade').value) || flight.grade || 0,
            time: document.getElementById('flightTime').value || flight.time,
            glider: document.getElementById('flightGlider').value || flight.glider,
            harness: document.getElementById('flightHarness').value || flight.harness,
            reserve: document.getElementById('flightreserve').value || flight.reserve,
            flight_distance: parseFloat(document.getElementById('flightDistance').value) || flight.flight_distance || null,
            comments: document.getElementById('flightComments').value,
                            school: document.getElementById('flightSchool').value.trim(),
                            club: document.getElementById('flightClub').value.trim(),
                max_altitude: parseInt(document.getElementById('flightMaxAlt').value) || flight.max_altitude || null,
            max_speed: parseInt(document.getElementById('flightMaxSpeed').value) || flight.max_speed || null,
            avg_speed: parseFloat(document.getElementById('flightAvgSpeed').value) || flight.avg_speed || null,
            max_climb: document.getElementById('flightMaxClimb').value !== '' ? 
            parseFloat(document.getElementById('flightMaxClimb').value) : 
            flight.max_climb ?? null,
            max_sink: document.getElementById('flightMaxSink').value !== '' ? 
            parseFloat(document.getElementById('flightMaxSink').value) : 
            flight.max_sink ?? null,
            avg_heart_rate: parseInt(document.getElementById('flightAvgHR')?.value) || flight.avg_heart_rate || null,
            max_heart_rate: parseInt(document.getElementById('flightMaxHR')?.value) || flight.max_heart_rate || null,
            avg_temperature: parseFloat(document.getElementById('flightAvgTemp')?.value) || flight.avg_temperature || null
        };

        // Validate required fields
        if (!updatedFlight.date || !updatedFlight.site) {
            throw new Error('Date and Site are required fields');
        }



        // Save the updated flight
        await dbOperations.updateFlight(updatedFlight);

        // If coordinates changed, generate new map image
        // if (coordinates) {
        //     const mapDiv = document.createElement('div');
        //     document.body.appendChild(mapDiv);
        //     try {
        //         updatedFlight.minimapImage = await renderAndCaptureMap(coordinates, mapDiv);
        //         await dbOperations.updateFlight(updatedFlight);
        //     } catch (error) {
        //         console.warn('Could not generate new map image:', error);
        //     } finally {
        //         if (mapDiv.parentNode) {
        //             document.body.removeChild(mapDiv);
        //         }
        //     }
        // }

        // Close both modals to ensure proper cleanup
        const addFlightModal = document.getElementById('addFlightModal');
        const flightModal = document.getElementById('flightModal');
        if (addFlightModal) addFlightModal.style.display = 'none';
        if (flightModal) flightModal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Reset form and coordinates
        event.target.reset();
        window.lastUploadedCoordinates = null;
        selectedTakeoffCoordinates = null;
        selectedLandingCoordinates = null;

        // Refresh the flights display
        await loadFlights();
        await populateFlightDataLists();
        sortFlights();
        // initSitesSection();
        currentPage = 1;
        await displayGridView(currentSortedFlights);
        
        // Refresh calendar if it's visible
        refreshFlightCalendar();

        showSuccessMessage('Flight updated successfully!');

    } catch (error) {
        console.error('Error updating flight:', error);
        showCustomAlert('Error updating flight: ' + error.message);
        if (submitButton) submitButton.disabled = false;
        if (processingIndicator) processingIndicator.style.display = 'none';
    }
}


async function editFlight(index) {
    const flight = currentSortedFlights[index];
    if (!flight) return;
    cleanupMap();
    // Handle map image cleanup
    if (flight.mapImage) {
        delete flight.mapImage;
    }

    // Handle modal display
    const flightModal = document.getElementById('flightModal');
    if (flightModal) {
        flightModal.style.display = 'none';
    }
    
    const modal = document.getElementById('addFlightModal');
    if (!modal) {
        console.error('Add/Edit flight modal not found');
        return;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    scrollModalToTop(modal);
    // Update modal title for editing
    const modalTitle = modal.querySelector('.modal-title');  // Add this class to your title element
    if (modalTitle) {
        modalTitle.textContent = 'Edit Flight Details';
    }

    // Get gear data from IndexedDB
    try {
        const flights = await dbOperations.getAllData(STORES.flights);
        const sites = [...new Set(flights.map(f => f.site).filter(Boolean))];
        const takeoffs = [...new Set(flights.map(f => f.takeoff).filter(Boolean))];
        const landings = [...new Set(flights.map(f => f.landing).filter(Boolean))];
        const school = [...new Set(flights.map(f => f.school).filter(Boolean))];
        const club = [...new Set(flights.map(f => f.club).filter(Boolean))];

        // Remove any existing datalists
        ['sitesList', 'takeoffsList', 'landingsList'].forEach(id => {
            const datalist = document.getElementById(id);
            if (datalist) datalist.remove();
        });

        // Remove list attribute from inputs
        const siteInput = document.getElementById('flightSite');
        const takeoffInput = document.getElementById('flightTakeoff');
        const landingInput = document.getElementById('flightLanding');
        const schoolInput = document.getElementById('flightSchool');
        const clubInput = document.getElementById('flightClub');

        if (siteInput) siteInput.removeAttribute('list');
        if (takeoffInput) takeoffInput.removeAttribute('list');
        if (landingInput) landingInput.removeAttribute('list');
        if (schoolInput) schoolInput.removeAttribute('list');
        if (clubInput) clubInput.removeAttribute('list');
        
        // Setup custom autocomplete for location fields
        setupAutocomplete('flightSite', () => sites);
        setupAutocomplete('flightTakeoff', () => takeoffs);
        setupAutocomplete('flightLanding', () => landings);
        setupAutocomplete('flightSchool', () => school);
        setupAutocomplete('flightClub', () => club);

        await populateFlightDataLists();
        const gearData = await dbOperations.getData(STORES.gear) || { gliders: [], harnesses: [], reserve: [] };
        const dateInput = document.getElementById('flightDate');
        if (dateInput) {
            // Initialize Flatpickr for flight date
            const fp = flatpickr(dateInput, {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: "2000-01-01",
                defaultDate: formatDateForInput(flight.date)
            });
        }
        // Populate select elements
        const gliderSelect = document.getElementById('flightGlider');
        const harnessSelect = document.getElementById('flightHarness');
        const reserveSelect = document.getElementById('flightreserve');
        const countrySelect = document.getElementById('flightCountry');

        // Populate dropdowns
        if (gliderSelect) {
            gliderSelect.innerHTML = `
                <option value="">Select Glider (optional)</option>
                ${gearData.gliders.map(glider => {
                    const value = `${glider.brand} ${glider.model}`;
                    return `<option value="${value}" ${value === flight.glider ? 'selected' : ''}>${value}</option>`;
                }).join('')}
            `;
        }

        if (harnessSelect) {
            harnessSelect.innerHTML = `
                <option value="">Select Harness (optional)</option>
                ${gearData.harnesses.map(harness => {
                    const value = `${harness.brand} ${harness.model}`;
                    return `<option value="${value}" ${value === flight.harness ? 'selected' : ''}>${value}</option>`;
                }).join('')}
            `;
        }
        if (reserveSelect) {
            reserveSelect.innerHTML = `
                <option value="">Select reserve (optional)</option>
                ${gearData.reserve.map(reserve => {
                    const value = `${reserve.brand} ${reserve.model}`;
                    return `<option value="${value}" ${value === flight.reserve ? 'selected' : ''}>${value}</option>`;
                }).join('')}
            `;
        }
        // Add country selection population
        if (countrySelect) {
            countrySelect.innerHTML = `
                <option value="">Select Country</option>
                ${countries.map(country => 
                    `<option value="${country.code}" ${country.code === flight.country ? 'selected' : ''}>
                        ${country.name}
                    </option>`
                ).join('')}
            `;
        }
        if (flight.rating) {
            const ratingRadio = document.querySelector(`input[name="flightRating"][value="${flight.rating}"]`);
            if (ratingRadio) {
                ratingRadio.checked = true;
            }
        }
        
        // Inside editFlight function, where you set the stress level
        const stressSlider = document.getElementById('stressLevel');
        if (stressSlider) {
            // Set the slider value to the flight's stress level or 0
            stressSlider.value = flight.stressLevel || '0';
            const group = stressSlider.closest('.stress-level-group');
const stressValue = group?.querySelector('.stress-value');

if (stressValue) {
    stressValue.textContent = `${stressSlider.value}%`;
}

            if (stressValue) {
                // Ensure the display matches the actual flight data
                stressValue.textContent = flight.stressLevel ? `${flight.stressLevel}%` : '0%';
            }
        }
        // Populate all form fields with existing flight data
        document.getElementById('flightDate').value = formatDateForInput(flight.date);
        document.getElementById('flightTimeOfDay').value = flight.timeOfDay || '';
        document.getElementById('flightSite').value = flight.site || '';
        document.getElementById('flightTakeoff').value = flight.takeoff || '';
        document.getElementById('flightTakeoffAlt').value = flight.takeoff_alt || '';
        document.getElementById('flightLanding').value = flight.landing || '';
        document.getElementById('flightLandingAlt').value = flight.landing_alt || '';
        document.getElementById('flightDistance').value = flight.flight_distance || '';
        document.getElementById('flightGrade').value = flight.grade || '';
        document.getElementById('flightTime').value = flight.time || '';
        document.getElementById('flightComments').value = flight.comments || '';    
        document.getElementById('flightSchool').value = flight.school || '';
        document.getElementById('flightClub').value = flight.club || '';
        document.getElementById('flightType').value = flight.type || '';
        document.getElementById('flightType2').value = flight.type2 || '';
        // Add these lines to populate the additional metrics
        document.getElementById('flightMaxAlt').value = flight.max_altitude || '';
        document.getElementById('flightMaxSpeed').value = flight.max_speed || '';
        document.getElementById('flightAvgSpeed').value = flight.avg_speed || '';
        document.getElementById('flightMaxClimb').value = flight.max_climb || '';
        document.getElementById('flightMaxSink').value = flight.max_sink || '';

        // Optional fields (check if they exist first)
        if (document.getElementById('flightAvgHR')) {
            document.getElementById('flightAvgHR').value = flight.avg_heart_rate || '';
        }
        if (document.getElementById('flightMaxHR')) {
            document.getElementById('flightMaxHR').value = flight.max_heart_rate || '';
        }
        if (document.getElementById('flightAvgTemp')) {
            document.getElementById('flightAvgTemp').value = flight.avg_temperature || '';
        }

        // Set up form submission
        const form = document.getElementById('addFlightForm');
        if (form) {
            form.onsubmit = (e) => handleUpdateFlight(e, flight);
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Update Flight';
                submitButton.disabled = false;
            }
            const processingIndicator = form.querySelector('.processing-indicator');
            if (processingIndicator) {
                processingIndicator.style.display = 'none';
            }
        }

        if (flight.coordinates) {
            try {
                window.lastUploadedCoordinates =
                    typeof flight.coordinates === 'string'
                        ? JSON.parse(flight.coordinates)
                        : flight.coordinates;
            } catch (error) {
                console.warn('Could not parse flight coordinates:', error);
                window.lastUploadedCoordinates = null;
            }
        }
        
        if (siteInput) siteInput.value = flight.site || '';
        if (takeoffInput) takeoffInput.value = flight.takeoff || '';
        if (landingInput) landingInput.value = flight.landing || '';

    } catch (error) {
        console.error('Error setting up edit form:', error);
        showCustomAlert('Error loading flight data. Please try again.');
    }
}

async function addNewFlight() {
    currentFlightIndex = null;

    const modal = document.getElementById('addFlightModal');
    if (!modal) {
        console.error('Add flight modal not found');
        return;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    scrollModalToTop(modal);
    try {
        await populateFlightDataLists();
        const gearData = await dbOperations.getData(STORES.gear) || { gliders: [], harnesses: [], reserve: [] };

        const gliderSelect = document.getElementById('flightGlider');
        const harnessSelect = document.getElementById('flightHarness');
        const reserveSelect = document.getElementById('flightreserve');
        const countrySelect = document.getElementById('flightCountry');

        if (gliderSelect) {
            gliderSelect.innerHTML = `
                <option value="">Select Glider (optional)</option>
                ${gearData.gliders.map(glider => {
                    const value = `${glider.brand} ${glider.model}`;
                    return `<option value="${value}">${value}</option>`;
                }).join('')}
            `;
        }

        if (harnessSelect) {
            harnessSelect.innerHTML = `
                <option value="">Select Harness (optional)</option>
                ${gearData.harnesses.map(harness => {
                    const value = `${harness.brand} ${harness.model}`;
                    return `<option value="${value}">${value}</option>`;
                }).join('')}
            `;
        }
        if (reserveSelect) {
            reserveSelect.innerHTML = `
                <option value="">Select reserve (optional)</option>
                ${gearData.reservees.map(reserve => {
                    const value = `${reserve.brand} ${reserve.model}`;
                    return `<option value="${value}">${value}</option>`;
                }).join('')}
            `;
        }
        if (countrySelect) {
            countrySelect.innerHTML = `
                <option value="">Select Country</option>
                ${countries.map(country => 
                    `<option value="${country.code}">${country.name}</option>`
                ).join('')}
            `;
        }

        const form = document.getElementById('addFlightForm');
        if (form) {
            form.reset();

                
                const dateInput = document.getElementById('flightDate');
                if (dateInput) {
                    const fp = flatpickr(dateInput, {
                        dateFormat: "Y-m-d",
                        maxDate: "today",
                        minDate: "2000-01-01",
                        defaultDate: "today"
                    });
                }
            
            form.onsubmit = handleAddFlight;
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Add Flight';
            }
            const stressSlider = document.getElementById('stressLevel');
            if (stressSlider) {
                stressSlider.value = 0;
                const group = stressSlider.closest('.stress-level-group');
const stressValue = group?.querySelector('.stress-value');

if (stressValue) {
    stressValue.textContent = `${stressSlider.value}%`;
}

                if (stressValue) {
                    stressValue.textContent = '0%';
                }
            }
        }

        window.lastUploadedCoordinates = null;
        selectedTakeoffCoordinates = null;
        selectedLandingCoordinates = null;

        const modalTitle = modal.querySelector('.modal-title');
        if (modalTitle) {
            modalTitle.textContent = 'Add a New Flight';
        }

    } catch (error) {
        console.error('Error setting up add flight form:', error);
        showCustomAlert('Error preparing add flight form. Please try again.');
    }
}

function addFlight(flightDetails) {
    const flights = JSON.parse(localStorage.getItem('flights')) || [];
    flights.push({
        ...flightDetails,
        id: Date.now(), 
        date: new Date(flightDetails.date).toISOString()
    });
    localStorage.setItem('flights', JSON.stringify(flights));
    loadFlights();
}

let sortedFlightData = [];


async function loadFlights() {
    try {
        const flights = await dbOperations.getAllFromStore(STORES.flights);
        if (flights && flights.length > 0) {
            currentSortedFlights = flights;
            // Set initial sort to date descending
            currentSortColumn = 'date';
            isAscending = false;
            sortFlights('date');
        }
    } catch (error) {
        console.error('Error loading flights:', error);
    }
}


function calculateGrade() {
    const takeoffAlt = parseInt(document.getElementById('flightTakeoffAlt').value) || 0;
    const landingAlt = parseInt(document.getElementById('flightLandingAlt').value) || 0;
    const gradeInput = document.getElementById('flightGrade');
    
    if (takeoffAlt && landingAlt) {
        const grade = takeoffAlt - landingAlt;
        gradeInput.value = grade;
    }
}

function initializeFlightForm() {
    const takeoffAltInput = document.getElementById('flightTakeoffAlt');
    const landingAltInput = document.getElementById('flightLandingAlt');
    
    takeoffAltInput.addEventListener('input', calculateGrade);
    landingAltInput.addEventListener('input', calculateGrade);
}

async function openAddFlightModal() {
    cleanupMap();
    const modal = document.getElementById('addFlightModal');
    if (!modal) return;

    // Set the correct title
    const modalTitle = modal.querySelector('.modal-title');
    if (modalTitle) {
        modalTitle.textContent = 'Add a New Flight';
    }

    // Set the correct form handler and button text
    const form = document.getElementById('addFlightForm');
    if (form) {
        form.onsubmit = handleAddFlight;
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = 'Add Flight';
            submitButton.disabled = false;
        }
        
        // Hide processing indicator when opening modal
        const processingIndicator = form.querySelector('.processing-indicator');
        if (processingIndicator) {
            processingIndicator.style.display = 'none';
        }
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    scrollModalToTop(modal);
    try {
        // Get existing values from IndexedDB for autocomplete
        const flights = await dbOperations.getAllData(STORES.flights);
        const sites = [...new Set(flights.map(f => f.site).filter(Boolean))];
        const takeoffs = [...new Set(flights.map(f => f.takeoff).filter(Boolean))];
        const landings = [...new Set(flights.map(f => f.landing).filter(Boolean))];
        
        const flightTypeSelect = document.getElementById('flightType');
        if (flightTypeSelect) {
            flightTypeSelect.value = ''; // Reset the value
        }
        const flightType2Select = document.getElementById('flightType2');
        if (flightType2Select) {
            flightType2Select.value = ''; // Reset the value
        }
        // Remove any existing datalists
        ['sitesList', 'takeoffsList', 'landingsList'].forEach(id => {
            const datalist = document.getElementById(id);
            if (datalist) datalist.remove();
        });
        const stressSlider = document.getElementById('stressLevel');
        if (stressSlider) {
            // Reset both the slider and the displayed value
            stressSlider.value = '0';
            const group = stressSlider.closest('.stress-level-group');
const stressValue = group?.querySelector('.stress-value');

if (stressValue) {
    stressValue.textContent = `${stressSlider.value}%`;
}

            if (stressValue) {
                stressValue.textContent = '0%';  // Ensure the display shows 0%
            }
        }
        
        initializeFlightForm();
        // Remove list attribute from inputs
        const siteInput = document.getElementById('flightSite');
        const takeoffInput = document.getElementById('flightTakeoff');
        const landingInput = document.getElementById('flightLanding');
        const schoolInput = document.getElementById('flightSchool');
        const clubInput = document.getElementById('flightClub');
        const uniqueValues = (values) => {
            const seen = new Set();
        
            return values
                .filter(value => value && value.trim())
                .map(value => value.trim())
                .filter(value => {
                    const normalized = value.toLowerCase();
        
                    if (seen.has(normalized)) {
                        return false;
                    }
        
                    seen.add(normalized);
                    return true;
                });
        };
        
        const school = uniqueValues(flights.map(f => f.school));
        const club = uniqueValues(flights.map(f => f.club));
        


        if (siteInput) siteInput.removeAttribute('list');
        if (takeoffInput) takeoffInput.removeAttribute('list');
        if (landingInput) landingInput.removeAttribute('list');
        if (schoolInput) schoolInput.removeAttribute('list');
        if (clubInput) clubInput.removeAttribute('list');
        
        // Setup custom autocomplete for location fields
        setupAutocomplete('flightSite', () => sites);
        setupAutocomplete('flightTakeoff', () => takeoffs);
        setupAutocomplete('flightLanding', () => landings);
        setupAutocomplete('flightSchool', () => school);
        setupAutocomplete('flightClub', () => club);

        
        // Get gear data
        const gearData = await dbOperations.getData(STORES.gear) || { gliders: [], harnesses: [], reserve: [] };
        
        // Populate dropdowns
        const gliderSelect = document.getElementById('flightGlider');
        if (gliderSelect) {
            gliderSelect.innerHTML = `
                <option value="">Select Glider (optional)</option>
                ${gearData.gliders.map(glider => {
                    const value = `${glider.brand} ${glider.model}`;
                    return `<option value="${value}">${value}</option>`;
                }).join('')}
            `;
        }
        
        const harnessSelect = document.getElementById('flightHarness');
        if (harnessSelect) {
            harnessSelect.innerHTML = `
                <option value="">Select Harness (optional)</option>
                ${gearData.harnesses.map(harness => {
                    const value = `${harness.brand} ${harness.model}`;
                    return `<option value="${value}">${value}</option>`;
                }).join('')}
            `;
        }
        const reserveSelect = document.getElementById('flightreserve');
        if (reserveSelect) {
            reserveSelect.innerHTML = `
                <option value="">Select reserve (optional)</option>
                ${gearData.reserve.map(reserve => {
                    const value = `${reserve.brand} ${reserve.model}`;
                    return `<option value="${value}">${value}</option>`;
                }).join('')}
            `;
        }
        const countrySelect = document.getElementById('flightCountry');
        if (countrySelect) {
            countrySelect.innerHTML = `
                <option value="">Select Country</option>
                ${countries.map(country => 
                    `<option value="${country.code}">${country.name}</option>`
                ).join('')}
            `;
        }
        
        // initializeFlightForm();
        
    } catch (error) {
        console.error('Error setting up modal:', error);
    }
}




function createSpeedGradient(coordinates, speeds) {
    const segments = [];
    const minSpeed = Math.min(...speeds);
    const maxSpeed = Math.max(...speeds);
    const speedRange = maxSpeed - minSpeed;

    // Use a larger window size for smoother transitions
    const smoothingWindow = 10; // Increase this number for even smoother transitions

    // Helper function to get average speed over a window
    function getAverageSpeed(index) {
        let sum = 0;
        let count = 0;
        for (let i = Math.max(0, index - smoothingWindow); i < Math.min(speeds.length, index + smoothingWindow + 1); i++) {
            sum += speeds[i];
            count++;
        }
        return sum / count;
    }

    // Create segments with smoother transitions
    for (let i = 0; i < coordinates.length - 1; i++) {
        const avgSpeed = getAverageSpeed(i);
        const speedFactor = (avgSpeed - minSpeed) / speedRange;

        // Get color based on speed factor
        let color;
        if (speedFactor < 0.33) {
            // Interpolate between blue and green
            const factor = speedFactor * 3;
            color = `rgb(33, ${Math.round(150 + factor * (175-150))}, ${Math.round(243 - factor * (243-80))})`;
        } else if (speedFactor < 0.66) {
            // Interpolate between green and yellow
            const factor = (speedFactor - 0.33) * 3;
            color = `rgb(${Math.round(33 + factor * (255-33))}, ${Math.round(175 + factor * (193-175))}, ${Math.round(80 - factor * 80)})`;
        } else {
            // Interpolate between yellow and red
            const factor = (speedFactor - 0.66) * 3;
            color = `rgb(255, ${Math.round(193 - factor * 193)}, 0)`;
        }

        segments.push(L.polyline(
            [coordinates[i], coordinates[i + 1]], 
            {
                color: color,
                weight: 3,
                opacity: 0.8
            }
        ));
    }

    return segments;
}


// Update the map initialization in both handleGpxUpload and showFlightDetails
function initializeMap(mapDiv, coordinates, speeds = null) {
    const map = L.map(mapDiv);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
    }).addTo(map);
    
    // Add fullscreen control
    L.control.fullscreen({
        position: 'topleft',
        title: {
            'false': 'View Fullscreen',
            'true': 'Exit Fullscreen'
        },
        content: '<span style="font-size: 18px; font-weight: bold;">⛶</span>'
    }).addTo(map);

    // Create custom flag icons using your own images
    const startIcon = L.icon({
        iconUrl: 'assets/start.png',
        iconSize: [32, 32],
        iconAnchor: [6, 28],  // Changed: [4,28] moves icon more right and up (was [8,24])
        popupAnchor: [16, -16]
    });

    const endIcon = L.icon({
        iconUrl: 'assets/finish.png',
        iconSize: [32, 32],
        iconAnchor: [6, 28],  // Changed: same as startIcon
        popupAnchor: [16, -16]
    });

    // Add markers with custom icons
    L.marker(coordinates[0], {icon: startIcon}).addTo(map);
    L.marker(coordinates[coordinates.length - 1], {icon: endIcon}).addTo(map);

    // Create path with color gradient if speeds are provided
    if (speeds) {
        const segments = createSpeedGradient(coordinates, speeds);
        segments.forEach(segment => segment.addTo(map));
    } else {
        // Single color path if no speeds
        L.polyline(coordinates, {
            color: '#2196F3',
            weight: 3,
            opacity: 0.8
        }).addTo(map);
    }

    // Add legend if speeds are provided
    // if (speeds) {
    //     const legend = L.control({position: 'bottomright'});
    //     legend.onAdd = function() {
    //         const div = L.DomUtil.create('div', 'speed-legend');
    //         div.innerHTML = `
                
    //             <div class="legend-gradient"></div>
    //             <div class="legend-labels">
    //                 <span>${Math.round(Math.min(...speeds))} km/h</span>
    //                 <span>${Math.round(Math.max(...speeds))} km/h</span>
    //             </div>
    //         `;
    //         return div;
    //     };
    //     legend.addTo(map);
    // }

    return map;
}
async function populateFlightDataLists() {
    try {
        // Get all flights from IndexedDB
        const flights = await dbOperations.getAllData(STORES.flights);
        const schools = [...new Set(
            flights.map(f => f.school).filter(Boolean)
        )];
        
        const clubs = [...new Set(
            flights.map(f => f.club).filter(Boolean)
        )];
        
        // Create sets of unique values (filter out null/undefined/empty values)
        const sites = new Set(flights.map(f => f.site).filter(Boolean));
        const takeoffs = new Set(flights.map(f => f.takeoff).filter(Boolean));
        const landings = new Set(flights.map(f => f.landing).filter(Boolean));
        
        // Update datalists
        updateDatalist('sitesList', Array.from(sites).sort());
        updateDatalist('takeoffsList', Array.from(takeoffs).sort());
        updateDatalist('landingsList', Array.from(landings).sort());
        updateDatalist('schoolList', Array.from(landings).sort());
        updateDatalist('clubList', Array.from(clubs).sort());
    } catch (error) {
        console.error('Error populating datalists:', error);
    }
}

// Helper function to update datalist
function updateDatalist(id, values) {
    let datalist = document.getElementById(id);
    if (!datalist) {
        datalist = document.createElement('datalist');
        datalist.id = id;
        document.body.appendChild(datalist);
    }
    datalist.innerHTML = values
        .map(value => `<option value="${value}">`)
        .join('');
}





const pendingWeatherFetches = new Map();


// Helper function for formatting dates
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { 
        month: 'short', 
        day: 'numeric' 
    });
}




async function handleProfileBoxActivation() {
    try {
        const extendedProfileData =
            await dbOperations.getData(STORES.profile, 'extendedProfile') || {
                qualifications: [],
                Courses: [],
                documents: []
            };

        profileData.qualifications = extendedProfileData.qualifications || [];
        profileData.Courses = extendedProfileData.Courses || [];
        profileData.documents = extendedProfileData.documents || [];

        await updateGearPreview();

    } catch (error) {
        console.error('Profile activation error:', error);
    }
}


function calculateLandingTime(startTime, durationMinutes) {
    if (!startTime || durationMinutes == null) {
        return null;
    }

    const [hours, minutes] = startTime.split(':').map(Number);

    if (isNaN(hours) || isNaN(minutes)) {
        return null;
    }

    const totalMinutes = hours * 60 + minutes + Number(durationMinutes);

    const landingHours = Math.floor(totalMinutes / 60) % 24;
    const landingMinutes = totalMinutes % 60;

    return `${String(landingHours).padStart(2, '0')}:${String(landingMinutes).padStart(2, '0')}`;
}


// Comprehensive cloud visualization using all available pressure levels
function createCloudVisualization(hourly, dayIndices, dayHours) {
    const container = document.getElementById('cloudChart-today-container');
    if (!container) return;
    // Add this inside the createCloudVisualization function
console.log("Cloud coverage at 200hPa:", dayIndices.map(i => hourly.cloud_cover_200hPa[i]));
console.log("Cloud coverage at 300hPa:", dayIndices.map(i => hourly.cloud_cover_300hPa[i]));

    
    // Define all pressure levels and their approximate altitudes
    const pressureLevels = [
        { name: '300hPa', altitude: 9200, key: 'cloud_cover_300hPa' },
        { name: '500hPa', altitude: 5600, key: 'cloud_cover_500hPa' },
        { name: '700hPa', altitude: 3000, key: 'cloud_cover_700hPa' },
        { name: '850hPa', altitude: 1500, key: 'cloud_cover_850hPa' },
        { name: '1000hPa', altitude: 110, key: 'cloud_cover_1000hPa' }
    ];
    
    // Check which pressure levels are available in the data
    const availableLevels = pressureLevels.filter(level => hourly[level.key] !== undefined);
    
    if (availableLevels.length === 0) {
        console.warn("No pressure level cloud data available. Falling back to basic cloud layers.");
        // Fall back to basic high/mid/low visualization
        return createBasicCloudVisualization(hourly, dayIndices, dayHours);
    }
    
    
    // Extract cloud data for each pressure level
    const cloudData = {
        hours: dayHours
    };
    
    // Add data for each available pressure level
    availableLevels.forEach(level => {
        cloudData[level.name] = dayIndices.map(i => hourly[level.key][i]);
    });
    
    // Also include the standard cloud cover data for reference
    cloudData.high = dayIndices.map(i => hourly.cloud_cover_high[i]);
    cloudData.mid = dayIndices.map(i => hourly.cloud_cover_mid[i]);
    cloudData.low = dayIndices.map(i => hourly.cloud_cover_low[i]);
    cloudData.total = dayIndices.map(i => hourly.cloud_cover[i]);

    
    // Clear previous content
    container.innerHTML = '';
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'cloudChart-today';
    container.appendChild(canvas);
    function renderChart() {
        // Get current container dimensions
        const containerWidth = container.clientWidth;
        const containerHeight = Math.min(300, Math.max(200, containerWidth * 0.5)); // Responsive height
        
        // Get device pixel ratio
        const dpr = window.devicePixelRatio || 1;
        
        // Set the canvas dimensions accounting for device pixel ratio
        canvas.width = containerWidth * dpr;
        canvas.height = containerHeight * dpr;
        
        // Set the display size (CSS) to match the desired dimensions
        canvas.style.width = `${containerWidth}px`;
        canvas.style.height = `${containerHeight}px`;
        
        // Get canvas context
        const ctx = canvas.getContext('2d');
        
        // Scale all drawing operations by the device pixel ratio
        ctx.scale(dpr, dpr);
        
        // Calculate padding based on container size (using the display dimensions)
        const padding = {
            top: Math.max(20, containerHeight * 0.1),
            right: Math.max(15, containerWidth * 0.008),
            bottom: Math.max(30, containerHeight * 0.13),
            left: Math.max(45, containerWidth * 0)
        };
        
        // Use the display dimensions for calculations
        const chartWidth = containerWidth - padding.left - padding.right;
        const chartHeight = containerHeight - padding.top - padding.bottom;
        
        // Draw background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, containerWidth, containerHeight);
        // Calculate level height for equal distribution
        const levelHeight = chartHeight / availableLevels.length;
        
        // Draw altitude grid lines and labels
        ctx.strokeStyle = 'rgba(180, 180, 180, 0.3)';
        ctx.lineWidth = 1;
        
        // Create altitude markers at each pressure level with equal height
        availableLevels.forEach((level, index) => {
            // Calculate y position based on equal height distribution
            const y = padding.top + index * levelHeight;
            
            // Draw grid line
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(padding.left + chartWidth, y);
            ctx.stroke();
            
            // Calculate font size based on container size
            const fontSize = Math.max(8, Math.min(10, containerWidth * 0.02));
            
            // Draw pressure level on first line
            ctx.fillStyle = '#555';
            ctx.font = `bold ${fontSize}px Arial`;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'bottom';
            ctx.fillText(`${level.name}`, padding.left - 5, y + levelHeight/2 - 2);
            
            // Draw altitude on second line
            ctx.font = `${fontSize - 1}px Arial`; // Slightly smaller font for altitude
            ctx.textBaseline = 'top';
            ctx.fillText(`(${(level.altitude/1000).toFixed(1)}km)`, padding.left - 5, y + levelHeight/2 + 2);
        });
        
        // Calculate hour positions - centered at each hour
        const hourPositions = dayHours.map((hour, i) => {
            return padding.left + (i / (dayHours.length - 1)) * chartWidth;
        });
        
        // Draw time labels and vertical grid lines
        hourPositions.forEach((x, i) => {
            // Draw vertical grid line
            ctx.strokeStyle = 'rgba(180, 180, 180, 0.3)';
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, padding.top + chartHeight);
            ctx.stroke();
            
            // Calculate font size based on container size
            const fontSize = Math.max(8, Math.min(10, containerWidth * 0.02));
            
            // Draw hour label
            ctx.fillStyle = '#555';
            ctx.font = `bold ${fontSize}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(dayHours[i], x, padding.top + chartHeight + 5);
        });
        
        // Draw cloud blocks for each pressure level
        availableLevels.forEach((level, levelIndex) => {
            // Calculate the top Y position for this level
            const topY = padding.top + levelIndex * levelHeight;
            
            // Set block height to the level height
            const blockHeight = levelHeight;
            
            // Calculate block width to fill the entire space between hours
            const blockWidth = chartWidth / (dayHours.length - 1);
            
            // Draw blocks for each hour except the last one
            for (let i = 0; i < dayHours.length - 1; i++) {
                const x = hourPositions[i];
                const coverage = cloudData[level.name][i];
                
                if (coverage > 0) {
                    // Position block to start at hour mark
                    const blockX = x;
                    
                    // Calculate gray value based on coverage (darker = more clouds)
                    const grayValue = Math.max(100, 220 - coverage * 1.2);
                    
                    ctx.fillStyle = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
                    
                    // Remove the border completely
                    ctx.strokeStyle = 'transparent';
                    ctx.lineWidth = 0;
                    
                    // Calculate corner radius based on container size
                    const cornerRadius = Math.max(2, Math.min(4, containerWidth * 0.008));
                    
                    // Draw cloud block - use different radius for different sides
                    if (i === 0) {
                        // First block - round top-left and bottom-left corners
                        roundRectCustom(
                            ctx, 
                            blockX, 
                            topY, 
                            blockWidth, 
                            blockHeight, 
                            { tl: cornerRadius, tr: 0, br: 0, bl: cornerRadius }, 
                            true, 
                            false
                        );
                    } else {
                        // Middle blocks - no rounded corners on sides
                        roundRectCustom(
                            ctx, 
                            blockX, 
                            topY, 
                            blockWidth, 
                            blockHeight, 
                            { tl: 0, tr: 0, br: 0, bl: 0 }, 
                            true, 
                            false
                        );
                    }
                }
            }
        });
// Add legend
const legendX = padding.left;
const legendY = padding.top - 15;

// Calculate font size based on container size
const legendFontSize = Math.max(8, Math.min(10, containerWidth * 0.02));

// Draw the legend title with proper vertical alignment
ctx.fillStyle = '#444';
ctx.font = `bold ${legendFontSize}px Arial`;
ctx.textAlign = 'left';
ctx.textBaseline = 'middle'; // Set baseline to middle for vertical centering
ctx.fillText('Cloud Coverage:', legendX, legendY);

// Draw legend color squares with more steps
const legendItems = [
    { label: '0%', color: 'rgb(220, 220, 220)' },
    { label: '25%', color: 'rgb(195, 195, 195)' },
    { label: '50%', color: 'rgb(170, 170, 170)' },
    { label: '75%', color: 'rgb(135, 135, 135)' },
    { label: '100%', color: 'rgb(100, 100, 100)' }
];

// Calculate legend item size based on container width
const legendSquareSize = Math.max(8, Math.min(10, containerWidth * 0.02));
const legendSpacing = Math.max(35, containerWidth * 0.06); // Reduced spacing for more items

// Add more margin between title and first legend item
let currentX = legendX + 100; // Increased from 80 to 100 for more space

legendItems.forEach(item => {
    // Draw the color square
    ctx.fillStyle = item.color;
    ctx.fillRect(currentX, legendY - legendSquareSize/2, legendSquareSize, legendSquareSize);
    
    // Draw text vertically centered with the square
    ctx.fillStyle = '#444';
    ctx.textAlign = 'left';
    // textBaseline is already set to 'middle' above
    ctx.fillText(item.label, currentX + legendSquareSize + 5, legendY);
    
    currentX += legendSpacing;
});

// Reset textBaseline to default after all legend text is drawn
ctx.textBaseline = 'alphabetic';




    }
    
    // Helper function for drawing rectangles with custom corner radii
    function roundRectCustom(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof radius === 'number') {
            radius = { tl: radius, tr: radius, br: radius, bl: radius };
        }
        
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        
        if (fill) ctx.fill();
        if (stroke) ctx.stroke();
    }
    
    // Initial render
    renderChart();
    
    // Add resize listener to make the chart responsive
    const resizeObserver = new ResizeObserver(() => {
        renderChart();
    });
    
    // Observe the container for size changes
    resizeObserver.observe(container);
    
    // Return data for testing/verification and the cleanup function
    return {
        hours: dayHours,
        data: cloudData,
        cleanup: () => {
            // Clean up the observer when no longer needed
            resizeObserver.disconnect();
        }
    };
}













function formatDaymeteo(dateStr) {
    return new Date(dateStr).toLocaleDateString(undefined, { weekday: 'long' });
}

function formatDay(dateStr) {
    return new Date(dateStr).toLocaleDateString(undefined, { weekday: 'short' });
}


function getWindDirection(degrees) {
    // Simpler version with 8 directions instead of 16
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
}




//VIEWS

function initializeViews() {
    const viewToggle = document.getElementById('viewToggle');
    viewToggle.addEventListener('change', (e) => {
        const view = e.target.checked ? 'list' : 'grid';
        switchView(view);
    });
}

function switchView(viewType) {
    currentView = viewType;
    currentPage = 1;

    // Toggle view containers visibility
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    
    if (gridView && listView) {
        gridView.classList.toggle('active', viewType === 'grid');
        listView.classList.toggle('active', viewType === 'list');
    }

    // Hide/Show load more button based on view
    const loadMoreButton = document.getElementById('loadMoreButton');
    if (loadMoreButton) {
        loadMoreButton.style.display = viewType === 'grid' ? 'block' : 'none';
    }

    // When switching to grid view, always sort by date descending
    if (viewType === 'grid') {
        currentSortColumn = 'date';
        isAscending = false;
        sortFlights('date', true); // true flag for forcing date sort
    } else {
        // Reset pagination when switching to list view
        currentPage = 1;
        displayListView(currentSortedFlights);
    }
}

function displayFlights(flights) {
    currentSortedFlights = flights;
    
    if (currentView === 'grid') {
        displayGridView(flights);
    } else {
        populateTable(flights);
    }
}


async function displayFlights(flights) {
    if (!flights || !flights.length) {
        return;
    }

    // Sort flights
    currentSortedFlights = [...flights].sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split('/');
        const [dayB, monthB, yearB] = b.date.split('/');
        const dateA = new Date(`20${yearA}-${monthA}-${dayA}`);
        const dateB = new Date(`20${yearB}-${monthB}-${dayB}`);
        return dateB - dateA;
    });
    
    if (currentView === 'grid') {
        // Clear the grid container before displaying
        const grid = document.getElementById('flightsGrid');
        grid.innerHTML = '';
        
        // Reset pagination and display
        currentPage = 1;
        await displayGridView(currentSortedFlights);
    } else {
        populateTable(currentSortedFlights);
    }
}

const mapCache = new Map(); 

let currentPage = 1;

// Function to determine flights per page based on screen width
function getFlightsPerPage() {
    return window.innerWidth >= 768 ? 6 : 5; // Initial load: 8 for desktop, 4 for mobile
}

function getLoadMoreCount() {
    return 5; 
}
function createLiveMiniMap(flight, mapDiv) {
    // console.log('🗺️ createLiveMiniMap START');
    // console.log('flight:', flight);
    // console.log('mapDiv:', mapDiv);
    // console.log(
    //     'mapDiv size:',
    //     mapDiv.offsetWidth,
    //     mapDiv.offsetHeight
    // );
    try {

        // Évite de créer deux cartes dans le même div
        if (mapDiv._miniMap) {
            return mapDiv._miniMap;
        }

        // ------------------------------------------
        // Récupération des coordonnées
        // ------------------------------------------

        let coordinates = flight.coordinates;

        // coordinates est actuellement une chaîne JSON
        if (typeof coordinates === 'string') {
            coordinates = JSON.parse(coordinates);
        }

        if (
            !coordinates ||
            !coordinates.coords ||
            coordinates.coords.length === 0
        ) {
            console.warn(
                'No valid coordinates:',
                flight
            );

            return null;
        }

        const coords = coordinates.coords;

        // ------------------------------------------
        // Création Leaflet
        // ------------------------------------------

        const map = L.map(mapDiv, {

            zoomControl: false,
            attributionControl: false,

            dragging: false,
            scrollWheelZoom: false,
            touchZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false,

            zoomAnimation: false,
            fadeAnimation: false,
            markerZoomAnimation: false,

            preferCanvas: true

        });

        mapDiv._miniMap = map;

        // ------------------------------------------
        // OpenStreetMap
        // ------------------------------------------

        L.tileLayer(
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 19,
                minZoom: 1,
                noWrap: true,
                attribution: ''
            }
        ).addTo(map);

        // ------------------------------------------
        // Trace du vol
        // ------------------------------------------

        if (coords.length > 1) {

            L.polyline(coords, {
                color: '#2196F3',
                weight: 1,
                opacity: 0.9,
                interactive: false
            }).addTo(map);

        }

        // ------------------------------------------
        // Icône départ
        // ------------------------------------------

        const takeoffIcon = L.divIcon({

            className: 'mini-map-marker',

            html: `
                <div style="
                    width:5px;
                    height:5px;
                    background:#4CAF50;
                    border:1px solid white;
                    border-radius:50%;
                    box-shadow:0 0 3px rgba(0,0,0,.5);
                "></div>
            `,

            iconSize: [4, 4],
            iconAnchor: [3.5, 3.5]

        });

        // ------------------------------------------
        // Icône arrivée
        // ------------------------------------------

        const landingIcon = L.divIcon({

            className: 'mini-map-marker',

            html: `
                <div style="
                    width:5px;
                    height:5px;
                    background:#F44336;
                    border:1px solid white;
                    border-radius:50%;
                    box-shadow:0 0 3px rgba(0,0,0,.5);
                "></div>
            `,

            iconSize: [4, 4],
            iconAnchor: [3.5, 3.5]

        });

        // ------------------------------------------
        // Départ
        // ------------------------------------------

        const firstPoint = coords[0];

        L.marker(firstPoint, {
            icon: takeoffIcon,
            interactive: false
        }).addTo(map);

        // ------------------------------------------
        // Arrivée
        // ------------------------------------------

        const lastPoint =
            coords[coords.length - 1];

        const samePoint =
            firstPoint[0] === lastPoint[0] &&
            firstPoint[1] === lastPoint[1];

        if (!samePoint) {

            L.marker(lastPoint, {
                icon: landingIcon,
                interactive: false
            }).addTo(map);

        }

        // ------------------------------------------
        // Zoom automatique
        // ------------------------------------------

        const bounds =
            L.latLngBounds(coords);

        if (bounds.isValid()) {

            map.fitBounds(
                bounds.pad(0.10),
                {
                    animate: false,
                    padding: [2, 2]
                }
            );

        }

        // ------------------------------------------
        // Correction taille
        // ------------------------------------------

        requestAnimationFrame(() => {

            map.invalidateSize({
                animate: false
            });

        });

        mapDiv.dataset.mapInitialized = 'true';

        return map;

    } catch (error) {

        console.error(
            'Error creating live mini map:',
            error
        );

        return null;
    }
}

async function displayGridView(flights) {

    if (!flights || !flights.length) {
        const grid = document.getElementById('flightsGrid');
        grid.innerHTML = '<div class="no-flights">No flights found. Add a flight to start filling this space</div>';
        return;
    }

    const grid = document.getElementById('flightsGrid');
    
    const startIndex = currentPage === 1 ? 0 : ((currentPage - 1) * getLoadMoreCount()) - getLoadMoreCount() + getFlightsPerPage();
    const endIndex = currentPage === 1 ? getFlightsPerPage() : startIndex + getLoadMoreCount();
    const visibleFlights = flights.slice(startIndex, endIndex);
    
    if (currentPage === 1) {
        grid.innerHTML = '';
    }
    
    const flightsHTML = visibleFlights.map((flight, index) => {
        const actualIndex = startIndex + index;

        const getFlightTypeText = (type) => {
            switch(type?.toLowerCase()) {
                case 'paragliding':
                    return '<span class="flight-type paragliding">Paragliding</span>';
                case 'delta':
                    return '<span class="flight-type delta">Delta</span>';
                case 'paramotor':
                    return '<span class="flight-type paramotor">Paramotor</span>';
                default:
                    return '';
            }
        };
        const getFlightType2Text = (type) => {
            switch(type?.toLowerCase()) {
                case 'tandempilot':
                    return '<span class="flight-type-tandem"><img src="assets/tandems.png" class="spacer-img2" alt="UV Index">Tandem Pilot</span>';
                case 'tandempassenger':
                    return '<span class="flight-type-tandem"><img src="assets/tandems.png" class="spacer-img2" alt="UV Index">Tandem Passenger</span>';
                default:
                    return '';
            }
        };

        return `
        <div class="flight-card-grid" onclick="showFlightDetails(${actualIndex})">
            
                <div class="card-content">
                   



<div class="flight-card-details">



                    <div class="header-map">
                        ${flight.coordinates ? `
                            <div
                                class="card-maps"
                                id="miniMap-${actualIndex}"
                                data-flight-index="${actualIndex}"
                            ></div>
                        ` : ''}
                    </div>
                        
                        
                        <div class="header-full">
                      


                        <div class="header-1">
                        ${flight.date || 'No date'}
                        
                        ${flight.timeOfDay ? `<div>${formatTimeOfDay(flight.timeOfDay)}</div>` : ''}
                        
                        ${flight.country ? `
                            <img src="./assets/flags/${flight.country.toLowerCase()}.png" 
                                alt="${flight.country}" 
                                title="${flight.country}"
                                class="flag-image">
                        ` : ''}

                        </div>
                       

                        <div class="detail-labels-top">
                        <div class="flight-card-site">${flight.site || 'No site'}</div>
                        <div class="flight-card-takeoff-landing">
                        <div class="flight-card-takeoff-landing-1">
                        <div class="flight-card-takeoff"><img src="assets/up.png" class="spacer-img3" alt="UV Index">${flight.takeoff || 'No site'} <span class='times-card'> ${flight.timeOfDay ? `<div>${formatTimeOfDay(flight.timeOfDay)}</div>` : ''} </span></div>
                       </div>
                        <div class="flight-card-takeoff-landing-img"><img src="assets/line.png" class="spacer-img" alt="UV Index"></div>

                       <div class="flight-card-takeoff-landing-1">
                        <div class="flight-card-landing"><img src="assets/down.png" class="spacer-img3" alt="UV Index">${flight.landing || 'No site'} <span class='times-card'> ${calculateLandingTime(flight.timeOfDay, flight.time)} </span></div>
                        </div>
                        
                        </div>
                        </div>

                        

                       <div class="detail-labels">
                            
                       
                            <div class="detail-label">
                            <div class="amount-card">${formatDuration(flight.time || 0)}</div>
                            Duration
                            </div>
                            
                            
                            ${flight.flight_distance ? `
                            <div class="detail-label">
                            <div class="amount-card">${parseFloat(flight.flight_distance).toFixed(1)}km</div>
                            Distance
                            </div>
                            ` : ''}
                            
                            
                            ${flight.max_altitude ? `
                                <div class="detail-label">
                                <div class="amount-card">${flight.max_altitude}m</div>
                                Max Alt
                                </div>
                            ` : ''}



                         </div>
                         
                        </div>


</div>
                    

                            ${flight.comments ? `
                                <div class="comments-card">${flight.comments}</div>
                            ` : ''}

<div class="stress-card">

<div class="stress-card-left">
<div class="flight-card-type">${getFlightTypeText(flight.type)}</div>
<div class="flight-card-type">${getFlightType2Text(flight.type2)}</div>
${flight.club ? `
    <div class="flight-card-type-club"><span class="flight-card-club-type"><img src="assets/clubs.png" class="spacer-img2" alt="UV Index"></span>${flight.club}</div>
` : ''}
${flight.school ? `
    <div class="flight-card-type-club"><span class="flight-card-club-type"><img src="assets/school.png" class="spacer-img2" alt="UV Index"></span>${flight.school}</div>
` : ''}
</div>

<div class="stress-card-right">
<div class="flight-card-type">${getStarsHTML(flight.rating)}</div>
</div>



</div>











                    <div class="flight-card-details">
                     
                        
                        
          
                    

          

                    
                   
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    grid.insertAdjacentHTML('beforeend', flightsHTML);
// --------------------------------------------------
// Création des cartes Leaflet live
// --------------------------------------------------

visibleFlights.forEach((flight, index) => {

    if (!flight.coordinates) {
        return;
    }

    const actualIndex =
        startIndex + index;

    const mapDiv =
        document.getElementById(
            `miniMap-${actualIndex}`
        );

    if (!mapDiv) {
        return;
    }

    createLiveMiniMap(
        flight,
        mapDiv
    );

});

    // Handle Load More button
    const existingButton = document.getElementById('loadMoreButton');
    if (existingButton) {
        existingButton.remove();
    }
    
    if (endIndex < flights.length) {
        const loadMoreButton = document.createElement('button');
        loadMoreButton.id = 'loadMoreButton';
        loadMoreButton.className = 'load-more-button';
        loadMoreButton.textContent = 'Load More Flights';
        loadMoreButton.onclick = async () => {
            currentPage++;
            await displayGridView(flights);
            
            // After adding new flights, observe the new map divs
            const allMapDivs = document.querySelectorAll('.card-maps');
            const startIdx = (currentPage === 1) ? 0 : ((currentPage - 1) * getLoadMoreCount()) - getLoadMoreCount() + getFlightsPerPage();
            
            // Only process the newly added map divs
            allMapDivs.forEach((mapDiv, idx) => {
                if (idx >= startIdx) {  // Only process new elements
                    const hasImage = mapDiv.dataset.hasImage === 'true';
                    const mapIndex = parseInt(mapDiv.id.split('-')[1]);
                    const flight = flights[mapIndex];
                    
                    // if (!hasImage || !flight.minimapImage) {
                    //     window.currentMapObserver.observe(mapDiv);
                    // }
                    // Remove the background-image setting since we're using <img> tags
                }
            });
        };
        grid.parentElement.appendChild(loadMoreButton);
    }

    if (window.currentMapObserver) {
        window.currentMapObserver.disconnect();
    }
    
    
    // Update the initial setup
    // document.querySelectorAll('.card-map').forEach(mapDiv => {
    //     const hasImage = mapDiv.dataset.hasImage === 'true';
    //     const mapIndex = parseInt(mapDiv.id.split('-')[1]);
    //     const flight = flights[mapIndex];
        

    
    //     if (!hasImage) {
    //         window.currentMapObserver.observe(mapDiv);
    //     }
    //     // The image is already added in the HTML template if it exists
    // });
}

// Add resize listener to handle screen size changes
let previousWidth = window.innerWidth;
window.addEventListener('resize', async () => {
    const currentWidth = window.innerWidth;
    const wasDesktop = previousWidth >= 768;
    const isNowDesktop = currentWidth >= 768;
    
    if (wasDesktop !== isNowDesktop && currentView === 'grid') {
        currentPage = 1;
        const grid = document.getElementById('flightsGrid');
        grid.innerHTML = '';
        if (currentSortedFlights && currentSortedFlights.length > 0) {
            await displayGridView(currentSortedFlights);
        }
    }
    
    previousWidth = currentWidth;
});

//MYSITES
async function getUniqueSites() {
    try {
        const flights = await dbOperations.getAllFlights();
        const sitesMap = new Map();
        const favoriteSites = await dbOperations.getData(STORES.favoriteSites, 'sites') || [];

        for (const flight of flights) {
            if (!sitesMap.has(flight.site)) {
                let coordinates = null;
                
                // First try to get coordinates from the flight's coordinates
                if (flight.coordinates) {
                    try {
                        const coords = typeof flight.coordinates === 'string' 
                            ? JSON.parse(flight.coordinates) 
                            : flight.coordinates;
                            
                        if (coords.coords && coords.coords.length > 0) {
                            coordinates = coords.coords[0];
                        }
                    } catch (error) {
                        console.warn('Error parsing flight coordinates:', error);
                    }
                }


                sitesMap.set(flight.site, {
                    name: flight.site,
                    country: flight.country,
                    flights: [],
                    coordinates: coordinates,
                    isFavorite: favoriteSites.includes(flight.site) // Add favorite status
                });
            }
            sitesMap.get(flight.site).flights.push(flight);
        }

        return Array.from(sitesMap.values());
    } catch (error) {
        console.error('Error getting unique sites:', error);
        return [];
    }
}

async function getUniqueFavoriteSites() {
    try {
        const allSites = await getUniqueSites();
        return allSites.filter(site => site.isFavorite);
    } catch (error) {
        console.error('Error getting favorite sites:', error);
        return [];
    }
}




// function createSiteCard(site) {
//     const card = document.createElement('div');
//     card.className = 'site-card';
//     const totalFlights = site.flights?.length || 0;
//     const maxGrade = Math.max(...(site.flights?.map(f => f.grade || 0) || [0]));
//     const uniqueTakeoffs = new Set(site.flights?.map(f => f.takeoff) || []).size;
//     const uniqueLandings = new Set(site.flights?.map(f => f.landing) || []).size;
//     const longestFlight = Math.max(...(site.flights?.map(f => f.time || 0) || [0]));
    

//     const countrySection = site.country 
//         ? `<span class="site-country">
//              <img 
//                 src="./assets/flags/${site.country.toLowerCase()}.png"
//                 width="40" 
//                 height="30" 
//                 alt="${site.country}"
//                 class="country-flag-mysite"
//              >
//            </span>`
//         : '';

//         let initialWeatherMessage = 'Weather unavailable (offline)';
//         if (navigator.onLine) {
//             if (site.coordinates && 
//                 Array.isArray(site.coordinates) && 
//                 site.coordinates.length === 2) {
//                 const [lat, lon] = site.coordinates;
//                 const cacheKey = `${lat},${lon}`;
//                 const cachedData = weatherCache.get(cacheKey);
                
//                 if (cachedData && cachedData.data?.current) {
//                     const current = cachedData.data.current;
//                     initialWeatherMessage = `
//                         <div class="current-weather">
//                             <div class="weather-main">
//                                 <div class="temp-container">
//                                     <img src="assets/weather/${getWeatherIcon(current.weathercode)}.png" alt="Weather">
//                                     <div class="temp-container-temp">
//                                         <div class="temp">${Math.round(current.temperature_2m)}°C</div>
//                                         <div class="feels-like-card">Feels: ${Math.round(current.apparent_temperature)}°C</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     `;
//                 } else {
//                     initialWeatherMessage = 'Loading weather...';
//                 }
//             } else {
//                 initialWeatherMessage = 'No weather data available';
//             }
//         }


//         card.innerHTML = `
//         <div class="site-header">
//             <span class="site-name-mysite">${site.name || 'Unnamed Site'}</span>
//             ${countrySection}
//         </div>
//         <div class="site-stats-box">
//         <div class="site-stats">
//         <div><img src="assets/fly.png" class"weather-icon-card">${totalFlights} flights</div>
//         </div>
//         <div class="site-stats">
//         <div><img src="assets/up.png" class"weather-icon-card">${uniqueTakeoffs} diferent takeoff${uniqueTakeoffs !== 1 ? 's' : ''}</div>
//         </div>
//         <div class="site-stats">
//         <div><img src="assets/down.png" class"weather-icon-card">${uniqueLandings} diferent landing${uniqueLandings !== 1 ? 's' : ''}</div>
//         </div>
//         <div class="site-stats">
//         <div><img src="assets/distance.png" class"weather-icon-card">Longest flight: ${formatDuration(longestFlight)}</div>
//         </div>
//         </div>
//             <button class="remove-favorite-button" title="Remove from favorites">
//                 <img src="assets/check1.png" alt="Remove from favorites" class="favorite-icon">
//                 <span class="favorite-text">Remove SITE from Favorites</span>
//             </button>

// <div class="spacer-dashed"></div>

//         <div class="weather-info" id="weather-${site.name.replace(/\s+/g, '-')}">
//             <div class="weather-box-mini">
//                 <div class="weather-item">${initialWeatherMessage}</div>
//                 <button type="button" class="forecast-toggle" ${!navigator.onLine ? 'disabled' : ''}>
//                     <span class="toggle-icon">
//                         <img src="assets/weather/forecast.png" alt="forecast" class="forecast-icon-button">
//                     </span>
//                     <span class="toggle-text">View Forecast</span>
//                 </button>
//             </div>
//         </div>
//     `;
// // Add remove favorite handler
// const removeFavoriteBtn = card.querySelector('.remove-favorite-button');
// removeFavoriteBtn.addEventListener('click', async (e) => {
//     e.stopPropagation(); // Prevent event bubbling
//     try {
//         await dbOperations.toggleFavoriteSite(site.name);
        
//         // Animate card removal
//         card.style.transition = 'all 0.3s ease-out';
//         card.style.opacity = '0';
//         card.style.transform = 'scale(0.9)';
        
//         setTimeout(() => {
//             card.remove();
//             showSuccessMessage('Site removed from favorites');

//         }, 300);
        
//     } catch (error) {
//         console.error('Error removing site from favorites:', error);
//         showCustomAlert('Error removing site from favorites. Please try again.');
//     }
// });
//     // Get the shared modal elements
//     const modal = document.getElementById('weather-modal');
//     const modalTitle = document.getElementById('modal-title-weather');
//     const modalClose = modal.querySelector('.modal-close');
//     const forecastToggle = card.querySelector('.forecast-toggle');
    
//     // Modal open
//     forecastToggle.addEventListener('click', () => {
//         // Check online status before proceeding
//         if (!navigator.onLine) {
//             showCustomAlert('Weather forecast unavailable offline');
//             return;
//         }
    
//         if (!site.coordinates) {
//             showCustomAlert('No coordinates available for this site');
//             return;
//         }
    
//         modalTitle.textContent = `${site.name}`;
//         displayRandomQuote();
//         const [lat, lon] = site.coordinates;
//         updateWeather(site.name, lat, lon, modal);
//         modal.classList.remove('hidden');
//         document.body.style.overflow = 'hidden';
//     });
    
// // Modal close button
// modalClose.addEventListener('click', (e) => {
//     e.preventDefault();
//     modal.classList.add('hidden');
//     document.body.style.overflow = '';
// });

// // Modal background click
// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.add('hidden');
//         document.body.style.overflow = '';
//     }
// });

// // Escape key to close modal
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         modal.classList.add('hidden');
//         document.body.style.overflow = '';
//     }
// });

// // Add online/offline event listeners to update button state
// window.addEventListener('online', async () => {
//     const weatherDiv = card.querySelector('.weather-item');
//     const forecastBtn = card.querySelector('.forecast-toggle');
    
//     if (forecastBtn) {
//         forecastBtn.disabled = false;
//     }
    
//     if (weatherDiv && site.coordinates) {
//         const [lat, lon] = site.coordinates;
//         const cacheKey = `${lat},${lon}`;
//         const cachedData = weatherCache.get(cacheKey);
        
//         if (cachedData && (Date.now() - cachedData.timestamp < WEATHER_CACHE_DURATION)) {
//             // Use cached data if available and not expired
//             await updateWeather(site.name, lat, lon, modal);
//         } else {
//             weatherDiv.textContent = 'Click forecast to load weather';
//         }
//     }
// });

// window.addEventListener('offline', () => {
//     const weatherDiv = card.querySelector('.weather-item');
//     const forecastBtn = card.querySelector('.forecast-toggle');
//     if (weatherDiv) weatherDiv.textContent = 'Weather unavailable (offline)';
//     if (forecastBtn) forecastBtn.disabled = true;
// });



//     return card;
// }



// Add these event listeners somewhere in your initialization code
// window.addEventListener('online', () => {
//     // Refresh weather for all sites when coming back online
//     document.querySelectorAll('.site-card').forEach(card => {
//         const weatherDiv = card.querySelector('.weather-item');
//         if (weatherDiv) {
//             weatherDiv.textContent = 'Loading weather...';
//             // Extract site name and try to update weather
//             const siteNameMatch = weatherDiv.id.match(/weather-(.*)/);
//             if (siteNameMatch) {
//                 const siteName = siteNameMatch[1].replace(/-/g, ' ');
//                 // We need to get the site data from your existing sites data
//                 const site = currentSites.find(s => s.name === siteName);
//                 if (site?.coordinates) {
//                     updateWeather(siteName, site.coordinates[0], site.coordinates[1]);
//                 }
//             }
//         }
//     });
// });

// window.addEventListener('offline', () => {
//     // Update all weather displays to show offline status
//     document.querySelectorAll('.weather-item').forEach(div => {
//         div.textContent = 'Weather unavailable (offline)';
//     });
// });



// function updateSiteCard(site, card) {
//     // Recalculate stats
//     const totalFlights = site.flights?.length || 0;
//     const maxGrade = Math.max(...(site.flights?.map(f => f.grade || 0) || [0]));
//     const uniqueTakeoffs = new Set(site.flights?.map(f => f.takeoff) || []).size;
//     const uniqueLandings = new Set(site.flights?.map(f => f.landing) || []).size;
//     const longestFlight = Math.max(...(site.flights?.map(f => f.time || 0) || [0]));

//     // Update stats in the card
//     const statsBox = card.querySelector('.site-stats-box');
//     if (statsBox) {
//         statsBox.innerHTML = `
//             <div class="site-stats">
//                 <div><img src="assets/fly.png" class="weather-icon-card">${totalFlights} flights</div>
//             </div>
//             <div class="site-stats">
//                 <div><img src="assets/up.png" class="weather-icon-card">${uniqueTakeoffs} diferent takeoff${uniqueTakeoffs !== 1 ? 's' : ''}</div>
//             </div>
//             <div class="site-stats">
//                 <div><img src="assets/down.png" class="weather-icon-card">${uniqueLandings} diferent landing${uniqueLandings !== 1 ? 's' : ''}</div>
//             </div>
//             <div class="site-stats">
//                 <div><img src="assets/distance.png" class="weather-icon-card">Longest flight: ${formatDuration(longestFlight)}</div>
//             </div>
//         `;
//     }
// }

// // Call this function whenever you add/remove flights
// function updateAllSiteCards() {
//     currentSites.forEach(site => {
//         const card = document.querySelector(`#site-card-${site.name.replace(/\s+/g, '-')}`);
//         if (card) {
//             updateSiteCard(site, card);
//         }
//     });
// }






//CALENDARS
function formatDateForInput(dateString) {
    try {
        // Check if the date is in DD/MM/YY format
        if (dateString.includes('/')) {
            const [day, month, year] = dateString.split('/');
            // Ensure padding with leading zeros
            const paddedDay = day.padStart(2, '0');
            const paddedMonth = month.padStart(2, '0');
            return `20${year}-${paddedMonth}-${paddedDay}`;
        }
        
        // If it's already in YYYY-MM-DD format, return as is
        if (dateString.includes('-')) {
            return dateString;
        }

        // If neither format matches, log warning and return empty
        console.warn('Unrecognized date format:', dateString);
        return '';
    } catch (error) {
        console.error('Error formatting date:', error);
        return '';
    }
}


function initializeDatePickers() {
    const birthDateInput = document.getElementById('profileBirthDateInput');
    if (birthDateInput) {
        flatpickr(birthDateInput, {
            dateFormat: "Y-m-d",
            maxDate: "2010-12-31",
            minDate: "1940-01-01",
            defaultDate: "1986-01-01",
            yearSelector: true,
            onChange: function(selectedDates, dateStr) {
                const saveButton = document.getElementById('saveChangesButton');
                if (saveButton) {
                    saveButton.style.display = 'block';
                }
            }
        });
    }

    const flightDateInput = document.getElementById('flightDate');
    if (flightDateInput) {
        flatpickr(flightDateInput, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01",
            defaultDate: new Date()
        });
    }

    const flightTimeInput = document.getElementById('flightTimeOfDay');
    if (flightTimeInput) {
        flatpickr(flightTimeInput, {
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
            dateFormat: "H:i",
            defaultHour: 10,
            defaultMinute: 0
        });
    }

    const gearDateInputs = document.querySelectorAll('.gliderDateBought, .gliderDatelastcheck, .harnessDateBought, .harnessDatelastcheck, .reserveDateBought, .reserveDatelastcheck');
    gearDateInputs.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });

    const qualificationDateInputs = document.querySelectorAll('.qualificationDate');
    qualificationDateInputs.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
}



//CHARTS

function createFlightDistanceDistribution(flights) {
    // Define distance ranges in kilometers

    const flightsWithFullTrack = flights.filter(flight => {
        if (!flight.coordinates) return false;
        
        try {
            const trackData = JSON.parse(flight.coordinates);
            // Check if it has more than 2 coordinate points
            return trackData.coords && trackData.coords.length > 2;
        } catch (e) {
            return false;
        }
    });


    const distanceRanges = [
        { min: 0, max: 1, label: '0-1km' },
        { min: 1, max: 3, label: '1-3km' },
        { min: 3, max: 5, label: '3-5km' },
        { min: 5, max: 10, label: '5-10km' },
        { min: 10, max: 20, label: '10-20km' },
        { min: 20, max: Infinity, label: '20km+' }
    ];

    // Define a nice color palette (different from time distribution)
    const colors = [
        'rgba(255, 99, 132, 0.7)',   // Pink
        'rgba(255, 159, 64, 0.7)',   // Orange
        'rgba(255, 205, 86, 0.7)',   // Yellow
        'rgba(75, 192, 192, 0.7)',   // Teal
        'rgba(54, 162, 235, 0.7)',   // Blue
        'rgba(153, 102, 255, 0.7)'   // Purple
    ];

    const borderColors = colors.map(color => color.replace('0.7', '1'));



    let distribution = distanceRanges.map(range => {
        const count = flightsWithFullTrack.filter(flight => {
            const distance = flight.flight_distance || 0;
            return distance > range.min && distance <= range.max;
        }).length;
        
        const percentage = (count / flightsWithFullTrack.length * 100).toFixed(1);
        
        return {
            range: range.label,
            count: count,
            percentage: percentage
        };
    }).filter(d => d.count > 0);


    // Create the chart
    const ctx = document.getElementById('flightDistanceDistribution').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: distribution.map(d => d.range),
            datasets: [{
                label: 'Flight Distance Distribution',
                data: distribution.map(d => d.percentage),
                backgroundColor: colors.slice(0, distribution.length),
                borderColor: borderColors.slice(0, distribution.length),
                borderWidth: 1,
                borderRadius: 8,
                borderSkipped: false,
                barPercentage: 1.5,
                categoryPercentage: 0.2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: !isMobileDevice(),
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}% of flights (${distribution[context.dataIndex].count} flights)`;
                        }
                    }
                }
            },
            layout: {

                padding: {
            
                    top: 25,
            
                    right: 10,
            
                    bottom: 10,
            
                    left: 5
            
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: true,
                        drawBorder: false,
                        color: 'rgba(200, 200, 200, 0.2)'
                    }
                },
                x: {
                   
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createFlightTimeDistribution(flights) {
    // Define time ranges in minutes
    const timeRanges = [
        { min: 0, max: 4, label: '0-4m' },
        { min: 4, max: 15, label: '4-15m' },
        { min: 15, max: 30, label: '15-30m' },
        { min: 30, max: 60, label: '30-60m' },
        { min: 60, max: 120, label: '1-2h' },
        { min: 120, max: Infinity, label: '2h+' }
    ];

    // Define a nice color palette
    const colors = [
        'rgba(54, 162, 235, 0.7)',   // Blue
        'rgba(75, 192, 192, 0.7)',   // Teal
        'rgba(153, 102, 255, 0.7)',  // Purple
        'rgba(255, 159, 64, 0.7)',   // Orange
        'rgba(255, 99, 132, 0.7)',   // Pink
        'rgba(65, 184, 131, 0.7)'    // Green
    ];

    const borderColors = colors.map(color => color.replace('0.7', '1'));

    // Convert and filter distribution data
    let distribution = timeRanges.map(range => {
        const count = flights.filter(flight => {
            const timeInMinutes = flight.time || 0;
            return timeInMinutes > range.min && timeInMinutes <= range.max;
        }).length;
        
        const percentage = (count / flights.length * 100).toFixed(1);
        
        return {
            range: range.label,
            count: count,
            percentage: percentage
        };
    }).filter(d => d.count > 0);

    // Create the chart
    const ctx = document.getElementById('flightTimeDistribution').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: distribution.map(d => d.range),
            datasets: [{
                label: 'Flight Time Distribution',
                data: distribution.map(d => d.percentage),
                backgroundColor: colors.slice(0, distribution.length),
                borderColor: borderColors.slice(0, distribution.length),
                borderWidth: 1,
                borderRadius: 8,
                borderSkipped: false,
                barPercentage: 1.5,  // Makes bars thinner
                categoryPercentage: 0.2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: !isMobileDevice(),
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}% of flights (${distribution[context.dataIndex].count} flights)`;
                        }
                    }
                }
            },
            layout: {

                padding: {
            
                    top: 25,
            
                    right: 10,
            
                    bottom: 10,
            
                    left: 5
            
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: true,
                        drawBorder: false,
                        color: 'rgba(200, 200, 200, 0.2)'
                    }
                },
                x: {
                  
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}


function createYearChart(flightData) {


    const canvas = document.getElementById('flightsPerYear');

    if (!canvas) {
        return;
    }

    if (typeof Chart === 'undefined') {
        return;
    }

    // -----------------------------------------
    // Détruire l'ancien graphique
    // -----------------------------------------

    if (yearChart) {
        yearChart.destroy();
        yearChart = null;
    }


    // -----------------------------------------
    // Statistiques
    // -----------------------------------------

    const yearStats = {};

    flightData.forEach(flight => {

        if (!flight.date) return;

        const parts = flight.date.split('/');

        if (parts.length !== 3) return;

        const yearValue = parseInt(parts[2], 10);

        if (isNaN(yearValue)) return;

        const fullYear =
            yearValue < 100
                ? 2000 + yearValue
                : yearValue;


        if (!yearStats[fullYear]) {

            yearStats[fullYear] = {
                flights: 0,
                minutes: 0
            };

        }


        yearStats[fullYear].flights++;

        yearStats[fullYear].minutes +=
            Number(flight.time) || 0;

    });


    const sortedYears = Object.keys(yearStats)
    .map(Number)
    .sort((a, b) => a - b)
    .slice(-6);
        



    if (!sortedYears.length) {
        console.warn('⚠️ Aucune année');
        return;
    }

    function formatDuration(minutes) {

        minutes = Number(minutes) || 0;

        const h = Math.floor(minutes / 60);
        const m = minutes % 60;

        if (h === 0) return `${m} min`;
        if (m === 0) return `${h} h`;

        return `${h}h${m}min`;
    }

    const values = sortedYears.map(year => {

        const flights = yearStats[year].flights;
    
        if (flights === 0) return 0;
        if (flights === 1) return 1.5;
        if (flights === 2) return 2.2;
    
        return flights;
    
    });


    // -----------------------------------------
    // Couleurs
    // -----------------------------------------

    const colors = [
        'rgba(255, 123, 152, 0.9)',
        'rgba(121, 191, 238, 0.9)',
        'rgba(238, 204, 117, 0.9)',
        'rgba(119, 216, 216, 0.9)',
        'rgba(162, 131, 223, 0.9)',
        'rgba(236, 170, 103, 0.9)'
    ];


    // -----------------------------------------
    // Plugin texte
    // -----------------------------------------

    const yearInfoPlugin = {

        id: 'yearInfoPlugin',
    
        afterDatasetsDraw(chart) {
    
            const ctx = chart.ctx;
            const meta = chart.getDatasetMeta(0);
            const xScale = chart.scales.x;
    
            ctx.save();
    
            sortedYears.forEach((year, index) => {
    
                const bar = meta.data[index];
    
                if (!bar) return;
    
                const flights =
                    yearStats[year].flights;
    
                const duration =
                    formatDuration(
                        yearStats[year].minutes
                    );
    
    
                // =================================
                // NOMBRE DE VOLS DANS LA BARRE
                // =================================
    
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
    
                ctx.fillStyle = '#ffffff';
    
                ctx.font =
                    'bold 12px Arial';
    
    
                    ctx.fillText(
                        `${flights}`,
                        bar.x,
                        bar.y + Math.min(10, bar.height / 2)
                    );
    
    
                // =================================
                // DURÉE SOUS L'ANNÉE
                // =================================
    
                const x =
                    xScale.getPixelForTick(index);
    
                ctx.fillStyle =
                    'rgba(143, 150, 163, 0.95)';
    
                ctx.font =
                    '9px Arial';
    
                ctx.textBaseline = 'top';
    
                ctx.fillText(
                    duration,
                    x,
                    xScale.bottom + 2
                );
    
            });
    
            ctx.restore();
        }
    };


    // -----------------------------------------
    // Chart
    // -----------------------------------------

    yearChart = new Chart(canvas, {

        type: 'bar',

        data: {

            labels: sortedYears,

            datasets: [{

                data: values,
                backgroundColor:
                    sortedYears.map(
                        (_, i) =>
                            colors[i % colors.length]
                    ),

                borderWidth: 0,

                borderRadius: 8,

                borderSkipped: false,

                barPercentage: 0.65,

                categoryPercentage: 0.75

            }]

        },


        plugins: [
            yearInfoPlugin
        ],


        options: {

            responsive: true,

            maintainAspectRatio: false,


            animation: {

                duration: 700

            },


            layout: {

                padding: {
            
                    top: 5,
            
                    right: 10,
            
                    bottom: 30,
            
                    left: 5
            
                }
            },


            scales: {

                x: {
            
                    grid: {
            
                        display: false,
            
                        drawBorder: false,
            
                        drawOnChartArea: false,
            
                        drawTicks: false
            
                    },
            
                    border: {
            
                        display: false,
            
                        width: 0
            
                    },
            
                    ticks: {
            
                        color: '#8f96a3',
            
                        font: {
            
                            size: 10,
            
                            weight: '800'
            
                        }
            
                    }
            
                },
            
            
                y: {
            
                    beginAtZero: true,
            
                    suggestedMax: Math.max(...values) + 1,
            
                    ticks: {
            
                        display: false
            
                    },
            
                    grid: {
            
                        display: false,
            
                        drawBorder: false,
            
                        drawOnChartArea: false,
            
                        drawTicks: false
            
                    },
            
                    border: {
            
                        display: false,
            
                        width: 0
            
                    }
            
                }
            
            },


            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    enabled: false

                }

            }

        }

    });



}



function createMonthChart(flightData) {


    const canvas = document.getElementById('flightsPerMonth');

    if (!canvas) {
        console.error('❌ Canvas #flightsPerMonth introuvable');
        return;
    }

    if (typeof Chart === 'undefined') {
        console.error('❌ Chart.js introuvable');
        return;
    }


    // -----------------------------------------
    // Détruire l'ancien graphique
    // -----------------------------------------

    if (monthChart) {
        monthChart.destroy();
        monthChart = null;
    }


    // -----------------------------------------
    // Noms des mois
    // -----------------------------------------

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ];


    // -----------------------------------------
    // 6 derniers mois
    // -----------------------------------------

    const now = new Date();

    const last6Months = [];

    for (let i = 5; i >= 0; i--) {

        const monthDate = new Date(
            now.getFullYear(),
            now.getMonth() - i,
            1
        );

        const year =
            monthDate.getFullYear();

        const month =
            monthDate.getMonth() + 1;

        last6Months.push({

            year: year,

            month: month,

            key:
                `${year}-${String(month).padStart(2, '0')}`

        });

    }


    // -----------------------------------------
    // Statistiques
    // -----------------------------------------

    const monthStats = {};

    last6Months.forEach(month => {

        monthStats[month.key] = {

            flights: 0,

            minutes: 0

        };

    });


    flightData.forEach(flight => {

        if (!flight.date) return;

        const parts =
            flight.date.split('/');

        if (parts.length !== 3) return;

        const month =
            parseInt(parts[1], 10);

        const yearValue =
            parseInt(parts[2], 10);

        if (
            isNaN(month) ||
            isNaN(yearValue)
        ) {
            return;
        }


        const year =
            yearValue < 100
                ? 2000 + yearValue
                : yearValue;


        const key =
            `${year}-${String(month).padStart(2, '0')}`;


        if (!monthStats[key]) return;


        monthStats[key].flights++;

        monthStats[key].minutes +=
            Number(flight.time) || 0;

    });


    // -----------------------------------------
    // Format durée
    // -----------------------------------------

    function formatDuration(minutes) {

        minutes =
            Number(minutes) || 0;

        const h =
            Math.floor(minutes / 60);

        const m =
            minutes % 60;

        if (h === 0)
            return `${m} min`;

        if (m === 0)
            return `${h} h`;

        return `${h}h${m}min`;
    }


    // -----------------------------------------
    // Valeurs
    // -----------------------------------------

    // -----------------------------------------
// Valeurs
// -----------------------------------------

const realValues = last6Months.map(
    month => monthStats[month.key].flights
);


// Hauteur visuelle des barres
// 0 vol = mini barre rouge
const values = realValues.map(flights => {

    if (flights === 0) {
        return 0.25; // mini barre visible
    }

    return flights;
});


    // -----------------------------------------
    // Labels
    // -----------------------------------------

    const labels =
        last6Months.map(
            month =>
                monthNames[
                    month.month - 1
                ]
        );


    // -----------------------------------------
    // Couleur
    // -----------------------------------------

    const barColors = realValues.map(flights => {

        if (flights === 0) {
            return 'rgba(255, 80, 80, 0.75)';
        }
    
        return 'rgba(145, 240, 158, 0.85)';
    });


    // -----------------------------------------
    // Plugin texte
    // -----------------------------------------

    const monthInfoPlugin = {

        id: 'monthInfoPlugin',

        afterDatasetsDraw(chart) {

            const ctx = chart.ctx;

            const meta =
                chart.getDatasetMeta(0);

            const xScale =
                chart.scales.x;


            ctx.save();


            last6Months.forEach(
                (month, index) => {

                    const bar =
                        meta.data[index];

                    if (!bar) return;


                    const flights =
                        monthStats[
                            month.key
                        ].flights;


                    const duration =
                        formatDuration(
                            monthStats[
                                month.key
                            ].minutes
                        );


                    // =================================
                    // NOMBRE DE VOLS
                    // =================================

                    if (flights > 0) {

                        ctx.textAlign =
                            'center';

                        ctx.textBaseline =
                            'middle';

                        ctx.fillStyle =
                            '#ffffff';

                        ctx.font =
                            'bold 12px Arial';


                        ctx.fillText(
                            `${flights}`,
                            bar.x,
                            bar.y + 12
                        );

                    }


                    // =================================
                    // MOIS
                    // =================================

                    const x =
                        xScale.getPixelForTick(
                            index
                        );


                    ctx.textAlign =
                        'center';

                    ctx.textBaseline =
                        'top';

                    ctx.fillStyle =
                        '#8f96a3';

                    ctx.font =
                        'bold 10px Arial';


                    ctx.fillText(
                        labels[index],
                        x,
                        xScale.bottom + 2
                    );


                    // =================================
                    // DURÉE SOUS LE MOIS
                    // =================================

                   // =================================
                    // DURÉE SOUS LE MOIS
                    // =================================

                    const xx = xScale.getPixelForTick(index);

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'top';

                    ctx.fillStyle = 'rgba(143, 150, 163, 0.95)';
                    ctx.font = '9px Arial';

                    ctx.fillText(
                        duration,
                        xx,
                        xScale.bottom + 16
                    );

                }
            );


            ctx.restore();

        }

    };


    // -----------------------------------------
    // Chart
    // -----------------------------------------

    monthChart = new Chart(canvas, {

        type: 'bar',

        data: {

            labels: labels,

            datasets: [{

                data: values,

                backgroundColor:
                    barColors,

                borderWidth: 0,

                borderRadius: 8,

                borderSkipped: false,

                barPercentage: 0.65,

                categoryPercentage: 0.75

            }]

        },


        plugins: [
            monthInfoPlugin
        ],


        options: {

            responsive: true,

            maintainAspectRatio: false,


            animation: {

                duration: 700

            },


            layout: {

                padding: {

                    top: 5,

                    right: 10,

                    bottom: 40,

                    left: 5

                }

            },


            scales: {

                x: {

                    grid: {

                        display: false,

                        drawBorder: false,

                        drawOnChartArea: false,

                        drawTicks: false

                    },

                    border: {

                        display: false,

                        width: 0

                    },

                    ticks: {

                        display: false

                    }

                },


                y: {

                    beginAtZero: true,

                    suggestedMax:
                        Math.max(...values) + 1,

                    ticks: {

                        display: false

                    },

                    grid: {

                        display: false,

                        drawBorder: false,

                        drawOnChartArea: false,

                        drawTicks: false

                    },

                    border: {

                        display: false,

                        width: 0

                    }

                }

            },


            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    enabled: false

                }

            }

        }

    });


}


function createCharts(flightData) {
    // Get the canvas elements
    const yearCanvas = document.getElementById('flightsPerYear');
    const monthCanvas = document.getElementById('flightsPerMonth');
    const timeDistCanvas = document.getElementById('flightTimeDistribution');
    const distanceDistCanvas = document.getElementById('flightDistanceDistribution');
    
    // Destroy existing charts
    const existingYearChart = Chart.getChart(yearCanvas);
    if (existingYearChart) existingYearChart.destroy();
    
    const existingMonthChart = Chart.getChart(monthCanvas);
    if (existingMonthChart) existingMonthChart.destroy();
    
    const existingTimeDistChart = Chart.getChart(timeDistCanvas);
    if (existingTimeDistChart) existingTimeDistChart.destroy();
    
    const existingDistanceDistChart = Chart.getChart(distanceDistCanvas);
    if (existingDistanceDistChart) existingDistanceDistChart.destroy();

    // Create new charts
    createSitesList(flightData);
    createYearChart(flightData);
    createFlightTimeDistribution(flightData);
    createFlightDistanceDistribution(flightData);
    createMonthChart(flightData);
}

//FLAGS


//GEAR
async function initGearData() {
    try {
        const gearData = await dbOperations.getData(STORES.gear);
        if (!gearData) {
            await dbOperations.setData(STORES.gear, {
                gliders: [],
                harnesses: [],
                reserve: []
            }, 'defaultGear'); 
        }
    } catch (error) {
        console.error('Error initializing gear data:', error);
        
        try {
            await dbOperations.setData(STORES.gear, {
                gliders: [],
                harnesses: [],
                reserve: []
            }, 'defaultGear');
        } catch (e) {
            console.error('Failed to initialize gear data:', e);
        }
    }
}


function refreshreserveInModal() {
    const reserveList = document.getElementById('reserveList');
    reserveList.innerHTML = '';

    gearData.reserve.forEach((reserve, index) => {
        const reserveItem = document.createElement('div');
        reserveItem.className = 'gear-item';
        const isActive = index === gearData.activereserveIndex;
        
        reserveItem.innerHTML = `
        <div class="full-group">
            <div class="form-group">
                <div style="position: relative;">  <!-- Add relative positioning -->
                    <input type="text" id="reserveBrand_${index}" class="reserveBrand" 
                           value="${reserve.brand || ''}" placeholder="Brand" autocomplete="off">
                    <!-- Dropdown will be inserted here -->
                </div>
                <div>
                    <input type="text" class="reserveModel" value="${reserve.model || ''}" placeholder="Model">
                </div>
                <div>
                    <input type="text" class="reserveSerial" value="${reserve.serial || ''}" placeholder="Serial Number">
                </div>
                <div>
                <input type="text" class="reserveinitial_hours" value="${reserve.initial_hours || ''}" placeholder="Initial Hours">
                </div>
                <div>
                <input type="date" class="reserveDateBought" value="${reserve.dateBought || ''}" placeholder="Date Bought">
                </div>
                <div>
                <input type="date" class="reserveDatelastcheck" value="${reserve.last_check || ''}" placeholder="Last Check">
            </div>
            <div class="button-row">
                <button type="button" class="secondary-button ${isActive ? 'active-gear' : ''}" onclick="setActivereserve(${index})">
                    ${isActive ? `<img src="assets/active.png" alt="Current Reserve" class="checkmark-icon"> Current Reserve` : 'Set as Profile Reserve'}
                </button>
                <button type="button" class="delete-button" onclick="deletereserve(${index})">Delete</button>
            </div>
            </div>
        `;
        
        if (isActive) {
            reserveItem.classList.add('active');
        }
        reserveItem.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                gearChanged = true;
                showSaveChangesButton();
            });
        });
        
        reserveList.appendChild(reserveItem);
        setupAutocomplete(`reserveBrand_${index}`, () => RESERVE_BRANDS);

    });

    const dateInputs = document.querySelectorAll('#reserveList .reserveDateBought');
    dateInputs.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
    const dateInputscheck = document.querySelectorAll('#reserveList .reserveDatelastcheck');
    dateInputscheck.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
}

function refreshHarnessesInModal() {
    const harnessList = document.getElementById('harnessList');
    harnessList.innerHTML = '';

    gearData.harnesses.forEach((harness, index) => {
        const harnessItem = document.createElement('div');
        harnessItem.className = 'gear-item';
        const isActive = index === gearData.activeHarnessIndex;
        
        harnessItem.innerHTML = `
        <div class="full-group">
            <div class="form-group">
                <div style="position: relative;">  <!-- Add relative positioning -->
                    <input type="text" id="harnessBrand_${index}" class="harnessBrand" 
                           value="${harness.brand || ''}" placeholder="Brand" autocomplete="off">
                    <!-- Dropdown will be inserted here -->
                </div>
                <div>
                    <input type="text" class="harnessModel" value="${harness.model || ''}" placeholder="Model">
                </div>
                <div>
                    <input type="text" class="harnessSerial" value="${harness.serial || ''}" placeholder="Serial Number">
                </div>
                <div>
                <input type="text" class="harnessinitial_hours" value="${harness.initial_hours || ''}" placeholder="Initial Hours">
                </div>
                <div>
                <input type="date" class="harnessDateBought" value="${harness.dateBought || ''}" placeholder="Date Bought">
                </div>
                <div>
                <input type="date" class="harnessDatelastcheck" value="${harness.last_check || ''}" placeholder="Last Check">
            </div>
            <div class="button-row">
                <button type="button" class="secondary-button ${isActive ? 'active-gear' : ''}" onclick="setActiveHarness(${index})">
                    ${isActive ? `<img src="assets/active.png" alt="Current Harness" class="checkmark-icon"> Current Harness` : 'Set as Profile Harness'}
                </button>
                <button type="button" class="delete-button" onclick="deleteHarness(${index})">Delete</button>
            </div>
        </div>

        `;
        
        if (isActive) {
            harnessItem.classList.add('active');
        }
        harnessItem.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                gearChanged = true;
                showSaveChangesButton();
            });
        });
        
        harnessList.appendChild(harnessItem);
        setupAutocomplete(`harnessBrand_${index}`, () => HARNESS_BRANDS);

    });

    const dateInputs = document.querySelectorAll('#harnessList .harnessDateBought');
    dateInputs.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
    const dateInputscheck = document.querySelectorAll('#harnessList .harnessDatelastcheck');
    dateInputscheck.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
}

function refreshGlidersInModal() {
    const gliderList = document.getElementById('gliderList');
    gliderList.innerHTML = '';


    gearData.gliders.forEach((glider, index) => {
        const gliderItem = document.createElement('div');
        gliderItem.className = 'gear-item';
        const isActive = index === gearData.activeGliderIndex;
        
        gliderItem.innerHTML = `
        <div class="full-group">
            <div class="form-group">
                <div style="position: relative;">  <!-- Add relative positioning -->
                    <input type="text" id="gliderBrand_${index}" class="gliderBrand" 
                           value="${glider.brand || ''}" placeholder="Brand" autocomplete="off">
                    <!-- Dropdown will be inserted here -->
                </div>
                <div>
                    <input type="text" class="gliderModel" value="${glider.model || ''}" placeholder="Model">
                </div>
                <div>
                    <input type="text" class="gliderSize" value="${glider.size || ''}" placeholder="Size">
                </div>
                <div>
                    <input type="text" class="gliderSerial" value="${glider.serial || ''}" placeholder="Serial Number">
                </div>
                <div>
                    <input type="text" class="gliderinitial_hours" value="${glider.initial_hours || ''}" placeholder="Initial Hours">
                </div>
                <div>
                    <input type="date" class="gliderDateBought" value="${glider.dateBought || ''}" placeholder="Date Bought">
                </div>
                <div>
                    <input type="date" class="gliderDatelastcheck" value="${glider.last_check || ''}" placeholder="Last Check">
                </div>
            </div>
            <div class="button-row">
                <button type="button" class="secondary-button ${isActive ? 'active-gear' : ''}" onclick="setActiveGlider(${index})">
                    ${isActive ? `<img src="assets/active.png" alt="Current Wing" class="checkmark-icon"> Current Wing` : 'Set as Profile Wing'}
                </button>
                <button type="button" class="delete-button" onclick="deleteGlider(${index})">Delete</button>
            </div>
            </div>
        `;        
        
        if (isActive) {
            gliderItem.classList.add('active');
        }
        
        // Add input listeners
        gliderItem.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                gearChanged = true;
                showSaveChangesButton();
            });
        });
        
        gliderList.appendChild(gliderItem);
        setupAutocomplete(`gliderBrand_${index}`, () => GLIDER_BRANDS);

    });

    const dateInputs = document.querySelectorAll('#gliderList .gliderDateBought');
    dateInputs.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
    const dateInputscheck = document.querySelectorAll('#gliderList .gliderDatelastcheck');
    dateInputscheck.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
}


async function setActiveGlider(index) {
    if (gearData.activeGliderIndex !== index) {
        gearData.activeGliderIndex = index;
        gearChanged = true;

        // Update UI
        const gliderItems = document.querySelectorAll('#gliderList .gear-item');
        gliderItems.forEach((item, idx) => {
            const activeButton = item.querySelector('.secondary-button');
            if (idx === index) {
                item.classList.add('active');
                // Replace the check mark with an image
                activeButton.innerHTML = `<img src="assets/active.png" alt="Current Wing" class="checkmark-icon"> Current Wing`;
                activeButton.classList.add('active-gear');
            } else {
                item.classList.remove('active');
                activeButton.innerHTML = 'Set as Profile Wing';
                activeButton.classList.remove('active-gear');
            }
        });

        updateGearUI();
        showSaveChangesButton();
    }
}

async function setActivereserve(index) {
    if (gearData.activereserveIndex !== index) {
        gearData.activereserveIndex = index;
        gearChanged = true;
        
        // Update UI
        const reserveItems = document.querySelectorAll('#reserveList .gear-item');
        reserveItems.forEach((item, idx) => {
            const activeButton = item.querySelector('.secondary-button');
            if (idx === index) {
                item.classList.add('active');
                activeButton.innerHTML = '<img src="assets/active.png" alt="Current Reserve" class="checkmark-icon"> Current Reserve';
                activeButton.classList.add('active-gear');
            } else {
                item.classList.remove('active');
                activeButton.innerHTML = 'Set as Profile reserve';
                activeButton.classList.remove('active-gear');
            }
        });
        
        updateGearUI();
        showSaveChangesButton();

    }
}
async function setActiveHarness(index) {
    if (gearData.activeHarnessIndex !== index) {
        gearData.activeHarnessIndex = index;
        gearChanged = true;
        
        // Update UI
        const harnessItems = document.querySelectorAll('#harnessList .gear-item');
        harnessItems.forEach((item, idx) => {
            const activeButton = item.querySelector('.secondary-button');
            if (idx === index) {
                item.classList.add('active');
                activeButton.innerHTML = '<img src="assets/active.png" alt="Current Harness" class="checkmark-icon"> Current Harness';
                activeButton.classList.add('active-gear');
            } else {
                item.classList.remove('active');
                activeButton.innerHTML = 'Set as Profile Harness';
                activeButton.classList.remove('active-gear');
            }
        });
        
        updateGearUI();
        showSaveChangesButton();

    }
}


async function addGlider() {
    try {
        const gliderList = document.getElementById('gliderList');
        const gliderItem = document.createElement('div');
        gliderItem.className = 'gear-item';

        const isFirstGlider = gearData.gliders.length === 0;
        const newIndex = gearData.gliders.length;
        
        // Generate a unique ID for this glider's brand input
        const uniqueId = `gliderBrand_${Date.now()}_${newIndex}`;
        
        gliderItem.innerHTML = `
        <div class="full-group">
            <div class="form-group">
                <div style="position: relative;">
                    <input type="text" id="${uniqueId}" class="gliderBrand" 
                           placeholder="Brand" autocomplete="off">
                    <!-- Dropdown will be inserted here -->
                </div>
                <div>
                    <input type="text" class="gliderModel" placeholder="Model">
                </div>
                <div>
                    <input type="text" class="gliderSize" placeholder="Size">
                </div>
                <div>
                    <input type="text" class="gliderSerial" placeholder="Serial Number">
                </div>
                <div>
                    <input type="text" class="gliderinitial_hours" placeholder="Initial flight hours">
                </div>
                <div>
                    <input type="date" class="gliderDateBought" placeholder="Date Bought">
                </div>
                <div>
                    <input type="date" class="gliderDatelastcheck" placeholder="Last Check">
                </div>
            </div>
            <div class="button-row">
            <button type="button" class="secondary-button ${isFirstGlider ? 'active-gear' : ''}" onclick="setActiveGlider(${newIndex})">
                ${isFirstGlider ? `<img src="assets/active.png" alt="Current Wing" class="checkmark-icon"> Current Wing` : 'Set as Profile Wing'}
            </button>
                <button type="button" class="delete-button" onclick="deleteGlider(${newIndex})">Delete</button>
            </div>
            </div>
        `;

        // First append the item to the DOM
        gliderList.appendChild(gliderItem);
        
        // Now setup autocomplete with the unique ID
        setupAutocomplete(uniqueId, () => GLIDER_BRANDS);
        
        // Add input listeners with automatic saving
        gliderItem.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', async () => {
                const inputs = gliderItem.querySelectorAll('input');
                const updatedGlider = {
                    brand: inputs[0].value,
                    model: inputs[1].value,
                    size: inputs[2].value,
                    serial: inputs[3].value,
                    initial_hours: inputs[4].value,
                    dateBought: inputs[5].value,
                    last_check: inputs[6].value
                };
                gearData.gliders[newIndex] = updatedGlider;
                gearChanged = true;
                showSaveChangesButton();
            });
        });
        
        // Add new glider to data
        gearData.gliders.push({ 
            brand: '', 
            model: '', 
            size: '',
            serial: '',
            initial_hours: '0',
            dateBought: '',
            last_check: ''
        });

        if (isFirstGlider) {
            gearData.activeGliderIndex = 0;
            gliderItem.classList.add('active');
        }
        
        // Initialize date pickers
        const newDateInput = gliderItem.querySelector('.gliderDateBought');
        if (newDateInput) {
            flatpickr(newDateInput, {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: "2000-01-01",
                onChange: async (selectedDates) => {
                    gearData.gliders[newIndex].dateBought = selectedDates[0];
                }
            });
        }
        
        const newDateInputcheck = gliderItem.querySelector('.gliderDatelastcheck');
        if (newDateInputcheck) {
            flatpickr(newDateInputcheck, {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: "2000-01-01",
                onChange: async (selectedDates) => {
                    gearData.gliders[newIndex].last_check = selectedDates[0];
                }
            });
        }
        
        gearChanged = true;
        showSaveChangesButton();
    } catch (error) {
        console.error('Error adding glider:', error);
        showCustomAlert('Error adding glider. Please try again.');
    }
}


async function addreserve() {
    try {
        const reserveList = document.getElementById('reserveList');
        const reserveItem = document.createElement('div');
        reserveItem.className = 'gear-item';

        const isFirstreserve = gearData.reserve.length === 0;
        const newIndex = gearData.reserve.length;
        
        // Generate unique ID for autocomplete
        const uniqueId = `reserveBrand_${Date.now()}_${newIndex}`;
        
        reserveItem.innerHTML = `
        <div class="full-group">
            <div class="form-group">
                <div style="position: relative;">
                    <input type="text" id="${uniqueId}" class="reserveBrand" 
                           placeholder="Brand" autocomplete="off">
                    <!-- Dropdown will be inserted here -->
                </div>
                <div>
                    <input type="text" class="reserveModel" placeholder="Model">
                </div>
                <div>
                    <input type="text" class="reserveSerial" placeholder="Serial Number">
                </div>
                <div>
                    <input type="text" class="reserveSize" placeholder="Size">
                </div>
                <div>
                    <input type="text" class="reserveinitial_hours" placeholder="Initial flight hours">
                </div>
                <div>
                    <input type="date" class="reserveDateBought" placeholder="Date Bought">
                </div>
                <div>
                    <input type="date" class="reserveDatelastcheck" placeholder="Last Check">
                </div>
            </div>
            <div class="button-row">
                <button type="button" class="secondary-button ${isFirstreserve ? 'active-gear' : ''}" onclick="setActivereserve(${newIndex})">
                    ${isFirstreserve ? `<img src="assets/active.png" alt="Current Reserve" class="checkmark-icon"> Current Reserve` : 'Set as Profile Reserve'}
                </button>
                <button type="button" class="delete-button" onclick="deletereserve(${newIndex})">Delete</button>
            </div>
            </div>
        `;
        
        // Append to DOM first
        reserveList.appendChild(reserveItem);
        
        // Setup autocomplete with unique ID
        setupAutocomplete(uniqueId, () => RESERVE_BRANDS);
        
        // Add input listeners with automatic saving
        reserveItem.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', async () => {
                const inputs = reserveItem.querySelectorAll('input');
                const updatedreserve = {
                    brand: inputs[0].value,
                    model: inputs[1].value,
                    serial: inputs[2].value,
                    size: inputs[3].value,
                    initial_hours: inputs[4].value,
                    dateBought: inputs[5].value,
                    last_check: inputs[6].value
                };
                gearData.reserve[newIndex] = updatedreserve;
                gearChanged = true;
                showSaveChangesButton();
            });
        });
        
        // Add new reserve to data
        gearData.reserve.push({ 
            brand: '', 
            model: '',
            serial: '',
            size: '', 
            initial_hours: '0',
            dateBought: '',
            last_check: ''
        });

        if (isFirstreserve) {
            gearData.activereserveIndex = 0;
            reserveItem.classList.add('active');
        }
        
        // Initialize date pickers
        const newDateInput = reserveItem.querySelector('.reserveDateBought');
        if (newDateInput) {
            flatpickr(newDateInput, {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: "2000-01-01",
                onChange: async (selectedDates) => {
                    gearData.reserve[newIndex].dateBought = selectedDates[0];
                }
            });
        }
        
        const newDateInputcheck = reserveItem.querySelector('.reserveDatelastcheck');
        if (newDateInputcheck) {
            flatpickr(newDateInputcheck, {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: "2000-01-01",
                onChange: async (selectedDates) => {
                    gearData.reserve[newIndex].last_check = selectedDates[0]; // Fixed property
                }
            });
        }
        
        gearChanged = true;
        showSaveChangesButton();
    } catch (error) {
        console.error('Error adding reserve:', error);
        showCustomAlert('Error adding reserve. Please try again.');
    }
}

async function addHarness() {
    try {
        const harnessList = document.getElementById('harnessList');
        const harnessItem = document.createElement('div');
        harnessItem.className = 'gear-item';
        
        const isFirstHarness = gearData.harnesses.length === 0;
        const newIndex = gearData.harnesses.length;
        
        // Generate unique ID for autocomplete
        const uniqueId = `harnessBrand_${Date.now()}_${newIndex}`;
        
        harnessItem.innerHTML = `
        <div class="full-group">
            <div class="form-group">
                <div style="position: relative;">
                    <input type="text" id="${uniqueId}" class="harnessBrand" 
                           placeholder="Brand" autocomplete="off">
                    <!-- Dropdown will be inserted here -->
                </div>
                <div>
                    <input type="text" class="harnessModel" placeholder="Model">
                </div>
                <div>
                    <input type="text" class="harnessSerial" placeholder="Serial Number">
                </div>
                <div>
                    <input type="text" class="harnessinitial_hours" placeholder="Initial flight hours">
                </div>
                <div>
                    <input type="date" class="harnessDateBought" placeholder="Date Bought">
                </div>
                <div>
                    <input type="date" class="harnessDatelastcheck" placeholder="Last Check">
                </div>
            </div>
            <div class="button-row">
                <button type="button" class="secondary-button ${isFirstHarness ? 'active-gear' : ''}" onclick="setActiveHarness(${newIndex})">
                    ${isFirstHarness ? `<img src="assets/active.png" alt="Current Harness" class="checkmark-icon"> Current Harness` : 'Set as Profile Harness'}
                </button>
                <button type="button" class="delete-button" onclick="deleteHarness(${newIndex})">Delete</button>
            </div>
            </div>
        `;
        
        // Append to DOM first
        harnessList.appendChild(harnessItem);
        
        // Setup autocomplete with unique ID
        setupAutocomplete(uniqueId, () => HARNESS_BRANDS);

        // Add input listeners with immediate UI feedback
        harnessItem.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', async () => {
                const inputs = harnessItem.querySelectorAll('input');
                const updatedHarness = {
                    brand: inputs[0].value,
                    model: inputs[1].value,
                    serial: inputs[2].value,
                    initial_hours: inputs[3].value,
                    dateBought: inputs[4].value,
                    last_check: inputs[5].value
                };
                gearData.harnesses[newIndex] = updatedHarness;
                gearChanged = true;
                showSaveChangesButton();
            });
        });
        
        // Add new harness to data
        gearData.harnesses.push({ 
            brand: '', 
            model: '', 
            serial: '',
            initial_hours: '0', 
            dateBought: '',
            last_check: ''
        });
        
        if (isFirstHarness) {
            gearData.activeHarnessIndex = 0;
            harnessItem.classList.add('active');
        }
        
        // Initialize date pickers
        const newDateInput = harnessItem.querySelector('.harnessDateBought');
        if (newDateInput) {
            flatpickr(newDateInput, {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: "2000-01-01",
                onChange: async (selectedDates) => {
                    gearData.harnesses[newIndex].dateBought = selectedDates[0];
                }
            });
        }
        
        const newDateInputcheck = harnessItem.querySelector('.harnessDatelastcheck');
        if (newDateInputcheck) {
            flatpickr(newDateInputcheck, {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: "2000-01-01",
                onChange: async (selectedDates) => {
                    gearData.harnesses[newIndex].last_check = selectedDates[0]; // Fixed property
                }
            });
        }
        
        gearChanged = true;
        showSaveChangesButton();
    } catch (error) {
        console.error('Error adding harness:', error);
        showCustomAlert('Error adding harness. Please try again.');
    }
}


async function deleteGlider(index) {
    gearData.gliders = gearData.gliders.filter((_, idx) => idx !== index);
    if (gearData.activeGliderIndex >= gearData.gliders.length) {
        gearData.activeGliderIndex = Math.max(0, gearData.gliders.length - 1);
    }
    gearChanged = true;
    refreshGlidersInModal();
    updateGearUI();
    showSaveChangesButton();

}

async function deletereserve(index) {
    gearData.reserve = gearData.reserve.filter((_, idx) => idx !== index);
    if (gearData.activereserveIndex >= gearData.reserve.length) {
        gearData.activereserveIndex = Math.max(0, gearData.reserve.length - 1);
    }
    gearChanged = true;
    refreshreserveInModal();
    updateGearUI();
    showSaveChangesButton();

}

async function deleteHarness(index) {
    gearData.harnesses = gearData.harnesses.filter((_, idx) => idx !== index);
    if (gearData.activeHarnessIndex >= gearData.harnesses.length) {
        gearData.activeHarnessIndex = Math.max(0, gearData.harnesses.length - 1);
    }
    gearChanged = true;
    refreshHarnessesInModal();
    updateGearUI();
    showSaveChangesButton();

}

async function loadGear() {
    try {
        const savedGear = await dbOperations.getData(STORES.gear, 'defaultGear');
        if (savedGear) {
            gearData = savedGear;
            // Ensure all arrays exist
            gearData.gliders = gearData.gliders || [];
            gearData.harnesses = gearData.harnesses || [];
            gearData.reserve = gearData.reserve || [];  // Make sure reserve exists
        } else {
            gearData = {
                gliders: [],
                harnesses: [],
                reserve: [],
                activeGliderIndex: -1,
                activeHarnessIndex: -1,
                activeReserveIndex: -1
            };
            await dbOperations.setData(STORES.gear, gearData, 'defaultGear');
        }
        refreshGlidersInModal();
        refreshHarnessesInModal();
        refreshreserveInModal();
        updateGearUI();
    } catch (error) {
        console.error('Error loading gear:', error);
    }
}

async function saveGear() {
    try {
        await dbOperations.setData(STORES.gear, gearData, 'defaultGear');
        gearChanged = false;
        const saveButton = document.getElementById('saveChangesButton');
        const buttonGroup = document.querySelector('.button-group');
        if (saveButton && buttonGroup) {
            saveButton.style.display = 'none';
            buttonGroup.classList.remove('show');
        }
    } catch (error) {
        console.error('Error saving gear:', error);
        showCustomAlert('Error saving gear. Please try again.');
    }
}



//SAVEEXPORT



async function exportAllData() {
    // Create and show a custom export options dialog
    showExportOptionsDialog();
}

function showExportOptionsDialog() {
    // Create the dialog container if it doesn't exist
    let exportDialog = document.getElementById('exportOptionsDialog');
    if (!exportDialog) {
        exportDialog = document.createElement('div');
        exportDialog.id = 'exportOptionsDialog';
        exportDialog.className = 'custom-dialog-overlay';
        
        // Create the dialog content
        exportDialog.innerHTML = `
            <div class="custom-dialog-content">
                <h3>Export Options</h3>
                <p>Choose your export format:</p>
                <div class="export-buttons">
                    <button id="exportJsonBtn" class="primary-button">Complete Backup (JSON)</button>
                    <button id="exportCsvBtn" class="secondary-button">Flights Only (CSV)</button>
                </div>
                <button id="cancelExportBtn" class="cancel-button">Cancel</button>
            </div>
        `;
        
        document.body.appendChild(exportDialog);
        
        // Add event listeners
        document.getElementById('exportJsonBtn').addEventListener('click', () => {
            closeExportDialog();
            exportAsJson();
        });
        
        document.getElementById('exportCsvBtn').addEventListener('click', () => {
            closeExportDialog();
            exportFlightsAsCsv();
        });
        
        document.getElementById('cancelExportBtn').addEventListener('click', () => {
            closeExportDialog();
        });
        
        // Close on overlay click
        exportDialog.addEventListener('click', (e) => {
            if (e.target.id === 'exportOptionsDialog') {
                closeExportDialog();
            }
        });
    }
    
    // Show the dialog with fade-in effect
    exportDialog.style.display = 'flex';
    exportDialog.style.opacity = '0';
    
    setTimeout(() => {
        exportDialog.style.opacity = '1';
    }, 10);
}

function closeExportDialog() {
    const exportDialog = document.getElementById('exportOptionsDialog');
    if (exportDialog) {
        exportDialog.style.opacity = '0';
        setTimeout(() => {
            exportDialog.style.display = 'none';
        }, 300);
    }
}

async function exportAsJson() {
    try {
        const basicProfile = await dbOperations.getData(STORES.profile, 'basicProfile');
        const extendedProfile = await dbOperations.getData(STORES.profile, 'extendedProfile');
        
        const profileData = {
            name: basicProfile.name,
            image: basicProfile.image,
            birthDate: basicProfile.birthDate,
            weight: basicProfile.weight,
            blood: basicProfile.blood,
            license: basicProfile.license,
            backgroundImage: basicProfile.backgroundImage,
            qualifications: extendedProfile.qualifications || [],
            Courses: extendedProfile.Courses || [],
            documents: extendedProfile.documents || []
        };



        // Récupérer les vols sans les anciennes images de minimap
            const flights = await dbOperations.getAllFromStore(STORES.flights);

            const flightsForExport = flights.map(flight => {
                const { minimapImage, ...flightData } = flight;
                return flightData;
            });

            const exportData = {
                flights: flightsForExport,
                gear: await dbOperations.getData(STORES.gear, 'defaultGear'),
                profile: profileData,
                favoriteSites: await dbOperations.getData(
                    STORES.favoriteSites,
                    'sites'
                ) || []
            };


        // Convert the data to a JSON string
        const jsonString = JSON.stringify(exportData, null, 2);
        
        // Create a blob and download link
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `m_pilots_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showCustomAlert('Export completed successfully!');
    } catch (error) {
        console.error('Error exporting data:', error);
        showCustomAlert('Error exporting data. Please try again.');
    }
}



async function exportFlightsAsCsv() {
    try {
        // Get all flights
        const flights = await dbOperations.getAllFromStore(STORES.flights);
        
        if (!flights || flights.length === 0) {
            showCustomAlert('No flights to export.');
            return;
        }
        
        // Sort flights by date (most recent first)
        flights.sort((a, b) => {
            // Try to parse dates in various formats
            const dateA = parseFlightDatecsv(a.date);
            const dateB = parseFlightDatecsv(b.date);
            
            // Sort in descending order (newest first)
            return dateB - dateA;
        });
        
        // Define CSV headers based on your actual flight properties (removed min altitude and duration)
        const headers = [
            'Date', 'Time of Day', 'Duration (min)', 'Site', 'Country', 'Glider', 'Harness', 'Reserve',
            'Takeoff', 'Takeoff Alt', 'Landing', 'Landing Alt', 
            'Max Altitude', 'Max Climb', 'Max Sink', 
            'Distance', 'Rating', 'Stress Level', 'Type', 'Comments'
        ];
        
        // Create CSV content
        let csvContent = headers.join(',') + '\n';
        
        flights.forEach(flight => {
            // Format date safely
            let dateStr = flight.date || '';
            
            // Helper function to escape CSV fields
            const escapeCsvField = (field) => {
                if (field === null || field === undefined) return '';
                const str = String(field);
                // If the field contains commas, quotes, or newlines, wrap it in quotes
                if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                    // Double up any quotes
                    return `"${str.replace(/"/g, '""')}"`;
                }
                return str;
            };
            
            // Create row with all fields properly escaped
            const row = [
                dateStr,
                escapeCsvField(flight.timeOfDay),
                escapeCsvField(flight.time),
                escapeCsvField(flight.site),
                escapeCsvField(flight.country),
                escapeCsvField(flight.glider),
                escapeCsvField(flight.harness),
                escapeCsvField(flight.reserve),
                escapeCsvField(flight.takeoff),
                escapeCsvField(flight.takeoff_alt),
                escapeCsvField(flight.landing),
                escapeCsvField(flight.landing_alt),
                escapeCsvField(flight.max_altitude),
                escapeCsvField(flight.max_climb),
                escapeCsvField(flight.max_sink),
                escapeCsvField(flight.flight_distance),
                escapeCsvField(flight.rating),
                escapeCsvField(flight.stressLevel),
                escapeCsvField(flight.type),
                escapeCsvField(flight.comments)
            ];
            
            csvContent += row.join(',') + '\n';
        });
        
        // Create a blob and download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `m_pilots_flights_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showCustomAlert('Flights exported to CSV successfully!');
    } catch (error) {
        console.error('Error exporting flights to CSV:', error);
        showCustomAlert('Error exporting flights. Please try again.');
    }
}

// Helper function to parse flight dates in various formats
function parseFlightDatecsv(dateStr) {
    if (!dateStr) return new Date(0); // Default to epoch if no date
    
    try {
        // Try to handle various date formats
        
        // Format: DD/MM/YY
        if (/^\d{2}\/\d{2}\/\d{2}$/.test(dateStr)) {
            const [day, month, year] = dateStr.split('/');
            return new Date(`20${year}-${month}-${day}`);
        }
        
        // Format: YYYY-MM-DD or similar ISO format
        if (dateStr.includes('-')) {
            return new Date(dateStr);
        }
        
        // Try direct parsing as a fallback
        const date = new Date(dateStr);
        if (!isNaN(date.getTime())) {
            return date;
        }
        
        // If all else fails, return epoch
        return new Date(0);
    } catch (e) {
        console.warn('Error parsing date:', dateStr, e);
        return new Date(0);
    }
}

async function triggerImportFile(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Remove any existing file input first
    const existingInput = document.getElementById('tempFileInput');
    if (existingInput) {
        document.body.removeChild(existingInput);
    }

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'tempFileInput'; // Add an ID for easy removal
    fileInput.accept = '.json';
    fileInput.style.position = 'fixed';
    fileInput.style.top = '-100px';
    
    fileInput.onchange = function() {
        const file = this.files[0];
        if (file) {
            handleBackupFile(file);
        }
        // Don't remove the input immediately to prevent issues with file handling
        setTimeout(() => {
            if (document.body.contains(fileInput)) {
                document.body.removeChild(fileInput);
            }
        }, 1000);
    };

    document.body.appendChild(fileInput);
    fileInput.click();

    const settingsMenu = document.getElementById('settingsMenu');
    if (settingsMenu) {
        settingsMenu.style.display = 'none';
        document.body.classList.remove('settings-open');
    }
}


async function handleBackupFile(file) {
    if (!file) return;

    try {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                
                if (!isValidBackupFile(importedData)) {
                    throw new Error('Invalid backup file format');
                }

                const confirmed = await showCustomConfirm('This will replace all existing data. Are you sure you want to continue?');
                
                if (confirmed) {
                    await dbOperations.clearAllData();

                    // Import flights
                    if (importedData.flights) {
                        for (const flight of importedData.flights) {
                            const { id, ...flightData } = flight;

                            
                            await dbOperations.saveFlight(flightData);
                        }
                    }



                    // Import gear
                    if (importedData.gear) {
                        await dbOperations.setData(STORES.gear, importedData.gear, 'defaultGear');
                    }
                    if (importedData.favoriteSites) {
                        await dbOperations.setData(STORES.favoriteSites, importedData.favoriteSites, 'sites');
                    }

                    if (importedData.profile) {
                        // Save basic profile data
                        const basicProfileData = {
                            name: importedData.profile.name,
                            image: importedData.profile.image,
                            birthDate: importedData.profile.birthDate || '', // Don't set a default
                            weight: importedData.profile.weight,
                            blood: importedData.profile.blood,
                            license: importedData.profile.license,
                            backgroundImage: importedData.profile.backgroundImage || null // Add this line
                        };
                        await dbOperations.setData(STORES.profile, basicProfileData, 'basicProfile');

                        // Save extended profile data
                        const extendedProfileData = {
                            qualifications: importedData.profile.qualifications || [],
                            Courses: importedData.profile.Courses || [],
                            documents: importedData.profile.documents || []
                        };
                        await dbOperations.setData(STORES.profile, extendedProfileData, 'extendedProfile');
                        const profileImage = document.getElementById('profileImage');
                        const profileImageModal = document.getElementById('profileImageModal');
                        const profileInfo = document.querySelector('.profile-info');
                        const formGroupProfile = document.querySelector('.form-group-profile');

                        if (profileImage) profileImage.src = basicProfileData.image;
                        if (profileImageModal) profileImageModal.src = basicProfileData.image;
                        
                        // Clear or set background image
                        if (profileInfo) profileInfo.style.backgroundImage = basicProfileData.backgroundImage || 'none';
                        if (formGroupProfile) formGroupProfile.style.backgroundImage = basicProfileData.backgroundImage || 'none';
                        
                        // Update background button visibility
                        updateBackgroundButtonVisibility();
                    
                    }
                    await loadProfile();
                    await loadGear();
                    await loadFlights();
                    // await initSitesSection();
                    
                    const flightsButton = document.querySelector('.nav-button-menu[data-target="box-flights"]');
                    if (flightsButton) {
                        // Remove active class from all nav buttons and content boxes
                        document.querySelectorAll('.nav-button-menu').forEach(btn => btn.classList.remove('active'));
                        document.querySelectorAll('.content-box').forEach(box => box.classList.remove('active'));
                        
                        // Activate flights button and box
                        flightsButton.classList.add('active');
                        const flightsBox = document.querySelector('.box-flights');
                        if (flightsBox) {
                            flightsBox.classList.add('active');
                        }
                        
                        // Call the activation handler
                        await handleFlightsBoxActivation();
                    }
                    
                    // Show success alert while loading overlay is still visible
                    showCustomAlert('Data imported successfully!');
                    
                    // Then fade out loading overlay
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    setTimeout(() => {
                        loadingOverlay.style.opacity = '0';
                        setTimeout(() => {
                            loadingOverlay.style.display = 'none';
                        }, 300);
                    }, 100);
                }
                
                // Reset the file input regardless of confirmation
                const fileInput = document.getElementById('importFileInput');
                if (fileInput) {
                    fileInput.value = '';
                }
                
            } catch (error) {
                console.error('Error processing import:', error);


                
                // Reset on error
                const fileInput = document.getElementById('importFileInput');
                if (fileInput) {
                    fileInput.value = '';
                }
            }
        };
        reader.readAsText(file);
    } catch (error) {
        console.error('Error reading file:', error);
        showCustomAlert('Error reading file. Please try again.');
        // Reset on error
        const fileInput = document.getElementById('importFileInput');
        if (fileInput) {
            fileInput.value = '';
        }
    }
}



async function clearAllData() {
    try {
        const db = await ensureDB();
        const stores = Object.values(STORES);
        
        for (const storeName of stores) {
            await dbOperations.clearStore(storeName);
        }
    } catch (error) {
        console.error('Error clearing data:', error);
        throw error;
    }
}
function downloadJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function isValidBackupFile(data) {
    return (
        data &&
        typeof data === 'object' &&
        ('profile' in data || 'profileData' in data || 'gear' in data || 'flights' in data)
    );
}
function showSaveChangesButton() {
    const buttonGroup = document.querySelector('.button-group');
    const saveButton = document.getElementById('saveChangesButton');
    if (buttonGroup && saveButton) {
        buttonGroup.classList.add('show');
        saveButton.style.display = 'block';
        saveButton.disabled = false; // Enable the button
    } else {
        console.warn('Save button or button group not found'); // Debug log
    }
}


//UI

let activeDialog = null;

// function showCustomConfirm(message) {
//     return new Promise((resolve) => {
//         const confirmOverlay = document.getElementById('customConfirm');
//         const confirmMessage = document.getElementById('customConfirmMessage');
        
//         // If there's an active alert, hide it first
//         if (activeDialog) {
//             activeDialog.style.display = 'none';
//         }
        
//         confirmMessage.textContent = message;
//         confirmOverlay.style.display = 'flex';
//         activeDialog = confirmOverlay;
        
//         // Add opacity transition
//         confirmOverlay.style.opacity = '0';
//         setTimeout(() => {
//             confirmOverlay.style.opacity = '1';
//         }, 10);
        
//         // Store the resolve function to be called when user makes a choice
//         window.customConfirmCallback = resolve;
//     });
// }

// function handleCustomConfirm(choice) {
//     const confirmOverlay = document.getElementById('customConfirm');
//     const loadingOverlay = document.getElementById('loadingOverlay');
    
//     // If user confirmed, show loading overlay before hiding confirm
//     if (choice) {
//         loadingOverlay.style.display = 'flex';
//         loadingOverlay.style.opacity = '1';
//     }
    
//     // Fade out confirm dialog
//     confirmOverlay.style.opacity = '0';
//     setTimeout(() => {
//         confirmOverlay.style.display = 'none';
//         activeDialog = null;
        
//         // Call the stored callback with the user's choice
//         if (window.customConfirmCallback) {
//             window.customConfirmCallback(choice);
//             window.customConfirmCallback = null;
//         }
//     }, 300);
// }

function handleCustomConfirm(choice) {
    const confirmOverlay = document.getElementById('customConfirm');
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Check the stored preference for showing loading overlay
    const showLoading = window.showLoadingOnConfirm !== false;
    
    // Only show loading overlay if requested and user confirmed
    if (choice && showLoading) {
        loadingOverlay.style.display = 'flex';
        loadingOverlay.style.opacity = '1';
    }
    
    // Fade out confirm dialog
    confirmOverlay.style.opacity = '0';
    setTimeout(() => {
        confirmOverlay.style.display = 'none';
        activeDialog = null;
        
        // Call the stored callback with the user's choice
        if (window.customConfirmCallback) {
            window.customConfirmCallback(choice);
            window.customConfirmCallback = null;
        }
    }, 300);
}

function showCustomConfirm(message, showLoadingOnConfirm = true) {
    return new Promise((resolve) => {
        const confirmOverlay = document.getElementById('customConfirm');
        const confirmMessage = document.getElementById('customConfirmMessage');
        
        // If there's an active alert, hide it first
        if (activeDialog) {
            activeDialog.style.display = 'none';
        }
        
        confirmMessage.textContent = message;
        confirmOverlay.style.display = 'flex';
        activeDialog = confirmOverlay;
        
        // Add opacity transition
        confirmOverlay.style.opacity = '0';
        setTimeout(() => {
            confirmOverlay.style.opacity = '1';
        }, 10);
        
        // Store both the resolve function and the loading preference
        window.customConfirmCallback = resolve;
        window.showLoadingOnConfirm = showLoadingOnConfirm;
    });
}


// function showCustomAlert(message) {
//     const alertOverlay = document.getElementById('customAlert');
//     const alertMessage = document.getElementById('customAlertMessage');
//     const loadingOverlay = document.getElementById('loadingOverlay');
    
//     alertMessage.textContent = message;
//     alertOverlay.style.display = 'flex';
//     alertOverlay.style.opacity = '0';
    
//     // Short delay to ensure smooth transition
//     setTimeout(() => {
//         alertOverlay.style.opacity = '1';
//         if (loadingOverlay) {
//             loadingOverlay.style.opacity = '0';
//             setTimeout(() => {
//                 loadingOverlay.style.display = 'none';
//             }, 300);
//         }
//     }, 10);
// }
function showCustomAlert(message) {
    const alertOverlay = document.getElementById('customAlert');
    const alertMessage = document.getElementById('customAlertMessage');
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Use innerHTML to render HTML instead of text content
    alertMessage.innerHTML = message;  // Change this to innerHTML
    
    alertOverlay.style.display = 'flex';
    alertOverlay.style.opacity = '0';
    
    // Short delay to ensure smooth transition
    setTimeout(() => {
        alertOverlay.style.opacity = '1';
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }
    }, 10);
}

function closeCustomAlert() {
    const alertOverlay = document.getElementById('customAlert');
    
    // Fade out
    alertOverlay.style.opacity = '0';
    setTimeout(() => {
        alertOverlay.style.display = 'none';
        activeDialog = null;
    }, 300);
}

// Optional: Close on overlay click
document.getElementById('customAlert').addEventListener('click', (e) => {
    if (e.target.id === 'customAlert') {
        closeCustomAlert();
    }
});


function closeAddFlightModal() {
    const modal = document.getElementById('addFlightModal');
    if (!modal) return;
    cleanupMap();
        // Reset the modal title
    const modalTitle = modal.querySelector('.modal-title');
    if (modalTitle) {
        modalTitle.textContent = 'Add a New Flight';
    }

    // Reset form submission handler
    const form = document.getElementById('addFlightForm');
    if (form) {
        form.reset();
        form.onsubmit = handleAddFlight;
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = 'Add Flight';
            submitButton.disabled = false;
        }
               // Hide processing indicator when closing modal
               const processingIndicator = form.querySelector('.processing-indicator');
               if (processingIndicator) {
                   processingIndicator.style.display = 'none';
               }
    }

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Reset coordinates
    window.lastUploadedCoordinates = null;
    selectedFlightCoordinates = null;
    
    // Safely reset coordinate fields
    const takeoffLat = document.getElementById('flightTakeoffLat');
    const takeoffLon = document.getElementById('flightTakeoffLon');
    if (takeoffLat) takeoffLat.value = '';
    if (takeoffLon) takeoffLon.value = '';
    
    // Remove markers
    if (coordinateMarker) {
        coordinateMarker.remove();
        coordinateMarker = null;
    }

    // Clear GPX/TCX preview
    const gpxPreview = document.getElementById('gpxPreview');
    if (gpxPreview) gpxPreview.innerHTML = '';
    
    // Reset file input
    const trackFile = document.getElementById('trackFile');
    if (trackFile) trackFile.value = '';
    
    // Clear the lastUploadedCoordinates
    window.lastUploadedCoordinates = null;
    
    // Remove map if it exists
    if (window.flightMap) {
        window.flightMap.remove();
        window.flightMap = null;
    }

    // Hide map container
    const mapDiv = document.getElementById('gpxMap');
    if (mapDiv) mapDiv.style.display = 'none';

    // Reset biometric fields if they exist
    const biometricFields = ['flightAvgHR', 'flightMaxHR', 'flightAvgTemp'];
    biometricFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) field.value = '';
    });
}


function copyBtcAddress() {
    const btcAddress = document.getElementById('btcAddress');
    const copyBtn = document.querySelector('.copy-btn');

    // Try different methods to copy text
    if (navigator.clipboard && window.isSecureContext) {
        // For modern browsers
        navigator.clipboard.writeText(btcAddress.textContent)
            .then(() => showCopiedMessage(copyBtn))
            .catch(() => fallbackCopyText(btcAddress, copyBtn));
    } else {
        // Fallback for older browsers and mobile
        fallbackCopyText(btcAddress, copyBtn);
    }
}

function fallbackCopyText(element, button) {
    try {
        // Create a temporary textarea
        const textarea = document.createElement('textarea');
        textarea.value = element.textContent;
        textarea.style.position = 'fixed';  // Avoid scrolling to bottom
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        
        // Handle iOS devices
        if (navigator.userAgent.match(/ipad|iphone/i)) {
            const range = document.createRange();
            range.selectNodeContents(textarea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textarea.setSelectionRange(0, 999999);
        } else {
            textarea.select();
        }
        
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopiedMessage(button);
    } catch (err) {
        console.error('Failed to copy:', err);
        button.textContent = 'Error';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    }
}

function showCopiedMessage(button) {
    button.textContent = 'Address copied!';
    setTimeout(() => {
        button.textContent = 'Copy address';
    }, 2000);
}
//Messages
function showSuccessMessage(message) {
    const successMessage = document.getElementById('saveSuccessMessage');
    if (successMessage) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        successMessage.classList.add('show');
        setTimeout(() => {
            successMessage.classList.remove('show');
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 300);
        }, 3000);
    }
}
//Animatedline
function animateFlightPath(coords, speeds, map) {
    const findTakeoffIndex = (coords, speeds) => {
        const speedThreshold = 5;
        const consistentSpeedPoints = 5;
        let consecutivePoints = 0;
        
        for (let i = 0; i < speeds.length; i++) {
            if (speeds[i] > speedThreshold) {
                consecutivePoints++;
                if (consecutivePoints >= consistentSpeedPoints) {
                    return Math.max(0, i - consistentSpeedPoints);
                }
            } else {
                consecutivePoints = 0;
            }
        }
        return 0;
    };

    const takeoffIndex = findTakeoffIndex(coords, speeds);
    const flightCoords = coords.slice(takeoffIndex);
    
    const totalDistance = flightCoords.length;
    const stepSize = Math.max(1, Math.floor(totalDistance / 500));
    
    const trailLength = 8;
    const mainPolyline = L.polyline([], { 
        color: '#3388ff',
        weight: 4,
        opacity: 1,
        lineCap: 'round',
        lineJoin: 'round',
        smoothFactor: 1
    });

    const fadingTrails = Array.from({ length: 3 }, (_, i) => {
        return L.polyline([], { 
            color: '#3388ff',
            weight: 4,
            opacity: 0.6 - (i * 0.2),
            lineCap: 'round',
            lineJoin: 'round',
            smoothFactor: 1
        });
    });

    mainPolyline.addTo(map);
    fadingTrails.forEach(trail => trail.addTo(map));

    let currentIndex = 0;
    let isFading = false;
    let fadeProgress = 0;

    function animate() {
        if (currentIndex >= flightCoords.length - 1) {
            if (!isFading) {
                isFading = true;
                fadeProgress = 0;
            }
            
            // Smooth fade out
            if (fadeProgress <= 1) {
                const opacity = 1 - fadeProgress;
                mainPolyline.setStyle({ opacity: opacity });
                fadingTrails.forEach((trail, i) => {
                    const trailOpacity = Math.max(0, (0.6 - (i * 0.2)) * opacity);
                    trail.setStyle({ opacity: trailOpacity });
                });
                
                fadeProgress += 0.02; // Adjust for faster/slower fade
                requestAnimationFrame(animate);
            } else {
                // Clean up after fade
                mainPolyline.remove();
                fadingTrails.forEach(trail => trail.remove());
            }
            return;
        }

        const mainTrailStart = Math.max(0, currentIndex - trailLength);
        const currentTrail = flightCoords.slice(mainTrailStart, currentIndex + 1);
        mainPolyline.setLatLngs(currentTrail);

        fadingTrails.forEach((trail, i) => {
            const fadeStart = Math.max(0, mainTrailStart - ((i + 1) * trailLength / 3));
            const fadeEnd = mainTrailStart;
            const fadingSection = flightCoords.slice(fadeStart, fadeEnd);
            trail.setLatLngs(fadingSection);
        });

        currentIndex += stepSize;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return {
        mainPolyline,
        fadingTrails
    };
}
//SUGGESTIONS
function populateCountryDropdown() {
    const countrySelect = document.getElementById('flightCountry');
    countrySelect.innerHTML = `
        <option value="">Select Country</option>
        ${countries.map(country => 
            `<option value="${country.code}">${country.name}</option>`
        ).join('')}
    `;
}

function showSuggestions(input, suggestions) {
    let suggestionsDiv = input.nextElementSibling;
    if (!suggestionsDiv || !suggestionsDiv.classList.contains('suggestions')) {
        suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'suggestions';
        input.parentNode.insertBefore(suggestionsDiv, input.nextSibling);
    }
    
    if (suggestions.length > 0) {
        suggestionsDiv.innerHTML = suggestions
            .map(text => `<div class="suggestion-item">${text}</div>`)
            .join('');
        suggestionsDiv.style.display = 'block';
        
        // Add click handlers
        suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.textContent;
                suggestionsDiv.style.display = 'none';
            });
        });
    } else {
        suggestionsDiv.style.display = 'none';
    }
}

// function setupAutocomplete(inputId, getOptions) {
//     const input = document.getElementById(inputId);
//     if (!input) return;

//     // Create dropdown container
//     const dropdownId = `${inputId}-dropdown`;
//     let dropdown = document.getElementById(dropdownId);
//     if (!dropdown) {
//         dropdown = document.createElement('div');
//         dropdown.id = dropdownId;
//         dropdown.className = 'autocomplete-dropdown';
//         input.parentNode.insertBefore(dropdown, input.nextSibling);
//     }

//     // Style for dropdown
//     dropdown.style.display = 'none';
//     dropdown.style.position = 'absolute';
//     dropdown.style.zIndex = '1000';
//     dropdown.style.maxHeight = '200px';
//     dropdown.style.overflowY = 'auto';
//     dropdown.style.backgroundColor = 'white';
//     dropdown.style.border = '1px solid #ddd';
//     dropdown.style.borderRadius = '4px';
//     dropdown.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
//     dropdown.style.width = `${input.offsetWidth}px`;

//     let currentFocus = -1;

//     input.addEventListener('input', function(e) {
//         const val = this.value.toLowerCase();
//         const options = getOptions();
        
//         // Clear previous dropdown content
//         dropdown.innerHTML = '';
//         dropdown.style.display = 'none';
//         currentFocus = -1;

//         if (!val) return;

//         // Filter and display matching options
//         const matches = options.filter(opt => 
//             opt.toLowerCase().includes(val)
//         );

//         if (matches.length > 0) {
//             dropdown.style.display = 'block';
//             matches.forEach((match, index) => {
//                 const div = document.createElement('div');
//                 div.className = 'autocomplete-item';
//                 div.style.padding = '8px 12px';
//                 div.style.cursor = 'pointer';
//                 div.style.borderBottom = '1px solid #eee';

//                 // Highlight matching part
//                 const matchIndex = match.toLowerCase().indexOf(val);
//                 div.innerHTML = match.substring(0, matchIndex) +
//                     `<strong>${match.substring(matchIndex, matchIndex + val.length)}</strong>` +
//                     match.substring(matchIndex + val.length);

//                 div.addEventListener('click', function() {
//                     input.value = match;
//                     dropdown.style.display = 'none';
//                 });

//                 div.addEventListener('mouseover', function() {
//                     removeActive();
//                     currentFocus = index;
//                     addActive();
//                 });

//                 dropdown.appendChild(div);
//             });
//         }
//     });

//     // Handle keyboard navigation
//     input.addEventListener('keydown', function(e) {
//         const items = dropdown.getElementsByClassName('autocomplete-item');
//         if (!items.length) return;

//         if (e.keyCode === 40) { // Down arrow
//             currentFocus++;
//             addActive();
//             e.preventDefault();
//         } else if (e.keyCode === 38) { // Up arrow
//             currentFocus--;
//             addActive();
//             e.preventDefault();
//         } else if (e.keyCode === 13) { // Enter
//             e.preventDefault();
//             if (currentFocus > -1) {
//                 if (items[currentFocus]) {
//                     items[currentFocus].click();
//                 }
//             }
//         }

//         if (currentFocus >= items.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = items.length - 1;
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener('click', function(e) {
//         if (e.target !== input) {
//             dropdown.style.display = 'none';
//         }
//     });

//     function addActive() {
//         const items = dropdown.getElementsByClassName('autocomplete-item');
//         if (!items.length) return;

//         removeActive();
//         if (currentFocus >= items.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = items.length - 1;

//         items[currentFocus].style.backgroundColor = '#f0f0f0';
//     }

//     function removeActive() {
//         const items = dropdown.getElementsByClassName('autocomplete-item');
//         Array.from(items).forEach(item => {
//             item.style.backgroundColor = 'white';
//         });
//     }
// }



// function setupAutocomplete(inputId, getOptions) {
//     const input = document.getElementById(inputId);
//     if (!input) return;

//     // ---------------------------------------------------------
//     // Prevent duplicate initialization
//     // ---------------------------------------------------------
//     if (input._autocompleteCleanup) {
//         input._autocompleteCleanup();
//     }

//     // Create dropdown container
//     const dropdownId = `${inputId}-dropdown`;
//     let dropdown = document.getElementById(dropdownId);

//     if (!dropdown) {
//         dropdown = document.createElement('div');
//         dropdown.id = dropdownId;
//         dropdown.className = 'autocomplete-dropdown';

//         input.parentNode.insertBefore(dropdown, input.nextSibling);
//     }

//     // ---------------------------------------------------------
//     // Dropdown style
//     // ---------------------------------------------------------
//     dropdown.style.display = 'none';
//     dropdown.style.position = 'absolute';
//     dropdown.style.zIndex = '1000';
//     dropdown.style.maxHeight = '200px';
//     dropdown.style.overflowY = 'auto';
//     dropdown.style.backgroundColor = 'white';
//     dropdown.style.border = '1px solid #ddd';
//     dropdown.style.borderRadius = '4px';
//     dropdown.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
//     dropdown.style.width = `${input.offsetWidth}px`;

//     let currentFocus = -1;

//     // ---------------------------------------------------------
//     // INPUT
//     // ---------------------------------------------------------
//     function handleInput() {
//         const val = this.value.trim().toLowerCase();

//         // Always clear previous results
//         dropdown.innerHTML = '';
//         dropdown.style.display = 'none';
//         currentFocus = -1;

//         if (!val) return;

//         // -----------------------------------------------------
//         // Get options and remove duplicates
//         // Case-insensitive + trim
//         // -----------------------------------------------------
//         const options = [...new Map(
//             getOptions()
//                 .filter(opt => opt != null)
//                 .map(opt => String(opt).trim())
//                 .filter(opt => opt.length > 0)
//                 .map(opt => [opt.toLowerCase(), opt])
//         ).values()];

//         // Filter
//         const matches = options.filter(opt =>
//             opt.toLowerCase().includes(val)
//         );

//         if (!matches.length) return;

//         dropdown.style.display = 'block';

//         // -----------------------------------------------------
//         // Create suggestions
//         // -----------------------------------------------------
//         matches.forEach((match, index) => {
//             const div = document.createElement('div');

//             div.className = 'autocomplete-item';

//             div.style.padding = '8px 12px';
//             div.style.cursor = 'pointer';
//             div.style.borderBottom = '1px solid #eee';

//             // Highlight matching text
//             const matchIndex = match.toLowerCase().indexOf(val);

//             div.innerHTML =
//                 match.substring(0, matchIndex) +
//                 `<strong>${match.substring(
//                     matchIndex,
//                     matchIndex + val.length
//                 )}</strong>` +
//                 match.substring(matchIndex + val.length);

//             // Click suggestion
//             div.addEventListener('click', function() {
//                 input.value = match;
//                 dropdown.style.display = 'none';
//                 dropdown.innerHTML = '';
//                 currentFocus = -1;

//                 // Optional: trigger change/input event
//                 input.dispatchEvent(new Event('change', {
//                     bubbles: true
//                 }));
//             });

//             // Mouse hover
//             div.addEventListener('mouseover', function() {
//                 removeActive();

//                 currentFocus = index;

//                 addActive();
//             });

//             dropdown.appendChild(div);
//         });
//     }

//     // ---------------------------------------------------------
//     // KEYBOARD NAVIGATION
//     // ---------------------------------------------------------
//     function handleKeydown(e) {
//         const items = dropdown.getElementsByClassName(
//             'autocomplete-item'
//         );

//         if (!items.length) return;

//         if (e.key === 'ArrowDown') {
//             currentFocus++;

//             if (currentFocus >= items.length) {
//                 currentFocus = 0;
//             }

//             addActive();
//             e.preventDefault();

//         } else if (e.key === 'ArrowUp') {
//             currentFocus--;

//             if (currentFocus < 0) {
//                 currentFocus = items.length - 1;
//             }

//             addActive();
//             e.preventDefault();

//         } else if (e.key === 'Enter') {
//             if (currentFocus > -1 && items[currentFocus]) {
//                 e.preventDefault();
//                 items[currentFocus].click();
//             }
//         } else if (e.key === 'Escape') {
//             dropdown.style.display = 'none';
//             currentFocus = -1;
//         }
//     }

//     // ---------------------------------------------------------
//     // CLICK OUTSIDE
//     // ---------------------------------------------------------
//     function handleDocumentClick(e) {
//         if (
//             e.target !== input &&
//             !dropdown.contains(e.target)
//         ) {
//             dropdown.style.display = 'none';
//             currentFocus = -1;
//         }
//     }

//     // ---------------------------------------------------------
//     // ACTIVE ITEM
//     // ---------------------------------------------------------
//     function addActive() {
//         const items = dropdown.getElementsByClassName(
//             'autocomplete-item'
//         );

//         if (!items.length) return;

//         removeActive();

//         if (currentFocus >= items.length) {
//             currentFocus = 0;
//         }

//         if (currentFocus < 0) {
//             currentFocus = items.length - 1;
//         }

//         items[currentFocus].style.backgroundColor = '#f0f0f0';
//     }

//     function removeActive() {
//         const items = dropdown.getElementsByClassName(
//             'autocomplete-item'
//         );

//         Array.from(items).forEach(item => {
//             item.style.backgroundColor = 'white';
//         });
//     }

//     // ---------------------------------------------------------
//     // Attach listeners
//     // ---------------------------------------------------------
//     input.addEventListener('input', handleInput);
//     input.addEventListener('keydown', handleKeydown);
//     document.addEventListener('click', handleDocumentClick);

//     // ---------------------------------------------------------
//     // Cleanup function
//     // Used if setupAutocomplete() is called again
//     // ---------------------------------------------------------
//     input._autocompleteCleanup = function() {
//         input.removeEventListener('input', handleInput);
//         input.removeEventListener('keydown', handleKeydown);
//         document.removeEventListener('click', handleDocumentClick);

//         dropdown.innerHTML = '';
//         dropdown.style.display = 'none';

//         delete input._autocompleteCleanup;
//     };
// }





function setupAutocomplete(inputId, getOptions) {
    const input = document.getElementById(inputId);
    if (!input) return;

    // ---------------------------------------------------------
    // Prevent duplicate initialization
    // ---------------------------------------------------------
    if (input._autocompleteCleanup) {
        input._autocompleteCleanup();
    }

    // ---------------------------------------------------------
    // Wrapper
    // ---------------------------------------------------------
    const wrapper = input.closest('.autocomplete-wrapper');

    if (!wrapper) {
        console.warn(`No .autocomplete-wrapper found for #${inputId}`);
        return;
    }

    // ---------------------------------------------------------
    // Dropdown
    // ---------------------------------------------------------
    const dropdownId = `${inputId}-dropdown`;

    let dropdown = document.getElementById(dropdownId);

    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = dropdownId;
        dropdown.className = 'autocomplete-dropdown';

        wrapper.appendChild(dropdown);
    }

    dropdown.innerHTML = '';
    dropdown.style.display = 'none';

    let currentFocus = -1;


    // =========================================================
    // NORMALIZE TEXT
    // =========================================================
    // "école"     -> "ecole"
    // "École"     -> "ecole"
    // "SAINT"     -> "saint"
    // =========================================================

    function normalizeText(text) {
        return String(text)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
    }


    // =========================================================
    // GET OPTIONS
    // =========================================================

    function getCleanOptions() {
        return [
            ...new Map(
                getOptions()
                    .filter(opt => opt != null)
                    .map(opt => String(opt).trim())
                    .filter(opt => opt.length > 0)
                    .map(opt => [
                        normalizeText(opt),
                        opt
                    ])
            ).values()
        ];
    }


    // =========================================================
    // INPUT
    // =========================================================

    function handleInput() {

        const rawValue = input.value.trim();
        const searchValue = normalizeText(rawValue);

        dropdown.innerHTML = '';
        dropdown.style.display = 'none';

        currentFocus = -1;

        if (!searchValue) {
            return;
        }

        const options = getCleanOptions();


        // -----------------------------------------------------
        // Filter
        // -----------------------------------------------------

        const matches = options
            .filter(option => {
                return normalizeText(option)
                    .includes(searchValue);
            })


            // -------------------------------------------------
            // Prioritize "starts with"
            // -------------------------------------------------

            .sort((a, b) => {

                const aNormalized = normalizeText(a);
                const bNormalized = normalizeText(b);

                const aStarts =
                    aNormalized.startsWith(searchValue);

                const bStarts =
                    bNormalized.startsWith(searchValue);

                if (aStarts !== bStarts) {
                    return Number(bStarts) - Number(aStarts);
                }

                return a.localeCompare(
                    b,
                    undefined,
                    {
                        sensitivity: 'base'
                    }
                );
            })


            // -------------------------------------------------
            // Maximum results
            // -------------------------------------------------

            .slice(0, 10);


        if (!matches.length) {
            return;
        }


        dropdown.style.display = 'block';


        // =====================================================
        // CREATE ITEMS
        // =====================================================

        matches.forEach((match, index) => {

            const div = document.createElement('div');

            div.className = 'autocomplete-item';

            div.setAttribute('role', 'option');


            // -------------------------------------------------
            // Find match ignoring accents
            // -------------------------------------------------

            const normalizedMatch = normalizeText(match);

            const matchIndex =
                normalizedMatch.indexOf(searchValue);


            // -------------------------------------------------
            // Highlight
            // -------------------------------------------------

            if (matchIndex !== -1) {

                /*
                 * Because accented characters can change the
                 * length after normalization, we find the
                 * corresponding original characters.
                 *
                 * For most names this gives the expected result.
                 */

                let originalStart = 0;
                let normalizedLength = 0;

                for (let i = 0; i < match.length; i++) {

                    const charNormalized =
                        normalizeText(match[i]);

                    if (
                        normalizedLength <= matchIndex
                    ) {
                        originalStart = i;
                    }

                    normalizedLength +=
                        charNormalized.length;

                    if (
                        normalizedLength >=
                        matchIndex + searchValue.length
                    ) {
                        break;
                    }
                }


                let originalEnd = originalStart;

                let currentLength = 0;

                for (
                    let i = originalStart;
                    i < match.length;
                    i++
                ) {

                    currentLength +=
                        normalizeText(match[i]).length;

                    originalEnd = i + 1;

                    if (
                        currentLength >=
                        searchValue.length
                    ) {
                        break;
                    }
                }


                div.appendChild(
                    document.createTextNode(
                        match.substring(
                            0,
                            originalStart
                        )
                    )
                );


                const strong =
                    document.createElement('strong');

                strong.textContent =
                    match.substring(
                        originalStart,
                        originalEnd
                    );

                div.appendChild(strong);


                div.appendChild(
                    document.createTextNode(
                        match.substring(originalEnd)
                    )
                );

            } else {

                div.textContent = match;
            }


            // -------------------------------------------------
            // Click
            // -------------------------------------------------

            div.addEventListener('click', function () {
                selectSuggestion(match);
            });


            // -------------------------------------------------
            // Mouse
            // -------------------------------------------------

            div.addEventListener('mouseenter', function () {

                removeActive();

                currentFocus = index;

                addActive();
            });


            dropdown.appendChild(div);
        });
    }


    // =========================================================
    // SELECT
    // =========================================================

    function selectSuggestion(value) {

        input.value = value;

        closeDropdown();

        input.dispatchEvent(
            new Event('input', {
                bubbles: true
            })
        );

        input.dispatchEvent(
            new Event('change', {
                bubbles: true
            })
        );
    }


    // =========================================================
    // KEYBOARD
    // =========================================================

    function handleKeydown(e) {

        const items =
            dropdown.querySelectorAll(
                '.autocomplete-item'
            );

        if (!items.length) {
            return;
        }


        // -----------------------------------------------------
        // Arrow Down
        // -----------------------------------------------------

        if (e.key === 'ArrowDown') {

            e.preventDefault();

            currentFocus++;

            if (
                currentFocus >=
                items.length
            ) {
                currentFocus = 0;
            }

            addActive();
        }


        // -----------------------------------------------------
        // Arrow Up
        // -----------------------------------------------------

        else if (e.key === 'ArrowUp') {

            e.preventDefault();

            currentFocus--;

            if (currentFocus < 0) {
                currentFocus =
                    items.length - 1;
            }

            addActive();
        }


        // -----------------------------------------------------
        // Enter
        // -----------------------------------------------------

        else if (e.key === 'Enter') {

            if (
                currentFocus >= 0 &&
                currentFocus < items.length
            ) {

                e.preventDefault();

                selectSuggestion(
                    items[currentFocus].textContent
                );
            }
        }


        // -----------------------------------------------------
        // Escape
        // -----------------------------------------------------

        else if (e.key === 'Escape') {

            closeDropdown();
        }
    }


    // =========================================================
    // ACTIVE ITEM
    // =========================================================

    function addActive() {

        const items =
            dropdown.querySelectorAll(
                '.autocomplete-item'
            );

        if (!items.length) {
            return;
        }

        removeActive();


        if (currentFocus >= items.length) {
            currentFocus = 0;
        }

        if (currentFocus < 0) {
            currentFocus =
                items.length - 1;
        }


        const activeItem =
            items[currentFocus];

        activeItem.classList.add('active');

        activeItem.scrollIntoView({
            block: 'nearest'
        });
    }


    function removeActive() {

        const items =
            dropdown.querySelectorAll(
                '.autocomplete-item'
            );

        items.forEach(item => {
            item.classList.remove('active');
        });
    }


    // =========================================================
    // CLOSE
    // =========================================================

    function closeDropdown() {

        dropdown.style.display = 'none';

        dropdown.innerHTML = '';

        currentFocus = -1;
    }


    // =========================================================
    // CLICK OUTSIDE
    // =========================================================

    function handleDocumentClick(e) {

        if (!wrapper.contains(e.target)) {
            closeDropdown();
        }
    }


    // =========================================================
    // LISTENERS
    // =========================================================

    input.addEventListener(
        'input',
        handleInput
    );

    input.addEventListener(
        'keydown',
        handleKeydown
    );

    document.addEventListener(
        'click',
        handleDocumentClick
    );


    // =========================================================
    // CLEANUP
    // =========================================================

    input._autocompleteCleanup = function () {

        input.removeEventListener(
            'input',
            handleInput
        );

        input.removeEventListener(
            'keydown',
            handleKeydown
        );

        document.removeEventListener(
            'click',
            handleDocumentClick
        );

        dropdown.innerHTML = '';

        dropdown.style.display = 'none';

        delete input._autocompleteCleanup;
    };
}





// async function handleMySitesBoxActivation() {
//     try {
//         const favoriteSites = await getUniqueFavoriteSites();
        
//         // Fetch weather data first
//         if (favoriteSites.length > 0 && navigator.onLine) {
//             // console.debug('Fetching/updating weather data for all sites...');
//             for (const site of favoriteSites) {
//                 if (site.coordinates && 
//                     Array.isArray(site.coordinates) && 
//                     site.coordinates.length === 2) {
//                     const [lat, lon] = site.coordinates;
//                     await updateWeather(site.name, lat, lon);
//                 }
//             }
//         }

//         // Then create and display the cards
//         await initSitesSection();

//     } catch (error) {
//         console.error('Error in handleMySitesBoxActivation:', error);
//     }
// }

// Helper function to validate coordinates
function hasValidCoordinates(site) {
    return site.coordinates && 
           Array.isArray(site.coordinates) && 
           site.coordinates.length === 2 && 
           !isNaN(site.coordinates[0]) && 
           !isNaN(site.coordinates[1]);
}



// Add a cleanup function to clear the interval when leaving the section
// function cleanupMySitesBox() {
//     if (window.weatherUpdateInterval) {
//         clearInterval(window.weatherUpdateInterval);
//         window.weatherUpdateInterval = null;
//     }
// }


// function updateSitesDisplay(favoriteSites) {
//     const sitesContainer = document.querySelector('.sites-container');
//     if (!sitesContainer) return;

//     // Clear existing content
//     sitesContainer.innerHTML = '';
    
//     // Use createSiteCard for each site
//     favoriteSites.forEach(site => {
//         const card = createSiteCard(site);
//         sitesContainer.appendChild(card);
//     });
// }
async function handleFlightsBoxActivation() {
    try {
        if (!currentSortedFlights || currentSortedFlights.length === 0) {
            const flights = await dbOperations.getAllFromStore(STORES.flights);
            if (flights && flights.length > 0) {
                currentSortedFlights = flights;
                if (currentView === 'grid') {
                    await displayGridView(flights);
                } else {
                    displayListView(flights);
                }
            } else {
                const container = document.getElementById('flightsGrid');
                container.innerHTML = '<div class="no-flights">No flights found. Add a flight to start filling this space.</div>';
                return;
            }
        } else {
            if (currentView === 'grid') {
                await displayGridView(currentSortedFlights);
            } else {
                displayListView(currentSortedFlights);
            }
        }

        // Initialize maps for grid view only
        if (currentView === 'grid') {
            setTimeout(() => {
                document.querySelectorAll('.card-map').forEach(mapDiv => {
                    if (!mapDiv.hasChildNodes()) {
                        const index = mapDiv.id.split('-')[1];
                        const flight = currentSortedFlights[index];
                        
                        if (flight?.coordinates) {
                            initializeMiniMap(flight, mapDiv);
                        }
                    }
                });
            }, 100);
        }


    } catch (error) {
        console.error('Error in handleFlightsBoxActivation:', error);
        const container = document.getElementById('flightsGrid');
        container.innerHTML = '<div class="error">Error loading flights</div>';
    }
}

function setupStatsFilterButtons(allFlights) {
    const filterButtons = document.querySelectorAll('.stats-filter-btn');
    
    // Calculate counts for each flight type
    const counts = {
        all: allFlights.length,
        paragliding: allFlights.filter(flight => flight.type === 'paragliding').length,
        delta: allFlights.filter(flight => flight.type === 'delta').length,
        paramotor: allFlights.filter(flight => flight.type === 'paramotor').length
    };
    
    // Store references to the new buttons
    const newButtons = [];
    
    // Update button text with counts
    filterButtons.forEach(button => {
        const filterType = button.dataset.filter;
        const count = counts[filterType] || 0;
        
        // Store the original label without count
        if (!button.dataset.originalLabel) {
            button.dataset.originalLabel = button.textContent;
        }
        
        // Update button text with count
        button.innerHTML = `${button.dataset.originalLabel} <span class="filter-count">(${count})</span>`;
        
        // Clear existing event listeners (to prevent duplicates)
        const newButton = button.cloneNode(true);
        
        // Preserve the active state
        if (button.classList.contains('active')) {
            newButton.classList.add('active');
        }
        
        // Add zero-count class if count is 0
        if (count === 0) {
            newButton.classList.add('zero-count');
            // Don't disable the "all" button even if total count is 0
            if (filterType !== 'all') {
                newButton.disabled = true;
            }
        } else {
            newButton.classList.remove('zero-count');
            newButton.disabled = false;
        }
        
        button.parentNode.replaceChild(newButton, button);
        newButtons.push(newButton);
        
        // Add click event listener to the new button
        newButton.addEventListener('click', () => {
            // Skip if button is disabled
            if (newButton.disabled) return;
            
            // Remove active class from all buttons
            newButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            newButton.classList.add('active');
            
            // Get the filter type
            const filterType = newButton.dataset.filter;
            
            // Update stats with the selected filter
            updateStatsWithFilter(allFlights, filterType);
        });
    });
    
    // Ensure "All" button is active by default if no button is active
    const hasActiveButton = newButtons.some(btn => btn.classList.contains('active'));
    if (!hasActiveButton && newButtons.length > 0) {
        newButtons[0].classList.add('active');
    }
}


async function updateStatsWithFilter(allFlights, filterType) {
    // Filter flights based on the selected type
    let filteredFlights;
    
    if (filterType === 'all') {
        filteredFlights = allFlights;
    } else {
        filteredFlights = allFlights.filter(flight => flight.type === filterType);
    }
    
    // Update summary stats with filtered data
    updateSummaryStats(filteredFlights);
    await refreshFlightSummaries();
    // Create/update charts with filtered data
    createCharts(filteredFlights);
    
    // Update the heat map if it exists
    await updateHeatMapWithFilter(filteredFlights);
}

// Simplify your updateHeatMapWithFilter function
async function updateHeatMapWithFilter(filteredFlights) {
    try {
        if (filteredFlights && filteredFlights.length > 0) {
            await createHeatMap('flight-map', filteredFlights);
        } else {
            // If no flights, initialize empty map
            heatMap = await safelyInitializeMap('flight-map');
            if (heatMap) {
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(heatMap);
            }
        }
    } catch (error) {
        console.error('Error in updateHeatMapWithFilter:', error);
    }
}




async function handleStatsBoxActivation() {
    try {
        const flights = await dbOperations.getAllFromStore(STORES.flights);
        
        // Initialize with all flights
        await updateStatsWithFilter(flights || [], 'all');
        // badgesSummary(flights || []);
        // Set up filter buttons
        setupStatsFilterButtons(flights || []);
        
        // Reset active button to "All"
        const filterButtons = document.querySelectorAll('.stats-filter-btn');
        filterButtons.forEach(button => {
            if (button.dataset.filter === 'all') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
    } catch (error) {
        console.error('Error in handleStatsBoxActivation:', error);
    }
}
async function toggleGearPreview() {
    const preview = document.getElementById('gearPreview');
    const button = document.querySelector('.expand-details-button');
    const buttonText = button.querySelector('.button-text');
    preview.classList.toggle('expanded');
    button.classList.toggle('expanded');
    
    // Update button text
    buttonText.textContent = preview.classList.contains('expanded') 
        ? 'Hide Profile Details' 
        : 'Show Profile Details';

    // If expanding the preview, fetch fresh data and update
    if (preview.classList.contains('expanded')) {
        try {
            // Get fresh data from IndexedDB
            const extendedProfileData = await dbOperations.getData(STORES.profile, 'extendedProfile') || {
                qualifications: [],
                Courses: [],
                documents: []
            };
            
            // Update local profileData object
            profileData.qualifications = extendedProfileData.qualifications || [];
            profileData.Courses = extendedProfileData.Courses || [];
            profileData.documents = extendedProfileData.documents || [];

            // Update the preview with fresh data
            await updateGearPreview();
        } catch (error) {
            console.error('Error updating preview:', error);
        }
    }
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    // Format as DD/MM/YY
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    
    return `${day}/${month}/${year}`;

}



// Add these functions to refresh the qualifications and documents in the modal
function refreshQualificationsInModal() {
    const qualificationsList = document.getElementById('qualificationsList');
    qualificationsList.innerHTML = '';
    
    profileData.qualifications.forEach((qual, index) => {
        const qualificationItem = document.createElement('div');
        qualificationItem.className = 'qualification-item-edit';
        qualificationItem.innerHTML = `
            <div class="form-group">
                <div>
                    <label>Qualification Name</label>
                    <input type="text" class="qualificationName" value="${qual.name}" placeholder="Enter qualification name">
                </div>
                <div>
                    <label>School</label>
                    <input type="text" class="qualificationSchool" value="${qual.school}" placeholder="Enter school name">
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" class="qualificationDate" value="${qual.date}">
                </div>
                <div class="completed-checkbox">
                    <label>
                        <input type="checkbox" class="qualificationCompleted" ${qual.completed ? 'checked' : ''}>
                        Completed
                    </label>
                </div>
            </div>
            <button type="button" class="secondary-button delete-button" onclick="deleteQualification(${index})">Delete</button>
        `;
        
        // Add input listeners to all inputs including checkbox
        qualificationItem.querySelectorAll('input').forEach(input => {
            const eventType = input.type === 'checkbox' ? 'change' : 'input';
            input.addEventListener(eventType, () => {
                gearChanged = true;
                showSaveChangesButton();
            });
        });
        
        qualificationsList.appendChild(qualificationItem);
    });

    // Reinitialize date pickers for all qualifications
    const dateInputs = document.querySelectorAll('#qualificationsList .qualificationDate');
    dateInputs.forEach(input => {
        flatpickr(input, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
}


function refreshDocumentsInModal() {
    const documentsList = document.getElementById('documentsList');
    documentsList.innerHTML = '';
    
    profileData.documents.forEach((doc, index) => {
        const documentItem = document.createElement('div');
        documentItem.className = 'document-item-edit';
        documentItem.innerHTML = `
            <div class="form-group">
                <div>
                    <label>Document Name</label>
                    <input type="text" class="documentName" value="${doc.name || ''}" placeholder="Enter document name">
                </div>
                <div>
                    
                    <input type="file" class="documentFile" accept="image/*,.pdf" style="display: none;">
                    <div class="document-upload-button">
                        <div class="document-preview modal-preview">
                            ${doc.file && doc.file.startsWith('data:image') ? 
                                `<img src="${doc.file}" style="width: 100%; height: 100%; object-fit: cover;">` : 
                                '📄'}
                        </div>
                        <span>${doc.file ? 'Change Document' : 'Upload'}</span>
                    </div>
                </div>
            </div>
            <button type="button" class="secondary-button delete-button" onclick="deleteDocument(${index})">Delete</button>
        `;

        // Add click handler for preview
        if (doc.file && doc.file.startsWith('data:image')) {
            const preview = documentItem.querySelector('.modal-preview');
            preview.style.cursor = 'pointer';
            preview.onclick = (e) => {
                e.stopPropagation(); // Prevent triggering file upload
                const options = {
                    dataSource: [{
                        src: doc.file,
                        w: 1000,
                        h: 1000
                    }],
                    showHideAnimationType: 'fade'
                };
                
                const pswp = new PhotoSwipe(options);
                pswp.init();
            };
        }

        documentsList.appendChild(documentItem);
        
        // Add input listeners
        const uploadButton = documentItem.querySelector('.document-upload-button');
        const fileInput = documentItem.querySelector('.documentFile');
        
        uploadButton.onclick = () => fileInput.click();
        
        documentItem.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                gearChanged = true;
                showSaveChangesButton();
            });
            if (input.type === 'file') {
                input.addEventListener('change', handleDocumentUpload);
            }
        });
    });
}
function updateFavoriteSiteButton(button, isFavorite) {
    const textSpan = button.querySelector('.favorite-text');
    if (textSpan) {
        textSpan.textContent = isFavorite ? 'Remove SITE from Favorites' : 'Add SITE to Favorites';
    }
    
    // Update button appearance
    button.classList.toggle('is-favorite', isFavorite);
}






function createAltitudeChart(points, speeds) {
    console.log("Creating altitude chart with", points.length, "points");
    
    // Clear any existing chart
    const chartContainer = document.getElementById('altitudeChart');
    chartContainer.innerHTML = '';
    
    // Create a canvas element for the chart
    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);
    
    // Extract distance, elevation, and speed data
    let cumulativeDistance = 0;
    const distances = [0];
    const elevations = [points[0].ele];
    const rawSpeedData = [0]; // Start with 0 speed
    
    // Calculate linear distance (straight line from start to finish)
    const linearDistance = calculateDistance(
        points[0].lat, points[0].lon,
        points[points.length - 1].lat, points[points.length - 1].lon
    );
    
    // Log initial point
    console.log("Initial point:", {
        lat: points[0].lat,
        lon: points[0].lon,
        ele: points[0].ele,
        time: points[0].time
    });
    
    // Calculate flight duration in minutes
    const flightDurationMs = new Date(points[points.length - 1].time) - new Date(points[0].time);
    const flightDurationMin = flightDurationMs / 60000;
    
    for (let i = 1; i < points.length; i++) {
        const segmentDistance = calculateDistance(
            points[i-1].lat,
            points[i-1].lon,
            points[i].lat,
            points[i].lon
        );
        cumulativeDistance += segmentDistance;
        distances.push(cumulativeDistance);
        elevations.push(points[i].ele);
        
        // Add speed data if available (i-1 because speeds array is one element shorter)
        if (speeds && speeds[i-1] !== undefined) {
            rawSpeedData.push(speeds[i-1]);
        } else {
            // If no speed data, use 0 or the previous value
            rawSpeedData.push(rawSpeedData.length > 0 ? rawSpeedData[rawSpeedData.length - 1] : 0);
        }
    }
    
    const fixedExtremeElevations = fixExtremeOutliers(elevations, distances);
    
    // Then apply smoothing
    const smoothedElevations = applyMovingAverage(fixedExtremeElevations, 15);


    
    const gainElevations = applyMovingAverage(
        fixedExtremeElevations,
        3
    );
    
    const elevationGainTotal = calculateElevationGain(
        gainElevations,
        0
    );
    
    
    
    // Find more accurate min/max elevation using smoothed data
    // Round to nearest 10m for min elevation like Leonardo might be doing
    const minEle = Math.ceil(Math.min(...smoothedElevations) / 10) * 10;
    const maxEle = Math.round(Math.max(...smoothedElevations) / 10) * 10;
    
    // Calculate linear speed (straight line distance / time)
    const linearSpeedKmh = (linearDistance / flightDurationMin) * 60;
    
    // Apply moving average to smooth speed data with a larger window
    const windowSize = 20; // Increased from 10 to 20 for smoother speed curve
    const smoothedSpeedData = applyMovingAverage(rawSpeedData, windowSize);
    
    // Find the first point with significant movement (speed > 5 km/h)
    // This helps trim the initial waiting period at takeoff
    const speedThreshold = 5; // km/h
    let startIndex = 0;
    let foundLaunch = false;
    
    for (let i = 1; i < points.length && !foundLaunch; i++) {
        const segmentDistance = calculateDistance(
            points[i-1].lat, points[i-1].lon,
            points[i].lat, points[i].lon
        );
        
        const timeDiff = (new Date(points[i].time) - new Date(points[i-1].time)) / 1000; // seconds
        
        if (timeDiff > 0) {
            const segmentSpeed = (segmentDistance / timeDiff) * 3600; // km/h
            
            // Check if we've started moving significantly (launch detected)
            if (segmentSpeed > speedThreshold) {
                // Look back a few points to include the run before launch
                startIndex = Math.max(0, i - 5);
                foundLaunch = true;
                console.log(`Launch detected at point ${i}, setting start index to ${startIndex}`);
            }
        }
    }
    
    // Create trimmed arrays for display
    let trimmedPoints = points;
    let trimmedDistances = distances;
    let trimmedElevations = smoothedElevations;
    let trimmedSpeeds = smoothedSpeedData;
    let trimmedRawSpeeds = rawSpeedData;
    
    // If we found a valid start point, trim the data arrays
    if (startIndex > 0 && startIndex < distances.length - 20) { // Ensure we have enough points left
        console.log(`Trimming initial ${startIndex} points with no movement (waiting at takeoff)`);
        
        // Store the original points array for mapping
        trimmedPoints = points.slice(startIndex);
        
        // Adjust distances to start from 0
        const startDistance = distances[startIndex];
        trimmedDistances = distances.slice(startIndex).map(d => d - startDistance);
        trimmedElevations = smoothedElevations.slice(startIndex);
        trimmedSpeeds = smoothedSpeedData.slice(startIndex);
        trimmedRawSpeeds = rawSpeedData.slice(startIndex);
        
        console.log("After trimming:", {
            points: trimmedDistances.length,
            startElevation: trimmedElevations[0] + "m",
            startDistance: "0km"
        });
    }
    
    // Calculate max and average speed more accurately
    // Remove outliers (speeds > 50 km/h for paragliding)
    const filteredSpeeds = trimmedSpeeds.filter(speed => speed < 50);
    const maxSpeed = Math.max(...filteredSpeeds);
    

    // Calculate average speed more like Leonardo does (distance/time)
    const avgSpeed = (cumulativeDistance / flightDurationMin) * 60;
    
    let takeoffEle = trimmedElevations[0];
    
    // Round takeoff elevation to nearest 10m
    const roundedTakeoffEle = Math.round(takeoffEle / 10) * 10;
    
    // Calculate gain from takeoff to max, which is likely what Leonardo does
    const elevationGain = maxEle - roundedTakeoffEle;
    
    // Create info panel
    const infoPanel = document.createElement('div');
    infoPanel.className = 'chart-info-panel';
    infoPanel.style.cssText = `
        padding: 8px 5px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 4px;
        font-size: 10px;
        width: 95%;
        margin-bottom: 8px;
        margin: auto;
    `;
    
    // Set default content
    infoPanel.innerHTML = `
        <strong>Distance:</strong> -- km
        <span style="margin-left: 12px;"></span>
        <strong>Altitude:</strong> -- m
        <span style="margin-left: 12px;"></span>
        <strong>Speed:</strong> -- km/h
    `;
    chartContainer.insertBefore(infoPanel, canvas);
    
    // Create the chart
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: trimmedDistances,
            datasets: [
                {
                    label: 'Altitude (m)',
                    data: trimmedElevations,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true,
                    yAxisID: 'y',
                    tension: 0.4,
                    pointRadius: 0, // Remove point markers
                    borderWidth: 2
                },
                {
                    label: 'Speed (km/h)',
                    data: trimmedSpeeds,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: false,
                    yAxisID: 'y1',
                    tension: 0.4,
                    pointRadius: 0, // Remove point markers
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            animation: false,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Distance (km)',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        callback: function(value) {
                            if (value < 1) {
                                // For distances less than 1km, show in meters
                                return Math.round(value * 1000) + 'm';
                            } else {
                                // For distances 1km and above, show in km with 1 decimal
                                return value.toFixed(1) + 'km';
                            }
                        },
                        font: {
                            size: 10
                        }
                    },
                    // Make sure the x-axis extends to the full width
                    min: 0,
                    max: Math.max(...trimmedDistances) * 1 // Add 2% padding
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Altitude (m)',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Speed (km/h)',
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
    
    // Variable to store the hover marker
    let hoverMarker = null;
    
    function handlePointerEvent(e) {
        if (!window.detailsMap) return;
        
        // Prevent scrolling when interacting with the chart
        if (e.type.startsWith('touch')) {
            e.preventDefault();
        }
        
        const rect = canvas.getBoundingClientRect();
        
        // Get the x coordinate (handle both mouse and touch)
        let clientX;
        if (e.type.startsWith('touch')) {
            // For touch events, use the first touch point
            if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
            } else {
                // If no touches (e.g., touchend), exit
                return;
            }
        } else {
            // For mouse events
            clientX = e.clientX;
        }
        
        const x = clientX - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
        
        // Get the chart area (excluding axes and labels)
        const chartArea = chart.chartArea;
        
        // Check if pointer is within the actual chart data area
        if (x >= chartArea.left && x <= chartArea.right && 
            y >= chartArea.top && y <= chartArea.bottom) {
            
            // Calculate the relative position within the chart area
            const relativeX = (x - chartArea.left) / (chartArea.right - chartArea.left);
            
            // Map to the distance range
            const minDistance = Math.min(...trimmedDistances);
            const maxDistance = Math.max(...trimmedDistances);
            const hoverDistance = minDistance + relativeX * (maxDistance - minDistance);
            
            // Find the closest point in the track
            let closestIndex = 0;
            let minDiff = Infinity;
            
            for (let i = 0; i < trimmedDistances.length; i++) {
                const diff = Math.abs(trimmedDistances[i] - hoverDistance);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = i;
                }
            }
            
            // If we found a valid point
            if (closestIndex >= 0 && closestIndex < trimmedPoints.length) {
                const point = trimmedPoints[closestIndex];
                
                // Create or update the hover marker
                if (!hoverMarker) {
                    hoverMarker = L.circleMarker([point.lat, point.lon], {
                        radius: 5,
                        color: '#3498db',
                        fillColor: '#3498db',
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1
                    }).addTo(window.detailsMap);
                } else {
                    hoverMarker.setLatLng([point.lat, point.lon]);
                }
                
                // Update the fixed info panel
                infoPanel.style.display = 'block';
                
                // Get the speed at this point
                const speed = trimmedRawSpeeds[closestIndex].toFixed(1) + ' km/h';
                const altitude = trimmedElevations[closestIndex].toFixed(0);
                
                infoPanel.innerHTML = `
                    <strong>Distance:</strong> ${trimmedDistances[closestIndex].toFixed(2)} km
                    <span style="margin-left: 12px;"></span>
                    <strong>Altitude:</strong> ${altitude} m
                    <span style="margin-left: 12px;"></span>
                    <strong>Speed:</strong> ${speed}
                `;
            }
        } else if (hoverMarker) {
            // If pointer is outside chart area but marker exists, remove it
            window.detailsMap.removeLayer(hoverMarker);
            hoverMarker = null;
            infoPanel.innerHTML = `
                <strong>Distance:</strong> -- km
                <span style="margin-left: 12px;"></span>
                <strong>Altitude:</strong> -- m
                <span style="margin-left: 12px;"></span>
                <strong>Speed:</strong> -- km/h
            `;
        }
    }
    
    // Add event listeners for mouse events
    canvas.addEventListener('mousemove', handlePointerEvent);
    
    // Add event listeners for touch events
    canvas.addEventListener('touchstart', handlePointerEvent, { passive: false });
    canvas.addEventListener('touchmove', handlePointerEvent, { passive: false });
    
    // Handle mouse/touch leave events
    function handleLeaveEvent() {
        if (hoverMarker && window.detailsMap) {
            window.detailsMap.removeLayer(hoverMarker);
            hoverMarker = null;
        }
        
        // Reset the info panel to default values
        infoPanel.innerHTML = `
            <strong>Distance:</strong> -- km
            <span style="margin-left: 12px;"></span>
            <strong>Altitude:</strong> -- m
            <span style="margin-left: 12px;"></span>
            <strong>Speed:</strong> -- km/h
        `;
    }
    
    canvas.addEventListener('mouseleave', handleLeaveEvent);
    canvas.addEventListener('touchend', handleLeaveEvent);
    canvas.addEventListener('touchcancel', handleLeaveEvent);
    
    return {
        chart: chart,
        elevationGain: elevationGainTotal
    };
}
// function calculateElevationGain(elevations, minGainStep = 0) {
//     let gain = 0;

//     for (let i = 1; i < elevations.length; i++) {
//         const diff = elevations[i] - elevations[i - 1];

//         if (diff > minGainStep) {
//             gain += diff;
//         }
//     }

//     return Math.round(gain);
// }


function calculateElevationGain(elevations, minGainStep = 0) {
    if (!elevations || elevations.length <= 2) {
        return 0;
    }

    let gain = 0;

    for (let i = 1; i < elevations.length; i++) {
        const diff = elevations[i] - elevations[i - 1];

        if (diff > minGainStep) {
            gain += diff;
        }
    }

    return Math.round(gain);
}






function createVerticalSpeedChart(points) {
    console.log("Creating vertical speed chart with", points.length, "points");
    
    // Calculate vertical speeds between points
    const distances = [0];
    const verticalSpeeds = [0];
    const times = [0]; // Store timestamps for time-based x-axis option
    let cumulativeDistance = 0;
    
    // Log initial point
    console.log("Initial point for vertical speed:", {
        lat: points[0].lat,
        lon: points[0].lon,
        ele: points[0].ele,
        time: points[0].time
    });
    
    // First, smooth the elevation data to reduce noise
    const elevations = points.map(p => p.ele);
    const smoothedElevations = applyMovingAverage(elevations, 10); // Keep at 10
    
    for (let i = 1; i < points.length; i++) {
        const segmentDistance = calculateDistance(
            points[i-1].lat, points[i-1].lon,
            points[i].lat, points[i].lon
        );
        cumulativeDistance += segmentDistance;
        distances.push(cumulativeDistance);
        
        // Store relative time in seconds from start
        const relativeTime = (new Date(points[i].time) - new Date(points[0].time)) / 1000;
        times.push(relativeTime);
        
        // Calculate vertical speed in m/s using smoothed elevations
        const timeDiff = (new Date(points[i].time) - new Date(points[i-1].time)) / 1000; // seconds
        if (timeDiff > 0) {
            const elevDiff = smoothedElevations[i] - smoothedElevations[i-1];
            const vertSpeed = elevDiff / timeDiff;
            
            if (Math.abs(vertSpeed) < 10) { // 10 m/s allows for strong thermals and acrobatics
                verticalSpeeds.push(vertSpeed);
            } else {
                // Use previous value for extreme outliers (likely GPS errors)
                verticalSpeeds.push(verticalSpeeds.length > 0 ? verticalSpeeds[verticalSpeeds.length - 1] : 0);
            }
        } else {
            verticalSpeeds.push(0);
        }
        
        // Log every 100th point for debugging
        if (i % 100 === 0 || i === points.length - 1) {
            console.log(`Vertical speed point ${i}:`, {
                distance: cumulativeDistance.toFixed(2) + "km",
                time: relativeTime.toFixed(0) + "s",
                elevation: smoothedElevations[i] + "m",
                vertSpeed: verticalSpeeds[i].toFixed(2) + "m/s"
            });
        }
    }
    
    // Calculate max distance AFTER populating the distances array
    const maxDistance = Math.max(...distances);
    // Round to nearest 0.1 km for more precision
    const chartMaxDistance = maxDistance;
    
    console.log("Distance range:", {
        min: 0,
        max: maxDistance,
        roundedMax: chartMaxDistance
    });
    
    // Verify the distance array has correct values
    console.log("Distance array check:", {
        length: distances.length,
        min: Math.min(...distances),
        max: Math.max(...distances),
        first5: distances.slice(0, 5),
        last5: distances.slice(-5)
    });
    
    // Apply lighter smoothing to get realistic values
    const fixedVerticalSpeeds = smoothStartEndVerticalSpeeds(verticalSpeeds, distances);

    // Then apply smoothing
    const smoothedVertSpeeds = applyMovingAverage(fixedVerticalSpeeds, 15);    
    // Apply a second pass of smoothing for better results
    const doubleSmoothedVertSpeeds = applyMovingAverage(smoothedVertSpeeds, 8); // Reduced from 10 to 8
    
    // Find max and min vertical speeds from the double-smoothed data
    const maxVertSpeed = Math.max(...doubleSmoothedVertSpeeds);
    const minVertSpeed = Math.min(...doubleSmoothedVertSpeeds);
    
    // Also calculate raw max/min for comparison
    const rawMaxVertSpeed = Math.max(...verticalSpeeds.filter(speed => Math.abs(speed) < 3));
    const rawMinVertSpeed = Math.min(...verticalSpeeds.filter(speed => Math.abs(speed) < 3));
    
    // Round to one decimal place for display
    const roundedMaxVertSpeed = Math.round(maxVertSpeed * 10) / 10;
    const roundedMinVertSpeed = Math.round(minVertSpeed * 10) / 10;
    
    console.log("Vertical speed summary:", {
        rawMaxClimb: rawMaxVertSpeed.toFixed(1) + "m/s",
        rawMaxSink: rawMinVertSpeed.toFixed(1) + "m/s",
        smoothedMaxClimb: maxVertSpeed.toFixed(1) + "m/s",
        smoothedMaxSink: minVertSpeed.toFixed(1) + "m/s",
        roundedMaxClimb: roundedMaxVertSpeed + "m/s",
        roundedMaxSink: roundedMinVertSpeed + "m/s"
    });
    
    const chartContainer = document.getElementById('verticalSpeedChart');
    chartContainer.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Create a reference to store the hover marker
    let hoverMarker = null;
    const infoPanel = document.createElement('div');
    infoPanel.className = 'chart-info-panel';
    infoPanel.style.cssText = `
        padding: 8px 5px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 4px;
        font-size: 10px;
        width: 95%;
        margin-bottom: 8px;
        margin: auto;
    `;
    // Set default content
    infoPanel.innerHTML = `
        <strong>Distance:</strong> -- km
        <span style="margin-left: 12px;"></span>
        <strong>Altitude:</strong> -- m
        <span style="margin-left: 12px;"></span>
        <strong>Vertical Speed:</strong> <span>-- m/s</span>
    `;
    chartContainer.insertBefore(infoPanel, canvas);
    // Create the chart with additional hover interaction
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: distances,
            datasets: [{
                label: 'Vertical Speed (m/s)',
                data: doubleSmoothedVertSpeeds,
                borderColor: '#9b59b6', // Purple
                backgroundColor: function(context) {
                    const value = context.dataset.data[context.dataIndex];
                    return value >= 0 
                        ? 'rgba(46, 204, 113, 0.2)' // Green for climb
                        : 'rgba(231, 76, 60, 0.2)'; // Red for sink
                },
                borderWidth: 1.5,
                fill: true,
                tension: 0.3, // Increased tension for smoother curve
                pointRadius: 0,
                pointHoverRadius: 3,
                segment: {
                    borderColor: function(context) {
                        const value = context.p1.parsed.y;
                        return value >= 0 
                            ? 'rgba(46, 204, 113, 1)' // Green for climb
                            : 'rgba(231, 76, 60, 1)'; // Red for sink
                    }
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove', 'touchend'],
            animation: false,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Vertical Speed (m/s)',
                        font: {
                            size: 12
                        }
                    },
                    suggestedMin: -2,
                    suggestedMax: 2,
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                x: {
                    type: 'linear', // Use linear scale for distance
                    title: {
                        display: true,
                        text: 'Distance (km)',
                        font: {
                            size: 12
                        }
                    },
                    min: 0,
                    max: maxDistance, // Use exact max distance
                    ticks: {
                        // Adjust step size based on total distance
                        stepSize: maxDistance < 2 ? 0.2 : 0.5, // Smaller step for short flights
                        callback: function(value) {
                            return value.toFixed(1) + ' km';
                        },
                        font: {
                            size: 10
                        }
                    }
                }
            },
            interaction: {
                mode: 'index',     // Show tooltip for all datasets at current index
                intersect: false,  // Don't require hovering directly over the line
                axis: 'x'          // Use x-axis for finding nearest point
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 12,
                        font: {
                            size: 11
                        }
                    }
                },
                crosshair: {
                    line: {
                        color: 'rgba(0, 0, 0, 0.3)',
                        width: 1,
                        dashPattern: [5, 5]
                    },
                    sync: {
                        enabled: false
                    },
                    zoom: {
                        enabled: false
                    }
                }
            }
            // REMOVE onHover and onLeave handlers from here
        }
    });
    
    // Function to handle both mouse and touch events
    function handlePointerEvent(e) {
        if (!window.detailsMap) return;
        
        // Prevent scrolling when interacting with the chart
        if (e.type.startsWith('touch')) {
            e.preventDefault();
        }
        
        const rect = canvas.getBoundingClientRect();
        
        // Get the x coordinate (handle both mouse and touch)
        let clientX;
        if (e.type.startsWith('touch')) {
            // For touch events, use the first touch point
            if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
            } else {
                // If no touches (e.g., touchend), exit
                return;
            }
        } else {
            // For mouse events
            clientX = e.clientX;
        }
        
        const x = clientX - rect.left;
        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
        
        // Get the chart area (excluding axes and labels)
        const chartArea = chart.chartArea;
        
        // Check if pointer is within the actual chart data area
        if (x >= chartArea.left && x <= chartArea.right && 
            y >= chartArea.top && y <= chartArea.bottom) {
            
            // Calculate the relative position within the chart area
            const relativeX = (x - chartArea.left) / (chartArea.right - chartArea.left);
            
            // Map to the distance range
            const minDistance = Math.min(...distances);
            const maxDistance = Math.max(...distances);
            const hoverDistance = minDistance + relativeX * (maxDistance - minDistance);
            
            // Find the closest point in the track
            let closestIndex = 0;
            let minDiff = Infinity;
            
            for (let i = 0; i < distances.length; i++) {
                const diff = Math.abs(distances[i] - hoverDistance);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = i;
                }
            }
            
          // If we found a valid point
          if (closestIndex >= 0 && closestIndex < points.length) {
            const point = points[closestIndex];
            
            // Create or update the hover marker
            if (!hoverMarker) {
                hoverMarker = L.circleMarker([point.lat, point.lon], {
                    radius: 5,
                    color: '#e74c3c',
                    fillColor: '#e74c3c',
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1
                }).addTo(window.detailsMap);
            } else {
                hoverMarker.setLatLng([point.lat, point.lon]);
            }
            
            // Update the fixed info panel
            infoPanel.innerHTML = `
            <strong>Distance:</strong> ${distances[closestIndex].toFixed(2)} km
            <span style="margin-left: 12px;"></span>
            <strong>Altitude:</strong> ${point.ele.toFixed(0)} m
            <span style="margin-left: 12px;"></span>
            <strong>Vertical Speed:</strong> <span style="color: ${doubleSmoothedVertSpeeds[closestIndex] >= 0 ? '#2ecc71' : '#e74c3c'}">${doubleSmoothedVertSpeeds[closestIndex].toFixed(1)} m/s</span>
        `;
        }
    } else if (hoverMarker) {
        // If pointer is outside chart area but marker exists, remove it
        window.detailsMap.removeLayer(hoverMarker);
        hoverMarker = null;
        infoPanel.innerHTML = `
        <strong>Distance:</strong> -- km
        <span style="margin-left: 12px;"></span>
        <strong>Altitude:</strong> -- m
        <span style="margin-left: 12px;"></span>
        <strong>Vertical Speed:</strong> <span>-- m/s</span>
    `;
    }
}
    
    // Add event listeners for mouse events
    canvas.addEventListener('mousemove', handlePointerEvent);
    
    // Add event listeners for touch events
    canvas.addEventListener('touchstart', handlePointerEvent, { passive: false });
    canvas.addEventListener('touchmove', handlePointerEvent, { passive: false });
    
    // Handle mouse/touch leave events
    function handleLeaveEvent() {
        if (hoverMarker && window.detailsMap) {
            window.detailsMap.removeLayer(hoverMarker);
            hoverMarker = null;
        }
        
        // Reset the info panel to default values
        infoPanel.innerHTML = `
            <strong>Distance:</strong> -- km
            <span style="margin-left: 12px;"></span>
            <strong>Altitude:</strong> -- m
            <span style="margin-left: 12px;"></span>
            <strong>Vertical Speed:</strong> <span>-- m/s</span>
        `;
    }
    
    canvas.addEventListener('mouseleave', handleLeaveEvent);
    canvas.addEventListener('touchend', handleLeaveEvent);
    canvas.addEventListener('touchcancel', handleLeaveEvent);
    
    return chart;
}



document.querySelectorAll('.chart-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs and containers
        document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
        
        // Hide ALL chart containers first
        document.querySelectorAll('.chart-container').forEach(c => {
            c.classList.remove('active');
            c.style.display = 'none'; // Explicitly hide all charts
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding chart container
        const chartType = this.getAttribute('data-chart');
        
        // Map the data-chart values to the actual chart IDs
        const chartIdMap = {
            'altitude': 'altitudeChart',
            'vertical': 'verticalSpeedChart'
        };
        
        const chartId = chartIdMap[chartType] || `${chartType}Chart`;
        const chartContainer = document.getElementById(chartId);
        
        // Check if the chart container exists before trying to show it
        if (chartContainer) {
            chartContainer.classList.add('active');
            chartContainer.style.display = 'block'; // Explicitly show the selected chart
        } else {
            console.warn(`Chart container #${chartId} not found in the DOM`);
        }
    });
});


/**
 * Completely smooths the beginning and end of vertical speed data
 * @param {Array} verticalSpeeds - Array of vertical speed values
 * @param {Array} distances - Array of distance values
 * @returns {Array} - Fixed vertical speed data
 */
function smoothStartEndVerticalSpeeds(verticalSpeeds, distances) {
    const fixedSpeeds = [...verticalSpeeds];
    const dataLength = verticalSpeeds.length;
    
    // Define the distance thresholds for start and end (in km)
    const startDistanceThreshold = 0.2; // First 200m of the flight
    const endDistanceThreshold = 0.2; // Last 200m of the flight
    
    // Find indices corresponding to these distances
    let startFixIndex = 0;
    let endFixIndex = dataLength - 1;
    
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] <= startDistanceThreshold) {
            startFixIndex = i;
        }
        if (distances[i] >= distances[distances.length - 1] - endDistanceThreshold) {
            endFixIndex = i;
            break;
        }
    }
    
    console.log(`Smoothing vertical speeds: first ${startFixIndex+1} points (${distances[startFixIndex].toFixed(2)}km) and last ${dataLength-endFixIndex} points (${(distances[distances.length-1] - distances[endFixIndex]).toFixed(2)}km)`);
    
    // For the start: set all values to 0, then gradually transition to actual values
    for (let i = 0; i <= startFixIndex; i++) {
        const ratio = i / startFixIndex;
        const targetValue = verticalSpeeds[startFixIndex + 5]; // Use a value a bit after the threshold
        fixedSpeeds[i] = ratio * ratio * targetValue; // Quadratic easing for smoother transition
    }
    
    // For the end: gradually transition to 0
    for (let i = endFixIndex; i < dataLength; i++) {
        const ratio = (i - endFixIndex) / (dataLength - endFixIndex);
        const targetValue = verticalSpeeds[endFixIndex - 5]; // Use a value a bit before the threshold
        fixedSpeeds[i] = targetValue * (1 - ratio * ratio); // Quadratic easing for smoother transition
    }
    
    return fixedSpeeds;
}

/**
 * Fixes extreme elevation outliers in the data
 * @param {Array} elevations - Array of elevation values
 * @param {Array} distances - Array of distance values
 * @returns {Array} - Fixed elevation data
 */
function fixExtremeOutliers(elevations, distances) {
    const fixedElevations = [...elevations];
    
    // Define what constitutes an extreme outlier
    const extremeJumpThreshold = 100; // meters
    
    console.log("Looking for extreme elevation outliers...");
    
    // First pass: identify extreme jumps
    const extremeJumps = [];
    
    for (let i = 1; i < elevations.length; i++) {
        const jump = elevations[i] - elevations[i-1];
        const absJump = Math.abs(jump);
        
        if (absJump > extremeJumpThreshold) {
            extremeJumps.push({
                index: i,
                jump: jump,
                absJump: absJump,
                distance: distances[i] - distances[i-1]
            });
            
            console.log(`Extreme jump at index ${i}: ${elevations[i-1].toFixed(1)}m → ${elevations[i].toFixed(1)}m (${jump.toFixed(1)}m over ${(distances[i] - distances[i-1]).toFixed(3)}km)`);
        }
    }
    
    // If we found extreme jumps, fix them
    if (extremeJumps.length > 0) {
        console.log(`Found ${extremeJumps.length} extreme elevation jumps`);
        
        // Process each extreme jump
        extremeJumps.forEach(jump => {
            const i = jump.index;
            
            // Look for the end of this anomaly section
            let endIndex = i;
            let returnFound = false;
            
            // Look ahead up to 50 points to find where elevation returns to normal
            for (let j = i + 1; j < Math.min(i + 50, elevations.length); j++) {
                // Check if we've returned to within 50m of the pre-jump elevation
                if (Math.abs(elevations[j] - elevations[i-1]) < 50) {
                    endIndex = j;
                    returnFound = true;
                    console.log(`Found return to normal elevation at index ${j}, ${elevations[j].toFixed(1)}m`);
                    break;
                }
            }
            
            // If we found a complete anomaly section (jump up and return)
            if (returnFound) {
                console.log(`Fixing anomaly section from index ${i} to ${endIndex}`);
                
                // Interpolate between the points before and after the anomaly
                const startElevation = elevations[i-1];
                const endElevation = elevations[endIndex];
                const totalDistance = distances[endIndex] - distances[i-1];
                
                // Fix each point in the anomaly section
                for (let j = i; j < endIndex; j++) {
                    const segmentProgress = (distances[j] - distances[i-1]) / totalDistance;
                    fixedElevations[j] = startElevation + segmentProgress * (endElevation - startElevation);
                    
                    if (j === i || j === endIndex - 1) {
                        console.log(`Fixed point ${j}: ${elevations[j].toFixed(1)}m → ${fixedElevations[j].toFixed(1)}m`);
                    }
                }
            } else {
                // If we didn't find a return point, just fix the single extreme jump
                console.log(`Fixing single extreme jump at index ${i}`);
                fixedElevations[i] = fixedElevations[i-1]; // Use previous elevation
                
                // Also smooth the next few points if they seem to be part of the anomaly
                for (let j = i + 1; j < Math.min(i + 5, elevations.length); j++) {
                    if (Math.abs(elevations[j] - elevations[i-1]) > extremeJumpThreshold / 2) {
                        fixedElevations[j] = fixedElevations[i-1];
                    } else {
                        break; // Stop once we're back to reasonable values
                    }
                }
            }
        });
        
        return fixedElevations;
    } else {
        console.log("No extreme elevation outliers detected");
        return elevations;
    }
}
/**
 * Applies a moving average to smooth data
 * @param {Array} data - The array of data points to smooth
 * @param {Number} windowSize - The size of the moving average window
 * @returns {Array} - The smoothed data
 */
function applyMovingAverage(data, windowSize) {
    const result = [];
    
    for (let i = 0; i < data.length; i++) {
        let sum = 0;
        let count = 0;
        
        // Calculate average of surrounding points
        for (let j = Math.max(0, i - windowSize/2); j < Math.min(data.length, i + windowSize/2); j++) {
            if (data[j] !== null && data[j] !== undefined && !isNaN(data[j])) {
                sum += data[j];
                count++;
            }
        }
        
        // Add the average to the result array
        if (count > 0) {
            result.push(sum / count);
        } else {
            // If no valid points in the window, use the original value or 0
            result.push(data[i] !== null && data[i] !== undefined && !isNaN(data[i]) ? data[i] : 0);
        }
    }
    
    return result;
}














async function showFlightDetails(index) {
    try {
        const flight = currentSortedFlights[index];
        if (!flight) return;

        currentFlightIndex = index;
        const modal = document.getElementById('flightModal');
        if (!modal) {
            console.error('Flight modal element not found');
            return;
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        
        // MOVED HERE: Reset chart state after modal is initialized
        const chartTabsContainer = modal.querySelector('.chart-tabs');
        const chartContainers = modal.querySelector('.chart-containers');

        // Reset all charts when showing a new flight
        document.querySelectorAll('.chart-container').forEach(container => {
            container.innerHTML = ''; // Clear previous chart content
            container.classList.remove('active');
            container.style.display = 'none';
        });

        // Reset all chart tabs
        document.querySelectorAll('.chart-tab').forEach(tab => {
            tab.classList.remove('active');
        });

        // Hide chart tabs and containers by default
        if (chartTabsContainer) chartTabsContainer.style.display = 'none';
        if (chartContainers) chartContainers.style.display = 'none';

        // Update header information only
        const updateTextContent = (selector, value) => {
            const element = modal.querySelector(selector);
            if (element) {
                element.textContent = value;
            }
        };
        const favoriteSiteButton = modal.querySelector('.favorite-site-button');
        if (favoriteSiteButton) {
            // Check initial favorite status
            const isFavorite = await dbOperations.isSiteFavorite(flight.site);
            
            // Update button initial state
            updateFavoriteSiteButton(favoriteSiteButton, isFavorite);
            
            // Add click handler
            favoriteSiteButton.onclick = async () => {
                try {
                    const newFavoriteStatus = await dbOperations.toggleFavoriteSite(flight.site);
                    updateFavoriteSiteButton(favoriteSiteButton, newFavoriteStatus);
                    
                    showSuccessMessage(newFavoriteStatus ? 
                        'Site added to favorites!' : 
                        'Site removed from favorites!');
                        
                } catch (error) {
                    console.error('Error updating favorite sites:', error);
                    showCustomAlert('Error updating favorite sites. Please try again.');
                }
            };
        }
        const flightData = typeof flight.coordinates === 'string' ? 
    JSON.parse(flight.coordinates) : flight.coordinates;



        // Update header information
        updateTextContent('.flight-date', flight.date);
        updateTextContent('.header-site-name', `${flight.site}`);
        const updateGearWithBrand = (gearName, brandSpanClass, nameSpanClass) => {
            const brandSpan = modal.querySelector(brandSpanClass);
            const nameSpan = modal.querySelector(nameSpanClass);
            
            if (brandSpan && nameSpan) {
                if (gearName) {
                    // Split the gear name into brand and model
                    const [brand, ...modelParts] = gearName.split(' ');
                    const model = modelParts.join(' ');
                    
                    // Get brand image
                    const brandImage = brandImages[brand.toLowerCase()];
                    
                    // Handle brand image if exists
                    if (brandImage) {
                        brandSpan.innerHTML = `<img src="assets/brands/${brandImage}" alt="${brand}" class="brand-image">`;
                        brandSpan.style.display = 'inline-block';
                    } else {
                        brandSpan.style.display = 'none';
                    }
                    
                    // Always show the name if gearName exists
                    nameSpan.textContent = gearName;
                    nameSpan.parentElement.parentElement.parentElement.style.display = 'flex';
                } else {
                    // No gear name provided
                    nameSpan.textContent = 'Not specified';
                    brandSpan.style.display = 'none';
                    nameSpan.parentElement.parentElement.parentElement.style.display = 'flex';
                }
            } else {
                // Elements not found in DOM
                console.warn(`Missing elements for gear display: ${brandSpanClass} or ${nameSpanClass}`);
            }
        };
        // Function to update a detail field
        const updateDetail = (selector, value, unit = '', isHTML = false) => {
            const span = modal.querySelector(selector);
            if (span) {
                if (value !== null && value !== undefined) {
                    if (isHTML) {
                        span.innerHTML = `${value}${unit}`;
                    } else {
                        span.textContent = `${value}${unit}`;
                    }
                    span.parentElement.parentElement.style.display = 'flex';
                } else {
                    span.parentElement.parentElement.style.display = 'none';
                }
            }
        };
        updateDetail('.country-name', `
            <img src="./assets/flags/${flight.country.toLowerCase()}.png" 
                 alt="${flight.country}" 
                 title="${flight.country}"
                 class="flag-image-modal"
                 style="margin-right: 8px; vertical-align: middle;">
            ${flight.country}`, '', true);
        updateDetail('.site-name-sites', flight.site);
        updateDetail('.flight-type', flight.type || 'Not specified');
        updateDetail('.glider-name', flight.glider || 'Not specified');
        updateDetail('.harness-name', flight.harness || 'Not specified');
        // const schoolContainer = modal.querySelector('.school-box');
        // if (flight.school) {
        //     updateDetail('.school-name', flight.school);
        //     schoolContainer.style.display = 'flex';
        // } else {
        //     schoolContainer.style.display = 'none';
        // }       
        
        const schoolItem = modal.querySelector('.detail-item-sites:has(.school-name)');
        if (flight.school) {
            updateDetail('.school-name', flight.school);
            if (schoolItem) schoolItem.style.display = 'flex';
        } else {
            if (schoolItem) schoolItem.style.display = 'none';
        }
        
        updateDetail('.takeoff-name', flight.takeoff);
        updateDetail('.club-name', flight.club);
        updateDetail('.takeoff-alt', `(${flight.takeoff_alt}m)`, '', true);
        updateDetail('.landing-name', flight.landing);
        updateDetail('.landing-alt', `(${flight.landing_alt}m)`, '', true);
        updateDetail('.grade', flight.grade, 'm');
        updateDetail('.gain', 
            flight.altitude_gain !== undefined && flight.altitude_gain !== null ? 
            flight.altitude_gain : null, 
            'm');
        updateDetail('.flight-time', formatDuration(flight.time));
        

            const takeoffTimeItem = modal.querySelector('.flight-time-of-day')?.closest('.detail-item2');
            const landingTimeItem = modal.querySelector('.flight-landing-time')?.closest('.detail-item2');

            if (flight.timeOfDay) {

                // Heure de décollage
                updateDetail(
                    '.flight-time-of-day',
                    formatTimeOfDay(flight.timeOfDay)
                );

                // Heure d'atterrissage = heure de décollage + durée du vol
                const landingTime = calculateLandingTime(
                    flight.timeOfDay,
                    flight.time
                );

                updateDetail(
                    '.flight-landing-time',
                    landingTime
                );

                // Afficher les deux
                if (takeoffTimeItem) {
                    takeoffTimeItem.style.display = 'flex';
                }

                if (landingTimeItem) {
                    landingTimeItem.style.display = 'flex';
                }

            } else {

                // Pas d'heure disponible
                if (takeoffTimeItem) {
                    takeoffTimeItem.style.display = 'none';
                }

                if (landingTimeItem) {
                    landingTimeItem.style.display = 'none';
                }
            }

        updateDetail('.flight-distance', 
            flight.flight_distance !== undefined && flight.flight_distance !== null ? 
            parseFloat(flight.flight_distance).toFixed(2) : null, 
            ' km');
        // updateGearWithBrand(flight.glider, '.glider-brand', '.glider-name');
        // updateGearWithBrand(flight.harness, '.harness-brand', '.harness-name');

        // Check if both gear items are empty
        const gearContainer = modal.querySelector('.background-gear');
        const gearSpacerTop = modal.querySelector('.gear-spacer-top');
        
        if (!flight.glider && !flight.harness) {
            // If both gear values are null/undefined, hide the entire container and its spacers
            if (gearContainer) gearContainer.style.display = 'none';
            if (gearSpacerTop) gearSpacerTop.style.display = 'none';
        } else {
            // Show container, spacers, and update gear if they exist
            if (gearContainer) gearContainer.style.display = 'block';
            if (gearSpacerTop) gearSpacerTop.style.display = 'block';
            
            // Update glider if exists
            if (flight.glider) {
                updateGearWithBrand(flight.glider, '.glider-brand', '.glider-name');
            } else {
                const gliderDiv = modal.querySelector('.detail-item:has(.glider-name)');
                if (gliderDiv) gliderDiv.style.display = 'none';
            }
            
            // Update harness if exists
            if (flight.harness) {
                updateGearWithBrand(flight.harness, '.harness-brand', '.harness-name');
            } else {
                const harnessDiv = modal.querySelector('.detail-item:has(.harness-name)');
                if (harnessDiv) harnessDiv.style.display = 'none';
            }
        }

        updateDetail('.max-altitude', 
            flight.max_altitude !== undefined && flight.max_altitude !== null ? 
            flight.max_altitude : null, 
            'm');
        updateDetail('.max-speed', 
            flight.max_speed !== undefined && flight.max_speed !== null ? 
            flight.max_speed : null, 
            ' km/h');
        updateDetail('.avg-speed', 
            flight.avg_speed !== undefined && flight.avg_speed !== null ? 
            parseFloat(flight.avg_speed).toFixed(1) : null, 
            ' km/h');
        updateDetail('.max-climb', 
            flight.max_climb !== undefined && flight.max_climb !== null ? 
            flight.max_climb : null, 
            ' m/s');
        updateDetail('.max-sink', 
            flight.max_sink !== undefined && flight.max_sink !== null ? 
            flight.max_sink : null, 
            ' m/s');
        // updateDetail('.avg-heart-rate', 
        //     flight.avg_heart_rate !== undefined && flight.avg_heart_rate !== null ? 
        //     flight.avg_heart_rate : null, 
        //     ' bpm');
        // updateDetail('.max-heart-rate', 
        //     flight.max_heart_rate !== undefined && flight.max_heart_rate !== null ? 
        //     flight.max_heart_rate : null, 
        //     ' bpm');

        const heartRateContainer = modal.querySelector('.heart-rate-container');
        if (!flight.avg_heart_rate && !flight.max_heart_rate) {
            // If both heart rate values are null/undefined, hide both divs
            const maxHrDiv = modal.querySelector('.detail-item:has(.max-hr)');
            const avgHrDiv = modal.querySelector('.detail-item:has(.avg-hr)');
            if (maxHrDiv) maxHrDiv.style.display = 'none';
            if (avgHrDiv) avgHrDiv.style.display = 'none';
        } else {
            // Update heart rate values if they exist
            if (flight.max_heart_rate) {
                updateDetail('.max-hr', flight.max_heart_rate, ' bpm');
            } else {
                const maxHrDiv = modal.querySelector('.detail-item:has(.max-hr)');
                if (maxHrDiv) maxHrDiv.style.display = 'none';
            }
            
            if (flight.avg_heart_rate) {
                updateDetail('.avg-hr', flight.avg_heart_rate, ' bpm');
            } else {
                const avgHrDiv = modal.querySelector('.detail-item:has(.avg-hr)');
                if (avgHrDiv) avgHrDiv.style.display = 'none';
            }
        }
        updateDetail('.avg-temperature', 
            flight.avg_temperature !== undefined && flight.avg_temperature !== null ? 
            flight.avg_temperature : null, 
            '°C');
        const ratingStressContainer = modal.querySelector('.rating-stress');

        if (!flight.rating && !flight.stressLevel) {
            ratingStressContainer.style.display = 'none';
        } else {
            ratingStressContainer.style.display = 'flex';
            
            if (flight.rating) {
                updateDetail('.flight-rating', getStarsHTML(flight.rating), '', true);
                modal.querySelector('.stress-view .flight-rating').parentElement.parentElement.style.display = 'flex';
            } else {
                modal.querySelector('.stress-view .flight-rating').parentElement.parentElement.style.display = 'none';
            }
            
            if (flight.stressLevel) {
                updateDetail('.stress-level', getStressHTML(flight.stressLevel), '', true);
                modal.querySelector('.stress-view .stress-level').parentElement.parentElement.style.display = 'flex';
            } else {
                modal.querySelector('.stress-view .stress-level').parentElement.parentElement.style.display = 'none';
            }
        }

        // For the notes section
const notesContainer = modal.querySelector('.detail-item-sites:has(.notes)');
if (!flight.comments) {
    // If no comments, hide the entire container
    if (notesContainer) notesContainer.style.display = 'none';
} else {
    // Show container and update notes if they exist
    if (notesContainer) {
        notesContainer.style.display = 'flex';  // Use flex to match other items
        updateDetail('.notes', flight.comments);
    }
}

// Update navigation buttons
const prevButton = modal.querySelector('.prev-button');
const nextButton = modal.querySelector('.next-button');
const editButton = modal.querySelector('.edit-button');
const deleteButton = modal.querySelector('.delete-button');
if (prevButton) prevButton.disabled = currentFlightIndex === 0;
if (nextButton) nextButton.disabled = currentFlightIndex === currentSortedFlights.length - 1;
if (editButton) editButton.onclick = () => editFlight(index);
if (deleteButton) {
    deleteButton.onclick = async () => {
        // Pass false to avoid showing loading overlay for deletion
        const confirmed = await showCustomConfirm('Are you sure you want to delete this flight?', false);
        if (confirmed) {
            deleteFlight(index);
        }
    };
}
if (flight.coordinates) {
    const mapDiv = document.getElementById('flightDetailsMap');
    const chartDiv = document.getElementById('altitudeChart');
    // Show/hide chart tabs container based on data availability
    if (chartTabsContainer) {
        chartTabsContainer.style.display = 'none'; // Hide by default
    }
    if (chartContainers) {
        chartContainers.style.display = 'none'; // Hide by default
    }
    if (!navigator.onLine) {
        // Hide the map div completely
        mapDiv.style.display = 'none';
        chartDiv.style.display = 'none';
        
        // Create or update offline message after the map div
        let offlineMessage = document.getElementById('offlineMapMessage');
        if (!offlineMessage) {
            offlineMessage = document.createElement('div');
            offlineMessage.id = 'offlineMapMessage';
            offlineMessage.className = 'offline-map-message';
            offlineMessage.innerHTML = `
                <i class="fas fa-wifi-slash"></i>
                <span>Map view unavailable offline</span>
            `;
            // Insert after the map div
            mapDiv.insertAdjacentElement('afterend', offlineMessage);
        }
    } else {
        // Online - show map and remove message if it exists
        mapDiv.style.display = 'block';
        const offlineMessage = document.getElementById('offlineMapMessage');
        if (offlineMessage) {
            offlineMessage.remove();
        }
        
        try {
            const flightData = typeof flight.coordinates === 'string' ? 
                JSON.parse(flight.coordinates) : flight.coordinates;
            
            setTimeout(() => {
                if (window.detailsMap) {
                    window.detailsMap.remove();
                }

                if (flightData && flightData.coords && flightData.coords.length > 0) {
                    window.detailsMap = initializeMap(
                        mapDiv, 
                        flightData.coords, 
                        flightData.speeds
                    );
                    window.detailsMap.fitBounds(L.polyline(flightData.coords).getBounds(), {
                        padding: [30, 30]
                    });
                    window.detailsMap.invalidateSize();
                    
                    window.flightAnimation = animateFlightPath(
                        flightData.coords,
                        flightData.speeds,
                        window.detailsMap
                    );
                    
                    if (flightData.points && flightData.points.length > 0 && 
                        flightData.points[0].ele !== undefined) {
                        
                        // Check if we have valid elevation data
                        // const hasValidElevation = flightData.points.some(point => point.ele > 0);
                        const hasValidElevation = (() => {
                            // First check if we have any valid elevation values
                            if (!flightData.points.some(point => point.ele > 0)) return false;
                            
                            // Find min and max elevation
                            const elevations = flightData.points.map(point => point.ele);
                            const minEle = Math.min(...elevations);
                            const maxEle = Math.max(...elevations);
                            
                            // Check if the variation is significant (more than 5 meters)
                            const hasSignificantVariation = (maxEle - minEle) > 5;
                            const takeoffElevation = flightData.points[0].ele;
                       
                            // Return true only if we have valid elevations with significant variation
                            return hasSignificantVariation;
                        })();                        
                        // Check if we have valid vertical speed data (inline function to avoid scope issues)
                        const hasValidVerticalSpeed = (() => {
                            if (!flightData.points || flightData.points.length < 10) return false;
                            
                            // Check if we have valid elevation changes
                            let significantChangesCount = 0;
                            let prevEle = flightData.points[0].ele;
                            
                            for (let i = 1; i < flightData.points.length; i++) {
                                if (Math.abs(flightData.points[i].ele - prevEle) > 1) { // More than 1m change
                                    significantChangesCount++;
                                    if (significantChangesCount >= 10) return true;
                                }
                                prevEle = flightData.points[i].ele;
                            }
                            
                            return false;
                        })();
                                                    // Update altitude gain
                            if (hasValidElevation && flightData.points.length > 2) {
                                const altitudeChartResult = createAltitudeChart(
                                    flightData.points,
                                    flightData.speeds
                                );

                                updateTextContent(
                                    '.elevation-gain',
                                    `${altitudeChartResult.elevationGain} m`
                                );
                            } else {
                                updateTextContent('.elevation-gain', '-');
                            }
                        // Only show chart tabs if at least one chart has valid data
                        if (hasValidElevation && hasValidVerticalSpeed) {
                            // Show the chart containers
                            if (chartTabsContainer) {
                                chartTabsContainer.style.display = 'flex'; // Show tabs
                            }
                            if (chartContainers) {
                                chartContainers.style.display = 'block'; // Show containers
                            }
                            
                            // Handle altitude chart
                            // if (hasValidElevation) {
                            //     // createAltitudeChart(flightData.points, flightData.speeds);
                            //     const altitudeChartResult = createAltitudeChart(
                            //         flightData.points,
                            //         flightData.speeds
                            //     );
                                
                            //     updateTextContent(
                            //         '.elevation-gain',
                            //         `${altitudeChartResult.elevationGain} m`
                            //     );
                                
                            // } else {
                            //     // Hide the altitude tab if no valid elevation data
                            //     document.querySelectorAll('.chart-tab').forEach(tab => {
                            //         if (tab.getAttribute('data-chart') === 'altitude') {
                            //             tab.style.display = 'none';
                            //         }
                            //     });
                            // }




                            
                            // Handle vertical speed chart
                            if (hasValidVerticalSpeed) {
                                createVerticalSpeedChart(flightData.points);
                            } else {
                                // Hide the vertical speed tab if no valid vertical speed data
                                document.querySelectorAll('.chart-tab').forEach(tab => {
                                    if (tab.getAttribute('data-chart') === 'verticalSpeed') {
                                        tab.style.display = 'none';
                                    }
                                });
                            }
                            
                            // Set the default active chart
                            if (hasValidElevation) {
                                // Make altitude tab active
                                document.querySelectorAll('.chart-tab').forEach(tab => {
                                    if (tab.getAttribute('data-chart') === 'altitude') {
                                        tab.classList.add('active');
                                    } else {
                                        tab.classList.remove('active');
                                    }
                                });
                                
                                // Show altitude chart by default
                                document.querySelectorAll('.chart-container').forEach(container => {
                                    if (container.id === 'altitudeChart') {
                                        container.classList.add('active');
                                        container.style.display = 'block';
                                    } else {
                                        container.classList.remove('active');
                                        container.style.display = 'none';
                                    }
                                });
                            } else if (hasValidVerticalSpeed) {
                                // Make vertical speed tab active
                                document.querySelectorAll('.chart-tab').forEach(tab => {
                                    if (tab.getAttribute('data-chart') === 'verticalSpeed') {
                                        tab.classList.add('active');
                                    } else {
                                        tab.classList.remove('active');
                                    }
                                });
                                
                                // Show vertical speed chart by default
                                document.querySelectorAll('.chart-container').forEach(container => {
                                    if (container.id === 'verticalSpeedChart') {
                                        container.classList.add('active');
                                        container.style.display = 'block';
                                    } else {
                                        container.classList.remove('active');
                                        container.style.display = 'none';
                                    }
                                });
                            }
                        } else {
                            // Hide chart tabs and containers if no valid data for any chart
                            if (chartTabsContainer) {
                                chartTabsContainer.style.display = 'none';
                            }
                            if (chartContainers) {
                                chartContainers.style.display = 'none';
                            }
                        }
                    } else {
                        // Hide chart tabs and containers if no elevation data
                        if (chartTabsContainer) {
                            chartTabsContainer.style.display = 'none';
                        }
                        if (chartContainers) {
                            chartContainers.style.display = 'none';
                        }
                    }
                
                }
            }, 100);
        } catch (error) {
            console.error('Error parsing flight coordinates:', error);
            mapDiv.style.display = 'none';
            chartDiv.style.display = 'none';
        }
    }
} else {
    const mapDiv = document.getElementById('flightDetailsMap');
    const chartDiv = document.getElementById('altitudeChart');

    if (mapDiv) {
        mapDiv.style.display = 'none';
        if (chartDiv) chartDiv.style.display = 'none';
    }
    const offlineMessage = document.getElementById('offlineMapMessage');
    if (offlineMessage) {
        offlineMessage.remove();
    }
}

} catch (error) {
console.error('Error showing flight details:', error);
showCustomAlert('Error loading flight details. Please try again.');
}
}



function showNextFlight() {
    if (currentFlightIndex < currentSortedFlights.length - 1) {
        showFlightDetails(currentFlightIndex + 1);
    }
}

function showPreviousFlight() {
    if (currentFlightIndex > 0) {
        showFlightDetails(currentFlightIndex - 1);
    }
}

function getCountryFlag(countryCode) {
    if (!countryCode) return '';
    return countryCode
        .toUpperCase()
        .split('')
        .map(char => String.fromCodePoint(127397 + char.charCodeAt()))
        .join('');
}


function createSitesList(flightData) {
    const siteCounts = {};
    const siteCountries = {};
    
    flightData.forEach(flight => {
        let site = flight.site || '';
        if (site.includes(',')) {
            site = site.split(',')[0].trim();
        }
        siteCounts[site] = (siteCounts[site] || 0) + 1;
        siteCountries[site] = flight.country;
    });

    const sortedSites = Object.entries(siteCounts)
        .sort(([,a], [,b]) => b - a)
        .filter(([site]) => site); 

        const siteListDiv = document.getElementById('flightsPerSite');
        siteListDiv.innerHTML = `
            <div class="sites-ranking">
                <h3>Sites Ranking</h3>
                <div class="sites-list">
                    ${sortedSites.map(([site, count], index) => `
                        <div class="site-rank-item">
                            <div class="rank">#${index + 1}</div>
                            <div class="site-info">
<span class="site-name">
    <img src="./assets/flags/${siteCountries[site].toLowerCase()}.png" 
         alt="${siteCountries[site]}" 
         title="${siteCountries[site]}"
         class="flag-image-list">
    ${site}
</span>
                                <span class="flight-count">${count} flight${count > 1 ? 's' : ''}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }





function initializeFlights() {
    sortFlights('date');
}
function normalizeText(text) {
    return String(text || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
}

function sortFlights(column = 'date', forceDateSort = false) {
    // Toggle sort direction if clicking the same column
    if (currentSortColumn === column && !forceDateSort) {
        isAscending = !isAscending;
    } else {
        currentSortColumn = column;
        // Default to descending for date, ascending for others
        isAscending = column !== 'date';
    }
    
    currentSortedFlights.sort((a, b) => {
        let comparison = 0;
        
        // If in grid view or forcing date sort, only sort by date
        if (currentView === 'grid' || forceDateSort) {
            const [dayA, monthA, yearA] = a.date.split('/');
            const [dayB, monthB, yearB] = b.date.split('/');
            const dateA = new Date('20' + yearA, monthA - 1, dayA);
            const dateB = new Date('20' + yearB, monthB - 1, dayB);
            return dateB - dateA; // Always descending for grid view
        }

        switch (column) {
            case 'date': {
                const [dayA, monthA, yearA] = a.date.split('/');
                const [dayB, monthB, yearB] = b.date.split('/');
        
                const dateA = new Date('20' + yearA, monthA - 1, dayA);
                const dateB = new Date('20' + yearB, monthB - 1, dayB);
        
                comparison = dateA - dateB;
                break;
            }
        
            case 'site':
            case 'takeoff':
            case 'landing':
            case 'country':
            case 'glider':
            case 'type':
            case 'school':
            case 'club':
                comparison = normalizeText(a[column]).localeCompare(
                    normalizeText(b[column]),
                    undefined,
                    { numeric: true }
                );
                break;
        
            case 'time':
            case 'grade':
            case 'flight_distance':
            case 'rating':
            case 'stressLevel':
                const valA = a[column] !== null && a[column] !== undefined
                    ? Number(a[column]) || 0
                    : -1;
        
                const valB = b[column] !== null && b[column] !== undefined
                    ? Number(b[column]) || 0
                    : -1;
        
                comparison = valA - valB;
                break;
        
            default:
                comparison = 0;
        }
        
        
        // If values are equal, use date as secondary sort
        if (comparison === 0 && column !== 'date') {
            const [dayA, monthA, yearA] = a.date.split('/');
            const [dayB, monthB, yearB] = b.date.split('/');
            const dateA = new Date('20' + yearA, monthA - 1, dayA);
            const dateB = new Date('20' + yearB, monthB - 1, dayB);
            comparison = dateB - dateA; // Secondary sort always descending
        }

        return isAscending ? comparison : -comparison;
    });

    currentPage = 1;
    // Update the display based on current view
    if (currentView === 'grid') {
        displayGridView(currentSortedFlights);
    } else {
        displayListView(currentSortedFlights);
    }
}


function closeModal() {
    const modal = document.getElementById('flightModal'); 
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}





// async function badgesSummary(data) {
//     const totalFlights = data.length;
//     const uniqueSitesList = await getUniqueSites();
//     const uniqueSites = uniqueSitesList.length;



//     const uniqueCountries = new Set(data.map(flight => flight.country || '')).size;
  
//     const longestFlightMinutes = data.reduce((max, flight) => {
//       const time = parseFloat(flight.time || 0);
//       return time > max ? time : max;
//     }, 0);
  
//     const flightsByDate = data.reduce((acc, flight) => {
//       const date = flight.date || 'unknown';
//       acc[date] = (acc[date] || 0) + 1;
//       return acc;
//     }, {});
//     const maxFlightsInADay = Math.max(...Object.values(flightsByDate), 0);
//     const totalTime = data.reduce((sum, flight) => sum + parseFloat(flight.time || 0), 0);
//     const maxAltitude = data.reduce((max, flight) => {
//         const altitude = parseFloat(flight.max_altitude || 0);
//         return altitude > max ? altitude : max;
//       }, 0);
      
//     const longestDistanceKm = data.reduce((max, flight) => {
//         const distance = parseFloat(flight.flight_distance || 0);
//         return distance > max ? distance : max;
//     }, 0);
  
//     const badges = [
      
//       { name: 'Hatchling Hummer', image: 'assets/achivements/1.png', condition: totalFlights >= 1, description: 'First Flight', description_long: 'First Flight' },
//       { name: 'Sparrow Soarer', image: 'assets/achivements/2.png', condition: totalFlights >= 10, description: '10 Flights', description_long: 'Reach 10 flights' },
//       { name: 'Falcon Flyer', image: 'assets/achivements/3.png', condition: totalFlights >= 30, description: '30 Flights', description_long: 'Reach 30 flights' },
//       { name: 'Eagle Ascender', image: 'assets/achivements/4.png', condition: totalFlights >= 100, description: '100 Flights', description_long: 'Reach 100 flights' },
//       { name: 'Eagle Ascender', image: 'assets/achivements/5.png', condition: totalFlights >= 500, description: '500 Flights', description_long: 'First Flight' },
//       { name: 'Owl Endurer', image: 'assets/achivements/9.png', condition: longestFlightMinutes >= 60, description: '1+ Hour Flight', description_long: 'First Flight' },
//       { name: 'Vulture Voyager', image: 'assets/achivements/10.png', condition: longestFlightMinutes >= 120, description: '2+ Hour Flight', description_long: 'First Flight' },
//       { name: 'Vulture Voyager', image: 'assets/achivements/11.png', condition: longestFlightMinutes >= 240, description: '4+ Hour Flight', description_long: 'First Flight' },
//       { name: '10 Hours total ', image: 'assets/achivements/21.png', condition: totalTime >= 600, description: '10H in the air', description_long: 'First Flight' },
//       { name: '10 Hours total ', image: 'assets/achivements/22.png', condition: totalTime >= 6000, description: '100H in the air', description_long: 'First Flight' },
//       { name: '10 Hours total ', image: 'assets/achivements/23.png', condition: totalTime >= 60000, description: '1000H in the air', description_long: 'First Flight' },
//       { name: 'Swallow Sprinter', image: 'assets/achivements/12.png', condition: maxFlightsInADay >= 2, description: '2+ Flights in a Day', description_long: 'First Flight' },
//       { name: 'Starling Stormer', image: 'assets/achivements/13.png', condition: maxFlightsInADay >= 4, description: '4+ Flights in a Day', description_long: 'First Flight' },
//       { name: 'Starling Stormer', image: 'assets/achivements/14.png', condition: maxFlightsInADay >= 6, description: '6+ Flights in a Day', description_long: 'First Flight' },
//       { name: 'Gull Glider', image: 'assets/achivements/15.png', condition: longestDistanceKm >= 5, description: '5+ km Flight', description_long: 'Complete a flight of 5 kilometers or more' },
//       { name: 'Petrel Pathfinder', image: 'assets/achivements/16.png', condition: longestDistanceKm >= 50, description: '50+ km Flight', description_long: 'Complete a flight of 50 kilometers or more' },
//       { name: 'Wanderer Wing', image: 'assets/achivements/17.png', condition: longestDistanceKm >= 100, description: '100+ km Flight', description_long: 'Complete a flight of 100 kilometers or more' },
//       { name: 'Site Explorer', image: 'assets/achivements/18.png', condition: uniqueSites >= 5, description: '5 Sites', description_long: 'First Flight' },
//       { name: 'Site Explorer', image: 'assets/achivements/19.png', condition: uniqueSites >= 15, description: '15 Sites', description_long: 'First Flight' },
//       { name: 'Site Explorer', image: 'assets/achivements/20.png', condition: uniqueSites >= 30, description: '30 Sites', description_long: 'First Flight' },
//       { name: 'Globetrotter', image: 'assets/achivements/6.png', condition: uniqueCountries >= 3, description: '3 Countries', description_long: 'First Flight' },
//       { name: 'Globetrotter', image: 'assets/achivements/7.png', condition: uniqueCountries >= 5, description: '5 Countries', description_long: 'First Flight' },
//       { name: 'Globetrotter', image: 'assets/achivements/8.png', condition: uniqueCountries >= 8, description: '8 Countries', description_long: 'First Flight' },
//       {
//         name: 'Cloud Glider',
//         image: 'assets/achivements/24.png',
//         condition: maxAltitude >= 1500,
//         description: 'Reached 1500m AMSL',
//         description_long: 'You have reached the cloud base!'
//       },
//       {
//         name: 'Stratosurfer',
//         image: 'assets/achivements/25.png',
//         condition: maxAltitude >= 3000,
//         description: 'Reached 3000m AMSL',
//         description_long: 'Soar high into the sky!'
//       },
//       {
//         name: 'Sky Pioneer',
//         image: 'assets/achivements/26.png',
//         condition: maxAltitude >= 5000,
//         description: 'Reached 5000m AMSL',
//         description_long: 'You have broken through the ceiling!'
//       }
      

//     ];
  
//     // const container = document.getElementById('badge-summary-modal');
//     // container.innerHTML = '';

//     const container = document.getElementById('badge-summary-modal');
//     container.innerHTML = badges
// // Then render badges
// const badgesHTML = badges
//   .map(badge => `
//     <div class="badge">
//       <img src="${badge.image}" alt="${badge.description}" class="badge-image ${badge.condition ? 'unlocked' : 'locked'}" />
//       <p>${badge.description}</p>
//     </div>
//   `)
//   .join('');

// container.innerHTML = badgesHTML;



//         container.innerHTML = badges
//           .map(badge => `
//             <div class="badge">
//               <img src="${badge.image}" alt="${badge.description}" class="badge-image ${badge.condition ? 'unlocked' : 'locked'}" />
//               <p>${badge.description}</p>
              
//             </div>
//           `)
//           .join('');
//           return badges;
//   }

  




//   async function preloadBadgeImages(badges) {
//     const promises = badges.map(badge => {
//       return new Promise(resolve => {
//         const img = new Image();
//         img.src = badge.image;
//         img.onload = resolve;
//         img.onerror = resolve;
//       });
//     });
  
//     await Promise.all(promises);
//   }
  







  async function refreshFlightSummaries() {
    try {
      const flights = await dbOperations.getAllFromStore(STORES.flights);
  
      // Call all functions that rely on flight data
    //   badgesSummary(flights || []);
      // Add more if needed
  
    } catch (error) {
      console.error('Failed to refresh flight summaries:', error);
    }
  }
  
  function getMostFrequent(data, field) {
    const counts = {};

    data.forEach(flight => {
        const value = (flight[field] || '').toString().trim();

        if (!value) return;

        counts[value] = (counts[value] || 0) + 1;
    });

    let mostFrequent = '-';
    let maxCount = 0;

    Object.entries(counts).forEach(([value, count]) => {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = value;
        }
    });

    return mostFrequent;
}

  
function updateSummaryStats(data) {
    const totalFlights = data.length;
    const totalMinutes = data.reduce((sum, flight) => sum + parseFloat(flight.time || 0), 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    // ========================================
// MOYENNE DE VOLS PAR ANNÉE / MOIS
// ========================================
const averageFlightMinutes =
    totalFlights > 0 ? totalMinutes / totalFlights : 0;
    const mostUsedTakeoff = getMostFrequent(data, 'takeoff');
    const mostUsedSite = getMostFrequent(data, 'site');
    const mostUsedCountry = getMostFrequent(data, 'country');
const averageFlightHours = Math.floor(averageFlightMinutes / 60);
const averageFlightRemainingMinutes =
    Math.round(averageFlightMinutes % 60);
    const totalDistance = data.reduce(
        (sum, flight) => sum + parseFloat(flight.flight_distance || 0),
        0
    );
    const maximumAltitude = data.reduce((max, flight) => {
        const altitude = parseFloat(flight.max_altitude || 0);
        return altitude > max ? altitude : max;
    }, 0);
    const averageDistance =
        totalFlights > 0 ? totalDistance / totalFlights : 0;
const flightDates = data
.filter(f => f.date)
.map(f => {

    const parts = f.date.split('/');

    if (parts.length !== 3) return null;

    const yearValue = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);

    if (isNaN(yearValue) || isNaN(month)) {
        return null;
    }

    const year =
        yearValue < 100
            ? 2000 + yearValue
            : yearValue;

    return {
        year,
        month
    };
})
.filter(Boolean);


// ========================================
// Période couverte
// ========================================

let averageFlightsYear = 0;
let averageFlightsMonth = 0;

if (flightDates.length > 0) {

const minYear = Math.min(
    ...flightDates.map(f => f.year)
);

const maxYear = Math.max(
    ...flightDates.map(f => f.year)
);

// Nombre d'années entre le premier
// et le dernier millésime
const yearsCovered =
    maxYear - minYear + 1;

// Nombre de mois correspondant
const monthsCovered =
    yearsCovered * 12;

averageFlightsYear =
    totalFlights / yearsCovered;

averageFlightsMonth =
    totalFlights / monthsCovered;
}
    const uniqueSites = new Set(data.map(flight => flight.site || '')).size;
    const uniqueCountries = new Set(data.map(flight => flight.country || '')).size;
    const uniqueTakeoffs = new Set(data.map(flight => flight.takeoff || '')).size;
    const uniqueLandings = new Set(data.map(flight => flight.landing || '')).size;

    // Count flights with a non-empty school field
    const schoolFlights = data.filter(flight => (flight.school || '').toString().trim().length > 0).length;
    const clubFlights = data.filter(flight => (flight.club || '').toString().trim().length > 0).length;

    // Find highest grade
    const highestGrade = data.reduce((max, flight) => {
        const grade = parseInt(flight.grade || 0);
        return grade > max ? grade : max;
    }, 0);
    const highestdistance = data.reduce((max, flight) => {
        const distance = parseFloat(flight.flight_distance || 0);  // Use parseFloat here
        return distance > max ? distance : max;
    }, 0);
    
    // Find longest flight
    const longestFlightMinutes = data.reduce((max, flight) => {
        const time = parseFloat(flight.time || 0);
        return time > max ? time : max;
    }, 0);
    const longestHours = Math.floor(longestFlightMinutes / 60);
    const longestMinutes = Math.round(longestFlightMinutes % 60);

    // Sort flights by date
    const sortedFlights = [...data].sort((a, b) => {
        const dateA = parseFlightDate(a.date);
        const dateB = parseFlightDate(b.date);
        return dateA - dateB;
    });

    const firstFlight = sortedFlights[0];
    const lastFlight = sortedFlights[sortedFlights.length - 1];

    // Format dates and calculate days ago
    const formatDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        return `${day}/${month}/${year}`;  // Keep original format
    };

    function calculateDaysAgo(dateString) {
        const [day, month, year] = dateString.split('/').map(Number);
        const date = new Date(2000 + year, month - 1, day); // Assuming years are in format YY
        const today = new Date();
        const diffTime = Math.abs(today - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        const years = Math.floor(diffDays / 365);
        const remainingDaysAfterYears = diffDays % 365;
        const months = Math.floor(remainingDaysAfterYears / 30.44); // Average days in a month
        const days = Math.floor(remainingDaysAfterYears % 30.44);
        
        const parts = [];
        
        if (years > 0) {
            parts.push(`${years} year${years > 1 ? 's' : ''}`);
        }
        
        if (months > 0) {
            parts.push(`${months} month${months > 1 ? 's' : ''}`);
        }
        
        if (days > 0) {
            parts.push(`${days} day${days > 1 ? 's' : ''}`);
        }
        
        if (parts.length === 0) {
            return 'Today';
        }
        
        if (parts.length === 1) {
            return `${parts[0]} ago`;
        }
        
        if (parts.length === 2) {
            return `${parts[0]} and ${parts[1]} ago`;
        }
        
        return `${parts[0]}, ${parts[1]} and ${parts[2]} ago`;
    }
    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    setText('totalFlights', totalFlights);
    setText('totalTime', `${hours}h ${minutes}m`);
    setText('uniqueSites', uniqueSites);
    setText('uniqueTakeoffs', uniqueTakeoffs);
    setText('uniqueLandings', uniqueLandings);
    setText('uniqueCountries', uniqueCountries);
    setText('schoolFlights', schoolFlights);
    setText('clubFlights', clubFlights);
    setText('highestdistance', highestdistance ? `${highestdistance} km` : '-');
    setText('highestGrade', highestGrade ? `${highestGrade}` : '-');
    setText('longestFlight', `${longestHours}h ${longestMinutes}m`);
    setText('firstFlightDate', firstFlight ? formatDate(firstFlight.date) : '-');
    setText('lastFlightDate', lastFlight ? formatDate(lastFlight.date) : '-');
    setText('daysAgo', lastFlight ? calculateDaysAgo(lastFlight.date) : '-');
    setText('daysAgofirst', firstFlight ? calculateDaysAgo(firstFlight.date) : '-');
    setText(
        'averageFlightsYear',
        averageFlightsYear.toFixed(1)
    );
    setText('mostUsedTakeoff', mostUsedTakeoff);
setText('mostUsedSite', mostUsedSite);
setText('mostUsedCountry', mostUsedCountry);
    setText(
        'averageFlightsMonth',
        averageFlightsMonth.toFixed(1)
    );
    setText(
        'averageFlightDuration',
        `${averageFlightHours}h ${averageFlightRemainingMinutes}m`
    );
    
    setText(
        'totalDistance',
        `${totalDistance.toFixed(1)} km`
    );
    
    setText(
        'averageDistance',
        `${averageDistance.toFixed(1)} km`
    );
    setText(
        'maximumAltitude',
        maximumAltitude ? `${maximumAltitude.toFixed(0)} m` : '-'
    );
}

// Add these helper functions
function parseFlightDate(dateString) {
    if (!dateString) return null;
    const [day, month, year] = dateString.split('/');
    return new Date(2000 + parseInt(year), parseInt(month) - 1, parseInt(day));
}

function formatDisplayDate(dateString) {
    if (!dateString) return '-';
    const date = parseFlightDate(dateString);
    if (!date || isNaN(date)) return '-';
    return dateString; // Keep the DD/MM/YY format for display
}

function calculateDaysAgo(dateString) {
    const flightDate = parseFlightDate(dateString);
    if (!flightDate || isNaN(flightDate)) return '-';
    
    const today = new Date();
    const diffTime = Math.abs(today - flightDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
function formatFlightTime(hours) {
    if (hours < 1) {
        // Convert to minutes and round to nearest minute
        const minutes = Math.round(hours * 60);
        return `<span class="number">${minutes}</span>m`;
    }
    // For 1 hour or more, show hours with one decimal
    return `<span class="number">${hours.toFixed(1)}</span>h`;
}
function populateTable(flights) {
    const tbody = document.getElementById('flightTableBody');
    tbody.innerHTML = flights.map((flight, index) => `
        <tr onclick="showFlightDetails(${index})">
            <td>${flight.date}</td>
            <td>${flight.site}</td>
            <td>${flight.country}</td>
            <td>${flight.grade}m</td>
            <td>${formatDuration(flight.time)}</td>
        </tr>
    `).join('');
}
function updateGearUI() {
    const gliderNameElement = document.getElementById('gliderNameDisplay');
    const harnessNameElement = document.getElementById('harnessNameDisplay');
    const reserveNameElement = document.getElementById('reserveNameDisplay');

    if (gliderNameElement) {
        const activeGlider = gearData.gliders[gearData.activeGliderIndex] || {}; // Fallback to an empty object
        const gliderDetails = `${activeGlider.brand || ''} ${activeGlider.model || ''}`.trim();
        gliderNameElement.textContent = gliderDetails || 'Not Set';
    }

    if (harnessNameElement) {
        const activeHarness = gearData.harnesses[gearData.activeHarnessIndex] || {}; // Fallback to an empty object
        const harnessDetails = `${activeHarness.brand || ''} ${activeHarness.model || ''}`.trim();
        harnessNameElement.textContent = harnessDetails || 'Not Set';
    }
    if (reserveNameElement) {
        const activereserve = gearData.reserve[gearData.activereserveIndex] || {}; // Fallback to an empty object
        const reserveDetails = `${activereserve.brand || ''} ${activereserve.model || ''}`.trim();
        reserveNameElement.textContent = reserveDetails || 'Not Set';
    }
    updateGearPreview();
}

function handleProfileImageChange(event) {
    const file = event.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    
    if (!file) return;
    
    if (!allowedTypes.includes(file.type)) {
        showCustomAlert('Please upload a valid image file (JPEG, PNG, or WEBP)');
        return;
    }
    
    if (file.size > maxSize) {
        showCustomAlert('Image size should be less than 5MB');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            document.getElementById('profileImageModal').src = e.target.result;
            document.getElementById('profileImage').src = e.target.result;
            gearChanged = true;
            showSaveChangesButton();
        } catch (error) {
            console.error('Error updating profile image:', error);
            showCustomAlert('Failed to update profile image. Please try again.');
        }
    };
    
    reader.onerror = function() {
        showCustomAlert('Error reading file. Please try again.');
    };
    
    reader.readAsDataURL(file);
}

//PROFILE

function addQualification() {
    const qualificationsList = document.getElementById('qualificationsList');
    const qualificationItem = document.createElement('div');
    qualificationItem.className = 'qualification-item-edit';
    
    const newIndex = profileData.qualifications.length;
    
    qualificationItem.innerHTML = `
        <div class="form-group">
            <div>
                <label>Qualification Name</label>
                <input type="text" class="qualificationName" placeholder="Enter qualification name">
            </div>
            <div>
                <label>School</label>
                <input type="text" class="qualificationSchool" placeholder="Enter school name">
            </div>
            <div>
                <label>Date</label>
                <input type="date" class="qualificationDate">
            </div>
            <div class="completed-checkbox">
                <label>
                    <input type="checkbox" class="qualificationCompleted">
                    Completed
                </label>
            </div>
        </div>
        <button type="button" class="secondary-button delete-button" onclick="deleteQualification(${newIndex})">Delete</button>
    `;
    
    qualificationsList.appendChild(qualificationItem);
    
    // Add input listeners
    qualificationItem.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            gearChanged = true;
            showSaveChangesButton();
        });
    });
    
    profileData.qualifications.push({
        name: '',
        school: '',
        date: '',
        completed: false
    });
    
    gearChanged = true;
    showSaveChangesButton();

    // Initialize date picker for the new qualification
    const newDateInput = qualificationItem.querySelector('.qualificationDate');
    if (newDateInput) {
        flatpickr(newDateInput, {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    }
}

function addCourses() {
    profileData.Courses.push({
        name: '',
        school: '',
        startDate: '',
        endDate: '',
        comments: '',
        flights: 0
    });

    loadCoursesToForm(); // Re-render all with new entry
    gearChanged = true;
    showSaveChangesButton();
}

  
function addDocument() {
    const documentsList = document.getElementById('documentsList');
    const documentItem = document.createElement('div');
    documentItem.className = 'document-item-edit';
    
    const newIndex = profileData.documents.length;
    
    documentItem.innerHTML = `
        <div class="form-group">
            <div>
                <label>Document Name</label>
                <input type="text" class="documentName" placeholder="Enter document name">
            </div>
            <div>
                
                <input type="file" class="documentFile" accept="image/*,.pdf" style="display: none;">
                <div class="document-upload-button" onclick="this.previousElementSibling.click()">
                    <div class="document-preview">📄</div>
                    <span>Upload</span>
                </div>
            </div>
        </div>
        <button type="button" class="secondary-button delete-button" onclick="deleteDocument(${newIndex})">Delete</button>
    `;
    
    documentsList.appendChild(documentItem);
    
    // Add input listeners
    documentItem.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            gearChanged = true;
            showSaveChangesButton();
        });
        if (input.type === 'file') {
            input.addEventListener('change', handleDocumentUpload);
        }
    });
    
    profileData.documents.push({
        name: '',
        file: null
    });
    
    gearChanged = true;
    showSaveChangesButton();
}

function handleDocumentUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const preview = event.target.nextElementSibling.querySelector('.document-preview');
    const uploadText = event.target.nextElementSibling.querySelector('span');
    
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.className = 'document-preview modal-preview';
            preview.innerHTML = `<img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover;">`;
            uploadText.textContent = 'Change Image';
            
            // Store the file data in the documents array
            const documentItem = event.target.closest('.document-item-edit');
            const index = Array.from(documentItem.parentNode.children).indexOf(documentItem);
            profileData.documents[index].file = e.target.result;

            // Add click handler for preview
            preview.style.cursor = 'pointer';
            preview.onclick = (e) => {
                e.stopPropagation(); // Prevent triggering file upload
                const options = {
                    dataSource: [{
                        src: e.target.result,
                        w: 1000,
                        h: 1000
                    }],
                    showHideAnimationType: 'fade'
                };
                
                const pswp = new PhotoSwipe(options);
                pswp.on('uiRegister', function() {
                    pswp.ui.registerElement({
                        name: 'custom-caption',
                        order: 9,
                        isButton: false,
                        appendTo: 'root',
                        html: 'Caption text',
                        onInit: (el, pswp) => {
                            pswp.on('change', () => {
                                const currSlideElement = pswp.currSlide.data;
                                el.innerHTML = currSlideElement.caption || '';
                            });
                        }
                    });
                });
                pswp.init();
            };
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '📄';
        uploadText.textContent = 'Change Document';
        
        // Store the file name for PDFs
        const documentItem = event.target.closest('.document-item-edit');
        const index = Array.from(documentItem.parentNode.children).indexOf(documentItem);
        profileData.documents[index].file = file.name;
    }
    
    gearChanged = true;
    showSaveChangesButton();
}

function deleteQualification(index) {
    profileData.qualifications = profileData.qualifications.filter((_, idx) => idx !== index);
    refreshQualificationsInModal();
    gearChanged = true;
    showSaveChangesButton();
}
function deleteCourses(index) {
    profileData.Courses.splice(index, 1);
    loadCoursesToForm(); // You need to rebuild the UI after deletion
    gearChanged = true;
    showSaveChangesButton();
}
function loadCoursesToForm() {
    const CoursesList = document.getElementById('CoursesList');
    CoursesList.innerHTML = ''; // Clear old entries

    profileData.Courses.forEach((course, index) => {
        const CoursesItem = document.createElement('div');
        CoursesItem.className = 'Courses-item-edit';

        CoursesItem.innerHTML = `
            <div class="form-group">
                <div>
                    <label>Course Name</label>
                    <input type="text" class="CoursesName" value="${course.name || ''}" placeholder="Enter course name">
                </div>
                <div>
                    <label>School</label>
                    <input type="text" class="Courseschool" value="${course.school || ''}" placeholder="Enter school name">
                </div>
                <div>
                    <label>Start Date</label>
                    <input type="date" class="CoursesStartDate" value="${course.startDate || ''}">
                </div>
                <div>
                    <label>End Date</label>
                    <input type="date" class="CoursesEndDate" value="${course.endDate || ''}">
                </div>
                <div>
                    <label>Number of Flights</label>
                    <input type="number" class="CoursesFlights" value="${course.flights || 0}" min="0">
                </div>
                <div>
                    <label>Comments (Optional)</label>
                    <textarea class="CoursesComments" placeholder="Add any comments here">${course.comments || ''}</textarea>
                </div>
            </div>
            <button type="button" class="secondary-button delete-button" onclick="deleteCourses(${index})">Delete</button>
        `;

        CoursesList.appendChild(CoursesItem);

        CoursesItem.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                gearChanged = true;
                showSaveChangesButton();
            });
        });

        // Re-initialize date pickers
        flatpickr(CoursesItem.querySelector('.CoursesStartDate'), {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });

        flatpickr(CoursesItem.querySelector('.CoursesEndDate'), {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: "2000-01-01"
        });
    });
}

function deleteDocument(index) {
    profileData.documents = profileData.documents.filter((_, idx) => idx !== index);
    refreshDocumentsInModal();
    gearChanged = true;
    showSaveChangesButton();
}
function hideSaveChangesButton() {
    const buttonGroup = document.querySelector('.button-group');
    const saveButton = document.getElementById('saveChangesButton');
    if (buttonGroup && saveButton) {
        buttonGroup.classList.remove('show');
        saveButton.style.display = 'none';
        saveButton.disabled = true;
    }
}
async function openProfileGearModal() {
    const modal = document.getElementById('profileGearModal');
    const closeBtn = modal.querySelector('.close-button'); // Make sure you have this class on your close button
    
    // Handle modal close via button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        gearChanged = false; // Reset the change flag
        hideSaveChangesButton(); // Hide the save button
    };
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    scrollModalToTop(modal);
    gearChanged = false;

    const profileImageInput = document.getElementById('profileImageInput');
    profileImageInput.addEventListener('change', handleProfileImageChange);

    const saveChangesButton = document.getElementById('saveChangesButton');
    saveChangesButton.style.display = 'none';
    try {
        const basicProfileData = await dbOperations.getData(STORES.profile, 'basicProfile') || {};
        
        // Set the birth date input value
        const birthDateInput = document.getElementById('profileBirthDateInput');
        if (birthDateInput && basicProfileData.birthDate) {
            birthDateInput.value = basicProfileData.birthDate;
            
            // Reinitialize flatpickr with the stored date
            if (birthDateInput._flatpickr) {
                birthDateInput._flatpickr.destroy(); // Destroy existing instance
            }
            
            flatpickr(birthDateInput, {
                dateFormat: "Y-m-d",
                maxDate: "2010-12-31",
                minDate: "1940-01-01",
                defaultDate: basicProfileData.birthDate, // Use stored date
                yearSelector: true,
                onChange: function(selectedDates, dateStr) {
                    gearChanged = true;
                    showSaveChangesButton();
                }
            });
        }
    // Add background image event listeners
    const backgroundInput = document.getElementById('profileBackgroundInput');
    const removeBackgroundBtn = document.getElementById('removeBackgroundBtn');
    
    if (backgroundInput) {
        backgroundInput.addEventListener('change', handleBackgroundImageChange);
    }
    
    if (removeBackgroundBtn) {
        removeBackgroundBtn.addEventListener('click', removeBackgroundImage);
    }
        // Set weight if it exists
        const weightInput = document.getElementById('profileWeightInputModal');
        if (weightInput && basicProfileData.weight) {
            weightInput.value = basicProfileData.weight;
        }
        const bloodInput = document.getElementById('bloodInputModal');
            if (bloodInput) {
                bloodInput.value = basicProfileData.blood || '';
            }
            const licenseInput = document.getElementById('licenseInputModal');
            if (licenseInput) {
                licenseInput.value = basicProfileData.license || '';
            }

    } catch (error) {
        console.error('Error loading basic profile data:', error);
    }
    // Load extended profile data from IndexedDB instead of localStorage
    try {
        const extendedProfileData = await dbOperations.getData(STORES.profile, 'extendedProfile') || {
            qualifications: [],
            Courses: [],
            documents: []
        };
        
        profileData.Courses = extendedProfileData.Courses || [];
        profileData.qualifications = extendedProfileData.qualifications || [];
        profileData.documents = extendedProfileData.documents || [];
    } catch (error) {
        console.error('Error loading extended profile data:', error);
        profileData.qualifications = [];
        profileData.Courses = [];
        profileData.documents = [];
    }

    const initialValues = {
        name: document.getElementById('profileNameDisplay').textContent,
        image: document.getElementById('profileImage').src,
        gliders: JSON.stringify(gearData.gliders),
        reserve: JSON.stringify(gearData.reserve),
        harnesses: JSON.stringify(gearData.harnesses)
    };

    const form = document.getElementById('profileGearForm');
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            gearChanged = true;
            showSaveChangesButton();
        });
        input.addEventListener('input', () => {
            gearChanged = true;
            showSaveChangesButton();
        });
    });

    const profileNameInputModal = document.getElementById('profileNameInputModal');
    if (profileNameInputModal) {
        profileNameInputModal.value = initialValues.name === 'Who am I?' ? '' : initialValues.name;
    }

    const profileImageModal = document.getElementById('profileImageModal');
    if (profileImageModal) {
        profileImageModal.src = initialValues.image;
    }

    refreshGlidersInModal();
    refreshreserveInModal();
    refreshHarnessesInModal();
    refreshQualificationsInModal();
    loadCoursesToForm();
    refreshDocumentsInModal();
    updateGearPreview();
}
function closeProfileGearModal() {
    const modal = document.getElementById('profileGearModal');
    const profileImageInput = document.getElementById('profileImageInput');
    profileImageInput.removeEventListener('change', handleProfileImageChange);
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function validateProfileForm() {
    const nameInput = document.getElementById('profileNameInputModal');
    const name = nameInput.value.trim();
    
    if (name.length < 2) {
        showCustomAlert('Please enter a valid name (minimum 2 characters)');
        return false;
    }
    
    return true;
}

async function calculateGliderHours(gliderName) {
    try {
        // Get all flights from IndexedDB
        const flights = await dbOperations.getAllData(STORES.flights);
        
        // Filter flights for this glider and calculate total time
        const gliderFlights = flights.filter(flight => 
            flight.glider === `${gliderName.brand} ${gliderName.model}`
        );
        
        // Sum up all flight times and convert to hours
        const totalMinutes = gliderFlights.reduce((total, flight) => {
            return total + (parseInt(flight.time) || 0);
        }, 0);

        // Add initial hours (converted to minutes) to total
        const initialHours = parseFloat(gliderName.initial_hours || 0);
        const totalHours = (totalMinutes / 60) + initialHours;

        return totalHours.toFixed(1); // Return with one decimal place
    } catch (error) {
        console.error('Error calculating glider hours:', error);
        return '0.0';
    }
}

async function calculatereserveHours(reserveName) {
    try {
        // Get all flights from IndexedDB
        const flights = await dbOperations.getAllData(STORES.flights);
        
        // Filter flights for this reserve and calculate total time
        const reserveFlights = flights.filter(flight => 
            flight.reserve === `${reserveName.brand} ${reserveName.model}`
        );
        
        // Sum up all flight times and convert to hours
        const totalMinutes = reserveFlights.reduce((total, flight) => {
            return total + (parseInt(flight.time) || 0);
        }, 0);

        // Add initial hours (converted to minutes) to total
        const initialHours = parseFloat(reserveName.initial_hours || 0);
        const totalHours = (totalMinutes / 60) + initialHours;

        return totalHours.toFixed(1); // Return with one decimal place
    } catch (error) {
        console.error('Error calculating reserve hours:', error);
        return '0.0';
    }
}
async function calculateharnessHours(harnessName) {
    try {
        // Get all flights from IndexedDB
        const flights = await dbOperations.getAllData(STORES.flights);
        
        // Filter flights for this harness and calculate total time
        const harnessFlights = flights.filter(flight => 
            flight.harness === `${harnessName.brand} ${harnessName.model}`
        );
        
        // Sum up all flight times and convert to hours
        const totalMinutes = harnessFlights.reduce((total, flight) => {
            return total + (parseInt(flight.time) || 0);
        }, 0);

        // Add initial hours (converted to minutes) to total
        const initialHours = parseFloat(harnessName.initial_hours || 0);
        const totalHours = (totalMinutes / 60) + initialHours;

        return totalHours.toFixed(1); // Return with one decimal place
    } catch (error) {
        console.error('Error calculating harness hours:', error);
        return '0.0';  // Match glider return type
    }
}

async function saveProfileGearDetails() {
    if (!validateProfileForm()) {
        return;
    }

    try {
        // Save basic profile data
        const profileInfo = document.querySelector('.profile-info');
        const basicProfileData = {
            name: document.getElementById('profileNameInputModal').value,
            image: document.getElementById('profileImageModal').src,
            birthDate: document.getElementById('profileBirthDateInput').value,
            weight: document.getElementById('profileWeightInputModal').value,
            blood: document.getElementById('bloodInputModal').value,
            license: document.getElementById('licenseInputModal').value,
            backgroundImage: profileInfo.style.backgroundImage || null // Add this line
        };
        await dbOperations.setData(STORES.profile, basicProfileData, 'basicProfile');

        // Update name display
        const profileNameDisplay = document.getElementById('profileNameDisplay');
        if (profileNameDisplay) {
            profileNameDisplay.textContent = basicProfileData.name || 'Who am I?';
        }

        // Save gear data
        const currentActiveGlider = gearData.activeGliderIndex;
        const currentActiveHarness = gearData.activeHarnessIndex;
        
        // Update gear data
        const gliderItems = document.querySelectorAll('#gliderList .gear-item');
        gearData.gliders = Array.from(gliderItems).map(item => ({
            brand: item.querySelector('.gliderBrand').value,
            model: item.querySelector('.gliderModel').value,
            size: item.querySelector('.gliderSize').value,
            serial: item.querySelector('.gliderSerial').value,
            initial_hours: item.querySelector('.gliderinitial_hours').value,
            dateBought: item.querySelector('.gliderDateBought').value,
            last_check: item.querySelector('.gliderDatelastcheck').value
        }));

        const harnessItems = document.querySelectorAll('#harnessList .gear-item');
        gearData.harnesses = Array.from(harnessItems).map(item => ({
            brand: item.querySelector('.harnessBrand').value,
            model: item.querySelector('.harnessModel').value,
            serial: item.querySelector('.harnessSerial').value,
            initial_hours: item.querySelector('.harnessinitial_hours').value,
            dateBought: item.querySelector('.harnessDateBought').value,
            last_check: item.querySelector('.harnessDatelastcheck').value
        }));
        const reserveItems = document.querySelectorAll('#reserveList .gear-item');
        gearData.reserve = Array.from(reserveItems).map(item => ({
            brand: item.querySelector('.reserveBrand').value,
            model: item.querySelector('.reserveModel').value,
            serial: item.querySelector('.reserveSerial').value,
            initial_hours: item.querySelector('.reserveinitial_hours').value,
            dateBought: item.querySelector('.reserveDateBought').value,
            last_check: item.querySelector('.reserveDatelastcheck').value
        }));

        
        // Update qualifications and documents
        const qualificationItems = document.querySelectorAll('#qualificationsList .qualification-item-edit');
        const CoursesItems = document.querySelectorAll('#CoursesList .Courses-item-edit');
        const documentItems = document.querySelectorAll('#documentsList .document-item-edit');

        const extendedProfileData = {
            qualifications: Array.from(qualificationItems).map(item => ({
                name: item.querySelector('.qualificationName').value,
                school: item.querySelector('.qualificationSchool').value,
                date: item.querySelector('.qualificationDate').value,
                completed: item.querySelector('.qualificationCompleted').checked
            })),
            Courses: Array.from(CoursesItems).map(item => ({
                name: item.querySelector('.CoursesName')?.value || '',
                school: item.querySelector('.Courseschool')?.value || '',
                startDate: item.querySelector('.CoursesStartDate')?.value || '',
                endDate: item.querySelector('.CoursesEndDate')?.value || '',
                flights: parseInt(item.querySelector('.CoursesFlights')?.value) || 0,
                comments: item.querySelector('.CoursesComments')?.value || '',
              })),
              
            documents: Array.from(documentItems).map((item, index) => {
                const documentName = item.querySelector('.documentName').value;
                // Preserve existing file data or set to null for new entries
                const existingDocument = profileData.documents[index];
                return {
                    name: documentName,
                    file: existingDocument ? existingDocument.file : null
                };
            })
        };

        // Save extended profile data to IndexedDB
        await dbOperations.setData(STORES.profile, extendedProfileData, 'extendedProfile');
        await dbOperations.setData(STORES.gear, gearData, 'defaultGear');
        
        // Update local profileData object
        profileData.qualifications = extendedProfileData.qualifications;
        profileData.Courses = extendedProfileData.Courses;
        profileData.documents = extendedProfileData.documents;

        // Update UI
        await updateGearPreview();
        if (profileInfo) {
            profileInfo.style.backgroundImage = basicProfileData.backgroundImage;
        }

        // Show success and close modal
        showSuccessMessage('Profile updated successfully!');
        closeProfileGearModal();
        gearChanged = false;

    } catch (error) {
        console.error('Error saving profile:', error);
        showCustomAlert('Error saving profile. Please try again.');
    }
}

async function loadProfile() {
    try {
        const basicProfileData = await dbOperations.getData(STORES.profile, 'basicProfile') || {};
        const savedProfileData = await dbOperations.getData(STORES.profile, 'extendedProfile') || {
            qualifications: [],
            Courses: [],
            documents: []
        };
        const profileInfo = document.querySelector('.profile-info');
        const formGroupProfile = document.querySelector('.form-group-profile');
        
        if (basicProfileData.backgroundImage) {
            if (profileInfo) profileInfo.style.backgroundImage = basicProfileData.backgroundImage;
            if (formGroupProfile) formGroupProfile.style.backgroundImage = basicProfileData.backgroundImage;
        } else {
            if (profileInfo) profileInfo.style.backgroundImage = 'none';
            if (formGroupProfile) formGroupProfile.style.backgroundImage = 'none';
        }
        
        updateBackgroundButtonVisibility();
        const profileImage = document.getElementById('profileImage');
        const profileNameDisplay = document.getElementById('profileNameDisplay');
        const profileNameInputModal = document.getElementById('profileNameInputModal');
        const profileWeightInputModal = document.getElementById('profileWeightInputModal');
        const bloodInputModal = document.getElementById('bloodInputModal');
        const licenseInputModal = document.getElementById('licenseInputModal');
        const profileImageModal = document.getElementById('profileImageModal');

        if (profileImage) {
            profileImage.src = basicProfileData.image || 'assets/default-profile.png';
        }
        
        if (profileImageModal) {
            profileImageModal.src = basicProfileData.image || 'assets/default-profile.png';
        }
        
        if (profileNameDisplay) {
            profileNameDisplay.textContent = basicProfileData.name || 'Who am I?';
        }

        if (profileNameInputModal) {
            profileNameInputModal.value = basicProfileData.name || '';
        }

        if (profileWeightInputModal) {
            profileWeightInputModal.value = basicProfileData.weight || '';
        }
        if (bloodInputModal) {
            bloodInputModal.value = basicProfileData.blood || '';
        }
        if (licenseInputModal) {
            licenseInputModal.value = basicProfileData.license || '';
        }

        profileData.qualifications = savedProfileData.qualifications || [];
        profileData.Courses = savedProfileData.Courses || [];
        
        const birthDateInput = document.getElementById('profileBirthDateInput');
        if (birthDateInput) {
            birthDateInput.value = basicProfileData.birthDate || '';
        }

        updateGearPreview();
    } catch (error) {
        console.error('Error loading profile:', error);
    }
}
function switchView(viewType) {
    // If viewType is not provided, get it from the toggle state
    if (!viewType) {
        const toggle = document.getElementById('viewToggle');
        viewType = toggle.checked ? 'list' : 'grid';
    }

    currentView = viewType;
    currentPage = 1;

    // Toggle view containers visibility
    const gridView = document.getElementById('gridView');
    const listView = document.getElementById('listView');
    
    if (gridView && listView) {
        gridView.classList.toggle('active', viewType === 'grid');
        listView.classList.toggle('active', viewType === 'list');
    }

    // Hide/Show load more button based on view
    const loadMoreButton = document.getElementById('loadMoreButton');
    if (loadMoreButton) {
        loadMoreButton.style.display = viewType === 'grid' ? 'block' : 'none';
    }

    // When switching to grid view, always sort by date descending
    if (viewType === 'grid') {
        currentSortColumn = 'date';
        isAscending = false;
        displayGridView(currentSortedFlights);
    } else {
        // Reset pagination when switching to list view
        currentPage = 1;
        displayListView(currentSortedFlights);
    }
}

function displayListView(flights) {
    const container = document.querySelector('#listView .table-container');
    if (!container) return;

    // Clear the container
    container.innerHTML = '';
    
    // Create the table structure
    const tableHTML = `
    <table class="flights-table">
        <thead>
            <tr>
                <th class="${currentSortColumn === 'date' ? 'active-sort' : ''}" onclick="sortFlights('date')" title="Date">
                    <img src="assets/calendar.png" class="header-icon" alt="Date">
                </th>
                <th class="${currentSortColumn === 'site' ? 'active-sort' : ''}" onclick="sortFlights('site')" title="Site">
                    <img src="assets/pin.png" class="header-icon" alt="Site">
                </th>

                <th class="${currentSortColumn === 'country' ? 'active-sort' : ''}" onclick="sortFlights('country')" title="Country">
                    <img src="assets/earth.png" class="header-icon" alt="Country">
                </th>
                <th class="${currentSortColumn === 'type' ? 'active-sort' : ''}" onclick="sortFlights('type')" title="Flight Type">
                    <img src="assets/plane.png" class="header-icon" alt="Flight Type">
                </th>
                <th class="${currentSortColumn === 'time' ? 'active-sort' : ''}" onclick="sortFlights('time')" title="Flight Time">
                    <img src="assets/timess.png" class="header-icon" alt="Time">
                </th>
                <th class="${currentSortColumn === 'grade' ? 'active-sort' : ''}" onclick="sortFlights('grade')" title="Elevation">
                    <img src="assets/doublear.png" class="header-icon" alt="Elevation">
                </th>
                <th class="${currentSortColumn === 'flight_distance' ? 'active-sort' : ''}" onclick="sortFlights('flight_distance')" title="Distance">
                    <img src="assets/distances.png" class="header-icon" alt="Distance">
                </th>
                <th class="${currentSortColumn === 'rating' ? 'active-sort' : ''}" onclick="sortFlights('rating')" title="Rating">
                    <img src="assets/rating.png" class="header-icon" alt="Rating">
                </th>
                <th class="${currentSortColumn === 'stressLevel' ? 'active-sort' : ''}" onclick="sortFlights('stressLevel')" title="Stress Level">
                    <img src="assets/profile.png" class="header-icon" alt="Stress">
                </th>
                                <th class="${currentSortColumn === 'takeoff' ? 'active-sort' : ''}" onclick="sortFlights('takeoff')" title="Takeoff">
                    <img src="assets/up.png" class="header-icon" alt="Site">
                </th>
                <th class="${currentSortColumn === 'landing' ? 'active-sort' : ''}" onclick="sortFlights('landing')" title="Landing">
                    <img src="assets/down.png" class="header-icon" alt="Site">
                </th>
                <th class="${currentSortColumn === 'school' ? 'active-sort' : ''}" onclick="sortFlights('school')" title="School">
                    <img src="assets/school.png" class="header-icon" alt="School">
                </th>
                <th class="${currentSortColumn === 'club' ? 'active-sort' : ''}" onclick="sortFlights('club')" title="Club">
                    <img src="assets/clubs.png" class="header-icon" alt="Club">
                </th>
            </tr>
        </thead>
        <tbody>
            ${flights.map((flight, index) => {
                return `
                <tr onclick="showFlightDetails(${index})">
                    <td data-type="date-table">${flight.date}</td>
                    <td>${flight.site || '-'}</td>
                    
                    <td>${flight.country || '-'}</td>
                    <td data-type="flight-type">
                        ${getFlightTypeWithColor(flight.type)}
                    </td>
                    <td data-type="number-type">${formatDuration(flight.time) || '-'}</td>
                    <td>${flight.grade || '-'}</td>
                    <td data-type="distance">${flight.flight_distance ? flight.flight_distance.toFixed(1) + ' km' : '-'}</td>
                    <td>${flight.rating ? '<img src="assets/rating.png" class="rating-star">'.repeat(flight.rating) : '-'}</td>
                    <td data-type="number">${flight.stressLevel !== null && flight.stressLevel !== undefined ? `${flight.stressLevel}%` : '-'}</td>
                    <td>${flight.takeoff || '-'}</td>
                    <td>${flight.landing || '-'}</td>
                    <td>${flight.school || '-'}</td>
                    <td>${flight.club || '-'}</td>
                </tr>
            `}).join('')}
        </tbody>
    </table>
`;

    container.innerHTML = tableHTML;

    // Hide load more button in list view
    const loadMoreButton = document.getElementById('loadMoreButton');
    if (loadMoreButton) {
        loadMoreButton.style.display = 'none';
    }
}

function getFlightTypeWithColor(type) {
    if (!type) return '-';
    
    switch (type) {
        case 'paragliding':
            return '<span class="flight-type paragliding">Paragliding</span>';
        case 'delta':
            return '<span class="flight-type delta">Delta</span>';
        case 'paramotor':
            return '<span class="flight-type paramotor">Paramotor</span>';
        default:
            return type;
    }
}
// Modify the handleFlightsBoxActivation function to respect current view
async function handleFlightsBoxActivation() {
    try {
        if (!currentSortedFlights || currentSortedFlights.length === 0) {
            const flights = await dbOperations.getAllFromStore(STORES.flights);
            if (flights && flights.length > 0) {
                currentSortedFlights = flights;
                if (currentView === 'grid') {
                    await displayGridView(flights);
                } else {
                    displayListView(flights);
                }
            } else {
                const container = document.getElementById('flightsGrid');
                container.innerHTML = '<div class="no-flights">No flights found. Add a flight to start filling this space</div>';
                return;
            }
        } else {
            if (currentView === 'grid') {
                await displayGridView(currentSortedFlights);
            } else {
                displayListView(currentSortedFlights);
            }
        }

        // Initialize maps for grid view only
        if (currentView === 'grid') {
            setTimeout(() => {
                document.querySelectorAll('.card-map').forEach(mapDiv => {
                    if (!mapDiv.hasChildNodes()) {
                        const index = mapDiv.id.split('-')[1];
                        const flight = currentSortedFlights[index];
                        
                        if (flight?.coordinates) {
                            initializeMiniMap(flight, mapDiv);
                        }
                    }
                });
            }, 100);
        }


    } catch (error) {
        console.error('Error in handleFlightsBoxActivation:', error);
        const container = document.getElementById('flightsGrid');
        container.innerHTML = '<div class="error">Error loading flights</div>';
    }
}

const GLIDER_BRANDS = [
    "Advance",
    "apco aviation",
    "axis paragliding",
    "davinci",
    "gin gliders",
    "kortel design",
    "mac para",
    "niviuk",
    "nova",
    "ozone",
    "sky paragliders",
    "skywalk",
    "sup air",
    "swing",
    "u-turn",
    "wintech paragliders",
    "dudek",
    "woody valley"

];

const HARNESS_BRANDS = [
    "Advance",
    "apco aviation",
    "Austrialpin",
    "axis paragliding",
    "davinci",
    "finsterwalder charly",
    "gin gliders",
    "kortel design",
    "mac para",
    "niviuk",
    "nova",
    "ozone",
    "sky paragliders",
    "skywalk",
    "sup air",
    "swing",
    "u-turn",
    "dudek",
    "x-dream"

];

const RESERVE_BRANDS = [
    "Advance",
    "apco aviation",
    "companion",
    "davinci",
    "finsterwalder charly",
    "gin gliders",
    "kortel design",
    "mac para",
    "niviuk",
    "nova",
    "sky paragliders",
    "skywalk",
    "sup air",
    "swing",
    "u-turn",
    "vital parachute",
    "wintech paragliders",
    "woody valley",
    "dudek",
    "x-dream"
 
];


const ACCESS_BRANDS = [
    "Advance",
    "air3",
    "ALFAPILOT",
    "anytone",
    "bainbridgeint",
    "davinci",
    "digifly",
    "edelrid",
    "fidlock",
    "finsterwalder charly",
    "flymaster",
    "hanwag",
    "jdc electronic",
    "kortel design",
    "luthor technologies",
    "mac para",
    "mipfly",
    "muvit",
    "nauzer",
    "ozone",
    "retevis",
    "savior",
    "sky paragliders",
    "skywalk",
    "stodeus",
    "sup air",
    "swing",
    "syride",
    "u-turn",
    "volirium",
    "woody valley",
    "x-dream",
    "dudek",
    "yaesu"
 
];

const brandImages = {
    'advance': 'advance.png',
    'air3': 'air3.png',
    'alfapilot': 'ALFAPILOT.jpg',
    'anytone': 'anytone.jpg',
    'apco aviation': 'apco_aviation.png',
    'austriAlpin': 'austriAlpin.png',
    'axis paragliding': 'axis_paragliding.png',
    'bainbridgeint': 'bainbridgeint.jpg',
    'companion': 'companion.jpg',
    'davinci': 'davinci.jpg',
    'digifly': 'digifly.jpg',
    'edelrid': 'edelrid.jpg',
    'fidlock': 'fidlock.jpg',
    'finsterwalder charly': 'finsterwaldercharly.jpg',
    'flymaster': 'flymaster.jpg',
    'gin gliders': 'gin_gliders.jpg',
    'hanwag': 'hanwag.jpg',
    'jdc electronic': 'jdc_electronic.jpg',
    'kortel design': 'kortel_design.jpg',
    'luthor technologies': 'luthor_technologies.jpg',
    'mac para': 'mac_para.jpg',
    'mipfly': 'mipfly.jpg',
    'muvit': 'muvit.jpg',
    'nauzer': 'nauzer.jpg',
    'niviuk': 'niviuk.png',
    'nova': 'nova.jpg',
    'ozone': 'ozone.jpg',
    'retevis': 'retevis.jpg',
    'savior': 'savior.jpg',
    'sky paragliders': 'sky_paragliders.jpg',
    'skywalk': 'skywalk.jpg',
    'stodeus': 'stodeus.jpg',
    'sup air': 'sup_air.jpg',
    'swing': 'swing.png',
    'syride': 'syride.jpg',
    'u-turn': 'u_turn.jpg',
    'vital parachute': 'vital_parachute.jpg',
    'volirium': 'volirium.jpg',
    'wintech paragliders': 'wintech_paragliders.jpg',
    'woody valley': 'woody_valley.jpg',
    'x-dream': 'x_dream.jpg',
    'dudek': 'DUDEK.png',
    'yaesu': 'yaesu.jpg'
};

async function updateGearPreview() {
    const gliderList = document.getElementById('gliderPreviewList');
    const harnessList = document.getElementById('harnessPreviewList');
    const reserveList = document.getElementById('reservePreviewList');
    const qualificationsList = document.getElementById('qualificationsPreviewList');
    const CoursesList = document.getElementById('CoursesPreviewList');
    const documentsList = document.getElementById('documentsPreviewList');
    
    try {
        // Get pilot data from IndexedDB
        const basicProfileData = await dbOperations.getData(STORES.profile, 'basicProfile') || {};
                // Get extended profile data
                const extendedProfileData = await dbOperations.getData(
                    STORES.profile,
                    'extendedProfile'
                ) || {
                    qualifications: [],
                    Courses: [],
                    documents: []
                };
        const pilotPreviewList = document.getElementById('pilotPreviewList');

        const qualificationNames = profileData.qualifications
            .filter(qual => qual.name)
            .map(qual => qual.name)
            .join(', ');

        pilotPreviewList.innerHTML = `
        <div class="preview-item-pilot">
                <span>Name</span>
                <span class="preview-item-details-pilot">${basicProfileData.name ? basicProfileData.name : 'Not set'}</span>
            </div>
            <div class="preview-item-pilot">
                <span>Birth Date:</span>
                <span class="preview-item-details-pilot">${formatDate(basicProfileData.birthDate) || 'Not set'}</span>
            </div>
            <div class="preview-item-pilot">
                <span>Weight:</span>
                <span class="preview-item-details-pilot">${basicProfileData.weight ? basicProfileData.weight + ' kg' : 'Not set'}</span>
            </div>
            <div class="preview-item-pilot">
                <span>Blood Type:</span>
                <span class="preview-item-details-pilot">${basicProfileData.blood ? basicProfileData.blood  : 'Not set'}</span>
            </div>
            <div class="preview-item-pilot">
                <span>License number:</span>
                <span class="preview-item-details-pilot">${basicProfileData.license ? basicProfileData.license  : 'Not set'}</span>
            </div>
            <div class="preview-item-pilot">
                <span>Qualifications:</span>
                <span class="preview-item-details-pilot">
                    ${qualificationNames || 'Not set'}
                </span>
            </div>
        `;

        if (gearData.gliders.length > 0) {
            const gliderElements = await Promise.all(gearData.gliders.map(async (glider, index) => {
                const totalHours = await calculateGliderHours(glider);
                const brandImage = brandImages[glider.brand.toLowerCase()];
                const daysSinceCheck = daysSinceDate(glider.last_check);
                const statsFromCheck = await getStatsFromLastCheck(glider, 'glider');
                
                return `
<div class="glider-item ${index === gearData.activeGliderIndex ? 'active' : ''}">
${index === gearData.activeGliderIndex ? '<div class="active-check"></div>' : ''}
<div class="glider-item-main">
 ${brandImage ? `<img src="assets/brands/${brandImage}" alt="${glider.brand}" class="brand-image">` : ''}
     <div class="glider-brand-model">
     <div class="brand-model">
        ${glider.brand} ${glider.model} ${glider.size ? `<span class="glider-size">${glider.size}</span>` : ''}
    </div>
    ${glider.serial ? `
        <div class="serial-number">
            ${glider.serial}
        </div>
    ` : ''}
    </div>
</div>
<div class="glider-item-details">
<div class="glider-item-icon">
<img src="assets/calendar.png" alt="Wind">
</div>
<div class="glider-item-dates">
    <span class="purchase-date">Bought: ${formatDate(glider.dateBought)}</span>
    <span class="check-date">Last Check: ${formatDate(glider.last_check)}</span>
</div>

</div>
 ${glider.last_check ? `
<div class="since-check-stats">
    <div class="stat-item mini">
        <span class="stat-value mini">${daysSinceDate(glider.last_check)}</span>
        <span class="stat-label mini">Since check</span>
    </div>
<div class="stat-item mini">
    <span class="stat-value mini">${formatFlightTime(statsFromCheck.hours)}</span>
    <span class="stat-label mini">Flight time since check</span>
</div>
    <div class="stat-item mini">
        <span class="stat-value mini"><span class="number">${statsFromCheck.flights}</span></span>
        <span class="stat-label mini">Flights since check</span>
    </div>
</div>
` : ''}
<div class="glider-stats">
    <div class="stat-item">
        <span class="stat-value total">${totalHours}h</span>
        <span class="stat-label">Total Hours</span>
    </div>
    <div class="stat-item">
        <span class="stat-value">${glider.initial_hours || 0}h</span>
        <span class="stat-label">Initial hours</span>
    </div>
    <div class="stat-item">
        <span class="stat-value">${(totalHours - (glider.initial_hours || 0)).toFixed(1)}h</span>
        <span class="stat-label">Added Hours</span>
    </div>
</div>

</div>
                `;
            }));
            gliderList.innerHTML = gliderElements.join('');
        } else {
            gliderList.innerHTML = '<div class="preview-empty">No wings added</div>';
        }
        
        if (gearData.reserve.length > 0) {
            const reserveElements = await Promise.all(gearData.reserve.map(async (reserve, index) => {
                const totalHours = await calculatereserveHours(reserve);
                const brandImage = brandImages[reserve.brand.toLowerCase()];
                const daysSinceCheck = daysSinceDate(reserve.last_check);
                const statsFromCheck = await getStatsFromLastCheck(reserve, 'reserve');
            
                return `
        <div class="glider-item ${index === gearData.activereserveIndex ? 'active' : ''}">
        ${index === gearData.activeGliderIndex ? '<div class="active-check"></div>' : ''}
        <div class="glider-item-main">
        ${brandImage ? `<img src="assets/brands/${brandImage}" alt="${reserve.brand}" class="brand-image">` : ''}
        <div class="glider-brand-model">
        <div class="brand-model">
        ${reserve.brand} ${reserve.model} 
        </div>
        <div class="serial-number">
        ${reserve.serial}
        </div>
        </div>
        </div>
        <div class="glider-item-details">
        <div class="glider-item-icon">
        <img src="assets/calendar.png" alt="Wind">
        </div>
        <div class="glider-item-dates">
        <span class="purchase-date">Bought: ${formatDate(reserve.dateBought)}</span>
        <span class="check-date">Last Check: ${formatDate(reserve.last_check)}</span>
        </div>
        </div>
                    ${reserve.last_check ? `
                <div class="since-check-stats">
                    <div class="stat-item mini">
                        <span class="stat-value mini">${daysSinceDate(reserve.last_check)}</span>
                        <span class="stat-label mini">Since check</span>
                    </div>
                    <div class="stat-item mini">
                        <span class="stat-value mini">${formatFlightTime(statsFromCheck.hours)}</span>
                        <span class="stat-label mini">Flight time since check</span>
                    </div>
                    <div class="stat-item mini">
                        <span class="stat-value mini"><span class="number">${statsFromCheck.flights}</span></span>
                        <span class="stat-label mini">Flights since check</span>
                    </div>
                </div>
            ` : ''}
        <div class="glider-stats">
        <div class="stat-item">
        <span class="stat-value total">${totalHours}h</span>
        <span class="stat-label">Total Hours</span>
        </div>
        <div class="stat-item">
        <span class="stat-value">${reserve.initial_hours || 0}h</span>
        <span class="stat-label">Initial hours</span>
        </div>
        <div class="stat-item">
        <span class="stat-value">${(totalHours - (reserve.initial_hours || 0)).toFixed(1)}h</span>
        <span class="stat-label">Added Hours</span>
        </div>
        </div>
        </div>
                `;
            }));
            reserveList.innerHTML = reserveElements.join('');
        } else {
            reserveList.innerHTML = '<div class="preview-empty">No reserves added</div>';
        }
// Then in the harness preview, use it exactly like the glider preview:
if (gearData.harnesses.length > 0) {
    const harnessElements = await Promise.all(gearData.harnesses.map(async (harness, index) => {
        const totalHours = await calculateharnessHours(harness);
        const brandImage = brandImages[harness.brand.toLowerCase()];
        const daysSinceCheck = daysSinceDate(harness.last_check);
        const statsFromCheck = await getStatsFromLastCheck(harness, 'harness');
    
        return `
        <div class="glider-item ${index === gearData.activeHarnessIndex ? 'active' : ''}">
            ${index === gearData.activeHarnessIndex ? '<div class="active-check"></div>' : ''}
            <div class="glider-item-main">
            ${brandImage ? `<img src="assets/brands/${brandImage}" alt="${harness.brand}" class="brand-image">` : ''}
            <div class="glider-brand-model">
            <div class="brand-model">
            ${harness.brand} ${harness.model}
            </div>
                    ${harness.serial ? `
                        <div class="serial-number">
                            ${harness.serial}
                        </div>
                    ` : ''}
            </div>
            </div>
            <div class="glider-item-details">
                <div class="glider-item-icon">
                    <img src="assets/calendar.png" alt="Calendar">
                </div>
                <div class="glider-item-dates">
                    <span class="purchase-date">Bought: ${formatDate(harness.dateBought)}</span>
                    <span class="check-date">Last Check: ${formatDate(harness.last_check)}</span>
                </div>
            </div>
                        ${harness.last_check ? `
                <div class="since-check-stats">
                    <div class="stat-item mini">
                        <span class="stat-value mini">${daysSinceDate(harness.last_check)}</span>
                        <span class="stat-label mini">Since check</span>
                    </div>
                    <div class="stat-item mini">
                        <span class="stat-value mini">${formatFlightTime(statsFromCheck.hours)}</span>
                        <span class="stat-label mini">Flight time since check</span>
                    </div>
                    <div class="stat-item mini">
                        <span class="stat-value mini"><span class="number">${statsFromCheck.flights}</span></span>
                        <span class="stat-label mini">Flights since check</span>
                    </div>
                </div>
            ` : ''}
            <div class="glider-stats">
                <div class="stat-item">
                    <span class="stat-value total">${totalHours}h</span>
                    <span class="stat-label">Total Hours</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${harness.initial_hours || 0}h</span>
                    <span class="stat-label">Initial hours</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${(totalHours - (harness.initial_hours || 0)).toFixed(1)}h</span>
                    <span class="stat-label">Added Hours</span>
                </div>
            </div>
        </div>
        `;
    }));
    harnessList.innerHTML = harnessElements.join('');
} else {
    harnessList.innerHTML = '<div class="preview-empty">No harnesses added</div>';
}

        
        // Update qualifications preview using profileData
        qualificationsList.innerHTML = profileData.qualifications.length > 0 
            ? profileData.qualifications.map(qual => `
                <div class="preview-item ${qual.completed ? 'completed' : ''}">
                    <span>${qual.name || 'Untitled'}</span>
                    <span class="preview-item-details">
                        ${qual.school ? qual.school + ' - ' : ''}${formatDate(qual.date)}
                        ${qual.completed ? '<span class="completed-check"><img src="assets/active.png" alt="Wind"></span>' : ''}
                    </span>
                </div>
            `).join('')
            : '<div class="preview-empty">No qualifications added</div>';
           
           
            CoursesList.innerHTML = (profileData.Courses && profileData.Courses.length > 0)
            ? profileData.Courses.map(qual => `
                <div class="preview-item">
                  
                  <div class="preview-item-details2">
                  <span class="course-title">${qual.name || 'Untitled'}</span>
                    ${qual.school ? `<div><strong>School:</strong> ${qual.school}</div>` : ''}
                    ${(qual.startDate || qual.endDate) ? `<div><strong>Dates:</strong> ${formatDate(qual.startDate)} to ${formatDate(qual.endDate)}</div>` : ''}
                    ${qual.flights ? `<div><strong>Flights:</strong> ${qual.flights}</div>` : ''}
                    ${qual.comments ? `<div><strong>Comments:</strong> ${qual.comments}</div>` : ''}
                  </div>
                </div>
              `).join('')
            : '<div class="preview-empty">No Courses added</div>';
          
          
        
        // Update documents preview using profileData
        // documentsList.innerHTML = profileData.documents.length > 0 
        //     ? profileData.documents.map(doc => `
        //         <div class="preview-item document-preview" onclick="viewDocument('${doc.file}')">
        //             <div class="preview-item-content">
        //                 <img src="assets/${doc.file?.startsWith('data:image') ? 'image-icon.png' : 'document-icon.png'}" 
        //                      alt="Document" 
        //                      class="document-icon">
        //                 <span>${doc.name || 'Untitled Document'}</span>
        //             </div>
        //             <span class="preview-item-details">
        //                 ${formatDate(doc.date)}
        //             </span>
        //         </div>
        //     `).join('')
        //     : '<div class="preview-empty">No documents added</div>';
    } catch (error) {
        console.error('Error updating gear preview:', error);
    }
}

