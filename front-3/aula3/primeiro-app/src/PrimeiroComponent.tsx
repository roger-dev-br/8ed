import React from 'react';

function PrimeiroComponent(props: any) {
    return (
        <>
            <h1>{ props.titulo }</h1>
            <h4>{ props.subtitulo }</h4>
            <hr />
        </>
    )
}

export default PrimeiroComponent;