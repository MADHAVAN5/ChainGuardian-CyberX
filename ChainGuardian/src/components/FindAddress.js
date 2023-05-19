const Find = () => {
    return (
        <div className='w-full pt-4 bg-gray-bg1'>
            <div className='w-full rounded-lg shadow-default'>
                <form className="grid grid-cols-10 gap-4">
                    <div className="col-span-8">
                        <input
                            type='text'
                            className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='chain_address'
                            placeholder='enter chain address'
                        />
                    </div>
                    <div className="col-span-2">
                        <button className='w-full bg-indigo-600 p-2 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark'>Find</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Find;