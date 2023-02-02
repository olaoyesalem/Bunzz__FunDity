const { network } = require("hardhat");
const { DECIMALS,INITIAL_ANSWER } = require("../helper-hardhat.config");

module.exports = async({getNamedAccounts, deployments})=>{// on local host
    const{log,deploy}= deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId;

    if(chainId==(31337)){
        log("Local Network detected!!!!....!!!!");
        await deploy("MockV3Aggregator", {
            contract:"MockV3Aggregator",
            from:deployer,
            log:true,
            args:[DECIMALS,INITIAL_ANSWER],
        
        })
            log("Mocks deployed")
            log("------------------------------------------------")
    }
};
module.exports.tags=["all","mock"]