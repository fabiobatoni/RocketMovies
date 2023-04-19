import { Container } from "./styles";

export function Input({icon: Icon, ...res}) {
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...res} />
        </Container>
    )
}