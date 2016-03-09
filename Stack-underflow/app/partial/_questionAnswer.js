app.directive('questionAnswer', function(){
    return{
        template:'<div class="panel panel-default"><div class = "panel-body"><div class="answer-padding">{{a.score}} Answer: "{{a.text}}"</div><div class="text-right">'
        +
        'answered: [{{a.date}}]<br>By: {{a.author}}</div></div></div>'
    }
    
    // return{
    //     templateUrl:'answer.html'
    // }
})