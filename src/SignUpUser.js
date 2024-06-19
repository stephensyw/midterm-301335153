import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2>Sign Up</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className={`form-control ${
                      errors.firstName ? 'is-invalid' : ''
                    }`}
                    {...register('firstName', { required: true })}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">First name is required.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className={`form-control ${
                      errors.lastName ? 'is-invalid' : ''
                    }`}
                    {...register('lastName', { required: true })}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">Last name is required.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name:
                  </label>
                  <input
                    type="text"
                    id="userName"
                    className={`form-control ${
                      errors.userName ? 'is-invalid' : ''
                    }`}
                    {...register('userName', { required: true })}
                  />
                  {errors.userName && (
                    <div className="invalid-feedback">User name is required.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email?.type === 'required' && (
                    <div className="invalid-feedback">Email is required.</div>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <div className="invalid-feedback">Email is not valid.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`}
                    {...register('password', { required: true })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">Password is required.</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className={`form-control ${
                      errors.confirmPassword ? 'is-invalid' : ''
                    }`}
                    {...register('confirmPassword', { required: true })}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">Confirm password is required.</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;