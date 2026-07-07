/* ================================================================
   JAFFEIZ RESTAURANT — Complete JavaScript
   ================================================================
   Features: Loading screen, particles, typing effect, menu filter,
   cart system, coupon, booking/billing flow, review carousel,
   scroll animations, mobile nav, promo banner.
   ================================================================ */

'use strict';

// ================================================================
// 1. DATA — Menu Items & Reviews
// ================================================================

/** Array of menu items for the categorized menu (affordable PKR prices) */
const menuData = [
    // ---- Pakistani Meals ----
    {
        id: 1,
        name: 'Chicken Biryani',
        category: 'pakistani',
        description: 'Fragrant basmati rice layered with tender chicken, aromatic spices, and saffron.',
        price: 650,
        image: 'https://source.unsplash.com/400x300/?biryani,rice,chicken'
    },
    {
        id: 2,
        name: 'Beef Korma',
        category: 'pakistani',
        description: 'Slow-cooked tender beef in a rich, creamy yogurt and cashew gravy.',
        price: 750,
        image: 'https://source.unsplash.com/400x300/?korma,curry,beef'
    },
    {
        id: 3,
        name: 'Chicken Karahi',
        category: 'pakistani',
        description: 'Sizzling wok-cooked chicken with tomatoes, ginger, and green chilies.',
        price: 700,
        image: 'https://source.unsplash.com/400x300/?chicken,curry,gravy'
    },
    {
        id: 4,
        name: 'Lamb Pulao',
        category: 'pakistani',
        description: 'Fragrant rice with tender lamb, caramelized onions, and warm spices.',
        price: 800,
        image: 'https://source.unsplash.com/400x300/?pulao,rice,lamb'
    },
    {
        id: 5,
        name: 'Daal Chawal',
        category: 'pakistani',
        description: 'Comforting lentils simmered with garlic and cumin, served over steamed rice.',
        price: 400,
        image: 'https://source.unsplash.com/400x300/?lentils,dal,rice'
    },
    {
        id: 6,
        name: 'Seekh Kebab',
        category: 'pakistani',
        description: 'Spiced minced meat skewers grilled to perfection on the tandoor.',
        price: 550,
        image: 'https://source.unsplash.com/400x300/?kebab,grilled,meat-skewers'
    },
    // ---- Desi (Pakistani Household) ----
    {
        id: 49,
        name: 'Besan Ki Roti',
        category: 'desi',
        description: 'Traditional gram flour flatbread served with spicy lal chatni — a rustic Pakistani household staple.',
        price: 250,
        image: 'https://source.unsplash.com/400x300/?roti,flatbread,chapati'
    },
    {
        id: 50,
        name: 'Spicy Lal Chatni',
        category: 'desi',
        description: 'Fiery red chili chutney made with fresh red chilies, garlic, and tangy tamarind — the perfect accompaniment.',
        price: 100,
        image: 'https://source.unsplash.com/400x300/?chutney,sauce,red-chili'
    },
    {
        id: 51,
        name: 'Aloo Ki Tarkari',
        category: 'desi',
        description: 'Comforting potato curry cooked with turmeric, cumin, and fresh coriander — a beloved desi ghar ka khana.',
        price: 300,
        image: 'https://source.unsplash.com/400x300/?potato,curry,vegetable'
    },
    {
        id: 52,
        name: 'Aloo Ke Parathe',
        category: 'desi',
        description: 'Stuffed whole wheat flatbreads filled with spiced mashed potatoes, pan-fried to golden perfection.',
        price: 350,
        image: 'https://source.unsplash.com/400x300/?paratha,flatbread,stuffed-bread'
    },
    {
        id: 53,
        name: 'Bhindi Ki Sabzi',
        category: 'desi',
        description: 'Tender okra stir-fried with onions, tomatoes, and aromatic spices — a classic Pakistani vegetable dish.',
        price: 280,
        image: 'https://source.unsplash.com/400x300/?okra,green-vegetables,cooking'
    },
    {
        id: 54,
        name: 'Baingan Ki Sabzi',
        category: 'desi',
        description: 'Smoky eggplant curry simmered with tomatoes, garlic, and traditional spices — pure desi comfort.',
        price: 280,
        image: 'https://source.unsplash.com/400x300/?eggplant,brinjal,roasted'
    },
    {
        id: 55,
        name: 'Roti (Tandoori)',
        category: 'desi',
        description: 'Freshly baked tandoori whole wheat flatbread — soft, fluffy, and slightly charred.',
        price: 50,
        image: 'https://source.unsplash.com/400x300/?tandoori-bread,naan,indian-bread'
    },
    {
        id: 56,
        name: 'Lassi (Sweet / Salty)',
        category: 'desi',
        description: 'Traditional yogurt-based drink — choose sweet with cardamom or salty with roasted cumin.',
        price: 200,
        image: 'https://source.unsplash.com/400x300/?lassi,yogurt,drink,milkshake'
    },
    // ---- Pizzas ----
    {
        id: 33,
        name: 'Chicken Fajita Pizza',
        category: 'pizza',
        description: 'Grilled chicken, bell peppers, onions, jalapeños, and melted mozzarella on a crispy crust.',
        price: 650,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    {
        id: 34,
        name: 'Pepperoni Pizza',
        category: 'pizza',
        description: 'Classic pepperoni slices with rich tomato sauce and gooey mozzarella cheese.',
        price: 600,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    {
        id: 35,
        name: 'BBQ Chicken Pizza',
        category: 'pizza',
        description: 'Tangy BBQ sauce base topped with grilled chicken, red onions, cilantro, and cheese.',
        price: 700,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    {
        id: 36,
        name: 'Margherita Pizza',
        category: 'pizza',
        description: 'Simple and elegant — fresh mozzarella, basil, and tomato sauce on a thin, crispy base.',
        price: 500,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    {
        id: 37,
        name: 'Supreme Pizza',
        category: 'pizza',
        description: 'Loaded with pepperoni, sausage, bell peppers, onions, olives, mushrooms, and extra cheese.',
        price: 750,
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    {
        id: 38,
        name: 'Cheese Lovers Pizza',
        category: 'pizza',
        description: 'Four-cheese blend of mozzarella, cheddar, parmesan, and feta on a garlic butter base.',
        price: 550,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    {
        id: 39,
        name: 'Veggie Pizza',
        category: 'pizza',
        description: 'Garden-fresh mushrooms, bell peppers, onions, tomatoes, olives, and spinach with cheese.',
        price: 450,
        image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    {
        id: 40,
        name: 'Spicy Beef Pizza',
        category: 'pizza',
        description: 'Seasoned minced beef with jalapeños, chili flakes, onions, and melted mozzarella.',
        price: 680,
        image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=400&q=80',
        sizes: [
            { name: 'Small (8")', priceModifier: 0 },
            { name: 'Medium (12")', priceModifier: 300 },
            { name: 'Large (16")', priceModifier: 600 }
        ]
    },
    // ---- Burgers ----
    {
        id: 41,
        name: 'Zinger Burger',
        category: 'burger',
        description: 'Crispy fried chicken fillet with lettuce, mayo, and tangy sauce in a sesame bun.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    {
        id: 42,
        name: 'Beef Burger',
        category: 'burger',
        description: 'Juicy grilled beef patty with lettuce, tomato, onion rings, and our secret sauce.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    {
        id: 43,
        name: 'Chicken Burger',
        category: 'burger',
        description: 'Grilled chicken breast marinated in herbs, with fresh lettuce, tomato, and garlic mayo.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    {
        id: 44,
        name: 'Double Cheese Burger',
        category: 'burger',
        description: 'Two juicy beef patties with double cheddar cheese, pickles, and special sauce.',
        price: 500,
        image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    {
        id: 45,
        name: 'BBQ Bacon Burger',
        category: 'burger',
        description: 'Smoky bacon strips, caramelized onions, cheddar cheese, and BBQ sauce on a brioche bun.',
        price: 450,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    {
        id: 46,
        name: 'Crispy Chicken Burger',
        category: 'burger',
        description: 'Extra-crispy buttermilk chicken tenders, coleslaw, and ranch dressing in a toasted bun.',
        price: 380,
        image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    {
        id: 47,
        name: 'Mushroom Swiss Burger',
        category: 'burger',
        description: 'Sautéed mushrooms, Swiss cheese, garlic aioli, and arugula on a gourmet beef patty.',
        price: 420,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    {
        id: 48,
        name: 'Jaffeiz Special Burger',
        category: 'burger',
        description: 'Our signature masterpiece — Wagyu beef, truffle aioli, caramelized onions, rocket, and aged cheddar.',
        price: 550,
        image: 'https://images.unsplash.com/photo-1551782450-2132a4ab21d8?w=400&q=80',
        sizes: [
            { name: 'Single Patty', priceModifier: 0 },
            { name: 'Double Patty', priceModifier: 200 },
            { name: 'Triple Patty', priceModifier: 400 }
        ]
    },
    // ---- Drinks (Soft flavors, no spicy, no chai) ----
    {
        id: 8,
        name: 'Espresso',
        category: 'drinks',
        description: 'Rich, bold single-origin espresso shot. Smooth and energizing.',
        price: 200,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 9,
        name: 'Cappuccino',
        category: 'drinks',
        description: 'Velvety espresso with steamed milk foam and a dusting of cocoa.',
        price: 300,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 10,
        name: 'Latte',
        category: 'drinks',
        description: 'Smooth espresso with creamy steamed milk. Available in vanilla or caramel.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 11,
        name: 'Mango Milkshake',
        category: 'drinks',
        description: 'Thick, creamy milkshake made with fresh Alphonso mangoes. Sweet and refreshing.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 12,
        name: 'Chocolate Milkshake',
        category: 'drinks',
        description: 'Decadent chocolate milkshake topped with whipped cream and chocolate shavings.',
        price: 400,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 13,
        name: 'Vanilla Ice Cream Shake',
        category: 'drinks',
        description: 'Creamy vanilla ice cream blended with milk for a smooth, classic shake.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 14,
        name: 'Strawberry Ice Cream Shake',
        category: 'drinks',
        description: 'Fresh strawberry ice cream shaken with milk and a touch of sweetness.',
        price: 380,
        image: 'https://images.unsplash.com/photo-1505253758479-34fbd9f1a0d9?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 15,
        name: 'Mango Ice Cream Float',
        category: 'drinks',
        description: 'Mango ice cream served in chilled soda — a fruity, creamy float.',
        price: 420,
        image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    {
        id: 16,
        name: 'Kulfi Cream',
        category: 'drinks',
        description: 'Traditional kulfi-inspired creamy drink with pistachio and cardamom notes.',
        price: 450,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
        sizes: [
            { name: 'Small (250ml)', priceModifier: 0 },
            { name: 'Medium (350ml)', priceModifier: 100 },
            { name: 'Large (500ml)', priceModifier: 200 }
        ]
    },
    // ---- Ice Creams (Kulfa, Cones, Bars, Jars) ----
    {
        id: 17,
        name: 'Pista Kulfa',
        category: 'ice-cream',
        description: 'Creamy pistachio kulfa with crushed nuts and saffron drizzle.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80',
        sizes: [
            { name: 'Single Scoop', priceModifier: 0 },
            { name: 'Double Scoop', priceModifier: 150 },
            { name: 'Triple Scoop', priceModifier: 300 }
        ]
    },
    {
        id: 18,
        name: 'Mango Kulfa',
        category: 'ice-cream',
        description: 'Rich mango kulfa made with real Alphonso mango pulp and cream.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
        sizes: [
            { name: 'Single Scoop', priceModifier: 0 },
            { name: 'Double Scoop', priceModifier: 150 },
            { name: 'Triple Scoop', priceModifier: 300 }
        ]
    },
    {
        id: 19,
        name: 'Malai Kulfa',
        category: 'ice-cream',
        description: 'Traditional malai kulfa with cardamom, rose water, and slivered almonds.',
        price: 280,
        image: 'https://images.unsplash.com/photo-1570197785657-d9fe21c8cff0?w=400&q=80',
        sizes: [
            { name: 'Single Scoop', priceModifier: 0 },
            { name: 'Double Scoop', priceModifier: 150 },
            { name: 'Triple Scoop', priceModifier: 300 }
        ]
    },
    {
        id: 20,
        name: 'Chocolate Cone',
        category: 'ice-cream',
        description: 'Crispy waffle cone loaded with rich chocolate ice cream and sprinkles.',
        price: 200,
        image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&q=80',
        sizes: [
            { name: 'Regular Cone', priceModifier: 0 },
            { name: 'Large Cone', priceModifier: 100 },
            { name: 'Waffle Cone', priceModifier: 150 }
        ]
    },
    {
        id: 21,
        name: 'Strawberry Cone',
        category: 'ice-cream',
        description: 'Fresh strawberry ice cream in a crunchy cone topped with berry sauce.',
        price: 200,
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80',
        sizes: [
            { name: 'Regular Cone', priceModifier: 0 },
            { name: 'Large Cone', priceModifier: 100 },
            { name: 'Waffle Cone', priceModifier: 150 }
        ]
    },
    {
        id: 22,
        name: 'Chocolate Ice Cream Bar',
        category: 'ice-cream',
        description: 'Creamy vanilla ice cream bar coated in rich Belgian chocolate and nuts.',
        price: 180,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
        sizes: [
            { name: 'Standard Bar', priceModifier: 0 },
            { name: 'Jumbo Bar', priceModifier: 100 },
            { name: 'Family Pack (4 bars)', priceModifier: 350 }
        ]
    },
    {
        id: 23,
        name: 'Mango Ice Cream Bar',
        category: 'ice-cream',
        description: 'Real mango ice cream bar with a tangy fruit coating and crunchy bits.',
        price: 180,
        image: 'https://images.unsplash.com/photo-1570197785657-d9fe21c8cff0?w=400&q=80',
        sizes: [
            { name: 'Standard Bar', priceModifier: 0 },
            { name: 'Jumbo Bar', priceModifier: 100 },
            { name: 'Family Pack (4 bars)', priceModifier: 350 }
        ]
    },
    {
        id: 24,
        name: 'Assorted Ice Cream Jar',
        category: 'ice-cream',
        description: 'Premium ice cream jar with layers of your choice — pista, mango, chocolate & more.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80',
        sizes: [
            { name: 'Small Jar (250ml)', priceModifier: 0 },
            { name: 'Medium Jar (500ml)', priceModifier: 200 },
            { name: 'Large Jar (1L)', priceModifier: 450 }
        ]
    },
    {
        id: 25,
        name: 'Family Ice Cream Jar',
        category: 'ice-cream',
        description: 'Giant jar packed with 3 layers of different ice cream flavors, nuts, and sauces.',
        price: 650,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
        sizes: [
            { name: 'Small Jar (250ml)', priceModifier: 0 },
            { name: 'Medium Jar (500ml)', priceModifier: 200 },
            { name: 'Large Jar (1L)', priceModifier: 450 }
        ]
    },
    // ---- Chai Section ----
    {
        id: 26,
        name: 'Karak Chai',
        category: 'chai',
        description: 'Strong, bold Pakistani karak chai brewed with cardamom and evaporated milk.',
        price: 150,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
        sizes: [
            { name: 'Small Cup', priceModifier: 0 },
            { name: 'Medium Cup', priceModifier: 50 },
            { name: 'Large Cup', priceModifier: 100 }
        ]
    },
    {
        id: 27,
        name: 'Doodh Patti',
        category: 'chai',
        description: 'Classic milk tea brewed strong with premium tea leaves and sweetened to perfection.',
        price: 150,
        image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&q=80',
        sizes: [
            { name: 'Small Cup', priceModifier: 0 },
            { name: 'Medium Cup', priceModifier: 50 },
            { name: 'Large Cup', priceModifier: 100 }
        ]
    },
    {
        id: 28,
        name: 'Kashmiri Chai',
        category: 'chai',
        description: 'Beautiful pink-hued chai with crushed pistachios, almonds, and a hint of cardamom.',
        price: 200,
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80',
        sizes: [
            { name: 'Small Cup', priceModifier: 0 },
            { name: 'Medium Cup', priceModifier: 50 },
            { name: 'Large Cup', priceModifier: 100 }
        ]
    },
    {
        id: 29,
        name: 'Adrak Chai',
        category: 'chai',
        description: 'Ginger-infused chai with fresh grated ginger, warming spices, and creamy milk.',
        price: 180,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
        sizes: [
            { name: 'Small Cup', priceModifier: 0 },
            { name: 'Medium Cup', priceModifier: 50 },
            { name: 'Large Cup', priceModifier: 100 }
        ]
    },
    {
        id: 30,
        name: 'Elaichi Chai',
        category: 'chai',
        description: 'Fragrant cardamom chai with crushed green cardamom pods and a touch of honey.',
        price: 180,
        image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&q=80',
        sizes: [
            { name: 'Small Cup', priceModifier: 0 },
            { name: 'Medium Cup', priceModifier: 50 },
            { name: 'Large Cup', priceModifier: 100 }
        ]
    },
    {
        id: 31,
        name: 'Sulemani Chai',
        category: 'chai',
        description: 'Light, aromatic lemon tea with a hint of mint — refreshing and soothing.',
        price: 160,
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80',
        sizes: [
            { name: 'Small Cup', priceModifier: 0 },
            { name: 'Medium Cup', priceModifier: 50 },
            { name: 'Large Cup', priceModifier: 100 }
        ]
    },
    {
        id: 32,
        name: 'Special Jaffeiz Chai',
        category: 'chai',
        description: 'Our signature blend — a secret mix of premium teas, spices, and condensed milk.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
        sizes: [
            { name: 'Small Cup', priceModifier: 0 },
            { name: 'Medium Cup', priceModifier: 50 },
            { name: 'Large Cup', priceModifier: 100 }
        ]
    }
];

/** Array of fake reviews for the carousel */
const reviewsData = [
    {
        name: 'Sarah Al-Mansouri',
        location: 'Dubai, UAE',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        stars: 5,
        text: 'Absolutely phenomenal! The Chicken Biryani at Jaffeiz transported me straight to Lahore. The aroma, the spices, the tenderness of the meat — perfection. And their Chai? Out of this world. I had it delivered to Dubai and it arrived hot and fresh. Jaffeiz has earned a lifelong customer.'
    },
    {
        name: 'James Mitchell',
        location: 'London, UK',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        stars: 5,
        text: 'I\'ve traveled the world and tasted cuisine from every corner, but Jaffeiz holds a special place in my heart. Their pizzas are outstanding — the Supreme Pizza is hands-down the best I\'ve had outside Italy. The worldwide delivery is a game-changer. My family in London gets Jaffeiz delivered weekly now!'
    },
    {
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
        stars: 5,
        text: 'Jaffeiz is not just a restaurant; it\'s an experience. I booked the Romantic Couple dinner for our anniversary and it was magical. The ambiance, the service, the food — every detail was impeccable. Their Zinger Burger and Karak Chai are absolute must-tries! Haider Jaffri has created something truly special.'
    },
    {
        name: 'Ahmed Hassan',
        location: 'Karachi, Pakistan',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        stars: 5,
        text: 'Being from Karachi, I know good food. Jaffeiz exceeds every expectation. Their Chicken Karahi is legendary, the BBQ Chicken Pizza is divine, and the Mango Kulfa is the perfect dessert. The FIFA World Cup promo with 20% off made our family feast even sweeter. Highly recommended!'
    }
];

// ================================================================
// 2. LOADING SCREEN
// ================================================================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 600);
        }, 2000);
    }
});

// ================================================================
// 3. PARTICLE BACKGROUND (Canvas) — Enhanced
// ================================================================

function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 4 + 1;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.speedY = (Math.random() - 0.5) * 0.6;
            this.opacity = Math.random() * 0.6 + 0.1;
            this.pulse = Math.random() * 0.02 + 0.01;
            this.pulseDir = 1;
            this.color = `rgba(212, 175, 55, ${this.opacity})`;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size += this.pulse * this.pulseDir;
            if (this.size > 5 || this.size < 1) this.pulseDir *= -1;
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    const particleCount = Math.min(Math.floor(canvas.width * canvas.height / 12000), 120);
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener('beforeunload', () => { if (animationId) cancelAnimationFrame(animationId); });
}

document.addEventListener('DOMContentLoaded', initParticles);

// ================================================================
// 4. TYPING EFFECT FOR HERO HEADING
// ================================================================

function initTypingEffect() {
    const headingEl = document.getElementById('hero-heading');
    if (!headingEl) return;
    const text = 'Welcome to Jaffeiz – A World of Flavor Awaits.';
    let index = 0, isDeleting = false, speed = 80;

    function type() {
        if (!isDeleting) {
            headingEl.textContent = text.slice(0, index);
            index++;
            if (index > text.length) { isDeleting = true; speed = 40; setTimeout(type, 2000); return; }
        } else {
            headingEl.textContent = text.slice(0, index);
            index--;
            if (index < 0) { isDeleting = false; index = 0; speed = 80; setTimeout(type, 500); return; }
        }
        setTimeout(type, speed);
    }
    setTimeout(type, 2500);
}

document.addEventListener('DOMContentLoaded', initTypingEffect);

// ================================================================
// 5. STICKY NAVIGATION & MOBILE TOGGLE
// ================================================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section[id]');
    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinkItems.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }
    window.addEventListener('scroll', highlightNav);
}

document.addEventListener('DOMContentLoaded', initNavigation);

// ================================================================
// 6. PROMO BANNER DISMISS
// ================================================================

function initPromoBanner() {
    const promoBanner = document.getElementById('promo-banner');
    const promoClose = document.getElementById('promo-close');
    if (promoClose && promoBanner) {
        promoClose.addEventListener('click', () => {
            promoBanner.classList.add('hidden');
            const navbar = document.getElementById('navbar');
            if (navbar) navbar.style.top = '0';
        });
    }
}

document.addEventListener('DOMContentLoaded', initPromoBanner);

// ================================================================
// 7. MENU RENDERING & FILTERING
// ================================================================

/** Map category keys to display labels */
const categoryLabels = {
    'pakistani': 'Pakistani Meal',
    'desi': 'Desi',
    'pizza': 'Pizza',
    'burger': 'Burger',
    'drinks': 'Drink',
    'ice-cream': 'Ice Cream',
    'chai': 'Chai'
};

function initMenu() {
    const menuGrid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!menuGrid) return;

    let currentFilter = 'all';

    function renderMenu(filter) {
        const filtered = filter === 'all'
            ? menuData
            : menuData.filter(item => item.category === filter);

        menuGrid.innerHTML = '';

        filtered.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.style.animationDelay = `${index * 0.1}s`;
            card.dataset.id = item.id;

            const priceFormatted = 'Rs. ' + item.price.toLocaleString('en-PK');
            const label = categoryLabels[item.category] || item.category;

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy" />
                <div class="menu-item-info">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <p class="menu-item-category">${label}</p>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">${priceFormatted}</span>
                        <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                openMealModal(item.id);
            });

            menuGrid.appendChild(card);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                addToCart(id);
            });
        });
    }

    renderMenu('all');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderMenu(currentFilter);
        });
    });
}

