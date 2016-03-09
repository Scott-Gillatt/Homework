app.directive('questionComments', function (){
    return{
        template:'<div class="panel panel-default"><div class="comments-padding">Comment: "{{c.text}}"'
        + ' - {{c.author}} [{{c.date}}]</div></div>'
    }
})