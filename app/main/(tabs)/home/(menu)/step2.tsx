import React from "react";
import { Stack, FlatList, Center, Heading, Text, Icon } from "native-base";
import { AppMainHomeStepProps } from "./common";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function AppHomeMenuStep2({
    onNext,
    show
}: AppMainHomeStepProps<any>): React.ReactElement{
    const display: string | undefined = React.useMemo<string | undefined>(()=> {
        if(!show)
            return "none"

    }, [show]);

    const [selectedItem, setSelectedItem] = React.useState<number>();

    const backgroundColorSelected: string = "tertiary";

    const colorPrimarySelected: string = "secondary";

    const colorSecondarySelected: string = "primary";

    const colorPrimaryDefault: string = "tertiary";

    const colorSecondaryDefault: string = "primary"

    return (
        <Stack 
            width="full" 
            height="full" 
            space={5} 
            direction="column"
            display={display}
            color="tertiary"
        >
            <Heading 
                color="primary"
                textAlign="center"
                width="full"
            >
                Escolha sua viagem
            </Heading>
            <FlatList 
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                padding={3}
                renderItem={({ item })=> {
                    let backgroundColor: string | undefined;

                    let colorPrimary: string = colorPrimaryDefault;

                    let colorSecondary: string = colorSecondaryDefault;

                    if(item === selectedItem){
                        backgroundColor = backgroundColorSelected;

                        colorPrimary = colorPrimarySelected;

                        colorSecondary = colorSecondarySelected;
                    }

                    return (
                        <Center
                            width="full"
                            borderColor="tertiary"
                            borderWidth={2}
                            borderRadius={20}
                            padding={5}
                            marginBottom={5}
                            backgroundColor={backgroundColor}
                            onTouchStart={()=> setSelectedItem(item)}
                        >
                            <Stack
                                width="full"
                                direction="column"
                                space={3}
                            >
                                <Stack
                                    width="full"
                                    direction="row"
                                    justifyContent="center"
                                    space={3}
                                >
                                    <Icon 
                                        as={<FontAwesome6 name="bus" />}
                                        color={colorPrimary}
                                        size="md"
                                    />
                                    <Icon 
                                        as={<AntDesign name="arrowright" />}
                                        color={colorPrimary}
                                        size="md"
                                    />
                                    <Stack 
                                        space={1}
                                        direction="row"
                                    >
                                        <Icon 
                                            as={<FontAwesome6 name="person-walking"/>}
                                            color={colorPrimary}
                                            size="md"
                                        />
                                        <Text 
                                            color={colorPrimary}
                                            fontSize={15}
                                            fontWeight={600}
                                        >
                                            6 min.
                                        </Text>
                                    </Stack>
                                </Stack>
                                <Text
                                    color={colorPrimary}
                                    textAlign="left"
                                    fontWeight={600}
                                >
                                    Empresa:
                                    <Text 
                                        color={colorSecondary}
                                    >
                                        {" "} TCL - Transportes Capivari LTDA
                                    </Text>
                                </Text>
                                <Text
                                    color={colorPrimary}
                                    textAlign="left"
                                    fontWeight={600}
                                >
                                    Ponto de partida:
                                    <Text 
                                        color={colorSecondary}
                                        fontWeight={600}
                                    >
                                        {" "} Antônio Manuel dos Santos - Caçador - Capivari de Baixo
                                    </Text>
                                </Text>
                                <Text
                                    color={colorPrimary}
                                    textAlign="left"
                                    fontWeight={600}
                                >
                                    Última parada:
                                    <Text 
                                        color={colorSecondary}
                                        fontWeight={600}
                                    >
                                        {" "} Antônio Manuel dos Santos - Caçador - Capivari de Baixo
                                    </Text>
                                </Text>
                                <Text
                                    color={colorPrimary}
                                    textAlign="left"
                                    fontWeight={600}
                                >
                                    Horário chegada:
                                    <Text 
                                        color={colorSecondary}
                                    >
                                        {" "} 10:38pm
                                    </Text>
                                </Text>
                                <Text
                                    color={colorPrimary}
                                    textAlign="left"
                                    fontWeight={600}
                                >
                                    Duração:
                                    <Text 
                                        color={colorSecondary}
                                    >
                                        {" "} 10 mins
                                    </Text>
                                </Text>
                            </Stack>
                        </Center>
                    )
                }}
            />
        </Stack>
    )
}