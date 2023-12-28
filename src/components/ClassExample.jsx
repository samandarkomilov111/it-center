import { Component } from "react";
export class ClassExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("component yaratilishi paytida ishga tushadi");
  }
  componentDidUpdate() {
    console.log(
      "component ichidagi ma'lumotlar yangilangan paytida ishga tushadi"
    );
  }
  componentWillUnmount() {
    console.log("component DOM dan o'chirilgan paytda ishga tushadi");
  }
  render() {
    return (
      <>
        <h2 className="text-3xl text-center py-5">
          Class Example
          <span className="text-green-500 ml-2">{this.state.count}</span>
        </h2>
        <div className="text-lg flex justify-center gap-x-5">
          <button
            type="button"
            className="bg-green-500 p-2 px-5 text-white rounded hover:bg-green-600"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Qo`shish
          </button>
          <button
            type="button"
            className="bg-red-500 p-2 px-5 text-white rounded hover:bg-red-600"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Ayirish
          </button>
        </div>
      </>
    );
  }
}
// componentDidMount // yaratilishi
// componentDidUpdate // ma'lumot yangilanishi
// componentDidUnmount // component olip tashlash
