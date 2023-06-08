import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Container, Main, Inputs,Buttons } from './styles';
import {FiArrowLeft} from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { MovieItem } from '../../components/MovieItem';

import { api } from '../../service/api';

export function New() {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    console.log(note);
    const navigate = useNavigate();

    function handleAddTag() {
        console.log(tags)
        setTags(prevState => [...prevState, newTag]);
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {

        if(!title) {
            return alert("Digite o titulo do filme");
        }

        if(!note) {
            return alert("Digite a nota do filme");
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clice para adicionar ou deixe o campo vázio");
        }


        await api.post("/movie_notes", {
            title,
            note,
            description,
            tags
        });

        alert("Filme criado com sucesso!");
        navigate("/");
        
    }

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
                    <Input placeholder="Título" 
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setNote(e.target.value)}/>
                </Inputs>
                
                <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

                <span>Marcadores</span>

                <div className="tags">

                    {
                        tags.map((tag, index) => (
                            <MovieItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)}/>
                        ))          
                    }
                   
                    <MovieItem isNew placeholder="Nova Marcador" onChange={e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag}/>
                </div> 

                <Buttons>
                    <Button title="Excluir Filme"/>
                    <Button title="Salvar alterações" onClick={handleNewMovie}/>
                </Buttons>
            </Main>
        </Container>
    )
}