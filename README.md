# Weather Now Frontend

Weather Now Frontend is a responsive and dynamic interface designed to interact seamlessly with the Weather Now backend. Built using Next.js, Shadcn, Tailwind CSS, Tremor and TypeScript, it provides a modern and efficient user experience for managing weather information and forecast.


## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Related Project](#related-project)

## Features

- **Weather Forecast**
  - Add, list, update, and delete weather informations from differents cities.
  
- **Accurate Weather Forecast**
  - Using node-geocoder, openweather api and google maps api to forecast weather in details

- **Google OAuth**
  - Use google authentication to save session informations and login
  

## Technology Stack

- **Next.js**
  - React framework for server-side rendering and static site generation.
  - Provides optimized performance and SEO benefits.
  
- **Shadcn**
  - Component library providing customizable and reusable UI components.
  
- **Tailwind CSS**
  - Utility-first CSS framework for rapidly building custom user interfaces.
  - Enables consistent styling with a minimal footprint.

- **Tremor**
  - React components to build charts and dashboards.
  
- **TypeScript**
  - Typed superset of JavaScript that compiles to plain JavaScript.
  - Ensures type safety and reduces runtime errors.

## Architecture

- **Component-Based**
  - Modular and reusable components built with Shadcn and Tailwind CSS.
  - Promotes maintainability and scalability.
  
- **State Management**
  - Efficient state management using React's built-in hooks and context API.
  
- **API Integration**
  - Seamless communication with Weather Now backend using RESTful APIs.
  - Handles asynchronous operations and error handling.
  
## Installation

### Requeriments:
- Google Maps API, see the documentation: https://developers.google.com/maps/documentation/embed/get-started
- Weather Now Backend, see [Related Project](#related-project)

1. Clone the repository:
   ```bash
   git clone https://github.com/Cleiton366/weather-now-frontend.git
   cd weather-now-frontend
    ```
2. Install dependencies:
```bash 
npm install
```

3. Set up the environment variables:
Create a .env file in the root directory and add the following variables:
   
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY='<YOUR_API_KEY_HERE>'
NEXT_PUBLIC_API_URL='http://localhost:4000'
 ```
 
4. Start the server:

```bash
npm run dev
```

## Related Project

To run this project you will need to run the backend as well, see: https://github.com/Cleiton366/weather-now-backend
