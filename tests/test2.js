var yargs=require('yargs');

//console.log(process.argv)
// console.log(yargs.argv)

//customize yargs version 
yargs.version('1.2.3')

yargs.command({
    command:'add',
    describe:'Add a new note ',
    handler:function(){
        console.log('a new value has been added');
    }
})
//---------------------------------------------------------------------------------------
yargs.command({
    command:'add2',
    describe:'add a new note 2',
    builder:{
        title:{
            describe:'title note ',
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        console.log('Title is=',argv.title);
    }

})



console.log( )

yargs.parse()