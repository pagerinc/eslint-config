'use strict';

const asyncFn = async () => {

    await Promise.resolve();
};

// Allow the definition of the function to be a promise,
// even when the return is not reached
const testAsyncFn = async (throwVar) => {

    if (throwVar) {
        // Returns Reject instead of throwing an error
        throw new Error('Here\'s an error');
    }

    // Returns Promise
    return asyncFn();
};

testAsyncFn();
