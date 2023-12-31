export default eventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    return {
        hello: "world from post",
    };
});
