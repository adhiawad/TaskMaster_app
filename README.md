# TaskMaster - Manage Your Tasks Efficiently

TaskMaster is a simple, feature-rich to-do list app built with React. Designed to help you organize your daily tasks, it allows users to add, update, delete, and mark tasks as completed, ensuring better productivity. The app uses localStorage to persist your tasks, meaning your list remains intact even after closing the browser.

## Features

- **Add Tasks:** Quickly create new tasks to manage your day.
- **Edit Tasks:** Update any task if you need to modify its details.
- **Delete Tasks:** Easily remove tasks once completed or irrelevant.
- **Mark as Completed:** Toggle the status of tasks between completed and incomplete.
- **Persistent Data:** Uses localStorage to keep tasks saved, even after the app is closed and reopened.
- **Responsive Design:** The app has a clean and modern UI with responsive design, making it easy to use on different devices.

## How It Works

- **Local Storage Integration:** Upon loading the app, any previously saved tasks from localStorage are loaded. As you add, edit, or delete tasks, the changes are instantly saved in the browser's storage, ensuring persistence between sessions.
- **Context API:** The app is structured using React’s Context API to manage and share state efficiently, allowing components like the task form and task list to interact seamlessly.

## Tech Stack

- **React:** Component-based architecture for dynamic UI.
- **Context API:** For state management and prop drilling prevention.
- **localStorage:** For task persistence across sessions.
- **CSS & Tailwind CSS:** For responsive styling and design.
