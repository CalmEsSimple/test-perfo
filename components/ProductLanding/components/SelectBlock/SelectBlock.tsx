import variations_products from "@/utils/variations_products";
import { Select } from "./styled"
import { IProps } from "./types";
import { useEffect, useState } from "react";

const heightCm = {
    "original-plus": "28 cm",
    "original": "22 cm",
    "hibrido-22cm-de-alto": "22 cm",
    "hibrido-plus-28cm-de-alto": "28 cm"
}

const SelectBlock = ({
    arrChildren,
    arrOptions,
    selectedChild,
    selectedProp,
    setSelectedProp,
    valToSearch,
    sizeName,
    setClearInput
}: IProps) => {

    const [childrenByHeight, setChildrenByHeight] = useState({})

    useEffect(() => {
        if (arrChildren) {
            setChildrenByHeight(searchSelectedHeight())
        }
    }, [selectedChild]);

    const searchSelectedHeight = () => {
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
        <Select>
            {
                Object.keys(childrenByHeight).length > 0 && (
                    arrOptions.map((height: string) => (
                        <button
                            key={height}
                            disabled={!(childrenByHeight[height as keyof typeof childrenByHeight]['stock'] > 0 || childrenByHeight[height as keyof typeof childrenByHeight]['backorder'])}
                            onChange={() => setSelectedProp(height)}
                            onClick={() => {
                                setSelectedProp(height),
                                setClearInput(true)
                            }}
                            className={selectedProp === height && (childrenByHeight[height as keyof typeof childrenByHeight]['stock'] > 0 || childrenByHeight[height as keyof typeof childrenByHeight]['backorder']) ? "selected" : ""}
                        >
                            {<p>{variations_products[height as keyof typeof variations_products]}</p>}
                            {<p className="p-height">{heightCm[height as keyof typeof heightCm]} de alto</p>}
                        </button>
                    ))
                )
            }

        </Select>
    )

}

export default SelectBlock