export type MongooseDocument = {
  _id: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export type PaginatedMongooseDocument<T> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  page?: number;
  totalPages: number;
  pagingCounter?: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number | null;
  nextPage?: number | null;
};
