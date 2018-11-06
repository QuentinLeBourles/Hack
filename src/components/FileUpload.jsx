import React from 'react'

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
    let formData = new FormData();
        formData.append('file', this.state.file);
    console.log(formData);

    const config = {
        method: 'POST',
        headers: {"Authorization": localStorage.getItem("token")},
        body: formData
       };
       
   /*  const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.post),
    }; */
    
    const url = "";

    e.preventDefault();
    
    fetch(url, config)
    .then(res => {
        console.log(res)
        res.json()})
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
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default FileUpload;