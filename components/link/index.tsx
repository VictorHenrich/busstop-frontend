import React from "react";
import { Link, type ILinkProps } from "native-base";



export default function AppLink(props: ILinkProps): React.ReactElement{
    return (
        <Link 
            fontSize={15}
            color="primary.900"
            textAlign="right"
            {...props}
        />
    )
}