// 1

// import book from './book.json';

// try {
//   const bookObject = JSON.stringify(book);
//   console.log('is valid', bookObject);
// } catch (error) {
//   console.log('invalid', error);
// }

// 2

// const form = document.getElementById('form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   const formData = {
//     name: e.target.name.value,
//     age: e.target.age.value,
//   };

//   const stringFormData = JSON.stringify(formData);

//   try {
//     const parsedFormData = JSON.parse(stringFormData);
//     console.log('Is valid:', parsedFormData);
//   } catch (error) {
//     console.log('Invalid', error);
//   }
// }

// form.reset();

// 3

// import movies from './movie.json';

// const stringMovies = JSON.stringify(movies);

// try {
//   const parsedMovies = JSON.parse(stringMovies);
//   console.log('Is valid:', parsedMovies);
// } catch (error) {
//   console.log('Invalid', error);
// }
