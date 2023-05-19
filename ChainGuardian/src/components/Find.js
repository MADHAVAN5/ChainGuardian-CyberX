const Find = () => {
    return (
        <div className='w-full pt-4 bg-gray-bg1'>
            <div className='w-full rounded-lg shadow-default'>
                <form className="grid grid-cols-10 gap-4">
                    <div className="grid grid-cols-8 gap-4 col-span-8">
                        <input
                            type='text'
                            className={`w-full col-span-6 p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='chain_address'
                            placeholder='enter chain address'
                        />
                        <select data-te-select-init className="w-full col-span-2 p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                            <option value="6">Six</option>
                            <option value="7">Seven</option>
                            <option value="8">Eight</option>
                        </select>
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