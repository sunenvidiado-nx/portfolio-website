const workExperience = [
  {
    company: "Nextbank",
    role: "Flutter Developer",
    startDate: "November 2023",
    endDate: "Present",
    logo: "assets/work-experience/nextbank-logo.jpeg"
  },
  {
    company: "Hedgehog Lab",
    role: "Mobile Developer",
    startDate: "August 2022",
    endDate: "November 2023",
    logo: "assets/work-experience/hhl-logo.webp"
  },
  {
    company: "CRAFT-TEC Inc.",
    role: "Software Engineer",
    startDate: "March 2021",
    endDate: "August 2022",
    logo: "assets/work-experience/craft-tect-inc-logo.png"
  },
  {
    company: "various organizations",
    role: "Web developer",
    startDate: "March 2019",
    endDate: "March  2021",
    logo: "assets/work-experience/various-organizations.png"
  }
];

const projects = [
  {
    icon: 'assets/work-experience/nextbank-logo.jpeg',
    title: 'Nextbank Banking App',
    description: 'A modular Flutter banking application with customizable UI components and flexible integration options to accommodate diverse client requirements and banking workflows.',
    customUrl: 'https://www.nextbank.ph'
  },
  {
    icon: 'assets/work-experience/your-parking-space-logo.png',
    title: 'YourParkingSpace',
    description: 'YourParkingSpace is an online marketplace for drivers looking to find and pre-book parking in the United Kingdom.',
    customUrl: 'https://www.yourparkingspace.co.uk'
  },
  {
    icon: 'assets/work-experience/neutrocheck-logo.jpeg',
    title: 'Neutrocheck®',
    description: 'Neutrocheck® is a low-cost finger prick blood test and digital platform that provides a rapid and reliable result at home, helping doctors to identify patients at risk of neutropenic sepsis.',
    customUrl: 'https://52north.health/neutrocheck'
  },
  {
    icon: 'assets/work-experience/misthos-logo.png',
    title: 'Misthos',
    description: 'A tailored internal solution for managing clients and advisors, enabling informed decision-making anytime and anywhere through a secure mobile platform.',
    customUrl: 'https://www.misthos-group.com/about/secure/',
  },
  {
    icon: 'assets/work-experience/hgvt-logo.png',
    title: 'HGVT',
    description: 'HGVT is the UK\'s largest LGV/HGV Training provider with 65+ training centers across the UK. In partnership with MANPOWER, they offer comprehensive training from medical tests to HGV theory and practical training, with job placement assistance.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hgvt.hgvt',
    appStoreUrl: 'https://apps.apple.com/en/app/hgvt/id1636299174'
  },
  {
    icon: 'assets/work-experience/minicabit-logo.png',
    title: 'minicabit',
    description: 'A taxi comparison service, offering easy booking for taxis and transfers across towns and cities in the UK. Features various vehicle options from saloons to 8-seaters, with specialized airport transfer services.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.minicabit.android',
    appStoreUrl: 'https://apps.apple.com/en/app/minicabit-taxi-transfers/id955001537'
  },
  {
    icon: 'assets/work-experience/partnerlogin-logo.png',
    title: 'Håndværker.dk PartnerLogin',
    description: 'An app for craftsmen and service providers in Denmark to manage their Håndværker.dk partnership. Features include customer recommendation management, direct marketplace access, customer communication tools, project portfolio creation, and craftsmen networking capabilities.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=dk.haandvaerker.partnerappv2',
    appStoreUrl: 'https://apps.apple.com/en/app/håndværker-dk-partnerlogin/id1529848721'
  },
];

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  const header = document.createElement('div');
  header.className = 'project-header';

  const icon = document.createElement('div');
  icon.className = 'project-icon';
  const iconImg = document.createElement('img');
  iconImg.src = project.icon;
  iconImg.alt = `${project.title} Icon`;
  iconImg.width = 48;
  iconImg.height = 48;
  icon.appendChild(iconImg);

  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = project.title;

  header.appendChild(icon);
  header.appendChild(title);

  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = project.description;

  const storeButtons = document.createElement('div');
  storeButtons.className = 'project-store-buttons';

  if (project.appStoreUrl) {
    const appStoreButton = document.createElement('a');
    appStoreButton.href = project.appStoreUrl;
    appStoreButton.className = 'store-button';
    appStoreButton.target = '_blank';
    appStoreButton.rel = 'noopener noreferrer';
    appStoreButton.innerHTML = `<img src="assets/app-store.svg" alt="App Store" width="24" height="24">`;
    storeButtons.appendChild(appStoreButton);
  }

  if (project.playStoreUrl) {
    const playStoreButton = document.createElement('a');
    playStoreButton.href = project.playStoreUrl;
    playStoreButton.className = 'store-button';
    playStoreButton.target = '_blank';
    playStoreButton.rel = 'noopener noreferrer';
    playStoreButton.innerHTML = `<img src="assets/play-store.svg" alt="Play Store" width="24" height="24">`;
    storeButtons.appendChild(playStoreButton);
  }

  if (project.customUrl) {
    const customButton = document.createElement('a');
    customButton.href = project.customUrl;
    customButton.className = 'store-button';
    customButton.target = '_blank';
    customButton.rel = 'noopener noreferrer';
    customButton.innerHTML = `<img src="assets/url.svg" alt="Visit Website" width="24" height="24">`;
    storeButtons.appendChild(customButton);
  }

  card.appendChild(header);
  card.appendChild(description);
  card.appendChild(storeButtons);

  return card;
}

function renderWorkExperience() {
  const workGrid = document.querySelector('.work-grid');
  if (workGrid) {
    workGrid.innerHTML = workExperience.map(work => {
      const year = work.startDate.split(' ')[1];
      return `
      <div class="work-card" data-year="${year}">
        <div class="work-logo">
          <img src="${work.logo}" alt="${work.company} Logo" width="32" height="32">
        </div>
        <div class="work-details">
          <h3 class="work-role">${work.role} at ${work.company}</h3>
          <p class="work-date">${work.startDate} - ${work.endDate}</p>
        </div>
      </div>
    `;
    }).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.querySelector('.projects-grid');
  projects.forEach(project => {
    projectsGrid.appendChild(createProjectCard(project));
  });
  renderWorkExperience();
});