/*🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id 
e restituisce una Promise che recupera il titolo di un post 
dal link https://dummyjson.com/posts/{id}

🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. 
Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, 
recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.*/

function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => resolve(data.title))
      .catch(reject);
  });
}

getPostTitle(1)
  .then((data) => console.log("Il titolo del Post è:", data))
  .catch((error) => {
    console.error(error);
  });

//BONUS

function getPost(id) {
  return new Promise((resolve, reject) => {
    let results = [];

    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        results = post;
        return fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((userData) => {
            results.user = userData;
            resolve(results);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

getPost(1)
  .then((results) => {
    console.log("L'intero Post è:", results);
  })
  .catch((error) => {
    console.error(error);
  });
