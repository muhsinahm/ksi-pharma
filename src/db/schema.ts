import { pgTable, text, integer, boolean, varchar } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  image: text("image").notNull(),
  inStock: boolean("in_stock").default(true).notNull(),
});

export type Product = typeof products.$inferSelect;
