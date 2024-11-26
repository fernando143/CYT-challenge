# CYT Challenge

It's a simple TODO list built from scratch using Vite and React. No third-party libraries were used, except for Icon Moon to get two icons.

There are some improvements that can be made:

- **Use barrel files for imports:**

  ```javascript
  // Current
  import { Text } from "../text/Text.component";

  // Improved
  import { Text } from "../text";
  ```

- **Implement a snackbar or toast to enhance UX/UI**
- **Handle errors (not implemented as it was not considered necessary for this project)**

## Run the project

To run the project, follow these steps:

```bash
npm install
npm run dev
```
