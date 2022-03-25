import mysql.connector 

#define Connection
db = mysql.connector.connect(
  host="localhost",
  port=3306,
  user="root",
  password="harsh5chal",
  auth_plugin='mysql_native_password',
  database = "practice"
)

# print(db)

# # Get a cursor
cursor = db.cursor()

## creating a databse called 'practice'
# cursor.execute("CREATE DATABASE practice")

#To show DB
# cursor.execute("SHOW DATABASES")

# Creating Tables
cursor.execute("CREATE TABLE users (id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))")
cursor.execute("SHOW TABLES")
tables = cursor.fetchall()

for table in tables:
    print(table)

cursor.execute("DESC users")
print(cursor.fetchall())

## defining the Query
query = "INSERT INTO users (name, email) VALUES (%s, %s)"

# Write
values = ("Harsh", "harsh.panchal@searce.com")
values =("user1", "harsh.panchal@searce.com")
values =("user2", "harsh.panchal@searce.com")
values =("user3", "harsh.panchal@searce.com")
values =("user4", "harsh.panchal@searce.com")

cursor.execute(query, values)
db.commit()
print(cursor.rowcount, "records inserted")

query = "SELECT * FROM users;"
cursor.execute(query)
records = cursor.fetchall()
for record in records:
    print(record)

# delete records
query = "DELETE FROM users WHERE id = 1"
cursor.execute(query)
db.commit()

#Update
query = "UPDATE users SET name = 'Kareem' WHERE id = 2"
cursor.execute(query)
db.commit()

