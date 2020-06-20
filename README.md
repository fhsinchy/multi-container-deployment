# Deploy a Multi-container project on AWS

This is a simple not taking application consisting of two separate ends:

- Vue.js Client (resides inside `client` directory)
- Express Server (resides inside `api` directory)

Routing of the requests has been done using [Nginx](https://nginx.com/). I have used [Docker](https://docker.com/) for containerization and [Travis CI](https://travis-ci.com/) for CI/CD.

This project will be deployed on [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) and a comprehensive tutorial will be published on [freeCodeCamp](https://freecodecamp.org/news) very soon.

## Development Task List

- Development :heavy_check_mark:
- Containerization :heavy_check_mark:
- CI/CD :heavy_multiplication_mark:
- Documentation :heavy_multiplication_mark:
- Comprehensive Tutorial :heavy_multiplication_mark:

## System Requirements

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/get-started)

## Libraries Used

- [vue](https://deno.land/x/oak)
- [express](https://deno.land/x/mysql)

## Instructions

Clone this repository anywhere you want. Open up terminal and use following command to build and run the application -

```bash
docker-compose up --build
```

Open up a shell inside the running API service anc execute following command -

```bash
npm run db:migrate
```

Now the application will be available on `http://localhost:80` address on your local machine.
