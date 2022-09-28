import React from 'react';

interface PainelProps {
    cor: string;
    children?: JSX.Element,
}

const Painel: React.FC<PainelProps> = ({ cor, children }) => {
    return (
        <div style={{backgroundColor: cor}}>
                <hr />
                { children }
                <hr />
        </div>
    )
}

export default Painel;