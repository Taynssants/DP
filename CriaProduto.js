import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProdutoService from '../services/ProdutoService';
import { useNavigate, useParams } from 'react-router-dom';

function CriaProduto() {
    const params = useParams();
    const nav = useNavigate();

    const [form, setForm] = React.useState({ nome: '', imagemUrl: '', preco: '', validade: '' });

    React.useEffect(() => {
        const id = params.id;
        if (id) {
            ProdutoService.getOneProduct(id)
                .then(savedProduct => setForm(savedProduct))
                .catch(err => {
                    console.error(err);
                    setForm({ nome: '', imagemUrl: '', preco: '', validade: '' }); // Reseta o formulário em caso de erro
                });
        }
    }, [params.id]); // Adicionando a dependência de `params.id`

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        console.log(form);
        const id = params.id;
        if (id) {
            await ProdutoService.updateOneProduct(id, form);
        } else {
            await ProdutoService.insertProduct(form);
        }
        nav('/produtos'); // Navegar para a lista de produtos após o submit
    };

    const deleteProduct = async (e) => {
        e.preventDefault();
        const id = params.id;
        if (id) {
            await ProdutoService.deleteOneProduct(id);
            nav('/produtos'); // Navegar após a deleção
        }
    };

    return (
        <Container>
            <Row>
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control value={form.nome} onChange={handleInput} name='nome' type='text' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPreco">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control value={form.preco} onChange={handleInput} name='preco' type='text' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImagem">
                        <Form.Label>Imagem</Form.Label>
                        <Form.Control value={form.imagemUrl} onChange={handleInput} name='imagemUrl' type='text' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicValidade">
                        <Form.Label>Validade</Form.Label>
                        <Form.Control value={form.validade} onChange={handleInput} name='validade' type='text' />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    {params.id && (
                        <Button onClick={deleteProduct} variant="danger" style={{ marginLeft: '10px' }}>
                            Deletar
                        </Button>
                    )}
                </Form>
            </Row>
        </Container>
    );
}

export default CriaProduto;


