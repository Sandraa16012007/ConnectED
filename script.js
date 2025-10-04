// ===== Data =====
const alumniData = [
  { id: 1, name: "Mithali Sen", photo: "/assets/mithali-sen.jpg", year: 2026, role: "Senior Software Engineer", company: "Google", category: "Tech", email: "mithalisen@example.com", linkedin: "linkedin.com/in/mithalis" },
  { id: 2, name: "Aarav Sharma", photo: "/assets/aarav-sharma.jpg", year: 2025, role: "Investment Analyst", company: "Goldman Sachs", category: "Finance", email: "aarav@example.com", linkedin: "linkedin.com/in/aarav" },
  { id: 3, name: "Tanushree Pant", photo: "/assets/tanushree-pant.jpg", year: 2027, role: "PhD Researcher", company: "MIT", category: "Research", email: "tanushree@example.com", linkedin: "linkedin.com/in/tanushree" },
  { id: 4, name: "Pankaj Saxena", photo: "/assets/pankaj-saxena.jpg", year: 2026, role: "UX Designer", company: "Adobe", category: "Creative", email: "pankaj@example.com", linkedin: "linkedin.com/in/pankaj" },
  { id: 5, name: "Shubham Malhotra", photo: "/assets/shubham-malhotra.jpg", year: 2025, role: "Data Scientist", company: "Meta", category: "Tech", email: "shubham@example.com", linkedin: "linkedin.com/in/shubham" },
  { id: 6, name: "Bhumika Patel", photo: "/assets/bhumika-patel.jpg", year: 2028, role: "Financial Advisor", company: "Morgan Stanley", category: "Finance", email: "bhumika@example.com", linkedin: "linkedin.com/in/bhumika" },
  { id: 7, name: "Arjun Mehra", photo: "/assets/arjun-mehra.jpg", year: 2025, role: "Software Engineer", company: "TCS", category: "Tech", email: "arjun@example.com", linkedin: "linkedin.com/in/arjunmehra" },
  { id: 8, name: "Neha Sharma", photo: "/assets/neha-sharma.jpg", year: 2026, role: "Research Scholar", company: "IIT Delhi", category: "Research", email: "neha@example.com", linkedin: "linkedin.com/in/nehasharma" },
  { id: 9, name: "Rohan Iyer", photo: "/assets/rohan-iyer.jpg", year: 2027, role: "Investment Analyst", company: "HDFC Bank", category: "Finance", email: "rohan@example.com", linkedin: "linkedin.com/in/rohaniyer" },
  { id: 10, name: "Ananya Gupta", photo: "/assets/ananya-gupta.jpg", year: 2028, role: "UX Designer", company: "Flipkart", category: "Creative", email: "ananya@example.com", linkedin: "linkedin.com/in/ananyagupta" }
];

const mentors = [
  { id: 1, name: "Ananya Gupta", photo: "/assets/ananya-gupta.jpg", expertise: "Software Development", company: "Amazon", available: true },
  { id: 2, name: "Arjun Mehra", photo: "/assets/arjun-mehra.jpg", expertise: "Product Management", company: "Apple", available: true },
  { id: 3, name: "Shubham Malhotra", photo: "/assets/shubham-malhotra.jpg", expertise: "Data Science", company: "Netflix", available: false },
  { id: 4, name: "Nina Patel", photo: "/assets/nina-patel.jpeg", expertise: "Marketing Strategy", company: "Spotify", available: true },
];

