
import './App.css';
// import Subjects from './components/Subjects/Subjects';
import Header from './components/Header/Header';

import Info from './components/Information/Info';
import Footer from './components/Footer/Footer';
import Card from '../src/components/Card/Card';
// import Subjects from './components/Subjects/Subjects';



function App() {



  return (

    <div className="App">

      {/* <Subjects></Subjects> */}

      <div className='grid grid-cols-4'>
        <div className='bg-slate-50 col-span-3'>
          <div className='grid'>
            <Header></Header>


            <div className='grid grid-cols-3 ml-32 gap-11 mt-12'>
              <Card></Card>
            </div>

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
