import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const numPages = Mat.ceil(this._data.length / this._data.resultsPerPage);
    console.log(numPages);

    //page 1
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1, others';
    }

    //last page
    if (this._data.page === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page 1</span>
    </button>
      `;
    }

    //other page
    if (this._data.page < numPages) {
      return 'other page';
    }

    // page 1 and there are no other page
    return 'only page 1';
  }
}

export default new PaginationView();
