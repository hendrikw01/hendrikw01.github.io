$(function(){Morris.Donut({element:"morris-donut-chart",data:[{label:"K/D",value:1483},{label:"K/D",value:1483}],resize:!0,formatter:function(){return"1"}}),Morris.Donut({element:"morris-donut-chart2",data:[{label:"Gewonnen",value:70},{label:"Gewonnen",value:50}],resize:!0,formatter:function(){return"58.33%"}}),Morris.Bar({element:"morris-bar-chart",data:[{map:"Bailout",wins:15,loss:8},{map:"Highrise",wins:5,loss:8},{map:"Trailer Park",wins:7,loss:4},{map:"Verwuchert",wins:6,loss:3},{map:"Skidrow ",wins:6,loss:2},{map:"Salvage",wins:4,loss:3},{map:"Rundown",wins:5,loss:2},{map:"Sub Base",wins:4,loss:2},{map:"Terminal",wins:2,loss:3},{map:"Vacant",wins:2,loss:2},{map:"Estate",wins:2,loss:2},{map:"Overgrown",wins:2,loss:1},{map:"Carnival",wins:2,loss:1},{map:"Favela",wins:1,loss:2},{map:"Karachi",wins:3,loss:0},{map:"Afgahn",wins:1,loss:1},{map:"Invasion",wins:0,loss:2},{map:"Quarry",wins:0,loss:1},{map:"Strike",wins:0,loss:1},{map:"",wins:0,loss:1},{map:"Skidrow",wins:0,loss:1},{map:"Absturz",wins:1,loss:0},{map:"Fuel",wins:1,loss:0},{map:"Storm",wins:1,loss:0}],xkey:"map",ykeys:["wins","loss"],labels:["Gewonnen","Verloren"],hideHover:"auto",stacked:!0,resize:!0})});