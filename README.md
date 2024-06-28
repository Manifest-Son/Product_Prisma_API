# SMART-SHOP PRODUCTS API

## INTRODUCTION

In this assignment, I will be developing a RESTful API using Express.js, Prisma and PostgreSQL to manage a collection of products.  
This API will allow clients to perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database.  
I have a given set of data and implement the necessary endpoints to interact with this data.

## HOW TO GO ABOUT IT

### Step 1: CREATE A LOCAL FOLDER & OPEN IN THE VS CODE

Create a folder in your local directory and name it "Smart-Shop Products API". Using the `CMD` type this command `npm init -y`. This will initialize the `package.json` package for our development dependencies.

### Step 2: INSTALL THE NECESSARY DEPENDANCIES

1. Express js - Use this command `npm install express`
2. Prisma - Use this command `npm install prisma --save -dev` or `npm install prisma -D`
3. Dotenv - Use this command `npm install dotenv`
4. Nodemon - Use this command `npm install nodemon`

### Step 3. Create an `index.js` file

The `index.js` file will serve as the entry point to our application.

### Step 4: INITIALIZE Prisma ORM

Use `npx prisma init`. This sets up our prisma project.

### Step 5: CREATE A DATABASE TO HOLD YOUR DATA

Having installed PostgreSQL in tour local computer, you can open the psql and set up your database. Use the infromation given to connect with our application.  
You shall require:

1. `Server`
2. `Database`
3. `Port`
4. `Username`
5. `Password`
   Having configured all of this, create a new database from the default one. On our ebd we shall create a database by the name, `products`. Use this command `CREATE DATABASE products`

### Step 6: SET UP OUR PRISMA PROJECT.

After installing Prisma, we need to setup a prisma ORM project by creating a prisma schema file.  
We use the command : `npx prisma init`
This command will:

1. Create a new directory called prisma and contains the schema.prisma file. It conatains our database connection variable and schema models.
2. Creates `.env` file in the root of the project to defining the environment.

You will encounter the following code:
`DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`

This is the format:
`DATABASE_URL="postgresql://{username}:{password}@localhost:5432/{database_name}?schema=public"`

- Head to your psql anc connect to your database. Use this command: `\c products`
- Dont forget to configure in the package.json file these things.
  `"type": "module",` and under the scripts  
  `"start": "node index.js",
 "start-dev": "nodemon index.js"
 `

Configure and we are all set up.

#### Create the model(s)

Using theinformation given to create a table with several columns as specified. This is what we call a model.
Example:
`model Products{
id Int @id @default(autoincrement())
productThumbnail String @map("product_Thumbnail")
productTitle String @map("product_Title")
productDescription String @map("product_Description")
productCost Int @map("product_Cost")
onOffer Boolean @map("on_Offer")

@@unique([productThumbnail])
}
`

#### Run migrations to reflect the changes in your DB.

Use this command:
`npx prisma migrate dev --name newProductsTable`
It shall perform the migration and then a new folder will be created that shall store the migration.

#### Generate the client and use it in your API

Use this command:
`npm prisma generate`

### Step 7: IMPLEMENTING THE ENDPOINTS

Implement endpoints to perform the following operations:

- Get All Products: retrieve a list of all products from the database.

- Get a Single Product: retrieve a single product from the database based on its id.

- Create a Product: create a new product and write it to the PostgreSQL database.

- Update a Products; update a product based on it's id.

- Delete a Product - delete a product based on it's id.

#### Creating a single product
