import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("title", result.data.title);
            setValue("price", result.data.price);
            setValue("category", result.data.category);
            setValue("image", result.data.image);
            setValue("description", result.data.description);
          
            
        })
    }, [id]);

    const onSubmit = data => {
        axios.put(`https://fakestoreapi.com/products/${id}`, data).then(result => {
            props.history.push("/");
        })
    };

    return(

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Post</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                            <label>ID</label>
                            <input type="text" readOnly className="form-control" name="id" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label>first_name</label>
                            <input type="text" className="form-control" name="title" ref={register({ required: true })} />
                            
                        </div>
                        <div className="form-group">
                            <label>last_name</label>
                            <input type="text" className="form-control" name="price" ref={register({ required: true })} />
                        
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input type="text" className="form-control" name="category" ref={register({ required: true })} />
                        
                        </div>
                        <div className="form-group">
                            <label>city</label>
                            <input type="text" className="form-control" name="image" ref={register({ required: true })} />
                            
                        </div>
                        <div className="form-group">
                            <label>phone</label>
                            <input type="text" className="form-control" name="description" ref={register({ required: true })} />
                            
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}
export default EditPost;