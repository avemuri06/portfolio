// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Animate hamburger to X
  hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Ignore empty hashes or non-target anchors
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = target.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
  lastScroll = currentScroll;
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
function highlightNavLink() {
  const scrollPosition = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', highlightNavLink);

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add typing effect to hero title (optional)
function typeEffect(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
// // Enable if you want it:
// window.addEventListener('load', () => {
//   const heroTitle = document.querySelector('.hero-title');
//   const originalText = heroTitle.textContent;
//   typeEffect(heroTitle, originalText, 50);
// });

// Console message for developers
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in how this site was built? Feel free to reach out!', 'font-size: 14px; color: #6b7280;');
console.log('%c📧 avemuri@unc.edu', 'font-size: 14px; color: #2563eb;');

// Simple form validation (if you add a contact form later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Utility function for future use with Power BI embeds
function adjustIframeHeight(iframe) {
  if (iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }
}

// Add this function when you embed Power BI dashboards
function initializePowerBIEmbeds() {
  const powerBIIframes = document.querySelectorAll('iframe[title*="Power BI"]');
  powerBIIframes.forEach(iframe => {
    iframe.addEventListener('load', () => {
      console.log('Power BI dashboard loaded successfully');
    });
  });
}
// // Call this when page loads if you have Power BI embeds
// window.addEventListener('load', initializePowerBIEmbeds);

// Performance: Lazy load images when added
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Add year to footer dynamically
const footerYear = document.querySelector('.footer p');
if (footerYear && footerYear.textContent.includes('2025')) {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
}

/* =========================
   Horizontal timeline: auto-position by date
   ========================= */
function renderHorizontalTimeline(items) {
  // items: [{ date: 'YYYY-MM', company: '', title: '', type?: 'promotion' }]
  const container = document.getElementById('timeline-h');
  console.log('Timeline container:', container);
  console.log('Items to render:', items);
  
  if (!container) {
    console.error('Timeline container #timeline-h not found!');
    return;
  }

  // Clear any existing items
  container.querySelectorAll('.tl-item, .year-marker').forEach(n => n.remove());

  // Parse dates (use 1st of the month for positioning)
  const parse = (s) => {
    const [y, m] = s.split('-').map(Number);
    return new Date(y, (m || 1) - 1, 1).getTime();
  };
  
  // Format date as "Dec 2025"
  const formatDate = (dateStr) => {
    const [y, m] = dateStr.split('-').map(Number);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[m - 1]} ${y}`;
  };

  // Sort by date asc (just in case)
  const sorted = [...items].sort((a, b) => parse(a.date) - parse(b.date));

  const times = sorted.map(i => parse(i.date));
  const minT = Math.min(...times);
  const maxT = Math.max(...times);
  const span = (maxT - minT) || 1; // prevent divide-by-zero
  
  console.log('Sorted items:', sorted);
  console.log('Time span:', minT, 'to', maxT);

  // Add year markers
  const startYear = new Date(minT).getFullYear();
  const endYear = new Date(maxT).getFullYear();
  
  for (let year = startYear; year <= endYear; year++) {
    const yearTime = new Date(year, 0, 1).getTime();
    const pct = ((yearTime - minT) / span) * 100;
    
    const marker = document.createElement('div');
    marker.className = 'year-marker';
    marker.style.setProperty('--pos', pct + '%');
    marker.textContent = year;
    container.appendChild(marker);
  }

  // Build nodes
  sorted.forEach((item, idx) => {
    const t = parse(item.date);
    const pct = ((t - minT) / span) * 100; // 0..100
    
    console.log(`Item ${idx}: ${item.company} at ${pct}%`);

    const art = document.createElement('article');
    art.className = 'tl-item' + (item.type === 'promotion' ? ' promotion' : '');
    art.style.setProperty('--pos', pct + '%');

    // dot (no stem)
    const dot = document.createElement('span');
    dot.className = 'dot';

    // card
    const card = document.createElement('div');
    card.className = 'tl-card';

    if (item.type === 'promotion') {
      const badge = document.createElement('span');
      badge.className = 'promotion-badge';
      badge.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" class="promo-icon">
          <path d="M3 17l6-6 4 4 6-8" fill="none" stroke="currentColor" stroke-width="2" />
          <path d="M15 7h5v5" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
        Promotion`;
      card.appendChild(badge);
    }

    const timeEl = document.createElement('time');
    timeEl.className = 'tl-date';
    timeEl.textContent = formatDate(item.date);

    const h4 = document.createElement('h4');
    h4.className = 'tl-company';
    h4.textContent = item.company;

    const p = document.createElement('p');
    p.className = 'tl-title';
    p.textContent = item.title;

    card.appendChild(timeEl);
    card.appendChild(h4);
    card.appendChild(p);

    art.appendChild(dot);
    art.appendChild(card);

    container.appendChild(art);
  });
  
  console.log('Timeline rendered! Items added:', container.querySelectorAll('.tl-item').length);
}

