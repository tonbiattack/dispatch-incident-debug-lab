export const customerQueryKeys = {
  search: (keyword: string) => ['shipments', 'search', keyword] as const,
  detail: (customerId: string) => ['shipments', 'detail', customerId] as const,
  inventory: (customerId: string) => ['inventory'] as const
}
