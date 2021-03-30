```
$ psql
```

1- create the database
```
CREATE DATABASE name_of_db;
```

2- connect to your db
```
\c name_of_db;
```
or
```
psql name_of_db
```
writing `exit` or `\q` will get out of the database

## Demo

```
~$ psql
psql (13.2)
Type "help" for help.

alibaker=# \l
                             List of databases
   Name    |  Owner   | Encoding | Collate | Ctype |   Access privileges
-----------+----------+----------+---------+-------+-----------------------
 alibaker  | alibaker | UTF8     | C       | C     |
 demo_db   | alibaker | UTF8     | C       | C     |
 postgres  | alibaker | UTF8     | C       | C     |
 template0 | alibaker | UTF8     | C       | C     | =c/alibaker          +
           |          |          |         |       | alibaker=CTc/alibaker
 template1 | alibaker | UTF8     | C       | C     | =c/alibaker          +
           |          |          |         |       | alibaker=CTc/alibaker
 whoami    | alibaker | UTF8     | C       | C     |
(6 rows)

alibaker=# /q
alibaker-# \q
~$ psql demo_db
psql (13.2)
Type "help" for help.

demo_db=# CREATE TABLE IF NOT EXISTS
demo_db-# users(
ERIAdemo_db(#   id SERIAL PRIMARY KEY NOT NULL,
demo_db(#   first_name VARCHAR(256) NOT NULL,
demo_db(#   last_name VARCHAR(256) NOT NULL,
demo_db(#   ssn INTEGER NOT NULL,
demo_db(#   ninja_status BOOLEAN NOT NULL,
demo_db(#   biography TEXT NOT NULL
demo_db(# );
CREATE TABLE
demo_db=# CREATE TABLE IF NOT EXISTS
demo_db-# users(
demo_db(#   id SERIAL PRIMARY KEY NOT NULL,
t_name demo_db(#   first_name VARCHAR(256) NOT NULL,
demo_db(#   last_name VARCHAR(256) NOT NULL,
demo_db(#   ssn INTEGER NOT NULL,
demo_db(#   ninja_status BOOLEAN NOT NULL,
demo_db(#   biography TEXT NOT NULL
demo_db(# );
NOTICE:  relation "users" already exists, skipping
CREATE TABLE
demo_db=# \d
              List of relations
 Schema |     Name     |   Type   |  Owner
--------+--------------+----------+----------
 public | users        | table    | alibaker
 public | users_id_seq | sequence | alibaker
(2 rows)

demo_db=# \dt
         List of relations
 Schema | Name  | Type  |  Owner
--------+-------+-------+----------
 public | users | table | alibaker
(1 row)

demo_db=# \d users
                                       Table "public.users"
    Column    |          Type          | Collation | Nullable |              Default
--------------+------------------------+-----------+----------+-----------------------------------
 id           | integer                |           | not null | nextval('users_id_seq'::regclass)
 first_name   | character varying(256) |           | not null |
 last_name    | character varying(256) |           | not null |
 ssn          | integer                |           | not null |
 ninja_status | boolean                |           | not null |
 biography    | text                   |           | not null |
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)

demo_db=# INSERT INTO users(first_name, last_name, ssn, ninja_status, biography) VALUES('Ali', 'Sartawi', 123654, true, 'future full-stack developer');
INSERT 0 1
demo_db=# SELECT * FROM users;
 id | first_name | last_name |  ssn   | ninja_status |          biography
----+------------+-----------+--------+--------------+-----------------------------
  1 | Ali        | Sartawi   | 123654 | t            | future full-stack developer
(1 row)

demo_db=# SELECT first_name FROM users;
 first_name
------------
 Ali
(1 row)

demo_db=# \d demo_db
Did not find any relation named "demo_db".
demo_db=# \d
              List of relations
 Schema |     Name     |   Type   |  Owner
--------+--------------+----------+----------
 public | users        | table    | alibaker
 public | users_id_seq | sequence | alibaker
(2 rows)

demo_db=# \d users
                                       Table "public.users"
    Column    |          Type          | Collation | Nullable |              Default
--------------+------------------------+-----------+----------+-----------------------------------
 id           | integer                |           | not null | nextval('users_id_seq'::regclass)
 first_name   | character varying(256) |           | not null |
 last_name    | character varying(256) |           | not null |
 ssn          | integer                |           | not null |
 ninja_status | boolean                |           | not null |
 biography    | text                   |           | not null |
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)

demo_db=# \dt users
         List of relations
 Schema | Name  | Type  |  Owner
--------+-------+-------+----------
 public | users | table | alibaker
(1 row)

demo_db=# SELECT * FROM users;
 id | first_name | last_name |  ssn   | ninja_status |          biography
----+------------+-----------+--------+--------------+-----------------------------
  1 | Ali        | Sartawi   | 123654 | t            | future full-stack developer
(1 row)

demo_db=#
```