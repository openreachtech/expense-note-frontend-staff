export const HEADER_KEY = {
  ACCESS_TOKEN: 'x-renchan-access-token',
}

export const STORAGE_KEY = {
  FURO_ENV: 'furoEnv',

  ACCESS_TOKEN: 'access_token',
}

/**
 * How many rows a page of a paginated read asks for.
 *
 * `EXPENSES_LIMIT` is the page size of the entries table on `/expenses`, and it is declared here
 * rather than beside either of its two readers — the `expenses` query builds `PaginationInput.limit`
 * from it, and `FuroPagination`'s parcel reports the page size from the same number — so the two can
 * never disagree about how big a page is
 * (`ai/contexts/uiux-context-expense-entry.md` section 4.5).
 *
 * Twenty, which is `FuroPagination`'s own default and a comfortable desk-browser page.
 *
 * **The backend's maximum of 100 is deliberately not restated here.** Section 8 rule 26 caps a
 * request at `PAGINATION.MAXIMUM_LIMIT` rows, and a second copy of that number in this repository is
 * exactly what the rule warns about: a frontend that never asks for more than its own twenty cannot
 * reach the cap, so the cap belongs on the side that enforces it.
 */
export const PAGINATION = {
  EXPENSES_LIMIT: 20,
}
