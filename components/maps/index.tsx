import React from 'react';
import { PointEntity } from '@/utils/interfaces';
import {
    APIProvider, 
    Map, 
    AdvancedMarker, 
    type MapProps, 
    useMapsLibrary, 
    useMap,
    Pin
} from '@vis.gl/react-google-maps';
import { type ITheme, useTheme } from 'native-base';



type PointProps = Pick<PointEntity, "latitude" | "longitude">;


export interface AppMapsProps extends MapProps{
    origin?: PointProps,
    destination?: PointProps,
}

export interface AppMapMarkerProps{
    position: PointProps,
} 


export function AppMapMarker({
    position,
}: AppMapMarkerProps): React.ReactElement{
    const { colors }: ITheme = useTheme();

    return (
        <AdvancedMarker 
            position={{
                lat: parseFloat(position.latitude),
                lng: parseFloat(position.longitude)
            }}
        >
            <Pin 
                background={`${colors.secondary}`}
                borderColor={`${colors.primary}`}
                glyphColor={`${colors.primary}`}
            />
        </AdvancedMarker>
    )
}

export function AppMapDirections({
    origin,
    destination
}: Pick<AppMapsProps, "origin" | "destination">): React.ReactElement{
    const map = useMap();

    const routesLibrary = useMapsLibrary("routes");

    const getDirectionsResponse = React.useCallback(async ()=> {
        if(!origin || !destination || !routesLibrary) return;

        const directionService = new routesLibrary.DirectionsService();

        return await directionService.route({
            destination: {
                lat: parseFloat(destination.latitude),
                lng: parseFloat(destination.longitude)
            },
            origin: {
                lat: parseFloat(origin.latitude),
                lng: parseFloat(origin.longitude)
            },
            travelMode: google.maps.TravelMode.DRIVING,
        });

    }, [origin, destination, routesLibrary]);

    React.useEffect(()=> {
        getDirectionsResponse()
            .then((value) => {
                if(!routesLibrary) return;

                new routesLibrary.DirectionsRenderer({ 
                    map, 
                    directions: value,
                    markerOptions: {
                        visible: false
                    },
                });
            });

    }, [getDirectionsResponse, routesLibrary, map]);

    return <></>
}


export default function AppMaps({
    origin,
    destination,
    ...props
}: AppMapsProps): React.ReactElement{
    return (
        <APIProvider apiKey="AIzaSyBv4qcayLNmXLiVvrZNuiMuG0aC1JdGjss">
            <Map 
                {...props}
                defaultZoom={50}
                mapId={'bf51a910020fa25a'}
            >
                {origin && <AppMapMarker position={origin}/>}

                {destination && <AppMapMarker position={destination}/>}

                <AppMapDirections 
                    destination={destination}
                    origin={origin}
                />
            </Map>
        </APIProvider>
    )
}