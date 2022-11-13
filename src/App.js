import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Info from './components/Information/Info';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <div className='grid grid-cols-4'>
        <div className='inline-block bg-slate-50 col-span-3'>
          <Header></Header>

          <div className='ml-32 gap-11'>
            <Card></Card>
          </div>
        </div>
        <div className='float-right top-0'>
          <Info></Info>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>

  );
}

export default App;