document.addEventListener('DOMContentLoaded', initMenu);

// ================================================================
// 7.5 MEAL DETAIL MODAL
// ================================================================

let currentMealId = null;

const extrasPricing = {
    'extra-cheese': 100,
    'extra-meat': 200,
    'extra-sauce': 50,
    'salad': 150
};

function formatPKR(amount) {
    return 'Rs. ' + Math.round(amount).toLocaleString('en-PK');
}

function openMealModal(id) {
    const meal = findMenuItem(id);
    if (!meal) return;
    currentMealId = id;
    const modal = document.getElementById('meal-modal');
    if (!modal) return;

    document.getElementById('meal-qty').value = 1;
    document.getElementById('meal-special-instructions').value = '';
    document.querySelector('input[name="spice-level"][value="medium"]').checked = true;
    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]').forEach(cb => { cb.checked = false; });

    document.getElementById('meal-modal-img').src = meal.image;
    document.getElementById('meal-modal-img').alt = meal.name;
    document.getElementById('meal-modal-name').textContent = meal.name;
    const label = categoryLabels[meal.category] || meal.category;
    document.getElementById('meal-modal-category').textContent = label;
    document.getElementById('meal-modal-price').textContent = formatPKR(meal.price);
    document.getElementById('meal-modal-desc').textContent = meal.description;

    // Handle size selector visibility
    const sizeGroup = document.getElementById('size-selector-group');
    if (meal.sizes && meal.sizes.length > 0) {
        sizeGroup.style.display = 'block';
        const sizeSelect = document.getElementById('meal-size');
        sizeSelect.innerHTML = '';
        meal.sizes.forEach((size, idx) => {
            const option = document.createElement('option');
            option.value = idx;
            option.textContent = size.name + (size.priceModifier > 0 ? ' (+Rs. ' + size.priceModifier + ')' : '');
            sizeSelect.appendChild(option);
        });
        sizeSelect.value = '0';
    } else {
        sizeGroup.style.display = 'none';
    }

    // Show/hide spice options based on category — for Pakistani & Desi meals
    const spiceGroup = document.querySelector('.customization-group .spice-options')?.closest('.customization-group');
    if (spiceGroup) {
        spiceGroup.style.display = (meal.category === 'pakistani' || meal.category === 'desi') ? 'block' : 'none';
    }

    // Show/hide extras based on category — for Pakistani & Desi meals
    const extrasGroup = document.querySelector('.customization-group .extras-options')?.closest('.customization-group');
    if (extrasGroup) {
        extrasGroup.style.display = (meal.category === 'pakistani' || meal.category === 'desi') ? 'block' : 'none';
    }

    updateMealModalTotal();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeMealModal() {
    const modal = document.getElementById('meal-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    currentMealId = null;
}

function updateMealModalTotal() {
    const meal = findMenuItem(currentMealId);
    if (!meal) return;
    const qty = parseInt(document.getElementById('meal-qty').value) || 1;
    let extrasTotal = 0;
    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]:checked').forEach(cb => {
        extrasTotal += extrasPricing[cb.value] || 0;
    });

    let sizeModifier = 0;
    const sizeSelect = document.getElementById('meal-size');
    if (sizeSelect && meal.sizes && meal.sizes.length > 0) {
        const selectedIdx = parseInt(sizeSelect.value);
        if (!isNaN(selectedIdx) && meal.sizes[selectedIdx]) {
            sizeModifier = meal.sizes[selectedIdx].priceModifier;
        }
    }

    const total = (meal.price + extrasTotal + sizeModifier) * qty;
    document.getElementById('meal-modal-total-price').textContent = formatPKR(total);
}

