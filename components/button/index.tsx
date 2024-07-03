import React from "react";
import { Button } from "native-base";
import { type IButtonProps } from "native-base/lib/typescript/components/primitives/Button/types";


export default function AppButton(props: IButtonProps): React.ReactElement{
    return (
        <Button 
            backgroundColor="primary"
            color="secondary"
            fontWeight="bolder"
            {...props}
        />
    );
}