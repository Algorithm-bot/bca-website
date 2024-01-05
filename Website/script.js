function loadSemesters(year) {
    // Hide all widgets
    hideAllWidgets();

    // Show the corresponding semester widgets for the selected year
    document.getElementById(`semester${(year - 1) * 2 + 1}`).style.display = 'block';
    document.getElementById(`semester${(year - 1) * 2 + 2}`).style.display = 'block';
}

function hideAllWidgets() {
    // Hide all year and semester widgets
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`year${i}`).style.display = 'none';
    }
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`semester${i}`).style.display = 'none';
    }
}

function goNotes() {
    // Show the initial state with year widgets
    hideAllWidgets();
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`year${i}`).style.display = 'block';
    }
}


function loadEbooks() {
    hideAllWidgets();  // Hide all widgets

    // You can add your logic to load ebooks content here
}

function loadResources() {
    hideAllWidgets();  // Hide all widgets

    // You can add your logic to load resources content here
}

function goAbout(pageURL) {
    // Navigate to the specified page
    window.location.href = pageURL;
}
