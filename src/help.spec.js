import { help } from "./help.js"
import { test } from "fvb"

test("help menu", t => {
  t.ok(help.length > 0, "text has a length greater then zero")
  t.plan(1)
})
