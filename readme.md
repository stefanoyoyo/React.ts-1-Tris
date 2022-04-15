-----15/04/2022-----

https://it.reactjs.org/tutorial/tutorial.html
In questo progetto inizio ad imparare come creare un'app react.

React è una libreria di javascript di cui devo usare le classi
per poterne fruire i vantaggi.
In react le funzioni, oltre ai normalissimi elementi di javascript,
possono ritornare anche elementi XML che comprendono sia i
normalissimi elementi html che i componenti realizzabili in react.
Questi elementi XML sono poi usati dalla libreria per definire come
javascript dovrà creare gli elementi sul DOM.

CREAZIONE COMPONENTI: la struttura del progetto prevede la creazione
di una cartella dove inserirò i file javascript di ogni componente.
Ogni file contenente un componente deve avere estensione "jsx" o "tsx".
Uno di questi componenti può contenere:
• funzioni;
• classi;
Io personalmente preferisco creare i componenti usando le classi.
Il contetto di classe è ovvimanente valido anche in javascript.
Per poter usare React, le classi devono estendere "React.component".

https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error
PERCHE' NON POSSO CHIAMARE setState in un componente per cambiare lo stato del componente: 
setState non può essere chiamato da componente perchè il suo codice, esattamente come 
in Angular, viene eseguito in continuazione. Cambierei quindi tantissime
volte lo stato del componente. 
Il cambiamento di stato va fatto fare in risposta ad un evento.

https://stackoverflow.com/questions/39853646/how-to-import-a-css-file-in-a-react-component
COME AGGIUNGERE FILE CSS A COMPONENTE: per farlo semplicemente creo il file css 
(possibilmente nella cartella del componente) e lo importo nel componente.
ESEMPIO: import './tris.css';