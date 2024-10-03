import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["item", "groceryList"]

  connect() {
  }
  
  add(event) {
    event.preventDefault()
    const itemName = this.itemTarget.value
    const listItem = `<li class="list-group-item d-flex" data-controller="delete-item">
        <div>${itemName}</div>
        <button class="btn btn-danger btn-sm ms-3" data-action="click->delete-item#delete">Delete</button>
      </li>`
    
    this.groceryListTarget.insertAdjacentHTML("beforeend", listItem)
    // event.currentTarget.reset()
    this.itemTarget.value = ""
  }
}
