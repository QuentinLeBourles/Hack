import React from 'react'
import Axios from 'axios';
/* import urlPhp from '../csv2json.php' */

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onFormSubmit(e){

    e.preventDefault();

    let formData = new FormData();
        formData.append('file', this.state.file);

    const config = {
        headers: { 
            'Content-Type': 'multipart/form-data',},
        body: formData,
       };

   /*  const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.post),
    }; */
    
    const url = 'localhost:8000/src/csv2json.php';

    Axios.post(url, this.state.file, config)
   /*  fetch(url, config) */
    .then(res => {
        console.log(res)
        res.text()})
    .then(res => {
    if (res.error) {
        console.log(res.error);
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
  
  render() {
    return (
      <form /* action="../csv2json.php" method="post" encType="multipart/form-data" */ onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default FileUpload;