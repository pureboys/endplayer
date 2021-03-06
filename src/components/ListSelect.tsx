import * as React from "react";

class ListItem extends React.Component {
  dialog: any;
  props: {
    list: [],
    toggleList([]): void,
  };
  constructor(props) {
    super(props);
    this.dialog = React.createRef()
  }
  componentDidMount() {
    this.dialog.current.showModal()
  }
  render() {
    return (
      <dialog ref={this.dialog} >
        <h5>select. please</h5>
        <ul>
          {this.props.list.map((value, index) => {
            return <li onClick={() => this.props.toggleList([value])} key={index}>{value}</li>
          })}
        </ul>
      </dialog>
    )
  }
}

export default ListItem

