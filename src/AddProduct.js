import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your logic to save the product
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2>Add Product</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`form-control ${
                      errors.name ? 'is-invalid' : ''
                    }`}
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      Product name is required.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    className={`form-control ${
                      errors.description ? 'is-invalid' : ''
                    }`}
                    {...register('description', { required: true })}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">
                      Product description is required.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category:
                  </label>
                  <select
                    id="category"
                    className={`form-control ${
                      errors.category ? 'is-invalid' : ''
                    }`}
                    {...register('category', { required: true })}
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home</option>
                  </select>
                  {errors.category && (
                    <div className="invalid-feedback">
                      Product category is required.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className={`form-control ${
                      errors.quantity ? 'is-invalid' : ''
                    }`}
                    {...register('quantity', { required: true, min: 0 })}
                  />
                  {errors.quantity && (
                    <div className="invalid-feedback">
                      Product quantity is required and must be a positive number.
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    className={`form-control ${
                      errors.price ? 'is-invalid' : ''
                    }`}
                    {...register('price', { required: true, min: 0 })}
                  />
                  {errors.price && (
                    <div className="invalid-feedback">
                      Product price is required and must be a positive number.
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;