# Streamlining
This is a simple blog project built using Next.js for the frontend and Strapi as the headless CMS. This app was developed using AI tools, primarily as a learning exercise to explore the integration of AI capabilities in the app development process. 

## Description 

This application is a blog built using Next.js and React for the frontend, along with Strapi serving as the content management system (CMS). The project comprises three main sections: Home, Blog, and Post. The Home page functions as a landing page, offering an overview of the application's purpose. The Blog page presents a series of cards, representing individual posts accessible on the platform. Clicking on a specific card title directs users to the corresponding detailed Post view, where the complete content of the chosen post is displayed. Navigation between the Home and Blog views is facilitated through a straightforward navbar.

## Role of AI tools

### CMS

The following was achieved using ChatGPT:

1. A list of the main fields that a post should have. 
2. 5 AI tools examples relevant to the blog's scope with information for each field.
3. Based on the strucutre for the post, chatGPT built the json schema for it's corresponding type.
4. ChatGPT built a script that made a POST request to the API with the content, in order to store it in the database.

### Frontend

1. The design for the Home page was created using [Mixo](https://app.mixo.io/ai-website-builder)
2. The images for the site were created using [Stable Diffusion](https://stablediffusionweb.com/)
3. JSX components, including styles and API integration logic, were created almost entirely using ChatGPT. Here's a [prompt example](./promptExamples.md)

The entire process took less than a 16 hours. 

## Getting Started
### Prerequisites

- Node.js (>=16.0.0 <=20.x.x)
- npm (>=6.0.0)

### Installation
1. Clone the repository https://github.com/sanchezd90/strapi-blog.
2. Install dependencies for both the frontend and the backend.
```bash
cd frontend
npm install
cd ../back
npm install
```
3. Run the frontend and backend applications in separate terminal windows.
```bash
# Frontend
cd frontend
npm run dev

# Backend
cd back
npm run develop

```

## Project Schemas
The project consists of two main parts:

1. Frontend - Built with Next.js, React, and Axios for data fetching.
2. Backend - Utilizes Strapi as the headless CMS with additional plugins for user permissions and internationalization.

### Post Schema
The Post schema includes the following fields:

- title - Title of the post. This field is required and can have a maximum length of 100 characters.
- introduction - Introduction of the post.
- description_overview - Detailed description and overview of the post.
- use_cases - Use cases associated with the post.
- key_features - Key features highlighted in the post.
- benefits_impact - Benefits and impacts discussed in the post.
- integration_implementation - Details about integration and implementation.
- challenges_limitations - Challenges and limitations highlighted in the post.
- future_trends_developments - Predictions or discussions about future trends and developments.
- conclusion - Conclusion drawn at the end of the post.
- categories - A many-to-many relationship with categories.

## Category Schema
The Category schema includes the following fields:

- name - Name of the category.This field is required.
- description - Description of the category.
- color - Color associated with the category for visual distinction.
- posts - A many-to-many relationship with posts.

## API

### Post

- GET all posts: http://localhost:1337/api/posts
- GET a single post by ID: http://localhost:1337/api/posts/{id}

### Category

- GET all categories: http://localhost:1337/api/categories
- GET a single category by ID: http://localhost:1337/api/categories/{id}

## Contributing
Contributions are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.
