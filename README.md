Here's a `README.md` file for your `bsr-film-website` project, meticulously crafted to include all the important versioning and project details from our conversation, ensuring no critical information is lost.

```markdown
# BSR Films - Company Profile Website

## Project Overview

The **BSR Films - Company Profile Website** is a modern, responsive, and professional single-page application designed to serve as the online presence for the BSR Films media production house, based in Raipur, Chhattisgarh. The site showcases their services, clientele, facilities, and unique storytelling approach.

### Current Status

The website is **feature-complete and stable**, currently operating as a **dark-theme-only site**. A recent attempt to implement a dark/light mode toggle was unsuccessful and all related changes have been fully reverted to ensure stability.

## Live Demo

While you plan to connect your custom domain later, the project is set up for **automated deployments via Vercel**. Once deployed, it will be accessible at `bsr-film-website.vercel.app` (or your chosen Vercel domain).

## Features

The website boasts a range of modern features:

*   **Single-Page Application (SPA):** Provides a seamless, one-page user experience with smooth internal navigation.
*   **Responsive Design:** Fully optimized for **mobile-first viewing**, adapting elegantly across mobile, tablet, and desktop devices using Tailwind CSS.
*   **Component-Based Architecture:** Built with React, featuring modular and maintainable components for each section of the site.
*   **Dynamic Hero Section:** A powerful initial impression with a **cinematic background image** (`hero-bg.jpg`) and gracefully **animated titles**.
*   **Particle Background:** A subtle, **moving particle effect** enhances the Hero section's visual appeal.
*   **Comprehensive Content Sections:** Includes dedicated sections for "About Us," "Our Services," "Our Major Clients," "Our Facilities," and "Why Choose BSR Films?".
*   **Interactive Client List:** The "Our Major Clients" section features a **compact, tag-style layout** with **clickable links** to prestigious client websites (e.g., World Bank, UNICEF) opening in new tabs, enhancing credibility.
*   **Functional External Links:** The "Explore Our Work" button links directly to the BSR Films YouTube channel, and the footer includes clickable social media icons for Facebook and YouTube.
*   **Scroll Animations:** Sections **fade and slide into view** as the user scrolls, thanks to Framer Motion integration.

## Tech Stack

The project leverages a powerful and modern technology stack:

*   **Frontend Framework:** **React** (v18.2.0)
*   **Build Tool:** **Vite** (v5.2.0)
*   **Styling:** **Tailwind CSS** (v4.0.0-alpha.17)
*   **Animations:** **Framer Motion** (latest version)
*   **Particle Effects:** **react-tsparticles** & **tsparticles-slim**
*   **Deployment Platform:** **Vercel**

## Installation & Local Development

To get the project up and running on your local machine:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/mynk717/bsr-film-website.git
    cd bsr-film-website
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port specified in your terminal).

## Deployment

The project is configured for **continuous deployment with Vercel**. Any changes pushed to the `main` branch of this GitHub repository will automatically trigger a new build and deployment on Vercel.

## Version History

The project's evolution is tracked through Git commits and tags:

*   **`f4f9133`**: `feat: initial project structure`
    *   *Description:* Initial setup of the React project with Vite, including basic Tailwind CSS configuration.
*   **`08fdf32`**: `logo hight changed from h-10 to h-20`
    *   *Description:* An early modification to increase the height of the BSR Films logo in the navigation bar. This commit represents a stable "version one" before significant UI enhancements.
*   **`d0d0b26` (Tag: `v2.0`)**: `feat: release v2.0 with animations and UI polish`
    *   *Description:* This major release includes the integration of Framer Motion for scroll-triggered animations, the responsive "tag-style" client section, clickable client links, social media integration, YouTube button link, and the particle background effect in the Hero section.

## Future Enhancements

Potential future work includes:

*   **Re-attempt Dark/Light Mode Toggle:** Addressing the previous challenges with Tailwind CSS v4 to successfully implement a theme switcher.
*   **Headless CMS Integration:** Connecting the site to a content management system (e.g., Sanity, Strapi, Contentful) to enable non-developers to update content easily.
*   **Custom Domain Connection:** Officially linking the deployed site on Vercel to a custom domain.

---

*This README was generated based on the project's codebase, commit history, and development conversation.*
```
