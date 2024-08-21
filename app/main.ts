const port = 4200;

const handler = (req: Request): Response => {
  console.log(`${req.method} ${req.url}`);
  console.log(req.headers.get("x-ddn-build-id"));
  return new Response(req.url, {
    status: 200,
  });
};

console.log(`HTTP server running. Access it at: http://localhost:4200/`);
Deno.serve({ port }, handler);
