export const fetchOdds = async () => {
    const response = await fetch('http://localhost:5000/api/odds');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};
