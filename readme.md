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

**CREAZIONE COMPONENTI:** la struttura del progetto prevede la creazione
di una cartella dove inserirò i file javascript di ogni componente.
Ogni file contenente un componente deve avere estensione "jsx" o "tsx".
Uno di questi componenti può contenere:
• funzioni;
• classi;
Io personalmente preferisco creare i componenti usando le classi.
Il concetto di classe è ovvimanente valido anche in javascript.
Per poter usare React, le classi devono estendere "React.component".

https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error
**PERCHE' NON POSSO CHIAMARE setState IN UN COMPONENTE PER CAMBIARE LO STATO DEL COMPONENTE:**
setState non può essere chiamato da componente perchè il suo codice, esattamente come
in Angular, viene eseguito in continuazione. Cambierei quindi tantissime
volte lo stato del componente.
Il cambiamento di stato va fatto fare in risposta ad un evento.

https://stackoverflow.com/questions/39853646/how-to-import-a-css-file-in-a-react-component
**COME AGGIUNGERE FILE CSS A COMPONENTE:** per farlo semplicemente creo il file css
(possibilmente nella cartella del componente) e lo importo nel componente.
ESEMPIO: import './tris.css';

-----16/04/2022-----

**DIFFERENZA TRA IL PASSARE UNA FUNZIONE ED UNA LAMBDA CHE CHIAMA UNA FUNZIONE AD UN EVENTO:** per qualche motivo, se passo una funzione direttamente succede che viene chiamata automatcamente, anche se l'evento (click di un bottone ad esempio) non viene triggerato.
Bisogna quindi SEMPRE passare una funzione ad un evento come l'esecuzione di una lambda.
ESEMPIO: se in questo codice passo la funzione senza usare la lambda, viene eseguita automaticamente anche senza schiacciare uno dei bottoni.
In questo caso, succede che viene scritto "X" nel bottone in automatico.  
 <Square
changeText={() => this.changeText(index)}
squareText={this.trisGrid[index]} />

**IL CAMBIO DI STATO DEL FIGLIO NON AVVIENE:** sospetto che sia a causa del fatto che non ho inserito il valore da visualizzare nel bottone all'interno dello state. 
Sospetto bene. 

**UTILITA' DI STATE IN REACT**: l'oggetto state in react è un oggetto particolare
che permette di conservare i valori che deve utilizzare un componente. 
DEFINIZIONE: What is state in React? The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. 
A COSA SERVE: l'utilità di questo oggetto è quella che, ad ogni cambiamento, renderizza (ricarica) nuovamente il componente. Questo permette di fare in modo che il componente possa visualizzare il cambiamento della variabile appena avviene. 
Un componente può anche visualizzare/accedere anche ai valori salvati in qualsiasi altro oggetto javascript. Il problema è però che quando cambia il valore di quegli oggetti, il componente non se ne accorge.  
**ESEMPIO:** nel tris, ogni quadrato è un componente di tipo square che visualizza il contenuto passato come prop dal componente tris. 
I quadrati di default non mostrano niente.
Quando viene cliccato un quadrato, il componente square chiama il metodo passato dal padre (tris) per cambiare lo stato della sua x (conservato nel padre). 
Il bottone mostra il testo che gli indica il padre, quindi. 
Per farlo, il testo deve essere salvato in uno state. Al cambiamento (cioè al click) il bottone visualizzerà immediatamente la x. 
Se il cambiamento venisse applicato ad un altro oggetto, il quadrato cliccato continuerebbe a mostrare stringa vuota.


-----17/04/2022-----

