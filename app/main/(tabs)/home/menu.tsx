import React from "react";
import { Stack, FlatList, Text, Icon, Heading, Actionsheet, type IActionsheetProps } from "native-base";
import AppInput from "@/components/input";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AppButton from "@/components/button";
import { pointsData } from "./mock";

export interface AppMainHomeMenuProps extends Omit<IActionsheetProps, "isOpen">{
    open: boolean
}


export default function AppMainHomeMenu({
    open,
    ...props
}: AppMainHomeMenuProps): React.ReactElement{
    return (
        <Actionsheet 
            isOpen={open} 
            size="full"
            {...props}
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
            </Actionsheet.Content>
        </Actionsheet>
    )
}