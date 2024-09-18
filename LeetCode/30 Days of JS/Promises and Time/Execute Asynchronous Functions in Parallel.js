/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;

        if (functions.length === 0) {
            resolve([]);
            return;
        }
        functions.forEach((func, index) => {
            func().then((result) => {
                results[index] = result;
                completedPromises++;
                if (completedPromises === functions.length) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */