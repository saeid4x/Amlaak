import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import keys from '../../../config/keys';

export default class Basic extends Component {
  constructor() {
    super();
   
  }
   onDrop = (files) => {
    this.setState({files})
  };
  
   state = {
    files: [],
    name:'saeid',
    family:'imani',
    age:28
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    let config={
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }
    var fd=new FormData()
    this.state.files.map((file)=>{
      fd.append('file',file)

    })
    let myData=this.state.name

    fd.append('state',this.state)
    fd.append('family',this.state.family)
    fd.append('age',this.state.age)
 
    console.log('fd=',fd)
    console.log('files=',this.state.files)

     
    // Axios.post(keys.backendUrl+'/api/users/getImages',{name:this.state.name}).then((data)=>{

    // });
    Axios.post(keys.backendUrl+'/api/users/getImages',fd,config)
    .then((data)=>{
      // image uploades     
    })
   
  }
  componentDidMount(){

  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <form onSubmit={this.handleSubmit}>
      <Dropzone onDrop={this.onDrop} >
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()}  name="avatar"/>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    <div className="imagesPreview"> {this.state.files? this.state.files.map((image)=><img className="imagePreview" src={URL.createObjectURL(image)}/>):null}</div> 
      <input type="submit" value="Send File"/>
      </form>
    );
  }
}

 