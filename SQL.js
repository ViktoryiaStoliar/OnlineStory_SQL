{
//     create database onlinestory;
//     use onlinestory;
//     create table категория_товаров {
// 	        id INT PRIMARY KEY AUTO_INCREMENT,
//          product_category VARCHAR(40) NOT NULL
//     };
//     SELECT * FROM onlinestory.категория_товаров;
//     INSERT INTO категория_товаров(product_category) VALUES('молочные продукты');
}

// {use onlinestory;

// create table products (
// 	product_id INT PRIMARY KEY AUTO_INCREMENT,
// 	категория_товаров_id int not null,
//     product_name VARCHAR(20) NOT NULL,
//     producer_producer_id int not null,
//     price FLOAT NOT NULL,
//     amount INT NOT NULL,
    
//     foreign key (категория_товаров_id) references категория_товаров (id) on delete cascade,
//     foreign key (producer_producer_id) references producer (producer_id) on delete cascade
// );

// select * from категория_товаров;
// select * from products;

// create table producer (
// 	producer_id INT PRIMARY KEY AUTO_INCREMENT,
//     title VARCHAR(20) NOT NULL
// );

// create table cliens(
// 	client_id INT PRIMARY KEY AUTO_INCREMENT,
//     first_name varchar(30) not null,
//     last_name varchar(30) not null,
//     phone varchar(20) not null,
//     address varchar(50) not null
// );

// create table payment(
// 	payment_id INT PRIMARY KEY AUTO_INCREMENT,
//     methodOfPayment varchar(30) not null
// );
 
// create table orders (
// 	orders_id INT PRIMARY KEY AUTO_INCREMENT,
// 	категория_товаров_id int not null,
//     products_product_id int not null,
//     deliveryTime datetime not null,
//     payment_payment_id int not null,
//     producer_producer_id int not null,
//     clients_client_id int not null,
    
// 	foreign key (категория_товаров_id) references категория_товаров (id) on delete cascade,
//     foreign key (products_product_id) references products (product_id) on delete cascade,
//     foreign key (payment_payment_id) references payment (payment_id) on delete cascade,
//     foreign key (producer_producer_id) references producer (producer_id) on delete cascade,
// 	foreign key (clients_client_id) references clients (client_id) on delete cascade
// );

// select * from orders;
// select * from категория_товаров;
// select * from products;
// select * from clients;
// select * from  producer;
// select * from payment;
// insert into категория_товаров (product_category) values ("молочные продукты"), ("мясные продукты");
// insert into products (категория_товаров_id, product_name, producer_producer_id, price, amount) values (1, "молоко", 3, "1.12", 10), 
// (1, "кефир", 3, "0.99", 10), (1, "масло", 4, 4, 12), (2, "курица", 2, 10, 50), (2, "свинина", 1, 15, 50), (2, "говядина", 1, 25, 50);
// insert into producer (title) values ("пинские фермеры"), ("снов"), ("бабушкина крынка"), ("малочны гасцинец");
// insert into payment (methodOfPayment) values ("наличный"), ("безналичный");
// insert into clients (first_name, last_name, phone, address) values ("Столяр", "Виктория", "+375-29-821-08-23", "Сердича, 91");
// insert into orders (категория_товаров_id, products_product_id, deliveryTime, payment_payment_id, producer_producer_id,  clients_client_id) values (1, 2, "2023-11-08 10:00:00", 2, 1, 1);
