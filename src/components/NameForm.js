import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'
import Recipe from '../components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ingred: '',query:'',submitted: false,recipeList:[]};
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value})
 }
 handleSubmit = (event)=>{
    event.preventDefault();
    
    this.fetchRecipe();
 } 
//  componentDidMount() {
//   this.setState({ submitted: true });
// }
  async fetchRecipe () {
    
    // alert('A name was submitted: ' + this.state.value);
    console.log("Vaibhav1");
    // this.setState({ submitted: true })
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    await fetch(proxyurl+`http://www.recipepuppy.com/api/?i=${this.state.ingred}&q=${this.state.query}`)
          .then(res => res.json())
          .then((response)=>{
                console.log(response.results);
                this.setState({recipeList:response.results});
                this.setState({ submitted: true });
                console.log(this.state.recipeList.length);
          },
          (error) => {
            console.log(error);
          });
    console.log("Vaibhav2");
    
  }
 
  renderRecipe() { 
      console.log(this.state.submitted+"submitted");
      console.log(this.state.recipeList.length+"Vaibhav"); 
    return(
    <div>
      <br/>
    <h3 style={{ fontFamily:"monospace",color:"gray"}}>Recipes for you</h3><br/>
    <Recipe name={this.state.recipeList} />
    </div>);
  } 
  render() {
    return (
    <div >
      <h3 style={{ fontFamily:"monospace",color:"gray"}}>A guided recipe creation site, Just start typing Ingredients and dish name</h3>
        <br/>
        <Form onSubmit={this.handleSubmit} style={{ width: '80rem',flex: 1,paddingLeft:400 }}>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
              <InputGroup.Prepend>
                  <InputGroup.Text>Ingredients</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                id="inlineFormInput"
                placeholder="Enter ingredients"
                name="ingred" onChange={this.handleChange}
              />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>Recipe</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="inlineFormInputGroup" placeholder="Enter Recipe" 
                name="query" onChange={this.handleChange}/>
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>

      {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="ingred" onChange={this.handleChange} />
          <input type="text" name="query" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
      {this.state.submitted && this.renderRecipe()}      
      </div>
    );
  }
}




// export default function MoviesList() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [movies, setMovies] = useState([]);
//     useEffect(() => {
//       const fetchMovies = async() => {
//         await fetch("https://swapi.dev/api/films/")
//           .then(res => res.json())
//           .then(
//             (filmResponse) => {
//               setIsLoaded(true);
//               // Sorting Films returned from API in ascending order
//               const filmsSortedByReleaseDate = filmResponse.results.sort((film1, film2) =>
//                film1.release_date.substring(0, 4) - film2.release_date.substring(0, 4));
//                setMovies(filmsSortedByReleaseDate);
//             },
//             (error) => {
//               setIsLoaded(true);
//               setError(error);
//             }
//           )
//       }
//       fetchMovies();
//     },[])
  

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>
//         <img className="loadingGif" src="https://i.pinimg.com/originals/a7/b0/15/a7b015d343ad801ad6da8c242dc6ae06.gif" alt="Loading..." /></div>;
//     } else {
//       return (
//         <div>
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="holder.js/100px180" />
//             <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//             </Card>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="ingred" value={this.state.ingred} onChange={this.handleChange} />
//           <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       </div>
//       );
//     }
//   }