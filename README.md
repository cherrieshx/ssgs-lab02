# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

```bash
git clone https://github.com/cherrieshx/ssgs-lab2.git
cd ssgs-lab2
npm install
```

Avviando con il seguente comando viene mostrato le funzionalità da scegliere del progetto
```bash
cd src
npm start
```
Per avviare il progetto con una funzionalita' specifica si esegue il seguente template di comando

```bash
cd src
npm start <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```

## Testing

```bash
npm test
```
Il progetto ha una pipeline main.yml che esegue automaticamente il test con coverage, per visualizzare i dettagli si va su Github Actions e si seleziona
l'ultimo workflow eseguito con successo, inoltre si può scaricare il risultato del test sotto nella sezione Artifacts.
