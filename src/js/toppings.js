import { h, Component } from "preact";

class PizzaToppings extends Component {
  constructor(props) {
    super(props);
    // Initial state with toppings checkboxes all set to false (not selected)
    this.state = {
      toppings: {
        pepperoni: false,
        mushrooms: false,
        onions: false,
        olives: false,
        bacon: false,
        greenPeppers: false,
        sausage: false,
      },
    };
  }

  // Handler to update the state when a checkbox is clicked
  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState((prevState) => ({
      toppings: {
        ...prevState.toppings,
        [name]: checked,
      },
    }));
  };

  // Function to generate the list of selected toppings as a space-separated string
  getSelectedToppings = () => {
    const selectedToppings = Object.keys(this.state.toppings)
      .filter((topping) => this.state.toppings[topping]) // Filter selected toppings
      .join(" "); // Join them with a space
    return selectedToppings;
  };

  render() {
    return (
      <div>
        <h3>Select Pizza Toppings:</h3>
        <form>
          {Object.keys(this.state.toppings).map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                name={topping}
                checked={this.state.toppings[topping]}
                onChange={this.handleCheckboxChange}
              />
              {topping.charAt(0).toUpperCase() + topping.slice(1)}
            </label>
          ))}
        </form>
        <p>Selected Toppings: {this.getSelectedToppings()}</p>
      </div>
    );
  }
}

export default PizzaToppings;
