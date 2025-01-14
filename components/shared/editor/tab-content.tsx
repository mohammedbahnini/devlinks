import React from "react";

type TabContentProps  = {
    currenTab : string ,
    value : string,
    content : React.ReactNode
}
export default function TabContent(props : TabContentProps) {
    const {value , currenTab , content} = props;

    if( value === currenTab) {
        return (
            <>{content}</>
        )
    }
    else return null;
}