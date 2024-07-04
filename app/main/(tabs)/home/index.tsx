import { Center } from "native-base";
import AppMaps from "@/components/maps";
import React from "react";
import AppMainHomeMenu from "./menu";
import AppIconButton from "@/components/iconButton";
import AntDesign from '@expo/vector-icons/AntDesign';

function AppMainHomePage(): React.ReactElement{
    const [openMenu, setOpenMenu] = React.useState<boolean>(true);

    return (
        <Center 
            width="full" 
            height="full"
            position="relative"
        >
            <AppMainHomeMenu 
                open={openMenu}
                onClose={()=> setOpenMenu(false)}
            />
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