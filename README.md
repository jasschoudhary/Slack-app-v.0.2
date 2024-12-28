# Slack-clone

Slack-clone is a feature-rich Slack clone designed to facilitate seamless team communication and collaboration. Built with modern web technologies, it offers a robust platform for real-time messaging, file sharing, and workspace management.

## Features

- **Real-time Messaging**: Engage in instant communication with team members through channels and direct messages.
- **Channel Management**: Create, manage, and organize channels for different teams or topics.
- **Direct Messaging**: Send private messages to individual team members for one-on-one conversations.
- **File Uploads**: Share images, PDFs, and other files within channels or direct messages.
- **Theming**: Switch between light and dark themes to suit your preference.
- **Authentication**: Secure sign-in using Google or GitHub, or register with an email for password-free access.

## Technologies Used

- **Next.js**: A powerful React framework for building server-side rendered applications, providing fast performance and SEO benefits.
- **React**: A popular JavaScript library for building user interfaces, ensuring a dynamic and responsive user experience.
- **Supabase**: A backend-as-a-service offering authentication, database, and real-time capabilities, simplifying backend management.
- **Socket.io**: Enables real-time, bidirectional communication between clients and servers, crucial for instant messaging.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development with a consistent design system.
- **Zod**: A TypeScript-first schema declaration and validation library, ensuring data integrity and type safety.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.
- Set up a Supabase account and project to manage your backend services.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jasschoudhary/slack-clone.git
   cd slack-clone
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env.local` file in the root directory and add your Supabase credentials along with other necessary environment variables.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- **`src/components`**: Contains all the React components used in the application, such as `MainContent`, `ChatGroup`, and `TextEditor`.
- **`src/app`**: Manages the main application logic and routing, including layouts and page components.
- **`src/styles`**: Includes global styles and Tailwind CSS configuration for consistent theming.
- **`supabase`**: Contains SQL scripts and Supabase configuration files for database management.

## Configuration

- **`next.config.mjs`**: Configures Next.js settings, including image optimization and remote patterns.
- **`tailwind.config.ts`**: Tailwind CSS configuration file, defining theme colors and responsive design settings.
- **`.eslintrc.json`**: ESLint configuration for maintaining code quality and consistency.

## Known Issues

- **Invite Code Functionality**: Currently not working. This is a known issue and is being addressed.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes. Ensure your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License, allowing for open-source collaboration and modification.

## Acknowledgments

- Inspired by the original Slack application.
- Built with the help of various open-source libraries and tools, fostering a collaborative development environment.

