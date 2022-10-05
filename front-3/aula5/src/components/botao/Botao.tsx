import styled from 'styled-components';

interface Parametro {
    escuro?: boolean;
}

const Botao = styled.button<Parametro>`
    background: ${x => x.escuro ? "black" : "red"};
    color: #fff;
`;

const BotaoGrande = styled(Botao)`
    width: 400px;
`;

export { Botao, BotaoGrande };

