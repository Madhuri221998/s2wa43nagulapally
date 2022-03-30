const { router } = require("../app");

router.get('/',function(req, res, nexr){
    var x;
    var random =Math.random();
    console.log(req.query.x);
    x=req.query.x;
    if(x== undefined){
        x= random;
    }
let hypot= Math.hypot(x,x)
let ceil= Math.ceil(x)
let clz32= Math.clz32(x)
res.render('computation',{
    title: 'computation',
    values: `applied to ` + x +  `is ` + hypot ,
    v1: `applied to ` + x + ` is ` + ceil,
    v1: `applied to ` + x + ` is ` + clz32,

});
});
module.exports = router;