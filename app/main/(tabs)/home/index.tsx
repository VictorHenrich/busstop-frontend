import { Center, Actionsheet, Stack, FlatList, Text, Icon, Heading } from "native-base";
import AppMaps from "@/components/maps";
import AppInput from "@/components/input";
import { PointEntity } from "@/utils/interfaces";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AppButton from "@/components/button";
import React from "react";

function AppMainHomePage(): React.ReactElement{
    const data: PointEntity[] = [
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        },
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        },
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        },
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        },
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        },
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        },
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        },
        {
            addressCity: "Tubarão",
            addressNeighborhood: "Centro",
            addresssNumber: "900",
            addressState: "SC",
            addressStreet: "Rua teste",
            addressZipCode: "00009000",
            latitude: "",
            longitude: ""
        }
    ]

    return (
        <Center 
            width="full" 
            height="full"
        >
            <Actionsheet 
                isOpen={true} 
                size="full"
            >
                <Actionsheet.Content 
                    backgroundColor="secondary"
                    padding={5}
                    justifyContent="space-between"
                    size="full"
                    
                >
                    <Stack width="full" height="full" space={5} direction="column">
                        <Heading 
                            color="primary"
                            textAlign="left"
                            width="full"
                        >
                            Aonde você gostaria de ir?
                        </Heading>

                        <Stack 
                            space={5}
                            width="full"
                        >
                            <AppInput label="Origem"/>

                            <AppInput label="Destino"/>

                            <Stack
                                space={5}
                                width="full"
                            >
                                <AppButton 
                                    rightIcon={
                                        <Icon as={<MaterialIcons name="my-location" />}/>
                                    }
                                >
                                    Capturar localização atual
                                </AppButton>
                                <FlatList
                                    height={400}
                                    data={data}
                                    scrollEnabled={true}
                                    overflowY="auto"
                                    renderItem={({ item, index }) => {
                                        return (
                                            <Stack 
                                                key={`pointItem-${index}`}
                                                direction="row"
                                                space={5}
                                                paddingTop={2.5}
                                                paddingBottom={2.5}
                                                alignItems="center"
                                                borderBottomWidth={1}
                                                borderBottomColor="gray.600"
                                            >
                                                <Icon 
                                                    as={<MaterialIcons name="location-on" />}
                                                    color="primary"
                                                    size="md"
                                                />
                                                <Stack 
                                                    direction="column" 
                                                    space={1}
                                                >
                                                    <Text 
                                                        color="tertiary"
                                                        fontSize={15}
                                                    >
                                                        {item.addressStreet},
                                                        {" " + item.addresssNumber} -
                                                        {" " + item.addressNeighborhood}
                                                    </Text>
                                                    <Text 
                                                        color="gray.400" 
                                                        fontSize="inherit"
                                                    >
                                                        {item.addressCity} -
                                                        {" " + item.addressState}, 
                                                        {" " + item.addressZipCode}
                                                    </Text>
                                                </Stack>
                                            </Stack>
                                        )
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Actionsheet.Content>
            </Actionsheet>
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
        </Center>
    )
}


export default React.memo(AppMainHomePage);