# Backend structure

A small Node.js app for reviewing how a backend is split into modules. Data stays in memory. There is no Express, no database, and no package to install.

The project uses ES modules because `package.json` sets `"type": "module"`.

## Files

```text
backend-structure/
├── package.json
├── .gitignore
├── README.md
└── src/
    ├── app.js
    └── modules/
        ├── users/
        │   └── users.js
        └── orders/
            └── orders.js
```

- `src/app.js` asks for a user number and prints their name and orders.
- `src/modules/users/users.js` keeps the users and can look one up by id.
- `src/modules/orders/orders.js` keeps the orders and attaches a user name to each one.
- `package.json` marks the project as ESM and defines `npm run dev`.
- `.gitignore` skips `node_modules/`, `.env`, and log files.

## Run

From this folder:

```text
npm run dev
```

## Example interaction

```text
Enter a user number: 1

User: Lina
Orders:
- 101: Notebook
```

Enter `2` to see Omar and his Pencil order. Unknown user numbers and invalid input produce a message. The app exits after one lookup.

## Instructor notes

The app runs correctly. The review target is the boundary between the two modules.

`src/modules/users/users.js` exports `findUserById`, but nothing calls it. It also exports the raw `users` array. `src/modules/orders/orders.js` imports that array and searches it with `.find`.

Ask students what they would change. The improvement is:

- orders should call `findUserById(order.userId)`
- the `users` array should stay inside the users module and should not be exported

Orders then depend on a function, not on how the users list is stored. Do not add Express, a database, or another package. This exercise is only about that module boundary.
