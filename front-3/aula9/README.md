# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

import { useState } from 'react';

export default function PageUseState() {
    const recados = [
        {
            id: 1,
            texto: "Recado 1"
        },
        {
            id: 2,
            texto: "TExto do recado 2"
        }        
    ];

    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("Anonimo");
    const [list, setList] = useState(recados);

    function aumentar() {
        setContador(contador + 1);
    }

    function addRecado() {
        setList([
           ...list,
           {
               id: 3,
               texto: "Novo recado adicionado"
           },
        ]);
    }

    return (
        <>
            <h2>Contador = { contador }</h2>

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={() => setContador(0)}>Zerar</button>

            <hr />        

            <div>
                Olá, { nome }

                <div>
                    <input type="text" value={nome} 
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
            </div>

            <hr />
            <div>
                { list.map((m) => 
                    <li key={m.id}>{m.id}: { m.texto }</li>
                )}
            </div>
            <div>
                <button onClick={addRecado}>Adicionar Recado</button>
            </div>
        </>
    );
}



import {useEffect, useState, useMemo } from 'react';

export default function PageUseEffect() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState(0);
    let numeroDeRecados = 0;
    const recados = [];

    useEffect(() => {
        // corpo do use effect
        console.log('Rodou useEffect');
        setResultado(Number(numero1) * Number(numero2));
    }, [numero1, numero2]);

    const dobro = useMemo(() => {
        console.log('Rodou o useMemo');
        return (numero1 * numero2) * 2
    }, [numero1, numero2]);

    return (
        <>
            <h2>Use Effect</h2>

            <input type="number" value={numero1} onChange={(e) => setNumero1(Number(e.target.value))} />
            <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />

            <p>Resultado = { resultado }</p>

            <p>
                O dobro é {dobro}
            </p>
        </>
    );    
}



import { MouseEventHandler, useCallback } from "react";

const Home = ({ content, depA, depB }: any) => {
  const handleClick = useCallback<MouseEventHandler<HTMLElement>>(
    (event) => {
      console.log(content);
      console.log(depA);
      console.log(depB);
    },
    [depA, depB, content]
  );

  return <div onClick={handleClick}>{content}</div>;
};

export default Home;


