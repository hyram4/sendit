--create parcel
create procedure createparcel(
@id varchar(max),
@description varchar(max),
@sender_number varchar(max),
@receive_number varchar(max),
@start_location varchar(max),
@end_location varchar(max)
)
as begin 
insert into parcels(id,description,sender_number,receiver_number,start_location,end_location)
values(@id,@description,@sender_number,@receive_number,@start_location,@end_location)
end

--get a parcel by id
create procedure getAParcel (@id varchar(max))
as begin
select*from parcels where id=@id and isDeleted=0
end

--get parcels
create procedure getParcel 
as begin
select*from parcels where isDeleted=0
end

--update a parcel
create procedure updateParcel(
@id varchar(max),
@description varchar(max),
@sender_number varchar(max),
@receive_number varchar(max),
@start_location varchar(max),
@end_location varchar(max)

)
as begin update parcels set description=@description,sender_number=@sender_number,receiver_number=@receive_number,start_location=@start_location,end_location=@end_location
where id=@id and isDeleted=0
end


--delete a parcel

create procedure deleteparcel(@id varchar(max))
as begin 
update parcels set isDeleted=1 where id=@id and isDeleted=0
end

select*from parcels

