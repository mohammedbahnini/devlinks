import Container from "@/components/shared/container";
import {LoginHeaderProps} from "@/lib/schemas";

export default function LoginHeader(){

    return (
        <header>

            <Container className=' sm:flex sm:justify-center'>
                <a href="/">
                    <img src='/images/logo-devlinks-large.svg'/>
                </a>
            </Container>

        </header>
    )
}