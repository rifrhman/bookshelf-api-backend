const {
  addNewBooks, getAllBooks, getDetailBooksById, updateBooksById, deleteBooksById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBooks,
  }, {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBooksById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBooksById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksById,
  },
];

module.exports = routes;
