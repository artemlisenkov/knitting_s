import {pgEnum, pgTable, text, boolean, timestamp, integer, index} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").notNull(),
    image: text("image"),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true }).notNull(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true }).notNull(),
});

export const session = pgTable("session", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade"}),
    token: text("token").notNull().unique(),
    expiresAt: timestamp("expires_at").notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true }).notNull(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true }).notNull(),
});

export const account = pgTable("account", {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade"}),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", { precision: 6, withTimezone: true }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { precision: 6, withTimezone: true }),
    scope: text("scope"),
    idToken: text("id_token"),
    password: text("password"),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true }).notNull(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true }).notNull(),
});

export const verification = pgTable("verification", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at", { precision: 6, withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true }).notNull(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true }).notNull(),
});

export const catalogCategory = pgEnum("catalog_category", ["cardigans", "tops"]);

export const catalogProduct = pgTable("catalog_product", {
    id: text("id").primaryKey(),
    category: catalogCategory("category").notNull(),
    title: text("title"),
    description: text("description"),
    pricePln: integer("price_pln"),
    imagePath: text("image_path").notNull(),
    imageAlt: text("image_alt"),
    sortOrder: integer("sort_order").notNull().default(0),
    isPublished: boolean("is_published").notNull().default(true),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true }).notNull().defaultNow(),
}, (table) => [
    index("catalog_product_category_sort_idx").on(table.category, table.sortOrder),
    index("catalog_product_published_idx").on(table.isPublished),
]);

export const catalogProductImage = pgTable("catalog_product_image", {
    id: text("id").primaryKey(),
    productId: text("product_id").notNull().references(() => catalogProduct.id, { onDelete: "cascade" }),
    imagePath: text("image_path").notNull(),
    imageAlt: text("image_alt"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { precision: 6, withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { precision: 6, withTimezone: true }).notNull().defaultNow(),
}, (table) => [
    index("catalog_product_image_product_sort_idx").on(table.productId, table.sortOrder),
]);