function addMealToCart() {
    if (!currentMealId) return;
    const meal = findMenuItem(currentMealId);
    if (!meal) return;

    const qty = parseInt(document.getElementById('meal-qty').value) || 1;
    const spiceLevel = document.querySelector('input[name="spice-level"]:checked');
    const spice = spiceLevel ? spiceLevel.value : 'medium';
    const extras = [];
    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]:checked').forEach(cb => {
        extras.push(cb.value);
    });
    const instructions = document.getElementById('meal-special-instructions').value.trim();
    let extrasTotal = 0;
    extras.forEach(ext => { extrasTotal += extrasPricing[ext] || 0; });

    let selectedSize = null;
    let sizeModifier = 0;
    const sizeSelect = document.getElementById('meal-size');
    if (sizeSelect && meal.sizes && meal.sizes.length > 0) {
        const selectedIdx = parseInt(sizeSelect.value);
        if (!isNaN(selectedIdx) && meal.sizes[selectedIdx]) {
            selectedSize = meal.sizes[selectedIdx].name;
            sizeModifier = meal.sizes[selectedIdx].priceModifier;
        }
    }

    for (let i = 0; i < qty; i++) {
        const existing = cart.find(item =>
            item.id === currentMealId &&
            item.spice === spice &&
            item.instructions === instructions &&
            JSON.stringify(item.extras) === JSON.stringify(extras) &&
            item.size === selectedSize
        );
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: currentMealId,
                name: meal.name + (selectedSize ? ' (' + selectedSize + ')' : ''),
                price: meal.price + extrasTotal + sizeModifier,
                quantity: 1,
                spice: spice,
                extras: extras,
                instructions: instructions,
                size: selectedSize
            });
        }
    }
    updateCartUI();
    closeMealModal();
    showAddFeedback();
}

