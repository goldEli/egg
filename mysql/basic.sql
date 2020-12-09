-- delete database
drop database egg;
-- create database
create database egg;
-- create table
use egg;

create table user(
  id int(10) not null auto_increment,
  name varchar(20) not null default 'admin' comment 'name',
  pwd varchar(50) not null comment 'pwd',
  primary key(id)
)engine=InnoDB charset=utf8;

-- check table
show tables;

-- check table structure
desc user;

-- delete table
drop table user;

-- insert table
insert into user values(1, 'user1', "123")
insert into user(name, pwd) values('user1', "123")

-- check table data
select * from user;
select id, name from user; 
select id, name from user where id = 1; 

-- update table data
update user set pwd = '123456' where id = 1;

-- delete table data
delete from  user where id = 2;