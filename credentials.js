const allowedOrigins = ['https://resorse-hub-client.onrender.com'];

exports.credentials = (req, res, next) =>{
    const origin = req.headers.origin;
    console.log(origin);
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', 'https://resorse-hub-client.onrender.com');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

exports.corsOptions = {
    origin:'https://resorse-hub-client.onrender.com',
    optionsSuccessstatus:200
}
