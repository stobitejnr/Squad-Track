___

## Overview

This project involves the development of a comprehensive tool for football team management called Squad Track. Squad
Track is designed to provide a user-friendly database for organizing and displaying detailed information about players
in different categories: first eleven, substitutes, and reserves.

Deployed within a streamlined environment, the application facilitates the efficient management of player data by
allowing users to easily access and update player details. The system enhances team management by ensuring that all
relevant player information is systematically recorded and readily available.

## Built With

* **Frontend:** HTML, CSS **&** JavaScript
* **Backend:** JavaScript
* **Database:** MySQL2 (Amazon RDS)
* **Storage:** Amazon S3
* **Testing:** AWS Lambda

## File Tree

- `frontend` - Contains the JavaScript frontend project
- `backend` - Contains the JavaScript backend project
- `database` - Contains the MySQL database configuration

## Accessing the Application

1.	Open your browser and navigate to the provided frontend URL to access the application.


## Viewing Images

	•	Users can browse through the images that have been uploaded to the application. The application displays thumbnails of the images stored in the S3 bucket, providing a visual representation of the items available.
	•	An AWS Lambda function automatically triggers when users upload images, testing the files for correctness and ensuring they meet specified criteria.

## Project Demo (Click Image to Watch)

<div>
    <a href="https://youtu.be/5On1IxACKUw" target="_blank">
        <img src="./frontend/Squad.jpg" alt="Project Demo Video" />
    </a>
</div>
