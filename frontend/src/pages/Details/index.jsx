import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Container, Content, Avatar, Main, Section, Title } from './styles';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import {FiArrowLeft, FiStar, FiClock} from 'react-icons/fi';
import { api } from '../../service/api';



export function Details() {

  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data);
    }

    fetchMovie();
  }, [])

  
  return (
    <Container>
      <Header />

      <header>
        <Link to="/">
            <FiArrowLeft />
            Voltar
        </Link>
      </header>
      
      <Content>
      <Title>
        <h1>{data.title}</h1>

        <FiStar/>
        <FiStar/>
        <FiStar/>
        <FiStar/>
        <FiStar/>
      </Title>

       <Main>
        <Avatar>
                <img src="https://github.com/fabiobatoni.png" alt="Foto do usuario" />
                <span>Por Fabio Batoni</span>
        </Avatar>

            <FiClock /> 
            <span>{data.created_at}</span>
       </Main>

      <Section>
        
        {
          data.movieTags && data.movieTags.map(tag => (
            <Tag key={String(tag.id)} title={tag.name} />
          ))

        }
       
        <p> 
          {data.description}
        </p>
      </Section>
      </Content>

    </Container>
  )
}