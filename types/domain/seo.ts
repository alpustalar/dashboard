import { MongooseDocument } from "@/types/transport/mongoose";

export interface SEO extends MongooseDocument {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  og?: {
    title?: string;
    description?: string;
    url?: string;
  };
  twitter?: {
    title?: string;
    description?: string;
    card?: string;
  };
}
