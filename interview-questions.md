# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key is called animal_id:integer.  The foreign key is part of the Sightings model, sightings belong_to animal.

  Researched answer: The foreign key is called animal_id:integer.  The foreign key is part of the Sightings model, sightings belong_to animal.


2. Which RESTful routes must always be passed params? Why?

  Your answer: Delete and Patch need to have an ID paramater in order to specify which element in the database to either edit or delete.

  Researched answer: Show, Edit, Update, and Destroy must all be passed a parameter because they deal with a specific item in the database.


3. Name three rails generator commands. What is created by each?

  Your answer:
  "rails generate model <modelname> <field>:<datatype>", sets up our database
  "rails generate migration <filename>", creates a migrations file used to modify our database
  "rails generate resource <resourcename> <field>:<datatype>", sets up our database including routes

  Researched answer:
  "rails generate model <modelname> <field>:<datatype>",
   - sets up our database
   - creates /app/models/<modelname>.rb, our model class template
   - creates /db/migrate/<###_create_modelname>.rb, a migration file containing our database structure
  "rails generate migration <filename>", creates a migrations file used to modify our database
    - creates /db/migrate/<###_migration_name>.rb, a migration file containing instructions for how to modify our database structure
  "rails generate resource <resourcename> <field>:<datatype>", sets up our database including routes
    - creates a ruby migration file in db/migrate/
    - creates the User model in app/models/user.rb
    - creates a User controller in app/controllers/users_controller.rb
    - sets up all of the routes in config/routes.rb


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users          users#index  
  - would give us a list of all the users in the database

method="GET"    /users/1        users#show
  - would give us the users in the database with id = 1

method="GET"    /users/new      users#new
  - would give us an HTML form to add a new user

method="GET"    /users/edit/1   users#patch  
  - give us an HTML form to edit the users in the database with id = 1

method="POST"   /users/         users#create  
  - would allow us to add a new user to the database

method="PUT"    /users/1        users#update
  - allow us to modify the user in the database with id = 1

method="DELETE" /users/1        users#destroy  
  - remove the user in the database with id = 1


5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.
  - As a user, I can create a todo list item
  - As a user, I can give a todo item a name
  - As a user, I can modify a todo item
  - As a user, I can delete a todo item
  - As a user, I can print out a list of all my todo items
  - As a user, I can mark a todo item as complete
  - As a user, I can add instructions on how to perform my todo item
  - As a user, I can print a list of all incomplete items
  - As a user, I can print a list of all my completed items
  - As a user, I can mark a todo item as "in progress"