function initMealModal() {
    const closeBtn = document.getElementById('meal-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMealModal);
    const modal = document.getElementById('meal-modal');
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeMealModal(); });

    const minusBtn = document.getElementById('meal-qty-minus');
    const plusBtn = document.getElementById('meal-qty-plus');
    const qtyInput = document.getElementById('meal-qty');

    if (minusBtn) minusBtn.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) { qtyInput.value = val - 1; updateMealModalTotal(); }
    });
    if (plusBtn) plusBtn.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val < 20) { qtyInput.value = val + 1; updateMealModalTotal(); }
    });

    document.querySelectorAll('#meal-modal .extras-options input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', updateMealModalTotal);
    });

    const sizeSelect = document.getElementById('meal-size');
    if (sizeSelect) {
        sizeSelect.addEventListener('change', updateMealModalTotal);
    }

    const addBtn = document.getElementById('meal-modal-add-btn');
    if (addBtn) addBtn.addEventListener('click', addMealToCart);

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMealModal(); });
}

document.addEventListener('DOMContentLoaded', initMealModal);

// ================================================================
// 8. SHOPPING CART SYSTEM
// ================================================================

let cart = [];
let couponApplied = false;
let discountPercent = 0;

function findMenuItem(id) {
    return menuData.find(item => item.id === id);
}

