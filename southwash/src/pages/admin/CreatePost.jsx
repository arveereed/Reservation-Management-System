import Image from 'react-bootstrap/Image';
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import inimg from '../../assets/inimg.png'
import deleteImg from '../../assets/close.png'
import { useState } from 'react';

function CreatePost() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: []
  });

  const createPost = (formData) => {
    
  }

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  // Handle file removal
  const handleFileRemove = (index) => {
    const updatedFiles = [...formData.images];
    updatedFiles.splice(index, 1);
    setFormData({ ...formData, images: updatedFiles });
  };

  // Render file list
  const renderFileList = () => {
    return formData.images.map((file, index) => {
      let size = file.size;
      let suffix = "bytes";

      if (size >= 1024 && size < 1024000) {
        suffix = "KB";
        size = Math.round((size / 1024) * 100) / 100;
      } else if (size >= 1024000) {
        suffix = "MB";
        size = Math.round((size / 1024000) * 100) / 100;
      }

      return (
        <li key={index}>
          {file.name}{" "}
          <span className="file-size">
            {size} {suffix}
          </span>
          <i
            className="material-icons md-48"
            style={{ cursor: "pointer" }}
            onClick={() => handleFileRemove(index)}
          >
            <Image 
              className='h-[20px]'
              src={deleteImg}
            />
          </i>
        </li>
      );
    });
  };

  return (
    <div className="font-['Poppins'] bg-[#D0F6FF] p-[30px] w-[570px] z-40 mr-[278px] rounded-lg">
      <p>Create Post</p>
      <div className='flex w-1/2 items-center space-x-4 mt-[40px]'>
        <small>Sharing to</small>
        <Image 
          src={fb}
        />
        <div className='h-[40px] w-[40px] bg-white grid place-content-center rounded-full'>
          <Image 
            src={ig}
          />
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className='bg-white border-none outline-none shadow-none rounded-md mt-4 h-[40px] p-4 w-full placeholder:italic'
          placeholder='Title'
          type="text" 
        />
        <textarea 
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder='What would you like to post?' 
          className=' outline-none p-4 placeholder:italic w-full mb-2 h-[326.4px] mt-2 rounded-md'
        >
        </textarea>
        <div className='h-[40px] w-full bg-white flex justify-between px-3 py-2 rounded-lg'>
          <label className='label-input' htmlFor='upload'>
            <input 
              type="file" 
              id="upload" 
              multiple 
              onChange={handleFileChange}
            />
            <Image
              className='h-full w-full'
              src={inimg}
            />
          </label>
          
          <div className='text-gray-400'>
            <small>
              Today {new Date().toLocaleTimeString()}
            </small>
          </div>
        </div>
        {formData.images.length > 0 && (
          <div className="files">
            <ul>{renderFileList()}</ul>
          </div>
        )}

        <div className='grid place-content-end mt-3'>
          <button onClick={() => createPost(formData)} className='bg-[#0A58A2] text-white text-[12px] px-7 py-2 rounded-lg'>Publish</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost