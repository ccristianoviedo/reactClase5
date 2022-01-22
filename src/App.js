import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ProductCard from './components/productos'
import trumpeter from '../src/components/img/trumpeter.jpeg'
import luigi from '../src/components/img/luigi.jpg'


function App() {
    
  return (
    <div className="App">
      <header className='app-header'>
        <label>Carrito</label>
              
      </header>
      <nav className="App-header">
        <img src={trumpeter} alt='trumpeter'/>
        <ProductCard  producto='ESTACIA MENDOZA' stock={0} origen='VALLE DE UCO' caracteristicas='Vino complejo de imponente personalidad, profundo
        color rojo y características que representan a Vista Flores' precio={2100}/>
        <img src={luigi} alt='luigi'/>        
        <ProductCard producto='FELIPE RUTINI'stock={9} origen='VALLE DE UCO' caracteristicas='Color rojo rubí intenso, con reflejos púrpura. Aroma muy intenso, a frutos rojos (ciruelas, cerezas, frutillas).' precio={2300}/>
        <img src={trumpeter} alt='trumpeter'/>
        <ProductCard producto='TRUMPETER' stock={0} origen='VALLE DE UCO' caracteristicas='Vinos de carácter sabroso y franco, con buen balance entre acidez, dulzor y taninos. ' precio={1450}/>
        <img src={trumpeter} alt='trumpeter'/>
        <ProductCard producto='sssssssss' stock={14} origen='sssss' caracteristicas='sssssss' precio='3423423'/>
        <img src={trumpeter} alt='trumpeter'/>
        <ProductCard producto='TRUMPETER' stock={0} origen='VALLE DE UCO' caracteristicas='Vinos de carácter sabroso y franco, con buen balance entre acidez, dulzor y taninos. ' precio={1450}/>
        <img src={trumpeter} alt='trumpeter'/>
        <ProductCard producto='TRUMPETER' stock={10} origen='VALLE DE UCO' caracteristicas='Vinos de carácter sabroso y franco, con buen balance entre acidez, dulzor y taninos. ' precio={1450}/>
        <img src={trumpeter} alt='trumpeter'/>
        <ProductCard producto='TRUMPETER' stock={10} origen='VALLE DE UCO' caracteristicas='Vinos de carácter sabroso y franco, con buen balance entre acidez, dulzor y taninos. ' precio={1450}/>
        <img src={luigi} alt='trumpeter'/>
        <ProductCard producto='TRUMPETER' stock={10} origen='VALLE DE UCO' caracteristicas='Vinos de carácter sabroso y franco, con buen balance entre acidez, dulzor y taninos. ' precio={1450}/>
            
      </nav>
      
    </div>
  );
}

export default App;
