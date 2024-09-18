/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const Throwerror=(errorState)=>{
        throw new Error(errorState)
    }

    return{
        toBe:(val2)=> val2===val || Throwerror('Not Equal'),
        notToBe:(val2)=>val2 !==val || Throwerror('Equal')
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */