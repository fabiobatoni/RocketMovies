import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { FiStar } from 'react-icons/fi';

export function Movie({data, ...rest}) {

    console.log(data);

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            

            <p>{data.description}</p>

            {
                data.movieTags &&
                <footer>
                    {
                        data.movieTags.map(tag => <Tag key={String(tag.id)} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}