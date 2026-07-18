CREATE TABLE "products" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"price" integer NOT NULL,
	"category" varchar(255) NOT NULL,
	"image" text NOT NULL,
	"in_stock" boolean DEFAULT true NOT NULL
);
