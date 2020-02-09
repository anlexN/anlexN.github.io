// It costs me a week to learn React step by step.
// I think [React tic-tac-toc tutorial](https://reactjs.org/tutorial/tutorial.html) logic is not so good,
// and i don't like class so that i refrator tutorial using [React hooks](https://reactjs.org/docs/hooks-intro.html)

import React, { useState, useEffect } from 'react';
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    IonText,
} from '@ionic/react';
// import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// marked.setOptions({
//     highlight (code) {
//         return Prism.highlight(code, Prism.languages.javascript, 'javascript')
//     }
// })

const GamePage = () => {
    const [snippet, setSnippet] = useState('');

    const [history, setHistory] = useState([
        ['', '', '', '', '', '', '', '', '']
    ]);

    const [players, setPlayers] = useState(['X', 'O']);
    const [winner, setWinner] = useState(false);

    const board = [...history[history.length - 1]];

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleSquare (index) {
        board[index] = players[0];

        setHistory(history.concat([board]));

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return setWinner(true);
            }
        }

        setPlayers(players.reverse());

    }

    function handleUndo (index) {
        setHistory(history.slice(0, index + 1))
        setWinner(false);
    }

    useEffect(() => {
        fetch('Game.js')
        .then(res => res.text())
        .then(text => setSnippet( 
            Prism.highlight(text, Prism.languages.javascript, 'javascript')
        ));
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Tic Tac Toe</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center" size="12" sizeMd="4">
                            <div>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(0)}>{board[0]}</IonButton>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(1)}>{board[1]}</IonButton>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(2)}>{board[2]}</IonButton>
                            </div>
                            <div>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(3)}>{board[3]}</IonButton>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(4)}>{board[4]}</IonButton>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(5)}>{board[5]}</IonButton>
                            </div>
                            <div>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(6)}>{board[6]}</IonButton>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(7)}>{board[7]}</IonButton>
                                <IonButton disabled={winner} size="large" onClick={() => handleSquare(8)}>{board[8]}</IonButton>
                            </div>
                        </IonCol>

                        <IonCol size="12" sizeMd="4">
                            <IonList lines="none">
                                <IonItem>{winner ? 'Winner ->' : 'Player ->'} {players[0]}</IonItem>

                                {
                                    winner ? <IonItem><IonButton onClick={() => handleUndo(0)}>Restart game</IonButton></IonItem>
                                    : history.slice(0, -1).map((_, index) => 
                                        <IonItem>
                                            <IonButton key={index} onClick={() => handleUndo(index)}>undo step {index + 1}</IonButton>
                                        </IonItem>
                                    )
                                }

                            </IonList>
                        </IonCol>

                    </IonRow>
                    <IonRow>
                        <pre>
                            <code className="language-javascript" dangerouslySetInnerHTML={{ __html: snippet }}></code>
                        </pre>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >

    )
}

export default GamePage;