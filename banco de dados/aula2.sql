use employees;
SET SQL_SAFE_UPDATES =0;
update employees set last_name = "Rohod" where last_name = "Santos Rohod";
select * from employees where last_name = "Rohod";