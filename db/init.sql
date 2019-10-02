-- gamer info table
create table gamer_info
(
    id serial primary key,
    email text not null,
    password text not null,
    username text not null
);
-- inserting info
insert into gamer_info
    (email, password, username)
values
    ('austinc@gmail.com', '1234', 'austinc');
-- inventory table
create table gamer_inventory
(
    id serial primary key,
    title text not null,
    img text not null,
    price integer not null,
    info text not null,
    inCart boolean not null,
    items integer not null,
    total integer not null
);
-- inventory
insert into gamer_inventory
(title, img, price, info, inCart, items, total)
values
(
    'Twitch Unisex Rising Glitch Hoodie - Black',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915373/gamemerch/blackandpurptwitchhoodie_dabzcv.jpg',
    45,
    'Stay cozy and show your Twitch pride with this rising glitch design as well as sleeve detailing. Machine wash cold, inside out, gentle cycle with mild detergent and similar colors. Use non-chlorine bleach, only when necessary. Tumble dry low, or hang-dry for longest life. Medium iron. Do not iron decoration. Do not dry clean Standard fit, Ring-Spun Cotton blend screenprinted with soft waterbased ink',
    false,
    0,
    0
),
(
    'Twitch Glitch Pillow Plush',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915373/gamemerch/glitchpillow_x3vfzx.jpg',
    20,
    'Minky purple Glitch shaped pillow plush with a patch applique Glitch in minky white. Surface Clean Only. 100% Poly',
    false,
    0,
    0
),
(
    'Twitch Unisex Glitch Hoodie',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915373/gamemerch/blacktwitchhood_mfsbkp.jpg',
    45,
    'Stay cozy with this new hoodie! Featuring a bright gradient glitch with sleeve detail. Machine wash cold, inside out, gentle cycle with mild detergent and similar colors. Use non-chlorine bleach, only when necessary. Tumble dry low, or hang-dry for longest life. Medium iron. Do not iron decoration. Do not dry clean. Standard fit, Ring-Spun Cotton blend screenprinted with soft waterbased ink',
    false,
    0,
    0
),
(
    'Twitch Logo Adult Onesie',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915375/gamemerch/twitchonesie_ow2tqu.jpg',
    30,
    'Twitch purple adult onesie pajama with front pockets and thumb holes. Twitch logo printed on front chest. Glitch printed on back. One front center zipper. Wash with cold water. Do not bleach. Tumble dry low. Do not iron. Do not dry clean. 60% Cotton. 40% Polyester',
    false,
    0,
    0
),
(
    'Twitch Glitch Sweatpants',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915375/gamemerch/twitchsweatpants_wntzfp.jpg',
    25,
    'Lounge around and show your Twitch pride in our ultra-comfy sweatpants available in both grey and navy. Machine wash cold, inside out, gentle cycle with mild detergent and similar colors. Use non-chlorine bleach, only when necessary. Tumble dry low, or hang-dry for longest life. Medium iron. Do not iron decoration. Do not dry clean. Standard fit, Ring-Spun Cotton blend screenprinted with soft waterbased ink',
    false,
    0,
    0
),
(
    'Twitch Logo Mens Tee',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915374/gamemerch/purpletshirt_kumli1.jpg',
    10,
    '100% Cotton. Machine wash warm, inside out, with like colors. Only non-chlorine bleach.Tumble dry low. Medium iron. Do not iron decoration. Do not dry clean. Standard Fit 100% Combed and Ring-Spun Cotton',
    false,
    0,
    0
),
(
    'Overwatch Logo Athletic Akle Socks',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915374/gamemerch/overwatchsocks_b7k4rs.jpg',
    11.99,
    '85% cotton, 10% nylon, 5% spandex. UNIVERSAL FIT. AUTHENTIC BLIZZARD GEAR - Offiacially licensed Overwatch video game apparal',
    false,
    0,
    0
),
(
    'Overwatch Game Youth Jogger Sweatpants',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915375/gamemerch/overwatchsweats_fkrw4q.jpg',
    20.99,
    'made with 100% cotton. Very soft handfeel. Athletic sweatpants or for causal wear',
    false,
    0,
    0
),
(
    'Dr. Disrespect T Shirt',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915374/gamemerch/disrespectshirt_ixymv4.jpg',
    100,
    '100% Cotton. 100% Increase in Violence, Speed, and Momentum',
    false,
    0,
    0
),
(
    'Message Deleted Mens Tee',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915567/gamemerch/messagedeleted_qn5d7a.jpg',
    10,
    'S/S crew neck tee with "message deleted" screenprinted on front. Glitch on sleeve. Machine wash warm, inside out, with like colors. Only non-chlorine bleach.Tumble dry low. Medium iron. Do not iron decoration. Do not dry clean. Standard Fit. 100% Combed and Ring-Spun Cotton',
    false,
    0,
    0
),
(
    'Counter Strike Global Offensice CSGO Crew T Shirt',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915374/gamemerch/csgotshirt_srjn08.jpg',
    14.99,
    'Made of 100% cotton, very soft and skin friendly material. Youth XS, Youth S, Youth M, Youth L, Youth XL 5 Size Can be Chosen and Ultra-realistic Print Short Sleeve Crew Tees. It Will Be Perfect to Pair with Leggings or Jeans for a Casual Yet Trendy Look. Shipping Usually Takes 7-15 Days To Reach You, Maybe Faster, Wait with Patience, Wish You Have A Good Shopping',
    false,
    0,
    0
),
(
    'G Fuel Blackberry By Dr Disrespect',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915375/gamemerch/gfueldr_wntqmy.jpg',
    29.99,
    'Sugar-Free, and tastes great (Seriously it Tastes Awesome). Formulated out of necessity to give you "in the moment" focus, driven by a calm consistent energy. Provides you with hours of good, clean energy and focus without the dreaded crash. Compounded with antioxidants deriving from 19 different fruits. G fuel gives you the energy you need to better handle whatever life decides to throw your way',
    false,
    0,
    0
),
(
    'LAMO 5 Vinyl Figure Summit1G Bobble Head',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915375/gamemerch/summitbobble_tmynbb.jpg',
    1,
    '5” Stylized Summit1g figure comes with a unique, one-time-use QR card that unlocks the character in the free LAMO: AR VINYL app. LAMO is a fast paced, free-to-play, online multiplayer party game. Collect, display, and play with all LAMO vinyl figures',
    false,
    0,
    0
),
(
    'Pepega Morning Coffee Mug',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915374/gamemerch/pepegacup_jfbuge.jpg',
    1,
    'DESIGN: The marble ceramic coffee mug is not too small or too big. Design is funny, unique and fit for all users. A great conversation starter- printed on both sides. We uphold strict quality control in printing to make the high and safe quality of product. MATERIAL: Made from good ceramic, safe, non-toxic, and durable for daily use. This high quality 11oz, 15oz ceramic mugs is perfect for all hot & cold beverages. Use for microwave and dishwasher are safe.',
    false,
    0,
    0
),
(
    'Glitch Black Snapback',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915373/gamemerch/glitchblackhat_tfbg4b.jpg',
    10,
    'Flat brim cap, with purple Glitch embroidery on front. Purple top brim with clear gloss/black emote regex print on the under brim. Adjustable plastic snap. Do not wash, bleach, or iron. Spot clean only. Snapback. 80% Acrylic, 20% Wool',
    false,
    0,
    0
),
(
    'monkaS Shirt',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915373/gamemerch/monkas_f9aoku.jpg',
    15,
    'Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester. Machine wash cold with like colors, dry low heat. funny meme tee, monka, monkaS',
    false,
    0,
    0
),
(
    'Gucci Halloween Taco Costume',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915375/gamemerch/tacosuit_dpixmb.jpg',
    999,
    'Taco Costume for Men and Women, includes One-Piece Pull over Costume Tunic! Unisex Taco Outfit Halloween Costume Deluxe Set. Realistic Looking, Super Durable. Superior Quality. 100% Polyester. Hand Wash. Safety Test Approved. Taco Shell Print Continues on Back. Super Value Pack for Food Adult Taco Costume Role Play and Party Supplies. Excellent for Halloween Costumes Dress Up Parties, Tacos Suit Costume Mexican Costume Theme Parties, Funny Food Theme Party Costumes Adult Accessories, Mexican Taco Costume, Lightweight Taco Costume, Food Halloween Costumes Adult, Taco Bell Costume Cosplay, Fast Food outfit Adult, Taco Mascot Costume, Men’s and Women’s Taco costume, Avocado Lettuce Costume, Spicy Hot Sauce costume, Pinata Costume, Games Role Playing, Size: Standard and X-Large',
    false,
    0,
    0
),
(
    'Thug Life Sunglasses',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915375/gamemerch/sunglasses_riylai.jpg',
    499,
    'Be the top boss with these meme making thug life glasses. Always thug life responsibly. Great gag gift for the gamer, meme-enthusiast or troll in your life. These pixel glasses are great for Minecraft parties and conventions! The pixel design is perfect for anyone looking for some 8-bit style!',
    false,
    0,
    0
),
(
    'Chug Jug',
    'https://res.cloudinary.com/dbhzcqzuh/image/upload/v1568915374/gamemerch/chugjug_dqiasu.jpg',
    10,
    'BOTTLE ROYALE – This game-themed, 16oz Water Bottle Royale is designed to restore your hydration health and water your parched shield. Slurp away! VIDEOGAME ON – Do you thirst for victory? Do you think competition is close? Then, this mouthwatering fully-functional water bottle will help ensure that you are the last one standing. FORTIFIED FEATURES – Beautifully designed out of 100% BPA-free plastic, with a silicone grip to keep it from falling out of your hand in battle, this popular water bottle will last through many battles for you to sip from until your parched lips are fully restored.',
    false,
    0,
    0
);
-- previous orders
create table merch_orders
(
    id serial primary key,
    order_date date default now(),
    inventory_id integer references gamer_inventory(id),
    gamer_info_id integer references gamer_info(id)
);
-- details
select title, img, price, info from gamer_inventory;
-- get one item from inventory
select * from gamer_inventory where  gamer_inventory_id = $1;