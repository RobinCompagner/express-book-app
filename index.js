import './middleware/instrument.js'
import * as Sentry from '@sentry/node';
import express from 'express'
import booksRouter from './routes/books.js'
import recordsRouter from './routes/records.js'
import loginRouter from './routes/login.js'
import log from './middleware/logMiddleware.js'
import 'dotenv/config';

const app = express();

// RequestHandler creates a separate execution context for each request
//app.use(Sentry.Handlers.requestHandler());

// Configure middleware and routing
app.use(express.json());
app.use(log);

// All controllers (routers) should live here
app.use('/books', booksRouter);
app.use('/records', recordsRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
//app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
//app.use(Sentry.Handlers.tracingHandler());

// The error handler must be before any other error middleware and after all controllers
//app.use(Sentry.Handlers.errorHandler());

//app.use(errorHandler);

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });


// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})