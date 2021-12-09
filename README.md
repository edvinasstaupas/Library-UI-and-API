Library information systems (Spring Boot REST API and React)
=============================


## Instructions on how to run this project:

First of all, clone the repository:

`git clone https://github.com/edvinasstaupas/Library-UI-and-API.git`

# BACK-END

## CLI approach

If you would like to run the program from IntelliJ jump to [Gui approach](#gui-approach)

If not, run program from `/api` directory:

In Linux/MacOs/Git Bash:

`./gradlew bootRun`

In Windows PowerShell:

`.\gradlew bootRun`

Now you have a working REST API for library information system:sparkler::sparkler:

**Keep in mind** that default profile is 'dev' which comes with h2 database
If you'd like to use other databases, first you will need to create database and change `application-prod.yaml` properties file

After initializing database, use 

In Linux/MacOs/Git Bash:

`./gradlew bootRun --args='--spring.profiles.active=prod'`

In Windows PowerShell:

`.\gradlew bootRun --args='--spring.profiles.active=prod'`

## Gui approach

If you would like to work with GUI, latter commands can be avoided by using IntelliJ IDE. 

To run program with default properties, run `ApiApplication` method `main`

If you'd like to use profiles, change run configuration Active profiles section to your wanted profile:

![image](https://user-images.githubusercontent.com/73701414/145412845-beb64684-9427-4210-86cd-f00bc05c27e2.png)

# FRONT-END

Next part will be starting front-end part of the website:

Run from `/ui` directory:

`npm start`

### And that's it, enjoy reading:book:
