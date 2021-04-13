import React from 'react'
import './CreatePost.css';

const CreatePost = () => {
    return (
        <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-10 rounded shadow-lg  p-5 mt-4">
                <h2 className='pb-2 text-center'>Create post</h2>
                <form action="" method="POST">
                    <div className="form-group has-error">
                        <label className="form_text"  for="slug">Slug <span className="require">*</span> </label>
                        <input type="text" className="form-control" name="slug" />
                    </div>
                    
                    <div className="form-group">
                        <label className="form_text" for="title">Title <span className="require">*</span></label>
                        <input type="text" className="form-control" name="title" style={{background: 'rgba(255,255,255,0.4)'}}/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form_text"  for="description">Description</label>
                        <textarea rows="5" className="form-control" name="description" ></textarea>
                    </div>
                    
                    <div className="form-group">
                        <p className="form_text"><span className="form_text" className="require">*</span> - required fields</p>
                    </div>
                    
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary w-25 ">
                            Create
                        </button>
                        <button className="btn btn-outline-danger mx-1 w-25 ">
                            Cancel
                        </button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    </div>
    )
}

export default CreatePost
