# Aditya Vemuri - Data Science Portfolio

A professional portfolio website showcasing data science, analytics, and business intelligence projects.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Power BI Integration**: Ready to embed your Power BI dashboards
- **SEO Optimized**: Structured with proper meta tags and semantic HTML
- **Fast Loading**: Optimized performance with minimal dependencies
- **Easy Customization**: Well-organized code with clear comments

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML file
├── styles.css       # All styling and responsive design
├── script.js        # Interactive functionality
└── README.md        # This file
```

## 🔧 Setup Instructions

### 1. Local Development

1. Clone or download this repository
2. Open `index.html` in your browser to view the site
3. Edit the files in VSCode or your preferred editor

### 2. Customizing Content

#### Adding Power BI Dashboards

To embed your Power BI dashboards, follow these steps:

1. **Publish to Web in Power BI**:
   - Open your dashboard in Power BI Service
   - Click "File" → "Embed" → "Publish to web (public)"
   - Click "Create embed code"
   - Copy the iframe code

2. **Add to Your Website**:
   - Find the `.project-embed-placeholder` div in `index.html`
   - Replace the placeholder with your iframe code:

```html
<div class="project-embed-placeholder">
    <!-- Replace this entire div with: -->
    <iframe 
        title="Your Dashboard Name" 
        width="100%" 
        height="600" 
        src="YOUR_POWER_BI_EMBED_URL_HERE" 
        frameborder="0" 
        allowFullScreen="true">
    </iframe>
</div>
```

3. **Style the iframe** (optional):
```css
/* Add to styles.css if needed */
.project-embed-placeholder iframe {
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

#### Updating Project Information

Edit the project cards in `index.html`:
- **Project Title**: Change the `<h3 class="project-title">` text
- **Company**: Update `<div class="project-company">` text
- **Tags**: Add/remove `<span class="tag">` elements
- **Description**: Modify the `<p class="project-description">` content
- **Results**: Edit the `<ul>` list items under "Key Impact"

#### Adding New Projects

Copy an existing `.project-card` div and customize it:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">New Project Title</h3>
        <div class="project-company">Company Name</div>
    </div>
    <div class="project-tags">
        <span class="tag">Tool 1</span>
        <span class="tag">Tool 2</span>
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <!-- Add Power BI embed or images here -->
</div>
```

#### Updating Contact Information

Edit the contact section in `index.html`:
- Email: Update `href="mailto:your-email@example.com"`
- LinkedIn: Update `href="https://linkedin.com/in/yourprofile"`
- Phone: Update `href="tel:+1234567890"`

### 3. Color Customization

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker shade */
    --accent-color: #3b82f6;       /* Highlights */
    /* ... more colors ... */
}
```

## 📤 Deployment

### Option 1: GitHub Pages (Free)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Click Save

Your site will be live at: `https://yourusername.github.io/portfolio/`

### Option 2: Vercel (Recommended - Free)

1. **Push to GitHub** (same as above)

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Your site will be live in ~30 seconds with a custom URL!

3. **Custom Domain** (optional):
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 3: Netlify (Alternative - Free)

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Click "Deploy site"

## 🔗 Adding to LinkedIn

Once deployed:

1. **Add Website to Profile**:
   - LinkedIn Profile → Contact Info → Website
   - Add your deployed URL

2. **Share in Posts**:
   - Create a post showcasing your portfolio
   - Include screenshots of your dashboards
   - Tag relevant skills and companies

3. **Include in Applications**:
   - Add portfolio link to resume
   - Mention in cover letters
   - Reference specific projects in applications

## 📊 Power BI Best Practices

### Security Considerations

⚠️ **Important**: Only use "Publish to Web" for dashboards with non-sensitive data!

- Power BI "Publish to Web" creates a **public** link anyone can view
- Do not use for confidential company data
- Consider using screenshots/videos for sensitive projects

### Alternatives for Sensitive Data

1. **Screenshots + Video Walkthrough**:
   - Take high-quality screenshots
   - Record a Loom/OBS video walkthrough
   - Embed video in your portfolio

2. **Recreate Key Visualizations**:
   - Use libraries like Chart.js, Plotly, or D3.js
   - Shows both Power BI AND programming skills

3. **PDF Export**:
   - Export dashboard as PDF
   - Display as images or embedded PDF

## 🎨 Customization Tips

### Adding a Blog Section

1. Create a new section in `index.html`:
```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Blog</h2>
        <!-- Add blog posts here -->
    </div>
</section>
```

2. Add blog post cards following the project card structure

### Adding Image Galleries

For screenshot carousels, consider using:
- [Swiper.js](https://swiperjs.com/) - Modern slider
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) - Image lightbox

### Adding a Resume Download

```html
<a href="resume.pdf" download class="btn btn-primary">
    Download Resume
</a>
```

## 🐛 Troubleshooting

### Power BI Embed Not Working

- Verify "Publish to Web" is enabled in Power BI
- Check that the iframe URL is correct
- Ensure no ad blockers are interfering
- Test in incognito/private browsing mode

### Mobile Menu Not Opening

- Check that `script.js` is loaded correctly
- Look for JavaScript errors in browser console (F12)
- Verify hamburger icon is clickable

### Site Not Updating After Changes

- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- In GitHub Pages: Changes can take 1-2 minutes to deploy
- In Vercel: Redeploy if changes don't appear

## 📈 Analytics (Optional)

Add Google Analytics to track visitors:

1. Get tracking code from [analytics.google.com](https://analytics.google.com)
2. Add before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 📝 TODO / Future Enhancements

- [ ] Add actual Power BI dashboard embeds
- [ ] Add project screenshots/videos
- [ ] Create blog section for case studies
- [ ] Add dark mode toggle
- [ ] Include downloadable resume
- [ ] Add testimonials section
- [ ] Implement contact form with backend
- [ ] Add more interactive data visualizations

## 🤝 Support

If you need help:
- Check browser console for errors (F12)
- Review this README thoroughly
- Google specific error messages
- Reach out via LinkedIn or email

## 📄 License

This portfolio template is free to use and customize for personal use.

---

**Built with HTML, CSS, and JavaScript**
**Designed for Data Science & Analytics Professionals**

Good luck with your portfolio! 🚀
