import { createFileRoute } from "@tanstack/react-router";
import { db } from "@/db";
import { products } from "@/db/schema";

export const Route = createFileRoute("/api/products")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const data = await db.select().from(products);
          return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error: unknown) {
          const errorMessage = error instanceof Error ? error.message : "Failed to fetch products";
          return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
