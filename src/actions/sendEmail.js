'use server'

export const sendEmail = async (event) => {
    event.preventDefault();

    // Creating a new FormData object to collect the form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Making the API request
    try {
        const response = await fetch('api-endpoint', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Handle the response data here
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};