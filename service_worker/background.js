let queue = [];
let isProcessing = false;

browser.runtime.onMessage.addListener(handleMessage);

async function handleMessage(request) {
	queue.push(request);
	if (!isProcessing) processQueue();
}

async function processQueue() {
	if (queue.length === 0) {
		isProcessing = false;
		return;
	}

	isProcessing = true;

	const request = queue.shift();
	console.log(request.data);
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(request.data),
	};

	setTimeout(async function () {
		await fetch("<YOUR API URL>", options);
		processQueue();
	}, 1000);
}