import { LandingContent } from '../../styled'
import ProductTitle from '../ProductTitle/ProductTitle'
import { IProps } from './types'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Wrapper,
  Breadcrumbs,
  LeftColumn,
  GalleryWrapper,
  LoadingGalleryContent,
  LoadingThumbnailsContent,
  RightColumn,
  PriceDiv,
  PillCategoryDiscount,
  DivEnsueño,
  SpanColumns,
  DivPillDiscount,
  DivPriceOff,
  VariationText,
  FeriaText,
} from './styled'
import Modal from '../Modal/Modal'
import ModalPaymentMethod from '../../../PaymentMethod/Modal/Modal'
import { IAttributes } from '@/state/products/types'
import { onAddItemToCart, onUpdateItemFromCart } from '@/state/cart/cartActions'
import url_variations from '../../utils/url_variations'
import ReviewsStars from '../Reviews/ReviewsStars/ReviewsStars.jsx'
import GalleryCarrousel from '../Gallery/GalleryCarrousel'
import SelectBlock from '../SelectBlock/SelectBlock'
import SelectSize from '../SelectSize/SelectSize'
import SelectColors from '../SelectColors/SelectColors'
import PricesVisor from '../PricesVisor/PricesVisor'
import PillOfferProduct from '../../../PillOfferProduct/PillOfferProduct'
import InformationShipping from '../InformationShipping/InformationShipping'
import BtnAddToCart from '../BtnAddToCart/BtnAddToCart'
import { getCartData } from '@/state/cart/cartSelector'
import getIDBySKU from '@/utils/idBySKU'
import FormStockOut from '@/components/FormStockOut/FormStockOut'
import tags from '../../../../jsons/tags_mailchimp.json'

interface Data {
  [key: string]: string
}

const tagsData: Data = tags

