import './App.css';
import ComponentArticle from './components/articles/Articles';



const App = () => {
  const article = {
    "title":"O que são testes automatizados",
    "url":"https://devgo.com.br/o-que-sao-testes-automatizados"};

  return (
    <div style={{
      maxWidth: 800,
      margin: '30px auto'
    }} className="App">
      <ComponentArticle article={article} />

    </div>
  );
}

export default App;
