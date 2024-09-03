
-- Inserting data into drivers
INSERT INTO `demenagego`.`drivers` (name, lastname, image, truck, images_truck, mail, password, price, isActive, isConfirmed, photoOfcin, photoOfdriverLicence, carteGrise, experience, createdAt, updatedAt) VALUES
('Omar', 'Al-Farsi', 'https://umet.univ-lille.fr/Images/pers-652.jpg', 'grand camion', '["http://example.com/trucks/omar_truck1.jpg", "http://example.com/trucks/omar_truck2.jpg"]', 'omar.alfarsi@gmail.com', 'Password123@', 1800.00, true, true, 'http://example.com/photos/omar_cin.jpg', 'http://example.com/photos/omar_license.jpg', 'http://example.com/photos/omar_carte.jpg', '7 years', NOW(), NOW()),
('Fatima', 'Al-Mansoori', 'https://grains.org/wp-content/uploads/2019/10/Sawsen-Nacef-WEB.jpg', 'petit camion', '["http://example.com/trucks/fatima_truck1.jpg", "http://example.com/trucks/fatima_truck2.jpg"]', 'fatima.almansoori@yahoo.com', 'Password123@', 1600.00, true, false, 'http://example.com/photos/fatima_cin.jpg', 'http://example.com/photos/fatima_license.jpg', 'http://example.com/photos/fatima_carte.jpg', '4 years', NOW(), NOW()),
('Ali', 'Al-Hamadi', 'https://umet.univ-lille.fr/Images/pers-719.jpg', 'grand fourgon', '["http://example.com/trucks/ali_truck1.jpg", "http://example.com/trucks/ali_truck2.jpg"]', 'ali.alhamadi@hotmail.com', 'Password123@', 2000.00, true, true, 'http://example.com/photos/ali_cin.jpg', 'http://example.com/photos/ali_license.jpg', 'http://example.com/photos/ali_carte.jpg', '10 years', NOW(), NOW()),
('Aisha', 'Al-Sayed', 'https://media.licdn.com/dms/image/v2/C4E03AQGnG8_rcG8QWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1651578563645?e=2147483647&v=beta&t=M9wl__l7qJFEJ3zmCpdaSzLLF_GP6LMssciDihyKCjE', 'petit utilitaire', '["http://example.com/trucks/aisha_truck1.jpg", "http://example.com/trucks/aisha_truck2.jpg"]', 'aisha.alsayed@outlook.com', 'Password123@', 1400.00, true, false, 'http://example.com/photos/aisha_cin.jpg', 'http://example.com/photos/aisha_license.jpg', 'http://example.com/photos/aisha_carte.jpg', '2 years', NOW(), NOW()),
('Youssef', 'Al-Najjar', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmH6JEGOmtPHAwn_Ej_0gjx-kqKpi3-lf_BEkhkpwtICs8MPaalROd-md5S3hyHY1tOzs&usqp=CAU', 'grand camion', '["http://example.com/trucks/youssef_truck1.jpg", "http://example.com/trucks/youssef_truck2.jpg"]', 'youssef.alnajjar@gmail.com', 'Password123@', 1750.00, true, true, 'http://example.com/photos/youssef_cin.jpg', 'http://example.com/photos/youssef_license.jpg', 'http://example.com/photos/youssef_carte.jpg', '6 years', NOW(), NOW()),
('Layla', 'Al-Khalidi', 'https://0.academia-photos.com/37061836/18443376/31153529/s200_sawsen.drine.jpg', 'petit camion', '["http://example.com/trucks/layla_truck1.jpg", "http://example.com/trucks/layla_truck2.jpg"]', 'layla.alkhalidi@yahoo.com', 'Password123@', 1550.00, true, false, 'http://example.com/photos/layla_cin.jpg', 'http://example.com/photos/layla_license.jpg', 'http://example.com/photos/layla_carte.jpg', '3 years', NOW(), NOW()),
('Zaid', 'Al-Mahmoud', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCx_XVYB48UMUt3eRE5P4yLzA5yiJiArBkCw&s', 'grand fourgon', '["http://example.com/trucks/zaid_truck1.jpg", "http://example.com/trucks/zaid_truck2.jpg"]', 'zaid.almahmoud@hotmail.com', 'Password123@', 1900.00, true, true, 'http://example.com/photos/zaid_cin.jpg', 'http://example.com/photos/zaid_license.jpg', 'http://example.com/photos/zaid_carte.jpg', '8 years', NOW(), NOW()),
('Nora', 'Al-Rashid', 'https://media.licdn.com/dms/image/C4E03AQGgxBI88mdILQ/profile-displayphoto-shrink_200_200/0/1601311401259?e=2147483647&v=beta&t=2vwL-EcaKO-_iQr8ZtftcaDB1ka6zmuJRTu5MQRc0gY', 'petit utilitaire', '["http://example.com/trucks/nora_truck1.jpg", "http://example.com/trucks/nora_truck2.jpg"]', 'nora.alrashid@outlook.com', 'Password123@', 1450.00, true, false, 'http://example.com/photos/nora_cin.jpg', 'http://example.com/photos/nora_license.jpg', 'http://example.com/photos/nora_carte.jpg', '1 year', NOW(), NOW()),
('Hassan', 'Al-Sabah', 'https://icls.columbia.edu/wp-content/uploads/sites/12/2022/07/image0-1.jpeg', 'grand camion', '["http://example.com/trucks/hassan_truck1.jpg", "http://example.com/trucks/hassan_truck2.jpg"]', 'hassan.alsabah@gmail.com', 'Password123@', 1650.00, true, true, 'http://example.com/photos/hassan_cin.jpg', 'http://example.com/photos/hassan_license.jpg', 'http://example.com/photos/hassan_carte.jpg', '5 years', NOW(), NOW()),
('Samira', 'Al-Fahad', 'https://umet.univ-lille.fr/Images/pers-334.jpg', 'petit camion', '["http://example.com/trucks/samira_truck1.jpg", "http://example.com/trucks/samira_truck2.jpg"]', 'samira.alfahad@yahoo.com', 'Password123@', 1500.00, true, false, 'http://example.com/photos/samira_cin.jpg', 'http://example.com/photos/samira_license.jpg', 'http://example.com/photos/samira_carte.jpg', '2 years', NOW(), NOW()),
('Khalid', 'Al-Jabari', 'https://www.surrey.ac.uk/sites/default/files/styles/diamond_shape_250x250/public/2022-09/mahdi-boloursaz-mashhadi.jpg?itok=pZV67wL6', 'grand fourgon', '["http://example.com/trucks/khalid_truck1.jpg", "http://example.com/trucks/khalid_truck2.jpg"]', 'khalid.aljabari@hotmail.com', 'Password123@', 1850.00, true, true, 'http://example.com/photos/khalid_cin.jpg', 'http://example.com/photos/khalid_license.jpg', 'http://example.com/photos/khalid_carte.jpg', '9 years', NOW(), NOW()),
('Maya', 'Al-Qadi', 'http://example.com/images/maya.jpg', 'petit utilitaire', '["http://example.com/trucks/maya_truck1.jpg", "http://example.com/trucks/maya_truck2.jpg"]', 'maya.alqadi@outlook.com', 'Password123@', 1400.00, true, false, 'http://example.com/photos/maya_cin.jpg', 'http://example.com/photos/maya_license.jpg', 'http://example.com/photos/maya_carte.jpg', '3 years', NOW(), NOW()),
('Rami', 'Al-Hassan', 'https://media.licdn.com/dms/image/D4D03AQH_rpQwisjRXg/profile-displayphoto-shrink_400_400/0/1707578863706?e=2147483647&v=beta&t=A6SrHLJySKj1i1W9_1EFn6ZgZRf9I_znHWMg3syl2-U', 'grand camion', '["http://example.com/trucks/rami_truck1.jpg", "http://example.com/trucks/rami_truck2.jpg"]', 'rami.alhassan@gmail.com', 'Password123@', 1700.00, true, true, 'http://example.com/photos/rami_cin.jpg', 'http://example.com/photos/rami_license.jpg', 'http://example.com/photos/rami_carte.jpg', '6 years', NOW(), NOW());

-- Inserting data into users
INSERT INTO `demenagego`.`users` (name, lastname, image, email, password, createdAt, updatedAt) VALUES
('Zain', 'Al-Farsi', 'http://example.com/images/zain.jpg', 'zain.alfarsi@gmail.com', 'Password123@', NOW(), NOW()),
('Lina', 'Al-Mansoori', 'http://example.com/images/lina.jpg', 'lina.almansoori@yahoo.com', 'Password123@', NOW(), NOW()),
('Rami', 'Al-Hamadi', 'http://example.com/images/rami_user.jpg', 'rami.alhamadi@hotmail.com', 'Password123@', NOW(), NOW()),
('Nadia', 'Al-Sayed', 'http://example.com/images/nadia.jpg', 'nadia.alsayed@outlook.com', 'Password123@', NOW(), NOW()),
('Samir', 'Al-Najjar', 'http://example.com/images/samir.jpg', 'samir.alnajjar@gmail.com', 'Password123@', NOW(), NOW()),
('Dalia', 'Al-Khalidi', 'http://example.com/images/dalia.jpg', 'dalia.alkhalidi@yahoo.com', 'Password123@', NOW(), NOW()),
('Omar', 'Al-Mahmoud', 'http://example.com/images/omar_user.jpg', 'omar.almahmoud@hotmail.com', 'Password123@', NOW(), NOW()),
('Hala', 'Al-Rashid', 'http://example.com/images/hala.jpg', 'hala.alrashid@outlook.com', 'Password123@', NOW(), NOW()),
('Khaled', 'Al-Sabah', 'http://example.com/images/khaled_user.jpg', 'khaled.alsabah@gmail.com', 'Password123@', NOW(), NOW()),
('Amina', 'Al-Fahad', 'http://example.com/images/amina_user.jpg', 'amina.alfahad@yahoo.com', 'Password123@', NOW(), NOW()),
('Tariq', 'Al-Jabari', 'http://example.com/images/tariq_user.jpg', 'tariq.aljabari@hotmail.com', 'Password123@', NOW(), NOW()),
('Maya', 'Al-Qadi', 'http://example.com/images/maya_user.jpg', 'maya.alqadi@outlook.com', 'Password123@', NOW(), NOW()),
('Yasmin', 'Al-Muhtadi', 'http://example.com/images/yasmin_user.jpg', 'yasmin.almuhtadi@gmail.com', 'Password123@', NOW(), NOW()),
('Hassan', 'Al-Mansouri', 'http://example.com/images/hassan_user.jpg', 'hassan.almansouri@yahoo.com', 'Password123@', NOW(), NOW()),
('Layla', 'Al-Zahrani', 'http://example.com/images/layla_user.jpg', 'layla.alzahrani@hotmail.com', 'Password123@', NOW(), NOW()),
('Zaid', 'Al-Mahdi', 'http://example.com/images/zaid_user.jpg', 'zaid.almahdi@gmail.com', 'Password123@', NOW(), NOW()),
('Rania', 'Al-Saleh', 'http://example.com/images/rania.jpg', 'rania.alsaleh@yahoo.com', 'Password123@', NOW(), NOW()),
('Faisal', 'Al-Mahmoud', 'http://example.com/images/faisal.jpg', 'faisal.almahmoud@hotmail.com', 'Password123@', NOW(), NOW()),
('Sahar', 'Al-Hassan', 'http://example.com/images/sahar.jpg', 'sahar.alhassan@gmail.com', 'Password123@', NOW(), NOW()),
('Kareem', 'Al-Jabari', 'http://example.com/images/kareem.jpg', 'kareem.aljabari@yahoo.com', 'Password123@', NOW(), NOW()),
('Nour', 'Al-Fahad', 'http://example.com/images/nour.jpg', 'nour.alfahad@hotmail.com', 'Password123@', NOW(), NOW());

-- Inserting data into ratings
INSERT INTO `demenagego`.`ratings` (id, value, createdAt, updatedAt, userId, driverId) VALUES
(1, 4.5, NOW(), NOW(), 1, 1),  -- Zain rates Omar
(2, 3.8, NOW(), NOW(), 2, 1),  -- Lina rates Omar
(3, 5.0, NOW(), NOW(), 3, 2),  -- Rami rates Fatima
(4, 4.0, NOW(), NOW(), 4, 2),  -- Nadia rates Fatima
(5, 3.5, NOW(), NOW(), 5, 3),  -- Samir rates Ali
(6, 4.2, NOW(), NOW(), 6, 3),  -- Dalia rates Ali
(7, 4.8, NOW(), NOW(), 7, 1),  -- Omar rates Omar
(8, 3.9, NOW(), NOW(), 8, 2),  -- Hala rates Fatima
(9, 4.6, NOW(), NOW(), 9, 4),  -- Khaled rates Aisha
(10, 5.0, NOW(), NOW(), 10, 5), -- Amina rates Youssef
(11, 4.1, NOW(), NOW(), 11, 6), -- Tariq rates Layla
(12, 3.7, NOW(), NOW(), 12, 7), -- Maya rates Zaid
(13, 4.3, NOW(), NOW(), 13, 8); -- Yasmin rates Nora



-- Inserting data into requests
INSERT INTO `demenagego`.`request` (id, date, duration, longitude, latitude, status, helper, truck_type, property_type, floors, floor_number, telephone, userId, driverId, createdAt, updatedAt) VALUES
(1, '2023-10-01', 30, 10.1815, 36.8065, 'pending', 5, 'grand camion', 'maison', 2, 1, '1234567890', 1, 1, NOW(), NOW()),
(2, '2023-10-02', 45, 10.7603, 34.7404, 'pending', 2, 'petit camion', 'apartement', 3, 2, '0987654321', 2, 2, NOW(), NOW()),
(3, '2023-10-03', 10, 10.6342, 35.8256, 'completed', 3, 'grand fourgon', 'maison', 1, 1, '1122334455', 3, 3, NOW(), NOW()),
(4, '2023-10-04', 10, 10.1010, 35.6782, 'refused', 0, 'petit camion', 'Garde-meuble', 2, 1, '2233445566', 4, 4, NOW(), NOW()),
(5, '2023-10-05', 10, 10.0972, 33.8833, 'completed', 4, 'grand camion', 'maison', 3, 2, '3344556677', 5, 5, NOW(), NOW()),
(6, '2023-10-06', 20, 10.1234, 36.1234, 'completed', 3, 'grand camion', 'maison', 2, 1, '1234567891', 1, 2, NOW(), NOW()),
(7, '2023-10-07', 15, 10.5678, 36.5678, 'pending', 4, 'petit camion', 'apartement', 1, 1, '1234567892', 2, 3, NOW(), NOW()),
(8, '2023-10-08', 25, 10.9101, 36.9101, 'completed', 2, 'grand fourgon', 'maison', 3, 2, '1234567893', 3, 4, NOW(), NOW()),
(9, '2023-10-09', 30, 10.2345, 36.2345, 'refused', 0, 'petit camion', 'Garde-meuble', 2, 1, '1234567894', 4, 5, NOW(), NOW()),
(10, '2023-10-10', 40, 10.6789, 36.6789, 'completed', 5, 'grand camion', 'maison', 3, 2, '1234567895', 5, 1, NOW(), NOW()),
(11, '2023-10-11', 50, 10.3456, 36.3456, 'pending', 2, 'grand fourgon', 'apartement', 2, 1, '1234567896', 1, 2, NOW(), NOW()),
(12, '2023-10-12', 35, 10.4567, 36.4567, 'completed', 3, 'petit camion', 'maison', 1, 1, '1234567897', 2, 3, NOW(), NOW()),
(13, '2023-10-13', 45, 10.5678, 36.5678, 'pending', 4, 'grand camion', 'Garde-meuble', 3, 2, '1234567898', 3, 4, NOW(), NOW()),
(14, '2023-10-14', 20, 10.6789, 36.6789, 'completed', 1, 'petit camion', 'maison', 2, 1, '1234567899', 4, 5, NOW(), NOW()),
(15, '2023-10-15', 30, 10.7890, 36.7890, 'refused', 0, 'grand fourgon', 'apartement', 3, 2, '1234567800', 5, 1, NOW(), NOW());

-- Inserting data into comments
INSERT INTO `demenagego`.`comments` (id, content, date, userId, driverId, createdAt, updatedAt) VALUES
(1, 'Excellent service!', '2023-10-01', 1, 1, NOW(), NOW()),  -- Zain comments on Omar
(2, 'Trés professionnel.', '2023-10-02', 2, 1, NOW(), NOW()),  -- Lina comments on Omar
(3, 'J ai eu une expérience merveilleuse.','2023-10-03', 3, 2, NOW(), NOW()),  -- Rami comments on Fatima
(4, 'Je recommande vivement!', '2023-10-04', 4, 2, NOW(), NOW()),  -- Nadia comments on Fatima
(5, 'Je vais utiliser à nouveau.', '2023-10-05', 5, 3, NOW(), NOW()),  -- Samir comments on Ali
(6, 'Communication excellente!', '2023-10-06', 6, 3, NOW(), NOW()),  -- Dalia comments on Ali
(7, 'Rapide et fiable!', '2023-10-07', 7, 1, NOW(), NOW()),  -- Omar comments on Omar
(8, 'Conducteur très sympathique.', '2023-10-08', 8, 2, NOW(), NOW()),  -- Hala comments on Fatima
(9, 'Le camion était en excellent état.', '2023-10-09', 9, 4, NOW(), NOW()),  -- Khaled comments on Aisha
(10, 'Un plaisir de travailler avec!', '2023-10-10', 10, 5, NOW(), NOW()),  -- Amina comments on Youssef
(11, 'Je vais certainement embaucher à nouveau.', '2023-10-11', 11, 6, NOW(), NOW()),  -- Tariq comments on Layla
(12, 'Très ponctuel!', '2023-10-12', 12, 7, NOW(), NOW()),  -- Maya comments on Zaid
(13, 'Conducteur très compétent.', '2023-10-13', 13, 8, NOW(), NOW()),  -- Yasmin comments on Nora
(14, 'Le processus était facile.', '2023-10-14', 10, 9, NOW(), NOW()),  -- Hassan comments on Hassan
(15, 'Excellente expérience dans l ensemble.', '2023-10-15', 1, 10, NOW(), NOW());  -- Layla comments on Samira



