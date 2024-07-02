import { Center, Image, Stack } from "native-base"
import AppInput from "@/components/input"
import AppButton from "@/components/button"
import AppLink from "@/components/link"


export default function LoginPage(): React.ReactElement{
    return (
        <Center 
            width="full" 
            height="full"
            padding={10}
            backgroundColor="secondary"
        >
            <Image 
                source={require("@/assets/images/BackgroundLogin.jpg")}
                width="full"
                height="full"
                top={0}
                left={0}
                position="fixed"
            />
            <Image 
                source={require("@/assets/images/BusstopLogo.png")}
                minWidth={200}
                minHeight={200}
            />
            <Stack
                width="full"
                space={5}
                alignItems="center"
            >
                <AppInput 
                    label="Email"
                />
                <AppInput 
                    label="Senha"
                    type="password"
                />
                <Center 
                    alignItems="end"
                    width="full"
                >
                    <AppLink>
                        Esqueci minha senha
                    </AppLink>
                </Center>
                <AppButton
                    paddingLeft={20}
                    paddingRight={20}
                >
                    Entrar
                </AppButton>
            </Stack>
        </Center>
    )
}