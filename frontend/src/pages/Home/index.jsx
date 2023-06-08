import {Container, Heading, Content} from './styles';
import { Header } from '../../components/Header';
import {Button} from '../../components/Button';
import {Movie} from '../../components/Movie';
import { FiPlus } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';

export function Home() {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movie_notes`)
        }
    })

    useEffect(() => {
        async function fetchMovies() {
          const response = await api.get(
            `/movie_notes?title=${search}`
          );
          setMovies(response.data);
        }
    
        fetchMovies();
      }, [search]);

    return (
        <Container>
            <Header onChange={(e) => setSearch(e.target.value)}/>

            <Heading>
                <h1>Meus filmes</h1>

                <Link to="/new">
                    <Button title="Adicionar filme" icon={FiPlus}/>
                </Link>
            </Heading>

            <Content>
               
                {
                    movies.map(movie => (
                        <Movie 
                        key={String(movie.id)}
                        data={movie}
                        onClick={() => handleDetails(movie.id)}
                        />
                    ))
                }
               
            </Content>

            
        </Container>
    )
}