function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        const menuItem = findMenuItem(id);
        if (menuItem) {
            cart.push({ id: menuItem.id, name: menuItem.name, price: menuItem.price, quantity: 1 });
        }
    }
    updateCartUI();
    showAddFeedback();
}

function showAddFeedback() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.textContent = '✓ Item Added!';
        setTimeout(() => { checkoutBtn.textContent = 'Proceed to Checkout'; }, 1000);
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) { removeFromCart(id); return; }
    }
    updateCartUI();
}

function getCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (couponApplied && discountPercent > 0) return subtotal * (1 - discountPercent / 100);
    return subtotal;
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCount = document.querySelectorAll('.cart-count');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Start adding delicious meals!</p>';
        totalPrice.textContent = 'Rs. 0';
        if (checkoutBtn) checkoutBtn.disabled = true;
        cartCount.forEach(el => el.textContent = '0');
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <span class="cart-item-name">${item.name}</span>
                <div class="cart-item-qty">
                    <button class="qty-btn" data-id="${item.id}" data-delta="-1">\u2212</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                </div>
                <span class="cart-item-price">${formatPKR(item.price * item.quantity)}</span>
                <button class="cart-item-remove" data-id="${item.id}">&times;</button>
            </div>
        `;
    });

    cartItems.innerHTML = html;

    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const delta = parseInt(btn.dataset.delta);
            updateQuantity(id, delta);
        });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });

    const total = getCartTotal();
    totalPrice.textContent = formatPKR(total);
    if (checkoutBtn) checkoutBtn.disabled = false;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.forEach(el => el.textContent = totalItems);
}

// ================================================================
// 9. COUPON SYSTEM
// ================================================================

function initCouponSystem() {
    const couponInput = document.getElementById('coupon-input');
    const applyBtn = document.getElementById('apply-coupon');
    const couponMessage = document.getElementById('coupon-message');
    if (!applyBtn || !couponInput) return;

    applyBtn.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        if (code === 'FIFA2026') {
            couponApplied = true;
            discountPercent = 20;
            couponMessage.textContent = '\u2705 Coupon applied! You get 20% OFF!';
            couponMessage.className = 'coupon-message success';
            couponInput.value = '';
            updateCartUI();
        } else {
            couponApplied = false;
            discountPercent = 0;
            couponMessage.textContent = '\u274C Invalid coupon code. Please try again.';
            couponMessage.className = 'coupon-message error';
            updateCartUI();
        }
    });

    couponInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') applyBtn.click(); });
}

document.addEventListener('DOMContentLoaded', initCouponSystem);

// ================================================================
// 10. BOOKING & BILLING FLOW
// ================================================================

function initBooking() {
    const bookingTypeCards = document.querySelectorAll('.booking-type-card');
    const bookingFormWrapper = document.getElementById('booking-form-wrapper');
    const billingFormWrapper = document.getElementById('billing-form-wrapper');
    const bookingForm = document.getElementById('booking-form');
    const billingForm = document.getElementById('billing-form');
    const billingBack = document.getElementById('billing-back');
    const bookingTypeInput = document.getElementById('booking-type');
    const bookingFormTitle = document.getElementById('booking-form-title');
    const successModal = document.getElementById('success-modal');
    const modalClose = document.getElementById('modal-close');

    let selectedType = null;
    let bookingData = {};

    bookingTypeCards.forEach(card => {
        card.addEventListener('click', () => {
            bookingTypeCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedType = card.dataset.type;
            bookingTypeInput.value = selectedType;
            bookingFormWrapper.style.display = 'block';
            billingFormWrapper.style.display = 'none';
            bookingFormTitle.textContent = selectedType === 'family' ? 'Book Your Family Feast' : 'Book Your Romantic Dinner';
            bookingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            bookingData = {
                type: selectedType,
                name: document.getElementById('book-name').value.trim(),
                email: document.getElementById('book-email').value.trim(),
                date: document.getElementById('book-date').value,
                time: document.getElementById('book-time').value,
                guests: document.getElementById('book-guests').value,
                phone: document.getElementById('book-phone').value.trim(),
                special: document.getElementById('book-special').value.trim()
            };
            if (!bookingData.name || !bookingData.email || !bookingData.date || !bookingData.time) {
                alert('Please fill in all required fields.');
                return;
            }
            const typeLabel = selectedType === 'family' ? 'Family Feast' : 'Romantic Couple';
            const totalAmount = selectedType === 'family' ? 4999 : 3999;
            document.getElementById('billing-summary-type').textContent = typeLabel;
            document.getElementById('billing-summary-date').textContent = `${bookingData.date} at ${bookingData.time}`;
            document.getElementById('billing-summary-guests').textContent = bookingData.guests;
            document.getElementById('billing-summary-total').textContent = formatPKR(totalAmount);
            document.getElementById('billing-amount').textContent = totalAmount.toLocaleString('en-PK');
            bookingFormWrapper.style.display = 'none';
            billingFormWrapper.style.display = 'block';
            billingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (billingBack) {
        billingBack.addEventListener('click', () => {
            billingFormWrapper.style.display = 'none';
            bookingFormWrapper.style.display = 'block';
            bookingFormWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (billingForm) {
        billingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (successModal) successModal.style.display = 'flex';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (successModal) successModal.style.display = 'none';
            bookingTypeCards.forEach(c => c.classList.remove('selected'));
            bookingFormWrapper.style.display = 'none';
            billingFormWrapper.style.display = 'none';
            bookingForm.reset();
            billingForm.reset();
            selectedType = null;
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.style.display = 'none';
                bookingTypeCards.forEach(c => c.classList.remove('selected'));
                bookingFormWrapper.style.display = 'none';
                billingFormWrapper.style.display = 'none';
                bookingForm.reset();
                billingForm.reset();
                selectedType = null;
            }
        });
    }

    const cardInput = document.getElementById('billing-card');
    if (cardInput) {
        cardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        });
    }

    const expiryInput = document.getElementById('billing-expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
            e.target.value = value;
        });
    }

    const cvvInput = document.getElementById('billing-cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 4) value = value.slice(0, 4);
            e.target.value = value;
        });
    }
}

document.addEventListener('DOMContentLoaded', initBooking);

// ================================================================
// 11. REVIEWS CAROUSEL
// ================================================================

function initReviews() {
    const track = document.getElementById('reviews-track');
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    const dotsContainer = document.getElementById('review-dots');
    if (!track) return;

    let currentIndex = 0;

    reviewsData.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        const starsHtml = '\u2605'.repeat(review.stars) + '\u2606'.repeat(5 - review.stars);
        card.innerHTML = `
            <img src="${review.avatar}" alt="${review.name}" class="review-avatar" loading="lazy" />
            <h3 class="review-name">${review.name}</h3>
            <p class="review-location">${review.location}</p>
            <div class="review-stars">${starsHtml}</div>
            <p class="review-text">${review.text}</p>
        `;
        track.appendChild(card);
    });

    reviewsData.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `review-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const totalSlides = reviewsData.length;

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = totalSlides - 1;
        if (currentIndex >= totalSlides) currentIndex = 0;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.review-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    let autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000);
    const carousel = document.querySelector('.reviews-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
        carousel.addEventListener('mouseleave', () => { autoAdvance = setInterval(() => goToSlide(currentIndex + 1), 5000); });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
        if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
    });
}

