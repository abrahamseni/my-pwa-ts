import '@reapit/elements/dist/index.css'

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from './Home'

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
