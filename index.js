const Web3 = require('web3')

const w = new Web3(web3.currentProvider)

w.eth.getBlock('latest')
.then((block) => {
  console.log('block returned!', block)
})
.catch((reason) => {
  console.error('failed to get block', reason)
})

