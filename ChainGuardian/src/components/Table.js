import './tabels.css'

const Table = ({data}) => {
  return (
    <div>
      {/* <th scope="col" className=" px-6 py-4">Id</th>
                    <th scope="col" className=" px-6 py-4">Block_id</th>
                    <th scope="col" className=" px-6 py-4">Size | Weight</th>
                    <th scope="col" className=" px-6 py-4">Hash</th>
                    <th scope="col" className=" px-6 py-4">Time</th>
                    <th scope="col" className=" px-6 py-4">Total_USD</th>
                    <th scope="col" className=" px-6 py-4">Total_fee</th> */}
      <div className="table-main flex rounded-md">
        <div>
        <h1>Transaction Inputs</h1>
        <div className="overflow-x-auto sm:-mx-4 lg:-mx-6">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-6">
            <div className="overflow-hidden">
              <table className="rounded-md text-center text-sm font-light">
                <thead
                  className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    <th scope="col" className=" px-6 py-4">Id</th>
                    <th scope="col" className=" px-6 py-4">Block Id</th>
                    <th scope="col" className=" px-6 py-4">Date Time</th>
                    <th scope="col" className=" px-6 py-4">USD</th>
                    <th scope="col" className=" px-6 py-4">Sender Address</th>
                    <th scope="col" className=" px-6 py-4">Transferred</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                {data && data.transaction.inputs.map(element => {
                   return (<tr key={index} className="border-b dark:border-neutral-500">
                   <td className="whitespace-nowrap  px-6 py-4 font-medium">{element.transaction.id}</td>
                   <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                   <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                   <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                   <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                   <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                   </tr>)
                })
               }
                </tbody>
              </table>
            </div>
          </div>

        </div> 
        </div>
        <div>
        <h1 styles={{color:'#fff'}}>Transaction Outputs</h1>
        <div className="overflow-x-auto sm:-mx-4 lg:-mx-6">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-6">
            <div className="overflow-hidden">
              <table className="rounded-md text-center text-sm font-light">
                <thead
                  className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                  <th scope="col" className=" px-6 py-4">Id</th> 
                    <th scope="col" className=" px-6 py-4">Block Id</th>
                    <th scope="col" className=" px-6 py-4">Date Time</th>
                    <th scope="col" className=" px-6 py-4">USD</th>
                    <th scope="col" className=" px-6 py-4">Sender Address</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                    <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                    <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap  px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        

        </div>
      </div>
    </div>
  );
}

export default Table;