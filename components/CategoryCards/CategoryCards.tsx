import {
  DivCards,
  TitleCards,
  TextCards,
  DivText,
  DivCardsContaner,
} from "./CategoryCardsCss";
import CategoryCard from "./CategoryCard/CategoryCard";
import { IProduct } from "@/state/products/types";

interface IProps {
  title: string
  textTitle: string
  items: IProduct[]
  installments: number
  splitCharacter?: string
}

const CategoryCards = ({ title, textTitle, items, installments, splitCharacter }: IProps) => {
  return (
    <DivCards>
      <DivText>
        <TitleCards>{title}</TitleCards>
        <TextCards>{textTitle}</TextCards>
      </DivText>
      <DivCardsContaner>
        {items.map((item) => (
          <CategoryCard key={item.name} item={item} installments={installments} splitCharacter={splitCharacter} />
        ))}
      </DivCardsContaner>
    </DivCards>
  );
};

export default CategoryCards;
