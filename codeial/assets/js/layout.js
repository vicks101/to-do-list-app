//to delte the checked item
$('#delete-btn').click(function(){
    //fetching all the checkbox
    let allCheckbox=document.querySelectorAll(' .checkBox');
    let checkedItem = [];
    //collecting id of all checkbox
    for(item of allCheckbox){
        if(item.checked){
            checkedItem.push(item.id);
        }
    }
    //to ask the user before delete
    const isDelete = confirm("Do you really want to delete records?");
    //use the ajax to delete the items without refresh the whole page
    if(isDelete==true){

        $.ajax({
            type:'get',
            url:'/users/delete',
            data:{info:checkedItem},
            success:function(){
                for(id of checkedItem){
                    $(`#list-${id}`).remove(); 
                }
                //to show the notification when deleted
                new Noty({
                    theme: 'relax',
                    text: "Deleted Successfully",
                    type: 'error',
                    layout: 'topRight',
                    timeout: 500
                    
                }).show();
            },error: function(error){
                console.log(error.responseText);
            }
        });
    }

});