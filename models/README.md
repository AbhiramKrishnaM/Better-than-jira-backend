## Models

[Reference links: LogRocket](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/)

### Starting service on mac

    brew services start postgresql

### POSTGRES connection

    psql postgres

### Create a role and add password to it

    CREATE ROLE your_role_name WITH LOGIN PASSWORD 'your_password';

### Enable create database for the role

    ALTER ROLE your_role_name CREATEDB;

### Connecting to postgres with new role

    psql -d postgres -U your_role_name
