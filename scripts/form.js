const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.getElementById("product-name");

if (productSelect) {
    products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

const reviewCountElement = document.getElementById("review-count");

if (reviewCountElement) {
    const submittedReview = new URLSearchParams(window.location.search);
    const completedReview = ["product", "rating", "installation-date"].every((field) => submittedReview.has(field) && submittedReview.get(field));
    const previousCount = Number(localStorage.getItem("reviewCount") || 0);
    const reviewCount = completedReview ? previousCount + 1 : previousCount;

    if (completedReview) {
        localStorage.setItem("reviewCount", reviewCount);
    }

    reviewCountElement.textContent = reviewCount;
}
