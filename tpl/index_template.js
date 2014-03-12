$(function() {
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [
	   {% for k in maps %}
	  {
            label: '{{ k._id }}',
            value: {{ k.plays }}
	  }
	  {% if !loop.last %},{% endif %}
	{% endfor %}
	],
        resize: true 
    });
});
