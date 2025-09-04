import React from 'react'

export default function NvhFuncomp(nvhProps) {
  return (
    <div className='alert alert-danger'>
        <h2>Function Component Demo</h2>
        <h3>Welcome to, {nvhProps.name} - {nvhProps.age}</h3>
    </div>
  )
}