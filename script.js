document.addEventListener('DOMContentLoaded', function() {
    // Category filter interaction
    const categoryButtons = document.querySelectorAll('.category-btn');
    const categoryItems = document.querySelector('.category-items');

    // Sample data for category items
    const menuItems = {
        "Appetizers": [
            { title: "Bruschetta", description: "Grilled bread with tomatoes, garlic, and basil." },
            { title: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese and herbs." }
        ],
        "Main Course": [
            { title: "Grilled Salmon", description: "Fresh salmon grilled to perfection." },
            { title: "Ribeye Steak", description: "Juicy ribeye steak cooked to your liking." }
        ],
        "Desserts": [
            { title: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust." },
            { title: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone." }
        ],
        "Beverages": [
            { title: "Mojito", description: "Refreshing mint and lime cocktail." },
            { title: "Lemonade", description: "Freshly squeezed lemonade." }
        ]
    };

    // Function to load category items based on the selected category
    function loadCategoryItems(category) {
        categoryItems.innerHTML = ''; // Clear previous items
        if (menuItems[category]) {
            menuItems[category].forEach(item => {
                categoryItems.innerHTML += `
                    <div class="category-item">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
            });
        } else {
            categoryItems.innerHTML = `<p>No items available for this category.</p>`;
        }
    }

    // Event listener for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.textContent;
            loadCategoryItems(category);
        });
    });

    // Initial load for the first category
    loadCategoryItems('Appetizers');

    // Function to display updates dynamically
    const updatesSection = document.querySelector('.update-items');
    const updates = [
        {
            title: "Today's Special: Grilled Salmon",
            description: "Enjoy a delicious grilled salmon served with a side of roasted vegetables, available only today!",
            promotion: "Get a complimentary dessert with every salmon order.",
            date: "August 27, 2024"
        },
        {
            title: "New Seasonal Menu Launch",
            description: "Check out our new fall menu featuring pumpkin spice lattes and roasted chestnuts.",
            promotion: "20% off all seasonal dishes!",
            date: "September 1, 2024"
        }
    ];

    function displayUpdates(updates) {
        updatesSection.innerHTML = ''; // Clear previous updates
        updates.forEach(update => {
            updatesSection.innerHTML += `
                <div class="update-item">
                    <h3>${update.title}</h3>
                    <p>${update.description}</p>
                    <p><strong>Promotion:</strong> ${update.promotion}</p>
                    <p><strong>Date:</strong> ${update.date}</p>
                </div>
            `;
        });
    }

    // Load the updates on page load
    displayUpdates(updates);

    // Event listener for the reservation form submission (optional)
    const reservationForm = document.querySelector('.reservation-section form');
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Your reservation has been submitted!");
        reservationForm.reset(); // Reset the form after submission
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example for interactive features: Category section toggling
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('a').getAttribute('href');
            window.open(link, '_blank');
        });
    });
});
