create procedure createUser(
@id varchar(200),
@username varchar(200),
@fullname varchar(200),
@phone_number varchar(200),
@email varchar(200),
@password varchar(200)

)
as begin 
insert into users(id,username,fullname,phone_number,email,password)
values(@id,@username,@fullname,@phone_number,@email,@password)
end
--get user by id
create procedure getAuser(@id varchar(200))
as begin
select*from users where id=@id
end

--get all users
create procedure getUsers
as begin
select*from users
end

--updating a user
create procedure updateUser(
@id varchar(200),
@username varchar(200),
@fullname varchar(200),
@phone_number varchar(200),
@email varchar(200),
@password varchar(200),
@isDeleted int

)
as begin 
update users set username=@username,fullname=@fullname,phone_number=@phone_number,email=@email,password=@password
where id=@id and isDeleted=0
end

--delete a user
create procedure deleteuser(@id varchar(max))
as begin 
update users set isDeleted=@isDeleted where id=@id and isDeleted=0
end
