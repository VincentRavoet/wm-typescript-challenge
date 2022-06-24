# Recipes overview page

## User story

```
As a user
I can see all the cocktails
```

## ✅ Acceptance criteria

- I can browse all cocktails
- **Eight items** are shown on each page
- The items are shown in a responsive grid (with four cards on each row on desktop)
- I can share the page URL and see the same result
  - `/recipes` = page 1
  - `/recipes/2` = page 2
  - `/recipes/3` = page 3

## 📝 Notes

- The mock api for this endpoint (`/api/recipes/all`) `limit` and `offset` param. These params should work as described here:
  - `limit`: allows you to limit the number of results returned
  - `offset` allows you to omit a specified number of rows before the beginning of the result set
  - Use there parameters in `fetch` made from the client.
- The client side code is responsible for the pagination.
