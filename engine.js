// This function calculates XP and Ranks based on test scores
function calculateHunterStats(marks, totalPossible) {
    let xp = marks * 10;
    let rank = "Novice";

    // Bonus for Full Marks
    if (marks === totalPossible) {
        xp += 50; 
    }

    // Determine Rank Title
    if (xp >= 250) rank = "S-Rank Hunter";
    else if (xp >= 150) rank = "A-Rank Hunter";
    else if (xp >= 100) rank = "B-Rank Hunter";

    return { xp: xp, rank: rank };
}

// Export the data for the UI
console.log("System Engine Initialized...");
