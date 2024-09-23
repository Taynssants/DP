import  {Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function ProdutoCard(props){
    return(
        <Card style = {{width: '18rem'}}>
            <Card.Img variant = "top" src={props.imagemUrl} />
            <Card.Body>
                <Card.Title>{props.nome}</Card.Title>
                <Card.Text>
                    {props.preco}
                </Card.Text>
                <Card.Text>
                    {props.validade}
                </Card.Text>
                <Row>
                    <link to={'/produtos' + props.id}>Ver produto</link>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ProdutoCard;