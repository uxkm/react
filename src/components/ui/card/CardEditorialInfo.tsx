import { Tag, TagGroup } from '@/comp/ui/Tag';

export function CardEditorialMeta({
  category,
  date,
}: Readonly<{ category?: string; date?: string }>) {
  if (!category && !date) return null;
  return (
    <div className="card_editorial-meta">
      {category && <span>{category}</span>}
      {date && <time dateTime={date}>{date.replaceAll('-', '.')}</time>}
    </div>
  );
}

export function CardKeywords({ keywords }: Readonly<{ keywords?: readonly string[] }>) {
  if (!keywords?.length) return null;
  return (
    <TagGroup
      tight
      ariaLabel="콘텐츠 키워드"
      className="card_editorial-keywords"
    >
      {keywords.map((word, index) => (
        <Tag
          key={`${word}-${index}`}
          variant="borderless"
          color="default"
          size="sm"
          style={{ color: 'inherit', background: 'transparent' }}
        >
          {word}
        </Tag>
      ))}
    </TagGroup>
  );
}
