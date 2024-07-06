import React from "react";
import { Stack, FlatList, Text, Icon, Heading } from "native-base";
import AppInput from "@/components/input";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AppButton from "@/components/button";
import { pointsData } from "../mock";
import { AppMainHomeStepProps } from "./common";


export default function AppHomeMenuStep1({
    show,
    onNext
}: AppMainHomeStepProps<any>): React.ReactElement{
    const display: string | undefined = React.useMemo<string | undefined>(()=> {
        if(!show)
            return "none"

    }, [show]);

    return (
        <Stack 
            width="full" 
            height="full" 
            space={5} 
            direction="column"
            display={display}
        >
            <Heading 
                color="primary"
                textAlign="center"
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
                        data={pointsData}
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
    )
}