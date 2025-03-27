# React Technical Test - Junior/Trainee

This project is a ReactJS technical test designed for junior and trainee developers. It demonstrates API consumption, state management, the use of useEffect, and component rendering.

## Features

- Fetches a random cat fact from an API.

- Extracts the first three words from the retrieved fact.

- Displays a cat image with the first three words overlaid as text.

- Allows users to refresh the fact and image through a button.

## APIs Used

- Random Cat Fact: catfact.ninja

- Random Cat Image: cataas.com

## How It Works

1. The app fetches a random fact from catfact.ninja.

2. It extracts the first three words from the fact.

3. Using the first word, it requests a custom cat image from cataas.com.

4. The image is displayed with the text overlay.

## Technologies Used

- ReactJS

- Fetch API

- JSX & CSS

## Testing

A basic test is implemented using Playwright to ensure functionality.

## Future Improvements

- Add loading states while fetching data.

- Improve error handling for failed API calls.

## License

This project is MIT Licensed. Feel free to fork, modify, and contribute!
