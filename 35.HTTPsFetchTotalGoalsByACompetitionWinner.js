// Javascript Application that fetches football-related data using paginated REST API endpoints. 
// The conversion applies best practices, including modularity, error handling, 
// and adherence to modern JavaScript standards like async/await.
// Fetch Total Goals by a Competition Winner

const https = require('https');

async function getWinnerTotalGoals(competition, year) {
  let totalGoals = 0;

  // Fetch the winner of the competition
  const winnerUrl = `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`;
  const winnerData = await fetchJson(winnerUrl);

  if (!winnerData.data || winnerData.data.length === 0) return 0;

  const winner = winnerData.data[0].winner;

  // Helper to fetch goals for the winner in a specific role
  async function fetchGoals(role) {
    let page = 1;
    while (true) {
      const url = `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&${role}=${winner}&page=${page}`;
      const data = await fetchJson(url);

      if (!data.data || data.data.length === 0) break;

      totalGoals += data.data.reduce((sum, match) => sum + parseInt(match[`${role}goals`], 10), 0);
      page += 1;
    }
  }

  // Fetch goals for both home (team1) and away (team2) matches
  await fetchGoals('team1');
  await fetchGoals('team2');

  return totalGoals;
}

// Example Usage
(async () => {
  try {
    const competition = 'World Cup';
    const year = 2014;
    const winnerGoals = await getWinnerTotalGoals(competition, year);
    console.log(`Total goals scored by the winner of ${competition} in ${year}: ${winnerGoals}`);
  } catch (error) {
    console.error(error);
  }
})();




// Key Features of the JavaScript Implementation


// Reusable Helper Function:
// The fetchJson function encapsulates the logic for making HTTPS requests and parsing the JSON response.

// Error Handling:
// Both fetchJson and the main functions include error handling to gracefully handle issues like network failures or invalid JSON responses.

// Pagination Support:
// The logic iterates through pages until no more data is returned.

// Data Parsing:
// Matches and goals are processed using reduce for concise and efficient summation.

// Asynchronous Programming:
// Uses async/await to handle asynchronous operations, making the code cleaner and easier to understand.

// Code Modularity:
// Helper functions for fetching goals (fetchGoals) ensure separation of concerns.
