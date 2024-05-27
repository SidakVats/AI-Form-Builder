import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://AIFormBuilder_owner:7qI1ewupdjUN@ep-restless-glitter-a1dk1ee9.ap-southeast-1.aws.neon.tech/AIFormBuilder?sslmode=require",
  }
});