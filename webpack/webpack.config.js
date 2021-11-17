const {merge} =require('webpack-merge')
const commonConfig=require('./webpack.common.js')

module.exports=(enVars)=>{
const {env}=enVars
const envconfig=require(`./webpack.${env}.js`)
const config=merge(commonConfig,envconfig)
return config
}