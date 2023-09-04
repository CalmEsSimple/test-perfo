import { getBannerSidecart } from "@/utils/hygraphHelper";
import { DivHeader } from "./styled";
import { useQuery } from "@apollo/client";

const BannerSidecart = ({ bannerId }: {bannerId: string}) => {
    const { loading, data }= useQuery(getBannerSidecart, {
        variables: { id: bannerId }
    });

    return (
        <>
            {
                !loading && data &&
                        <>
                        {  
                            data.bannerSidecart.show && 
                            (
                                <DivHeader color={data.bannerSidecart.colorText} $colorBg={data.bannerSidecart.colorBackground}>
                                <p>{data.bannerSidecart.textBanner}</p>
                            </DivHeader>
                            )
                        }
                        </>
                    
            }
        </>
    )

}

export default BannerSidecart