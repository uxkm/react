/** 기본 카드와 데이터 기반 카드 유형을 제공하는 공통 공개 입구. */
import { CardBase, type BaseCardProps } from './card/CardBase';
import TypedCard from './card/TypedCard';
import type { TypedCardProps } from './card/cardTypes';

export { CardHeader, CardBody, CardFooter, CardDeck } from './card/CardBase';
export type {
  CardVariant,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardDeckProps,
} from './card/CardBase';
export type * from './card/cardTypes';

export type CardProps = BaseCardProps | TypedCardProps;

/** type과 card를 지정하면 해당 유형, 생략하면 Header·Body·Footer 조합을 렌더합니다. */
export function Card(props: Readonly<CardProps>) {
  if ('card' in props) return <TypedCard {...props} />;
  return <CardBase {...props} />;
}

export default Card;
