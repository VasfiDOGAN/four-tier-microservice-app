# Four-Tier Microservice Application

This repository demonstrates a four-tier microservice architecture involving Angular for the frontend, Spring Boot and Node.js for the backend services, and Kubernetes for orchestration. It leverages Docker for containerization and Nginx as a reverse proxy and API gateway.

## Table of Contents
- [Features](#features)
- [Architecture Overview](#architecture-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Microservices](#microservices)
- [Kubernetes Deployment](#kubernetes-deployment)


## Features
- Frontend built with Angular and hosted using Nginx.
- Backend services written in Spring Boot (Java) and Node.js.
- Data storage using MongoDB and MySQL.
- Scalable deployments managed via Kubernetes.
- Dockerized services for easy setup and deployment.
- API gateway using Nginx.

## Architecture Overview
This application consists of multiple tiers:
1. **Frontend**: Angular app hosted on Nginx.
2. **Backend (Java API)**: A Spring Boot microservice for handling book-related functionalities.
3. **Backend (Node API)**: A Node.js service for managing users, products, and orders.
4. **Database Layer**: Uses MySQL for relational data and MongoDB for document storage.
5. **API Gateway**: Nginx serves as the reverse proxy to route traffic between the client and the backend services.

## Technologies Used

- **Frontend**: Angular ![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
- **Backend (Java)**: Spring Boot, Maven ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&logoColor=white) ![Maven](https://img.shields.io/badge/Maven-C71A36?logo=apachemaven&logoColor=white)
- **Backend (Node.js)**: Express.js, Node.js ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
- **Databases**: MongoDB, MySQL ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
- **Containerization**: Docker, Docker Compose ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
- **Orchestration**: Kubernetes ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white)
- **API Gateway**: Nginx ![Nginx](https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white)


## Setup and Installation

### Prerequisites
Ensure that you have the following installed:
- Docker
- Kubernetes
- Angular CLI
- Maven

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/VasfiDOGAN/four-tier-microservice-app.git

2. **Build and run the services**:
   To build and run all services locally using Docker, navigate to the root directory of the project and run:
   ```bash
   docker-compose up --build

3. **Access the services**:
    - The Angular frontend will be available at `http://localhost:4200`.
    - The Spring Boot backend (Java API) will run on port `8080`.
    - The Node.js backend (Node API) will run on port `5000`.

4. **Run the frontend separately (Optional)**:
   If you'd like to run the Angular client outside of Docker:
    - Navigate to the `client` folder:
      ```bash
      cd client
      ```
    - Install the dependencies:
      ```bash
      npm install
      ```
    - Start the Angular development server:
      ```bash
      ng serve
      ```
   The Angular app will be available at `http://localhost:4200`.

5. **Run the Java API separately (Optional)**:
   If you'd like to run the Spring Boot Java API outside of Docker:
    - Navigate to the `javaapi` directory:
      ```bash
      cd javaapi
      ```
    - Build the project using Maven:
      ```bash
      mvn clean install
      ```
    - Run the Spring Boot application:
      ```bash
      mvn spring-boot:run
      ```
   The Java API will be available at `http://localhost:8080`.

6. **Run the Node API separately (Optional)**:
   To run the Node API outside of Docker:
    - Navigate to the `nodeapi` directory:
      ```bash
      cd nodeapi
      ```
    - Install the required dependencies:
      ```bash
      npm install
      ```
    - Run the Node API:
      ```bash
      npm start
      ```
   The Node API will be available at `http://localhost:5000`.

7. **Access databases**:
    - MySQL is accessible at `localhost:3306`.
    - MongoDB is accessible at `localhost:27017`.

8. **Shutting down the services**:
   When you are done, you can shut down all services by running:
   ```bash
   docker-compose down

# Microservices

## Microservices

### Java API
The Java API is built using Spring Boot and handles book-related operations. It communicates with a MySQL database for relational data storage.

### Node API
The Node API is responsible for managing users, products, and orders. It communicates with a MongoDB instance for storing documents like user information, product catalogs, and orders.

### Nginx
Nginx acts as the API Gateway in this architecture. It handles incoming requests from the Angular frontend and routes them to the appropriate backend services (Java API or Node API). It also serves as a reverse proxy, ensuring that traffic is efficiently managed between the microservices.

### Client (Angular Frontend)
The Angular frontend is the user interface of the application, allowing users to interact with the system. It communicates with the backend services via HTTP requests routed through the Nginx API Gateway. The frontend is hosted and served by Nginx.

## Kubernetes Deployment

To deploy the services to a Kubernetes cluster, you can use the YAML files provided in the `k8s` folder.

### Steps to Deploy:

1. **Deploy MongoDB**:
   Deploy the MongoDB database using the `mongo-deployment.yaml` file.
   ```bash
   kubectl apply -f k8s/mongo-deployment.yaml

2. **Deploy MySQL**:
   Deploy the MySQL database using the `mysql-deployment.yaml` file.
   ```bash
   kubectl apply -f k8s/mysql-deployment.yaml

3. **Deploy the Node API**:
   Deploy the Node.js API, which handles user, product, and order management, using the `webapi-deployment.yaml` file.
   ```bash
   kubectl apply -f k8s/webapi-deployment.yaml

4. **Deploy the Java API**:
   Deploy the Spring Boot Java API for handling book-related functionalities using the `api-deployment.yaml` file.
   ```bash
   kubectl apply -f k8s/api-deployment.yaml

5. **Deploy the Angular Client**:
   Deploy the Angular frontend that will interact with both backend services using the `client-deployment.yaml` file.
   ```bash
   kubectl apply -f k8s/client-deployment.yaml

6. **Deploy Nginx API Gateway**:
   Deploy Nginx as the API gateway to route traffic between the frontend and backend services using the `nginx-deployment.yaml` file.
   ```bash
   kubectl apply -f k8s/nginx-deployment.yaml

### Accessing the Application:
Once all the services are deployed, you can access the application via the Nginx API Gateway, which routes requests to the appropriate backend services. The IP address of the Kubernetes cluster will be used to access the application.

### Shutting Down the Services:
To shut down all the services running in your Kubernetes cluster, you can use the `kubectl delete` command for each deployment, like so:
```bash
kubectl delete deployment k8s/mongo-deployment.yaml
kubectl delete deployment k8s/mysql-deployment.yaml
kubectl delete deployment k8s/webapi-deployment.yaml
kubectl delete deployment k8s/api-deployment.yaml
kubectl delete deployment k8s/client-deployment.yaml
kubectl delete deployment k8s/nginx-deployment.yaml
