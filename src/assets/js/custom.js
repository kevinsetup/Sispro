


$( document ).ready(function(){

    $('#sidebarCollapse').on('click', function () {
     $('#sidebar').toggleClass('active');});


     $('select#inputGroupSelect02').on('change',function(){
         var valor = $(this).val();
         $('#num ').val($("#inputGroupSelect02 option:selected").val());
         
     })
     $('select#inputGroupSelect01').on('change',function(){
        var valor = $(this).val();
        $('#num2').val($("#inputGroupSelect01 option:selected").val());
        
    })
});

