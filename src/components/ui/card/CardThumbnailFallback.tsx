import { Icon } from '@/comp/ui/Icon';

/** 미디어 가이드와 같은 그림 아이콘을 사용하는 장식용 썸네일 대체 표시. */
export default function CardThumbnailFallback() {
  return (
    <span
      className="card_thumbnail-placeholder card_media-placeholder"
      aria-hidden="true"
    >
      <Icon
        name="image"
        style={{ strokeWidth: 1.5 }}
      />
    </span>
  );
}
