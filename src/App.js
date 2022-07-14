import React, { Suspense, lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>loading...</div>}>
        <HomePage />
      </Suspense>
    </div>
  )
}

export default App
