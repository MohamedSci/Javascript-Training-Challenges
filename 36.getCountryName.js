const https = require('https');
const fs = require('fs');

// Function to make the API request and fetch the country name by code
function getCountryName(code, callback) {
    const apiUrl = `https://sommock.hackerrank.com/api/countries?page=1`;  
    let page = 1;

    // Loop to handle pagination
    function fetchPage(page) {
        const url = `https://sommock.hackerrank.com/api/countries?page=${page}`;

        https.get(url, (res) => {
            let data = '';

            // Accumulate data from the response
            res.on('data', chunk => {
                data += chunk;
            });

            // On end of response, parse and check the data
            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);  // Parse the JSON response

                    // Check each country in the current page
                    for (const country of jsonData.data) {
                        if (country.alpha2Code === code) {
                            callback(null, country.name);  // Return country name
                            return;  // Exit function once country is found
                        }
                    }

                    // If the country is not found, check if there are more pages
                    if (page < jsonData.total_pages) {
                        fetchPage(page + 1);  // Fetch next page
                    } else {
                        callback('Country not found');  // End the search if all pages are checked
                    }
                } catch (error) {
                    callback('Error parsing JSON data');
                }
            });

        }).on('error', (error) => {
            callback(`Error fetching data: ${error.message}`);
        });
    }

    // Start the process by fetching the first page
    fetchPage(page);
}


