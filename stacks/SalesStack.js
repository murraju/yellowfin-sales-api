import { Api } from "@serverless-stack/resources";

export function Sales({ stack }) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "functions/status.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
