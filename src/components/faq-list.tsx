export function FaqList({ items, idPrefix }: { items: { q: string; a: string }[]; idPrefix?: string }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.q} id={idPrefix ? `${idPrefix}-${index + 1}` : undefined}>
          <summary>
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-answer"><p>{item.a}</p></div>
        </details>
      ))}
    </div>
  );
}
