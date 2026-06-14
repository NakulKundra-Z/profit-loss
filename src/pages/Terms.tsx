import { Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import pagesData from '../data/pages.json';

export default function Terms() {
  const termsPage = pagesData.find(page => page.slug === 'terms-conditions');

  return (
    <main id="main-content">
      {/* Breadcrumb Page Header */}
      <section className="page-hero" aria-label="Terms and Conditions Breadcrumbs">
        <div className="container">
          <h1>Terms &amp; Conditions</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&raquo;</span>
            <span aria-current="page">Terms &amp; Conditions</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-content" aria-label="Terms and conditions terms details">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {termsPage ? (
              <MarkdownRenderer content={termsPage.content} />
            ) : (
              <p>Terms &amp; Conditions content loading...</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
