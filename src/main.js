import { render } from './render.js';
import TripFiltersView from './view/trip-filters-view.js';
import NewEventButtonView from './view/new-event-button-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripMainElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-body__page-main');
const boardPresenter = new BoardPresenter(siteMainElement);

render(new TripFiltersView(), siteFiltersElement);
render(new NewEventButtonView(), siteTripMainElement);

boardPresenter.init();
