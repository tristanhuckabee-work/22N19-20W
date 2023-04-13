.mode column
.headers on

-- 1
INSERT INTO customers
(name, phone)
VALUES
('Rachel', 1111111111);
-- 2
SELECT name, points FROM customers
WHERE id = 1;
UPDATE customers
SET points = points + 1
WHERE name = 'Rachel';
INSERT INTO coffee_orders
(id)
VALUES (null);
-- 3
INSERT INTO customers
(name, email, phone)
VALUES
('Monica', 'monica@friends.show', 2222222222),
('Phoebe', 'phoebe@friends.show', 3333333333);
-- 4
UPDATE customers
SET points = points + 3
WHERE name = 'Phoebe';
INSERT INTO coffee_orders (id)
VALUES (null),(null),(null);
-- 5
UPDATE customers
SET points = points + 4
WHERE name = 'Rachel' OR name = 'Monica';
INSERT INTO coffee_orders (id)
VALUES (null),(null),(null),(null),(null),(null),(null),(null);
-- 6
SELECT name, points FROM customers
WHERE name = 'Monica';
-- 7
SELECT name, points FROM customers
WHERE name = 'Rachel';
UPDATE customers
SET points = points - 10
WHERE name = 'Rachel' AND points >= 10;
INSERT INTO coffee_orders (is_redeemed)
VALUES (1);
-- 8
INSERT INTO customers
(name, email)
VALUES
('Joey', 'joey@friends.show'),
('Chandler', 'chandler@friends.show'),
('Ross', 'ross@friends.show');


SELECT * FROM customers;
SELECT * FROM coffee_orders;