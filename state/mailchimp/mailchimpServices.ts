export const onAddEmailToMailchimp = async (email: string, tag: string) => {
    const response = await fetch('/api/mailchimpSubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tag }),
    });

    return await response.json();
}