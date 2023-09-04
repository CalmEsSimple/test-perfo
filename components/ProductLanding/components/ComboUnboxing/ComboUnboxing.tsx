import ColchonUnboxing from "@/components/ColchonCategory/Unboxing/Unboxing";
import { LandingContent } from "../../styled";
import { Unboxing as BaseUnboxing } from "../Unboxing/Unboxing";

const ComboUnboxing = () => {
    return (
        <>
            <LandingContent>
                <ColchonUnboxing isCombo/>
            </LandingContent>
            <BaseUnboxing
                isCombo
                videoId="nDQv4PXpOA0"
            />
        </>
      );
}

export default ComboUnboxing