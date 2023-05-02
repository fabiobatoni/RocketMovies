import { Link } from 'react-router-dom';
import { Container, Main, Inputs,Buttons } from './styles';
import {FiArrowLeft} from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { MovieItem } from '../../components/MovieItem';

export function New() {
    return(
        <Container>
            <Header />

            <header>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>

            <Main>
                <h1>Novo filme</h1>

                <Inputs>
                    <Input placeholder="Título" />
                    <Input placeholder="Sua nota (de 0 a 5)" />
                </Inputs>
                
                <Textarea placeholder="Observações" />

                <span>Marcadores</span>

                <div className="tags">
                    <MovieItem value="Drama"/>
                    <MovieItem isNew placeholder="Nova Marcador"/>
                </div> 

                <Buttons>
                    <Button title="Excluir Filme"/>
                    <Button title="Salvar alterações"/>
                </Buttons>
            </Main>
        </Container>
    )
}