async function delayedResults() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operacja wykonana pomyślnie");
        }, 500);
    });
}

(async function execAsyncFunc() {
    const result = await delayedResults();
    console.log(result);
})();