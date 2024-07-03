import React from "react";
import { useFonts } from "expo-font";
import { Slot, router, usePathname } from "expo-router";
import { NativeBaseProvider, extendTheme } from "native-base";

export default function AppLayout() {
  useFonts({
    "OpenSans": require("@/assets/fonts/OpenSans-Regular.otf"),
    "Roboto": require("@/assets/fonts/Roboto-Regular.otf"),
    "Montserrat": require("@/assets/fonts/Montserrat-Regular.otf"),
    "SpaceMono": require("@/assets/fonts/SpaceMono-Regular.otf")
  });

  const theme = extendTheme({
    colors: {
      primary: "#47d7ac",
      secondary: "#333333",
      tertiary: "#ffffff"
    },
    fonts: {
      heading: "Montserrat",
      body: "OpenSans",
      input: "Roboto",
      label: "SpaceMono",
      button: "SpaceMono",
      text: "OpenSans",
      link: "SpaceMono"
    },
    config: {
      initialColorMode: "dark"
    },
    sizes: {
      full: "100%"
    }
  });

  const pathname: string = usePathname();

  React.useEffect(()=>{
    if(pathname === "/")
      router.navigate("/login");
  }, [pathname]);

  return (
    <NativeBaseProvider theme={theme}>
        <Slot />
    </NativeBaseProvider>
  );
}
