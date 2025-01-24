export const help = `Usage: tx [options] command [account] ...

  options
  -------
  -f, --file PATH       PATH to ledger, default is "ledger.txt"
  -c, --current         don't include entries with future dates
  -b, --begin DATE      set begin DATE in "YYYY/MM/DD" format
  -e, --end DATE        set end DATE in "YYYY/MM/DD" format
  -m, --marked          only process marked "*" transactions
  -M, --no-marked       only process unmarked transactions
  -p  --precision N     set decimal precision to N places, default is 2
  -s, --sort BY         sort BY "date" (default) or "none" (unsorted)
  -S, --subtotal        only show the sub-totals for balance command
  -E, --empty           include accounts with zero balance
  -w, --wide            print 132 columns wide for register
  -C, --no-color        print without ANSI escape sequences
  -I, --no-ignorecase   don't ignore case when limiting by accounts
  -v, --version         show version
  -h, --help            show this help message

  commands
  --------
  bal, balance          print balance sheet
  reg, register         print transaction register
  fmt, print            print formatted ledger

  accounts
  --------
  Pass as many strings as needed to include only the accounts that
  match any of the given strings. Each string is matched against each
  account as a case insensitive regular expression.

  examples
  --------
  # Trial Balance (list of all accounts and their balances)
  tx bal

  # Balance Sheet (net worth)
  tx bal ^assets ^liabilities

  # Income Statement (cash flow)
  tx bal ^income ^expenses

  # Checking Account Register
  tx reg ^assets:checking
`
