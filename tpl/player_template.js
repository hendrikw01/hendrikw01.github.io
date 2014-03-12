$(function() {
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "K/D",
            value: {{ player.kills }}
        }, {
            label: "K/D",
            value: {{ player.deaths }}
        }],
        resize: true,
        formatter : function (y, data) { return '{{player.kd}}' } 
    });
    
     Morris.Donut({
        element: 'morris-donut-chart2',
        data: [{
            label: "Gewonnen",
            value: {{ player.wins }}
        }, {
            label: "Gewonnen",
            value: {{ player.losses }}
        }],
        resize: true,
        formatter : function (y, data) { return '{{player.winPercent}}%' } 
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [
	  {% for k in maps %}
	  {
            map: '{{ k._id.map }}',
            wins: {{ k.wins }},
	    loss: {{ k.losses }}
        }
	  {% if !loop.last %},{% endif %}
	{% endfor %}
	],
        xkey: 'map',
        ykeys: ['wins', 'loss'],
        labels: ['Gewonnen', 'Verloren'],
        hideHover: 'auto',
	stacked : true,
        resize: true
    });

});
