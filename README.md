![Logo](https://locallity-logos.s3.us-west-1.amazonaws.com/icon-blue.png)


## Pakal Technological Solutions

We transform ideas into exceptional digital experiences. Your user-centered web design and development hub.


## Table of Contents



 - [Instructions to download project Github ](https://github.com/Global-Manu-Man/PakalDigitalSolutions.git)




 - [Instructions to download the dependencies ](https://www.npmjs.com/)

 - [Instructions to download the docker ](https://hub.docker.com/search?q=node)


  Download employees project with github

   1. Open your terminal or command line.
   2. Navigate to the directory where you want to clone the repository. You can do this using the cd command followed by the directory path. For example:

 ```bash
cd directory/path
 ```
  3. Once you are in the correct directory, use the git clone command followed by the URL of the repository you want to clone. For example:
```bash

git clone https://github.com/Global-Manu-Man/employees.git

 ```
 4. Press Enter to execute the command. Git will start cloning the repository to your local machine.
Once the cloning is complete, you will have downloaded a copy of the repository to your computer. You can navigate to the directory of the cloned repository using the cd command. For example:
```bash

cd employees

 ```


 5. It's used to install the package the project via npm.

 ```bash

npm install

 ```

## Docker

1. Build Docker Image:

Make sure you are in the root directory of your project and run the following command to build the Docker image:
 ```bash

docker build -t image_name .


 ```
Replace image_name with the name you want to give your Docker image.

2. Start Docker Container: 

After building the image, you can start a Docker container based on this image. Use the following command:

docker-compose up -d

 ```bash

docker-compose up -d
 
 ```
This command starts the containers specified in the docker-compose.yml file in detached mode (-d).

3. Check Container Status:

You can check the status of the running containers using the following command:
 ```bash

docker-compose ps
 
 ```
This will show you a list of containers, their statuses, and mapped ports

4. Access Container for Work:

If you need to access the container to perform additional tasks, such as running commands within the container environment, you can do so using the following command:


 ```bash

docker-compose exec container_name command_to_execute
 
 ```
For example, to open a terminal inside the container, you can use:
 ```bash

docker-compose exec container_name bash

 
 ```
5. Stop and Remove Containers:

When you're done working, you can stop and remove the containers using the following command:

 ```bash

docker-compose down

 
 ```
This will stop and remove the containers specified in the docker-compose.yml file.

![Logo](https://locallity-logos.s3.us-west-1.amazonaws.com/Screenshot_4.png)


![Logo](https://locallity-logos.s3.us-west-1.amazonaws.com/Screenshot_5.png)

![Logo](https://locallity-logos.s3.us-west-1.amazonaws.com/Screenshot_2.png)


![Logo](https://locallity-logos.s3.us-west-1.amazonaws.com/Screenshot_3.png)



















