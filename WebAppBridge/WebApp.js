function OnEventSendJS(_event) {
	
		// if (typeof uniWebView !== "undefined" && uniWebView !== null) 
		// {
			// uniWebView.send("path", { "param": message });
		// } 
		// else 
		// {
			// console.error("UniWebView is not defined.");
		// }	
		
		
		console.log("WebApp: Event Sent: "+_event);
		window.location.href = "uniwebview://web-event?event="+_event;
	
}

 function OnEventDataSendJS(_event_data) {
		 console.log("WebApp: Event Data Sent: "+_event_data);
		 window.location.href = "uniwebview://web-event-data?data="+_event_data;
	
 }
