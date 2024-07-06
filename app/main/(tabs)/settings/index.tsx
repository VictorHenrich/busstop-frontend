import React from "react";
import { Center, Heading, Stack, Avatar } from "native-base";
import AppInput from "@/components/input";
import AppButton from "@/components/button";



function AppMainSettingsPage(){
    return (
        <Stack
            width="full"
            height="full"
            backgroundColor="secondary"
            space={10}
            padding={5}
        >
            <Stack
                width="full"
                direction="column"
                alignItems="center"
                space={5}
            >
                <Heading fontSize={30}>Informações da conta</Heading>
                <Avatar 
                    size="xl"
                />
            </Stack>
            <Stack
                width="full"
                space={5}
            >
                <Heading 
                    fontSize={20}
                    borderBottomWidth={1}
                    borderBottomColor="primary"
                    paddingBottom={5}
                >
                    Informações básicas
                </Heading>
                <AppInput 
                    label="Nome"
                    labelProps={{
                        fontSize: 15
                    }}
                />
                <AppInput 
                    label="Email"
                    labelProps={{
                        fontSize: 15
                    }}
                />
                <AppInput 
                    label="Numero de telefone"
                    labelProps={{
                        fontSize: 15
                    }}
                />
            </Stack>
            <Center>
                <AppButton>
                    Salvar alterações
                </AppButton>
            </Center>
        </Stack>
    )
}

export default React.memo(AppMainSettingsPage);