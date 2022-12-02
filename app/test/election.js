var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){

    it("init with two candidates", function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count, 2);
        });
    });

    it("check candidate name", function(){
        return Election.deployed().then(function(ins) {
            return ins.candidatesMap(1);
        }).then(function(c){
            return candidate = c;
        }).then(function(r){
            assert.equal(r[1], "candy")
        });
    });

    

});