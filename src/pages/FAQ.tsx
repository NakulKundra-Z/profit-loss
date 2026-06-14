import { Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import pagesData from '../data/pages.json';

export default function FAQ() {
  const faqPage = pagesData.find(page => page.slug === 'faq');

  return (
    <main id="main-content">
      {/* Breadcrumb Page Header */}
      <section className="page-hero" aria-label="FAQ Breadcrumbs">
        <div className="container">
          <h1>Frequently Asked Questions (FAQs)</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <span aria-current="page">FAQs</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-content" aria-label="Frequently Asked Questions list">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqPage ? (
              <MarkdownRenderer content={faqPage.content} />
            ) : (
              <p>FAQ content loading...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
