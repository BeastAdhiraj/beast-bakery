"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {

  const [form, setform] = useState({title:"",desc:"",price:"",weight:"",availableQty:"",category:""})
const [img, setimg] = useState("")


const router = useRouter();

  const hdl = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
      }

  const seti = async(e)=>{
    if(e.target.name == "img"){
      let reader = new FileReader();
      if (e.target.files[0] != undefined) {
        reader.readAsDataURL(e.target.files?.[0])
        reader.onload = async()=>{
          setimg(reader.result)
        }
        reader.onerror = ()=>{
          console.log(error)
        }
      }
    }
  }

  const uac = async(e)=>{
    e.preventDefault()
    const data = {...form , img}
    console.log(data)
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_LINK}/api/ac`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
    if(result.success){
      console.log(result)
      toast.success('Cake Add!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        });
      setform({title:"",slug:"",desc:"",price:"",weight:"",availableQty:"",category:""})
      setimg("")
      router.push(`/`)
    }
    else{
      router.push('/')
    }
  }

  return (
    <>
    <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 dark:text-white mt-6">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-white text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6"  method="POST" onSubmit={uac}>
      <div>
        <label htmlFor="title" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">Name</label>
        <div className="mt-2">
          <input id="title"  onChange={hdl}  name="title" type="title" autoComplete="title" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="desc" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">About</label>
         
        </div>
        <div className="mt-2 mb-2">
          <input id="desc" onChange={hdl} name="desc" type="desc" autoComplete="desc" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="availableQty" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">Qty</label>
         
        </div>
        <div className="mt-2 mb-2">
          <input id="availableQty" onChange={hdl} name="availableQty" type="availableQty" autoComplete="availableQty" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="category" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">Category</label>
         
        </div>
        <div className="mt-2 mb-2">
          <input id="category" onChange={hdl} name="category" type="category" autoComplete="category" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="price" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">Price</label>
         
        </div>
        <div className="mt-2 mb-2">
          <input id="price" onChange={hdl} name="price" type="price" autoComplete="price" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="Weight" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">Weight</label>
         
        </div>
        <div className="mt-2 mb-2">
          <input id="weight" onChange={hdl} name="weight" type="weight" autoComplete="weight" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"/>
        </div>
      </div>

      

      {!img?<label htmlFor="dropzone-file"  className= "mt-2 mb-2 object-center w-auto h-auto flex-col items-center justify-center cursor-pointer bg-gray-50 dark:hover:bg-gray-800  hover:bg-gray-100  ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 border-2 border-white">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG and JPEG </p>
        </div>
        <input name="img" onChange={seti}   id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpg, image/jpeg" />
    </label>
: <label htmlFor="dropzone-file"  className= "cursor-pointer">
<div className="flex flex-col items-center justify-center pt-5 pb-6">
<img src={img} alt=""  className=' object-center w-auto h-auto '/>
</div> 
<input name="img" onChange={seti}   id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpg, image/jpeg" />
</label>}



      <div>
        <button type="submit" onClick={uac} className="flex w-full justify-center mb-4 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Cake 🎂</button>
      </div>
    </form>

  
   


  </div>
</div>
    </>
  )
}

export default Page
