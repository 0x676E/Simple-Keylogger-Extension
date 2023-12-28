chrome.runtime.onMessage.addListener(handleMessage);

async function handleMessage(request) {
	console.log(request.data);
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(request.data),
	};
	await fetch("<YOUR API URL>", options);
}