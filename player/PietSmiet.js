$(function(){Morris.Donut({element:"morris-donut-chart",data:[{label:"K/D",value:1312},{label:"K/D",value:1406}],resize:!0,formatter:function(){return"0.93"}}),Morris.Donut({element:"morris-donut-chart2",data:[{label:"Gewonnen",value:59},{label:"Gewonnen",value:54}],resize:!0,formatter:function(){return"52.21%"}}),Morris.Bar({element:"morris-bar-chart",data:[{map:"Bailout",wins:16,loss:7},{map:"Highrise",wins:6,loss:6},{map:"Trailer Park",wins:5,loss:5},{map:"Skidrow ",wins:3,loss:6},{map:"Verwuchert",wins:3,loss:5},{map:"Terminal",wins:1,loss:5},{map:"Rundown",wins:4,loss:2},{map:"Sub Base",wins:2,loss:3},{map:"Salvage",wins:1,loss:3},{map:"Estate",wins:1,loss:3},{map:"Favela",wins:3,loss:1},{map:"Karachi",wins:2,loss:1},{map:"Vacant",wins:0,loss:3},{map:"Overgrown",wins:3,loss:0},{map:"Carnival",wins:3,loss:0},{map:"Invasion",wins:2,loss:0},{map:"Strike",wins:0,loss:1},{map:"Skidrow",wins:1,loss:0},{map:"Afgahn",wins:0,loss:1},{map:"Absturz",wins:1,loss:0},{map:"Fuel",wins:0,loss:1},{map:"",wins:0,loss:1},{map:"Storm",wins:1,loss:0},{map:"Quarry",wins:1,loss:0}],xkey:"map",ykeys:["wins","loss"],labels:["Gewonnen","Verloren"],hideHover:"auto",stacked:!0,resize:!0})});