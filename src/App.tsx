import { ChangeEvent, useState } from 'react';
import { Post } from './types/Post';


function App() {

  const [posts, setPosts] = useState<Post>([]);
  const [loading, setLoading] = useState(true);

    const loadMovies = async () => {
      try {
      setLoading(true);
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let json = await response.json();
      setLoading(false);
      setPosts(json);
      } 
      catch (e) {
        setLoading(false);
        console.error(e);
      }
    }
    


   

    
    return (
      <div className="bg-black" >
       Texto no centro
      </div>
    );
}

export default App;




export const PostForm = () => {

  const [addBodyText, setAddBodyText] = useState('');
  const [addTitleText, setAddTitleText] = useState('');
  
  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  }

  const handleAddClick = async () => {
    if(addTitleText && addBodyText) {
     let response = await fetch ("http://depost.com.br/post", {
      method: 'POST',
      body: JSON.stringify({
      title: addTitleText,
      body: addBodyText,
      userId: 1 // no caso por estar logado com o usuário, caso não fazer requisição do ID
    }),
    headers: {
       'Content-Type': 'application/json'
    }
     });
    } else {
     alert("Preencha os dados!");
    }
  }


  return (
    <fieldset className="border-2 mb-3 p-3"> 
      <legend>Adicionar novo post</legend>
        <input 
          type="text" 
            className="block border" 
            value={addTitleText}
            onChange={handleAddTitleChange} 
          placeholder="Digite um título"
        />
        <textarea className="block border" 
          value={addBodyText} 
          onChange={handleAddBodyChange}
        ></textarea>
        <button className="block border" onClick={handleAddClick}>Adicionar</button>

    </fieldset>
  );

}