// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);

    response.data.articles.javascript.forEach(article => {
        cards.append(createCard(article));
    })
    response.data.articles.bootstrap.forEach(article => {
        cards.append(createCard(article));
    })
    response.data.articles.technology.forEach(article => {
        cards.append(createCard(article));
    })
    response.data.articles.jquery.forEach(article => {
        cards.append(createCard(article));
    });
    response.data.articles.node.forEach(article => {
        cards.append(createCard(article));
    });
})
.catch(error => {
    console.log(error);
})

//create function
function createCard(article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const byline = document.createElement('span');

    //setup structure of elements
    card.append(headline);
    card.append(author);
    author.append(imageContainer);
    imageContainer.append(image);
    author.append(byline);

    //add classes to elements
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    //set content
    headline.textContent = article.headline;
    image.src = article.authorPhoto;
    byline.textContent = `By ${article.authorName}`;

    return card;
}

