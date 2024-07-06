import React from "react";
import { Slot } from "expo-router";
import AppHomeProvider from "@/utils/providers/homeProvider";


function AppHomeLayout(): React.ReactElement{
    return (
        <AppHomeProvider>
            <Slot />
        </AppHomeProvider>
    )
}

export default React.memo(AppHomeLayout);