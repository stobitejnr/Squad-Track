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
* **Database:** MySQL2

## File Tree

- `frontend` - Contains the JavaScript frontend project
- `backend` - Contains the JavaScript backend project
- `database` - Contains the MySQL database configuration

## Running Locally

1. Clone the repository
    ```bash
    git clone https://github.com/stobitejnr/Squad-Track.git
    ```
2. Change into the project directory
    ```bash
    cd Squad-Track
    ```
3. Open [Docker Desktop](https://www.docker.com/products/docker-desktop/) and ensure it is running.
4. Build and run the project
    ```bash
    docker compose up --build
    ```
5. Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to view the frontend application.

### Shutting Down the Project

```bash
    docker compose down
```

---

## Useful Docker Commands

- **Building and running multiple Docker containers from a `docker-compose` file**
    ```bash
    docker compose up -d
    ```

- **Stopping multiple Docker containers from a `docker-compose` file**
    ```bash
    docker compose down
    ```

- **Viewing all running Docker containers**
    ```bash
    docker ps
    ```
