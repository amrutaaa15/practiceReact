import { Component } from "react";
import './ToDo.css';

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            title: ' '

        }
    }

    handler = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    addTask = () => {
        let { title, arr } = this.state;
        this.setState({
            arr: [...arr, title]
        })
        console.log(this.state);
    }


    deleteTask = (index) => {
        console.log("delete");
        var bool = window.confirm("Do You really want to delele this?")
        if (bool == true) {
            let { arr } = this.state;
            arr.splice(index, 1)
            this.setState({
                arr: arr
            })
            console.log(index);
        }
        else {
            return
        }
    }
    updateTask = (index,) => {
        let { arr } = this.state;
        let update = prompt("Write the title that you want to update");

        if (update != null) {
            this.state.arr[index] = update;
            this.setState({ arr: arr })
        }
        else {
            return
        }

    }
    render() {
        return <>
            <div className="Container">
                <h1>To Do List</h1>
                <h1>Add List</h1>
                <label> Title: </label><textarea onChange={this.handler} name="title" id="" cols="30" rows="3"></textarea><br></br>
                <button className="btn" onClick={this.addTask}>Add task</button><br></br>
                <table className="table" border="3">
                    <thead>
                        <th>Sr No</th>
                        <th>Title</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.state.arr.map((task, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{task}</td>
                                <td><button className="btn1" onClick={() => this.updateTask(index)}>Update</button><button
                                    onClick={() => this.deleteTask(index)} className="btn1">Delete</button></td>
                            </tr>

                        })}
                    </tbody>

                </table>
            </div>
        </>
    }

}
export default ToDo;


