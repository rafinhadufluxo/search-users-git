import { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Profile from "./Profile";

class App extends Component {

  constructor() {
    super();
    this.state = {
      github: {
        url: `https://api.github.com/users`
        /*  client_id: "",
         client_secret: "",
         count: 7,
         sort: "created: asc" */
      },
      user: [],
      repos: []

    };
  }
  getUser = (e) => {
    const user = e.target.value;
    const { url } = this.state.github;
    axios.get(
      `${url}/${user}`).then(({ data }) => this.setState({ user: data }));
  }


  render() {
    /* console.log(this.state.user); */
    const { user } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="card card-body">
            <h1>Pesquisando usuario da plataforma github</h1>
            <p className="lead">
              Digite um nome para encontrar usuario ou repositorio
            </p>
            <input 
              onChange={this.getUser} 
              id="search" 
              type="text" 
              className="form-control" 
              required 
            />
          </div>

          {user.length !== 0 ? <Profile user={user} /> : null}
        </div>
      </div>
    );
  }
}
export default App;
