import { Provider } from 'react-redux'
import './App.scss'
import './app/assets/scss/comman.scss'
import './app/components/Pages/ChatComponents/chatComponent.scss'
import './app/components/Pages/EditBot/canvas.scss'
import Canvas from './app/components/Pages/EditBot/Canvas'
import store from './app/store/store'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Canvas />
      </Provider>
    </div>
  )
}

export default App
