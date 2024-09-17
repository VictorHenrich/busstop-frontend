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


export interface AppGoogleMapsProps extends MapProps{
    origin?: PointProps,
    destination?: PointProps,
}

export interface AppGoogleMapMarkerProps{
    position: PointProps,
} 


export function AppGoogleMapMarker({
    position,
}: AppGoogleMapMarkerProps): React.ReactElement{
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

export function AppGoogleMapDirections({
    origin,
    destination
}: Pick<AppGoogleMapsProps, "origin" | "destination">): React.ReactElement{
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


export default function AppGoogleMaps({
    origin,
    destination,
    ...props
}: AppGoogleMapsProps): React.ReactElement{
    return (
        <APIProvider apiKey="AIzaSyBv4qcayLNmXLiVvrZNuiMuG0aC1JdGjss">
            <Map 
                {...props}
                defaultZoom={50}
                mapId={'bf51a910020fa25a'}
            >
                {origin && <AppGoogleMapMarker position={origin}/>}

                {destination && <AppGoogleMapMarker position={destination}/>}

                <AppGoogleMapDirections 
                    destination={destination}
                    origin={origin}
                />
            </Map>
        </APIProvider>
    )
}