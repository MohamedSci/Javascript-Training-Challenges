const https = require('https');

async function getCountryName(code) {
    let page = 1;

    while (true) {
        try {
            const data = await fetchPage(page);

            for (const country of data.data) {
                if (country.alpha2Code === code) {
                    return country.name;
                }
            }

            if (page >= data.total_pages) {
                break;
            }

            page++;
        } catch (error) {
            console.error('Error fetching data:', error);
            break;
        }
    }

    return null;
}

async function fetchPage(page) {
    const url = `https://jsonmock.hackerrank.com/api/countries?page=${page}`;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

const code = 'EG';
getCountryName(code)
    .then(name => {
        if (name) {
            console.log('Country found:', name);
        } else {
            console.log('Country not found');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });