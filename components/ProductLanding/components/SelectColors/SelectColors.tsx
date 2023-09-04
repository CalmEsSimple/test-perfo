import variations_products from "@/utils/variations_products";
import { BtnColor, ColorContainer, Select } from "./styled";
import { IProps } from './types';
import { useEffect, useState } from "react";
import colors_selector from "../../utils/colors_selector";

const SelectColors = ({
  arrChildren,
  arrOptions,
  selectedChild,
  selectedProp,
  setSelectedProp,
  valToSearch,
  sizeName
}: IProps) => {

  const [childrenByColor, setChildrenByColor] = useState({})

  useEffect(() => {
    if (arrChildren) {
      setChildrenByColor(searchSelectedColor())
    }
  }, [selectedChild]);


  const searchSelectedColor = () => {
    let p: any = {}
    arrChildren?.forEach(child => {
      if (child.attributes[sizeName] == selectedChild?.attributes[sizeName]) {

        p[child.attributes[valToSearch as keyof typeof child.attributes]] = {
          "stock": child.stock,
          "backorder": child.backorder,
        }
      }
    })
    return p
  }

  return (

    <ColorContainer>
      <h4>Color: {variations_products[selectedProp as keyof typeof variations_products]}</h4>
      <Select>
        {Object.keys(childrenByColor).length > 0 && arrOptions.map((color: string) => (
          <BtnColor
            key={color}
            select={selectedProp === color && childrenByColor[color as keyof typeof childrenByColor]["stock"] > 0}
            disabled={childrenByColor[color as keyof typeof childrenByColor]["stock"] <= 0}
            style={{ backgroundColor: colors_selector[color as keyof typeof colors_selector] }}
            onClick={() => { setSelectedProp(color) }}
            title={variations_products[selectedProp as keyof typeof variations_products]}
            aria-label={variations_products[selectedProp as keyof typeof variations_products]}
          />
        ))}
      </Select>
    </ColorContainer>

  )
}

export default SelectColors