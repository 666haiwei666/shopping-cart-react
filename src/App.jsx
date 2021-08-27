import AppleBasket from './components/AppleBasket'
import AppStore from './mobx/appstore'

const appStore = new AppStore()

function App() {
  return (
    <div className="App">
      <AppleBasket appStore={appStore}></AppleBasket>
    </div>
  );
}

export default App;
