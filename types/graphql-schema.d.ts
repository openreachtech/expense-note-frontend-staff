export {}

declare global {
  namespace schema.graphql {
    type DateTime = string

    interface Pagination {
      limit: number
      offset: number
      sort?: Sort
      totalRecords: number
    }

    interface PaginationInput {
      limit: number
      offset: number
      sort?: SortInput
    }

    interface Sort {
      key: string
      direction: string
    }

    interface SortInput {
      key: string
      direction: string
    }

    interface SignInInput {
      email: string
      password: string
    }

    interface SignInResult {
      staffMemberId: number
      accessToken: string
    }

    interface RenewAccessTokenResult {
      accessToken: string
    }

    interface SignOutResult {
      signedOut: boolean
    }

    interface SignedInStaffMemberResult {
      staffMemberId: number
      name: string
      email: string
    }

    interface Expense {
      id: number
      spentOn: string
      amount: number
      memo?: string
      status: string
      expenseCategory: ExpenseCategory
      createdAt: DateTime
      updatedAt: DateTime
    }

    interface ExpenseCategory {
      id: number
      name: string
      displayOrder: number
    }

    interface ExpensesInput {
      pagination: PaginationInput
    }

    interface ExpensesResult {
      expenses: Array<Expense>
      pagination: Pagination
    }

    interface ExpenseCategoriesResult {
      expenseCategories: Array<ExpenseCategory>
    }

    interface RecordExpenseInput {
      spentOn: string
      amount: number
      expenseCategoryId: number
      memo?: string
    }

    interface RecordExpenseResult {
      expenseId: number
    }

    interface CorrectExpenseInput {
      expenseId: number
      spentOn: string
      amount: number
      expenseCategoryId: number
      memo?: string
    }

    interface CorrectExpenseResult {
      expenseId: number
    }

    interface RemoveExpenseInput {
      expenseId: number
    }

    interface RemoveExpenseResult {
      expenseId: number
    }

    interface MonthlyExpensesInput {
      year: number
      month: number
    }

    interface MonthlyExpensesResult {
      expenses: Array<Expense>
      totalAmount: number
    }
  }
}
