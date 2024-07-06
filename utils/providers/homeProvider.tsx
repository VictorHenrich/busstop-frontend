import React from "react";


export interface AppHomeProviderProps{
    openMenu: boolean,
    setOpenMenu: (open: boolean) => void,
    onCloseMenu: ()=> void
}

export const initialValue: AppHomeProviderProps = {
    openMenu: false,
    setOpenMenu: ()=> null,
    onCloseMenu: ()=> null
}

export const AppHomeContext: React.Context<AppHomeProviderProps> = React.createContext<AppHomeProviderProps>(initialValue);


export default function AppHomeProvider({ children }: React.PropsWithChildren): React.ReactElement{
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);

    function onCloseMenu(): void{
        setOpenMenu(false)
    }

    return (
        <AppHomeContext.Provider
            value={{
                openMenu,
                setOpenMenu,
                onCloseMenu
            }}
        >
            {children}
        </AppHomeContext.Provider>
    )
}