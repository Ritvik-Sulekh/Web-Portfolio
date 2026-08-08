/* components/data/search-index.js */

const SEARCH_INDEX = [
  { title: 'Guinness World Record',       href: 'pages/blog-files/guinness.html' },
  { title: 'Graduated, IIM Udaipur',      href: 'pages/blog-files/iim-graduation.html' },
  { title: 'CAT Top 0.2%',                href: 'pages/top-02.html' },
  { title: 'Portfolio Slides',            href: 'pages/work-portfolio.html' },
  { title: 'Work Experience',             href: 'pages/work-experience.html' },
  { title: 'Internships',                 href: 'pages/internships.html' },
  { title: 'Freelancer',                  href: 'pages/freelancer.html' },
  { title: 'PORs',                        href: 'pages/pors.html' },
  { title: 'Education',                   href: 'pages/education.html' },
  { title: 'ATS Resume',                  href: 'pages/ats-resume.html' },
  { title: 'Certifications',              href: 'pages/certifications.html' },
  { title: 'Case Competitions',           href: 'pages/case-competitions.html' },
  { title: 'Projects',                    href: 'pages/projects.html' },
  { title: 'Publications',                href: 'pages/publications.html' },
  { title: 'Skills',                      href: 'pages/skills.html' },
  { title: 'Testimonials',                href: 'pages/testimonials.html' },
  { title: 'Blogs',                       href: 'pages/blogs.html' },
  { title: "Let's Connect",               href: 'pages/business-card.html' },
];

function searchSite(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter(function (item) {
    return item.title.toLowerCase().includes(q);
  }).slice(0, 8);
}