const stories = [
  { id: 1, name: "Priya Sharma", photo: "/assets/bhumika-patel.jpg", title: "Founded Successful AI Startup", summary: "Raised $5M in Series A funding for her AI-powered healthcare platform", fullStory: "After graduating, Priya worked at a tech giant for 2 years before taking the leap to start her own company. Her platform uses AI to predict patient health risks, and it's now used in over 50 hospitals across the country." },
  { id: 2, name: "Rahul Verma", photo: "/assets/shubham-malhotra.jpg", title: "PhD from Stanford University", summary: "Received full scholarship for Machine Learning research", fullStory: "Rahul's passion for research led him to pursue a PhD at Stanford. He credits the strong academic foundation from our institution and guidance from alumni already in academia." },
  { id: 3, name: "Anjali Desai", photo: "/assets/tanushree-pant.jpg", title: "Senior Manager at Microsoft", summary: "Led a team of 50+ engineers on cloud infrastructure", fullStory: "Starting as a software engineer, Anjali quickly rose through the ranks at Microsoft. She emphasizes the importance of continuous learning and networking." },
];

const upcomingEvents = [
  { id: 1, title: "Career Growth in Tech Industry", date: "October 15, 2025", type: "online", location: "Zoom", attendees: 150, speaker: "Sarah Johnson", description: "Learn about career advancement strategies" },
  { id: 2, title: "Alumni Networking Meetup", date: "October 22, 2025", type: "offline", location: "Campus Auditorium", attendees: 80, speaker: "Multiple Alumni", description: "Network with alumni from various industries" },
  { id: 3, title: "Entrepreneurship Workshop", date: "October 5, 2025", type: "online", location: "Google Meet", attendees: 120, speaker: "Priya Sharma", description: "Insights on building and scaling a startup" },
  { id: 4, title: "Higher Studies Abroad Session", date: "October 12, 2025", type: "online", location: "Microsoft Teams", attendees: 95, speaker: "Dr. Ananya Gupta", description: "Guidance on applications, scholarships, and university life abroad" },
  { id: 5, title: "Finance & Investment Strategies", date: "October 20, 2025", type: "offline", location: "Campus Seminar Hall", attendees: 60, speaker: "Rohan Iyer", description: "Learn how to navigate careers in finance and make smart investments" },
  { id: 6, title: "Creative Careers in Design", date: "November 2, 2025", type: "online", location: "Zoom", attendees: 130, speaker: "Meera Khanna", description: "Exploring opportunities in UX, product design, and creative industries" },
  { id: 7, title: "Placement Preparation Bootcamp", date: "October 10, 2025", type: "offline", location: "Campus Training Room", attendees: 200, speaker: "Alumni Panel", description: "Mock interviews, resume reviews, and placement tips from alumni" },
  { id: 8, title: "AI & Future of Work", date: "November 18, 2025", type: "online", location: "Google Meet", attendees: 175, speaker: "Karan Desai", description: "A look into AI trends, automation, and future career opportunities" },
  { id: 9, title: "Alumni Sports & Cultural Day", date: "October 25, 2025", type: "offline", location: "Campus Grounds", attendees: 250, speaker: "Multiple Alumni", description: "Celebrate with alumni through sports matches, music, and cultural events" }
];

const pastEvents = [
  { id: 4, title: "Breaking into Finance", date: "February 10, 2025", type: "online", location: "Zoom", attendees: 200, speaker: "Pankaj Saxena", description: "Strategies for landing jobs in top financial institutions" },
  { id: 5, title: "Research Opportunities Abroad", date: "January 28, 2025", type: "offline", location: "Seminar Hall", attendees: 90, speaker: "Joseph Saji", description: "How to apply for PhD programs" },
  { id: 6, title: "AI & Machine Learning Trends", date: "March 12, 2025", type: "online", location: "Microsoft Teams", attendees: 250, speaker: "Dr. Arjun Mehta", description: "Explore the latest breakthroughs in AI and their career opportunities" },
  { id: 7, title: "Women in Leadership", date: "April 2, 2025", type: "offline", location: "Conference Room A", attendees: 110, speaker: "Ananya Deshpande", description: "Panel discussion on challenges and opportunities for women leaders" },
  { id: 8, title: "Sustainability Careers", date: "April 18, 2025", type: "online", location: "Google Meet", attendees: 175, speaker: "Ravi Kapoor", description: "Building a career in renewable energy and sustainability sectors" }
];

