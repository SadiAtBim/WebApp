function OnEventSendJS(_event) {
		console.log("WebApp: Event Sent: "+_event);
		window.location.href = "uniwebview://web-event?event="+_event;
	
}

 function OnEventDataSendJS(_event_data) {
		 console.log("WebApp: Event Data Sent: "+_event_data);
		 window.location.href = "uniwebview://web-event-data?data="+_event_data;
	
 }
