// script.js

// Sample dataset of 100+ yoga poses
const yogaPoses = [
    {
        pose: 'Balasana (Child’s Pose)',
        musclesWorked: 'Lower Back, Glutes',
        musclesStretched: 'Hamstrings, Lower Back',
        anatomyDetails: 'Engaged: Lower Back - Erector Spinae, Multifidus. Glutes - Gluteus Maximus. Stretched: Hamstrings - Biceps Femoris, Semitendinosus, Semimembranosus. Lower Back - Erector Spinae, Multifidus.',
        hormoneEffects: 'Cortisol: Reduced. Serotonin: Increased.',
        chakrasActivated: 'Root Chakra (Muladhara), Third Eye Chakra (Ajna)',
        overallBenefits: 'Relieves lower back tension, stretches glutes and hamstrings, calms the mind.'
    },
    {
        pose: 'Adho Mukha Svanasana (Downward-Facing Dog)',
        musclesWorked: 'Shoulders, Hamstrings, Calves',
        musclesStretched: 'Hamstrings, Calves, Spine',
        anatomyDetails: 'Engaged: Shoulders - Deltoids. Hamstrings - Biceps Femoris, Semitendinosus, Semimembranosus. Stretched: Calves - Gastrocnemius, Soleus. Spine - Erector Spinae.',
        hormoneEffects: 'Adrenaline: Increased. Endorphins: Increased.',
        chakrasActivated: 'Root Chakra (Muladhara), Throat Chakra (Vishuddha)',
        overallBenefits: 'Strengthens shoulders, stretches hamstrings and calves, improves circulation.'
    },
    // ... Include at least 100 more poses
];

// Function to render the yoga poses in the table
function renderResults(data) {
    const tableBody = document.querySelector('#resultsTable tbody');
    tableBody.innerHTML = ''; // Clear existing results

    data.forEach(pose => {
        const row = document.createElement('tr');
        Object.values(pose).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

// Handle search form input with auto-suggest
document.querySelector('#searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const suggestionsBox = document.querySelector('#suggestions');
    
    if (query.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }
    
    const filteredPoses = yogaPoses.filter(pose => pose.pose.toLowerCase().includes(query));
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    filteredPoses.forEach(pose => {
        const suggestion = document.createElement('div');
        suggestion.textContent = pose.pose;
        suggestion.addEventListener('click', function() {
            document.querySelector('#searchInput').value = pose.pose;
            renderResults([pose]);
            suggestionsBox.style.display = 'none';
        });
        suggestionsBox.appendChild(suggestion);
    });

    suggestionsBox.style.display = 'block';
});

// Hide suggestions when clicking outside
document.addEventListener('click', function(e) {
    if (!document.querySelector('#searchForm').contains(e.target)) {
        document.querySelector('#suggestions').style.display = 'none';
    }
});
