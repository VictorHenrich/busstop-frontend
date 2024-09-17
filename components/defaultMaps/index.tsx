import React from "react";
import MapView, { Marker, type MapViewProps } from 'react-native-maps';
import { useTheme, type ITheme } from "native-base";
import type { PointEntity } from "@/utils/interfaces";


type PointProps = Pick<PointEntity, "latitude" | "longitude">;


export interface AppDefaultMapsMarkerProps{
    position: PointProps
}

export interface AppDefaultMapsProps extends MapViewProps{
    origin?: PointProps,
    destination?: PointProps,
}

export function AppDefaultMapsMarker({ position }: AppDefaultMapsMarkerProps){
    const { colors }: ITheme = useTheme();

    return (
        <Marker 
            coordinate={{ latitude: parseFloat(position.latitude), longitude: parseFloat(position.longitude) }}
            style={{
                backgroundColor: `${colors.secondary}`,
                borderColor: `${colors.primary}`
            }}
        />
    )
}


export default function AppDefaultMaps({
    origin,
    destination,
    ...props
}: AppDefaultMapsProps): React.ReactElement{
    return (
        <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            style={{
                width: "100%",
                height: "100%"
            }} 
            {...props}
        >
            {origin && <AppDefaultMapsMarker position={origin}/>}
            
            {destination && <AppDefaultMapsMarker position={destination}/>}
        </MapView>
    )
}