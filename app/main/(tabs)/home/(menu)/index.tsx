import React from "react";
import { Actionsheet } from "native-base";
import { AppHomeContext } from "@/utils/providers/homeProvider";
import AppHomeMenuStep1 from "./step1";
import AppHomeMenuStep2 from "./step2";


export default function AppHomeMenu(): React.ReactElement{
    const {
        openMenu,
        onCloseMenu
    } = React.useContext(AppHomeContext);

    const [showStep1, setShowStep1] = React.useState<boolean>(false);

    const [showStep2, setShowStep2] = React.useState<boolean>(true);

    return (
        <Actionsheet 
            isOpen={openMenu}
            size="full"
            onClose={onCloseMenu}
        >
            <Actionsheet.Content 
                backgroundColor="secondary"
                padding={5}
                justifyContent="space-between"
            >
                <AppHomeMenuStep1 
                    show={showStep1}
                    onNext={()=> setShowStep1(false)} 
                />
                <AppHomeMenuStep2 
                    show={showStep2} 
                    onNext={()=> setShowStep2(false)} 
                />
            </Actionsheet.Content>
        </Actionsheet>
    )
}