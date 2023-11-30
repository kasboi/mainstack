import { Filter } from "../zustand/FilterModal"
import { Transactions } from "../zustand/store"

// Converts a date string in the format YYYY-MM-DD to a formatted date string in the format Month DD, YYYY
export function formatDate(inputDate: string): string {
    const dateParts: number[] = inputDate.split("-").map(Number)
    const year: number = dateParts[0]
    const month: number = dateParts[1]
    const day: number = dateParts[2]

    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
    }
    const formattedDate: string = new Intl.DateTimeFormat(
        "en-US",
        options
    ).format(new Date(year, month - 1, day))

    return formattedDate
}

// Returns the current date in the format Month DD, YYYY
export function getCurrentDateFormatted(): string {
    const currentDate = new Date()

    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
    }
    const formattedDate: string = new Intl.DateTimeFormat(
        "en-US",
        options
    ).format(currentDate)

    return formattedDate
}

export const setDateRange = (
    type: string,
    date: string,
    fromFn: (arg: string) => void,
    toFn: (arg: string) => void
) => {
    type === "FROM" ? fromFn(date) : toFn(date)
}

// APPLYING FILTERS --- // FILTERED DATA
export const applyFilters = (filter: Filter, transactions: Transactions[], setterFn: (transactions: Transactions[]) => void) => {
    const activeFilters = Object.values(filter)?.filter(val => val?.toString()).length
    // setActiveFilters(activeFilters)
    if (transactions?.length > 0) {
      if (activeFilters > 0) {
        let tempFilteredTransactions = [...transactions]
        // FILTER TRANSACTIONS
        if (
          filter?.transactionType?.length > 0 ||
          filter?.transactionStatus?.length > 0 ||
          filter?.fromDate ||
          filter?.toDate
        ) {
          tempFilteredTransactions = transactions?.filter(trx => {
            const datetime = new Date(trx.date).getTime()

            return (filter?.transactionType?.length > 0 ? filter?.transactionType.includes(trx.type) : true) &&
              (filter?.transactionStatus?.length > 0 ? filter?.transactionStatus.includes(trx.status) : true) &&
              (filter?.toDate ? new Date(filter?.toDate)?.getTime() >= datetime : true) &&
              (filter?.fromDate ? new Date(filter?.fromDate)?.getTime() <= datetime : true)
          })
        }

        setterFn(tempFilteredTransactions)
      } else {
        setterFn(transactions)
      }
    }
}