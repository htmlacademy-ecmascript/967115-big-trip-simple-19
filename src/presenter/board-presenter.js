import { render } from '../render.js';
import BoardView from '../view/board-view.js';
import TripSortView from '../view/trip-sort-view.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventView from '../view/event-view.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  tripEventsListComponent = new TripEventsListView();

  constructor (boardContainer) {
    this.boardContainer = boardContainer;
  }

  init () {
    render(this.boardComponent, this.boardContainer);
    render(new TripSortView(), this.boardComponent.getElement());

    render(this.tripEventsListComponent, this.boardComponent.getElement());
    render(new EventEditView(), this.tripEventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.tripEventsListComponent.getElement());
    }
  }
}