// ===== State =====
let state = {
  selectedYear: 'all',
  selectedCategory: 'all',
  showContact: null,
  activeMentorTab: 'find',
  activeEventTab: 'upcoming',
  expandedStory: null,
};

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

document.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// ===== Alumni Directory =====
function renderAlumni() {
  const grid = document.getElementById('alumniGrid');
  if (grid) {
    const filtered = alumniData.filter(a =>
      (state.selectedYear === 'all' || a.year.toString() === state.selectedYear) &&
      (state.selectedCategory === 'all' || a.category === state.selectedCategory)
    );

    grid.innerHTML = filtered.map((alumni, index) => `
      <div class="alumni-card scale-in" style="animation-delay: ${index * 75}ms;">
        <img src="${alumni.photo}" alt="${alumni.name}" class="alumni-photo">
        <h3 class="alumni-name">${alumni.name}</h3>
        <span class="badge badge-gradient">Class of ${alumni.year}</span>
        <div class="alumni-role">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          ${alumni.role}
        </div>
        <div class="alumni-role">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          ${alumni.company}
        </div>
        <span class="badge badge-outline">${alumni.category}</span>
        <button class="btn btn-primary contact-btn" onclick="toggleContact(${alumni.id})">
          ${state.showContact === alumni.id ? 'Hide Contact' : 'Contact'}
        </button>
        ${state.showContact === alumni.id ? `
          <div class="contact-info fade-in">
            <a href="mailto:${alumni.email}" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              ${alumni.email}
            </a>
            <a href="https://${alumni.linkedin}" target="_blank" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path></svg>
              LinkedIn Profile
            </a>
          </div>
        ` : ''}
      </div>
    `).join('');
  }
}

function toggleContact(id) {
  state.showContact = state.showContact === id ? null : id;
  renderAlumni();
}

document.querySelectorAll('#yearFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#yearFilters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedYear = btn.dataset.filter;
    renderAlumni();
  });
});

document.querySelectorAll('#categoryFilters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#categoryFilters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedCategory = btn.dataset.filter;
    renderAlumni();
  });
});

// ===== Mentor Connect =====
async function renderMentors() {
  const content = document.getElementById('mentorTabContent');
  if (content) {
    const currentContent = content.firstChild;

    if (currentContent) {
      currentContent.classList.remove('fade-in');
      currentContent.classList.add('fade-out');
      await new Promise(resolve => setTimeout(resolve, 300)); // Wait for fade-out animation
    }

    if (state.activeMentorTab === 'find') {
      content.innerHTML = `<div class="mentor-grid fade-in">${mentors.map(m => `
        <div class="mentor-card scale-in">
          <img src="${m.photo}" alt="${m.name}" class="alumni-photo">
          <h3 class="alumni-name">${m.name}</h3>
          <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 0.5rem;">${m.expertise}</p>
          <p class="alumni-role" style="font-weight: 500; margin-bottom: 1rem;">${m.company}</p>
          <span class="badge" style="background: ${m.available ? 'hsl(190, 95%, 45%)' : 'hsl(220, 10%, 50%)'}; color: white; margin-bottom: 1rem;">${m.available ? 'Available' : 'Busy'}</span>
          <button class="btn btn-primary w-full contact-btn" ${!m.available ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Connect
          </button>
        </div>
      `).join('')}</div>`;
    } else {
      content.innerHTML = `<div class="become-mentor-card fade-in">
        <div class="mentor-icon-wrapper"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg></div>
        <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Share Your Journey</h3>
        <p style="color: var(--muted-foreground); margin-bottom: 2rem;">Help the next generation of students by sharing your knowledge and experiences.</p>
        <div class="benefit-list">${['Share your industry insights', 'Guide students in their career path', 'Build meaningful connections', 'Give back to the community'].map(b => `
          <div class="benefit-item"><div class="benefit-dot"><div class="benefit-dot-inner"></div></div><span>${b}</span></div>
        `).join('')}</div>
        <a href="/pages/auth.html"><button class="btn btn-primary btn-lg glow">Apply to Become a Mentor</button></a>
      </div>`;
    }
  }
}

document.querySelectorAll('[data-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('section').id;
    if (section === 'mentorship') {
      document.querySelectorAll('#mentorship .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeMentorTab = btn.dataset.tab;
      renderMentors();
    } else if (section === 'events') {
      document.querySelectorAll('#events .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeEventTab = btn.dataset.tab;
      renderEvents();
    }
  });
});

