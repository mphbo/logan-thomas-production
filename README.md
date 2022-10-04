<a href="http://LoganThomas.ca/" target="_blank">Please check out the live site.</a>

# Description

This mobile first project was a big step for me. Not because the project itself was a breakthrough; it's a portfolio site. It was a breakthrough because I spent multiple weeks prior learning new technologies to implement in the process of building this website:

- I learned NextJS which this site is built with
- I learned how to dockerize my application
- I learned how to deploy a containerized application to AWS Elastic Beanstalk
- I also learned how to animate page scrolls with react-springs parallax, as well as other effects I had not used before

## Features

As a portfolio site, there is not a lot of functionality, the following features have been implemented in this application as of March 26th, 2022:

- Custom button navigation of entire site
- Contact form which emails me directly through the use of HeroTofu


## Tech Stack

- Front End: React, NextJS
- Component Libraries: Grommet, React Spring (Parallax and Animation)
- CSS Preprocessor: Sass
- APIs: HeroTofu for messaging.

## Screenshots

### Main view / start of navigation.

!["Screenshot of MAIN view"](https://github.com/mphbo/logan-thomas-production/blob/development/public/logan-thomas/1.png)

### Beginning of Web Projects Section.

!["Screenshot of HEADING for Web Projects"](https://github.com/mphbo/logan-thomas-production/blob/development/public/logan-thomas/2.png)

### Example of the Project component views.

!["Screenshot the Project component"](https://github.com/mphbo/logan-thomas-production/blob/development/public/logan-thomas/3.png)

### Example of the Project Modal component.

!["Screenshot of Project Modal component"](https://github.com/mphbo/logan-thomas-production/blob/development/public/logan-thomas/4.png)

### Beginning of the Skills section.

!["Screenshot of HEADING for Skills section"](https://github.com/mphbo/logan-thomas-production/blob/development/public/logan-thomas/5.png)

### Example of the Technology component.

!["Screenshot of Technology component"](https://github.com/mphbo/logan-thomas-production/blob/development/public/logan-thomas/6.png)

### Contact Me page, where a user can send me an email directly using the HeroTofu API.

!["Screenshot of the Contact component"](https://github.com/mphbo/logan-thomas-production/blob/development/public/logan-thomas/7.png)


## SETUP and RUN with DOCKER

 ```sh
 docker compose up
 ```
 Then navigate to localhost:80
 
 ## WITHOUT DOCKER FOR DEVELOPMENT
 
 ### SETUP

Install dependencies with 

```sh
npm i
```

## RUN

From the root directory

```sh
npm run dev
```
