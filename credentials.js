const allowedOrigins = ['http://localhost:3000'];

exports.credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

exports.corsOptions = {
    origin:'http://localhost:3000',
    optionsSuccessstatus:200
}