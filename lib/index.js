import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import ListController from "./controllers/list_controller.js"
Stimulus.register("list", ListController)

import DeleteItemController from "./controllers/delete_item_controller.js"
Stimulus.register("delete-item", DeleteItemController)
