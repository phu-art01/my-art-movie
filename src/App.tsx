
import { HashRouter, useRoutes } from 'react-router-dom'
import './assets/css/App.css'
import router from './components/router/_router';



 export const AppRouter = () => {
  const appRouter=useRoutes(router);
  return appRouter
}
const App =()=>{
  return (
    <>
    <HashRouter>
      <AppRouter />
    </HashRouter>
    </>
  )
}

export default App
