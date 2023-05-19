const TransactionSection = ({data}) => {
    return ( 
        <>
            <div>
                  <label className='text-white'>Address :{data.address}</label>
                  <br />
                  <label className='text-white'>balanceUSD : {data.balanceUSD}</label>
                  <br />

                  <label className='text-white'>balanceETH : {data.balanceETH}</label>
                  <br />

                  <label className='text-white'>sendUSD : {data.sendUSD}</label>
                  <br />
                  <label className='text-white'>receivedUSD : {data.receivedUSD}</label>

                  <br />
                  <label className='text-white'>lastReceived : {data.lastReceived}</label>
                  <br />

                  <label className='text-white'>firstSend : {data.firstSend}</label>
                  <br />
                  <label className='text-white'>lastSend : {data.lastSend}</label>
                  <br />

                  <label className='text-white'>transactionCount : {data.transactionCount}</label>
                  {data.transactions.map(function (value, index, array) {

                            return <label className='text-white'>transaction {index} : {value}</label>
                        })
                        }
            </div>
        </>
     );
}
 
export default TransactionSection;