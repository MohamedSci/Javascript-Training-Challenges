// Javascript Application that fetches football-related data using paginated REST API endpoints. 
// The conversion applies best practices, including modularity, error handling, 
// and adherence to modern JavaScript standards like async/await.
// Fetch Total Goals by a Team in a Year

const https = require('https');

// Helper function to fetch data using HTTPS
function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject('Error parsing JSON response');
        }
      });
    }).on('error', (err) => {
      reject(`Request failed: ${err.message}`);
    });
  });
}

// Fetch total goals scored by a team in a given year
async function getTotalGoals(team, year) {
  let totalGoals = 0;

  // Helper to fetch goals for a specific team and role (team1 or team2)
  async function fetchGoals(role) {
    let page = 1;
    while (true) {
      const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&${role}=${team}&page=${page}`;
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
    const team = 'Barcelona';
    const year = 2011;
    const totalGoals = await getTotalGoals(team, year);
    console.log(`Total goals scored by ${team} in ${year}: ${totalGoals}`);
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
