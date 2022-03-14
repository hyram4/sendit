create table Users(id varchar(200)primary key,
                   username varchar(200),
				   fullname varchar(200),
				   phone_number varchar(200),
				   email varchar(200),
				   password varchar(200),
				   isAdmin int default 0,
				   isDeleted int default 0,
				   isSent varchar(100) default 0)