// ===== Success Stories =====
function renderStories() {
  const container = document.getElementById('storiesContainer');
  if (container) {
    container.innerHTML = stories.map(s => `
      <div class="story-card scale-in">
        <div class="story-header">
          <img src="${s.photo}" alt="${s.name}" class="story-photo">
          <div class="story-title-section">
            <div class="story-icon-name"><div class="story-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div><h3 class="story-name">${s.name}</h3></div>
            <h4 class="story-title gradient-text">${s.title}</h4>
            <p class="story-summary">${s.summary}</p>
          </div>
        </div>
        ${state.expandedStory === s.id ? `<div class="story-full fade-in">${s.fullStory}</div>` : ''}
        <button class="expand-btn" onclick="toggleStory(${s.id})">
          ${state.expandedStory === s.id ? 'Show Less' : 'Read More'}
          <svg class="expand-icon ${state.expandedStory === s.id ? 'rotated' : ''}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    `).join('');
  }
}

function toggleStory(id) {
  state.expandedStory = state.expandedStory === id ? null : id;
  renderStories();
}

// ===== FAQ =====
const faqAccordion = document.getElementById('faqAccordion');
if (faqAccordion) {
  faqAccordion.innerHTML = faqs.map((faq, i) => `
    <div class="accordion-item scale-in" style="animation-delay: ${i * 50}ms;">
      <button class="accordion-header" onclick="toggleAccordion(${i})">${faq.question}<svg class="expand-icon" id="icon-${i}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
      <div class="accordion-content" id="content-${i}">${faq.answer}</div>
    </div>
  `).join('');
}

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  content.classList.toggle('active');
  icon.classList.toggle('rotated');
}

// ===== Events =====
async function renderEvents() {
  const events = state.activeEventTab === 'upcoming' ? upcomingEvents : pastEvents;
  const eventsGrid = document.getElementById('eventsGrid');
  if (eventsGrid) {
    const currentContent = eventsGrid.firstChild;

    if (currentContent) {
      currentContent.classList.remove('fade-in');
      currentContent.classList.add('fade-out');
      await new Promise(resolve => setTimeout(resolve, 300)); // Wait for fade-out animation
    }

    eventsGrid.innerHTML = `<div class="alumni-grid fade-in">${events.map(e => `
      <div class="event-card scale-in">
        <div class="event-header">
          <span class="event-type-badge">${e.type === 'online' ? '🌐 Online' : '📍 In-Person'}</span>
          <span class="event-attendees">👤 ${e.attendees}</span>
        </div>
        <h3 class="event-title">${e.title}</h3>
        <div class="event-details">
          <div class="event-detail-item">🗓️ ${e.date}</div>
          <div class="event-detail-item">📍 ${e.location}</div>
        </div>
        <p class="event-description">${e.description}</p>
        <div class="event-speaker"><div class="speaker-avatar"></div><div class="speaker-info"><div class="speaker-label">Speaker</div><div class="speaker-name">${e.speaker}</div></div></div>
        <button class="btn ${state.activeEventTab === 'upcoming' ? 'btn-primary' : 'btn-outline'} register-btn">${state.activeEventTab === 'upcoming' ? 'Register Now' : 'View Recording'}</button>
      </div>
    `).join('')}</div>`;
  }
}

// Initialize
renderAlumni();
renderMentors();
renderStories();
renderEvents();
