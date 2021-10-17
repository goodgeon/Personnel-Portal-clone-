CREATE TABLE passport (
	passport_no varchar PRIMARY KEY,
	passport_expiration_date date NOT NULL,
	passport_country varchar NOT NULL
);

CREATE TABLE residence (
	residence_no varchar PRIMARY KEY,
	residence_delivery_date date NOT NULL,
	residence_category varchar NOT NULL,
	residence_period varchar NOT NULL,
	residence_expiration_date date NOT NULL
);

CREATE TABLE account(
	account_no varchar PRIMARY KEY,
	bank_name varchar NOT NULL,
	branch_name varchar NOT NULL,
	account_type varchar NOT NULL,
	account_name varchar NOT NULL
);

CREATE TABLE department (
	department_id integer PRIMARY KEY,
	department_category varchar,
	department_name varchar,
	unit varchar
);

CREATE TABLE department_category (
	department_category varchar PRIMARY KEY
);

CREATE TABLE department_name (
	department_name varchar PRIMARY KEY,
	department_category varchar REFERENCES department_category (department_category)
);

CREATE TABLE unit (
	unit varchar,
	department_name varchar REFERENCES department_name (department_name)
	PRIMARY KEY (unit,department_name)
);

select department_category
from department_category;

select department_name
from department_name , department_category
where department_category.department_category = department_name.department_category and department_category.department_category='開発本部'

select unit
from department_name, unit
where department_name.department_name = unit.department_name and unit.department_name = '開発2部'
   
 

CREATE TABLE employee (
	employee_no integer PRIMARY KEY,
	last_name_kanji varchar,
	first_name_kanji varchar,
	last_name_hurigana varchar,
	first_name_hurigana varchar,
	last_name_english varchar,
	first_name_english varchar,
	birthdate date,
	gender varchar,
	mynumber varchar,
	mail_company varchar,
	mail_private varchar,
	join_date date,
	passport_no varchar REFERENCES  passport (passport_no) ON UPDATE CASCADE,
	residence_no varchar REFERENCES residence (residence_no) ON UPDATE CASCADE,
	account_no varchar REFERENCES account (account_no) ON UPDATE CASCADE,
	department_id integer REFERENCES department (department_id) ON UPDATE CASCADE
);

alter table employee
drop constraint employee_department_id_fkey,
add constraint employee_department_id_fkey
   foreign key (department_id)
   references department(department_id)
   on delete cascade;




CREATE TABLE contact
(
    employee_no integer REFERENCES employee (employee_no),
    cellphone_no varchar,
    post_no varchar,
    address varchar,
    phone_no varchar,
    address_mother_country varchar,
    post_no_mother_country varchar,
    cellphone_no_mother_country varchar,
    phone_no_mother_country varchar,
    cellphone_no_emergency varchar,
    name_emergency varchar,
    relation_emergency varchar,
	PRIMARY KEY(employee_no, cellphone_no)
);






CREATE TABLE academic_career (
	employee_no integer REFERENCES employee (employee_no),
	graduation_date date,
	school varchar,
	major varchar
);

CREATE TABLE education_institute (
	employee_no integer REFERENCES employee (employee_no),
	education_start_date date,
	institution_name varchar,
	course_name varchar
);

CREATE TABLE career (
	employee_no integer REFERENCES employee (employee_no),
	career_join_date date,
	career_exit_date date,
	company_name varchar,
	position varchar,
	task varchar,
	is_abroad varchar
);





insert into department values (0, '開発本部', '開発1部', '1ユニット');
insert into department values (1, '開発本部', '開発1部', '2ユニット');
insert into department values (2, '開発本部', '開発2部', '1ユニット');
insert into department values (3, '開発本部', '開発2部', '2ユニット');

drop table career;
drop table academic_career;
drop table contact;
drop table employee;
drop table passport;
drop table residence;
drop table account;
drop table department;



select * from career,employee
where employee.employee_no = career.employee_no 

delete from contact
where employee_no = '210888'

delete from employee
where employee_no != '210555'

delete from account
where account_no = '1280412804'

delete from residence
where residence_no != '1293012830'

delete from passport
where passport_no != '123123'

ROLLBACK;

ALTER TABLE unit
DROP CONSTRAINT unit_pkey,
ADD CONSTRAINT unit_pkey
   FOREIGN KEY (account_no)
   REFERENCES account(account_no)
   ON DELETE SET NULL