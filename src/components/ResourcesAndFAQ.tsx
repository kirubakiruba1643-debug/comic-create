import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen, ArrowUpRight, X, HelpCircle, FileText } from 'lucide-react';
import { RESOURCES, FAQ_ITEMS, ResourceArticle, FAQItem } from '../data/siteData';

export const ResourcesAndFAQ: React.FC = () => {
  // Resources State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleCategory, setSelectedArticleCategory] = useState<string>('All');
  const [activeArticleModal, setActiveArticleModal] = useState<ResourceArticle | null>(null);

  // FAQ State
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  // Filter Articles
  const filteredArticles = RESOURCES.filter((article) => {
    const matchesCategory =
      selectedArticleCategory === 'All' || article.category === selectedArticleCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const articleCategories = ['All', 'Performance', 'Architecture', 'Design Systems', 'Engineering'];

  // Filter FAQs
  const faqCategories = ['All', 'Engagement', 'Delivery', 'Technical', 'Security'];
  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    return selectedFaqCategory === 'All' || item.category === selectedFaqCategory;
  });

  const toggleFaq = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-neutral-900/50 border-t border-neutral-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Technical Knowledge Base & Insights */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Technical Insights & Engineering Guides</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
                Architectural Whitepapers & Engineering Deep Dives
              </h2>
            </div>

            {/* Live Search Input */}
            <div className="mt-4 md:mt-0 relative w-full md:w-72">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter for Articles */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-none pb-2">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedArticleCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedArticleCategory === cat
                    ? 'bg-neutral-800 text-amber-400 border border-neutral-700'
                    : 'text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-850'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-6 sm:p-7 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Zero-Pill Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                      <span className="text-amber-400">{article.category}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-amber-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                      {article.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 mb-6 font-mono">
                      {article.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span>#{tag}</span>
                          {idx < article.tags.length - 1 && (
                            <span aria-hidden="true" className="text-neutral-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80">
                    <button
                      type="button"
                      onClick={() => setActiveArticleModal(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 p-8 rounded-xl bg-neutral-900/40 border border-neutral-800 text-neutral-400">
              <FileText className="w-8 h-8 mx-auto text-neutral-600 mb-2" />
              <p className="text-sm">No articles found matching "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedArticleCategory('All');
                }}
                className="mt-3 text-xs text-amber-400 hover:underline"
              >
                Reset search filters
              </button>
            </div>
          )}
        </div>

        {/* Part 2: Frequently Asked Questions Accordion */}
        <div id="faq" className="pt-12 border-t border-neutral-850">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Transparent Policies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display [text-wrap:balance]">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-2">
              Straightforward answers about our sprint structure, technology stack, security posture, and post-launch maintenance.
            </p>
          </div>

          {/* FAQ Category Filter */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto scrollbar-none pb-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedFaqCategory === cat
                    ? 'bg-neutral-800 text-amber-400 border border-neutral-700'
                    : 'text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-850'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3 max-w-4xl">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-neutral-900/80 border border-neutral-800 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-850/50 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white font-display">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-amber-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-4 bg-neutral-950/30">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Article Read Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
            onClick={() => setActiveArticleModal(null)}
          />

          <div className="relative w-full max-w-2xl max-h-[85vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 z-10">
            <button
              type="button"
              onClick={() => setActiveArticleModal(null)}
              className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-amber-400 font-semibold">{activeArticleModal.category}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{activeArticleModal.readTime}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{activeArticleModal.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-display">
                {activeArticleModal.title}
              </h3>

              <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs text-neutral-300 italic">
                {activeArticleModal.summary}
              </div>

              <div className="space-y-3 pt-2 text-sm text-neutral-300 leading-relaxed">
                {activeArticleModal.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-neutral-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveArticleModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  Close Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
