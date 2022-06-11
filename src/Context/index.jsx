import { createContext } from 'react';

const Context = createContext({});

export default Context;

// Vai ficar Context, o gerente, pq to sem criatividade
// React.Context = { Provider, Consumer }
// Context.Provider => no componente provedor -dã- armazenamento e disponibilização | initial state ficaria aqui -armazenamento-
// Context.Consumer => componente consumidor, leitura :>
// E escrita =>

// Próximo passo: importar o Context.Provider no index, no App, nesse caso
