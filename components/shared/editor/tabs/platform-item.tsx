import {PlatformType} from "@/lib/schemas";

type Props = {
    platform : PlatformType
}
export default  function PlatformItem(props : Props){
    const {platform} = props;
    return (
        <p>{platform.name}</p>
    )
}