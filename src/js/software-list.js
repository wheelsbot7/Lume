// Define the custom element class
class SoftwareList extends HTMLElement {
  constructor() {
    super();
    // Attach shadow DOM for encapsulation
    this.attachShadow({ mode: "open" });
    // This will hold the reference to the paragraph element
    this.selectedSoftwareParagraph = document.createElement("code");
  }

  async connectedCallback() {
    // Fetch software from an external JSON file
    await this.loadsoftware();
    // After software are loaded, render the checkboxes
    this.render();
  }

  async loadsoftware() {
    try {
      // Fetch the JSON file containing the list of software
      const response = await fetch("../../data/software.json");
      const data = await response.json();

      // Store the software in the component
      this.software = data.software;
    } catch (error) {
      console.error("Error loading software:", error);
      this.software = [];
    }
  }

  render() {
    // Create container div for checkboxes
    const container = document.createElement("div");

    // Create checkbox list if software were successfully loaded
    if (this.software.length > 0) {
      this.software.forEach((topping) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = topping;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(topping));
        container.appendChild(label);
        container.appendChild(document.createElement("br"));

        // Add event listener for checkbox change
        checkbox.addEventListener(
          "change",
          () => this.updateselectedSoftware(),
        );
      });

      // Append the checkbox list and the paragraph to the shadow DOM
      this.shadowRoot.appendChild(container);
      const div = document.createElement("div");
      div.classList.add("terminal");
      this.shadowRoot
        .appendChild(div)
        .appendChild(document.createElement("pre"))
        .appendChild(this.selectedSoftwareParagraph);
    } else {
      // Show an error message if software couldn't be loaded
      this.selectedSoftwareParagraph.textContent = "Error loading software.";
    }
  }

  updateselectedSoftware() {
    // Get all the checkboxes inside the shadow DOM
    const checkboxes = this.shadowRoot.querySelectorAll(
      'input[type="checkbox"]:checked',
    );

    // Create a string of selected software
    const selectedSoftware = Array.from(checkboxes)
      .map((checkbox) => checkbox.value)
      .join(" ");

    // Update the text content of the paragraph with the selected software
    this.selectedSoftwareParagraph.textContent =
      `sudo pacman -Sy ${selectedSoftware}`;
  }
}

// Define the custom element
export default SoftwareList;
