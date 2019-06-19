// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Open';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
    if(this.expandButton.textContent === 'Open')
      this.expandButton.textContent = 'Close';
    else
      this.expandButton.textContent = 'Open'
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create 
a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles =  document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
console.log('articles', articles);

let createArticle = (title, article) => {
  var articleDiv = document.createElement('div');
  articleDiv.classList.add('article');
  var articleTitle = document.createElement('h2');
  articleTitle.textContent = title;
  articleDiv.appendChild(articleTitle);
  var articleDate = document.createElement('p');
  articleDate.classList.add('date');
  articleDate.textContent = 'Nov 7th, 2017'
  articleDiv.appendChild(articleDate);
  var articleContent = document.createElement('p');
  articleContent.textContent = article;
  articleDiv.appendChild(articleContent);
  var articleButton = document.createElement('span');
  articleButton.classList.add('expandButton');
  articleDiv.appendChild(articleButton);

  document.querySelector('.articles').appendChild(articleDiv);
  // let newArticles = document.querySelectorAll('.article');
  // newArticles.forEach(article => new Article(article))
  // console.log(newArticles);

  articles = document.querySelectorAll('.article');
  articles.forEach(article => new Article(article))
  console.log(articles);
}


let submit = document.querySelector('#submit');

submit.addEventListener('click', function()  {
  let title = document.querySelector('#title').value;
  let article = document.querySelector('#article').value;
  createArticle(title,article)
})