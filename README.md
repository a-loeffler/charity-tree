# CHARITY TREE

*By Drew Long, Mike Sineath, Kevin Betker, Andrew Loeffler - <a href="https://charity-tree.herokuapp.com/">Visit Charity Tree</a>*


**Table of Contents**

* [Charity Tree Purpose and Overview](#charity-tree-purpose-and-overview)
* [Design and Build Framework](#design-and-build-framework)
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion & Next Steps](#conclusion--next-steps)

## Charity Tree Purpose and Overview

The purpose of Charity Tree is to provide a venue for nonprofit groups and charities to create and maintain fundraising projects.  Charity Tree is a fullstack React app that allows users to discover nonprofits and charities that they can support.

Charity Tree features include user account creation, the ability to create fundraising projects with customizable project pages, media uploads, and the ability to contribute to projects.

## Design and Build Framework

Charity Tree utilizes a React framework for its frontend operations.  The majority of the frontend logic and operations occur within the frontend's Redux store.  Additionally, the TinyMCE rich-text-editor API was implemented to allow non-technical users the ability to customize the design and content of their individual project pages.

On the backend, a PostgreSQL database and Flask ORM responds to user requests and serves data to appropriate places in the app.

## Frontend Overview

Charity Tree was designed to allow users to create fundraising projects for their nonprofit or charity grouops.  As such, intuitive and easy-to-understand user interfaces were developed to allow non-technical persons the ability to customize and maintain their projects.  Below are the frontend technologies used to make this application possible.

### Frontend Technologies Used

#### React

Charity Tree is fundamentally a React application.  It makes use of separate but interconnected functional components and hooks in order to provide a satisfying user experience.

#### Redux

Charity Tree integrates the Redux and react-redux library to manage an application state store, serve user data across components, and make fetch requests to the server for user interactions.

When a user accesses the site, information about the projects available for the user to view is fetched and loaded into the Redux store for fluid responses and rapid navigation.  While this expensive operation lengthens the initial load time, it allows the data to be quickly displayed onscreen as the user navigates the app.

#### TinyMCE API

The TinyMCE API is an important feature of this project.  It is a rich-text-editor that allows users to customize their individual project pages with media that they have uploaded, as well as formatting the text and contents of their project page.

## Backend Overview

Charity Tree utilizes a Flask server with a PostgreSQL database and Sequel-Alchemy ORM.  The backend of Charity Tree passes data to the client and receives request information for the database in order to carry out basic CRUD operations.

### Backend Technologies Used

#### Flask

Flask handles the light-weight responsibilities of Charity Tree's server.  It utilizes routes to handle various user interactions, such as project CRUD operations, handling information related to user accounts, and allowing users to donate to projects.

#### PostgreSQL

PostgreSQL acts as a suitable framework for storing user account information and associating necessary items to build a robust data structure for app interactions.

#### Sequel-Alchemy

Sequel-Alchemy stands as an ORM intermediary that uses the Flask-SequelAlchemy library, and allows the Flask server to send and retrieve data from the database.  The simple interactions and structured documentation for querying made Sequel-Alchemy an excellent choice for this project.

## Conclusion & Next Steps

Charity Tree has been a project that helped us all grow as developers.  We learned about how to implement many resources and ideas, as well as combine our love of coding with the ability to help others.

While making Charity Tree, we were able to explore some new concepts and technologies.  Learning about the TinyMCE rich-text-editor API took a lot of time and effort, and still requires some more work to fully integrate it into the styling and functionality of the site.  Additionally, we were able to practice a lot of concepts related to improving the user experience and interfaces..

**Next Steps:** There is still a lot of development left to go for Charity Tree.  As we move forward, we would like to begin by improving the functionality of the interfaces that are used for exploring projects on the site.  We would like to set up a working search feature, so that users can also find projects to back through that option.  Furthermore, we hope to tighten up the site-wide styling so that all of the components in the entire app mesh together smoothly.
