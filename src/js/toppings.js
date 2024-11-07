    // Define the custom element class
    class PizzaToppings extends HTMLElement {
      constructor() {
        super();
        // Attach shadow DOM for encapsulation
        this.attachShadow({mode: 'open'});
        // This will hold the reference to the paragraph element
        this.selectedToppingsParagraph = document.createElement('p');
      }

      async connectedCallback() {
        // Fetch toppings from an external JSON file
        await this.loadToppings();
        // After toppings are loaded, render the checkboxes
        this.render();
      }

      async loadToppings() {
        try {
          // Fetch the JSON file containing the list of toppings
          const response = await fetch('../../data/toppings.json');
          const data = await response.json();

          // Store the toppings in the component
          this.toppings = data.toppings;
        } catch (error) {
          console.error('Error loading toppings:', error);
          this.toppings = [];
        }
      }

      render() {
        // Create container div for checkboxes
        const container = document.createElement('div');

        // Create checkbox list if toppings were successfully loaded
        if (this.toppings.length > 0) {
          this.toppings.forEach(topping => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = topping;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(topping));
            container.appendChild(label);
            container.appendChild(document.createElement('br'));

            // Add event listener for checkbox change
            checkbox.addEventListener('change', () => this.updateSelectedToppings());
          });

          // Append the checkbox list and the paragraph to the shadow DOM
          this.shadowRoot.appendChild(container);
          this.shadowRoot.appendChild(this.selectedToppingsParagraph);
        } else {
          // Show an error message if toppings couldn't be loaded
          this.selectedToppingsParagraph.textContent = 'Error loading toppings.';
        }
      }

      updateSelectedToppings() {
        // Get all the checkboxes inside the shadow DOM
        const checkboxes = this.shadowRoot.querySelectorAll('input[type="checkbox"]:checked');
        
        // Create a string of selected toppings
        const selectedToppings = Array.from(checkboxes)
          .map(checkbox => checkbox.value)
          .join(' ');

        // Update the text content of the paragraph with the selected toppings
        this.selectedToppingsParagraph.textContent = `Selected toppings: ${selectedToppings}`;
      }
    }

    // Define the custom element
    customElements.define('pizza-toppings', PizzaToppings);

// Define the custom element
export default PizzaToppings;
