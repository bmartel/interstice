export interface Pagination {
  hasMore: boolean
  limit: number
  offset: number
}
export const defaultPagination: Pagination = {
  hasMore: true,
  limit: 20,
  offset: 0,
}

export interface PaginatedValue<Value = Record<string, any>> {
  items: Value[]
  pagination?: Pagination
}
