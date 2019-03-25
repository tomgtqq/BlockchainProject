/**
 * Importing BlockExplorer API to search Block Data
 */
const be = require('blockexplorer');

/**
 *  Explore Block Data function
 * @param {*} index
 *
 * Start by requesting the hash then request the block and use console.log()
 *
 */
 function getBlock(index) {
   	//Add your code here
   	// Start by requesting the hash
   	// Then, request the block and use console.log.
     new Promise(function(resolve){

               var hash = be.blockIndex(index);
               resolve(hash);
             }).then(function(hash){
               var hashAux = JSON.parse(hash).blockHash;
               return hashAux;
             })
             .then(function(hashAux){
               return be.block(hashAux);
             })
             .then(function(block){
               console.log(block);
             });
}


/**
 * Function to execute the `getBlock(index)` function
 * Nothing to implement here.
 */

(function theLoop (i) {
	setTimeout(function () {
        getBlock(i);
        // .then(function(hash){
        //   var hashAux = JSON.parse(hash).blockHash;
        //   return hashAux;
        // })
        // .then(function(hashAux){
        //   return be.block(hashAux);
        // })
        // .then(function(block){
        //   console.log(block);
        // });
        i++;
		if (i < 3) theLoop(i);
	}, 3000);
  })(0);
