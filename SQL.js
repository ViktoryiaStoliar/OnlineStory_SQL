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
// 	категория_товаров_product_category VARCHAR(50) NOT NULL,
//     products_product_name VARCHAR(20) NOT NULL,
// 	products_price FLOAT NOT NULL,
//     products_amount INT NOT NULL,
//     deliveryTime datetime not null,
//     payment_methodOfPayment varchar(30) not null,
//     producer_title VARCHAR(20) NOT NULL,
    
//     foreign key (категория_товаров_product_category) references категория_товаров (product_category) on delete cascade,
//     foreign key (products_product_name) references products (product_name) on delete cascade,
//     foreign key (products_price) references products (product_price) on delete cascade,
//     foreign key (products_amount) references products (product_amount) on delete cascade,
//     foreign key (payment_methodOfPayment) references payment (methodOfPayment) on delete cascade,
//     foreign key (producer_title) references producer (title) on delete cascade
// );
