const config={
    production :{
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://handHoldingSolution:proudsrmite@123@cluster0.6jf9f.mongodb.net/annexure?retryWrites=true&w=majority'
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://handHoldingSolution:proudsrmite@123@cluster0.6jf9f.mongodb.net/annexure?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
   // console.log(config[env] || config.default)
    return config[env] || config.default
    
}