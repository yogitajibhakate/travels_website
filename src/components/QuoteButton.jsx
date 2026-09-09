'use client';

export function QuoteButton({ className, style, children }) {
  return (
    <button
      className={className}
      style={style}
      onClick={() => {
        const btn = document.getElementById('header-quote-btn');
        if (btn) btn.click();
      }}
    >
      {children}
    </button>
  );
}

export function DiscussButton({ className, style, children }) {
  return (
    <button
      className={className}
      style={style}
      onClick={() => {
        const btn = document.getElementById('header-corporate-btn') || document.getElementById('header-quote-btn');
        if (btn) btn.click();
      }}
    >
      {children}
    </button>
  );
}
