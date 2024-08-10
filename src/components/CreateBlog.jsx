import React,{useState} from 'react'
import './CreateBlog.css'
const CreateBlog = () => {
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Blog created:', { title, content });
        };
  return (
    <div>
      <div className='box'>
    <div className='createblog'>
      <h2>Create Blog</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title :</label><br></br>
          <input className='title'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div><br></br>
        <div>
          <label>Content :</label><br></br>
          <input className='content'
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div><br></br>
        <button className='createbutton' type="submit">Create</button>
      </form>
    </div>
    </div>
  </div>
  )
}

export default CreateBlog
