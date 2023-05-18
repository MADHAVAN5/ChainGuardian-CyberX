import React from 'react'

function Forgot() {
  return (
    <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-indigo-600 rounded-lg shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-white mt-4 mb-12 text-center'>
                    Forgot Password 🔐
                </h1>

                <form>
                    <div>
                        <label htmlFor='email' className='text-white'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-indigo-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Forgot
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
  )
}

export default Forgot
