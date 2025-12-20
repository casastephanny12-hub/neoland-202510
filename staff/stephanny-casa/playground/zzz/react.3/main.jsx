const rootElement = document.getElementById('root') //referencia del objeto index

const root = ReactDOM.createRoot(rootElement) //pasamos a DOM

//landing 
  
const landingView = <div>
    <h1>MyPet</h1>

    <p>Welcome!</p>

    <nav>
        <a href="">Login</a> or <a href="">Register</a>
    </nav>
</div>

root.render(landingView)