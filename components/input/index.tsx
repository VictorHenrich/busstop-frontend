import React from "react";
import { Input, FormControl, Text } from "native-base";
import { type IInputProps } from "native-base/lib/typescript/components/primitives/Input/types";

export interface AppInputProps extends IInputProps{
    label?: string,
    helperMessage?: string,
    errorMessage?: string
}

export default function AppInput({
    label,
    helperMessage,
    errorMessage,
    ...props
}: AppInputProps): React.ReactElement{
    const actionStyle: Partial<IInputProps> = {
        borderColor: "primary",
        opacity: 1,
        color: "primary"
    }

    return (
        <FormControl 
            width="full" 
            fontSize={20}
        >
            {
                label && (
                    <FormControl.Label>
                        <Text
                            fontFamily="label"
                            fontSize="inherit"
                            color="tertiary"
                        >
                            {label}
                        </Text>
                    </FormControl.Label>
                )
            }
            <Input
                width="full"
                colorScheme="primary"
                borderColor="tertiary"
                placeholderTextColor="tertiary"
                color="white"
                fontFamily="input"
                opacity={0.7}
                fontSize="inherit"
                padding={5}
                _focus={actionStyle}
                _hover={actionStyle}
                {...props}
            />
            {
                helperMessage && (
                    <FormControl.HelperText>
                        {helperMessage}
                    </FormControl.HelperText>
                )
            }
            {
                errorMessage && (
                    <FormControl.ErrorMessage>
                        {errorMessage}
                    </FormControl.ErrorMessage>
                )
            }
        </FormControl>
    )
}