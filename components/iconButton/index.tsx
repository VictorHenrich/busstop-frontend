import React from "react";
import { IconButton, type IIconButtonProps } from "native-base";



export default function AppIconButton(props: IIconButtonProps): React.ReactElement{
    return (
        <IconButton 
            backgroundColor="secondary"
            color="primary"
            fontSize={20}
            {...props}
        />
    )
}