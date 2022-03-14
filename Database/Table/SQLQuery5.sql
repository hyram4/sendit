create table parcels(id varchar(200)primary key not null,
                     description varchar(max) not null,
					 sender_number varchar(max) not null,
					 receiver_number varchar(max) not null,
					 start_location varchar(max) not null,
					 end_location varchar(max) not null,
					 isDeleted int default 0 not null,
					 isUpdated int default 0 not null,
					 isSent int default 0 not null,
					 isDelivered int default 0 not null,
					 current_location varchar(max) not null,
					 sender_id varchar(200) foreign key references users(id) not null)