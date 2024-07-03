import { PointEntity } from "../interfaces";



export default class MapsService{

    static async getDirections(
        destination: PointEntity,

    ): Promise<google.maps.DirectionsResult>{
        const directionService = new google.maps.DirectionsService();

        return await directionService.route({

            destination: {
                lat: parseFloat(destination.latitude),
                lng: parseFloat(destination.longitude)
            },
            origin: {
                lat: parseFloat(destination.latitude),
                lng: parseFloat(destination.longitude)
            },
            travelMode: google.maps.TravelMode.DRIVING
        });
    }
}