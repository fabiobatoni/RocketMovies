import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { FiStar } from 'react-icons/fi';

export function Movie({data, ...rest}) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />

            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}