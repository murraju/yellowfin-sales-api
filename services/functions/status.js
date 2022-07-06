export const handler = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, MindPool Sales! Your request was received at ${event.requestContext.time}.`,
  };
};
