
# Notes-App with Material UI

The app allows users to look up notes and create new notes, which are then saved to a local JSON file.

## Installation
1. Clone the repository to your local machine.
```$ git clone git@github.com:mgzawlinnaing/react-note-app.git```

2. Navigate to the project directory.
```$ cd react-note-app```

3. Install the dependencies using pnpm (if you would like to npm or yarn, feel free to use, however, remove the `package-lock.json` just in case you run into errors).
```$ pnpm install```

## Usage

1. Start the JSON server.
```$ json-server --watch db.json --port 8000```

2. Start the program with `vite`
```$ pnpm dev```

3. Open your browser and visit `http://localhost:5173` to access the app.

### Features

- Note Lookup: Users can search for existing notes based on various criteria.

- Note Creation: Users can create new notes by filling out a form and saving them.

- Local JSON Storage: Notes are saved to a local JSON file using json-server.

- Material UI: The app utilizes the Material UI library for a visually appealing and responsive user-interface.

- React Router: The app uses react-router-dom for handling routing and navigation within the application.

- Date and Time Handling: The app utilizes the date-fns library for handling date and time manipulation.

- Masonry Layout: The app uses react-masonry-css to create a masonry layout for displaying notes.

### File Structure

```
react-note-app/
  |
  ├──data/
  |   ├── db.json
  |
  ├── src/
  │   ├── components/         # Contains reusable components
  │   ├── pages/              # Contains individual pages of the app       # Contains services for interacting with the JSON server
  │   ├── data/               # Contains utility functions
  │   ├── App.js              # Main component that handles routing
  │   └── index.js            # Entry point of the app
  ├── db.json                 # Local JSON file for storing notes
  ├── package.json            # Project dependencies and scripts
  └── README.md               # This file, providing project information

```

### Acknowledgements
- [React](https://react.dev)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com)
- [date-fns](https://date-fns.org/)
- [json-server](https://github.com/typicode/json-server)
- [react-masonry-css](https://www.npmjs.com/package/react-masonry-css)