const MainBlock = ({
  title,
  boldTitle,
  dreamDelivery,
  description,
  category,
  children,
  discount,
  installments,
  galleryImages,
  skus,
  stateLoading,
  defaultProds,
  pillIdPrice,
  pillId,
  isCombo,
  idProd,
}: IProps) => {
  const cartData = useSelector(getCartData)

  const dispatch = useDispatch()

  const BED_CLOTHES = 'ropa de cama'
  const BASES = 'base'
  const DEFAULT = 'default'

  const msjVariation = {
    [BED_CLOTHES]: 'elegí la medida según el tamaño de tu colchón:',
    [DEFAULT]: 'elegí el tamaño perfecto:',
    [BASES]: 'se arma en menos de 15 minutos.',
  }

  let arrValuesAttr = {
    tamano: [] as string[],
    alto: [] as string[],
    color: [] as string[],
  }

  let propsNames = {
    tamano: '',
    alto: '',
    color: '',
  }

  const [selectedGroup, setSelectedGroup] = useState(children ?? undefined)

  const [addToCartEnabled, setAddToCartEnabled] = useState(false)

  const [selectedChild, setSelectedChild] = useState(
    children ? children[0] : undefined
  )
  const [tamanoState, setTamanoState] = useState('')
  const [altoState, setAltoState] = useState('')
  const [colorState, setColorState] = useState('')

  const [checkboxEnsueno, setCheckboxEnsueno] = useState(false)
  const [modalPostal, setModalPostal] = useState(false)

  const [variationsByURLSelected, setVariationsByURLSelected] = useState(false)
  const [sizeByURL, setSizeByURL] = useState<string | null>()
  const [heightByURL, setHeightByURL] = useState<string | null>()
  const [colorByURL, setColorByURL] = useState<string | null>()
  const [clearInput, setClearInput] = useState(false)

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search)
    setSizeByURL(queryParameters.get('tamano'))
    setHeightByURL(queryParameters.get('alto'))
    setColorByURL(queryParameters.get('color'))
  }, [])

  const searchAttribute = (
    variation: string,
    attributes: IAttributes,
    variationName: string
  ) => {
    propsNames[variation as keyof typeof propsNames] = variationName
    if (attributes.hasOwnProperty(variationName)) {
      if (
        !arrValuesAttr[variation as keyof typeof arrValuesAttr].includes(
          attributes[
            propsNames[
              variation as keyof typeof propsNames
            ] as keyof typeof attributes
          ]
        )
      ) {
        arrValuesAttr[variation as keyof typeof arrValuesAttr].push(
          attributes[
            propsNames[
              variation as keyof typeof propsNames
            ] as keyof typeof attributes
          ]
        )
      }
    }
  }

  const childrenVariationWithoutStock = () => {
    if (selectedChild) {
      return selectedChild.stock <= 0 && !selectedChild.backorder
    }
    return false
  }

  const allChildrenWithoutStock = () => {
    if (selectedGroup) {
      let allWithoutStock = 0

      selectedGroup?.forEach((child) => {
        if (child.stock <= 0 && !child.backorder) {
          allWithoutStock++
        }
      })

      const result = selectedGroup?.length === allWithoutStock

      return result
    }
    return false
  }

  const displayFormStockout = () => {
    return childrenVariationWithoutStock() || allChildrenWithoutStock()
  }

  const groupChildrenByAttr = () => {
    const { alto, color } = propsNames

    if (children) {
      const p = children?.filter((child) => {
        return (
          child.attributes[color] == colorState &&
          child.attributes[alto] == altoState
        )
      })

      setSelectedGroup(p)
    }
  }

  const findAndSetSelectedChild = (id: string) => {
    if (children) {
      const p = children.find((child) => child.id == id)

      if (p) {
        setSelectedChild(p)
        if (propsNames.tamano) setTamanoState(p.attributes[propsNames.tamano])
        if (propsNames.alto) setAltoState(p.attributes[propsNames.alto])
        if (propsNames.color) setColorState(p.attributes[propsNames.color])
      }
    }
  }

  children?.forEach((variation) => {
    for (let clave in variation.attributes) {
      const { attributes } = variation

      if (clave.includes('tamano')) {
        propsNames.tamano = clave
        searchAttribute('tamano', attributes, clave)
      }

      if (clave.includes('alto')) {
        propsNames.alto = clave
        searchAttribute('alto', attributes, clave)
      }

      if (clave.includes('color')) {
        propsNames.color = clave
        searchAttribute('color', attributes, clave)
      }
    }
  })

  const modalHandle = () => {
    modalPostal ? setModalPostal(false) : setModalPostal(true)
  }

  const addToCart = () => {
    if (dreamDelivery) {
      modalHandle()
    }

    if (
      !dreamDelivery ||
      (dreamDelivery &&
        !(document.getElementById('ensueño') as HTMLInputElement).checked)
    ) {
      setCheckboxEnsueno(false)
      if (selectedChild) {
        if (parseInt(selectedChild.id) != -1 && addToCartEnabled) {
          if (isCombo) {
            const skus = selectedChild.sku.split(';')
            skus.forEach((sku) => {
              const id = getIDBySKU(sku)
              const itemInCart = cartData?.items.find(
                (item) => item.id.toString() == id
              )
              if (itemInCart) {
                const key = itemInCart.key
                const qty = itemInCart.quantity + 1
                dispatch(onUpdateItemFromCart(key, qty))
              } else {
                dispatch(onAddItemToCart(parseInt(id), 1))
              }
            })
          } else {
            const { id } = selectedChild
            const itemInCart = cartData?.items.find(
              (item) => item.id.toString() == id
            )
            if (itemInCart) {
              const key = itemInCart.key
              const qty = itemInCart.quantity + 1
              dispatch(onUpdateItemFromCart(key, qty))
            } else {
              dispatch(onAddItemToCart(parseInt(id), 1))
            }
          }
        }
      }
    } else if (
      dreamDelivery &&
      (document.getElementById('ensueño') as HTMLInputElement).checked
    ) {
      setCheckboxEnsueno(true)
    }
  }

  /*      const addToCartDreamDelivery = () => {
                modalHandle()
                if (selectedChild) {
                    if (parseInt(selectedChild.id) != -1 && addToCartEnabled) {
                        const { id } = selectedChild
                        dispatch(onAddItemToCart(parseInt(id), 1));
                        dispatch(onAddItemToCart(2024353, 1)); 
                    }
                }
        }  */

  useEffect(() => {
    if (selectedChild) {
      setAddToCartEnabled(selectedChild.stock > 0 || selectedChild.backorder)
    }
  }, [selectedChild])

  useEffect(() => {
    groupChildrenByAttr()

    const { tamano, color, alto } = propsNames

    const p2 = children?.find((child) => {
      return (
        child.attributes[color] == colorState &&
        child.attributes[alto] == altoState &&
        child.attributes[tamano] == tamanoState
      )
    })

    if (p2) {
      setSelectedChild(p2)
    }
  }, [tamanoState, altoState, colorState])

  useEffect(() => {
    const { tamano, alto, color } = propsNames

    if (children && defaultProds && !sizeByURL && !heightByURL && !colorByURL) {
      const prodDef = children.find((child) => defaultProds.includes(child.sku))

      if (prodDef) {
        setSelectedChild(prodDef)

        setColorState(prodDef ? prodDef.attributes[color] : '')
        setAltoState(prodDef ? prodDef.attributes[alto] : '')
        setTamanoState(prodDef ? prodDef.attributes[tamano] : '')
      } else {
        setSelectedChild(children.length > 0 ? children[0] : undefined)

        setColorState(children.length > 0 ? children[0].attributes[color] : '')
        setAltoState(children.length > 0 ? children[0].attributes[alto] : '')
        setTamanoState(
          children.length > 0 ? children[0].attributes[tamano] : ''
        )
      }
    } else if (
      !variationsByURLSelected &&
      (sizeByURL || heightByURL || colorByURL) &&
      (tamano || alto || color)
    ) {
      const child = children?.find((child) => {
        let matchesSize =
          tamano &&
          sizeByURL &&
          url_variations[sizeByURL as keyof typeof url_variations].includes(
            child.attributes[tamano]
          )
        let matchesHeight =
          alto &&
          heightByURL &&
          url_variations[heightByURL as keyof typeof url_variations].includes(
            child.attributes[alto]
          )
        let matchesColor =
          color &&
          colorByURL &&
          url_variations[colorByURL as keyof typeof url_variations].includes(
            child.attributes[color]
          )
        if (tamano && alto && !color) {
          return matchesSize && matchesHeight
        }
        if (tamano && !alto && color) {
          return matchesSize && matchesColor
        }
        if (tamano && !alto && !color) {
          return matchesSize
        }
      })
      setSelectedChild(child)
      setColorState(
        child ? child.attributes[color as keyof typeof child.attributes] : ''
      )
      setAltoState(
        child ? child.attributes[alto as keyof typeof child.attributes] : ''
      )
      setTamanoState(
        child ? child.attributes[tamano as keyof typeof child.attributes] : ''
      )
      setVariationsByURLSelected(true)
    }
  }, [children, defaultProds])

  return (
    <LandingContent>
      <Wrapper>
        {category != 'feria' && (
          <Breadcrumbs>
            <a
              className="category"
              href={`${process.env.NEXT_PUBLIC_REDIRECT_URL_BASE}/${category
                .split(' ')
                .join('-')}`}
            >
              {category}
            </a>
            <p className="productName">
              / {title} {boldTitle}
            </p>
          </Breadcrumbs>
        )}

        <SpanColumns>
          <LeftColumn>
            <GalleryWrapper>
              {galleryImages ? (
                <GalleryCarrousel images={galleryImages} pillId={pillId} />
              ) : (
                <>
                  <LoadingGalleryContent />
                  <LoadingThumbnailsContent />
                </>
              )}
            </GalleryWrapper>
          </LeftColumn>

          <RightColumn>
            <ProductTitle
              title={title}
              boldTitle={boldTitle}
              description={description}
              productLoaded={!!galleryImages}
              isCombo={isCombo}
            />

            {skus && <ReviewsStars skus={skus} />}

            <VariationText>
              {msjVariation[category === BED_CLOTHES ? BED_CLOTHES : DEFAULT]}
            </VariationText>

            {arrValuesAttr.tamano.length > 0 ? (
              <SelectSize
                arrChildren={selectedGroup}
                selected={selectedChild}
                setSelected={findAndSetSelectedChild}
                valToSearch={propsNames.tamano}
                setClearInput={setClearInput}
              />
            ) : null}

            {arrValuesAttr.alto.length !== 0 ? (
              <SelectBlock
                arrChildren={children}
                arrOptions={arrValuesAttr.alto}
                selectedChild={selectedChild}
                selectedProp={altoState}
                setSelectedProp={setAltoState}
                valToSearch={propsNames.alto}
                sizeName={propsNames.tamano}
                setClearInput={setClearInput}
              />
            ) : null}

            {arrValuesAttr.color.length !== 0 ? (
              <SelectColors
                arrChildren={children}
                arrOptions={arrValuesAttr.color}
                selectedChild={selectedChild}
                selectedProp={colorState}
                setSelectedProp={setColorState}
                valToSearch={propsNames.color}
                sizeName={propsNames.tamano}
              />
            ) : null}

            {selectedChild && discount && installments ? (
              <PriceDiv>
                <DivPriceOff>
                  <PricesVisor
                    publishedPrice={selectedChild.price ?? 0}
                    regularPrice={selectedChild.regular_price ?? 0}
                    nrFees={category != 'feria' ? installments : 1}
                  />
                  <DivPillDiscount>
                    {pillIdPrice && (
                      <PillOfferProduct pillId={pillIdPrice} isFeatureProduct />
                    )}
                  </DivPillDiscount>
                </DivPriceOff>
                {category != 'feria' && (
                  <PillCategoryDiscount>
                    {discount}% OFF ADICIONAL CON TRANSFERENCIA
                  </PillCategoryDiscount>
                )}
              </PriceDiv>
            ) : (
              <></>
            )}

            {idProd != '1952731' ? (
              <>
                <ModalPaymentMethod showText />
                <InformationShipping
                  product={selectedChild}
                  clearInput={clearInput}
                  setClearInput={setClearInput}
                />
                {dreamDelivery ? (
                  <DivEnsueño>
                    <input
                      type="checkbox"
                      name="ensueño"
                      id="ensueño"
                      value="ensueño"
                    />
                    <label htmlFor="ensueño">
                      Entrega de ensueño
                      <br />
                      <span>
                        + <span>$6.000</span>
                      </span>
                    </label>
                    <Modal Layout="Information" addToCart={addToCart} />

                    {checkboxEnsueno && modalPostal ? (
                      <Modal
                        Layout="Postal"
                        CloseHandle={modalHandle}
                        addToCart={addToCart}
                      />
                    ) : (
                      <></>
                    )}
                  </DivEnsueño>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <FeriaText>Hasta agotar stock</FeriaText>
                <FeriaText>Entrega a partir de 5 días hábiles</FeriaText>
              </>
            )}

            {selectedChild ? (
              <>
                {displayFormStockout() && idProd ? (
                  <FormStockOut tag={tagsData[idProd]} />
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}

            <BtnAddToCart
              disabledBtn={addToCartEnabled}
              addTocart={addToCart}
              stateLoading={stateLoading}
            />
          </RightColumn>
        </SpanColumns>
      </Wrapper>
    </LandingContent>
  )
}

export default MainBlock
