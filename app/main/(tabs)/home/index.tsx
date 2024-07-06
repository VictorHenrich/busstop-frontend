import { Center } from "native-base";
import AppMaps from "@/components/maps";
import React from "react";
import AppIconButton from "@/components/iconButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import { AppHomeContext } from "@/utils/providers/homeProvider";
import AppHomeMenu from "./(menu)";

function AppMainHomePage(): React.ReactElement{
    const {
        setOpenMenu
    } = React.useContext(AppHomeContext);

    return (
        <Center 
            width="full" 
            height="full"
            position="relative"
        >
            <AppHomeMenu />
            <AppMaps 
                origin={{
                    latitude: "-28.4407942",
                    longitude: "-48.9463218"
                }}

                destination={{
                    latitude: "-28.4748986",
                    longitude: "-49.0773147"
                }}
            />
            <AppIconButton 
                icon={<AntDesign name="arrowup" color="inherit"/>}
                position="absolute"
                bottom={5}
                onPress={()=> setOpenMenu(true)}
            />
        </Center>
    )
}


export default React.memo(AppMainHomePage);