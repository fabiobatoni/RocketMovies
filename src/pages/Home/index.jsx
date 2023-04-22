import {Container, Heading, Content} from './styles';
import { Header } from '../../components/Header';
import {Button} from '../../components/Button';
import {Movie} from '../../components/Movie';
import { FiPlus } from 'react-icons/fi';

export function Home() {
    return (
        <Container>
            <Header />

            <Heading>
                <h1>Meus filmes</h1>

                <Button title="Adicionar filme" icon={FiPlus}/>
            </Heading>

            <Content>
                <Movie />
            </Content>

            
        </Container>
    )
}