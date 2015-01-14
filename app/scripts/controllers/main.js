'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototypeApp
 */
 var subcats = {
      	'LowerCholesterol': [
        	{
            'header': 'Exercise',
            'id':'1',
            'values': [
                'heart rate: 120bpm',
                'duration: 30min'
            ]
        },{
            'header': 'Diet',
            'id': '2',
            'values': [
                'calories: 550',
                'salt: 120mg',
                'fat: 10g',
                'LDL chole: 10mg',
                'HDL chole: 5mg',
                'protein: 12g',
                'meals daily: 4'
            	]
        	},
        	{
            'header': 'Medication',
            'id': '3',
            'values': [
                'some drug1',
                'some drug2'
            ]
        	}
    	   ],
    	'LowerBloodpressure': [
        	{
            'header': 'Exercise',
            'id':'4',
            'values': [
                'heart rate: 120bpm',
                'duration: 30min'
            ]
        	},
        {
            'header': 'Diet',
            'id':'5',
            'values': [
                'calories: 500',
                'salt: 100mg',
                'fat: 15g',
                'LDL chole: 20mg',
                'HDL chole: 5mg',
                'protein: 10g',
                'meals daily: 4'
            ]
        },
        {
            'header': 'Medication',
            'id':'6',
            'values': [
                'some drug1',
                'some drug2',
                'some drug3'
            ]
        }
    ],
    'LowerBloodpressure_LowerCholesterol': [
        	{
            'header': 'Exercise',
            'id':'7',
            'values': [
                'heart rate: 90bpm',
                'duration: 50min'
            ]
        	},{
            'header': 'Diet',
            'id':'8',
            'values': [
                'calories: 450',
                'salt: 90mg',
                'fat: 20g',
                'LDL chole: 20mg',
                'HDL chole: 7mg',
                'protein: 8g',
                'meals daily: 4'
            	]
        	},
        	{
            'header': 'Medication',
            'id':'9',
            'values': [
                'some drug1',
                'some drug2'
            ]
        	}
    	   ]
};  
var exec = {
		'1': [
			{'name':'cardio','drag':true},
			{'name':'strength training','drag':true},
			{'name':'stretching','drag':true}
		],
		'2': [
			{'name':'meal plans','drag':true}
		],
		'3': [
			{'name':'some drug1', 'drag':true, 'id':'0'},
			{'name':'some drug2', 'drag':true, 'id':'1'}	
		],
		'4': [
			{'name':'cardio','drag':true},
			{'name':'strength training','drag':true},
			{'name':'stretching','drag':true}
		],
		'5': [
			{'name':'meal plans','drag':true}
		],
		'6': [
			{'name':'some drug1', 'drag':true, 'id':'0'},
			{'name':'some drug2', 'drag':true, 'id':'1'},
			{'name':'some drug3', 'drag':true, 'id':'2'}
		],
		'7': [
			{'name':'cardio','drag':true},
			{'name':'strength training','drag':true},
			{'name':'stretching','drag':true}
		],
		'8': [
			{'name':'meal plans','drag':true}
		],
		'9': [
			{'name':'some drug1', 'drag':true, 'id':'0'},
			{'name':'some drug2', 'drag':true, 'id':'1'},
			{'name':'some drug3', 'drag':true, 'id':'2'}
		]
};  
angular.module('prototypeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.goalsBeacon = true;
    $scope.goals = [
      {'name':'Lower Cholesterol', 'selected':false},
      {'name':'Lower Blood pressure', 'selected':false},
      {'name':'Improve Cardiovascular','selected':false},
      {'name':'Lose 20 pounds','selected':false}
     ];
	 $scope.list = [];
     var selectedProducts = [];
     
     $scope.toggleSelection = function(goal){
        var calls='';
        var index = selectedProducts.indexOf(goal.name.replace(/ +/g, ''));
    	if(index === -1 && goal.selected){
      		selectedProducts.push(goal.name.replace(/ +/g, ''));
    	} else if (!goal.selected && index !== -1){
      		selectedProducts.splice(index, 1);
    	}
    	if(selectedProducts.length > 1){
    	    var sorted = selectedProducts.sort();
    	    calls = sorted.join('_');
    	}else{
    	   calls = selectedProducts[0];
    	}
    	$scope.categories = subcats[calls];
     };
	$scope.recommondations = function(recs){
	   var arr = exec[recs.id];

	   for(var i=0; arr.length; i++){
	   
         if(!!arr[i].id){
         
	     	if(arr[i].id == $scope.id){
	    
				arr[i].name = $scope.goalChange;
				$scope.exercises = arr;
		 	 }
		 }else{
		    $scope.exercises = arr;
		 }
	   }	
	};
     $scope.optionsList1 = {
    	accept: function(dragEl) {
      		if ($scope.list.length >= 7) {
        		return false;
      		} else {
        		return true;
      		}
    	}
  	};
    $scope.dropCallback = function(e, ui){
        //console.log($scope.list);  
    };
	$scope.updateModel = function(goal, id){
	      $scope.id = id;
	      $scope.goalChange = goal;
	};
    $scope.toggleGoalsMenu = function(){ 
        if($scope.goalsMenuExpanded){
          $scope.goalsMenuExpanded = false;
        }else{
          $scope.goalsMenuExpanded = true;
   
        }
      	
    };
    $scope.status = function(){
          var data = [
    		{
        		value: 300,
        		color:"#F7464A",
        		highlight: "#FF5A5E",
        		label: "Red"
    		},
    		{
        		value: 50,
        		color: "#46BFBD",
        		highlight: "#5AD3D1",
        		label: "Green"
    		},
    		{
        		value: 100,
        		color: "#FDB45C",
        		highlight: "#FFC870",
        		label: "Yellow"
    		}
			];
			
		if(!!document.getElementById('items')){
            document.getElementById('items')
               .style.display='none';
        }	
       
        document.getElementById('mobile_schedule')
    		    .style.display = 'none';
    	document.getElementById('mobile_progress')
    		    .style.display = 'block';
    		    
        var ctx = document.getElementById("myChart").getContext("2d");
		var myNewChart = new Chart(ctx).Pie(data);
		
		console.log(myNewChart);
    		
    };
    $scope.schedule = function(){
       if(!!document.getElementById('items')){
            document.getElementById('items')
               .style.display='none';
        }
        document.getElementById('mobile_progress')
    		      .style.display = 'none';
        document.getElementById('mobile_schedule')
    		      .style.display = 'block';
	
    };
    $scope.home = function(){
    	if(!!document.getElementById('items')){
            document.getElementById('items')
               .style.display='block';
        }
        document.getElementById('mobile_progress')
    		    .style.display = 'none';
        document.getElementById('mobile_schedule')
    		    .style.display = 'none';
        
    };
    
 });
