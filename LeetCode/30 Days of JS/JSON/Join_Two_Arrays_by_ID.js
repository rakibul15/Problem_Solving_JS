/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    let arr= [...arr1,...arr2]
    const newObj={};

    for(let i=0; i<arr.length;i++){
        newObj[arr[i].id]={...newObj[arr[i].id], ...arr[i]}
    }

    return Object.values(newObj)
};