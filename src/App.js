import logo from './logo.svg';
import './App.css';
import IndexFooter from './components/Footer/IndexFooter';

function App() {
  return (
    <div className="App">
      <div className="Home">
        <div className="page-header">
          
        </div>
        <div className="page-center">
          <div className="page-center-left">
            <p>
              Seja Bem-vindo ao DogeCode!
              Ambiente feito para quem deseja
              começar a programar.
            </p>
            <button className="button action-button">
              Comece agora!
            </button>
          </div>
          <div>
            {/* <h1>a</h1> */}
          </div>
        </div>
        <div className="page-footer">
          <IndexFooter />
        </div>
      </div>
    </div>
  );
}

export default App;