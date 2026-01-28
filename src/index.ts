import { serve } from "bun";
import index from "./index.html";
import { addDateHandler } from "./controller/addDates";
import { getDateHandler } from "./controller/getDates";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

	"/api/dates": {
		async POST(req) {
			return addDateHandler(req);
		},
		async GET(req) {
			return getDateHandler(req);
		}
	},

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
