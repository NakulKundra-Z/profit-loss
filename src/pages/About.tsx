import { Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import pagesData from '../data/pages.json';

export default function About() {
  const aboutPage = pagesData.find(page => page.slug === 'about');
  
  return (
    <main id="main-content">
      {/* Breadcrumb Page Header */}
      <section className="page-hero" aria-label="About Breadcrumbs">
        <div className="container">
          <h1>About Us</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <span aria-current="page">About</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-content" aria-label="Company Overview">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {aboutPage ? (
              <MarkdownRenderer content={aboutPage.content} />
            ) : (
              <p>About content loading...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