**RIASSUNTO DELLE COSE CAPITE:**
 • un componente può usare sia valori salvati in oggetti normali che nell'oggetto state, solo che notifica al componente del nuovo valore da visualizzare avviene solo nel secondo caso.
 • l'oggetto state può essere assegnato solo nel costruttore, altrove può essere modificato solo con il metodo setState. Questo metodo consente solo di riassegnare lo state con un nuovo oggetto di tipo state passato come parametro. 
 Il metodo setState può essere chiamato solo al trigger di un evento, non nel metodo render o in altri metodi del componente: se fatto, react darà errore, indicando che lo state viene cambiato all'infinito. Questo perchè lo state è continuamente alterato. 
 ESEMPIO: nel tris, lo stato della partita è salvato nello state del padre. Il figlio square cambia lo stato del padre accedendo allo state del padre e cambiandone il valore. Di preciso, square cambia il valore dell'elemento iseimo in base al suo id. 
 • 
 •

 -----19/04/2022-----

 **REACT HOOKS**: gli hooks in react sono degli strumenti che vengono messi a disposizione dalla libreria. Essi si possono usare solo in componenti di tipo funzione.

**USE STATE**: questo hook serve a replicare il comportamento di state dei componenti di tipo class, ma all'interno di componenti di tipo function. 
Si usa chiamando usando la funzione useState, che restituisce sempre un Array di due elementi. Il primo è lo stato ed il secondo è una funzione setter da usare per modificare lo stato
Richiedono lo destructuring.
useState accetta come parametro il valore iniziale che avrà lo state.
È possibile chiamare N volte il metodo useState assegnandolo a tutte le coppie stato / setState che si vuole. Ognuna di queste coppie sarà uno stato per l'app, da usare nel codice HTML

**USE STATE CON OGGETTI**: se il componente usasse un oggetto per conservare le varie componenti dello stato del componente (cioè le variabili di cui parlavo prima) bisogna accedere ai suoi campi molto semplicemente.

**PERCHE BISOGNA SEMPRE USARE LE LAMBDA FUNCTIONS**: va fatto perché altrimenti il contenuto di una funzione normale verrebbe eseguito in continuazione. 
In particolare ho scoperto che per qualche motivo, le funzioni lambda sono sempre bindate a this, mentre i metodi no. Devono essere bindati automaticamente.

**COME FUNZIONA USESTATE CON LO STATO IN OBJECT**: ogni volta che si chiama il metodo per settare lo stato, il componente viene ri renderizzato da capo, eliminando lo stato degli altri campi.
Per evitare che ciò avvenga bisogna usare l'operatore spread nel metodo che cambia lo stato sull'array di stati ricevuti.

-----12/06/2022-----

**PASSAGGIO DI UN VALORE NELL'OGGETTO STATE AD UN COMPONENTE FIGLIO**: non funziona. 
ESEMPIO: 
#region esempio
  render() {
    console.log(this.state.trisNumber);                 // 9
    return (      
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p> 
      <Tris trisNumber={this.state.trisNumber}/>      // Error: Cannot read properties of undefined (reading 'trisNumber')
      </div>
    );
  }
#endregion

**QUANDO ACCEDERE ALLE PROPS CON THIS**: nel costruttore non posso accedere alle props usando this.
Vado in eccezione.
Posso però farlo nei metodo chiamati dal metodo render!
**#region esempio**
{
  import React = require('react');
  import { Square } from '../square/square';
  import './tris.css';

  export interface AppProps {
    squareText: string;
    trisNumber: number;
    changeText: Function;
  }
  export interface AppState {
    trisGrid: string[]
  }

  export class Tris extends React.Component<AppProps, AppState> {

    constructor(props) {
      super(props);
      this.state = {
        trisGrid: Array(props.trisNumber).fill('')
      }
    }

    changeText(index: number) {
      let trisGrid = Object.assign(this.state.trisGrid);
      trisGrid[index] = this.props.squareText;
      this.setState({
        trisGrid: trisGrid
      });
      console.log(this.state.trisGrid);
    }

    render() {
      /* Implementing angular *ngFor creating an array 
      having the given number of elements and then using 
      the map method on it. */
      return (
        <div className="tris-grid">
          {this.state.trisGrid.map((el, index) => (
            <Square
              squareText={this.state.trisGrid[index]}
              changeText={(index) => this.changeText(index)}
              squareId={index}
            />
          ))}
        </div>
      );
    }
  }
}
**#endregion**