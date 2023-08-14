import { RouterProvider } from 'react-router-dom'
import './App.css'

import { Provider as ReduxProvider } from './redux/provider'
// import Router from './router'
import { RouterProviderWrapper } from './routes'

function App() {
  return (
    <ReduxProvider>
      {/* <Router />  */}
      <RouterProvider router={RouterProviderWrapper} fallbackElement={<p>Initial Load...</p>} />
    </ReduxProvider>

  )
}

export default App
