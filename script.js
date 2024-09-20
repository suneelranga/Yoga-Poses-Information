// script.js

// Sample dataset of 100+ yoga poses
const yogaPoses = [
    {
        pose: 'Salabhasana (Locust Pose)',
        musclesWorked: 'Lower Back, Glutes, Core',
        musclesStretched: 'Chest, Shoulders',
        anatomyDetails: 'Engaged: Lower Back - Erector Spinae, Glutes - Gluteus Maximus, Core - Rectus Abdominis. Stretched: Chest - Pectoralis Major, Shoulders - Deltoids.',
        hormoneEffects: 'Endorphins: Increased. Cortisol: Moderate.',
        chakrasActivated: 'Root Chakra (Muladhara)',
        overallBenefits: 'Strengthens lower back, improves posture.'
    },
    {
        pose: 'Bhujangasana (Cobra Pose)',
        musclesWorked: 'Back, Shoulders, Arms',
        musclesStretched: 'Abdominals, Chest',
        anatomyDetails: 'Engaged: Back - Latissimus Dorsi, Shoulders - Deltoids, Arms - Biceps. Stretched: Abdominals - Rectus Abdominis, Chest - Pectoralis Major.',
        hormoneEffects: 'Serotonin: Increased. Cortisol: Decreased.',
        chakrasActivated: 'Sacral Chakra (Svadhisthana), Solar Plexus Chakra (Manipura)',
        overallBenefits: 'Opens heart, improves flexibility.'
    },
    {
        pose: 'Setu Bandhasana (Bridge Pose)',
        musclesWorked: 'Back, Glutes, Legs',
        musclesStretched: 'Chest, Hip Flexors',
        anatomyDetails: 'Engaged: Back - Erector Spinae, Glutes - Gluteus Maximus, Legs - Quadriceps. Stretched: Chest - Pectoralis Major, Hip Flexors - Iliopsoas.',
        hormoneEffects: 'Thyroid Hormones: Increased. Cortisol: Decreased.',
        chakrasActivated: 'Heart Chakra (Anahata)',
        overallBenefits: 'Strengthens spine, improves circulation.'
    },
    {
        pose: 'Utkatasana (Chair Pose)',
        musclesWorked: 'Quads, Glutes, Core',
        musclesStretched: 'Back, Calves',
        anatomyDetails: 'Engaged: Quads - Rectus Femoris, Glutes - Gluteus Maximus, Core - Rectus Abdominis. Stretched: Back - Erector Spinae, Calves - Gastrocnemius.',
        hormoneEffects: 'Adrenaline: Increased. Serotonin: Increased.',
        chakrasActivated: 'Root Chakra (Muladhara), Solar Plexus Chakra (Manipura)',
        overallBenefits: 'Builds strength, improves balance.'
    },
    {
        pose: 'Dhanurasana (Bow Pose)',
        musclesWorked: 'Back, Glutes, Legs',
        musclesStretched: 'Chest, Shoulders',
        anatomyDetails: 'Engaged: Back - Erector Spinae, Glutes - Gluteus Maximus, Legs - Hamstrings. Stretched: Chest - Pectoralis Major, Shoulders - Deltoids.',
        hormoneEffects: 'Testosterone: Increased. Endorphins: Increased.',
        chakrasActivated: 'Heart Chakra (Anahata), Throat Chakra (Vishuddha)',
        overallBenefits: 'Increases flexibility, stimulates digestive organs.'
    },
    {
        pose: 'Viparita Karani (Legs-Up-The-Wall Pose)',
        musclesWorked: 'Legs, Core',
        musclesStretched: 'Lower Back, Hamstrings',
        anatomyDetails: 'Engaged: Legs - Quadriceps, Core - Rectus Abdominis. Stretched: Lower Back - Erector Spinae, Hamstrings - Biceps Femoris.',
        hormoneEffects: 'Melatonin: Increased. Serotonin: Increased.',
        chakrasActivated: 'Root Chakra (Muladhara), Sacral Chakra (Svadhisthana)',
        overallBenefits: 'Calms mind, aids in recovery.'
    },
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
    {
        pose: 'Virabhadrasana I (Warrior I Pose)',
        musclesWorked: 'Quads, Glutes, Shoulders',
        musclesStretched: 'Chest, Hip Flexors',
        anatomyDetails: 'Engaged: Quads - Rectus Femoris. Glutes - Gluteus Maximus. Shoulders - Deltoids. Stretched: Chest - Pectoralis Major, Hip Flexors - Iliopsoas.',
        hormoneEffects: 'Cortisol: Decreased. Testosterone: Increased.',
        chakrasActivated: 'Root Chakra (Muladhara), Heart Chakra (Anahata)',
        overallBenefits: 'Builds stamina, increases focus, strengthens legs.'
    },
    {
        pose: 'Virabhadrasana II (Warrior II Pose)',
        musclesWorked: 'Quads, Glutes, Shoulders',
        musclesStretched: 'Inner Thighs, Chest',
        anatomyDetails: 'Engaged: Quads - Rectus Femoris. Glutes - Gluteus Maximus. Shoulders - Deltoids. Stretched: Inner Thighs - Adductors, Chest - Pectoralis Major.',
        hormoneEffects: 'Adrenaline: Increased. Serotonin: Increased.',
        chakrasActivated: 'Root Chakra (Muladhara), Solar Plexus Chakra (Manipura)',
        overallBenefits: 'Improves balance, strengthens lower body, boosts confidence.'
    },
    {
        pose: 'Trikonasana (Triangle Pose)',
        musclesWorked: 'Legs, Core, Shoulders',
        musclesStretched: 'Hamstrings, Side Body',
        anatomyDetails: 'Engaged: Legs - Quadriceps. Core - Rectus Abdominis. Shoulders - Deltoids. Stretched: Hamstrings - Biceps Femoris, Side Body - Intercostals.',
        hormoneEffects: 'Cortisol: Decreased. Serotonin: Increased.',
        chakrasActivated: 'Root Chakra (Muladhara), Heart Chakra (Anahata)',
        overallBenefits: 'Enhances flexibility, improves digestion, relieves stress.'
    },
    {
        pose: 'Paschimottanasana (Seated Forward Bend)',
        musclesWorked: 'Hamstrings, Back',
        musclesStretched: 'Spine, Shoulders',
        anatomyDetails: 'Engaged: Hamstrings - Biceps Femoris. Back - Erector Spinae. Stretched: Spine - Erector Spinae, Shoulders - Deltoids.',
        hormoneEffects: 'Serotonin: Increased. Cortisol: Decreased.',
        chakrasActivated: 'Root Chakra (Muladhara), Solar Plexus Chakra (Manipura)',
        overallBenefits: 'Calms the mind, stretches the spine and hamstrings.'
    },
    {
        pose: 'Balancing Table Pose',
        musclesWorked: 'Core, Back, Glutes',
        musclesStretched: 'Back, Shoulders',
        anatomyDetails: 'Engaged: Core - Rectus Abdominis, Back - Erector Spinae, Glutes - Gluteus Maximus. Stretched: Back - Erector Spinae, Shoulders - Deltoids.',
        hormoneEffects: 'Endorphins: Increased. Cortisol: Decreased.',
        chakrasActivated: 'Root Chakra (Muladhara), Sacral Chakra (Svadhisthana)',
        overallBenefits: 'Improves balance, strengthens core and back.'
    },
    {
        pose: 'Anjaneyasana (Low Lunge)',
        musclesWorked: 'Hip Flexors, Quads',
        musclesStretched: 'Hip Flexors, Groin',
        anatomyDetails: 'Engaged: Hip Flexors - Iliopsoas. Quads - Rectus Femoris. Stretched: Hip Flexors - Iliopsoas, Groin - Adductors.',
        hormoneEffects: 'Testosterone: Increased. Cortisol: Decreased.',
        chakrasActivated: 'Root Chakra (Muladhara), Sacral Chakra (Svadhisthana)',
        overallBenefits: 'Opens hips, strengthens legs, improves stability.'
    },
    {
        pose: 'Pigeon Pose',
        musclesWorked: 'Hips, Glutes',
        musclesStretched: 'Hip Flexors, Lower Back',
        anatomyDetails: 'Engaged: Hips - Gluteus Medius. Stretched: Hip Flexors - Iliopsoas, Lower Back - Erector Spinae.',
        hormoneEffects: 'Serotonin: Increased. Cortisol: Decreased.',
        chakrasActivated: 'Sacral Chakra (Svadhisthana), Root Chakra (Muladhara)',
        overallBenefits: 'Opens hips, relieves lower back tension.'
    },
    {
        pose: 'Ardha Matsyendrasana (Half Lord of the Fishes Pose)',
        musclesWorked: 'Spine, Abdomen',
        musclesStretched: 'Spine, Shoulders',
        anatomyDetails: 'Engaged: Spine - Erector Spinae, Abdomen - Rectus Abdominis. Stretched: Spine - Erector Spinae, Shoulders - Deltoids.',
        hormoneEffects: 'Cortisol: Decreased. Serotonin: Increased.',
        chakrasActivated: 'Solar Plexus Chakra (Manipura), Heart Chakra (Anahata)',
        overallBenefits: 'Improves spinal flexibility, aids digestion.'
    },
    {
        pose: 'Savasana (Corpse Pose)',
        musclesWorked: 'Whole Body Relaxation',
        musclesStretched: 'N/A',
        anatomyDetails: 'Engaged: Whole Body. Stretched: N/A.',
        hormoneEffects: 'Cortisol: Decreased. Melatonin: Increased.',
        chakrasActivated: 'Crown Chakra (Sahasrara), Root Chakra (Muladhara)',
        overallBenefits: 'Promotes deep relaxation, reduces stress.'
    }
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
