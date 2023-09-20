# transactions

> double-entry bookkeeping on the command line

## features

There are currently no features implemented, but will have:

- plain text file format
- multi-currency support
- an interactive web UI
- file attachments (for images, receipts, etc in the web UI)
- optional validation

## syntax

This is the preliminary syntax design for all of the features that I personally
need. It is subject to change while the parser is still in development.

```txt
; Accounts are pre-declared in the first transaction to help prevent typos
; and to initialize equity (especially for Asset and Liability accounts).

2023/01/01 Opening Balances
  0.00000074 BTC :: Assets:Coinbase
     420.69 :: Assets:Checking
     100.00 :: Assets:Savings
       0.00 :: Expenses:Food:Groceries
       0.00 :: Expenses:Food:Dining
       0.00 :: Expenses:Utilities:Electric
       0.00 :: Expenses:Utilities:Internet
       0.00 :: Expenses:Utilities:Water
       0.00 :: Expenses:Phone
       0.00 :: Income:WebDev
  -12813.54 :: Liabilities:StudentLoans

2023/10/01 Buy groceries from Oleson's
  50.00 :: Assets:Checking -> Expenses:Food:Groceries

2023/10/10 Transfer Bitcoin to Checking
  0.00000074 BTC [27167.66] :: Assets:Coinbase -> Assets:Checking
  
; Comments begin with a `;` on their own line and are treated as a
; transaction (with no date, summary, or transactions). Consecutive
; comments are concatenated into a single note.

; If "summary" or "from" starts with an asterisk (*) the transaction or line is
; --marked or --uncleared. If they begin with an exclaimation (!) then it is
; --flagged or --pending.

2023/10/15 October Utilities
  ; An example with optional validation, and this is an attached
  ; note made up of consecutive comments. Validation uses [error] for
  ; errors and [info] for information and [warn] for warning. Controlled
  ; with --loglevel=info
  50.00 :: Assets:Checking -> Expenses:Utilities:Electric
  54.99 :: * Assets:Checking -> Expenses:Utilities:Internet
  30.47 :: ! Assets:Checking -> Expenses:Utilities:Water
  [error] Unbalanced Transaction :: Assets:Checking == -135.46

2023/10/31 * Summary of transacation
  ; Additional notes/description if needed. Just like git commits they
  ; should be wrapped at 72 characters and the summary above should be
  ; 72 chars or less (including the date).
  90.00 :: Income:WebDev -> Assets:Checking
  10.00 :: Income:WebDev -> Assets:Savings

2023/11/01 Dinner with friends
  15.99 :: Assets:Checking -> Expenses:Food:Dining
  10.00 :: Liabilities:Quinn -> Expenses:Food:Dining

2023/11/02 Computer fans for desktop PC
  99.99 :: Assets:Checking -> Expenses:Computer
  10.01 :: Assets:Cash -> Expenses:Computer
  [info] You went over the budget :: Expenses:Computer <= 100.00
  #assets/pc-fan.jpg "Image"
  #assets/pc-fan-receipt.pdf "Receipt"

2023/11/03 Ensure checking account has enough to pay bills
  ; Use a dollar sign in front of the account to get the total rather
  ; than the current transaction's total.
  [warn] Not enough money for utilities :: $Assets:Checking >= 300.00

2023/07/01 Pay rent for July
2023/08/01 Pay rent for August
2023/09/01 Pay rent for September
2023/10/01 Pay rent for October
  800.00 :: Assets:Checking -> Expenses:Rent

2023/11/01 Pay rent for November (rent increased by 20.00 per month)
2023/12/01 Pay rent for December
  820.00 :: Assets:Checking -> Expenses:Rent

2024/01/01 A dated note with a summary
  ; This is my note. There is no actual transaction here, but that is okay. We
  ; don't always need a transaction, do we? Markdown will probably be supported
  ; in comments/notes and summaries/descriptions.

2024/01/02 Buy Bitcoin
  400.00 [0.00003550 BTC] :: Assets:Checking -> Assets:Coinbase
```
