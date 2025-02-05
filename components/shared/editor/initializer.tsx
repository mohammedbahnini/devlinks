
type Props = {
    data: any,
    children: React.ReactNode
}

export default async function Initializer(props: Props) {
    const { data, children } = props;


    return (
        <>
            {children}
        </>
    )
}