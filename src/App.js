
import { Component } from "react";
import Form from "react-jsonschema-form";

const schema = {
  title: "Teste",
  type: "object",
  required: ["email", "senha"],
  properties: {
    email: {type: "string", title: "Email", default: "Digite"},
    senha: {type: "string", title: "Senha", default: "Digite"},
    novaconta: {type: "boolean", title: "Não cadastrado", default: false},
  }
};

//const log = (type) => console.log.bind(console, type);
const formData = {
  email: "",
  senha: "",
  novaconta: true
}

class App extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({formData}) {
    alert(JSON.stringify(formData));
  }

  render(){
    return(
      <div display={{width: "100%", height: "100%"}} style={{backgroundImage: "url('https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg?w=740&t=st=1679356716~exp=1679357316~hmac=55c0ddbf710efa21d2f3ad9212a585081efd480a9844f79ae8fbe5d17529d6b5')", width: '800px', margin: '0 auto'}}>
        <Form
          schema={schema}
          formData={formData}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

/*function App() {
  return (
    <Form schema = {schema}
      onChange={log("alterado")}
      onSubmit={log("enviado")}
      onError={log("erro")}
    />
  );
}*/



export default App;
