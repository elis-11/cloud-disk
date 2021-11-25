# Node/Express/EJS/MVC/MongoDB/Mongoose/Sass site with related collection schemas with `ref` and `populate()` 

This site shows a book store that displays books, the information of which comes from two collections in the MongoDB database. The Mongoose ODM (Object Document Mapper) is used to connect (with `ref` and `populate()`) the two schemas for the collections **Books** and **Persons** much as `JOIN` does in an SQL database between tables.

This site also uses the MVC pattern (Model-View-Controller) to organize how data is retrieved, e.g. a **Controller** queries **Models** for data, and then passes this data to the (EJS) **Views**.