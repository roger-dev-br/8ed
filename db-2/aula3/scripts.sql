create table growdever3
(
	uuid varchar(36) not null,
	"name" varchar(100) not null,
	created_at timestamp not null,
	updated_at timestamp null,
	constraint pk_growdever3 primary key(uuid)
);

create table profile3
(
	uuid varchar(36) not null,
	"email" varchar(100) not null,
	birth date null,
	created_at timestamp not null,
	updated_at timestamp null,
	constraint pk_profile3 primary key(uuid),
	constraint fk_profile_grow foreign key (uuid) 
		references growdever3 (uuid)
);

create table turma3 
(
	uuid varchar(36) not null,
	"name" varchar(100) not null,
	students integer not null,
	created_at timestamp not null,
	updated_at timestamp null,
	constraint pk_turma primary key(uuid)
);