// Render on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const experienceData = [
    // Solutions³ LLC
    { date: '2023-07', company: 'Solutions³ LLC', title: 'Procurement and Sales Enablement Intern' },

    // Research
    { date: '2024-05', company: 'Self-led Capstone', title: 'Comparing Correlations of U.S. Internet Growth Factors: Software Companies and the Economy' },

    // The Morris Guild of Psychotherapy
    { date: '2024-06', company: 'The Morris Guild of Psychotherapy', title: 'Digital Marketing Intern' },
    { date: '2024-09', company: 'The Morris Guild of Psychotherapy', title: 'Marketing Consultant', type: 'promotion' },

    // UNC Impact Investing Club (progression)
    { date: '2024-09', company: 'UNC Impact Investing Club', title: 'Public Equities Research Analyst' },
    { date: '2025-05', company: 'UNC Impact Investing Club', title: 'Sector Head (Energy) – Public Equities Research', type: 'promotion' },
    { date: '2026-01', company: 'UNC Impact Investing Club', title: 'Head of Public Equities Research Division', type: 'promotion' },

    // AllPeople Marketplace
    { date: '2024-12', company: 'AllPeople Marketplace', title: 'Business Development Intern' },
    { date: '2025-03', company: 'AllPeople Marketplace', title: 'Lead Intern - Business Development Team', type: 'promotion' },

    // PSEG
    { date: '2025-06', company: 'PSEG', title: 'Business Analyst Intern' },

    // MetLife
    { date: '2026-06', company: 'MetLife', title: 'Data & Analytics Intern' }
  ];

  renderHorizontalTimeline(experienceData);
});
// Toggle individual dashboard images
function toggleImage(button) {
  const container = button.nextElementSibling;
  const svg = button.querySelector('svg polyline');
  const isHidden = container.style.display === 'none';
  
  if (isHidden) {
    container.style.display = 'block';
    svg.setAttribute('points', '18 15 12 9 6 15'); // Up arrow
    button.classList.add('active');
  } else {
    container.style.display = 'none';
    svg.setAttribute('points', '6 9 12 15 18 9'); // Down arrow
    button.classList.remove('active');
  }
}

// Copy email to clipboard functionality
function copyEmailToClipboard(event, email) {
  event.preventDefault();
  
  // Copy to clipboard
  navigator.clipboard.writeText(email).then(() => {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      Email copied to clipboard!
    `;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }).catch(err => {
    console.error('Failed to copy email:', err);
    // Fallback: open mailto
    window.location.href = `mailto:${email}`;
  });
}

// Add click handlers to all email links on page load
document.addEventListener('DOMContentLoaded', () => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    const email = link.getAttribute('href').replace('mailto:', '');
    link.addEventListener('click', (e) => copyEmailToClipboard(e, email));
  });
});
