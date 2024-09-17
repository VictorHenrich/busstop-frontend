import { Center, Icon } from "native-base";
import AppDefaultMaps from "@/components/defaultMaps";
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
            backgroundColor="secondary"
        >
            <AppHomeMenu />
            <AppDefaultMaps 
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
                icon={
                    <Icon 
                        as={<AntDesign name="arrowup"/>}
                        color="inherit"
                        fontSize={20}
                    />
                }
                position="absolute"
                bottom={5}
                onPress={()=> setOpenMenu(true)}
            />
        </Center>
    )
}


export default React.memo(AppMainHomePage);