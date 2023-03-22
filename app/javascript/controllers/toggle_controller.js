import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ "togglaElement" ]
  fire(){
    this.togglaElementTarget.classList.toggle('d-none')
  }
}
