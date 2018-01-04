var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster:'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster:'images/lion.jpg'
  },
  {
  	id:3,
  	title:'Labirynt fauna',
  	desc:'film o faunie',
    poster:'images/faun.jpg'
  },
  {
  	id:4,
  	title:'Odlot',
  	desc:'film o lataniu domem',
    poster:'images/odlot.jpg'
  },
  {
  	id:5,
  	title:'Gdzie jest Nemo?',
  	desc:'film o tym, jak szukać dzieci',
    poster:'images/nemo.jpg'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src:movie.poster})
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  ReactDOM.render(element, document.getElementById('app'));