import React from 'react'
import Axios from 'axios';
import './FileUpload.css'
import {Container} from 'reactstrap';
/* import urlPhp from '../csv2json.php' */

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      text:''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.testOnChange = this.testOnChange.bind(this);
    this.testOnFormSubmit = this.testOnFormSubmit.bind(this);
  }
  testOnFormSubmit(e){
    e.preventDefault();      

    const config = {
        headers: { 
            'Access-Control-Allow-Origin' : '*',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            'Content-Type': 'multipart/form-data',
        },
        body: this.state.text,
       };
   /*  const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.post),
    }; */
    
    const url = 'http://0.0.0.0:8000/src/csv2json.php';

    Axios.post(url, config)
   /*  fetch(url, config) */
    .then(res => {
        console.log('la reponse',res)
        return res.json();
    })
    .then(res => {
    if (res.error) {
        console.log('le drame', res.error);
    } else {
        console.log(`Fichier ajouté avec l'ID ${res}!`);
        console.log(res);
    }
    })
    .catch(e => { 
    console.error('erreur : ', e);
    console.log('Erreur lors de l\'envoi du fichier');
    });
  }


  onFormSubmit(e){
    console.log("file", this.state.file)
    e.preventDefault();

    let formData = new FormData();
        formData.append('file', this.state.file);      

    const config = {
        headers: { 
            'Access-Control-Allow-Origin' : '*',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            'Content-Type': 'multipart/form-data',
        },
        body: formData,
       };
   /*  const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.post),
    }; */
    
    const url = 'http://0.0.0.0:8000/src/csv2json.php';

    Axios.post(url, config)
   /*  fetch(url, config) */
    .then(res => {
        console.log('la reponse',res)
        return res.json();
    })
    .then(res => {
    if (res.error) {
        console.log('le drame', res.error);
    } else {
        console.log(`Fichier ajouté avec l'ID ${res}!`);
        console.log(res);
    }
    })
    .catch(e => { 
    console.error('erreur de mes deux', e);
    console.log('Erreur lors de l\'envoi du fichier');
    });
    
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  testOnChange(e){
      this.setState({text: e.target.value})
  }
  
  render() {
    return (
        <Container>
            <form className='mb-5'onSubmit={this.onFormSubmit}>
                <h2>Turn file to chart</h2>
                <hr></hr>
                <input type="file" name='file' onChange={this.onChange} />                
                <button className="buttonInp" type="submit">Upload</button>
            </form>
            <form onSubmit={this.testOnFormSubmit}>
                <textarea type='input' name="test" value={this.state.text} onChange={this.testOnChange} />
                <button className="buttonInp" type="submit">Upload</button>
            </form>            
        </Container>      
   )
  }
}



export default FileUpload;