document.addEventListener('DOMContentLoaded', initReviews);

// ================================================================
// 12. SCROLL ANIMATIONS (Intersection Observer)
// ================================================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    animatedElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ================================================================
// 13. CHECKOUT BUTTON (Cart -> Booking scroll)
// ================================================================

function initCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            const bookingSection = document.getElementById('booking');
            if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

document.addEventListener('DOMContentLoaded', initCheckoutButton);

// ================================================================
// 14. SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ================================================================
// 15. MOUSE FOLLOWER EFFECT
// ================================================================

function initMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate(${followerX - 12}px, ${followerY - 12}px)`;
        requestAnimationFrame(animate);
    }

    animate();
    if ('ontouchstart' in window) { follower.style.display = 'none'; }
}

document.addEventListener('DOMContentLoaded', initMouseFollower);

// ================================================================
// 16. ANIMATED COUNTERS
// ================================================================

function initAnimatedCounters() {
    const counters = document.querySelectorAll('.animated-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const duration = parseInt(el.dataset.duration) || 2000;
                const suffix = el.dataset.suffix || '';
                const step = Math.max(1, Math.floor(target / (duration / 16)));
                let current = 0;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = current.toLocaleString('en-PK') + suffix;
                }, 16);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initAnimatedCounters);

// ================================================================
// 17. BUTTON RIPPLE EFFECT (Micro Interaction)
// ================================================================

function initRippleEffect() {
    document.querySelectorAll('.btn, .filter-btn, .add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

document.addEventListener('DOMContentLoaded', initRippleEffect);

// ================================================================
// 18. PULSE ANIMATION ON HERO CTA
// ================================================================

function initPulseAnimation() {
    const heroCta = document.querySelector('.hero-cta .btn-primary');
    if (heroCta) {
        setInterval(() => {
            heroCta.classList.add('pulse-animation');
            setTimeout(() => heroCta.classList.remove('pulse-animation'), 2000);
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', initPulseAnimation);

// ================================================================
// 19. CONSOLE WELCOME MESSAGE
// ================================================================

console.log('%c\uD83C\uDF7D\uFE0F Jaffeiz Restaurant', 'font-size: 24px; font-weight: bold; color: #c19a2b;');
console.log('%cA World of Flavor Awaits Since 2010.', 'font-size: 14px; color: #aaa;');
console.log('%cBuilt with \u2764\uFE0F using HTML, CSS & Vanilla JS', 'font-size: 12px; color: #666;');