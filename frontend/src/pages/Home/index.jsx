import {Container, Heading, Content} from './styles';
import { Header } from '../../components/Header';
import {Button} from '../../components/Button';
import {Movie} from '../../components/Movie';
import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export function Home() {
    return (
        <Container>
            <Header />

            <Heading>
                <h1>Meus filmes</h1>

                <Link to="/new">
                    <Button title="Adicionar filme" icon={FiPlus}/>
                </Link>
            </Heading>

            <Content>
               <Movie 
                data={{title: 'Interestellar', description: 'Esse filme e muito legal', tags: [{id: '1', name: 'Ficção cientifica'}, {id: '2', name: 'Drama'}]}}
                />

               <Movie 
                data={{title: 'Procurando o nemo', description: 'Esse filme do peixinho nemo', tags: [{id: '1', name: 'Comedia'}, {id: '2', name: 'Familia'}]}}
                />

                <Movie 
                data={{title: 'Star Wars', description: 'Esse filme do guerra nas estrelas', tags: [{id: '1', name: 'Guerra'}, {id: '2', name: 'Espaço'}]}}
                />

                <Movie 
                data={{title: 'Super Mario', description: 'filme baseado no jogo do nintendo', tags: [{id: '1', name: 'Games'}, {id: '2', name: 'Comedia'}]}}
                />
            </Content>

            
        </Container>
    )
}